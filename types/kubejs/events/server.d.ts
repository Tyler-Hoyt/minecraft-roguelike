// KubeJS 7 — ServerEvents type stubs

interface RecipeFilter {
  output?: ResourceLocation | Ingredient;
  input?: ResourceLocation | Ingredient;
  id?: ResourceLocation;
  type?: ResourceLocation;
  mod?: string;
}

interface ShapedPattern {
  [key: string]: Ingredient;
}

interface RecipesKubeEvent {
  remove(filter: RecipeFilter): void;
  replaceInput(filter: RecipeFilter, original: Ingredient, replacement: Ingredient): void;
  replaceOutput(filter: RecipeFilter, original: Ingredient, replacement: Ingredient): void;
  shaped(output: RecipeOutput, pattern: string[], keys: ShapedPattern): void;
  shapeless(output: RecipeOutput, inputs: Ingredient[]): void;
  smelting(output: RecipeOutput, input: Ingredient, xp?: number, time?: number): void;
  blasting(output: RecipeOutput, input: Ingredient, xp?: number, time?: number): void;
  smoking(output: RecipeOutput, input: Ingredient, xp?: number, time?: number): void;
  campfireCooking(output: RecipeOutput, input: Ingredient, xp?: number, time?: number): void;
  stonecutting(output: RecipeOutput, input: Ingredient): void;
  smithing(output: RecipeOutput, base: Ingredient, addition: Ingredient): void;
  custom(json: Record<string, unknown>): void;
}

interface TagKubeEvent {
  add(tag: string, ...entries: ResourceLocation[]): void;
  remove(tag: string, ...entries: ResourceLocation[]): void;
  removeAll(tag: string): void;
}

interface ServerKubeEvent {
  readonly server: MinecraftServer;
}

interface ServerLevel {
  readonly dimensionKey: ResourceLocation;
  readonly dimension: ResourceLocation;
}

interface MinecraftServer {
  readonly overworld: ServerLevel;
}

interface BasicCommandKubeEvent {
  readonly player: $ServerPlayerKJS$$Interface;
  readonly input: string;  // single string — everything after the command name
}

interface ServerRegistryKubeEvent {
  create(id: ResourceLocation, props?: Record<string, unknown>): void;
}

// Merges with ProbeJS's generated ServerEvents namespace
namespace ServerEvents {
  function recipes(handler: (event: RecipesKubeEvent) => void): void;
  function tags(target: ResourceLocation, handler: (event: TagKubeEvent) => void): void;
  function tags(handler: (event: TagKubeEvent) => void): void;
  function loaded(handler: (event: ServerKubeEvent) => void): void;
  function unloaded(handler: (event: ServerKubeEvent) => void): void;
  function tick(handler: (event: ServerKubeEvent) => void): void;
  function registry(target: ResourceKey, handler: (event: ServerRegistryKubeEvent) => void): void;
  function basicCommand(target: string, handler: (event: BasicCommandKubeEvent) => void): void;
}
