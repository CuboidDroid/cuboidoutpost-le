// priority: 0

onEvent('recipes', e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    e.custom({
        "type": "cuboidmod:drying",
        "ingredient": {
          "item": "kubejs:albumen"
        },
        "result": {
          "item": "minecraft:egg",
          "count": 1
        },
        "work_ticks": 400
      })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // additional leather recipe

    e.custom({
      "type": "cuboidmod:drying",
      "ingredient": {
        "item": "cuboidmod:biltong_zombie"
      },
      "result": {
        "item": "minecraft:leather",
        "count": 1
      },
      "work_ticks": 800
    })

    e.custom({
      "type": "cuboidmod:drying",
      "ingredient": {
        "item": "cuboidmod:biltong_beef"
      },
      "result": {
        "item": "minecraft:leather",
        "count": 1
      },
      "work_ticks": 800
    })
  
  })