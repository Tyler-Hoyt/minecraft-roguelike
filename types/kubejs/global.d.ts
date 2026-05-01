// KubeJS 7 — Global variable declarations
// These are injected by KubeJS at runtime; declared here for TypeScript.

declare const global: Record<string, unknown>;

declare const Item: ItemWrapperStatic;
declare const Block: BlockWrapperStatic;
declare const Fluid: FluidWrapperStatic;
declare const Ingredient: IngredientWrapperStatic;

declare const SECOND: 1000;
declare const MINUTE: 60000;
declare const HOUR: 3600000;

/** Load a Java class by fully-qualified name */
declare function Java(className: string): unknown;

/** Print to the KubeJS log */
declare function print(...args: unknown[]): void;

/** KubeJS console (also available via console.log in some versions) */
declare const console: {
  log(...args: unknown[]): void;
  warn(...args: unknown[]): void;
  error(...args: unknown[]): void;
};
