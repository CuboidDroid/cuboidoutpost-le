// priority: 0

onEvent('recipes', e => {

    // get rid of bait recipes
    e.remove({id: 'excompressum:cat_bait'})
    e.remove({id: 'excompressum:chicken_bait'})
    e.remove({id: 'excompressum:cow_bait'})
    e.remove({id: 'excompressum:donkey_bait'})
    e.remove({id: 'excompressum:fox_bait'})
    e.remove({id: 'excompressum:horse_bait'})
    e.remove({id: 'excompressum:llama_bait'})
    e.remove({id: 'excompressum:mooshroom_bait'})
    e.remove({id: 'excompressum:ocelot_bait'})
    e.remove({id: 'excompressum:parrot_bait'})
    e.remove({id: 'excompressum:pig_bait'})
    e.remove({id: 'excompressum:polar_bear_bait'})
    e.remove({id: 'excompressum:rabbit_bait'})
    e.remove({id: 'excompressum:sheep_bait_without_grass_seeds'})
    e.remove({id: 'excompressum:sheep_bait_with_grass_seeds'})
    e.remove({id: 'excompressum:squid_bait'})
    e.remove({id: 'excompressum:turtle_bait'})
    e.remove({id: 'excompressum:wolf_bait'})

})
  