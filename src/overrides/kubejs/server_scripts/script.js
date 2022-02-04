// priority: 0

/*	
	Scripts that get loaded every time server resources reload - Used for 
	modifying recipes, tags, loot tables, and handling server events 
	(Can be reloaded with /reload)
*/

console.info('Cuboid Outpost - Server resources loaded')

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
