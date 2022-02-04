// priority: 0

onEvent('recipes', e => {
  // remove standard drop
  e.remove({id: 'exnihilosequentia:sieve/ens_blaze_powder'})

  // add drops
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.05,
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
        "chance": 0.1,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "exnihilosequentia:dust"
    },
    "result": {
      "item": "minecraft:blaze_powder"
    }
  })
})
