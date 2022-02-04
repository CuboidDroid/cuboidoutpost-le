// priority: 0

onEvent('recipes', e => {
    // Quantum Transmutation Chamber recipes for flowers
    
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
            "work_ticks": 300,
            "energy": 40000
          })
    }

    // Allium (magenta)
    qtc("minecraft:allium", "minecraft:poppy", "minecraft:magenta_dye")

    // Azure Bluet (light grey)
    qtc("minecraft:azure_bluet", "minecraft:oxeye_daisy", "minecraft:gray_dye")

    // Blue Orchid (light blue)
    qtc("minecraft:blue_orchid", "minecraft:cornflower", "minecraft:white_tulip")

    // Cornflower (blue)
    qtc("minecraft:cornflower", "minecraft:oxeye_daisy", "minecraft:blue_dye")

    // Dandelion (yellow)
    // - bonemeal only

    // Lilac (magenta x2)
    qtc("minecraft:lilac", "minecraft:allium", "minecraft:allium")

    // Lily of the Valley (white)
    qtc("minecraft:lily_of_the_valley", "minecraft:azure_bluet", "minecraft:white_tulip")

    // Orange tulip (orange)
    qtc("minecraft:orange_tulip", "minecraft:white_tulip", "minecraft:orange_dye")

    // Oxeye Daisy (light grey)
    qtc("minecraft:oxeye_daisy", "minecraft:poppy", "minecraft:white_dye")

    // Peony (pink x2)
    qtc("minecraft:peony", "minecraft:pink_tulip", "minecraft:pink_tulip")

    // Pink Tulip (pink)
    qtc("minecraft:pink_tulip", "minecraft:red_tulip", "minecraft:white_tulip")

    // Poppy (red)
    // - bonemeal only

    // Red Tulip (red)
    qtc("minecraft:red_tulip", "minecraft:poppy", "minecraft:white_tulip")

    // Rose Bush (red x2)
    qtc("minecraft:rose_bush", "minecraft:poppy", "minecraft:red_tulip")

    // Sunflower (yellow)
    qtc("minecraft:sunflower", "minecraft:dandelion", "minecraft:dandelion")

    // White Tulip (light grey)
    qtc("minecraft:white_tulip", "minecraft:dandelion", "minecraft:bone_meal")
    
    // Wither Rose?
    qtc("minecraft:wither_rose", "minecraft:rose_bush", "minecraft:wither_skeleton_skull")

    // Other mod flowers if any?
})