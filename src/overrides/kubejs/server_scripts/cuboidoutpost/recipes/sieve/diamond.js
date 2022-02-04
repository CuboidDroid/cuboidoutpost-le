// priority: 0

onEvent('recipes', e => {

  // remove standard drop
  e.remove({id: 'exnihilosequentia:sieve/ens_diamond'})

  // add drops
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.025,
        "mesh": "iron"
      },
      {
        "chance": 0.05,
        "mesh": "diamond"
      },
      {
        "chance": 0.075,
        "mesh": "emerald"
      },
      {
        "chance": 0.125,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "minecraft:gravel"
    },
    "result": {
      "item": "minecraft:diamond"
    }
  })

  // add drops
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.075,
        "mesh": "iron"
      },
      {
        "chance": 0.1,
        "mesh": "diamond"
      },
      {
        "chance": 0.125,
        "mesh": "emerald"
      },
      {
        "chance": 0.15,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "exnihilosequentia:crushed_diorite"
    },
    "result": {
      "item": "minecraft:diamond"
    }
  })
})
