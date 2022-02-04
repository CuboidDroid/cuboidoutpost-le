// priority: 0

onEvent('recipes', e => {
    // Quantum Transmutation Chamber recipes for seeds
    
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
            "energy": 5000
          })
    }

    // pinenut to be able to make pinenut sapling 
    qtc("pamhc2trees:pinenutitem", "pamhc2crops:pineappleseeditem", "pamhc2crops:pineappleseeditem")
    // maple syrup to be able to make maple sapling 
    qtc("pamhc2trees:maplesyrupitem", "minecraft:sugar", "exnihilosequentia:seed_sugarcane")

    // - A -
    qtc("pamhc2trees:avocado_sapling", "pamhc2trees:candlenut_sapling", "pamhc2trees:pinenut_sapling")
    qtc("pamhc2trees:apricot_sapling", "pamhc2trees:peach_sapling", "pamhc2trees:pomegranate_sapling")
    qtc("pamhc2trees:almond_sapling", "pamhc2trees:durian_sapling", "pamhc2trees:cashew_sapling")

    // - B -
    qtc("pamhc2trees:banana_sapling", "pamhc2trees:walnut_sapling", "pamhc2trees:lemon_sapling")
    qtc("pamhc2trees:breadfruit_sapling", "pamhc2trees:peppercorn_sapling", "pamhc2trees:vanillabean_sapling")

    // - C -
    qtc("pamhc2trees:candlenut_sapling", "pamhc2trees:pinenut_sapling", "pamhc2trees:apple_sapling")
    qtc("pamhc2trees:cherry_sapling", "pamhc2trees:maple_sapling", "pamhc2trees:apple_sapling")
    qtc("pamhc2trees:chestnut_sapling", "pamhc2trees:candlenut_sapling", "pamhc2trees:cherry_sapling")
    qtc("pamhc2trees:cashew_sapling", "pamhc2trees:soursop_sapling", "pamhc2trees:hazelnut_sapling")
    qtc("pamhc2trees:cinnamon_sapling", "pamhc2trees:hazelnut_sapling", "pamhc2trees:banana_sapling")
    qtc("pamhc2trees:coconut_sapling", "pamhc2trees:cashew_sapling", "pamhc2trees:cinnamon_sapling")

    // - D -
    qtc("pamhc2trees:dragonfruit_sapling", "pamhc2trees:plum_sapling", "pamhc2trees:maple_sapling")
    qtc("pamhc2trees:date_sapling", "pamhc2trees:pomegranate_sapling", "pamhc2trees:maple_sapling")
    qtc("pamhc2trees:durian_sapling", "pamhc2trees:pinenut_sapling", "pamhc2trees:soursop_sapling")

    // - E -
    // - F -
    qtc("pamhc2trees:fig_sapling", "pamhc2trees:apricot_sapling", "pamhc2trees:date_sapling")
    // Fiery Blossom Sapling
    qtc("quark:red_blossom_sapling", "pamhc2trees:breadfruit_sapling", "pamhc2trees:pecan_sapling")
    // Frosty Blossom Sapling
    qtc("quark:blue_blossom_sapling", "pamhc2trees:pecan_sapling", "pamhc2trees:starfruit_sapling")

    // - G - 
    qtc("pamhc2trees:gooseberry_sapling", "pamhc2trees:chestnut_sapling", "pamhc2trees:plum_sapling")
    qtc("pamhc2trees:grapefruit_sapling", "pamhc2trees:orange_sapling", "pamhc2trees:apricot_sapling")
    qtc("pamhc2trees:guava_sapling", "pamhc2trees:almond_sapling", "pamhc2trees:coconut_sapling")

    qtc("tconstruct:earth_slime_sapling", "tconstruct:sky_slime_sapling", "minecraft:slime_block")

    // - H -
    qtc("pamhc2trees:hazelnut_sapling", "pamhc2trees:pawpaw_sapling", "pamhc2trees:walnut_sapling")

    // - I -
    // - J -
    qtc("pamhc2trees:jackfruit_sapling", "pamhc2trees:papaya_sapling", "pamhc2trees:passionfruit_sapling")

    // - K -
    // - L -
    qtc("pamhc2trees:lemon_sapling", "pamhc2trees:nutmeg_sapling", "pamhc2trees:gooseberry_sapling")
    qtc("pamhc2trees:lychee_sapling", "pamhc2trees:date_sapling", "pamhc2trees:maple_sapling")
    qtc("pamhc2trees:lime_sapling", "pamhc2trees:guava_sapling", "pamhc2trees:peppercorn_sapling")

    // - M -
    qtc("pamhc2trees:mango_sapling", "pamhc2trees:banana_sapling", "pamhc2trees:orange_sapling")

    // - N -
    qtc("pamhc2trees:nutmeg_sapling", "pamhc2trees:avocado_sapling", "pamhc2trees:chestnut_sapling")

    // - O -
    qtc("pamhc2trees:orange_sapling", "pamhc2trees:lemon_sapling", "pamhc2trees:peach_sapling")
    qtc("pamhc2trees:olive_sapling", "pamhc2trees:cinnamon_sapling", "pamhc2trees:mango_sapling")

    // - P -
    qtc("pamhc2trees:plum_sapling", "pamhc2trees:cherry_sapling", "pamhc2trees:maple_sapling")
    qtc("pamhc2trees:pear_sapling", "pamhc2trees:pinenut_sapling", "pamhc2trees:avocado_sapling")
    qtc("pamhc2trees:pawpaw_sapling", "pamhc2trees:pinenut_sapling", "pamhc2trees:pear_sapling")
    qtc("pamhc2trees:peach_sapling", "pamhc2trees:gooseberry_sapling", "pamhc2trees:dragonfruit_sapling")
    qtc("pamhc2trees:pomegranate_sapling", "pamhc2trees:dragonfruit_sapling", "pamhc2trees:maple_sapling")
    qtc("pamhc2trees:papaya_sapling", "pamhc2trees:mango_sapling", "pamhc2trees:grapefruit_sapling")
    qtc("pamhc2trees:passionfruit_sapling", "pamhc2trees:grapefruit_sapling", "pamhc2trees:fig_sapling")
    qtc("pamhc2trees:peppercorn_sapling", "pamhc2trees:coconut_sapling", "pamhc2trees:olive_sapling")
    qtc("pamhc2trees:pecan_sapling", "pamhc2trees:vanillabean_sapling", "pamhc2trees:jackfruit_sapling")
    qtc("pamhc2trees:persimmon_sapling", "pamhc2crops:tomatilloseeditem", "pamhc2trees:jackfruit_sapling")
    qtc("pamhc2trees:pistachio_sapling", "pamhc2trees:peppercorn_sapling", "pamhc2crops:soybeanseeditem")

    // - Q - 
    // - R -
    qtc("pamhc2trees:rambutan_sapling", "pamhc2trees:fig_sapling", "pamhc2trees:lychee_sapling")

    // - S -
    qtc("pamhc2trees:soursop_sapling", "pamhc2trees:pinenut_sapling", "pamhc2trees:pawpaw_sapling")
    qtc("pamhc2trees:starfruit_sapling", "pamhc2trees:jackfruit_sapling", "pamhc2trees:tamarind_sapling")
    // Serene Blossom Sapling
    qtc("quark:lavender_blossom_sapling", "pamhc2trees:lime_sapling", "pamhc2trees:breadfruit_sapling")
    // Sunny Blossom Sapling
    qtc("quark:yellow_blossom_sapling", "quark:red_blossom_sapling", "quark:blue_blossom_sapling")
    // Sweet Blossom Sapling
    qtc("quark:pink_blossom_sapling", "quark:orange_blossom_sapling", "quark:yellow_blossom_sapling")

    // - T -
    qtc("pamhc2trees:tamarind_sapling", "pamhc2trees:passionfruit_sapling", "pamhc2trees:rambutan_sapling")

    // - U -
    // - V -
    qtc("pamhc2trees:vanillabean_sapling", "pamhc2trees:olive_sapling", "pamhc2trees:papaya_sapling")

    // - W -
    qtc("pamhc2trees:walnut_sapling", "pamhc2trees:pear_sapling", "pamhc2trees:nutmeg_sapling")
    // Warm Blossom Sapling
    qtc("quark:orange_blossom_sapling", "quark:lavender_blossom_sapling", "quark:red_blossom_sapling")

    // - X -
    // - Y -
    // - Z -

})