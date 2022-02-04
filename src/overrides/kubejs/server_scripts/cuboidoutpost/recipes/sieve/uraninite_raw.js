// priority: 0

onEvent('recipes', e => {
  // add drops
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.025,
        "mesh": "emerald"
      },
      {
        "chance": 0.075,
        "mesh": "netherite"
      }
    ],
    "input": {
      "item": "minecraft:gravel"
    },
    "result": {
      "item": "powah:uraninite_raw"
    }
  })
})
