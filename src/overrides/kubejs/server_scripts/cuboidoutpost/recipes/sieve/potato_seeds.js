// priority: 0

onEvent('recipes', e => {
  // remove standard drop
  e.remove({id: 'exnihilosequentia:sieve/ens_seed_potato'})

  // add drop for iron mesh and organically enriched sand
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.1,
        "mesh": "iron"
      }
    ],
    "input": {
      "item": "cuboidmod:organically_enriched_sand"
    },
    "result": {
      "item": "exnihilosequentia:seed_potato"
    }
  })
})
