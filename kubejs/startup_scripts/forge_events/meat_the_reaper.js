/**
 * Allows reapers to be repaired with 'meat' foods.
 * Is repaired more by higher nutrition foods.
 * Forge event - uses global function to allow for easier dev
 */
ForgeEvents.onEvent("net.minecraftforge.event.AnvilUpdateEvent", (event) => {
	global.FE_reaperMeatRepair(event);
});
