// priority: 0

onEvent('recipes', e => {
  // remove standard drop
  e.remove({id: 'exnihilosequentia:sieve/ens_seed_berry'})

  // add drop for diamond mesh and organically enriched sand
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.075,
        "mesh": "diamond"
      },
      {
        "chance": 0.1,
        "mesh": "emerald"
      }
    ],
    "input": {
      "item": "cuboidmod:organically_enriched_sand"
    },
    "result": {
      "item": "exnihilosequentia:seed_berry"
    }
  })
})
