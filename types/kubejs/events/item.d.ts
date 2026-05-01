// KubeJS 7 — ItemEvents type stubs

interface ItemKubeEvent {
  readonly item: ItemStack;
  readonly player: Player;
  readonly level: ServerLevel;
}

interface ItemEvents {
  rightClicked: TargetedEventHandler<ResourceLocation, ItemKubeEvent>;
  leftClicked: TargetedEventHandler<ResourceLocation, ItemKubeEvent>;
  entityInteracted: TargetedEventHandler<ResourceLocation, ItemKubeEvent & { readonly entity: unknown }>;
  tooltip: TargetedEventHandler<ResourceLocation, { readonly item: ItemStack; addTooltip(text: TextComponent): void }>;
}

declare const ItemEvents: ItemEvents;
