// priority: 0

onEvent('recipes', e => {
    // add drop for string mesh and silica dust
    e.custom({
      "type": "exnihilosequentia:sieve",
      "rolls": [
        {
          "chance": 0.35,
          "mesh": "string"
        },
        {
          "chance": 0.25,
          "mesh": "string"
        },
        {
          "chance": 0.15,
          "mesh": "string"
        },
        {
          "chance": 0.1,
          "mesh": "string"
        }
      ],
      "input": {
        "item": "cuboidmod:silica_dust_block"
      },
      "result": {
        "item": "cuboidmod:salt"
      }
    })

    // remove drop for mekanism salt from sand
    e.remove({"id": "exnihilomekanism:sieve/ens_piece_osmium_3"})

    // add salt from sand drop instead
    e.custom({
      "type": "exnihilosequentia:sieve",
      "rolls": [
        {
          "chance": 0.01,
          "mesh": "flint"
        },
        {
          "chance": 0.02,
          "mesh": "iron"
        },
        {
          "chance": 0.4,
          "mesh": "diamond"
        }
      ],
      "input": {
        "item": "minecraft:sand"
      },
      "result": {
        "item": "cuboidmod:salt"
      }
    })
  })