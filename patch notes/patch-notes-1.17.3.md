# **Config and Script Changes**

## Misc Changes
- The Entering and Leaving areas popup now no longer overlaps with Jade.
- Tags and NBT data from the Better Tags mod now no longer require Advanced Tooltips to be enabled.
- Disabled the forge version check.
- Fixed the BYG rose being a duplicate requirement in Flower Collecting quests.
- The Mooshroom Plushie is now obtainable.
- Added a quest explaining Moon Dust, to assist with making Glyphic Repositories.
- Fixed two quests which required broken advancements. Not sure what happened there.
- Resonant Apertures now craft fully charged.
- Fixed an issue where consecrating quartz would log span like crazy. Additionally, a lit candle is now required.
- The Moon Dial from Twilight Forest now tells you in chat what the moon phase is, and how long until the next Full Moon.

## Changes to JEI category sorting
- Move all Farmer's Delight and Farmer's Respite options above Create options
- Move create:item_application above other create options (This means manual application will show as a recipe before deploying)
- Move farmingforblockheads:market above Create options
- Move all Extra Delight options above Create options
- Move create:sandpaper_polishing above other create options (this means the manual option of holding a sandpaper will show before giving the sandpaper to a deployer)

# **New Mods**
## Polymorphic Energistics
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/polymorphic-energistics)

_________________
# **Changed Mods**
## Cognition (Experience Obelisk)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/experience-obelisk)

### Cognition-v2.3.4-1.19.2.jar
v2.3.4
======

[Changes]

*   Added visual crafting information in JEI for mechanics such as infecting and filling
*   Mending Neurogel now restores 200 pts of durability or a number of points equivalent to 20% of total durability, whichever is higher
*   Mending Neurogel recipe now requires 2x calcarine matrix instead of 1x, in order to balance it for high-durability items
*   Fluorescent Jelly now gives 2 hunger points instead of 5
*   Added config option to change the hunger points Fluorescent Jelly gives you, or to disable eating it entirely
*   Added config option to change Fluorescent Jelly saturation

[Bugfixes]

*   Fixed bookshelves being displayed as uninfected for a short period if infected twice in the same tick
*   Fixed bookshelves being removed clientside a short period before they actually decay under certain circumstances
*   Minor fixes to the obelisk animation
*   Disabled taking fall damage from the top face of active accelerators
*   Disabled taking fall damage from all agar blocks

[full changelog](https://github.com/terrarium-earth/Cognition/blob/1.19.2/changelog.txt)

## CraftPresence
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/craftpresence)

### [Forge 1.19.2] CraftPresence v2.5.4
CraftPresence Changes
=====================

v2.5.4 (03/27/2025)
-------------------

_A Detailed Changelog from the last release is available [here](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fcompare%252frelease%252fv2.5.3...release%252fv2.5.4)_

See the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) for more info regarding the mod.

### Changes

*   Updated the SimpleRPC Config Migration Layer for V4 users
    *   Schema Versions 24 (`USE_MULTI_RPC`) and 25 (`PAUSE_EVENT`) are now marked as supported
    *   Schemas between version 18 and 24 are marked as unsupported and will print a warning to update your config before retrying migration
    *   Effecting all schemas, conversion for the `%position% / {{player.position}}` placeholder has been adjusted to no longer use `custom.player_info_coordinate`
    *   In the event that multiple `presence` elements are present for an RPC event, CraftPresence will only convert the first one found (This might change in a future update)
    *   Effecting all schemas, conversion for the `server_list` event now also applies for the `GuiDisconnected` screen
*   Added new placeholders to the `server` module: `world.type` and `server.type`
    *   These placeholders retrieve the world type for either a realm or the world, depending on what is used
    *   Results may be inaccurate or absent if the server you are on does not make that info known to the user
    *   The available world types also differ between playing on a realm and on a normal world
*   Adjusted the `world.difficulty` placeholder with better formatting and localization support
    *   Also improved parity for this placeholder with MC 1.6.4 and below (Including the BTA ports!)
*   Added new placeholder, `player.mode`, to the `server` module
    *   Simply retrieves the name of the current game mode
*   Adjusted forced/event-based RPC functionality (`PresenceData#useAsMain`)
    *   When multiple event-based RPC modules are active, the active data will now use the _last_ applicable data entry instead of the _first_
    *   Additionally, an event priority order has been made to ensure proper ordering of events, rather than a randomly sorted list that could result in the wrong event
        *   Event Order (First->Last): `"biome", "dimension", "item", "entity.riding", "entity.target", "server", "menu", "screen"`
        *   (Backend) This list is automatically appended with `DiscordUtils#addForcedData`
        *   (Backend, Breaking) Usages of `DiscordUtils#removeForcedData` have changed to `clearForcedData`, the difference being the latter preserves the event ordering
