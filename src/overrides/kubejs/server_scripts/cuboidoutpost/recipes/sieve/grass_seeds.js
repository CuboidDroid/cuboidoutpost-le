// priority: 0

onEvent('recipes', e => {
  // remove standard drop
  e.remove({id: 'exnihilosequentia:sieve/ens_seed_grass'})

  // add drop for iron mesh and dirt
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.05,
        "mesh": "iron"
      }
    ],
    "input": {
      "item": "minecraft:dirt"
    },
    "result": {
      "item": "exnihilosequentia:grass_seeds"
    }
  })
})
