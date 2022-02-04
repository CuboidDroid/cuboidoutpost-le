// priority: 0

onEvent('recipes', e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // create:creative_motor
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "RRRRRRR",
          "RSSSSSR",
          "R-EsF-R",
          "R-E*F-R",
          "R-EsF-R",
          "RSSSSSR",
          "RRRRRRR"
        ],
        "key": {
          "E": { "item": "create:furnace_engine" },
          "F": { "item": "create:flywheel" },
          "R": { "item": "create:refined_radiance" },
          "S": { "item": "create:shadow_steel" },
          "s": { "item": "create:rotation_speed_controller" },
          "-": { "item": "extendedcrafting:the_ultimate_ingot" },
          "*": { "item": "extendedcrafting:ultimate_singularity" }
        },
        "result": {
          "item": "create:creative_motor"
        }
      })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // create:creative_fluid_tank
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "RRRRRRR",
          "RSSSSSR",
          "R-VsV-R",
          "R-P*p-R",
          "R-TsT-R",
          "RSSSSSR",
          "RRRRRRR"
        ],
        "key": {
          "V": { "item": "create:spout" },
          "P": { "item": "create:smart_fluid_pipe" },
          "p": { "item": "create:mechanical_pump" },
          "T": { "item": "create:fluid_tank" },
          "R": { "item": "create:refined_radiance" },
          "S": { "item": "create:shadow_steel" },
          "s": { "item": "create:portable_fluid_interface" },
          "-": { "item": "extendedcrafting:the_ultimate_ingot" },
          "*": { "item": "extendedcrafting:ultimate_singularity" }
        },
        "result": {
          "item": "create:creative_fluid_tank"
        }
      })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // create:creative_crate
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "-------",
          "-SSSSS-",
          "-RC*CR-",
          "-RAsAR-",
          "-RF*FR-",
          "-SSSSS-",
          "-------"
        ],
        "key": {
          "C": { "item": "create:shadow_steel_casing" },
          "A": { "item": "create:adjustable_crate" },
          "F": { "item": "create:smart_chute" },
          "R": { "item": "create:refined_radiance" },
          "S": { "item": "create:shadow_steel" },
          "s": { "item": "create:portable_storage_interface" },
          "-": { "item": "extendedcrafting:the_ultimate_block" },
          "*": { "item": "extendedcrafting:ultimate_singularity" }
        },
        "result": {
          "item": "create:creative_crate"
        }
      })


})