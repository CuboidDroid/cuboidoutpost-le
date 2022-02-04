// priority: 0

onEvent('recipes', e => {

  // 2 - Torch
  e.remove({id: 'exnihilosequentia:heat/ens_torch'})

  e.custom({
    "type": "exnihilosequentia:heat",
    "block": "minecraft:torch",
    "amount": 2
  })

  // 2 - Wall Torch
  e.remove({id: 'exnihilosequentia:heat/ens_wall_torch'})

  e.custom({
    "type": "exnihilosequentia:heat",
    "block": "minecraft:wall_torch",
    "amount": 2
  })

  // 3 - magma block
  e.remove({id: 'exnihilosequentia:heat/ens_magma_block'})

  e.custom({
    "type": "exnihilosequentia:heat",
    "block": "minecraft:magma_block",
    "amount": 3
  })

  // 4 - Shroomlight
  e.remove({id: 'exnihilosequentia:heat/ens_shroomlight'})

  e.custom({
    "type": "exnihilosequentia:heat",
    "block": "minecraft:shroomlight",
    "amount": 4
  })

  // 5 - Glowstone
  e.remove({id: 'exnihilosequentia:heat/ens_glowstone'})

  e.custom({
    "type": "exnihilosequentia:heat",
    "block": "minecraft:glowstone",
    "amount": 5
  })

  // 7 - Lava
  e.remove({id: 'exnihilosequentia:heat/ens_lava'})

  e.custom({
    "type": "exnihilosequentia:heat",
    "block": "minecraft:lava",
    "amount": 7
  })

  // 8 - Fire
  e.remove({id: 'exnihilosequentia:heat/ens_fire'})

  e.custom({
    "type": "exnihilosequentia:heat",
    "block": "minecraft:fire",
    "amount": 8
  })
  
  // 8 - Soul Fire
  e.remove({id: 'exnihilosequentia:heat/ens_soul_fire'})

  e.custom({
    "type": "exnihilosequentia:heat",
    "block": "minecraft:soul_fire",
    "amount": 8
  })
  
  // 10 - Blazewood
  e.custom({
    "type": "exnihilosequentia:heat",
    "block": "tconstruct:blazewood",
    "amount": 10
  })

  // 15 - Uranium block
  e.custom({
    "type": "exnihilosequentia:heat",
    "block": "immersiveengineering:storage_uranium",
    "amount": 15
  })

  // 20 - Uraninite block
  e.custom({
    "type": "exnihilosequentia:heat",
    "block": "powah:uraninite_block",
    "amount": 20
  })
    
  // 30 - Blazing Crystal block
  e.custom({
    "type": "exnihilosequentia:heat",
    "block": "powah:blazing_crystal_block",
    "amount": 30
  })

  // 100 - Nitro Crystal block
  e.custom({
    "type": "exnihilosequentia:heat",
    "block": "powah:nitro_crystal_block",
    "amount": 100
  })
    
})