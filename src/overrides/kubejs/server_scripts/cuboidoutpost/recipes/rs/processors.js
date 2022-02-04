// priority: 0

onEvent('recipes', e => {

  // recipes to gate RS behind AE2 quest line

  e.remove({id: 'refinedstorage:raw_basic_processor'})
  e.remove({id: 'refinedstorage:raw_improved_processor'})
  e.remove({id: 'refinedstorage:raw_advanced_processor'})

  e.shapeless('refinedstorage:raw_basic_processor', [
    'refinedstorage:processor_binding',
    'appliedenergistics2:printed_calculation_processor',
    'appliedenergistics2:printed_silicon',
    'minecraft:redstone'
  ])

  e.shapeless('refinedstorage:raw_improved_processor', [
    'refinedstorage:processor_binding',
    'appliedenergistics2:printed_logic_processor',
    'appliedenergistics2:printed_silicon',
    'minecraft:redstone'
  ])

  e.shapeless('refinedstorage:raw_advanced_processor', [
    'refinedstorage:processor_binding',
    'appliedenergistics2:printed_engineering_processor',
    'appliedenergistics2:printed_silicon',
    'minecraft:redstone'
  ])

})
