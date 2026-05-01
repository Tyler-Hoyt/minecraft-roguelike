declare module "appeng.core.settings.TickRates" {
import {$Enum} from "java.lang.Enum"

export class $TickRates extends $Enum<($TickRates)> {
static readonly "ExportBus": $TickRates
static readonly "METunnel": $TickRates
static readonly "IOPort": $TickRates
static readonly "ItemTunnel": $TickRates
static readonly "ImportBus": $TickRates
static readonly "Inscriber": $TickRates
static readonly "Charger": $TickRates
static readonly "LightTunnel": $TickRates
static readonly "VibrationChamber": $TickRates
static readonly "Interface": $TickRates
static readonly "StorageBus": $TickRates
static readonly "AnnihilationPlane": $TickRates

public static "values"(): ($TickRates)[]
public static "valueOf"(arg0: StringJS): $TickRates
public "getMin"(): integer
public "getMax"(): integer
public "setMin"(arg0: integer): void
public "setMax"(arg0: integer): void
public "getDefaultMax"(): integer
public "getDefaultMin"(): integer
get "min"(): integer
get "max"(): integer
set "min"(value: integer)
set "max"(value: integer)
get "defaultMax"(): integer
get "defaultMin"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickRates$$Type = (("interface") | ("importbus") | ("exportbus") | ("annihilationplane") | ("metunnel") | ("inscriber") | ("charger") | ("ioport") | ("vibrationchamber") | ("storagebus") | ("itemtunnel") | ("lighttunnel"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickRates$$Original = $TickRates;}
