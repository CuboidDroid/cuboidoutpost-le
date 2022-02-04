// priority: 0

onEvent('recipes', e => {
  // remove standard drop
  e.remove({id: 'exnihilosequentia:sieve/ens_glowstone'})

  // add drops
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.0925,
        "mesh": "iron"
      },
      {
        "chance": 0.125,
        "mesh": "diamond"
      },
      {
        "chance": 0.1725,
        "mesh": "emerald"
      }
    ],
    "input": {
      "item": "exnihilosequentia:dust"
    },
    "result": {
      "item": "minecraft:glowstone_dust"
    }
  })
})
