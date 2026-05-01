// KubeJS 7 — StartupEvents type stubs

// ── Registry event (startup-side) ────────────────────────────────────────────

interface RegistryKubeEvent {
  create(id: ResourceLocation, props?: Record<string, unknown>): void;
}

// ── Startup lifecycle ─────────────────────────────────────────────────────────

interface KubeStartupEvent {
  // marker — no extra fields at startup time
}

// ── StartupEvents interface ───────────────────────────────────────────────────

interface StartupEvents {
  init: EventHandler<KubeStartupEvent>;
  postInit: EventHandler<KubeStartupEvent>;
  registry: TargetedEventHandler<ResourceKey, RegistryKubeEvent>;
}

declare const StartupEvents: StartupEvents;
