// priority: 0

onEvent('recipes', e => {
    // remove tree seed drops from sieving dirt
    e.remove({id: 'exnihilosequentia:sieve/ens_seed_acacia'})
    e.remove({id: 'exnihilosequentia:sieve/ens_seed_birch'})
    e.remove({id: 'exnihilosequentia:sieve/ens_seed_darkoak'})
    e.remove({id: 'exnihilosequentia:sieve/ens_seed_jungle'})
    e.remove({id: 'exnihilosequentia:sieve/ens_seed_oak'})
    e.remove({id: 'exnihilosequentia:sieve/ens_seed_spruce'})

    // add in tree seed drops for block of cellulose
    const tree_seeds = [
      'acacia', 'birch', 'darkoak', 'jungle', 'oak', 'spruce'
    ]

    tree_seeds.forEach((name) => {
      e.custom({
        type: 'exnihilosequentia:sieve',
        rolls: [
          {
            chance: 0.075,
            mesh: 'string'
          }
        ],
        input: {
          item: 'cuboidmod:cellulose_block'
        },
        result: {
          item: 'exnihilosequentia:seed_' + name
        }
      })
    })
})