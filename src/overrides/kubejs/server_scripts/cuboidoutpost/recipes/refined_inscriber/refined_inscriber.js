// priority: 0

onEvent('recipes', e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Refined Inscriber machine recipe
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    e.shaped('cuboidmod:refined_inscriber', [
      'ELE',
      'IPI',
      'QFQ'
    ], {
      I: 'appliedenergistics2:inscriber',
      P: 'minecraft:piston',
      L: 'appliedenergistics2:logic_processor',
      F: 'minecraft:furnace',
      E: 'appliedenergistics2:engineering_processor',
      Q: 'appliedenergistics2:charged_certus_quartz_crystal'
    })
  
  })