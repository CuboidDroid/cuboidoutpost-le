// priority: 0

onEvent('recipes', e => {
  // remove standard drop
  e.remove({id: 'exnihilosequentia:sieve/ens_seed_pumpkin'})

  // add drop for diamond mesh and organically enriched sand
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.35,
        "mesh": "diamond"
      }
    ],
    "input": {
      "item": "cuboidmod:organically_enriched_sand"
    },
    "result": {
      "item": "minecraft:pumpkin_seeds"
    }
  })
})
