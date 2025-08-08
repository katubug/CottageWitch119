/**
 * summon smol friend pumpkin
 */
BlockEvents.rightClicked((event) => {
    const {
        block: { x, y, z },
        block,
        server,
        item,
    } = event;
    if (item != "minecraft:carved_pumpkin") return;
    if (!IsAdjacentClicked(event, "minecraft:carved_pumpkin", "minecraft:hay_block", "*"))
        return;
    block.up.set("air");
    block.set("air");
    let warden = block.createEntity("byg:pumpkin_warden");
    warden.setPos(x, y, z);
    warden.spawn();
    server.runCommandSilent(`particle heart ${x} ${y + 1} ${z} 1 1 1 0.1 10 normal`);
    server.runCommandSilent(
        `playsound artifacts:generic.pop block @a ${x} ${y + 1} ${z} 1`
    );
});