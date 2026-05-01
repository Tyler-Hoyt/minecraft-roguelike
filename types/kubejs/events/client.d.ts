// KubeJS 7 — ClientEvents type stubs

interface ClientKubeEvent {
  // marker
}

interface ClientEvents {
  init: EventHandler<ClientKubeEvent>;
  loggedIn: EventHandler<ClientKubeEvent>;
  loggedOut: EventHandler<ClientKubeEvent>;
  tick: EventHandler<ClientKubeEvent>;
}

declare const ClientEvents: ClientEvents;
