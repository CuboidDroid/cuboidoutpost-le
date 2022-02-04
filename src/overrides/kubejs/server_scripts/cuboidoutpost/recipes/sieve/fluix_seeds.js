// priority: 0

onEvent('recipes', e => {
  // add drops
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.05,
        "mesh": "emerald"
      },
      {
        "chance": 0.075,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "exnihiloae:crushed_skystone"
    },
    "result": {
      "item": "appliedenergistics2:fluix_crystal_seed"
    }
  })
})
