declare module "dev.tr7zw.entityculling.versionless.access.Cullable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Cullable$$Interface {
get "outOfCamera"(): boolean
set "outOfCamera"(value: boolean)
get "forcedVisible"(): boolean
set "culled"(value: boolean)
get "culled"(): boolean
get "timeout"(): void
}

export class $Cullable implements $Cullable$$Interface {
 "isOutOfCamera"(): boolean
 "setOutOfCamera"(arg0: boolean): void
 "isForcedVisible"(): boolean
 "setCulled"(arg0: boolean): void
 "isCulled"(): boolean
 "setTimeout"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cullable$$Type = ($Cullable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Cullable$$Original = $Cullable;}
