// priority: 0

onEvent('recipes', e => {
  // remove standard drop
  e.remove({id: 'exnihilosequentia:sieve/ens_seed_large_fern'})

  // add drop for iron mesh and silica dust blocks
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.05,
        "mesh": "iron"
      }
    ],
    "input": {
      "item": "cuboidmod:silica_dust_block"
    },
    "result": {
      "item": "exnihilosequentia:seed_large_fern"
    }
  })
})
