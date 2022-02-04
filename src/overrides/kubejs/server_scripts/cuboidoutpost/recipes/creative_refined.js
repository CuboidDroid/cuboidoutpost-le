// priority: 0

onEvent('recipes', e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_controller (ie)
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "DDD",
          "D#D",
          "DDD"
        ],
        "key": {
          "D": { "item": "refinedstorage:controller" },
          "#": { "item": "immersiveengineering:capacitor_creative" }
        },
        "result": {
          "item": "refinedstorage:creative_controller"
        }
      })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_controller (mekanism)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "DDD",
        "D#D",
        "DDD"
      ],
      "key": {
        "D": { "item": "refinedstorage:controller" },
        "#": { "item": "mekanism:creative_energy_cube" }
      },
      "result": {
        "item": "refinedstorage:creative_controller"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_controller (powah)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "DDD",
        "D#D",
        "DDD"
      ],
      "key": {
        "D": { "item": "refinedstorage:controller" },
        "#": { "item": "powah:energy_cell_creative" }
      },
      "result": {
        "item": "refinedstorage:creative_controller"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_controller (thermal)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "DDD",
        "D#D",
        "DDD"
      ],
      "key": {
        "D": { "item": "refinedstorage:controller" },
        "#": { "item": "thermal:rf_coil_creative_augment" }
      },
      "result": {
        "item": "refinedstorage:creative_controller"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_storage_disk
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "#-------#",
        "-*t66Mt*-",
        "-t6tMt6t-",
        "-Mt6S6t6-",
        "-6MS#SM6-",
        "-6t6S6tM-",
        "-t6tMt6t-",
        "-*tM66t*-",
        "#-------#"
      ],
      "key": {
        "S": { "item": "storagedrawers:creative_storage_upgrade" },
        "M": { "item": "refinedstorage:crafter" },
        "6": { "item": "refinedstorage:64k_storage_disk" },
        "t": { "item": "refinedstorage:range_upgrade" },
        "#": { "item": "extendedcrafting:the_ultimate_block" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" }
    },
      "result": {
        "item": "refinedstorage:creative_storage_disk"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_storage_block
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "#-------#",
        "-*t66Mt*-",
        "-t6tMt6t-",
        "-Mt6S6t6-",
        "-6MS#SM6-",
        "-6t6S6tM-",
        "-t6tMt6t-",
        "-*tM66t*-",
        "#-------#"
      ],
      "key": {
        "S": { "item": "storagedrawers:creative_storage_upgrade" },
        "M": { "item": "refinedstorage:crafter" },
        "6": { "item": "refinedstorage:64k_storage_block" },
        "t": { "item": "refinedstorage:range_upgrade" },
        "#": { "item": "extendedcrafting:the_ultimate_block" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" }
    },
      "result": {
        "item": "refinedstorage:creative_storage_block"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_fluid_storage_disk
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "#-------#",
        "-*t66Mt*-",
        "-t6tMt6t-",
        "-Mt6S6t6-",
        "-6MS#SM6-",
        "-6t6S6tM-",
        "-t6tMt6t-",
        "-*tM66t*-",
        "#-------#"
      ],
      "key": {
        "S": { "item": "storagedrawers:creative_storage_upgrade" },
        "M": { "item": "refinedstorage:crafter" },
        "6": { "item": "refinedstorage:4096k_fluid_storage_disk" },
        "t": { "item": "refinedstorage:range_upgrade" },
        "#": { "item": "extendedcrafting:the_ultimate_block" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" }
    },
      "result": {
        "item": "refinedstorage:creative_fluid_storage_disk"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_fluid_storage_block
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "#-------#",
        "-*t66Mt*-",
        "-t6tMt6t-",
        "-Mt6S6t6-",
        "-6MS#SM6-",
        "-6t6S6tM-",
        "-t6tMt6t-",
        "-*tM66t*-",
        "#-------#"
      ],
      "key": {
        "S": { "item": "storagedrawers:creative_storage_upgrade" },
        "M": { "item": "refinedstorage:crafter" },
        "6": { "item": "refinedstorage:4096k_fluid_storage_block" },
        "t": { "item": "refinedstorage:range_upgrade" },
        "#": { "item": "extendedcrafting:the_ultimate_block" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" }
    },
      "result": {
        "item": "refinedstorage:creative_fluid_storage_block"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_wireless_grid (ie)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:wireless_grid" },
        "#": { "item": "immersiveengineering:capacitor_creative" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_wireless_grid"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_wireless_grid (mekanism)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:wireless_grid" },
        "#": { "item": "mekanism:creative_energy_cube" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_wireless_grid"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_wireless_grid (thermal)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:wireless_grid" },
        "#": { "item": "thermal:rf_coil_creative_augment" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_wireless_grid"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_wireless_grid (powah)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:wireless_grid" },
        "#": { "item": "powah:energy_cell_creative" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_wireless_grid"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_wireless_fluid_grid (ie)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:wireless_fluid_grid" },
        "#": { "item": "immersiveengineering:capacitor_creative" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_wireless_fluid_grid"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_wireless_fluid_grid (mekanism)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:wireless_fluid_grid" },
        "#": { "item": "mekanism:creative_energy_cube" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_wireless_fluid_grid"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_wireless_fluid_grid (thermal)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:wireless_fluid_grid" },
        "#": { "item": "thermal:rf_coil_creative_augment" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_wireless_fluid_grid"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_wireless_fluid_grid (powah)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:wireless_fluid_grid" },
        "#": { "item": "powah:energy_cell_creative" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_wireless_fluid_grid"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_wireless_crafting_monitor (ie)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:wireless_crafting_monitor" },
        "#": { "item": "immersiveengineering:capacitor_creative" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_wireless_crafting_monitor"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_wireless_crafting_monitor (mekanism)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:wireless_crafting_monitor" },
        "#": { "item": "mekanism:creative_energy_cube" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_wireless_crafting_monitor"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_wireless_crafting_monitor (thermal)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:wireless_crafting_monitor" },
        "#": { "item": "thermal:rf_coil_creative_augment" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_wireless_crafting_monitor"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_wireless_crafting_monitor (powah)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:wireless_crafting_monitor" },
        "#": { "item": "powah:energy_cell_creative" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_wireless_crafting_monitor"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_portable_grid (ie)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:portable_grid" },
        "#": { "item": "immersiveengineering:capacitor_creative" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_portable_grid"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_portable_grid (mekanism)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:portable_grid" },
        "#": { "item": "mekanism:creative_energy_cube" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_portable_grid"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_portable_grid (thermal)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:portable_grid" },
        "#": { "item": "thermal:rf_coil_creative_augment" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_portable_grid"
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // refinedstorage:creative_portable_grid (powah)
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "-G-",
        "-#-"
      ],
      "key": {
        "G": { "item": "refinedstorage:portable_grid" },
        "#": { "item": "powah:energy_cell_creative" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" }
    },
      "result": {
        "item": "refinedstorage:creative_portable_grid"
      }
    })

})