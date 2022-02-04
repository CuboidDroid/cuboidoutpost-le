// priority: 0

onEvent('recipes', e => {
    // remove standard drop
    e.remove({id: 'exnihilosequentia:sieve/ens_piece_iron_gravel'})
    e.remove({id: 'exnihilosequentia:sieve/ens_piece_iron_sand'})
  
    // add drops for gravel
    e.custom({
      "type": "exnihilosequentia:sieve",
      "rolls": [
        {
          "chance": 0.25,
          "mesh": "diamond"
        }
      ],
      "input": {
        "item": "minecraft:gravel"
      },
      "result": {
        "item": "exnihilosequentia:piece_iron"
      }
    })
  })