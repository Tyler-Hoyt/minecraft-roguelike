// src/startup/index.ts
// Example startup script.

export function onInit(_e: KubeStartupEvent): void {
  console.log('[Roguelike] Startup init complete.');
}

StartupEvents.init(onInit);
