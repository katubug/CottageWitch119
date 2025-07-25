/**
 * Allows reapers to be repaired with 'meat' foods.
 * Is repaired more by higher nutrition foods.
 */
ForgeEvents.onEvent("net.minecraftforge.event.AnvilUpdateEvent", (event) => {
	global.fe.reaperMeatRepair(event);
});
