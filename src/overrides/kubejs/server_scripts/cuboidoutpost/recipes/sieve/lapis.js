// priority: 0

onEvent('recipes', e => {
    // remove standard drop
    e.remove({id: 'exnihilosequentia:sieve/ens_lapis_lazuli'})
  
    // add drops
    e.custom({
      "type": "exnihilosequentia:sieve",
      "rolls": [
        {
          "chance": 0.05,
          "mesh": "flint"
        },
        {
          "chance": 0.05,
          "mesh": "iron"
        },
        {
          "chance": 0.05,
          "mesh": "diamond"
        },
        {
          "chance": 0.075,
          "mesh": "emerald"
        }
      ],
      "input": {
        "item": "minecraft:gravel"
      },
      "result": {
        "item": "minecraft:lapis_lazuli"
      }
    })
  })