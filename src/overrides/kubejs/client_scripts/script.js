// priority: 0

/*
	Scripts that get loaded every time client resources reload - Used for 
	JEI events, tooltips and other client side things (Can be reloaded 
	with F3+T)
*/

console.info('Cuboid Outpost - Client resources loaded')

onEvent('jei.hide.items', e => {

    // hide bait recipes in JEI
    e.hide('excompressum:cat_bait')
    e.hide('excompressum:chicken_bait')
    e.hide('excompressum:cow_bait')
    e.hide('excompressum:donkey_bait')
    e.hide('excompressum:fox_bait')
    e.hide('excompressum:horse_bait')
    e.hide('excompressum:llama_bait')
    e.hide('excompressum:mooshroom_bait')
    e.hide('excompressum:ocelot_bait')
    e.hide('excompressum:parrot_bait')
    e.hide('excompressum:pig_bait')
    e.hide('excompressum:polar_bear_bait')
    e.hide('excompressum:rabbit_bait')
    e.hide('excompressum:sheep_bait')
    e.hide('excompressum:sheep_bait_without_grass_seeds')
    e.hide('excompressum:sheep_bait_with_grass_seeds')
    e.hide('excompressum:squid_bait')
    e.hide('excompressum:turtle_bait')
    e.hide('excompressum:wolf_bait')

    e.hide('bountifulbaubles:water_candle')
})