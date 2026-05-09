const armorProgression = [
  // Overworld
  ["minecraft:iron", "minecraft:iron_ingot", "minecraft:leather"],
  ["minecraft:golden", "minecraft:gold_ingot", "minecraft:leather"],
  ["minecraft:diamond", "minecraft:diamond", "minecraft:iron"],

  // Undergarden
  ["undergarden:cloggrum", "undergarden:cloggrum_ingot", "minecraft:leather"],
  [
    "undergarden:froststeel",
    "undergarden:froststeel_ingot",
    "undergarden:cloggrum",
  ],
  [
    "undergarden:utherium",
    "undergarden:utherium_crystal",
    "undergarden:cloggrum",
  ],
];

const armorPieces = [
  { slot: "helmet", pattern: ["ABA", "A A", "   "] },
  { slot: "chestplate", pattern: ["A A", "ABA", "AAA"] },
  { slot: "leggings", pattern: ["ABA", "A A", "A A"] },
  { slot: "boots", pattern: ["ABA", "   ", "   "] },
];

function registerArmorRecipes(event: RecipesKubeEvent): void {
  /* Armor Progression System */
  armorProgression.forEach((tier) => {
    let [output, material, base] = tier;

    armorPieces.forEach((piece) => {
      let outputItem = `${output}_${piece.slot}`;
      let baseItem = `${base}_${piece.slot}`;

      // Check if the items actually exist to prevent errors if a mod is missing
      if (Item.exists(outputItem) && Item.exists(baseItem)) {
        // Remove existing recipe
        event.remove({ output: outputItem });

        // Add new progressive recipe
        event
          .shaped(Item.of(outputItem), piece.pattern, {
            A: material as string,
            B: baseItem as string,
          })
          .modifyResult((grid, result) => {
            const item = grid.find(baseItem);
            result.customData = item.customData;
            return result;
          });
      }
    });
  });
}

ServerEvents.recipes(registerArmorRecipes);
