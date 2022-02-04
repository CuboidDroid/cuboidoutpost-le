// priority: 0

onEvent('recipes', e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "    K    ",
          "   Q R   ",
          "    G    ",
          " M A C O ",
          "I E   F J",
          " N D A P ",
          "    H    ",
          "   B S   ",
          "    L    "
        ],
        "key": {
          "A": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:diamond" } },
          "B": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:aluminum" } },
          "C": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:bronze" } },
          "D": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:coal" } },
          "E": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:copper" } },
          "F": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:electrum" } },
          "G": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:emerald" } },
          "H": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:glowstone" } },
          "I": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:invar" } },
          "J": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:iron" } },
          "K": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:lapis_lazuli" } },
          "L": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:lead" } },
          "M": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:nickel" } },
          "N": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:platinum" } },
          "O": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:redstone" } },
          "P": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:silver" } },
          "Q": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:steel" } },
          "R": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:tin" } },
          "S": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": { "Id": "extendedcrafting:uranium" } }
        },
        "result": {
          "item": "extendedcrafting:ultimate_singularity"
        }
      })
})