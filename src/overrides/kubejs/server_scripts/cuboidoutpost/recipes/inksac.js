// priority: 0

onEvent('recipes', e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    e.custom({
        "type": "interactio:item_fluid_transform",
        "inputs": [
            {
                "item": "cuboidmod:carbon_deposit",
                "count": 1
            },
            {
                "item": "excompressum:uncompressed_coal",
                "count": 1
            },
            {
                "item": "minecraft:gunpowder",
                "count": 1
            }
        ],
        "fluid": {
            "fluid": "exnihilosequentia:sea_water"
        },
        "output": {
            "entries": [
                {
                    "result": {
                        "item": "minecraft:ink_sac",
                        "count": 3
                    },
                    "weight": 0.25
                },
                {
                    "result": {
                        "item": "minecraft:ink_sac",
                        "count": 4
                    },
                    "weight": 0.5
                },
                {
                    "result": {
                        "item": "minecraft:ink_sac",
                        "count": 5
                    },
                    "weight": 0.25
                },
            ],
            "empty_weight": 0,
            "rolls": 1
        },
        "consume_fluid": 0.1
    })
})