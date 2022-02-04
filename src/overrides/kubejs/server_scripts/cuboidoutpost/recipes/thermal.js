// priority: 0

onEvent('recipes', e => {
    // thermal gears using thatldu nuggets rather than iron nuggets

    e.shaped('thermal:iron_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:ingots/iron',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:gold_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:ingots/gold',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:lapis_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:gems/lapis',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:diamond_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:gems/diamond',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:emerald_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:gems/emerald',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:quartz_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:gems/quartz',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:copper_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:ingots/copper',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:tin_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:ingots/tin',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:lead_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:ingots/lead',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:silver_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:ingots/silver',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:nickel_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:ingots/nickel',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:bronze_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:ingots/bronze',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:electrum_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:ingots/electrum',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:invar_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:ingots/invar',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:constantan_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:ingots/constantan',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:signalum_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:ingots/signalum',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:lumium_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:ingots/lumium',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:enderium_gear', [
      ' I ',
      'INI',
      ' I '
    ], {
      I: '#forge:ingots/enderium',
      N: 'cuboidmod:thatldu_nugget'
    })

    e.shaped('thermal:machine_frame', [
      'TGT',
      'GOG',
      'TGT'
    ], {
      G: 'minecraft:glass',
      O: '#forge:gears/tin',
      T: 'cuboidmod:wikidium_ingot'
    })

    // remove dust blends
    e.remove({id: 'thermal:bronze_dust_4'})
    e.remove({id: 'thermal:electrum_dust_2'})
    e.remove({id: 'thermal:invar_dust_3'})
    e.remove({id: 'thermal:constantan_dust_2'})
    e.remove({id: 'thermal:signalum_dust_4'})
    e.remove({id: 'thermal:lumium_dust_4'})
    e.remove({id: 'thermal:enderium_dust_2'})

    // remove fire charge recipes for alloys
    e.remove({id: 'thermal:fire_charge/electrum_ingot_2'})
    e.remove({id: 'thermal:fire_charge/constantan_ingot_2'})
    e.remove({id: 'thermal:fire_charge/invar_ingot_3'})
    e.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
    e.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
    e.remove({id: 'thermal:fire_charge/lumium_ingot_4'})

  // - - - - - - - INDUCTION SMELTER RECIPES - - - - - - - -
  
  e.recipes.thermal.smelter('2x immersiveengineering:ingot_electrum', ['#forge:ingots/silver','#forge:ingots/gold'])
  e.recipes.thermal.smelter('3x thermal:invar_ingot', ['#forge:ingots/nickel','2x #forge:ingots/iron'])

})