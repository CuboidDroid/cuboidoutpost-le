// priority: 0

onEvent('recipes', e => {
  // remove standard drop
  e.remove({id: 'exnihilosequentia:sieve/ens_emerald'})

  // add drops
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
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
      "item": "minecraft:emerald"
    }
  })

  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.075,
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
      "item": "exnihilosequentia:crushed_granite"
    },
    "result": {
      "item": "minecraft:emerald"
    }
  })
})
