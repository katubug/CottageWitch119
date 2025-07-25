/**
 * Creates particle effects and sound upon entity teleport
 */
ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityTeleportEvent", (event) =>
	global.fe.teleportFX(event)
);
