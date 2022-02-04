// priority: 0

onEvent('recipes', e => {
  // remove standard drop
  e.remove({id: 'exnihilosequentia:sieve/ens_ancient_spore'})

  // add drop for diamond mesh and silica dust blocks
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.075,
        "mesh": "diamond"
      }
    ],
    "input": {
      "item": "cuboidmod:silica_dust_block"
    },
    "result": {
      "item": "exnihilosequentia:ancient_spores"
    }
  })
})
