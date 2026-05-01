// KubeJS 7 — ClientEvents type stubs

interface ClientKubeEvent {
  // marker
}

// Merges with ProbeJS's generated ClientEvents namespace
namespace ClientEvents {
  function init(handler: (event: ClientKubeEvent) => void): void;
  function loggedIn(handler: (event: ClientKubeEvent) => void): void;
  function loggedOut(handler: (event: ClientKubeEvent) => void): void;
  function tick(handler: (event: ClientKubeEvent) => void): void;
}
