declare module "vazkii.patchouli.common.book.Book" {
import {$Map} from "java.util.Map"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$XplatModContainer, $XplatModContainer$$Type} from "vazkii.patchouli.xplat.XplatModContainer"
import {$BookIcon} from "vazkii.patchouli.client.book.BookIcon"
import {$BookContents} from "vazkii.patchouli.client.book.BookContents"
import {$Style} from "net.minecraft.network.chat.Style"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$PatchouliConfigAccess$TextOverflowMode} from "vazkii.patchouli.api.PatchouliConfigAccess$TextOverflowMode"

export class $Book {
readonly "isPamphlet": boolean
readonly "creativeTab": $ResourceLocation
readonly "showProgress": boolean
readonly "landingText": StringJS
readonly "nameplateColor": integer
readonly "fillerTexture": $ResourceLocation
readonly "headerColor": integer
readonly "bookTexture": $ResourceLocation
readonly "model": $ResourceLocation
readonly "id": $ResourceLocation
readonly "showToasts": boolean
readonly "overflowMode": $PatchouliConfigAccess$TextOverflowMode
readonly "owner": $XplatModContainer
readonly "pauseGame": boolean
readonly "macros": $Map<(StringJS), (StringJS)>
readonly "isExternal": boolean
readonly "openSound": $ResourceLocation
readonly "useBlockyFont": boolean
readonly "advancementsTab": $ResourceLocation
readonly "linkColor": integer
readonly "progressBarColor": integer
readonly "textColor": integer
readonly "version": StringJS
readonly "i18n": boolean
readonly "flipSound": $ResourceLocation
readonly "subtitle": StringJS
readonly "progressBarBackground": integer
readonly "name": StringJS
readonly "indexIconRaw": StringJS
readonly "linkHoverColor": integer
readonly "noBook": boolean
readonly "craftingTexture": $ResourceLocation

constructor(arg0: $JsonObject$$Type, arg1: $XplatModContainer$$Type, arg2: $ResourceLocation$$Type, arg3: boolean)

public "getContents"(): $BookContents
public "popUpdated"(): boolean
public "markUpdated"(): void
public "advancementsEnabled"(): boolean
public "getIcon"(): $BookIcon
public "reloadContents"(arg0: $Level$$Type, arg1: boolean): void
public "getBookItem"(): $ItemStack
public "reloadLocks"(arg0: boolean): void
public "getFontStyle"(): $Style
public "getOwnerName"(): StringJS
public "getSubtitle"(): $MutableComponent
get "contents"(): $BookContents
get "icon"(): $BookIcon
get "bookItem"(): $ItemStack
get "fontStyle"(): $Style
get "ownerName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Book$$Type = ($Book);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Book$$Original = $Book;}
