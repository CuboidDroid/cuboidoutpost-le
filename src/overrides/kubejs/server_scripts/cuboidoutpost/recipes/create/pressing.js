// priority: 0
onEvent('recipes', e => {

    e.remove({id: 'create:pressing/copper_ingot'})
    e.remove({id: 'create:pressing/gold_ingot'})
    e.remove({id: 'create:pressing/iron_ingot'})

    e.custom({
        "type": "create:pressing",
        "ingredients": [
          {
            "tag": "forge:ingots/copper"
          }
        ],
        "results": [
          {
            "item": "immersiveengineering:plate_copper"
          }
        ]
      })

    e.custom({
        "type": "create:pressing",
        "ingredients": [
          {
            "tag": "forge:ingots/gold"
          }
        ],
        "results": [
          {
            "item": "immersiveengineering:plate_gold"
          }
        ]
      })

    e.custom({
        "type": "create:pressing",
        "ingredients": [
          {
            "tag": "forge:ingots/iron"
          }
        ],
        "results": [
          {
            "item": "immersiveengineering:plate_iron"
          }
        ]
      })
})
