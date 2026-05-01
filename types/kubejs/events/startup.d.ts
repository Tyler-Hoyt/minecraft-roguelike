// KubeJS 7 — StartupEvents type stubs

interface RegistryKubeEvent {
  create(id: ResourceLocation, props?: Record<string, unknown>): void;
}

interface KubeStartupEvent {
  // marker
}

// Merges with ProbeJS's generated StartupEvents namespace
namespace StartupEvents {
  function init(handler: (event: KubeStartupEvent) => void): void;
  function postInit(handler: (event: KubeStartupEvent) => void): void;
  function registry(target: ResourceKey, handler: (event: RegistryKubeEvent) => void): void;
}
