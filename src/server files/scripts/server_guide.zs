// This script makes the Cuboid Outpost server guide book available to players

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// --- Automatically give Server Guide to new players?
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Set this value to false instead of true if you do not want players to 
// automatically receive the server guide book when they join your server
var giveServerGuide = true as bool;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// --- Allow players to craft the Server Guide from basic materials?
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Set this value to false instead of true if you do not want players to 
// be able to craft the Server Guide in a crafting table
var addRecipe = true as bool;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// --- DON'T CHANGE ANYTHING BELOW THIS NOTICE OR THINGS MIGHT GO WRONG!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

if (giveServerGuide) {
    mods.initialinventory.InvHandler.addStartingItem("server_guide", <item:patchouli:guide_book>.withTag({"patchouli:book":"patchouli:cuboidoutpost_server_guide"}));
}

if (addRecipe) {
    craftingTable.addShapeless("co_server_guide", <item:patchouli:guide_book>.withTag({"patchouli:book":"patchouli:cuboidoutpost_server_guide"}), [<item:cuboidmod:carbon_deposit>, <item:cuboidmod:silica_dust>]);
}
