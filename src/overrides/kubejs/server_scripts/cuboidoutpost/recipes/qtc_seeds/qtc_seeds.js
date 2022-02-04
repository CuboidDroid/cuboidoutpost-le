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

        /*
        e.custom({
            "type": "cuboidmod:transmuting",
            "base": {
              "item": input2
            },
            "addition": {
              "item": input1
            },
            "result": {
              "item": result,
              "count": 1
            },
            "work_ticks": 60,
            "energy": 5000
          })
          */
    }

    // - A -
    qtc("pamhc2crops:agaveseeditem", "minecraft:fern", "exnihilosequentia:seed_cactus")
    qtc("pamhc2crops:amaranthseeditem", "pamhc2crops:chilipepperseeditem", "pamhc2crops:oatsseeditem")
    qtc("pamhc2crops:arrowrootseeditem", "pamhc2crops:lentilseeditem", "pamhc2crops:quinoaseeditem")
    qtc("pamhc2crops:artichokeseeditem", "pamhc2crops:leekseeditem", "pamhc2crops:onionseeditem")
    qtc("pamhc2crops:asparagusseeditem", "minecraft:bamboo", "minecraft:wheat_seeds")

    // - B -
    qtc("pamhc2crops:barleyseeditem", "pamhc2crops:cornseeditem", "pamhc2crops:ryeseeditem")
    qtc("pamhc2crops:beanseeditem", "pamhc2crops:chickpeaseeditem", "pamhc2crops:lentilseeditem")
    qtc("pamhc2crops:bellpepperseeditem", "pamhc2crops:okraseeditem", "pamhc2crops:asparagusseeditem")
    qtc("pamhc2crops:blackberryseeditem", "pamhc2crops:elderberryseeditem", "pamhc2crops:candleberryseeditem")
    qtc("pamhc2crops:blueberryseeditem", "pamhc2crops:juniperberryseeditem", "pamhc2crops:kohlrabiseeditem")
    qtc("pamhc2crops:broccoliseeditem", "pamhc2crops:rhubarbseeditem", "pamhc2crops:kaleseeditem")
    qtc("pamhc2crops:brusselsproutseeditem", "pamhc2crops:agaveseeditem", "pamhc2crops:kaleseeditem")

    // - C -
    qtc("pamhc2crops:cabbageseeditem", "pamhc2crops:lettuceseeditem", "pamhc2crops:cauliflowerseeditem")
    qtc("pamhc2crops:cactusfruitseeditem", "pamhc2crops:agaveseeditem", "pamhc2crops:cantaloupeseeditem")
    qtc("pamhc2crops:candleberryseeditem", "pamhc2crops:juteseeditem", "pamhc2crops:peasseeditem")
    qtc("pamhc2crops:cantaloupeseeditem", "exnihilosequentia:seed_sugarcane", "minecraft:cactus")
    qtc("pamhc2crops:cassavaseeditem", "pamhc2crops:mustardseedsseeditem", "pamhc2crops:oatsseeditem")
    qtc("pamhc2crops:cauliflowerseeditem", "pamhc2crops:broccoliseeditem", "pamhc2crops:wintersquashseeditem")
    qtc("pamhc2crops:celeryseeditem", "pamhc2crops:broccoliseeditem", "pamhc2crops:rhubarbseeditem")
    qtc("pamhc2crops:chickpeaseeditem", "pamhc2crops:peasseeditem", "pamhc2crops:soybeanseeditem")
    qtc("pamhc2crops:chilipepperseeditem", "pamhc2crops:gingerseeditem", "pamhc2crops:bellpepperseeditem")
    qtc("pamhc2crops:coffeebeanseeditem", "exnihilosequentia:seed_fern", "exnihilosequentia:seed_cactus")
    qtc("pamhc2crops:cornseeditem", "minecraft:carrot", "minecraft:wheat")
    qtc("pamhc2crops:cottonseeditem", "pamhc2crops:cauliflowerseeditem", "pamhc2crops:celeryseeditem")
    qtc("pamhc2crops:cranberryseeditem", "pamhc2crops:peasseeditem", "pamhc2crops:mulberryseeditem")
    qtc("pamhc2crops:cucumberseeditem", "pamhc2crops:asparagusseeditem", "pamhc2crops:parsnipseeditem")

    // - D -
    // - E -
    qtc("pamhc2crops:eggplantseeditem", "pamhc2crops:juteseeditem", "pamhc2crops:pineappleseeditem")
    qtc("pamhc2crops:elderberryseeditem", "pamhc2crops:pineappleseeditem", "pamhc2crops:mulberryseeditem")

    // - F -
    qtc("pamhc2crops:flaxseeditem", "pamhc2crops:arrowrootseeditem", "pamhc2crops:beanseeditem")

    // - G - 
    qtc("pamhc2crops:garlicseeditem", "pamhc2crops:parsnipseeditem", "pamhc2crops:ryeseeditem")
    qtc("pamhc2crops:gingerseeditem", "pamhc2crops:sweetpotatoseeditem", "pamhc2crops:asparagusseeditem")
    qtc("pamhc2crops:grapeseeditem", "pamhc2crops:okraseeditem", "pamhc2crops:sweetpotatoseeditem")
    qtc("pamhc2crops:greengrapeseeditem", "pamhc2crops:soybeanseeditem", "pamhc2crops:grapeseeditem")

    // - H -
    qtc("pamhc2crops:huckleberryseeditem", "pamhc2crops:juniperberryseeditem", "pamhc2crops:greengrapeseeditem")

    // - I -
    // - J -
    qtc("pamhc2crops:jicamaseeditem", "pamhc2crops:gingerseeditem", "pamhc2crops:kiwiseeditem")
    qtc("pamhc2crops:juniperberryseeditem", "pamhc2crops:gingerseeditem", "pamhc2crops:coffeebeanseeditem")
    qtc("pamhc2crops:juteseeditem", "pamhc2crops:wintersquashseeditem", "pamhc2crops:cactusfruitseeditem")

    // - K -
    qtc("pamhc2crops:kaleseeditem", "minecraft:bamboo", "exnihilosequentia:seed_large_fern")
    qtc("pamhc2crops:kenafseeditem", "pamhc2crops:turnipseeditem", "pamhc2crops:rutabagaseeditem")
    qtc("pamhc2crops:kiwiseeditem", "pamhc2crops:okraseeditem", "pamhc2crops:agaveseeditem")
    qtc("pamhc2crops:kohlrabiseeditem", "pamhc2crops:bellpepperseeditem", "pamhc2crops:cucumberseeditem")

    // - L -
    qtc("pamhc2crops:leekseeditem", "pamhc2crops:barleyseeditem", "pamhc2crops:cucumberseeditem")
    qtc("pamhc2crops:lentilseeditem", "pamhc2crops:soybeanseeditem", "pamhc2crops:greengrapeseeditem")
    qtc("pamhc2crops:lettuceseeditem", "pamhc2crops:cantaloupeseeditem", "pamhc2crops:brusselsproutseeditem")

    // - M -
    qtc("pamhc2crops:milletseeditem", "pamhc2crops:sisalseeditem", "pamhc2crops:whitemushroomseeditem")
    qtc("pamhc2crops:mulberryseeditem", "pamhc2crops:kiwiseeditem", "pamhc2crops:grapeseeditem")
    qtc("pamhc2crops:mustardseedsseeditem", "pamhc2crops:garlicseeditem", "pamhc2crops:cornseeditem")

    // - N -
    // - O -
    qtc("pamhc2crops:oatsseeditem", "pamhc2crops:barleyseeditem", "pamhc2crops:ryeseeditem")
    qtc("pamhc2crops:okraseeditem", "exnihilosequentia:seed_bamboo", "minecraft:carrot")
    qtc("pamhc2crops:onionseeditem", "pamhc2crops:gingerseeditem", "pamhc2crops:garlicseeditem")

    // - P -
    qtc("pamhc2crops:parsnipseeditem", "exnihilosequentia:seed_carrot", "minecraft:potato")
    qtc("pamhc2crops:peanutseeditem", "pamhc2crops:waterchestnutseeditem", "pamhc2crops:milletseeditem")
    qtc("pamhc2crops:peasseeditem", "pamhc2crops:brusselsproutseeditem", "pamhc2crops:grapeseeditem")
    qtc("pamhc2crops:pineappleseeditem", "pamhc2crops:kiwiseeditem", "pamhc2crops:cactusfruitseeditem")

    // - Q - 
    qtc("pamhc2crops:quinoaseeditem", "pamhc2crops:greengrapeseeditem", "pamhc2crops:coffeebeanseeditem")

    // - R -
    qtc("pamhc2crops:radishseeditem", "pamhc2crops:chilipepperseeditem", "pamhc2crops:onionseeditem")
    qtc("pamhc2crops:raspberryseeditem", "pamhc2crops:mulberryseeditem", "pamhc2crops:greengrapeseeditem")
    qtc("pamhc2crops:rhubarbseeditem", "minecraft:sugar_cane", "exnihilosequentia:seed_bamboo")
    qtc("pamhc2crops:riceseeditem", "pamhc2crops:oatsseeditem", "pamhc2crops:cassavaseeditem")
    qtc("pamhc2crops:rutabagaseeditem", "pamhc2crops:mulberryseeditem", "pamhc2crops:jicamaseeditem")
    qtc("pamhc2crops:ryeseeditem", "minecraft:poisonous_potato", "minecraft:wheat")

    // - S -
    qtc("pamhc2crops:scallionseeditem", "pamhc2crops:leekseeditem", "pamhc2crops:garlicseeditem")
    qtc("pamhc2crops:sesameseedsseeditem", "pamhc2crops:flaxseeditem", "pamhc2crops:spiceleafseeditem")
    qtc("pamhc2crops:sisalseeditem", "pamhc2crops:artichokeseeditem", "pamhc2crops:amaranthseeditem")
    qtc("pamhc2crops:soybeanseeditem", "pamhc2crops:coffeebeanseeditem", "pamhc2crops:grapeseeditem")
    qtc("pamhc2crops:spiceleafseeditem", "pamhc2crops:tealeafseeditem", "pamhc2crops:taroseeditem")
    qtc("pamhc2crops:spinachseeditem", "pamhc2crops:lettuceseeditem", "pamhc2crops:celeryseeditem")
    qtc("pamhc2crops:strawberryseeditem", "pamhc2crops:cranberryseeditem", "pamhc2crops:raspberryseeditem")
    qtc("pamhc2crops:sweetpotatoseeditem", "minecraft:sugar_cane", "exnihilosequentia:seed_potato")

    // - T -
    qtc("pamhc2crops:taroseeditem", "pamhc2crops:eggplantseeditem", "pamhc2crops:cabbageseeditem")
    qtc("pamhc2crops:tealeafseeditem", "pamhc2crops:spinachseeditem", "pamhc2crops:cottonseeditem")
    qtc("pamhc2crops:tomatilloseeditem", "pamhc2crops:radishseeditem", "pamhc2crops:zucchiniseeditem")
    qtc("pamhc2crops:tomatoseeditem", "pamhc2crops:huckleberryseeditem", "pamhc2crops:blueberryseeditem")
    qtc("pamhc2crops:turnipseeditem", "pamhc2crops:jicamaseeditem", "pamhc2crops:onionseeditem")

    // - U -
    // - V -
    // - W -
    qtc("pamhc2crops:waterchestnutseeditem", "pamhc2crops:kenafseeditem", "pamhc2crops:tomatilloseeditem")
    qtc("pamhc2crops:whitemushroomseeditem", "pamhc2crops:scallionseeditem", "pamhc2crops:cassavaseeditem")
    qtc("pamhc2crops:wintersquashseeditem", "pamhc2crops:cantaloupeseeditem", "pamhc2crops:rhubarbseeditem")

    // - X -
    // - Y -
    // - Z -
    qtc("pamhc2crops:zucchiniseeditem", "pamhc2crops:cucumberseeditem", "pamhc2crops:leekseeditem")

})