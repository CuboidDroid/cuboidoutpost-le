// priority: 0

onEvent('recipes', e => {

    e.shaped('create:wrench', [
        'PP',
        'PC',
        ' R'
    ], {
        P: '#forge:plates/nickel',
        C: 'create:cogwheel',
        R: '#forge:rods/wooden'
    })

    e.shaped('create:propeller', [
        ' P ',
        'PAP',
        ' P '
    ], {
        P: '#forge:plates/nickel',
        A: 'create:andesite_alloy'
    })

    e.shaped('create:goggles', [
        ' S ',
        'GPG'
    ], {
        P: '#forge:plates/nickel',
        G: '#forge:glass',
        S: 'minecraft:string'
    })

})