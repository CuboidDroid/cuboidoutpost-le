// priority: 0

onEvent('recipes', e => {
  // add drop
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.05,
        "mesh": "diamond"
      }
    ],
    "input": {
      "item": "minecraft:dirt"
    },
    "result": {
      "item": "immersiveengineering:seed"
    }
  })
})
