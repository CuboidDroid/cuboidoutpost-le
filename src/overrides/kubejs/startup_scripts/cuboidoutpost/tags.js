// Listen to item tag event
onEvent('item.tags', event => {
    event.add('forge:storage_blocks', 'kubejs:platinum_block')
    event.add('forge:storage_blocks/platinum', 'kubejs:platinum_block')
    
    //event.add('forge:ingots', 'kubejs:platinum_ingot')
    //event.add('forge:ingots/platinum', 'kubejs:platinum_ingot')
    
    event.add('forge:nuggets', 'kubejs:platinum_nugget')
    event.add('forge:nuggets/platinum', 'kubejs:platinum_nugget')

    const materials = ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"];

    materials.forEach((material) => {
        event.add('storagedrawers:full_drawers_1', 'storagedrawers:' + material + '_full_drawers_1')
        event.add('storagedrawers:full_drawers_2', 'storagedrawers:' + material + '_full_drawers_2')
        event.add('storagedrawers:full_drawers_4', 'storagedrawers:' + material + '_full_drawers_4')

        event.add('storagedrawers:half_drawers_1', 'storagedrawers:' + material + '_half_drawers_1')
        event.add('storagedrawers:half_drawers_2', 'storagedrawers:' + material + '_half_drawers_2')
        event.add('storagedrawers:half_drawers_4', 'storagedrawers:' + material + '_half_drawers_4')
    })

})