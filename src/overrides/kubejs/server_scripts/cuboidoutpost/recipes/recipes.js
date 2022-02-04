// priority: 0

onEvent('recipes', e => {
    // helper functions

    const crushing = (name) => {
        e.recipes.create.crushing({
          ingredients: [
            { item: 'cuboidmod:' + name + '_chunk' }
          ],
          results: [
            { item: 'cuboidmod:' + name + '_dust', count: 2 },
            { item: 'cuboidmod:' + name + '_dust', count: 1, chance: 0.5 }
          ]
        })

        e.recipes.thermal.pulverizer([
            '2x cuboidmod:' + name + '_dust',
            Item.of('cuboidmod:silica_dust').withChance(0.5)
          ],             
          'cuboidmod:' + name + '_chunk')

        e.recipes.mekanism.crushing('2x cuboidmod:' + name + '_dust', 'cuboidmod:' + name + '_chunk')
        e.recipes.mekanism.enriching('2x cuboidmod:' + name + '_dust', 'cuboidmod:' + name + '_chunk')

        e.recipes.mekanism.crushing('cuboidmod:' + name + '_dust', 'cuboidmod:' + name + '_ingot')
    }

    const cuboid_ores = [
        'notsogudium', 'kudbebedda', 'notarfbadium', 'wikidium', 'thatldu'
    ]

    cuboid_ores.forEach((name) => {
        // custom ores
        crushing(name)
    })

    // ZINC dust
    e.recipes.thermal.pulverizer(
      ['2x cuboidmod:zinc_dust'],
      '#forge:ores/zinc'
    )

    e.recipes.mekanism.crushing(
      '2x cuboidmod:zinc_dust',
      '#forge:ores/zinc'
    )

    e.smelting('1x create:zinc_ingot', 'cuboidmod:zinc_dust')
    e.blasting('1x create:zinc_ingot', 'cuboidmod:zinc_dust')

    // cobalt dust
    e.recipes.thermal.pulverizer(
      ['2x cuboidmod:cobalt_dust'],
      '#forge:ores/cobalt'
    )

    e.recipes.mekanism.crushing(
      '2x cuboidmod:cobalt_dust',
      '#forge:ores/cobalt'
    )

    e.smelting('1x tconstruct:cobalt_ingot', 'cuboidmod:cobalt_dust')
    e.blasting('1x tconstruct:cobalt_ingot', 'cuboidmod:cobalt_dust')

    // platinum dust
    e.recipes.thermal.pulverizer(
      ['2x kubejs:platinum_dust'],
      '#forge:ores/platinum'
    )

    e.recipes.mekanism.crushing(
      '2x kubejs:platinum_dust',
      '#forge:ores/platinum'
    )

    e.smelting('1x exnihilosequentia:ingot_platinum', 'kubejs:platinum_dust')
    e.blasting('1x exnihilosequentia:ingot_platinum', 'kubejs:platinum_dust')

    // nickel dust - enrichment chamber
    e.recipes.mekanism.enriching(
      '2x immersiveengineering:dust_nickel',
      '#forge:ores/nickel'
    )

    // ingot crushing - mekanism
    e.recipes.mekanism.crushing('immersiveengineering:dust_nickel', '#forge:ingots/nickel')
    e.recipes.mekanism.crushing('cuboidmod:zinc_dust', '#forge:ingots/zinc')
    e.recipes.mekanism.crushing('create:crushed_brass', '#forge:ingots/brass')
    e.recipes.mekanism.crushing('thermal:invar_dust', '#forge:ingots/invar')
    e.recipes.mekanism.crushing('thermal:signalum_dust', '#forge:ingots/signalum')
    e.recipes.mekanism.crushing('thermal:lumium_dust', '#forge:ingots/lumium')
    e.recipes.mekanism.crushing('thermal:enderium_dust', '#forge:ingots/enderium')
    e.recipes.mekanism.crushing('cuboidmod:cobalt_dust', '#forge:ingots/cobalt')
    e.recipes.mekanism.crushing('immersiveengineering:dust_aluminum', '#forge:ingots/aluminum')
    e.recipes.mekanism.crushing('immersiveengineering:dust_silver', '#forge:ingots/silver')
    e.recipes.mekanism.crushing('immersiveengineering:dust_constantan', '#forge:ingots/constantan')
    e.recipes.mekanism.crushing('immersiveengineering:dust_electrum', '#forge:ingots/electrum')
    e.recipes.mekanism.crushing('kubejs:platinum_dust', '#forge:ingots/platinum')

    // initial molecular recycler recipe
    e.shaped('cuboidmod:molecular_recycler', [
      'FHF',
      'TCT',
      'REP'
    ], {
      H: 'minecraft:hopper',
      F: 'cuboidmod:notsogudium_furnace',
      T: 'cuboidmod:notsogudium_crafting_table',
      C: 'thermal:machine_centrifuge',
      R: 'cuboidmod:notsogudium_singularity_resource_generator',
      E: 'mekanism:advanced_energy_cube',
      P: '#cuboidmod:quantum_singularities'
    })

    // subsequent molecular recycler recipe
    e.shaped('cuboidmod:molecular_recycler', [
      'FHF',
      'TCT',
      'REP'
    ], {
      H: 'minecraft:hopper',
      F: 'cuboidmod:notarfbadium_furnace',
      T: 'cuboidmod:notarfbadium_crafting_table',
      C: 'cuboidmod:notsogudium_singularity_power_generator',
      R: 'cuboidmod:notarfbadium_singularity_resource_generator',
      E: 'minecraft:redstone_block',
      P: '#cuboidmod:quantum_singularities'
    })

    // initial quantum transmutation chamber recipe
    e.shaped('cuboidmod:quantum_transmutation_chamber', [
      ' H ',
      'RAR',
      'QFQ'
    ], {
      H: 'minecraft:hopper',
      R: 'minecraft:redstone',
      A: 'appliedenergistics2:controller',
      F: 'thermal:machine_furnace',
      Q: '#cuboidmod:quantum_singularities'
    })

    e.custom({
      type: 'cuboidmod:transmuting',
      base: {
        item: 'cuboidmod:rotten_apple'
      },
      addition: {
        item: 'cuboidmod:protein_fiber'
      },
      result: {
        item: 'exnihilosequentia:silkworm',
        count: 6
      },
      work_ticks: 120,
      energy: 3000
    })

    // substitute with additional 5% chance apple drops instead
    e.custom({
      type: 'exnihilosequentia:crook',
      results: [
        {
          chance: 0.05,
          item: 'minecraft:apple',
          count: 1
        }
      ],
      input: {
        tag: 'minecraft:leaves'
      }
    })

    // shears
    e.shaped('minecraft:shears', [
      ' I',
      'I ',
    ], {
      I: '#cuboidmod:ingots'
    })

    // drying cupboard recipe
    e.shaped('cuboidmod:drying_cupboard', [
      'PLP',
      'EAE',
      'ALA'
    ], {
      P: 'minecraft:dark_oak_planks',
      L: 'minecraft:dark_oak_log',
      E: 'mekanism:energy_tablet',
      A: 'mekanism:alloy_infused'
    })

    // piston recipe
    e.shaped('minecraft:piston', [
      'PPP',
      'STS',
      'SRS'
    ], {
      P: '#minecraft:planks',
      S: '#forge:stone',
      T: 'cuboidmod:thatldu_ingot',
      R: 'minecraft:redstone'
    })

    // flint and steel recipe
    e.shapeless('minecraft:flint_and_steel', [
      'minecraft:flint',
      '#cuboidmod:ingots'
    ])

    // compass
    e.shaped('minecraft:compass', [
      ' W ',
      'WRW',
      ' W '
    ], {
      W: 'cuboidmod:wikidium_ingot',
      R: 'minecraft:redstone'
    })

    e.custom({
      type: 'cuboidmod:transmuting',
      base: {
        item: 'cuboidmod:wikidium_chunk'
      },
      addition: {
        item: 'minecraft:iron_nugget'
      },
      result: {
        item: 'immersiveengineering:dust_iron',
        count: 1
      },
      work_ticks: 300,
      energy: 3000
    })

    // Slime
    e.shapeless('minecraft:slime_ball', [
      'minecraft:lime_dye',
      'kubejs:albumen'
    ])

    // Concealment Key (aka shroud key)
    e.shapeless('storagedrawers:shroud_key', [
      'storagedrawers:drawer_key',
      'minecraft:ender_pearl'
    ])

    // eumus furnace recipe
    e.shaped('cuboidmod:eumus_furnace', [
      'EEE',
      'E E',
      'EEE'
    ], {
      E: 'endergetic:eumus'
    })

    // piston recipe
    e.shaped('minecraft:name_tag', [
      ' II',
      'LSI',
      'PL '
    ], {
      P: 'minecraft:paper',
      L: 'minecraft:leather',
      I: '#forge:ingots/iron',
      S: '#minecraft:signs'
    })

    // lactic acid bucket
    e.shapeless('kubejs:lactic_acid_bucket', [
      'minecraft:milk_bucket',
      '#forge:dusts/salt',
      'minecraft:bucket'
    ])
    
    // make going from cellulose chiseled bricks back to cellulose blocks a "thing"
    // to give people a chance at correcting / reclaiming blocks
    e.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "##",
        "##"
      ],
      "key": {
        "#": {
          "item": "cuboidmod:cellulose_chiseled_bricks"
        }
      },
      "result": {
        "item": "cuboidmod:cellulose_block",
        "count": 4
      }
    })

    // make producing cellulose a bit easier by letting people use water bottles instead
    e.custom({
      "type": "cuboidmod:transmuting",
      "base": {
        "item": "cuboidmod:carbon_deposit"
      },
      "addition": {
          "type": "forge:nbt",
          "item": "minecraft:potion",
          "nbt": "{Potion:'minecraft:water'}"
      },
      "result": {
        "item": "cuboidmod:cellulose",
        "count": 2
      },
      "work_ticks": 150,
      "energy": 5000
    })

    // fiber optic tree
    e.shaped('cuboidmod:fiber_optic_tree', [
      'FOT',
      ' S ',
      'BDB'
    ], {
      F: 'cuboidmod:protein_fiber',
      O: 'minecraft:spider_eye',
      S: 'minecraft:stick',
      T: '#forge:sapling',
      B: 'minecraft:brick',
      D: 'minecraft:dirt'
    })
  
    // saddle
    e.shaped('minecraft:saddle', [
      'L N',
      'LLL',
      ' N '
    ], {
      L: 'minecraft:leather',
      N: '#forge:nuggets/iron'
    })
    
    // stonecutter
    e.shaped('minecraft:stonecutter', [
      ' W ',
      'SSS'
    ], {
      W: 'cuboidmod:wikidium_ingot',
      S: '#forge:stone'
    })

})