// priority: 0

onEvent('recipes', e => {
    // remove standard drop
    e.remove({id: 'exnihilosequentia:sieve/ens_piece_lead_gravel'})
  
    // add drops for gravel
    e.custom({
      "type": "exnihilosequentia:sieve",
      "rolls": [
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
        "item": "minecraft:gravel"
      },
      "result": {
        "item": "exnihilosequentia:piece_lead"
      }
    })
  })