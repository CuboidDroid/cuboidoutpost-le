// priority: 0

onEvent('recipes', e => {

  // recipes to gate RS behind AE2 quest line

  e.remove({id: 'refinedstorage:controller'})

  e.shaped('refinedstorage:controller', [
    'IPI',
    'SCS',
    'ISI'
  ], {
    I: 'refinedstorage:quartz_enriched_iron',
    P: 'refinedstorage:advanced_processor',
    S: 'appliedenergistics2:printed_silicon',
    C: 'appliedenergistics2:controller'
  })

})
