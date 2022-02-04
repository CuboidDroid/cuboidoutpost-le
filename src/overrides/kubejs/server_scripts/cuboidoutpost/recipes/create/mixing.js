// priority: 0
onEvent('recipes', e => {

    e.custom({
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid": "appliedenergistics2"
        }
      ],
      "type": "create:mixing",
      "ingredients": [
        {
          "item": "tconstruct:grout",
          "amount": 1
        },
        {
          "fluid": "minecraft:water",
          "nbt": {},
          "amount": 250
        }
      ],
      "results": [
        {
          "item": "immersiveengineering:concrete",
          "count": 2
        }
      ],
      "heatRequirement": "none"
    })
})
