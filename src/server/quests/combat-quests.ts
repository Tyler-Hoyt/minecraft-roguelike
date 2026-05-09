// Combat task for dual wielding a weapon
FTBQuestsEvents.customTask("dual_wielding_check", (event) => {
  // Check every 20 ticks or 1 second
  event.setCheckTimer(20);
  event.setCheck((data, player) => {
    const isWeapon = (item: ItemStack) =>
      item.hasTag("c:tools/sword") || item.hasTag("c:tools/axes");

    if (isWeapon(player.mainHandItem) && isWeapon(player.offHandItem)) {
      data.addProgress(1);
    }
  });
});

FTBQuestsEvents.customTask("enchant_weapon_check", (event) => {
  // Check every 20 ticks or 1 second
  event.setCheckTimer(20);
  event.setCheck((data, player) => {
    if (!player.mainHandItem.enchantments.isEmpty()) {
      data.addProgress(1);
    }
  });
});
