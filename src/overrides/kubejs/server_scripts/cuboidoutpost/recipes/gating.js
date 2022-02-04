// priority: 0

onEvent('recipes', e => {

  e.remove({id: 'exnihilosequentia:ens_end_cake'})

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // -- IRON --
  
  // remove tinkers smelting recipes that would give
  // early access to iron

  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/axes'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/boots'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/bucket'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/chestplate'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/crossbow'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/helmet'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/horse_armor'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/ingot_1'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/ingot_2'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/ingot_4'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/ingot_5'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/lantern'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/leggings'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/small'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/tripwire'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/weapon'})

  // remove minecraft recipes that would give
  // early access to iron
  e.remove({id: 'minecraft:iron_nugget_from_blasting'})
  e.remove({id: 'minecraft:iron_nugget_from_smelting'})

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // -- GOLD --
  
  // remove tinkers smelting recipes that would give
  // early access to gold

  e.remove({id: 'tconstruct:smeltery/melting/metal/gold/apple'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/gold/boots'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/gold/chestplate'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/gold/clock'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/gold/enchanted_apple'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/gold/helmet'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/gold/horse_armor'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/gold/leggings'})

  // remove minecraft recipes that would give
  // early access to gold
  e.remove({id: 'minecraft:gold_nugget_from_blasting'})
  e.remove({id: 'minecraft:gold_nugget_from_smelting'})

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // -- LAVA / COBBLE --
  
  // remove standard unfired crucible recipe and add one in that
  // requires grout to try enforce progression by using grout
  // which requires gravel, sand and clay
  e.remove({id: 'exnihilosequentia:ens_crucible_unfired'})
  e.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "c c",
      "c c",
      "cgc"
    ],
    "key": {
      "c": {
        "item": "exnihilosequentia:porcelain_clay"
      },
      "g": {
        "item": "tconstruct:grout"
      }
    },
    "result": {
      "item": "exnihilosequentia:crucible_unfired"
    }
  })

  e.remove({id: 'thermal:machine/pulverizer/pulverizer_granite'})
  e.remove({id: 'thermal:machine/pulverizer/pulverizer_diorite'})
  e.remove({id: 'thermal:machine/pulverizer/pulverizer_andesite'})

  e.remove({id: 'thermal:machine/pulverizer/pulverizer_nickel_ore'})
  e.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "tag": "forge:ores/nickel"
    },
    "result": [
      {
        "item": "immersiveengineering:dust_nickel",
        "chance": 2.0
      },
      {
        "item": "immersiveengineering:dust_copper",
        "chance": 0.1
      }
    ],
    "experience": 0.2
  })

  e.remove({id: 'thermal:machine/pulverizer/pulverizer_copper_ore'})
  e.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "tag": "forge:ores/copper"
    },
    "result": [
      {
        "item": "immersiveengineering:dust_copper",
        "chance": 2.0
      },
      {
        "item": "immersiveengineering:dust_gold",
        "chance": 0.1
      }
    ],
    "experience": 0.2
  })

  e.remove({id: 'thermal:machine/pulverizer/pulverizer_tin_ore'})
  e.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "tag": "forge:ores/tin"
    },
    "result": [
      {
        "item": "mekanism:dust_tin",
        "chance": 2.0
      },
      {
        "item": "thermal:apatite",
        "chance": 0.5
      }
    ],
    "experience": 0.2
  })

  e.remove({id: 'thermal:machine/pulverizer/pulverizer_silver_ore'})
  e.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "tag": "forge:ores/silver"
    },
    "result": [
      {
        "item": "immersiveengineering:dust_silver",
        "chance": 2.0
      },
      {
        "item": "immersiveengineering:dust_lead",
        "chance": 0.1
      }
    ],
    "experience": 0.2
  })

  e.remove({id: 'thermal:compat/create/pulverizer_create_zinc_ore'})

  e.remove({id: 'thermal:compat/immersiveengineering/pulverizer_ie_aluminum_ore'})
  e.custom({
    "type": "thermal:pulverizer",
    "ingredient": {
      "tag": "forge:ores/aluminum"
    },
    "result": [
      {
        "item": "immersiveengineering:dust_aluminum",
        "chance": 2.0
      },
      {
        "item": "immersiveengineering:dust_aluminum",
        "chance": 0.1
      }
    ],
    "experience": 0.2
  })

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // -- NITRO CRYSTAL (enforce visiting nether before Cuboid Overworld) --
  
  e.remove({id: 'powah:energizing/nitro_crystal'})

  e.custom({
    "type": "powah:energizing",
    "ingredients": [
      {"tag": "forge:nether_stars"},
      {"tag": "forge:storage_blocks/redstone"},
      {"tag": "forge:storage_blocks/redstone"},
      {"item": "powah:blazing_crystal_block"},
      {"item": "quark:blaze_lantern"}
    ],
    "energy": 20000000,
    "result": {
      "item": "powah:crystal_nitro",
      "count": 16
    }
  })

})