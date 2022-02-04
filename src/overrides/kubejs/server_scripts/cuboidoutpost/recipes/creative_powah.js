// priority: 0

onEvent('recipes', e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // powah:creative_energy_cell
    e.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "P-------P",
        "B@IIIII@B",
        "BICPIPCIB",
        "BIPPCPPIB",
        "BIIC*CIIB",
        "BIPPCPPIB",
        "BICPIPCIB",
        "B@IIIII@B",
        "P-------P"
      ],
      "key": {
        "P": { "item": "powah:energy_cell_nitro" },
        "I": { "item": "powah:reactor_nitro" },
        "C": { "item": "powah:nitro_crystal_block" },
        "B": { "item": "extendedcrafting:the_ultimate_block" },
        "-": { "item": "extendedcrafting:the_ultimate_ingot" },
        "*": { "item": "extendedcrafting:ultimate_singularity" },
        "@": { "item": "cuboidmod:uraninite_quantum_singularity" }
      },
      "result": {
        "item": "powah:energy_cell_creative"
      }
    })

})