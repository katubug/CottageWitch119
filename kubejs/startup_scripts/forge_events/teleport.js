/**
 * Creates particle effects and sound upon entity teleport
 * Forge event - uses global function to allow for easier dev
 */
ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityTeleportEvent", (event) =>
	global.FE_teleportFX(event)
);
