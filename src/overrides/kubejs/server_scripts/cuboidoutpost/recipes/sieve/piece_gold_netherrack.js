// priority: 0

onEvent('recipes', e => {
    // remove standard drop
    e.remove({id: 'exnihilosequentia:sieve/ens_piece_gold_crushed_netherrack'})
  
    // add drops
    e.custom({
      "type": "exnihilosequentia:sieve",
      "rolls": [
        {
          "chance": 0.25,
          "mesh": "iron"
        },
        {
          "chance": 0.35,
          "mesh": "diamond"
        },
        {
          "chance": 0.45,
          "mesh": "emerald"
        }
      ],
      "input": {
        "item": "exnihilosequentia:crushed_netherrack"
      },
      "result": {
        "item": "exnihilosequentia:piece_gold"
      }
    })
  })