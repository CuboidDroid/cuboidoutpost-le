// priority: 0

onEvent('recipes', e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // mekanism:creative_bin
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "C-----C",
          "-BBBBB-",
          "-BqiqB-",
          "-B*q*B-",
          "-BqeqB-",
          "-BBBBB-",
          "C-----C"
        ],
        "key": {
          "C": { "item": "mekanism:sps_casing" },
          "B": { "item": "mekanism:ultimate_bin" },
          "q": { "item": "mekanism:qio_drive_supermassive" },
          "i": { "item": "mekanism:qio_importer" },
          "e": { "item": "mekanism:qio_exporter" },
          "-": { "item": "extendedcrafting:the_ultimate_block" },
          "*": { "item": "extendedcrafting:ultimate_singularity" }
        },
        "result": {
          "item": "mekanism:creative_bin"
        }
      })

    // mekanism:creative_fluid_tank
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
        "T": { "item": "mekanism:ultimate_fluid_tank" },
        "R": { "item": "mekanism:ultimate_mechanical_pipe" },
        "P": { "item": "mekanism:electric_pump" },
        "p": { "item": "mekanism:fluidic_plenisher" },
        "A": { "item": "mekanism:alloy_atomic" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" }
      },
      "result": {
        "item": "mekanism:creative_fluid_tank"
      }
    })

    // mekanism:creative_chemical_tank
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
        "T": { "item": "mekanism:ultimate_chemical_tank" },
        "R": { "item": "mekanism:ultimate_pressurized_tube" },
        "P": { "item": "mekanism:pressure_disperser" },
        "p": { "item": "mekanism:pressurized_reaction_chamber" },
        "A": { "item": "mekanism:alloy_atomic" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" }
      },
      "result": {
        "item": "mekanism:creative_chemical_tank"
      }
    })

    // mekanism:creative_energy_cube
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "P-------P",
        "B       B",
        "B UUIUU B",
        "B UCCCU B",
        "B IC*CI B",
        "B UCCCU B",
        "B UUIUU B",
        "B       B",
        "P-------P"
      ],
      "key": {
        "P": { "item": "mekanism:induction_port" },
        "U": { "item": "mekanism:ultimate_energy_cube" },
        "I": { "item": "mekanism:ultimate_induction_provider" },
        "C": { "item": "mekanism:ultimate_induction_cell" },
        "B": { "item": "extendedcrafting:the_ultimate_block" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" }
      },
      "result": {
        "type": "forge:nbt",
        "item": "mekanism:creative_energy_cube",
        "nbt": '{mekData: {EnergyContainers: [{Container: 0, stored: "18446744073709551615.9999"}]}}'
      }
    })

})