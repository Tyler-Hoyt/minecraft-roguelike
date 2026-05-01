// build.mjs — esbuild pipeline for KubeJS scripts
// Compiles TypeScript source → kubejs/*_scripts/ directories.
//
// KubeJS cannot resolve ESM imports at runtime (GraalJS/Rhino), so esbuild
// bundles each entry file into a single self-contained JS file.

import { build, context } from 'esbuild';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { resolve, basename, extname } from 'path';

const isWatch = process.argv.includes('--watch');

const TARGETS = [
  { src: 'src/startup', out: 'kubejs/startup_scripts' },
  { src: 'src/server',  out: 'kubejs/server_scripts'  },
  { src: 'src/client',  out: 'kubejs/client_scripts'  },
];

/** Collect all .ts entry files from a directory (non-recursive) */
function entryPoints(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(f => f.endsWith('.ts') && !f.endsWith('.d.ts'))
    .map(f => resolve(dir, f));
}

const buildOptions = TARGETS.flatMap(({ src, out }) => {
  const entries = entryPoints(src);
  if (entries.length === 0) return [];

  mkdirSync(out, { recursive: true });

  return entries.map(entry => ({
    entryPoints: [entry],
    outfile: `${out}/${basename(entry, extname(entry))}.js`,
    bundle: true,
    platform: 'neutral',
    // KubeJS 7 runs on GraalJS (ES2022 support), targeting ES2015 for safety
    target: 'es2015',
    format: 'iife',
    // Do not minify — KubeJS scripts are dev artifacts
    minify: false,
    // GraalJS does not have process/Buffer/etc
    define: {},
    // Suppress the 'iife' + top-level await warning
    logLevel: 'info',
  }));
});

if (buildOptions.length === 0) {
  console.log('No source files found. Add .ts files to src/startup/, src/server/, or src/client/.');
  process.exit(0);
}

if (isWatch) {
  const ctxs = await Promise.all(buildOptions.map(opts => context(opts)));
  await Promise.all(ctxs.map(ctx => ctx.watch()));
  console.log('Watching for changes...');
} else {
  await Promise.all(buildOptions.map(opts => build(opts)));
  console.log('Build complete.');
}
