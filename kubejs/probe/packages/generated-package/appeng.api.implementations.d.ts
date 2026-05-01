declare module "appeng.api.implementations.IPowerChannelState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPowerChannelState$$Interface {
get "active"(): boolean
get "powered"(): boolean
}

export class $IPowerChannelState implements $IPowerChannelState$$Interface {
 "isActive"(): boolean
 "isPowered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPowerChannelState$$Type = ($IPowerChannelState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPowerChannelState$$Original = $IPowerChannelState;}
