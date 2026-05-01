// KubeJS 7 — PlayerEvents type stubs

interface PlayerKubeEvent {
  readonly player: $ServerPlayerKJS$$Interface;
  readonly level: $LevelKJS$$Interface;
}

// Merges with ProbeJS's generated PlayerEvents namespace
namespace PlayerEvents {
  function loggedIn(handler: (event: PlayerKubeEvent) => void): void;
  function loggedOut(handler: (event: PlayerKubeEvent) => void): void;
  function respawned(handler: (event: PlayerKubeEvent) => void): void;
  function tick(handler: (event: PlayerKubeEvent) => void): void;
  function chat(handler: (event: PlayerKubeEvent & { readonly message: string; cancel(): void }) => void): void;
  function attacked(target: ResourceLocation, handler: (event: PlayerKubeEvent & { damage: number }) => void): void;
}
