// priority: 0

onEvent('recipes', e => {

    e.custom({
        "type": "cuboidmod:drying",
        "ingredient": {
          "item": "minecraft:kelp"
        },
        "result": {
          "item": "minecraft:dried_kelp",
          "count": 1
        },
        "work_ticks": 300
      })

})