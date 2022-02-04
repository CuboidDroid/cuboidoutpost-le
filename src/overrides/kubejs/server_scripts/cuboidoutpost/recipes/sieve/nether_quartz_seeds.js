// priority: 0

onEvent('recipes', e => {
  // remove standard drop
  e.remove({id: 'exnihiloae:sieve/ens_nether_quartz_seed'})

  // add drops
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.35,
        "mesh": "diamond"
      },
      {
        "chance": 0.45,
        "mesh": "emerald"
      },
      {
        "chance": 0.55,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "exnihiloae:crushed_skystone"
    },
    "result": {
      "item": "appliedenergistics2:nether_quartz_seed"
    }
  })
})
