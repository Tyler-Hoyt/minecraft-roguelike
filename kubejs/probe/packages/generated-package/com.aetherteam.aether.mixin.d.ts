declare module "com.aetherteam.aether.mixin.mixins.common.accessor.BeeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BeeAccessor$$Interface {
}

export class $BeeAccessor implements $BeeAccessor$$Interface {
 "callIsHiveValid"(): boolean
 "callGetCropsGrownSincePollination"(): integer
 "callIncrementNumCropsGrownSincePollination"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeAccessor$$Type = ($BeeAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BeeAccessor$$Original = $BeeAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.BaseSpawnerAccessor" {
import {$SpawnData, $SpawnData$$Type} from "net.minecraft.world.level.SpawnData"

export interface $BaseSpawnerAccessor$$Interface {

(): $SpawnData$$Type
}

export class $BaseSpawnerAccessor implements $BaseSpawnerAccessor$$Interface {
 "aether$getNextSpawnData"(): $SpawnData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseSpawnerAccessor$$Type = (() => $SpawnData$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseSpawnerAccessor$$Original = $BaseSpawnerAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.client.accessor.LevelRendererAccessor" {
import {$VertexBuffer, $VertexBuffer$$Type} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MeshData} from "com.mojang.blaze3d.vertex.MeshData"
import {$CloudStatus, $CloudStatus$$Type} from "net.minecraft.client.CloudStatus"
import {$Tesselator$$Type} from "com.mojang.blaze3d.vertex.Tesselator"

export interface $LevelRendererAccessor$$Interface {
}

export class $LevelRendererAccessor implements $LevelRendererAccessor$$Interface {
 "callBuildClouds"(arg0: $Tesselator$$Type, arg1: double, arg2: double, arg3: double, arg4: $Vec3$$Type): $MeshData
 "aether$setPrevCloudsType"(arg0: $CloudStatus$$Type): void
 "aether$getSkyBuffer"(): $VertexBuffer
 "aether$getPrevCloudsType"(): $CloudStatus
 "aether$setCloudBuffer"(arg0: $VertexBuffer$$Type): void
 "aether$getCloudBuffer"(): $VertexBuffer
 "aether$setGenerateClouds"(arg0: boolean): void
 "aether$isGenerateClouds"(): boolean
 "aether$getStarBuffer"(): $VertexBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$$Type = ($LevelRendererAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelRendererAccessor$$Original = $LevelRendererAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.client.accessor.PlayerModelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerModelAccessor$$Interface {

(): boolean
}

export class $PlayerModelAccessor implements $PlayerModelAccessor$$Interface {
 "aether$getSlim"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerModelAccessor$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerModelAccessor$$Original = $PlayerModelAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.client.accessor.BossHealthOverlayAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$LerpingBossEvent, $LerpingBossEvent$$Type} from "net.minecraft.client.gui.components.LerpingBossEvent"

export interface $BossHealthOverlayAccessor$$Interface {

(): $Map$$Type<($UUID$$Type), ($LerpingBossEvent$$Type)>
get "events"(): $Map<($UUID), ($LerpingBossEvent)>
}

export class $BossHealthOverlayAccessor implements $BossHealthOverlayAccessor$$Interface {
 "getEvents"(): $Map<($UUID), ($LerpingBossEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BossHealthOverlayAccessor$$Type = (() => $Map$$Type<($UUID$$Type), ($LerpingBossEvent$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BossHealthOverlayAccessor$$Original = $BossHealthOverlayAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.client.accessor.ButtonAccessor" {
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"

export interface $ButtonAccessor$$Interface {

(): $MutableComponent$$Type
}

export class $ButtonAccessor implements $ButtonAccessor$$Interface {
 "callCreateNarrationMessage"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonAccessor$$Type = (() => $MutableComponent$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ButtonAccessor$$Original = $ButtonAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.FireBlockAccessor" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $FireBlockAccessor$$Interface {

(arg0: $Block, arg1: integer, arg2: integer): void
}

export class $FireBlockAccessor implements $FireBlockAccessor$$Interface {
 "callSetFlammable"(arg0: $Block$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireBlockAccessor$$Type = ((arg0: $Block, arg1: integer, arg2: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireBlockAccessor$$Original = $FireBlockAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.BoatAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BoatAccessor$$Interface {
}

export class $BoatAccessor implements $BoatAccessor$$Interface {
 "aether$getDeltaRotation"(): float
 "aether$setDeltaRotation"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoatAccessor$$Type = ($BoatAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BoatAccessor$$Original = $BoatAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.client.accessor.GuiAccessor" {
import {$RandomSource} from "net.minecraft.util.RandomSource"

export interface $GuiAccessor$$Interface {
}

export class $GuiAccessor implements $GuiAccessor$$Interface {
 "aether$getRandom"(): $RandomSource
 "aether$getHealthBlinkTime"(): long
 "aether$getLastHealthTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiAccessor$$Type = ($GuiAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiAccessor$$Original = $GuiAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.client.accessor.AbstractWidgetAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractWidgetAccessor$$Interface {

(): float
}

export class $AbstractWidgetAccessor implements $AbstractWidgetAccessor$$Interface {
 "aether$getAlpha"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractWidgetAccessor$$Type = (() => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractWidgetAccessor$$Original = $AbstractWidgetAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.CraftingMenuAccessor" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$CraftingContainer$$Type} from "net.minecraft.world.inventory.CraftingContainer"
import {$ResultContainer$$Type} from "net.minecraft.world.inventory.ResultContainer"

export interface $CraftingMenuAccessor$$Interface {
}

export class $CraftingMenuAccessor implements $CraftingMenuAccessor$$Interface {
static "callSlotChangedCraftingGrid"(arg0: $AbstractContainerMenu$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $CraftingContainer$$Type, arg4: $ResultContainer$$Type, arg5: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingMenuAccessor$$Type = ($CraftingMenuAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingMenuAccessor$$Original = $CraftingMenuAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.HoeItemAccessor" {
import {$Map} from "java.util.Map"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$UseOnContext} from "net.minecraft.world.item.context.UseOnContext"
import {$Consumer} from "java.util.function.Consumer"

export interface $HoeItemAccessor$$Interface {
}

export class $HoeItemAccessor implements $HoeItemAccessor$$Interface {
static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoeItemAccessor$$Type = ($HoeItemAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HoeItemAccessor$$Original = $HoeItemAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.SpreadingSnowyDirtBlockAccessor" {
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $SpreadingSnowyDirtBlockAccessor$$Interface {
}

export class $SpreadingSnowyDirtBlockAccessor implements $SpreadingSnowyDirtBlockAccessor$$Interface {
static "callCanPropagate"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
static "callCanBeGrass"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpreadingSnowyDirtBlockAccessor$$Type = ($SpreadingSnowyDirtBlockAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpreadingSnowyDirtBlockAccessor$$Original = $SpreadingSnowyDirtBlockAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.ChunkAccessAccessor" {
import {$NoiseChunk, $NoiseChunk$$Type} from "net.minecraft.world.level.levelgen.NoiseChunk"

export interface $ChunkAccessAccessor$$Interface {

(): $NoiseChunk$$Type
}

export class $ChunkAccessAccessor implements $ChunkAccessAccessor$$Interface {
 "aether$getNoiseChunk"(): $NoiseChunk
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkAccessAccessor$$Type = (() => $NoiseChunk$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkAccessAccessor$$Original = $ChunkAccessAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.ZombifiedPiglinAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ZombifiedPiglinAccessor$$Interface {

(): void
}

export class $ZombifiedPiglinAccessor implements $ZombifiedPiglinAccessor$$Interface {
 "callAlertOthers"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZombifiedPiglinAccessor$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZombifiedPiglinAccessor$$Original = $ZombifiedPiglinAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.BushBlockAccessor" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BushBlockAccessor$$Interface {

(arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos): boolean
}

export class $BushBlockAccessor implements $BushBlockAccessor$$Interface {
 "callMayPlaceOn"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BushBlockAccessor$$Type = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BushBlockAccessor$$Original = $BushBlockAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.client.accessor.ScreenAccessor" {
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$List, $List$$Type} from "java.util.List"

export interface $ScreenAccessor$$Interface {

(): $List$$Type<($NarratableEntry$$Type)>
}

export class $ScreenAccessor implements $ScreenAccessor$$Interface {
 "aether$getNarratables"(): $List<($NarratableEntry)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$$Type = (() => $List$$Type<($NarratableEntry$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenAccessor$$Original = $ScreenAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.LevelAccessor" {
import {$WritableLevelData, $WritableLevelData$$Type} from "net.minecraft.world.level.storage.WritableLevelData"

export interface $LevelAccessor$$Interface {
}

export class $LevelAccessor implements $LevelAccessor$$Interface {
 "aether$getLevelData"(): $WritableLevelData
 "aether$setLevelData"(arg0: $WritableLevelData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelAccessor$$Type = ($LevelAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelAccessor$$Original = $LevelAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.client.accessor.EntityRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityRendererAccessor$$Interface {
}

export class $EntityRendererAccessor implements $EntityRendererAccessor$$Interface {
 "aether$getShadowRadius"(): float
 "aether$setShadowRadius"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererAccessor$$Type = ($EntityRendererAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRendererAccessor$$Original = $EntityRendererAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.client.accessor.SoundEngineAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$SoundInstance, $SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$ChannelAccess$ChannelHandle, $ChannelAccess$ChannelHandle$$Type} from "net.minecraft.client.sounds.ChannelAccess$ChannelHandle"

export interface $SoundEngineAccessor$$Interface {

(): $Map$$Type<($SoundInstance$$Type), ($ChannelAccess$ChannelHandle$$Type)>
}

export class $SoundEngineAccessor implements $SoundEngineAccessor$$Interface {
 "aether$getInstanceToChannel"(): $Map<($SoundInstance), ($ChannelAccess$ChannelHandle)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEngineAccessor$$Type = (() => $Map$$Type<($SoundInstance$$Type), ($ChannelAccess$ChannelHandle$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundEngineAccessor$$Original = $SoundEngineAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.client.accessor.MinecraftAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecraftAccessor$$Interface {

(arg0: boolean): void
}

export class $MinecraftAccessor implements $MinecraftAccessor$$Interface {
 "aether$setIsLocalServer"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftAccessor$$Type = ((arg0: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftAccessor$$Original = $MinecraftAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.MinecraftServerAccessor" {
import {$LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"

export interface $MinecraftServerAccessor$$Interface {

(): $LevelStorageSource$LevelStorageAccess$$Type
}

export class $MinecraftServerAccessor implements $MinecraftServerAccessor$$Interface {
 "aether$getStorageSource"(): $LevelStorageSource$LevelStorageAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerAccessor$$Type = (() => $LevelStorageSource$LevelStorageAccess$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftServerAccessor$$Original = $MinecraftServerAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.AbstractFurnaceBlockEntityAccessor" {
import {$RecipeManager$CachedCheck} from "net.minecraft.world.item.crafting.RecipeManager$CachedCheck"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SingleRecipeInput} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AbstractCookingRecipe} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$AbstractFurnaceBlockEntity$$Type} from "net.minecraft.world.level.block.entity.AbstractFurnaceBlockEntity"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export interface $AbstractFurnaceBlockEntityAccessor$$Interface {
}

export class $AbstractFurnaceBlockEntityAccessor implements $AbstractFurnaceBlockEntityAccessor$$Interface {
 "callIsLit"(): boolean
 "aether$setCookingTotalTime"(arg0: integer): void
 "aether$getQuickCheck"(): $RecipeManager$CachedCheck<($SingleRecipeInput), ($AbstractCookingRecipe)>
static "callGetTotalCookTime"(arg0: $Level$$Type, arg1: $AbstractFurnaceBlockEntity$$Type): integer
 "aether$setCookingProgress"(arg0: integer): void
 "aether$setLitDuration"(arg0: integer): void
 "aether$getCookingProgress"(): integer
 "aether$getCookingTotalTime"(): integer
 "callGetBurnDuration"(arg0: $ItemStack$$Type): integer
static "callCanBurn"(arg0: $RegistryAccess$$Type, arg1: $RecipeHolder$$Type<(never)>, arg2: $NonNullList$$Type<($ItemStack$$Type)>, arg3: integer, arg4: $AbstractFurnaceBlockEntity$$Type): boolean
 "aether$getLitTime"(): integer
 "aether$getItems"(): $NonNullList<($ItemStack)>
 "aether$setLitTime"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFurnaceBlockEntityAccessor$$Type = ($AbstractFurnaceBlockEntityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractFurnaceBlockEntityAccessor$$Original = $AbstractFurnaceBlockEntityAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.PlayerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerAccessor$$Interface {

(arg0: float): void
}

export class $PlayerAccessor implements $PlayerAccessor$$Interface {
 "callHurtCurrentlyUsedShield"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAccessor$$Type = ((arg0: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerAccessor$$Original = $PlayerAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.ConcretePowderBlockAccessor" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ConcretePowderBlockAccessor$$Interface {

(): $Block$$Type
}

export class $ConcretePowderBlockAccessor implements $ConcretePowderBlockAccessor$$Interface {
static "callShouldSolidify"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
 "aether$getConcrete"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcretePowderBlockAccessor$$Type = (() => $Block$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConcretePowderBlockAccessor$$Original = $ConcretePowderBlockAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.client.accessor.BlockColorsAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"

export interface $BlockColorsAccessor$$Interface {

(): $Map$$Type<($Block$$Type), ($BlockColor$$Type)>
}

export class $BlockColorsAccessor implements $BlockColorsAccessor$$Interface {
 "aether$getBlockColors"(): $Map<($Block), ($BlockColor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsAccessor$$Type = (() => $Map$$Type<($Block$$Type), ($BlockColor$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockColorsAccessor$$Original = $BlockColorsAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.ServerLevelAccessor" {
import {$ServerLevelData, $ServerLevelData$$Type} from "net.minecraft.world.level.storage.ServerLevelData"

export interface $ServerLevelAccessor$$Interface {
}

export class $ServerLevelAccessor implements $ServerLevelAccessor$$Interface {
 "aether$getServerLevelData"(): $ServerLevelData
 "aether$setServerLevelData"(arg0: $ServerLevelData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevelAccessor$$Type = ($ServerLevelAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLevelAccessor$$Original = $ServerLevelAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.client.accessor.HeartTypeAccessor" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Gui$HeartType} from "net.minecraft.client.gui.Gui$HeartType"

export interface $HeartTypeAccessor$$Interface {
}

export class $HeartTypeAccessor implements $HeartTypeAccessor$$Interface {
static "callForPlayer"(arg0: $Player$$Type): $Gui$HeartType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeartTypeAccessor$$Type = ($HeartTypeAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeartTypeAccessor$$Original = $HeartTypeAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.AbstractContainerMenuAccessor" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export interface $AbstractContainerMenuAccessor$$Interface {
}

export class $AbstractContainerMenuAccessor implements $AbstractContainerMenuAccessor$$Interface {
 "aether$getRemoteSlots"(): $NonNullList<($ItemStack)>
 "aether$setContainerId"(arg0: integer): void
 "aether$getLastSlots"(): $NonNullList<($ItemStack)>
 "aether$setMenuType"(arg0: $MenuType$$Type<(never)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenuAccessor$$Type = ($AbstractContainerMenuAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractContainerMenuAccessor$$Original = $AbstractContainerMenuAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.ServerGamePacketListenerImplAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerGamePacketListenerImplAccessor$$Interface {
}

export class $ServerGamePacketListenerImplAccessor implements $ServerGamePacketListenerImplAccessor$$Interface {
 "aether$setAboveGroundVehicleTickCount"(arg0: integer): void
 "aether$setAboveGroundTickCount"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerGamePacketListenerImplAccessor$$Type = ($ServerGamePacketListenerImplAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerGamePacketListenerImplAccessor$$Original = $ServerGamePacketListenerImplAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor$$Interface {

(): void
}

export class $LivingEntityAccessor implements $LivingEntityAccessor$$Interface {
 "callUpdateEffectVisibility"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityAccessor$$Original = $LivingEntityAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.EntityAccessor" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"

export interface $EntityAccessor$$Interface {

(): $RandomSource$$Type
}

export class $EntityAccessor implements $EntityAccessor$$Interface {
 "aether$getRandom"(): $RandomSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$$Type = (() => $RandomSource$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAccessor$$Original = $EntityAccessor;}
declare module "com.aetherteam.aether.mixin.mixins.common.accessor.StoredUserListAccessor" {
import {$StoredUserEntry} from "net.minecraft.server.players.StoredUserEntry"

export interface $StoredUserListAccessor$$Interface {

(arg0: K): boolean
}

export class $StoredUserListAccessor implements $StoredUserListAccessor$$Interface {
 "callContains"<K, V extends $StoredUserEntry<(object)>>(arg0: K): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoredUserListAccessor$$Type = ((arg0: K) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StoredUserListAccessor$$Original = $StoredUserListAccessor;}
