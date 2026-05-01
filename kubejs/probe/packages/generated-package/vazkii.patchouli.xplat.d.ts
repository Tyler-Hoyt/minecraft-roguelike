declare module "vazkii.patchouli.xplat.XplatModContainer" {
import {$List} from "java.util.List"
import {$Path} from "java.nio.file.Path"

export interface $XplatModContainer$$Interface {
get "name"(): StringJS
get "id"(): StringJS
get "rootPaths"(): $List<($Path)>
}

export class $XplatModContainer implements $XplatModContainer$$Interface {
 "getName"(): StringJS
 "getId"(): StringJS
 "getPath"(arg0: StringJS): $Path
 "getRootPaths"(): $List<($Path)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XplatModContainer$$Type = ($XplatModContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $XplatModContainer$$Original = $XplatModContainer;}
