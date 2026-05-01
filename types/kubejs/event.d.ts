// Helpers used by all event registry interfaces

/** An event handler with no target filter */
type EventHandler<E> = (callback: (event: E) => void) => void;

/** An event handler that can optionally be scoped to a target string (e.g. registry key) */
type TargetedEventHandler<K, E> = {
  (callback: (event: E) => void): void;
  (target: K, callback: (event: E) => void): void;
};
