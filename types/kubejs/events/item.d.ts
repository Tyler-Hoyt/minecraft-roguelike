// KubeJS 7 — ItemEvents type stubs

interface ItemKubeEvent {
  readonly item: ItemStack;
  readonly player: Player;
  readonly level: ServerLevel;
}

// Merges with ProbeJS's generated ItemEvents namespace
namespace ItemEvents {
  function rightClicked(target: ResourceLocation, handler: (event: ItemKubeEvent) => void): void;
  function leftClicked(target: ResourceLocation, handler: (event: ItemKubeEvent) => void): void;
  function entityInteracted(target: ResourceLocation, handler: (event: ItemKubeEvent & { readonly entity: unknown }) => void): void;
  function tooltip(target: ResourceLocation, handler: (event: { readonly item: ItemStack; addTooltip(text: TextComponent): void }) => void): void;
}
