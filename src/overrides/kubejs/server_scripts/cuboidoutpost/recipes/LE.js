// priority: 0

onEvent('recipes', e => {
    // remove default infinity booster card recipe

    e.remove({ id: 'ae2wtlib:infinity_booster_card' })

    e.custom({
        "result": {
            "item": "ae2wtlib:infinity_booster_card"
        },
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "ERE",
            "RSR",
            "NNN"
        ],
        "key": {
            "E": {
                "item": "minecraft:ender_eye"
            },
            "R": {
                "item": "appliedenergistics2:wireless_receiver"
            },
            "S": {
                "item": "powah:energizing_rod_spirited"
            },
            "N": {
                "item": "minecraft:netherite_ingot"
            }
        }
    })

    e.remove({ id: 'rsinfinitybooster:infinity_card' })

    e.custom({
        "result": {
            "item": "rsinfinitybooster:infinity_card"
        },
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "ERE",
            "RSR",
            "NNN"
        ],
        "key": {
            "E": {
                "item": "minecraft:ender_eye"
            },
            "R": {
                "item": "refinedstorage:range_upgrade"
            },
            "S": {
                "item": "powah:energizing_rod_spirited"
            },
            "N": {
                "item": "minecraft:netherite_ingot"
            }
        }
    })

    // flax (remove single flax -> string - pam's has 2x -> 1 string)
    e.remove({ id: 'supplementaries:strings' })

    e.remove({ id: 'supplementaries:flax_block' })

    e.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "000",
            "000",
            "000"
        ],
        "key": {
            "0": {
                "tag": "forge:fiber/flax"
            }
        },
        "result": {
            "item": "supplementaries:flax_block",
            "count": 1
        }
    })

    e.remove({ id: 'supplementaries:flax_block_2' })

    e.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "0"
        ],
        "key": {
            "0": {
                "item": "supplementaries:flax_block"
            }
        },
        "result": {
            "item": "pamhc2crops:flaxitem",
            "count": 9
        }
    })

    // Add a recipe for the basic magnet from Simple Magnets 
    // to be accessible fairly early on

    e.shaped('simplemagnets:basicmagnet', [
        'IIB',
        'IE ',
        'IIR'
      ], {
        I: 'cuboidmod:kudbebedda_ingot',
        E: 'minecraft:ender_pearl',
        B: 'cuboidmod:carbon_nanotube_block',
        R: 'minecraft:redstone'
      })

})