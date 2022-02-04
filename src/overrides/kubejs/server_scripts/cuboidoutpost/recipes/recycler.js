// priority: 0

onEvent('recipes', e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    e.custom({
        "type": "cuboidmod:recycling",
        "ingredient": {
          "item": "minecraft:bone"
        },
        "results": [
          {
            "item": "kubejs:rna",
            "count": 1
          },
          {
            "item": "kubejs:rna",
            "count": 1,
            "chance": 0.25
          }
        ],
        "work_ticks": 100,
        "energy": 1500
      })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    e.custom({
        "type": "cuboidmod:recycling",
        "ingredient": {
          "item": "minecraft:rotten_flesh"
        },
        "results": [
          {
            "item": "kubejs:rna",
            "count": 1
          },
          {
            "item": "kubejs:rna",
            "count": 1,
            "chance": 0.75
          },
          {
            "item": "kubejs:rna",
            "count": 1,
            "chance": 0.25
          }
        ],
        "work_ticks": 120,
        "energy": 2000
      })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  })