// priority: 0

onEvent('recipes', e => {
  // remove standard drop
  e.remove({id: 'exnihilosequentia:sieve/ens_quartz'})

  // add drops
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.33,
        "mesh": "iron"
      },
      {
        "chance": 0.33,
        "mesh": "iron"
      },
      {
        "chance": 0.5,
        "mesh": "diamond"
      },
      {
        "chance": 0.75,
        "mesh": "emerald"
      },
      {
        "chance": 1.0,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "minecraft:soul_sand"
    },
    "result": {
      "item": "minecraft:quartz"
    }
  })
})
