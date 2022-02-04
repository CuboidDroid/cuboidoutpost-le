// priority: 0

onEvent('recipes', e => {

    // creative ability slot
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "BN-NB",
        "NaHbN",
        "-M*M-",
        "NchdN",
        "BN-NB",
      ],
      "key": {
        "a": { "item": "tconstruct:earth_slime_crystal" },
        "b": { "item": "tconstruct:sky_slime_crystal" },
        "c": { "item": "tconstruct:ender_slime_crystal" },
        "d": { "item": "tconstruct:ichor_slime_crystal" },
        "h": { "item": "tconstruct:enderman_head" },
        "H": { "item": "tconstruct:drowned_head" },
        "M": { "item": "tconstruct:manyullyn_block" },
        "N": { "item": "tconstruct:nahuatl" },
        "B": { "item": "tconstruct:blazewood" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" }
      },
      "result": {
        "type": "forge:nbt",
        "item": "tconstruct:creative_slot",
        "nbt": '{slot: "abilities"}'
      }
    })

    // creative upgrade slot
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "NN-NN",
        "NaHbN",
        "-M*M-",
        "NchdN",
        "NN-NN",
      ],
      "key": {
        "a": { "item": "tconstruct:earth_slime_crystal" },
        "b": { "item": "tconstruct:sky_slime_crystal" },
        "c": { "item": "tconstruct:ender_slime_crystal" },
        "d": { "item": "tconstruct:ichor_slime_crystal" },
        "h": { "item": "tconstruct:blaze_head" },
        "H": { "item": "tconstruct:cave_spider_head" },
        "M": { "item": "tconstruct:manyullyn_block" },
        "N": { "item": "tconstruct:blazewood" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" }
      },
      "result": {
        "type": "forge:nbt",
        "item": "tconstruct:creative_slot",
        "nbt": '{slot: "upgrades"}'
      }
    })

})