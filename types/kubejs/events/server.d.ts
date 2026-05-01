// KubeJS 7 — ServerEvents type stubs

// ── Recipe event ────────────────────────────────────────────────────────────

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
  /** Remove recipes matching the filter */
  remove(filter: RecipeFilter): void;
  /** Replace an ingredient in all matching recipes */
  replaceInput(filter: RecipeFilter, original: Ingredient, replacement: Ingredient): void;
  /** Replace an output in all matching recipes */
  replaceOutput(filter: RecipeFilter, original: Ingredient, replacement: Ingredient): void;
  /** Add a shaped crafting recipe */
  shaped(output: RecipeOutput, pattern: string[], keys: ShapedPattern): void;
  /** Add a shapeless crafting recipe */
  shapeless(output: RecipeOutput, inputs: Ingredient[]): void;
  /** Add a smelting recipe */
  smelting(output: RecipeOutput, input: Ingredient, xp?: number, time?: number): void;
  /** Add a blasting recipe */
  blasting(output: RecipeOutput, input: Ingredient, xp?: number, time?: number): void;
  /** Add a smoking recipe */
  smoking(output: RecipeOutput, input: Ingredient, xp?: number, time?: number): void;
  /** Add a campfire cooking recipe */
  campfireCooking(output: RecipeOutput, input: Ingredient, xp?: number, time?: number): void;
  /** Add a stonecutting recipe */
  stonecutting(output: RecipeOutput, input: Ingredient): void;
  /** Add a smithing table upgrade recipe */
  smithing(output: RecipeOutput, base: Ingredient, addition: Ingredient): void;
  /** Raw recipe addition by type */
  custom(json: Record<string, unknown>): void;
}

// ── Tag event ────────────────────────────────────────────────────────────────

interface TagKubeEvent {
  add(tag: string, ...entries: ResourceLocation[]): void;
  remove(tag: string, ...entries: ResourceLocation[]): void;
  removeAll(tag: string): void;
}

// ── Server lifecycle ─────────────────────────────────────────────────────────

interface ServerKubeEvent {
  readonly server: MinecraftServer;
}

interface MinecraftServer {
  readonly overworld: ServerLevel;
}

interface ServerLevel {
  readonly dimensionKey: ResourceLocation;
}

// ── Command events ────────────────────────────────────────────────────────────

interface BasicCommandKubeEvent {
  readonly player: unknown;
  readonly args: string[];
}

// ── Registry event (server-side) ──────────────────────────────────────────────

interface ServerRegistryKubeEvent {
  create(id: ResourceLocation, props?: Record<string, unknown>): void;
}

// ── ServerEvents interface ────────────────────────────────────────────────────

interface ServerEvents {
  recipes: EventHandler<RecipesKubeEvent>;
  tags: TargetedEventHandler<ResourceLocation, TagKubeEvent>;
  loaded: EventHandler<ServerKubeEvent>;
  unloaded: EventHandler<ServerKubeEvent>;
  tick: EventHandler<ServerKubeEvent>;
  registry: TargetedEventHandler<ResourceKey, ServerRegistryKubeEvent>;
  basicCommand: TargetedEventHandler<string, BasicCommandKubeEvent>;
}

declare const ServerEvents: ServerEvents;
