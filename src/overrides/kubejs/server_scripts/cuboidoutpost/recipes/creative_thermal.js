// priority: 0

onEvent('recipes', e => {

    // thermal:fluid_tank_creative_augment
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "RRRRRRR",
        "RAAAAAR",
        "R-TPT-R",
        "R-T*T-R",
        "R-TpT-R",
        "RAAAAAR",
        "RRRRRRR"
      ],
      "key": {
        "T": { "item": "thermal:fluid_cell" },
        "R": { "item": "thermal:enderium_ingot" },
        "P": { "item": "thermal:device_water_gen" },
        "p": { "item": "thermal:fluid_tank_augment" },
        "A": { "item": "thermal:upgrade_augment_3" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" }
      },
      "result": {
        "item": "thermal:fluid_tank_creative_augment"
      }
    })

    // thermal:rf_coil_creative_augment
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "U-------U",
        "B  AAA  B",
        "B UUIUU B",
        "BAUacaUAB",
        "BAId*eIAB",
        "BAUbcbUAB",
        "B UUIUU B",
        "B  AAA  B",
        "U-------U"
      ],
      "key": {
        "U": { "item": "thermal:energy_cell" },
        "I": { "item": "thermal:rf_coil_augment" },
        "a": { "item": "thermal:dynamo_stirling" },
        "b": { "item": "thermal:dynamo_compression" },
        "c": { "item": "thermal:dynamo_magmatic" },
        "d": { "item": "thermal:dynamo_numismatic" },
        "e": { "item": "thermal:dynamo_lapidary" },
        "A": { "item": "thermal:upgrade_augment_3" },
        "B": { "item": "extendedcrafting:the_ultimate_block" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" }
      },
      "result": {
        "item": "thermal:rf_coil_creative_augment"
      }
    })

    // thermal:machine_efficiency_creative_augment
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "U-----U",
        "-  A  -",
        "- AIA -",
        "-AI*IA-",
        "- AIA -",
        "-  A  -",
        "U-----U"
      ],
      "key": {
        "U": { "item": "thermal:energy_cell" },
        "I": { "item": "thermal:machine_efficiency_augment" },
        "A": { "item": "thermal:upgrade_augment_3" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" }
      },
      "result": {
        "item": "thermal:machine_efficiency_creative_augment"
      }
    })

    // thermal:machine_catalyst_creative_augment
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "--A--",
        "-AIA-",
        "AI*IA",
        "-AIA-",
        "--A--"
      ],
      "key": {
        "I": { "item": "thermal:machine_efficiency_augment" },
        "A": { "item": "thermal:upgrade_augment_3" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" }
      },
      "result": {
        "item": "thermal:machine_catalyst_creative_augment"
      }
    })

})