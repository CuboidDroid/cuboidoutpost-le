// priority: 0

onEvent('recipes', e => {
  // remove standard drops
  e.remove({id: 'exnihilosequentia:sieve/ens_pebble_stone'})

  e.remove({id: 'exnihilosequentia:sieve/ens_pebble_andesite'})
  e.remove({id: 'exnihilosequentia:sieve/ens_pebble_basalt'})
  e.remove({id: 'exnihilosequentia:sieve/ens_pebble_blackstone'})
  e.remove({id: 'exnihilosequentia:sieve/ens_pebble_diorite'})
  e.remove({id: 'exnihilosequentia:sieve/ens_pebble_granite'})

  // add drops for diamond mesh and dirt
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 1.0,
        "mesh": "diamond"
      },
      {
        "chance": 1.0,
        "mesh": "diamond"
      },
      {
        "chance": 0.5,
        "mesh": "diamond"
      },
      {
        "chance": 0.5,
        "mesh": "diamond"
      },
      {
        "chance": 0.1,
        "mesh": "diamond"
      },
      {
        "chance": 0.1,
        "mesh": "diamond"
      }
    ],
    "input": {
      "item": "minecraft:dirt"
    },
    "result": {
      "item": "exnihilosequentia:pebble_stone"
    }
  })

  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.5,
        "mesh": "string"
      },
      {
        "chance": 0.5,
        "mesh": "string"
      }
    ],
    "input": {
      "item": "minecraft:dirt"
    },
    "result": {
      "item": "exnihilosequentia:pebble_andesite"
    }
  })

  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.5,
        "mesh": "string"
      },
      {
        "chance": 0.3,
        "mesh": "string"
      }
    ],
    "input": {
      "item": "minecraft:dirt"
    },
    "result": {
      "item": "exnihilosequentia:pebble_basalt"
    }
  })

  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.5,
        "mesh": "string"
      },
      {
        "chance": 0.3,
        "mesh": "string"
      }
    ],
    "input": {
      "item": "minecraft:dirt"
    },
    "result": {
      "item": "exnihilosequentia:pebble_blackstone"
    }
  })

  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.5,
        "mesh": "string"
      },
      {
        "chance": 0.5,
        "mesh": "string"
      }
    ],
    "input": {
      "item": "minecraft:dirt"
    },
    "result": {
      "item": "exnihilosequentia:pebble_diorite"
    }
  })

  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 0.5,
        "mesh": "string"
      },
      {
        "chance": 0.5,
        "mesh": "string"
      }
    ],
    "input": {
      "item": "minecraft:dirt"
    },
    "result": {
      "item": "exnihilosequentia:pebble_granite"
    }
  })
})
