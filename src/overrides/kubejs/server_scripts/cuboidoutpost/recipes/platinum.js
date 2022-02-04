// priority: 0

onEvent('recipes', e => {

  // recipes to "fix" platinum so it works with kubejs block and nuggets too

  e.shaped('kubejs:platinum_block', [
    'EEE',
    'EEE',
    'EEE'
  ], {
    E: '#forge:ingots/platinum'
  })

  e.shapeless('9x exnihilosequentia:ingot_platinum', ['kubejs:platinum_block'])

  e.shaped('exnihilosequentia:ingot_platinum', [
    'EEE',
    'EEE',
    'EEE'
  ], {
    E: '#forge:nuggets/platinum'
  })

  e.shapeless('9x kubejs:platinum_nugget', ['exnihilosequentia:ingot_platinum'])

})
