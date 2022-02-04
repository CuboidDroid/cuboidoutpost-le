// priority: 0

onEvent('recipes', e => {

  // add in crafting recipe for compressed crushed andesite
  e.shaped('excompressum:compressed_crushed_andesite', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'exnihilosequentia:crushed_andesite'
  })

  e.shapeless('9x exnihilosequentia:crushed_andesite', ['excompressum:compressed_crushed_andesite'])

  // add in crafting recipe for compressed crushed diorite
  e.shaped('excompressum:compressed_crushed_diorite', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'exnihilosequentia:crushed_diorite'
  })

  e.shapeless('9x exnihilosequentia:crushed_diorite', ['excompressum:compressed_crushed_diorite'])

  // add in crafting recipe for compressed crushed granite
  e.shaped('excompressum:compressed_crushed_granite', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'exnihilosequentia:crushed_granite'
  })

  e.shapeless('9x exnihilosequentia:crushed_granite', ['excompressum:compressed_crushed_granite'])

  // -- extra compressed hammer recipes

  e.shaped('excompressum:compressed_hammer_wood', [
    ' RR',
    'RSR',
    'SR '
  ], {
    R: '#minecraft:logs',
    S: 'cuboidmod:stick_bundle'
  })

  e.shaped('excompressum:compressed_hammer_stone', [
    ' R ',
    ' SR',
    'S  '
  ], {
    R: 'excompressum:compressed_cobblestone',
    S: 'cuboidmod:stick_bundle'
  })
  
  e.shaped('excompressum:compressed_hammer_iron', [
    ' R ',
    ' SR',
    'S  '
  ], {
    R: '#forge:storage_blocks/iron',
    S: 'cuboidmod:stick_bundle'
  })
  
  e.shaped('excompressum:compressed_hammer_gold', [
    ' R ',
    ' SR',
    'S  '
  ], {
    R: '#forge:storage_blocks/gold',
    S: 'cuboidmod:stick_bundle'
  })
  
  e.shaped('excompressum:compressed_hammer_diamond', [
    ' R ',
    ' SR',
    'S  '
  ], {
    R: '#forge:storage_blocks/diamond',
    S: 'cuboidmod:stick_bundle'
  })
  
  e.custom({
    "type": "minecraft:smithing",
    "base": {
      "item": "excompressum:compressed_hammer_diamond"
    },
    "addition": {
      "item": "minecraft:netherite_block"
    },
    "result": {
      "item": "excompressum:compressed_hammer_netherite"
    }
  })

  e.shaped('excompressum:compressed_crook', [
    'BB',
    ' S',
    ' S'
  ], {
    B: 'cuboidmod:stick_bundle',
    S: '#forge:rods/wooden'
  })
 
})