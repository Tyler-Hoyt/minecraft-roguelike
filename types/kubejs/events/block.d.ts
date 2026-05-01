// KubeJS 7 — BlockEvents type stubs

// Minimal fallback player type — $ServerPlayerKJS$$Interface takes precedence when ProbeJS is present
interface Player {
  readonly persistentData: NbtCompound;
  tell(message: TextComponent): void;
  readonly level: { readonly dimension: ResourceLocation };
}

interface BlockKubeEvent {
  readonly block: BlockState;
  readonly pos: BlockPos;
  readonly level: ServerLevel;
  readonly player: Player | null;
}

// Merges with ProbeJS's generated BlockEvents namespace
namespace BlockEvents {
  function broken(target: ResourceLocation, handler: (event: BlockKubeEvent) => void): void;
  function placed(target: ResourceLocation, handler: (event: BlockKubeEvent) => void): void;
  function rightClicked(target: ResourceLocation, handler: (event: BlockKubeEvent) => void): void;
  function leftClicked(target: ResourceLocation, handler: (event: BlockKubeEvent) => void): void;
}
