onEvent('block.registry', e => {

    e.create('platinum_block')
        .material('metal')
        .hardness(6)
        .harvestTool('pickaxe', 2)
        .requiresTool(true)
        .displayName('Block of Platinum')

})

