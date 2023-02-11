// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('KubeJS server script loaded')

onEvent('recipes', event => {
	// Change recipes here
	
	
	
	//removed EFLN item due to being too op as a hand-thrown nuclear warhead
	event.remove({id:'tconstruct:gadgets/throwball/efln_ball'})
	
	
	/*//WIP
	let interBasicBullet = 'kubejs:incomplete_basic_bullet'
	event.recipes.createSequencedAssembly([
	Item.of('6x cgm:basic_bullet')
	],'create:brass_sheet',[
	event.recipes.createDeploying(interBasicBullet,[interBasicBullet,Item.of('6x cgm:basic_bullet')]),
	event.recipes.createDeploying(interBasicBullet,[interBasicBullet,'6x minecraft:iron_nugget']),
	event.recipes.createPressing(interBasicBullet, interBasicBullet)
	]).transitionalItem(interBasicBullet).loops(1)
	*/







})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore'
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
	
	//Allows stripped logs from Regions Unexplored and Twigs mods to be used with Create
	event.add('forge:stripped_logs', /regions_unexplored:stripped.+(_log|_wood)/)
	event.add('forge:stripped_logs', 'twigs:stripped_bundled_bamboo')
	
	
	
})