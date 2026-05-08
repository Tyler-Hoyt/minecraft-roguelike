export function registerSophisticatedStorageRecipes(event: RecipesKubeEvent): void {
  /* Sophisticated Storage */
  event.remove({ output: "sophisticatedstorage:jukebox_upgrade" });
  event.remove({ output: "sophisticatedstorage:advanced_jukebox_upgrade" });
  event.remove({ output: "sophisticatedstorage:storage_jukebox_upgrade_from_backpack_jukebox_upgrade" });
  event.remove({ output: "sophisticatedstorage:storage_advanced_jukebox_upgrade_from_backpack_advanced_jukebox_upgrade" });
  event.remove({ output: "sophisticatedstorage:backpack_jukebox_upgrade_from_storage_jukebox_upgrade" });
  event.remove({
    output: "sophisticatedstorage:backpack_advanced_jukebox_upgrade_from_storage_advanced_jukebox_upgrade"
  });
}

ServerEvents.recipes(registerSophisticatedStorageRecipes);
