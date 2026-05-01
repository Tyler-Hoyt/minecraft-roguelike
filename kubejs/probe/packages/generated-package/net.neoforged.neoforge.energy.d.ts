declare module "net.neoforged.neoforge.energy.IEnergyStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEnergyStorage$$Interface {
get "maxEnergyStored"(): integer
get "energyStored"(): integer
}

export class $IEnergyStorage implements $IEnergyStorage$$Interface {
 "getMaxEnergyStored"(): integer
 "getEnergyStored"(): integer
 "canReceive"(): boolean
 "canExtract"(): boolean
 "receiveEnergy"(arg0: integer, arg1: boolean): integer
 "extractEnergy"(arg0: integer, arg1: boolean): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyStorage$$Type = ($IEnergyStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnergyStorage$$Original = $IEnergyStorage;}
