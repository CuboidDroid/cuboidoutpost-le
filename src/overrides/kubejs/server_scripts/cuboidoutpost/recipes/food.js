// priority: 0

onEvent('recipes', e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    e.remove({id: 'pamhc2foodcore:saltitem'})

    e.custom({
      "type": "minecraft:crafting_shapeless",
      
      "ingredients":
      [
        {
          "tag": "forge:tool_pot"
        },
        {
          "tag": "forge:water"
        }
      ],
      "result": {"item": "cuboidmod:salt", "count": 1} 
    })

    /*
    e.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [
          {
            "item": "pamhc2foodcore:skilletitem"
          },
          {
            "item": "kubejs:albumen"
          }
        ],
        "result": {
          "item": "kubejs:eggwhite_omelette",
          "count": 2
        }
      })
    */

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  })