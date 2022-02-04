// priority: 0

onEvent('recipes', e => {
  // add additional drop for string mesh and silica dust blocks
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.2,
        "mesh": "string"
      }
    ],
    "input": {
      "item": "cuboidmod:silica_dust_block"
    },
    "result": {
      "item": "minecraft:bone_meal"
    }
  })
})
