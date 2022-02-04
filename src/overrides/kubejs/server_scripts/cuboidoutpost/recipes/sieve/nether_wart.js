// priority: 0

onEvent('recipes', e => {
  // remove standard drop
  e.remove({id: 'exnihilosequentia:sieve/ens_nether_wart'})

  // add drops
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.1,
        "mesh": "iron"
      },
      {
        "chance": 0.25,
        "mesh": "diamond"
      }
    ],
    "input": {
      "item": "minecraft:soul_sand"
    },
    "result": {
      "item": "minecraft:nether_wart"
    }
  })
})
