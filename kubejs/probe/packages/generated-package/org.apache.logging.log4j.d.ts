declare module "org.apache.logging.log4j.util.TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer$$Interface<K, V, S> {

(k: K, v: V, s: S): void
}

export class $TriConsumer<K, V, S> implements $TriConsumer$$Interface {
 "accept"(k: K, v: V, s: S): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$$Type<K, V, S> = ((k: K, v: V, s: S) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TriConsumer$$Original<K, V, S> = $TriConsumer<(K), (V), (S)>;}
