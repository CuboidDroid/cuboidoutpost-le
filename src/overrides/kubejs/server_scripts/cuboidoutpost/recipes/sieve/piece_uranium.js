// priority: 0

onEvent('recipes', e => {
    // remove standard drop
    e.remove({id: 'exnihilosequentia:sieve/ens_piece_uranium_gravel'})
  
    // add drops for gravel
    e.custom({
      "type": "exnihilosequentia:sieve",
      "rolls": [
        {
          "chance": 0.125,
          "mesh": "iron"
        },
        {
          "chance": 0.175,
          "mesh": "diamond"
        }
      ],
      "input": {
        "item": "minecraft:gravel"
      },
      "result": {
        "item": "exnihilosequentia:piece_uranium"
      }
    })
  })