// priority: 0

onEvent('recipes', e => {
    // remove standard drop
    e.remove({id: 'exnihilosequentia:sieve/ens_piece_gold_gravel'})
  
    // add drops for gravel
    e.custom({
      "type": "exnihilosequentia:sieve",
      "rolls": [
        {
          "chance": 0.15,
          "mesh": "netherite"
        }
      ],
      "input": {
        "item": "minecraft:gravel"
      },
      "result": {
        "item": "exnihilosequentia:piece_gold"
      }
    })
  })