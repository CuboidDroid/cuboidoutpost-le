// priority: 0

events.listen('recipes', e => {

    // Ore Melting

    e.custom({
        "type": "tconstruct:ore_melting",
        "ingredient": { "tag": "forge:ores/notsogudium" },
        "result": { "fluid": "kubejs:molten_notsogudium", "amount": 144 },
        "temperature": 700,
        "time": 85,
        "byproducts": [
          {
            "fluid": "kubejs:molten_notsogudium",
            "amount": 48
          }
        ]
    })

    e.custom({
        "type": "tconstruct:ore_melting",
        "ingredient": { "tag": "forge:ores/kudbebedda" },
        "result": { "fluid": "kubejs:molten_kudbebedda", "amount": 144 },
        "temperature": 700,
        "time": 85,
        "byproducts": [
          {
            "fluid": "kubejs:molten_kudbebedda",
            "amount": 48
          }
        ]
    })

    e.custom({
        "type": "tconstruct:ore_melting",
        "ingredient": { "tag": "forge:ores/notarfbadium" },
        "result": { "fluid": "kubejs:molten_notarfbadium", "amount": 144 },
        "temperature": 700,
        "time": 85,
        "byproducts": [
          {
            "fluid": "kubejs:molten_notarfbadium",
            "amount": 48
          }
        ]
    })

    e.custom({
        "type": "tconstruct:ore_melting",
        "ingredient": { "tag": "forge:ores/wikidium" },
        "result": { "fluid": "kubejs:molten_wikidium", "amount": 144 },
        "temperature": 700,
        "time": 85,
        "byproducts": [
          {
            "fluid": "kubejs:molten_wikidium",
            "amount": 48
          }
        ]
    })

    e.custom({
        "type": "tconstruct:ore_melting",
        "ingredient": { "tag": "forge:ores/thatldu" },
        "result": { "fluid": "kubejs:molten_thatldu", "amount": 144 },
        "temperature": 700,
        "time": 85,
        "byproducts": [
          {
            "fluid": "kubejs:molten_thatldu",
            "amount": 48
          }
        ]
    })

    // Melting - Cuboid Ingots

    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:notsogudium_ingot"},"result": {"fluid": "kubejs:molten_notsogudium","amount": 144},"temperature": 700,"time": 10})
    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:kudbebedda_ingot"},"result": {"fluid": "kubejs:molten_kudbebedda","amount": 144},"temperature": 800,"time": 15})
    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:notarfbadium_ingot"},"result": {"fluid": "kubejs:molten_notarfbadium","amount": 144},"temperature": 850,"time": 20})
    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:wikidium_ingot"},"result": {"fluid": "kubejs:molten_wikidium","amount": 144},"temperature": 900,"time": 25})
    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:thatldu_ingot"},"result": {"fluid": "kubejs:molten_thatldu","amount": 144},"temperature": 950,"time": 30})
    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:carbon_nanotube"},"result": {"fluid": "kubejs:fullerene_fluid","amount": 144},"temperature": 400,"time": 10})

    // Melting - Cuboid Dusts

    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:notsogudium_dust"},"result": {"fluid": "kubejs:molten_notsogudium","amount": 144},"temperature": 700,"time": 10})
    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:kudbebedda_dust"},"result": {"fluid": "kubejs:molten_kudbebedda","amount": 144},"temperature": 800,"time": 15})
    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:notarfbadium_dust"},"result": {"fluid": "kubejs:molten_notarfbadium","amount": 144},"temperature": 850,"time": 20})
    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:wikidium_dust"},"result": {"fluid": "kubejs:molten_wikidium","amount": 144},"temperature": 900,"time": 25})
    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:thatldu_dust"},"result": {"fluid": "kubejs:molten_thatldu","amount": 144},"temperature": 950,"time": 10})

    // Melting - Cuboid Blocks

    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:notsogudium_block"},"result": {"fluid": "kubejs:molten_notsogudium","amount": 1296},"temperature": 700,"time": 90})
    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:kudbebedda_block"},"result": {"fluid": "kubejs:molten_kudbebedda","amount": 1296},"temperature": 800,"time": 135})
    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:notarfbadium_block"},"result": {"fluid": "kubejs:molten_notarfbadium","amount": 1296},"temperature": 850,"time": 180})
    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:wikidium_block"},"result": {"fluid": "kubejs:molten_wikidium","amount": 1296},"temperature": 900,"time": 225})
    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:thatldu_block"},"result": {"fluid": "kubejs:molten_thatldu","amount": 1296},"temperature": 950,"time": 270})
    e.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:carbon_nanotube_block"},"result": {"fluid": "kubejs:fullerene_fluid","amount": 1296},"temperature": 400,"time": 90})

    // Molten Cuboid Materials To Blocks

    e.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:molten_notsogudium","amount": 1296},"result": "cuboidmod:notsogudium_block","cooling_time": 160})
    e.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:molten_kudbebedda","amount": 1296},"result": "cuboidmod:kudbebedda_block","cooling_time": 170})
    e.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:molten_notarfbadium","amount": 1296},"result": "cuboidmod:notarfbadium_block","cooling_time": 180})
    e.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:molten_wikidium","amount": 1296},"result": "cuboidmod:wikidium_block","cooling_time": 190})
    e.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:molten_thatldu","amount": 1296},"result": "cuboidmod:thatldu_block","cooling_time": 200})
    e.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:fullerene_fluid","amount": 1296},"result": "cuboidmod:carbon_nanotube_block","cooling_time": 60})

    // Molten Cuboid Materials To Items

    e.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "kubejs:molten_notsogudium","amount": 144},"result": "cuboidmod:notsogudium_ingot","cooling_time": 160})
    e.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "kubejs:molten_kudbebedda","amount": 144},"result": "cuboidmod:kudbebedda_ingot","cooling_time": 170})
    e.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "kubejs:molten_notarfbadium","amount": 144},"result": "cuboidmod:notarfbadium_ingot","cooling_time": 180})
    e.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "kubejs:molten_wikidium","amount": 144},"result": "cuboidmod:wikidium_ingot","cooling_time": 190})
    e.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "kubejs:molten_thatldu","amount": 144},"result": "cuboidmod:thatldu_ingot","cooling_time": 200})
    e.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "kubejs:fullerene_fluid","amount": 144},"result": "cuboidmod:carbon_nanotube","cooling_time": 60})

    e.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_sand_cast" },"cast_consumed": true,"fluid": {"name": "kubejs:molten_notsogudium","amount": 144},"result": "cuboidmod:notsogudium_ingot","cooling_time": 160})
    e.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_sand_cast" },"cast_consumed": true,"fluid": {"name": "kubejs:molten_kudbebedda","amount": 144},"result": "cuboidmod:kudbebedda_ingot","cooling_time": 170})
    e.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_sand_cast" },"cast_consumed": true,"fluid": {"name": "kubejs:molten_notarfbadium","amount": 144},"result": "cuboidmod:notarfbadium_ingot","cooling_time": 180})
    e.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_sand_cast" },"cast_consumed": true,"fluid": {"name": "kubejs:molten_wikidium","amount": 144},"result": "cuboidmod:wikidium_ingot","cooling_time": 190})
    e.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_sand_cast" },"cast_consumed": true,"fluid": {"name": "kubejs:molten_thatldu","amount": 144},"result": "cuboidmod:thatldu_ingot","cooling_time": 200})
    e.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_sand_cast" },"cast_consumed": true,"fluid": {"name": "kubejs:fullerene_fluid","amount": 144},"result": "cuboidmod:carbon_nanotube","cooling_time": 60})

    // Alloys

    e.custom({"type": "tconstruct:alloy","inputs": [
        {"name": "kubejs:fullerene_fluid","amount": 144},
        {"name": "kubejs:molten_thatldu","amount": 144},
        {"name": "tconstruct:molten_iron","amount": 144}],
        "result": {"fluid": "tconstruct:molten_osmium","amount": 432},"temperature": 975})

})