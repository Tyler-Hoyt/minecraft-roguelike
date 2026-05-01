// KubeJS 7 — BlockEvents type stubs

interface BlockKubeEvent {
  readonly block: BlockState;
  readonly pos: BlockPos;
  readonly level: ServerLevel;
  readonly player: Player | null;
}

interface Player {
  readonly username: string;
  readonly uuid: string;
  readonly gameMode: 'survival' | 'creative' | 'adventure' | 'spectator';
  tell(message: TextComponent): void;
  give(item: ItemStack): void;
}

interface BlockEvents {
  broken: TargetedEventHandler<ResourceLocation, BlockKubeEvent>;
  placed: TargetedEventHandler<ResourceLocation, BlockKubeEvent>;
  rightClicked: TargetedEventHandler<ResourceLocation, BlockKubeEvent>;
  leftClicked: TargetedEventHandler<ResourceLocation, BlockKubeEvent>;
}

declare const BlockEvents: BlockEvents;
