// tests/setup.ts
// Injects KubeJS runtime globals into the Node.js test environment.
// Scripts import and call ServerEvents.recipes(...) etc.; this file
// ensures those calls succeed without Minecraft running.

import { vi, beforeEach } from "vitest";

// ── Minimal KubeJS global stubs ──────────────────────────────────────────────

const makeEventHandler = () => vi.fn();
const makeTargetedEventHandler = () => vi.fn();

const ServerEvents = {
  recipes: makeEventHandler(),
  tags: makeTargetedEventHandler(),
  loaded: makeEventHandler(),
  unloaded: makeEventHandler(),
  tick: makeEventHandler(),
  registry: makeTargetedEventHandler(),
  basicCommand: makeTargetedEventHandler(),
};

const ClientEvents = {
  init: makeEventHandler(),
  loggedIn: makeEventHandler(),
  loggedOut: makeEventHandler(),
  tick: makeEventHandler(),
};

const StartupEvents = {
  init: makeEventHandler(),
  postInit: makeEventHandler(),
  registry: makeTargetedEventHandler(),
};

const BlockEvents = {
  broken: makeTargetedEventHandler(),
  placed: makeTargetedEventHandler(),
  rightClicked: makeTargetedEventHandler(),
  leftClicked: makeTargetedEventHandler(),
};

const ItemEvents = {
  rightClicked: makeTargetedEventHandler(),
  leftClicked: makeTargetedEventHandler(),
  entityInteracted: makeTargetedEventHandler(),
  tooltip: makeTargetedEventHandler(),
};

const PlayerEvents = {
  loggedIn: makeEventHandler(),
  loggedOut: makeEventHandler(),
  respawned: makeEventHandler(),
  tick: makeEventHandler(),
  chat: makeEventHandler(),
  attacked: makeTargetedEventHandler(),
};

const Item = {
  of: (id: string, count?: number) => ({ id, count: count ?? 1, nbt: null }),
  empty: () => ({ id: "minecraft:air", count: 0, nbt: null }),
};

const Block = {
  id: (id: string) => ({ id }),
};

const Fluid = {
  of: (id: string, amount?: number) => ({ fluid: id, amount: amount ?? 1000 }),
};

// ── Inject into globalThis so scripts can reference them ─────────────────────

Object.assign(globalThis, {
  ServerEvents,
  ClientEvents,
  StartupEvents,
  BlockEvents,
  ItemEvents,
  PlayerEvents,
  Item,
  Block,
  Fluid,
  SECOND: 1000,
  MINUTE: 60000,
  HOUR: 3600000,
  print: console.log,
  global: globalThis,
});

// Reset all mocks between tests so handlers don't bleed across files
beforeEach(() => {
  vi.clearAllMocks();
});

export {
  ServerEvents,
  ClientEvents,
  StartupEvents,
  BlockEvents,
  ItemEvents,
  PlayerEvents,
};
