import {$RegisterCodecEventJS} from "dev.uncandango.kubejstweaks.kubejs.kjs72.event.RegisterCodecEventJS"
import {$BlockModificationKubeEvent} from "dev.latvian.mods.kubejs.block.BlockModificationKubeEvent"
import {$CompatibilityEventJS} from "dev.uncandango.kubejstweaks.kubejs.event.CompatibilityEventJS"
import {$ItemModelPropertiesKubeEvent} from "dev.latvian.mods.kubejs.item.ItemModelPropertiesKubeEvent"
import {$MenuScreenRegistryKubeEvent} from "dev.latvian.mods.kubejs.client.MenuScreenRegistryKubeEvent"
import {$BlockEntityRendererRegistryKubeEvent} from "dev.latvian.mods.kubejs.client.BlockEntityRendererRegistryKubeEvent"
import {$ItemToolTierRegistryKubeEvent} from "dev.latvian.mods.kubejs.item.custom.ItemToolTierRegistryKubeEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$KubeStartupEvent} from "dev.latvian.mods.kubejs.event.KubeStartupEvent"
import {$SpellSelectionEventJS} from "com.squoshi.irons_spells_js.event.SpellSelectionEventJS"
import {$KeybindRegistryKubeEvent} from "dev.latvian.mods.kubejs.client.KeybindRegistryKubeEvent"
import {$ItemModificationKubeEvent} from "dev.latvian.mods.kubejs.item.ItemModificationKubeEvent"
import {$EntityRendererRegistryKubeEvent} from "dev.latvian.mods.kubejs.client.EntityRendererRegistryKubeEvent"
import {$CreativeTabKubeEvent} from "dev.latvian.mods.kubejs.item.creativetab.CreativeTabKubeEvent"

declare global {
export namespace KubeJSTweaks {
function schema(handler: (event: $RegisterCodecEventJS) => void): void
function checkCompatibility(handler: (event: $CompatibilityEventJS) => void): void
}
export namespace ItemEvents {
function modelProperties(handler: (event: $ItemModelPropertiesKubeEvent) => void): void
/**
 * Invoked after all items are registered to modify them.
 */
function modification(handler: (event: $ItemModificationKubeEvent) => void): void
/**
 * Invoked when the game is starting up and the item tool tiers are being registered.
 */
function toolTierRegistry(handler: (event: $ItemToolTierRegistryKubeEvent) => void): void
}
export namespace ISSEvents {
function spellSelection(handler: (event: $SpellSelectionEventJS) => void): void
}
export namespace KeyBindEvents {
function registry(handler: (event: $KeybindRegistryKubeEvent) => void): void
}
export namespace ClientEvents {
function blockEntityRendererRegistry(handler: (event: $BlockEntityRendererRegistryKubeEvent) => void): void
function menuScreenRegistry(handler: (event: $MenuScreenRegistryKubeEvent) => void): void
function entityRendererRegistry(handler: (event: $EntityRendererRegistryKubeEvent) => void): void
}
export namespace StartupEvents {
function init(handler: (event: $KubeStartupEvent) => void): void
function modifyCreativeTab(extra: $ResourceLocation$$Type, handler: (event: $CreativeTabKubeEvent) => void): void
function postInit(handler: (event: $KubeStartupEvent) => void): void
}
export namespace BlockEvents {
function modification(handler: (event: $BlockModificationKubeEvent) => void): void
}
}