*   Improved MultiMC and PrismMC Pack Integration support for non-standard directories
    *   Only applies if using versions of MultiMC on or after `2023-03-10`, or any version of Prism Launcher
*   Updated community translations for Turkish, Russian, Persian, French, and Chinese Simplified
*   Removed several instances of excess formatting on placeholders
    *   Related to static/non-function arguments using excess formatting when not needed
    *   Credits to Crosby and Shrecknt for the findings related to this change

### Fixes

*   Fixed an issue where non-server `player` placeholders were removed after exiting a world while using `server` module
*   Fixed the `dimension` module using incorrect data in BTA ports

* * *

### More Information

#### Known Issues

Despite configuration compatibility often being ensured between versions, caution is advised to ensure the best experience, while also baring in mind that features can be adjusted, removed, or added/iterated upon between releases.

Please refer to the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) to view more info relating to known issues.

#### Snapshot Build Info

Some Versions of this Mod are for Minecraft Snapshots or Experimental Versions, and as such, caution should be noted.

Any Snapshot Build released will be marked as **ALPHA** to match its Snapshot Status depending on tests done before release and issues found.

Snapshot Builds, depending on circumstances, may also contain changes for a future version of the mod, and will be noted as so if this is the case with the `-Staging` label.

### [Forge 1.19] CraftPresence v2.5.4
CraftPresence Changes
=====================

v2.5.4 (03/27/2025)
-------------------

_A Detailed Changelog from the last release is available [here](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fcompare%252frelease%252fv2.5.3...release%252fv2.5.4)_

See the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) for more info regarding the mod.

### Changes

*   Updated the SimpleRPC Config Migration Layer for V4 users
    *   Schema Versions 24 (`USE_MULTI_RPC`) and 25 (`PAUSE_EVENT`) are now marked as supported
    *   Schemas between version 18 and 24 are marked as unsupported and will print a warning to update your config before retrying migration
    *   Effecting all schemas, conversion for the `%position% / {{player.position}}` placeholder has been adjusted to no longer use `custom.player_info_coordinate`
    *   In the event that multiple `presence` elements are present for an RPC event, CraftPresence will only convert the first one found (This might change in a future update)
    *   Effecting all schemas, conversion for the `server_list` event now also applies for the `GuiDisconnected` screen
*   Added new placeholders to the `server` module: `world.type` and `server.type`
    *   These placeholders retrieve the world type for either a realm or the world, depending on what is used
    *   Results may be inaccurate or absent if the server you are on does not make that info known to the user
    *   The available world types also differ between playing on a realm and on a normal world
*   Adjusted the `world.difficulty` placeholder with better formatting and localization support
    *   Also improved parity for this placeholder with MC 1.6.4 and below (Including the BTA ports!)
*   Added new placeholder, `player.mode`, to the `server` module
    *   Simply retrieves the name of the current game mode
*   Adjusted forced/event-based RPC functionality (`PresenceData#useAsMain`)
    *   When multiple event-based RPC modules are active, the active data will now use the _last_ applicable data entry instead of the _first_
    *   Additionally, an event priority order has been made to ensure proper ordering of events, rather than a randomly sorted list that could result in the wrong event
        *   Event Order (First->Last): `"biome", "dimension", "item", "entity.riding", "entity.target", "server", "menu", "screen"`
        *   (Backend) This list is automatically appended with `DiscordUtils#addForcedData`
        *   (Backend, Breaking) Usages of `DiscordUtils#removeForcedData` have changed to `clearForcedData`, the difference being the latter preserves the event ordering
*   Improved MultiMC and PrismMC Pack Integration support for non-standard directories
    *   Only applies if using versions of MultiMC on or after `2023-03-10`, or any version of Prism Launcher
*   Updated community translations for Turkish, Russian, Persian, French, and Chinese Simplified
*   Removed several instances of excess formatting on placeholders
    *   Related to static/non-function arguments using excess formatting when not needed
    *   Credits to Crosby and Shrecknt for the findings related to this change

### Fixes

*   Fixed an issue where non-server `player` placeholders were removed after exiting a world while using `server` module
*   Fixed the `dimension` module using incorrect data in BTA ports

* * *

### More Information

#### Known Issues

Despite configuration compatibility often being ensured between versions, caution is advised to ensure the best experience, while also baring in mind that features can be adjusted, removed, or added/iterated upon between releases.

Please refer to the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) to view more info relating to known issues.

#### Snapshot Build Info

Some Versions of this Mod are for Minecraft Snapshots or Experimental Versions, and as such, caution should be noted.

Any Snapshot Build released will be marked as **ALPHA** to match its Snapshot Status depending on tests done before release and issues found.

