// KubeJS 7 — PlayerEvents type stubs

interface PlayerKubeEvent {
  readonly player: Player;
  readonly level: ServerLevel;
}

interface PlayerEvents {
  loggedIn: EventHandler<PlayerKubeEvent>;
  loggedOut: EventHandler<PlayerKubeEvent>;
  respawned: EventHandler<PlayerKubeEvent>;
  tick: EventHandler<PlayerKubeEvent>;
  chat: EventHandler<PlayerKubeEvent & { readonly message: string; cancel(): void }>;
  attacked: TargetedEventHandler<ResourceLocation, PlayerKubeEvent & { damage: number }>;
}

declare const PlayerEvents: PlayerEvents;
