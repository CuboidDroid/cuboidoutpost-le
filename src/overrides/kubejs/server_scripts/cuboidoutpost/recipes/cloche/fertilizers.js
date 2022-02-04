// priority: 0

onEvent('recipes', e => {

    const fertilizer = (item, growthModifier) => {
        e.custom({
            "type":"immersiveengineering:fertilizer",
            "growthModifier": growthModifier,
            "input": {
                "item": item
            }
        });
    }

    fertilizer('industrialforegoing:fertilizer', 1.1)
    fertilizer('thermal:phytogro', 1.3)
})
  