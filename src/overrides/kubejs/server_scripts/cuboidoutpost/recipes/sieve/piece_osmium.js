// priority: 0

onEvent('recipes', e => {
    // remove standard drop
    e.remove({id: 'exnihilomekanism:sieve/ens_piece_osmium_1'})
  
    // add drops
    e.custom({
      "type": "exnihilosequentia:sieve",
      "rolls": [
        {
          "chance": 0.1,
          "mesh": "emerald"
        },
        {
          "chance": 0.2,
          "mesh": "netherite"
        }
      ],
      "input": {
        "item": "minecraft:gravel"
      },
      "result": {
        "item": "exnihilosequentia:piece_osmium"
      }
    })
  })