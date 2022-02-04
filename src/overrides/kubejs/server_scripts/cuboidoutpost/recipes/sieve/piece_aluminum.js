// priority: 0

onEvent('recipes', e => {
    // remove standard drop
    e.remove({id: 'exnihilosequentia:sieve/ens_piece_aluminum_gravel'})
  
    // add drops for crushed diorite
    e.custom({
      "type": "exnihilosequentia:sieve",
      "rolls": [
        {
          "chance": 0.25,
          "mesh": "flint"
        },
        {
          "chance": 0.175,
          "mesh": "iron"
        },
        {
          "chance": 0.225,
          "mesh": "diamond"
        }
      ],
      "input": {
        "item": "exnihilosequentia:crushed_diorite"
      },
      "result": {
        "item": "exnihilosequentia:piece_aluminum"
      }
    })
  })