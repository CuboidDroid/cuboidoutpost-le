// priority: 0

onEvent('recipes', e => {
  // remove standard drop
  e.remove({id: 'exnihilosequentia:sieve/ens_seed_bamboo'})

  // add drop for flint mesh and sand
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.15,
        "mesh": "flint"
      }
    ],
    "input": {
      "item": "minecraft:sand"
    },
    "result": {
      "item": "exnihilosequentia:seed_bamboo"
    }
  })
})
