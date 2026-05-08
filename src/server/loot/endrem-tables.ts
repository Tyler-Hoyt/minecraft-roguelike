function removeCustomEyes(event: any): void {
  event.addTableModifier(LootType.CHEST)
    .removeLoot("endrem:black_eye")
    .removeLoot("endrem:cold_eye")
    .removeLoot("endrem:corrupted_eye")
    .removeLoot("endrem:lost_eye")
    .removeLoot("endrem:nether_eye")
    .removeLoot("endrem:old_eye")
    .removeLoot("endrem:rogue_eye")
    .removeLoot("endrem:cursed_eye")
    .removeLoot("endrem:magical_eye");
}

LootJS.modifiers(removeCustomEyes);
