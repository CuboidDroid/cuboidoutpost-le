// priority: 0

onEvent('recipes', e => {

  // get rid of silkworm 10% chance drop from crooks on leaves
  e.remove({id: 'exnihilosequentia:crook/ens_leaves'})

  e.shaped('exnihilosequentia:hammer_stone', [
    ' S ',
    ' RS',
    'R  '
  ], {
    S: '#forge:stone',
    R: '#forge:rods'
  })

  e.shaped('4x cuboidmod:aggregate', [
    'CR',
    'RC',
  ], {
    C: 'minecraft:clay',
    R: 'exnihilosequentia:crushed_andesite'
  })

  e.shaped('4x cuboidmod:aggregate', [
    'CR',
    'RC',
  ], {
    C: 'minecraft:clay',
    R: 'exnihilosequentia:crushed_diorite'
  })

  e.shaped('4x cuboidmod:aggregate', [
    'CR',
    'RC',
  ], {
    C: 'minecraft:clay',
    R: 'exnihilosequentia:crushed_granite'
  })

})