Snapshot Builds, depending on circumstances, may also contain changes for a future version of the mod, and will be noted as so if this is the case with the `-Staging` label.

### [Forge 1.19.4] CraftPresence v2.5.3
CraftPresence Changes
=====================

v2.5.3 (01/14/2025)
-------------------

_A Detailed Changelog from the last release is available [here](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fcompare%252frelease%252fv2.5.2...release%252fv2.5.3)_

See the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) for more info regarding the mod.

### Changes

*   (Backend) Updated Build Dependencies (Please see the appropriate repositories for changes)
    *   UniLib (`1.0.4` -> `1.0.5`)
    *   Gradle (`8.11` -> `8.12`)
    *   Unimined (`1.3.9` -> `1.3.12`)

### Fixes

*   Fixed an issue where the config was not marked as changed, if only a `PresenceData#smallImageText` element was changed
*   (Backend) Fixed an incorrect `fabric_loader_range`, causing `0.12.x` Fabric Loader issues even when compatible

* * *

### More Information

#### Known Issues

Despite configuration compatibility often being ensured between versions, caution is advised to ensure the best experience, while also baring in mind that features can be adjusted, removed, or added/iterated upon between releases.

Please refer to the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) to view more info relating to known issues.

#### Snapshot Build Info

Some Versions of this Mod are for Minecraft Snapshots or Experimental Versions, and as such, caution should be noted.

Any Snapshot Build released will be marked as **ALPHA** to match its Snapshot Status depending on tests done before release and issues found.

Snapshot Builds, depending on circumstances, may also contain changes for a future version of the mod, and will be noted as so if this is the case with the `-Staging` label.

### [Forge 1.19.3] CraftPresence v2.5.3
CraftPresence Changes
=====================

v2.5.3 (01/14/2025)
-------------------

_A Detailed Changelog from the last release is available [here](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fcompare%252frelease%252fv2.5.2...release%252fv2.5.3)_

See the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) for more info regarding the mod.

### Changes

*   (Backend) Updated Build Dependencies (Please see the appropriate repositories for changes)
    *   UniLib (`1.0.4` -> `1.0.5`)
    *   Gradle (`8.11` -> `8.12`)
    *   Unimined (`1.3.9` -> `1.3.12`)

### Fixes

*   Fixed an issue where the config was not marked as changed, if only a `PresenceData#smallImageText` element was changed
*   (Backend) Fixed an incorrect `fabric_loader_range`, causing `0.12.x` Fabric Loader issues even when compatible

* * *

### More Information

#### Known Issues

Despite configuration compatibility often being ensured between versions, caution is advised to ensure the best experience, while also baring in mind that features can be adjusted, removed, or added/iterated upon between releases.

Please refer to the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) to view more info relating to known issues.

#### Snapshot Build Info

Some Versions of this Mod are for Minecraft Snapshots or Experimental Versions, and as such, caution should be noted.

Any Snapshot Build released will be marked as **ALPHA** to match its Snapshot Status depending on tests done before release and issues found.

Snapshot Builds, depending on circumstances, may also contain changes for a future version of the mod, and will be noted as so if this is the case with the `-Staging` label.

## Friends&Foes (Forge/NeoForge)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/friends-and-foes-forge)

### Friends&Foes 3.0.9
*   Fixed crash related to async update check

### Friends&Foes 3.0.8
*   Fixed Iceologer crash related to casting spells
*   Fixed Crab not having home born from the egg
*   Improved beekeeper compatibility with other mods adding beehives
*   Improved Rascal spawn conditions
*   Added config option to disable lightning rod oxidation
*   Added tooltips to totems

### Friends&Foes 3.0.8
*   Fixed Iceologer crash related to casting spells
*   Fixed Crab not having home born from the egg
*   Improved beekeeper compatibility with other mods adding beehives
*   Improved Rascal spawn conditions
*   Added config option to disable lightning rod oxidation
*   Added tooltips to totems

## Macaw's Fences and Walls
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls)

### v1.2.0 / mc1.19.2 - Forge
Added:  
- 14 New Metal Fences, they can stack upwards to be taller  
- Curved Double Wooden Gates ( Work like doors, but can be stacked upwards )  
- 5 New Double Metal Gates ( Work like doors, but can be stacked upwards )

Changed:  
- Added tooltips for the new stackable metal fences / gates  
- Added new custom block tags

Bugs Fixed:  
- Fence Gates don't have the item minecraft:fence_gates tag  
- Wooden fences don't have the item minecraft:wooden_fences tag  
- Wooden fences don't have the block minecraft:wooden_fences tag  
- Bamboo Advancement for recipe unlock is missing  
- Cherry Fences, Gates have no advancement for recipe unlock 1.20+

