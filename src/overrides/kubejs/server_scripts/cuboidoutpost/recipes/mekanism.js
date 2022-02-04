// priority: 0

onEvent('recipes', e => {

  const qtc = (result, input1, input2) => {
    e.custom({
        "type": "cuboidmod:transmuting",
        "base": {
          "item": input1
        },
        "addition": {
          "item": input2
        },
        "result": {
          "item": result,
          "count": 1
        },
        "work_ticks": 60,
        "energy": 15000
      })
  }

  // allow metallurgic infuser to use Cuboid furnaces in recipe
  e.shaped('mekanism:metallurgic_infuser', [
    'IFI',
    'ROR',
    'IFI'
  ], {
    I: '#forge:ingots/iron',
    F: '#cuboidmod:furnaces',
    R: 'minecraft:redstone',
    O: '#forge:ingots/osmium'
  })

  // QTC recipes for fluorite
  qtc("mekanism:fluorite_gem", "minecraft:bone_meal", "cuboidmod:notarfbadium_chunk")
  qtc("mekanism:fluorite_gem", "minecraft:bone_meal", "cuboidmod:notarfbadium_ore")

})