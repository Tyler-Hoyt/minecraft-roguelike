declare module "com.llamalad7.mixinextras.sugar.ref.LocalRef" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LocalRef$$Interface<T> {
}

export class $LocalRef<T> implements $LocalRef$$Interface {
 "get"(): T
 "set"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalRef$$Type<T> = ($LocalRef<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocalRef$$Original<T> = $LocalRef<(T)>;}
