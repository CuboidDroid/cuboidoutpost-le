// priority: 0

onEvent('recipes', e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    e.custom({
        "type": "cuboidmod:transmuting",
        "base": {
          "item": "cuboidmod:protein_paste"
        },
        "addition": {
          "item": "kubejs:rna"
        },
        "result": {
          "item": "kubejs:primordial_gloop",
          "count": 1
        },
        "work_ticks": 100,
        "energy": 2000
      })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
    e.custom({
        "type": "cuboidmod:transmuting",
        "base": {
          "item": "cuboidmod:protein_fiber"
        },
        "addition": {
          "item": "kubejs:primordial_gloop"
        },
        "result": {
          "item": "kubejs:dna",
          "count": 1
        },
        "work_ticks": 100,
        "energy": 2000
      })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
    e.custom({
        "type": "cuboidmod:transmuting",
        "base": {
          "item": "kubejs:dna"
        },
        "addition": {
          "item": "minecraft:bone_meal"
        },
        "result": {
          "item": "kubejs:albumen",
          "count": 1
        },
        "work_ticks": 120,
        "energy": 2500
      })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
    e.custom({
      "type": "cuboidmod:transmuting",
      "base": {
        "item": "minecraft:snow_block"
      },
      "addition": {
        "item": "minecraft:snow_block"
      },
      "result": {
        "item": "minecraft:ice",
        "count": 1
      },
      "work_ticks": 120,
      "energy": 2500
    })

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

})