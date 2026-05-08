BlockEvents.modification((event: BlockModificationKubeEvent) => {
  event.modify("minecraft:spawner", (block) => {
    block.destroySpeed = 80;
    block.explosionResistance = 100;
  });
})