Translations:  
- es_cl updated by Ganbare-Lucifer  
- ru_ru updated by cutiegin  
- es_mx added by TheLegendofSaram  
- fr_fr added by Samlegamer  
- ko_kr added by kirito5572  
- tr_tr added by RuyaSavascisi

### v1.2.0 / mc1.19.1 - Forge
Added:  
- 14 New Metal Fences, they can stack upwards to be taller  
- Curved Double Wooden Gates ( Work like doors, but can be stacked upwards )  
- 5 New Double Metal Gates ( Work like doors, but can be stacked upwards )

Changed:  
- Added tooltips for the new stackable metal fences / gates  
- Added new custom block tags

Bugs Fixed:  
- Fence Gates don't have the item minecraft:fence_gates tag  
- Wooden fences don't have the item minecraft:wooden_fences tag  
- Wooden fences don't have the block minecraft:wooden_fences tag  
- Bamboo Advancement for recipe unlock is missing  
- Cherry Fences, Gates have no advancement for recipe unlock 1.20+

Translations:  
- es_cl updated by Ganbare-Lucifer  
- ru_ru updated by cutiegin  
- es_mx added by TheLegendofSaram  
- fr_fr added by Samlegamer  
- ko_kr added by kirito5572  
- tr_tr added by RuyaSavascisi

### v1.2.0 / mc1.19 - Forge
Added:  
- 14 New Metal Fences, they can stack upwards to be taller  
- Curved Double Wooden Gates ( Work like doors, but can be stacked upwards )  
- 5 New Double Metal Gates ( Work like doors, but can be stacked upwards )

Changed:  
- Added tooltips for the new stackable metal fences / gates  
- Added new custom block tags

Bugs Fixed:  
- Fence Gates don't have the item minecraft:fence_gates tag  
- Wooden fences don't have the item minecraft:wooden_fences tag  
- Wooden fences don't have the block minecraft:wooden_fences tag  
- Bamboo Advancement for recipe unlock is missing  
- Cherry Fences, Gates have no advancement for recipe unlock 1.20+

Translations:  
- es_cl updated by Ganbare-Lucifer  
- ru_ru updated by cutiegin  
- es_mx added by TheLegendofSaram  
- fr_fr added by Samlegamer  
- ko_kr added by kirito5572  
- tr_tr added by RuyaSavascisi

### v1.1.2 / mc1.19.4 - Forge
If you are updating from an older version to this one and have already placed grass topped walls or hedges, please note that they will look weird due to performance changes in the update. To resolve this issue, you'll need to perform a block update on affected hedges or grass topped walls. Here's how:  
Place any block above/next to the affected wall or hedge, or break and replace the affected wall or hedge, which will trigger an update for neighboring hedges/walls.

Performance  
- Reduced states from around 11000 to around 4600  
- This causes lower memory usage by 40-50%

Changes  
- Hedges, Grass topped walls will have an adjusted newer model  
- Hedges & Grass Topped Walls are no longer coded as Walls but as Fences ( so instead of 324 states for one wall there is just 32 )  
- Modern walls placed on top of each other now don't leave an open space

Translations added:  
es_cl by Ganbare-Lucifer  
de_de by PatrickK01  
uk_ua by Moonvvell  
ru_ru by cutiegin

Fixed Issues:  
- Grass Topped Walls have a transparent pixel  
- Carpet placed on Grass Topped Walls is z-fighting  
- Grass Topped Walls & Pillar Walls have invisible side when placed  
next to transparent blocks

### v1.1.2 / mc1.19.3 - Forge
If you are updating from an older version to this one and have already placed grass topped walls or hedges, please note that they will look weird due to performance changes in the update. To resolve this issue, you'll need to perform a block update on affected hedges or grass topped walls. Here's how:  
Place any block above/next to the affected wall or hedge, or break and replace the affected wall or hedge, which will trigger an update for neighboring hedges/walls.

Performance  
- Reduced states from around 11000 to around 4600  
- This causes lower memory usage by 40-50%

Changes  
- Hedges, Grass topped walls will have an adjusted newer model  
- Hedges & Grass Topped Walls are no longer coded as Walls but as Fences ( so instead of 324 states for one wall there is just 32 )  
- Modern walls placed on top of each other now don't leave an open space

Translations added:  
es_cl by Ganbare-Lucifer  
de_de by PatrickK01  
uk_ua by Moonvvell  
ru_ru by cutiegin

Fixed Issues:  
- Grass Topped Walls have a transparent pixel  
- Carpet placed on Grass Topped Walls is z-fighting  
- Grass Topped Walls & Pillar Walls have invisible side when placed  
next to transparent blocks


_________________
# **Removed Mods**

## None


_________________

Changelog generated by [CF-Changelog-Generator](https://github.com/Charismara/CF-Changelog-Generator)