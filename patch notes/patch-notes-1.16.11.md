# **New Mods**
## Create Encased
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/create-encased)

## Diagonal Windows [Forge & Fabric]
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/diagonal-windows)

## Load My F***ing Tags
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/lmft)

## Structure Essentials[Forge/Fabric]
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/structure-essentials-forge-fabric)

## Haybale
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/haybale)

## Twilight's Flavors & Delight
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/twilights-flavors-delight)

## Old Jappa's Sand
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/old-jappas-sand)


_________________
# **Changed Mods**
## AmbientSounds 6
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/ambientsounds)

### AmbientSounds_FORGE_v5.3.9_mc1.19.2.jar
*   Fixed glass panes not being considered as a solid block

### AmbientSounds_FORGE_v5.2.18_mc1.19.4.jar
Cold region no longer requires grass to play

### AmbientSounds_FORGE_v5.2.17_mc1.19.4.jar


### AmbientSounds_FORGE_v5.2.17_mc1.19.3.jar
Fixed there being not transition for bird sounds in taiga region

### AmbientSounds_FORGE_v5.2.16_mc1.19.3.jar
Added very_cold region (to play in ice spikes)  
Added ice feature

### AmbientSounds_FORGE_v5.2.15_mc1.19.3.jar
Added deep-dark region (including a deep-dark sound)  
Added a new cave water variant (by Meelee35)  
Added cave sounds to deep-dark  
Removed unused cave.deep file  
Added sculk feature  
Fixed not loading certain sound properties (such as regions, bad-region etc.)

### AmbientSounds_FORGE_v5.2.14_mc1.19.3.jar
Fixed playing rain sound even though it is snowing

### AmbientSounds_FORGE_v5.2.13_mc1.19.3.jar
Ported to 1.19.3

## Cognition (formerly Experience Obelisk)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/experience-obelisk)

### Cognition-v2.2.3-1.19.2.jar
v2.2.3
------

[Changes]

*   Infected bookshelves now drop 4x Forgotten Dust upon decaying rather than remaining as blocks
*   Forgotten Dust blocks are now crafted with 9x Forgotten Dust instead of 4x
*   Swapped Archiver's and Enchanted bookshelves around in the creative tab

[Bugfixes]

*   fixed infected bookshelves not invalidating the block entity immediately upon decaying, which occasionally led to block placement conflicts
*   (hopefully) fixed random stalls in the obelisk active animation

### Cognition-v2.2.2-1.19.2.jar
v2.2.2

[Content]

*   Added crafting recipe to convert any block tagged forge:bookshelves into a vanilla bookshelf. For use with mods like quark, which add unique bookshelves for each wood type
*   Added configuration option for Staff of Attunement range
*   Added sound to play while metamorpher is processing
*   Added description tooltips to blocks & items

[Changes]

*   Reduced bookshelf infection chance to 0.02 from 0.022
*   Rebalanced bibliophage XP generation (see the wiki for more info)

[Bugfixes]

*   Fixed bug which caused bookshelves to generate extra XP & occasionally play the block breaking animation multiple times upon decaying
*   Fixed bug which caused yet-infected bookshelves to sometimes appear infected clientside

### Cognition-v2.2.1-1.19.2.jar
v2.2.1

[Content]

*   Added Fluorescent Jelly

[Changes]

*   Enchanted and Archiver's bookshelves, along with their infected counterparts, now contribute to enchanting power
*   Rebalanced Astute Assembly recipe
*   Rebalanced Molecular Metamorpher recipe
*   Removed feather recipe -- will be implemented some other way in the future
*   Fountain now only emits light when active animation is playing

[Bugfixes]

*   Fixed Metamorpher not returning craft remainder items after recipes have concluded
*   Fixed Metamorpher active animation continuing to play even when slots contain an invalid recipe

### Cognition-v2.1.0.1-1.19.2.jar
[Bugfixes]

*   Fixed smithing recipes for Cognitive toolset and Precision Dispeller
*   Fixed previous changes which were not ported over
*   Set bottle o' enchanting to contain 250mB of cognitium
*   Obelisk item no longer displays fluid information if it does not contain block entity data

## CraftPresence
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/craftpresence)

### CraftPresence v2.4.3 (1.19.2)
CraftPresence Changes
=====================

v2.4.3 (06/27/2024)
-------------------

_A Detailed Changelog from the last release is available [here](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fcompare%252frelease%252fv2.4.2...release%252fv2.4.3)_

See the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) for more info regarding the mod.

### Changes

*   (Backend) Updated Build Dependencies (Please see the appropriate repositories for changes)
    *   Unimined (`1.2.12` -> `1.2.14`)
    *   SpotBugs Annotations (`4.8.5` -> `4.8.6`)
    *   ClassGraph (`4.8.173` -> `4.8.174`)
    *   UniCore (`1.1.10` -> `1.1.11`)
*   Improved `Controls` UI functionality for MC 1.6.4 and below
    *   The UI now appears the same as modern versions of MC
*   Misc. Improvements to consolidate API calls and overall file size

### Fixes

*   Fixed a visual error where the `Reset to Default` button can appear incorrectly in certain areas of `Status Messages`
*   Fixed an issue where `PresenceData` would not be marked as changed if `enabled` or `useAsMain` was modified
*   Fixed an issue where a `not implemented` message would appear when using Icon Selectors
*   Fixed an issue where false-positive save indicators could occur if metadata differs between `Config` instances
*   Fixed an issue where the default language was incorrectly setup on certain MC versions

* * *

### More Information

#### Known Issues

Despite configuration compatibility often being ensured between versions, caution is advised to ensure the best experience, while also baring in mind that features can be adjusted, removed, or added/iterated upon between releases.

Please refer to the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) to view more info relating to known issues.

#### Snapshot Build Info

Some Versions of this Mod are for Minecraft Snapshots or Experimental Versions, and as such, caution should be noted.

Any Snapshot Build released will be marked as **ALPHA** to match its Snapshot Status depending on tests done before release and issues found.

Snapshot Builds, depending on circumstances, may also contain changes for a future version of the mod, and will be noted as so if this is the case with the `-Staging` label.

### CraftPresence v2.4.3 (1.19.4)
CraftPresence Changes
=====================

v2.4.3 (06/27/2024)
-------------------

_A Detailed Changelog from the last release is available [here](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fcompare%252frelease%252fv2.4.2...release%252fv2.4.3)_

See the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) for more info regarding the mod.

### Changes

*   (Backend) Updated Build Dependencies (Please see the appropriate repositories for changes)
    *   Unimined (`1.2.12` -> `1.2.14`)
    *   SpotBugs Annotations (`4.8.5` -> `4.8.6`)
    *   ClassGraph (`4.8.173` -> `4.8.174`)
    *   UniCore (`1.1.10` -> `1.1.11`)
*   Improved `Controls` UI functionality for MC 1.6.4 and below
    *   The UI now appears the same as modern versions of MC
*   Misc. Improvements to consolidate API calls and overall file size

### Fixes

*   Fixed a visual error where the `Reset to Default` button can appear incorrectly in certain areas of `Status Messages`
*   Fixed an issue where `PresenceData` would not be marked as changed if `enabled` or `useAsMain` was modified
*   Fixed an issue where a `not implemented` message would appear when using Icon Selectors
*   Fixed an issue where false-positive save indicators could occur if metadata differs between `Config` instances
*   Fixed an issue where the default language was incorrectly setup on certain MC versions

* * *

### More Information

#### Known Issues

Despite configuration compatibility often being ensured between versions, caution is advised to ensure the best experience, while also baring in mind that features can be adjusted, removed, or added/iterated upon between releases.

Please refer to the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) to view more info relating to known issues.

#### Snapshot Build Info

Some Versions of this Mod are for Minecraft Snapshots or Experimental Versions, and as such, caution should be noted.

Any Snapshot Build released will be marked as **ALPHA** to match its Snapshot Status depending on tests done before release and issues found.

Snapshot Builds, depending on circumstances, may also contain changes for a future version of the mod, and will be noted as so if this is the case with the `-Staging` label.

### CraftPresence v2.4.3 (1.19.3)
CraftPresence Changes
=====================

v2.4.3 (06/27/2024)
-------------------

_A Detailed Changelog from the last release is available [here](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fcompare%252frelease%252fv2.4.2...release%252fv2.4.3)_

See the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) for more info regarding the mod.

### Changes

*   (Backend) Updated Build Dependencies (Please see the appropriate repositories for changes)
    *   Unimined (`1.2.12` -> `1.2.14`)
    *   SpotBugs Annotations (`4.8.5` -> `4.8.6`)
    *   ClassGraph (`4.8.173` -> `4.8.174`)
    *   UniCore (`1.1.10` -> `1.1.11`)
*   Improved `Controls` UI functionality for MC 1.6.4 and below
    *   The UI now appears the same as modern versions of MC
*   Misc. Improvements to consolidate API calls and overall file size

### Fixes

*   Fixed a visual error where the `Reset to Default` button can appear incorrectly in certain areas of `Status Messages`
*   Fixed an issue where `PresenceData` would not be marked as changed if `enabled` or `useAsMain` was modified
*   Fixed an issue where a `not implemented` message would appear when using Icon Selectors
*   Fixed an issue where false-positive save indicators could occur if metadata differs between `Config` instances
*   Fixed an issue where the default language was incorrectly setup on certain MC versions

* * *

### More Information

#### Known Issues

Despite configuration compatibility often being ensured between versions, caution is advised to ensure the best experience, while also baring in mind that features can be adjusted, removed, or added/iterated upon between releases.

Please refer to the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) to view more info relating to known issues.

#### Snapshot Build Info

Some Versions of this Mod are for Minecraft Snapshots or Experimental Versions, and as such, caution should be noted.

Any Snapshot Build released will be marked as **ALPHA** to match its Snapshot Status depending on tests done before release and issues found.

Snapshot Builds, depending on circumstances, may also contain changes for a future version of the mod, and will be noted as so if this is the case with the `-Staging` label.

### CraftPresence v2.4.2 (1.19.4)
CraftPresence Changes
=====================

v2.4.2 (06/20/2024)
-------------------

_A Detailed Changelog from the last release is available [here](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fcompare%252frelease%252fv2.4.0...release%252fv2.4.2)_

See the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) for more info regarding the mod.

### Changes

*   (Backend) Updated Build Dependencies (Please see the appropriate repositories for changes)
    *   Shadow (`com.github.johnrengelman.shadow@8.1.1` -> `io.github.goooler.shadow@8.1.7`)
    *   Gradle (`8.7` -> `8.8`)
    *   Unimined (`1.2.7` -> `1.2.12`)
    *   JVMDowngrader (`0.7.1` -> `0.7.2`)
    *   UniCore (`1.1.9` -> `1.1.10`)
    *   DiscordIPC (`0.9.1` -> `0.9.2`)
    *   Starscript (`0.3.3` -> `0.3.4`)
*   Implemented full support for Minecraft Realms Status Configuration
    *   Added a new `Realm Message` option to `Status Messages`
    *   Adjusted `server` override, `server.message`, and `server.icon` placeholders to use `realmData` instead of `serverData`
    *   Adjusted `server.name` and `server.motd` placeholders to use the Realm Name and Description accordingly
    *   Adjusted `server.icon` to fall back to the Realm owner icon, if available
    *   Added `server.minigame` as a Realm Exclusive placeholder for the minigame name
*   Several changes to the Simple RPC Config Migration Layer (`HypherConverter`)
    *   Now supported on MC 1.6.4 and below (Some settings are skipped on some MC versions)
    *   Added support for the `%realmname%`, `%realmdescription%`, `%realmgame%`, and `%realmicon%` placeholders
    *   Added support for the `realms` event
*   Misc. API and Performance Improvements

### Fixes

*   Fixed a runtime ASM crash that could occur on Forge clients in MC 1.13.x and 1.14.x
    *   This issue could also occur on certain versions of Fabric Loader
*   Fixed the "Config" button being unavailable on the Forge Mod Menu on MC 1.13.x and above
    *   An error will also be logged if the mod fails to register a config factory
*   Fixed an oversight causing the `HypherConverter` to crash in newer-than-supported versions of Simple RPC
    *   An error will now be logged when a newer-than-supported version is used, similar to the error for older-than-supported version
*   Fixed a race-case issue that could cause a `Config` to incorrectly modify default settings when it has no prior data
    *   This could cause issues such as the `Reset to Default` button to be unavailable on first launch
*   Fixed false-positive save indicators on the `MainUI` when changing keybindings in `ControlsGui`
*   Fixed an issue where the Current GUI Screen Name could be null on some MC versions under certain conditions
    *   When this occurs, the Screen Name will fall back to `GuiScreen` rather than being an empty string
    *   This also resolves empty Selector List entries in the Per-GUI system as well
*   Fixed an issue in the `HypherConverter` that could cause the `single_player` and `multi_player` events to be converted incorrectly if `dimension_overrides.enabled` was `true`
*   Fixed an issue where extra IP entries could appear in `Server Messages` when joining a LAN, SinglePlayer, or Realm world

* * *

### More Information

#### Known Issues

Despite configuration compatibility often being ensured between versions, caution is advised to ensure the best experience, while also baring in mind that features can be adjusted, removed, or added/iterated upon between releases.

Please refer to the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) to view more info relating to known issues.

#### Snapshot Build Info

Some Versions of this Mod are for Minecraft Snapshots or Experimental Versions, and as such, caution should be noted.

Any Snapshot Build released will be marked as **ALPHA** to match its Snapshot Status depending on tests done before release and issues found.

Snapshot Builds, depending on circumstances, may also contain changes for a future version of the mod, and will be noted as so if this is the case with the `-Staging` label.

### CraftPresence v2.4.2 (1.19.3)
CraftPresence Changes
=====================

v2.4.2 (06/20/2024)
-------------------

_A Detailed Changelog from the last release is available [here](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fcompare%252frelease%252fv2.4.0...release%252fv2.4.2)_

See the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) for more info regarding the mod.

### Changes

*   (Backend) Updated Build Dependencies (Please see the appropriate repositories for changes)
    *   Shadow (`com.github.johnrengelman.shadow@8.1.1` -> `io.github.goooler.shadow@8.1.7`)
    *   Gradle (`8.7` -> `8.8`)
    *   Unimined (`1.2.7` -> `1.2.12`)
    *   JVMDowngrader (`0.7.1` -> `0.7.2`)
    *   UniCore (`1.1.9` -> `1.1.10`)
    *   DiscordIPC (`0.9.1` -> `0.9.2`)
    *   Starscript (`0.3.3` -> `0.3.4`)
*   Implemented full support for Minecraft Realms Status Configuration
    *   Added a new `Realm Message` option to `Status Messages`
    *   Adjusted `server` override, `server.message`, and `server.icon` placeholders to use `realmData` instead of `serverData`
    *   Adjusted `server.name` and `server.motd` placeholders to use the Realm Name and Description accordingly
    *   Adjusted `server.icon` to fall back to the Realm owner icon, if available
    *   Added `server.minigame` as a Realm Exclusive placeholder for the minigame name
*   Several changes to the Simple RPC Config Migration Layer (`HypherConverter`)
    *   Now supported on MC 1.6.4 and below (Some settings are skipped on some MC versions)
    *   Added support for the `%realmname%`, `%realmdescription%`, `%realmgame%`, and `%realmicon%` placeholders
    *   Added support for the `realms` event
*   Misc. API and Performance Improvements

### Fixes

*   Fixed a runtime ASM crash that could occur on Forge clients in MC 1.13.x and 1.14.x
    *   This issue could also occur on certain versions of Fabric Loader
*   Fixed the "Config" button being unavailable on the Forge Mod Menu on MC 1.13.x and above
    *   An error will also be logged if the mod fails to register a config factory
*   Fixed an oversight causing the `HypherConverter` to crash in newer-than-supported versions of Simple RPC
    *   An error will now be logged when a newer-than-supported version is used, similar to the error for older-than-supported version
*   Fixed a race-case issue that could cause a `Config` to incorrectly modify default settings when it has no prior data
    *   This could cause issues such as the `Reset to Default` button to be unavailable on first launch
*   Fixed false-positive save indicators on the `MainUI` when changing keybindings in `ControlsGui`
*   Fixed an issue where the Current GUI Screen Name could be null on some MC versions under certain conditions
    *   When this occurs, the Screen Name will fall back to `GuiScreen` rather than being an empty string
    *   This also resolves empty Selector List entries in the Per-GUI system as well
*   Fixed an issue in the `HypherConverter` that could cause the `single_player` and `multi_player` events to be converted incorrectly if `dimension_overrides.enabled` was `true`
*   Fixed an issue where extra IP entries could appear in `Server Messages` when joining a LAN, SinglePlayer, or Realm world

* * *

### More Information

#### Known Issues

Despite configuration compatibility often being ensured between versions, caution is advised to ensure the best experience, while also baring in mind that features can be adjusted, removed, or added/iterated upon between releases.

Please refer to the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) to view more info relating to known issues.

#### Snapshot Build Info

Some Versions of this Mod are for Minecraft Snapshots or Experimental Versions, and as such, caution should be noted.

Any Snapshot Build released will be marked as **ALPHA** to match its Snapshot Status depending on tests done before release and issues found.

Snapshot Builds, depending on circumstances, may also contain changes for a future version of the mod, and will be noted as so if this is the case with the `-Staging` label.

### CraftPresence v2.4.2 (1.19)
CraftPresence Changes
=====================

v2.4.2 (06/20/2024)
-------------------

_A Detailed Changelog from the last release is available [here](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fcompare%252frelease%252fv2.4.0...release%252fv2.4.2)_

See the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) for more info regarding the mod.

### Changes

*   (Backend) Updated Build Dependencies (Please see the appropriate repositories for changes)
    *   Shadow (`com.github.johnrengelman.shadow@8.1.1` -> `io.github.goooler.shadow@8.1.7`)
    *   Gradle (`8.7` -> `8.8`)
    *   Unimined (`1.2.7` -> `1.2.12`)
    *   JVMDowngrader (`0.7.1` -> `0.7.2`)
    *   UniCore (`1.1.9` -> `1.1.10`)
    *   DiscordIPC (`0.9.1` -> `0.9.2`)
    *   Starscript (`0.3.3` -> `0.3.4`)
*   Implemented full support for Minecraft Realms Status Configuration
    *   Added a new `Realm Message` option to `Status Messages`
    *   Adjusted `server` override, `server.message`, and `server.icon` placeholders to use `realmData` instead of `serverData`
    *   Adjusted `server.name` and `server.motd` placeholders to use the Realm Name and Description accordingly
    *   Adjusted `server.icon` to fall back to the Realm owner icon, if available
    *   Added `server.minigame` as a Realm Exclusive placeholder for the minigame name
*   Several changes to the Simple RPC Config Migration Layer (`HypherConverter`)
    *   Now supported on MC 1.6.4 and below (Some settings are skipped on some MC versions)
    *   Added support for the `%realmname%`, `%realmdescription%`, `%realmgame%`, and `%realmicon%` placeholders
    *   Added support for the `realms` event
*   Misc. API and Performance Improvements

### Fixes

*   Fixed a runtime ASM crash that could occur on Forge clients in MC 1.13.x and 1.14.x
    *   This issue could also occur on certain versions of Fabric Loader
*   Fixed the "Config" button being unavailable on the Forge Mod Menu on MC 1.13.x and above
    *   An error will also be logged if the mod fails to register a config factory
*   Fixed an oversight causing the `HypherConverter` to crash in newer-than-supported versions of Simple RPC
    *   An error will now be logged when a newer-than-supported version is used, similar to the error for older-than-supported version
*   Fixed a race-case issue that could cause a `Config` to incorrectly modify default settings when it has no prior data
    *   This could cause issues such as the `Reset to Default` button to be unavailable on first launch
*   Fixed false-positive save indicators on the `MainUI` when changing keybindings in `ControlsGui`
*   Fixed an issue where the Current GUI Screen Name could be null on some MC versions under certain conditions
    *   When this occurs, the Screen Name will fall back to `GuiScreen` rather than being an empty string
    *   This also resolves empty Selector List entries in the Per-GUI system as well
*   Fixed an issue in the `HypherConverter` that could cause the `single_player` and `multi_player` events to be converted incorrectly if `dimension_overrides.enabled` was `true`
*   Fixed an issue where extra IP entries could appear in `Server Messages` when joining a LAN, SinglePlayer, or Realm world

* * *

### More Information

#### Known Issues

Despite configuration compatibility often being ensured between versions, caution is advised to ensure the best experience, while also baring in mind that features can be adjusted, removed, or added/iterated upon between releases.

Please refer to the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) to view more info relating to known issues.

#### Snapshot Build Info

Some Versions of this Mod are for Minecraft Snapshots or Experimental Versions, and as such, caution should be noted.

Any Snapshot Build released will be marked as **ALPHA** to match its Snapshot Status depending on tests done before release and issues found.

Snapshot Builds, depending on circumstances, may also contain changes for a future version of the mod, and will be noted as so if this is the case with the `-Staging` label.

### CraftPresence v2.4.2 (1.19.2)
CraftPresence Changes
=====================

v2.4.2 (06/20/2024)
-------------------

_A Detailed Changelog from the last release is available [here](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fcompare%252frelease%252fv2.4.0...release%252fv2.4.2)_

See the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) for more info regarding the mod.

### Changes

*   (Backend) Updated Build Dependencies (Please see the appropriate repositories for changes)
    *   Shadow (`com.github.johnrengelman.shadow@8.1.1` -> `io.github.goooler.shadow@8.1.7`)
    *   Gradle (`8.7` -> `8.8`)
    *   Unimined (`1.2.7` -> `1.2.12`)
    *   JVMDowngrader (`0.7.1` -> `0.7.2`)
    *   UniCore (`1.1.9` -> `1.1.10`)
    *   DiscordIPC (`0.9.1` -> `0.9.2`)
    *   Starscript (`0.3.3` -> `0.3.4`)
*   Implemented full support for Minecraft Realms Status Configuration
    *   Added a new `Realm Message` option to `Status Messages`
    *   Adjusted `server` override, `server.message`, and `server.icon` placeholders to use `realmData` instead of `serverData`
    *   Adjusted `server.name` and `server.motd` placeholders to use the Realm Name and Description accordingly
    *   Adjusted `server.icon` to fall back to the Realm owner icon, if available
    *   Added `server.minigame` as a Realm Exclusive placeholder for the minigame name
*   Several changes to the Simple RPC Config Migration Layer (`HypherConverter`)
    *   Now supported on MC 1.6.4 and below (Some settings are skipped on some MC versions)
    *   Added support for the `%realmname%`, `%realmdescription%`, `%realmgame%`, and `%realmicon%` placeholders
    *   Added support for the `realms` event
*   Misc. API and Performance Improvements

### Fixes

*   Fixed a runtime ASM crash that could occur on Forge clients in MC 1.13.x and 1.14.x
    *   This issue could also occur on certain versions of Fabric Loader
*   Fixed the "Config" button being unavailable on the Forge Mod Menu on MC 1.13.x and above
    *   An error will also be logged if the mod fails to register a config factory
*   Fixed an oversight causing the `HypherConverter` to crash in newer-than-supported versions of Simple RPC
    *   An error will now be logged when a newer-than-supported version is used, similar to the error for older-than-supported version
*   Fixed a race-case issue that could cause a `Config` to incorrectly modify default settings when it has no prior data
    *   This could cause issues such as the `Reset to Default` button to be unavailable on first launch
*   Fixed false-positive save indicators on the `MainUI` when changing keybindings in `ControlsGui`
*   Fixed an issue where the Current GUI Screen Name could be null on some MC versions under certain conditions
    *   When this occurs, the Screen Name will fall back to `GuiScreen` rather than being an empty string
    *   This also resolves empty Selector List entries in the Per-GUI system as well
*   Fixed an issue in the `HypherConverter` that could cause the `single_player` and `multi_player` events to be converted incorrectly if `dimension_overrides.enabled` was `true`
*   Fixed an issue where extra IP entries could appear in `Server Messages` when joining a LAN, SinglePlayer, or Realm world

* * *

### More Information

#### Known Issues

Despite configuration compatibility often being ensured between versions, caution is advised to ensure the best experience, while also baring in mind that features can be adjusted, removed, or added/iterated upon between releases.

Please refer to the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) to view more info relating to known issues.

#### Snapshot Build Info

Some Versions of this Mod are for Minecraft Snapshots or Experimental Versions, and as such, caution should be noted.

Any Snapshot Build released will be marked as **ALPHA** to match its Snapshot Status depending on tests done before release and issues found.

Snapshot Builds, depending on circumstances, may also contain changes for a future version of the mod, and will be noted as so if this is the case with the `-Staging` label.

### CraftPresence v2.4.0 (1.19.3)
CraftPresence Changes
=====================

v2.4.0 (06/13/2024)
-------------------

_A Detailed Changelog from the last release is available [here](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fcompare%252frelease%252fv2.3.9...release%252fv2.4.0)_

See the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) for more info regarding the mod.

### Changes

*   (Backend) Updated Build Dependencies (Please see the appropriate repositories for changes)
    *   Unimined (`1.2.3` -> `1.2.7`)
    *   JVMDowngrader (`local` -> `0.7.1`)
    *   ModPublisher (`2.1.1` -> `2.1.4`)
    *   ModFusioner (`1.0.10` -> `1.0.12`)
    *   Fabric Loader (`0.15.10` -> `0.15.11`)
    *   Lenni Reflect (`1.3.2` -> `1.3.4`)
    *   UniCore (`1.0.10` -> `1.1.9`)
    *   DiscordIPC (`0.8.7` -> `0.9.1`)
    *   Starscript (`0.3.0` -> `0.3.3`)
    *   SpotBugs Annotations (`4.8.4` -> `4.8.5`)
    *   ClassGraph (`4.8.172` -> `4.8.173`)
*   All versions of the mod are now built using Java 21, rather than being dependent on legacy Java
    *   This allows us to have a consistent API as well as develop under the current modern standards
    *   In versions where a downgrade is needed, this is performed using `JVMDowngrader` to ensure API compatibility
*   Adjusted the way `Dimension` and `Biome` module data is loaded in MC 1.16+
    *   These changes are designed to support auto-locating data related to data pack additions
    *   These changes also resolve issues where repeated Registry Lookups could cause a crash in both modules
    *   Additional performance improvements have also been implemented for all MC versions for these modules
*   Added a new script function, `getComponent`, to support the new `DataComponent` system introduced in MC 1.20.5+
    *   Usage: `getComponent(data=DataComponentHolder, path=String)`
    *   On versions below MC 1.20.5, an error will appear instead
*   Removed the `hasAlphaNumeric`, `hasWhitespace`, and `replace` script functions due to being obsolete
    *   The backend for these functions was barely functional and has been largely obsolete for a while
*   Added new `.identifier` placeholders for the `Biome` and `Dimension` modules
*   (Backend) The default formatting for a slider's display value is now `%.1f` instead of a raw append
*   Added a `Sync End Color` button to the `Color Editor` UI
    *   Pressing this button, will set the `endData` to the current `startColor` data, effectively useful for quickly removing the `endColor` data from the final saving
*   Adjusted Mod Initialization in MC 1.7.10 and below to better detect (and avoid) running the mod on server-side
    *   This uses a similar system implemented for MC 1.13+ in v2.2.4
    *   This change is only applied for Forge, Risugami ModLoader, or users on similar modloaders
*   Added a new `Advanced` Config Setting to toggle `ClassGraph` functionality
    *   This option allows disabling several backend functions, improving memory usage at the cost of some module functionality
    *   Disabling this feature will prevent module auto-lookup functionality in some cases, but is set by default to be disabled in response to several concerns over memory usage
*   (Backend) Adjusted Module Auto-Retrieval Processes for improved usability and error prevention
    *   `Module#getAllData` has been split into `Module#getInternalData` and `Module#getConfigData`
    *   `Module#scanForData` has been similarly split up, with separate threads now spawned for each part of the auto-lookup
    *   `Module#canFetchData` has been split into `Module#canFetchInternals` and `Module#canFetchConfig`
    *   `Module#hasScanned...` and `Module#queue...` functions have also been added for configuring when to scan for what data
    *   To align better with MC 1.20.5 and above, the scan order has been inverted for modules, with `config` data being scanned first before `internal` data
*   (Backend) Added `printException` for Config Modules, now used in `setProperty`
    *   These exceptions will only display while `Debug Mode` is enabled
*   Adjusted the way the `general.mods` placeholder is calculated (`Constants#getModCount`)
    *   Now uses a `Supplier` from each implemented loader rather than Reflection Statements (`Constants#MOD_COUNT_SUPPLIER`)
    *   Quilt now falls back to `getRawModCount` due to not having an independent build layer
    *   Added support for Rift, Flint, and Risugami ModLoader mod counts
    *   Fixes placeholder functionality for Forge 1.13+
*   (Backend) Improved performance for various placeholder argument options as well as compiling data
    *   These changes should conform better towards how Starscript was meant to be used
*   (Breaking) Overhauled the `Override` system for Placeholder Arguments
    *   `overrides.` placeholders have been removed, with overrides now applied directly to the placeholder when `useAsMain` is false and such override data exists
    *   Empty Parts of the `Presence Editor` are no longer ignored if `useAsMain` was false
    *   For `useAsMain` mode, the `forcedData` iteration has been adjusted to now use the first non-null entry, rather than the last

### Fixes

*   (Backend) Modified `ExtendedScreen#getButtonY` to properly respond to `ScrollPane` padding and to better clarify the logic
    *   For screens where this is used, this places UI elements in the proper position comparable to v1.x versions
    *   Old Calculation: `(40 + (25 * (order - 1)))`
    *   New Calculation `topPosition + (DEFAULT_ELEMENT_PADDING * (order + 1)) + (DEFAULT_ELEMENT_HEIGHT * order)`
*   (Backend) Fixed an issue where `ColorData#setEndColor` and `ColorData#setTexLocation` could be applied incorrectly
    *   This fix was previously present in `ColorEditorGui#setCurrentData` but has been moved into `ColorData` to remove duplicated logic and to resolve some edge-cases
*   Fixed redundant formatting in `Color Editor` Slider UI elements
    *   The RGBA sliders now use `Integer` formatting instead of `Float`
    *   The `Tint Factor` slider now uses a percentage value instead of `Float`
*   Fixed edge-cases in the `Color Editor` where editing a null `endColor` after editing `startColor` would result in an incorrect result
    *   This is caused from the `getEnd` call pulling the `startColor` if null, and only adjusting the value of one slider rather than all four
    *   An additional case has been resolved where the `endColor` data wasn't being created, if the new `startColor` differs when it didn't before when using `setStartColor`
*   (Backend) Fixed memory leaks that could occur through repeated `Module#toString` calls
    *   This occurs due to this function utilizing GSON, and since we used this in `Module#hashCode` and `Module#equals`, it was being called excessively
    *   With this fix, `hashCode` and `equals` functions for all Config Categories should be much more performant, following `PresenceData` formatting with `Objects#hash` and `Objects#equals` usage
*   (Backend) Fixed memory leaks that could occur through repeated `FileUtils#findValidClass` calls
    *   Caching has been added to this method, preventing repetitive calls to `Class#forName`
*   (Backend) Fixed a possible discrepancy between using `FileUtils#findValidClass` and `FileUtils#scanClasses`
    *   This relates to the `useClassLoader` param in `findValidClass`, which now only defaults to true if below Java 16
    *   This behavior matches the behavior used in `ClassGraph` within `scanClasses
*   (Backend) Fixed memory leaks that could occur through `Lenni Reflect` reflection operations
    *   This issue effects `StringUtils#getFields`, `StringUtils#getMethods`, and methods using these functions
    *   Caching has been implemented to the `RStream#of`, `RStream#methods`, and `RStream#fields` functions to avoid repetitive allocation
*   (Backend) Fixed memory leaks caused from unnecessary `DiscordUtils#removeArguments` calls
    *   This issue occurred in `DiscordUtils#syncPlaceholders` in how we were synchronizing `custom.` arguments
    *   The old method has been replaced with a new more performant system for removals and iteration
    *   Several methods have also been adjusted to avoid excessive calls to this function as well
*   Fixed the `Sync Config` button in the `Main Gui` not properly applying settings
    *   This was caused by the `Config#applyFrom(Config)` function not being called
*   (Backend) Fixed an issue where the `Server` module was improperly checking for new `ServerList` entries in some cases
    *   This also fixes an issue where adjusting `config` data could trigger an `internal` scan
*   (Backend) Fixed an issue where the `ReplayMod` module could be improperly cleared in some cases
*   (Backend) Fixed memory leaks that could occur through `MappingUtils` due to excessive `String#replace` operations
    *   Both `MappingUtils` and the way the mappings file is generated have been improved to avoid this issue
*   (Backend) Fixed memory leaks that could occur through `FileUtils#getClassNamesMatchingSuperType` and `FileUtils#isSubclassOf`
    *   Both functions have been rewritten to be significantly more performant compared to past releases
*   (Backend) Fixed memory leaks that could occur due to excessive Reflection Usage in Config Modules
    *   This additionally improves the performance of `Config#handleVerification`
    *   This fix primarily effects `Module#getProperty` and `Module#setProperty` usage to be static-defined rather than relying on reflection
*   Fixed an issue where `entitySettings#ridingData` was being incorrectly read
    *   The `entity.riding.message` and `entity.riding.icon` placeholders should work properly again
*   Resolved an issue where parts of the mod may show up un-localized when using a different language
    *   This was caused by a regression when `TranslationUtils#getLocalizedMessage` was introduced
*   Resolved a typo causing an issue in the `SimpleRPC` to `CraftPresence` config migration layer where the `%replaytimeleft%` placeholder, if present, was incorrectly converted to an invalid Starscript expression
    *   This issue would cause a Starscript exception if the value was present in a `SimpleRPC` config
*   (Backend) Fixed an issue preventing `DiscordAssetUtils#setUrl` from triggering in `DiscordAssetUtils#loadAssets`
    *   This fix also brings a performance improvement to `DiscordAssetUtils#getUrl(list, key)`
*   (Backend) Fixed a `DiscordIPC` Issue preventing Mod Functionality on Java 22
    *   This primarily effected Windows users or those using a non-standard filesystem
    *   Users effected would receive a false `Unable to connect to Discord...` message
    *   Several other error messages have also been improved alongside this fix

* * *

### More Information

#### Known Issues

Despite configuration compatibility being ensured between v1.8.x/v1.9.x and v2.0, caution is advised to ensure the best experience, while also baring in mind that features can be adjusted, removed, or added/iterated upon between releases.

The following known issues are present in this build:

*   The HypherionMC Config Layer (To Convert a Simple RPC config to CraftPresence) contains the following known issues:
    *   Placeholders related to the realm event are currently unimplemented and parse as `{''}`.

Please refer to the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) to view more info relating to known issues.

#### Snapshot Build Info

Some Versions of this Mod are for Minecraft Snapshots or Experimental Versions, and as such, caution should be noted.

Any Snapshot Build released will be marked as **ALPHA** to match its Snapshot Status depending on tests done before release and issues found.

Snapshot Builds, depending on circumstances, may also contain changes for a future version of the mod, and will be noted as so if this is the case with the `-Staging` label.

## CreativeCore
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/creativecore)

### CreativeCore_FORGE_v2.11.28_mc1.19.2.jar
*   Added back MaterialUtils

## Straw Golem Rebaled - Forge
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/strawgolem-reborn)

### Strawgolem-forge-1.19.2-2.1.0-alpha.jar
no more octree (byebye, you were too much of a hassle). now simpler and more reliable system. some other clean up like for fleeing / shyness logic animations should have a bit less jank

### strawgolem-forge-1.19.2-2.0.2-alpha
Release of the rewrite for forge!

Lots of feature changes, see modrinth

## Collective
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/collective)

### [Fabric/Forge] 1.19.2-7.64 | Collective
[![](https://github.com/Serilum/.cdn/raw/main/description/bisecthosting/tinier_promo0.jpg)](/linkout?remoteUrl=https%253a%252f%252fntms.link%252fgetaserver)

* * *

**Changelog:**  
Fixed isNumber function returning a false positive.  
Added missing CreativeModTabFunctions.  
  
=========

The complete changelog with previous versions can be found at [https://serilum.com/mods?changelog=collective](/linkout?remoteUrl=https%253a%252f%252fserilum.com%252fmods%253fchangelog%253dcollective).  
  
  
**Thank you very much** to my Membership sponsors for supporting this mod's development.  
If you would like to contribute too, check out [serilum.com/donate](/linkout?remoteUrl=https%253a%252f%252fserilum.com%252fdonate).  
Alister | Andrean Olgo | aternosorg | BirdieMiner | Cherriesaurus | Michael W. S. | Shana Gitnick | Sukhmai | Tyler Behl

### [Fabric/Forge] 1.19.2-7.63 | Collective
[![](https://github.com/Serilum/.cdn/raw/main/description/bisecthosting/tinier_promo0.jpg)](/linkout?remoteUrl=https%253a%252f%252fntms.link%252fgetaserver)

* * *

**Changelog:**  
Added helper functions to add blocks and items via the Common source.  
  
=========

The complete changelog with previous versions can be found at [https://serilum.com/mods?changelog=collective](/linkout?remoteUrl=https%253a%252f%252fserilum.com%252fmods%253fchangelog%253dcollective).  
  
  
**Thank you very much** to my Membership sponsors for supporting this mod's development.  
If you would like to contribute too, check out [serilum.com/donate](/linkout?remoteUrl=https%253a%252f%252fserilum.com%252fdonate).  
Alister | Andrean Olgo | aternosorg | BirdieMiner | Cherriesaurus | Michael W. S. | Shana Gitnick | Sukhmai | Tyler Behl

### [Fabric/Forge] 1.19.2-7.62 | Collective
[![](https://github.com/Serilum/.cdn/raw/main/description/bisecthosting/tinier_promo0.jpg)](/linkout?remoteUrl=https%253a%252f%252fntms.link%252fgetaserver)

* * *

**Changelog:**  
(Fabric) Fixed horses taking fall damage when they shouldn't.  
  
=========

The complete changelog with previous versions can be found at [https://serilum.com/mods?changelog=collective](/linkout?remoteUrl=https%253a%252f%252fserilum.com%252fmods%253fchangelog%253dcollective).  
  
  
**Thank you very much** to my Membership sponsors for supporting this mod's development.  
If you would like to contribute too, check out [serilum.com/donate](/linkout?remoteUrl=https%253a%252f%252fserilum.com%252fdonate).  
Alister | Andrean Olgo | aternosorg | BirdieMiner | Cherriesaurus | Jeremy Langford | Michael W. S. | Shana Gitnick | Sukhmai | Tyler Behl

## Curios API (Forge/NeoForge)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/curios)

### curios-forge-1.19.2-5.1.6.3.jar
The format is based on [Keep a Changelog](/linkout?remoteUrl=http%253a%252f%252fkeepachangelog.com%252fen%252f1.0.0%252f) and this project adheres to [Forge Recommended Versioning](/linkout?remoteUrl=https%253a%252f%252fmcforge.readthedocs.io%252fen%252flatest%252fconventions%252fversioning%252f).

This is a copy of the changelog for the most recent version. For the full version history, go [here](https://github.com/TheIllusiveC4/Curios/blob/1.19.x/docs/CHANGELOG.md).

[1.19.2-5.1.6.3] - 2024.07.02
-------------------------------

### Fixed

*   Fixed slot resizing crash [#426](https://github.com/TheIllusiveC4/Curios/issues/426)

## Embeddium
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/embeddium)

### [1.19.2] Embeddium 0.3.18.1
[https://github.com/embeddedt/embeddium/wiki/Changelog](https://github.com/embeddedt/embeddium/wiki/Changelog)

## End's Delight
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/ends-delight)

### ends_delight-1.19.2-2.1.jar
### Fixed:

*   Dragon Tooth Knife has no recipe.

### ends_delight-1.19.2-2.0.jar
### Added:

*   New foods: Enderman Gristle, Raw Ender Sausage, Ender Sausage, Enderman Gristle Stew, Shulker Soup, Shulker Omelette Mixture, Shulker Omelette, Ender Noodle, Ender Bamboo Rice;
*   New advancements;
*   Configurations;
*   Added key 'experience' to some recipes;

### Fixed:

*   End Stove not harvestable;
*   End Stove doesn't summon smoke and flame particles;
*   Ender Sauce (Chorus Sauce now) stacks up to 16;

### Updated:

*   Textures and models (Retexture of Dragon Tooth and Dragon Tooth Knife (SABITRON));
*   Ender Dragon will drop loots when killed by items with tag "farmersdelight:tools/knives", "minecraft:axes", "minecraft:swords", "forge:tools/swords", "forge:swords", "forge:axes", "forge:tools/axes" or "forge:tools/axe";
*   Dragon Leg with Sauce can be divided into 6 servings;
*   Dragon Tooth Knife can cause more damage to Enderman, Endermite, Ender Dragon and Shulker (can be configured).

### Deleted:

*   Dragon Egg Shell ("ends_delight:dragon_egg_shell")

### Translations:

*   Added:
    *   de_AT (GamingeckeSpace);
    *   de_DE (GamingeckeSpace);
    *   es_MX (TheLegendofSaram);
    *   it_IT (Roby1164);
    *   ru_RU (mpustovoi);
    *   ko_KR (tankplanelaserkoala);
*   Updated:
    *   uk_UA (unroman);

## Fast Async World Save[Forge/Fabric]
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/fast-async-world-save-forge-fabric)

### fastasyncworldsave-1.19.2-2.0.jar
2.0: Fix mekanism compat

## Friends&Foes (Forge/NeoForge)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/friends-and-foes-forge)

### Friends&Foes 2.0.15
*   Fixed pig spawning in the iceologer cabin structure
*   Fixed beehive states

### Friends&Foes 2.0.14
*   Totem of Undying is now properly supported in the modded slots
*   Fixed stronghold generation freeze on 1.21

### Friends&Foes 2.0.14
*   Totem of Undying is now properly supported in the modded slots
*   Fixed stronghold generation freeze on 1.21

### Friends&Foes 2.0.14
*   Totem of Undying is now properly supported in the modded slots
*   Fixed stronghold generation freeze on 1.21

### Friends&Foes 2.0.13
*   Rascal spawn condition improvements
*   NeoForge beta breaking change fix

### Friends&Foes 2.0.13
*   Rascal spawn condition improvements
*   NeoForge beta breaking change fix

### Friends&Foes 2.0.13
*   Rascal spawn condition improvements
*   NeoForge beta breaking change fix

### Friends&Foes 2.0.12
*   Fixed oak beehive crafting recipe
*   Fixed wildfire crown rendering and item stacking
*   Fixed totem of illusion related issues

### Friends&Foes 2.0.12
*   Fixed oak beehive crafting recipe
*   Fixed wildfire crown rendering and item stacking
*   Fixed totem of illusion related issues

### Friends&Foes 2.0.12
*   Fixed oak beehive crafting recipe
*   Fixed wildfire crown rendering and item stacking
*   Fixed totem of illusion related issues

### Friends&Foes 2.0.11
*   1.20.6/1.20.1 port
*   Fixed not working mob config settings on forge/neoforge
*   Refactored internal oxidizatiton/waxable system
*   Added pl_pl translations (Thanks to DarkKnightComes)
*   Added tr_tr translations (Thanks to EgeK)

### Friends&Foes 2.0.11
*   1.20.6/1.20.1 port
*   Fixed not working mob config settings on forge/neoforge
*   Refactored internal oxidizatiton/waxable system
*   Added pl_pl translations (Thanks to DarkKnightComes)
*   Added tr_tr translations (Thanks to EgeK)

### Friends&Foes 2.0.11
*   1.20.6/1.20.1 port
*   Fixed not working mob config settings on forge/neoforge
*   Refactored internal oxidizatiton/waxable system
*   Added pl_pl translations (Thanks to DarkKnightComes)
*   Added tr_tr translations (Thanks to EgeK)

### Friends&Foes 2.0.10
*   Fixed crash related to rascal spawns in mineshafts
*   Added anger particles to rascal to indicate that hitting it is not an option
*   Added missing charm slot for curios
*   Added missing translations for BetterF3 mod
*   Improved trigger logic for totems
*   Improved compatibility with the curios mod and other totems
*   Improved compatibility with the trinkets mod and other totems
*   Improved catalogue compatibility
*   Updated translations

### Friends&Foes 2.0.10
*   Fixed crash related to rascal spawns in mineshafts
*   Added anger particles to rascal to indicate that hitting it is not an option
*   Added missing charm slot for curios
*   Added missing translations for BetterF3 mod
*   Improved trigger logic for totems
*   Improved compatibility with the curios mod and other totems
*   Improved compatibility with the trinkets mod and other totems
*   Improved catalogue compatibility
*   Updated translations

## Functional Storage
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/functional-storage)

### functionalstorage-1.19.2-1.1.11.jar
[https://github.com/Buuz135/FunctionalStorage/blob/1.19/CHANGELOG.md](https://github.com/Buuz135/FunctionalStorage/blob/1.19/CHANGELOG.md)

## Just Enough Items (JEI)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/jei)

### jei-1.19.2-forge-11.6.0.1024.jar
### Current release 11.6.0

*   [Fix #3494 Protect against modded tooltip crashes](https://github.com/mezz/JustEnoughItems/commit/03c9f113523d255953517c779ef62de359b02255) - mezz
    
*   [fix ImmutableRect2i math and tolerance](https://github.com/mezz/JustEnoughItems/commit/6a2c7fc01a1a334b86e1708da187ba9fb37827d2) - mezz
    
*   [Fix #3183 Fix #3523 Loosen restrictions on gui placement and rectangles going offscreen](https://github.com/mezz/JustEnoughItems/commit/b46bb996e2792a4e40634a26357d593875294345) - mezz
    
*   [Prevent recipe transfers from touching output slots](https://github.com/mezz/JustEnoughItems/commit/8612cb0974c69fabfe268497f927435d915118e5) - mezz
    
*   [run spotless](https://github.com/mezz/JustEnoughItems/commit/fa73465828dbade643000f5cb641d1667146c8c1) - mezz
    
*   [Update gradle, forge, and fabric versions](https://github.com/mezz/JustEnoughItems/commit/502d686aee290866399eb276037315765be186fa) - mezz
    
*   [Close #3320 Search default block tags for items with blocks in them](https://github.com/mezz/JustEnoughItems/commit/0d64e3aa4c27ce056bef113a63ff295db8694eba) - mezz
    
*   [Fix error handling when a recipe manager plugin crashes](https://github.com/mezz/JustEnoughItems/commit/c24d85b39a8704f4221e306be064e05214bdfcfe) - mezz
    
*   [turn spaces to tabs consistently with spotless rules](https://github.com/mezz/JustEnoughItems/commit/119aba128828f02b77c7bac900c4d1b0ec7e6848) - mezz
    
*   [update spotless plugin](https://github.com/mezz/JustEnoughItems/commit/3bd5d55df3d0bdcfa09cd639133bb193ec5eafa3) - mezz
    
*   [increase ram given to gradle](https://github.com/mezz/JustEnoughItems/commit/cd7bc9ee368e072d8d29f8e43f5ace96fdff7889) - mezz
    
*   [Fix copying recipe id so that it doesn't just copy the first one displayed](https://github.com/mezz/JustEnoughItems/commit/3b3a418fccc35f07a40625827447230f5f32a842) - mezz
    
*   [Add "Fabric-Loom-Remap" to fabric api jar manifest](https://github.com/mezz/JustEnoughItems/commit/e29a94c2d1bd9baf8984ee717a4fb8c8e49105b5) - mezz
    
*   [Add modrinth upload task](https://github.com/mezz/JustEnoughItems/commit/3d6494bdae2346db583fe7c5f424c6434794bc41) - mezz
    
*   [Close #3190 Add support for ghost ingredient dragging from bookmarks](https://github.com/mezz/JustEnoughItems/commit/d11e1491f6d4945151536edb5e37b57a3e8439aa) - mezz
    
*   [Make FileWatcherThread a daemon thread](https://github.com/mezz/JustEnoughItems/commit/f1df855db8766961f7f66fe2a146c6c02e8bbd65) - mezz
    *   This prevents it from keeping the JVM from exiting during data generation.
*   [Remove fabric depends statement for anything other than the core project](https://github.com/mezz/JustEnoughItems/commit/b69b1cd8bb1729bc37e6ae57e4af88a689fd6200) - mezz
    
*   [Fix #2991 Fix starting on server thread in Fabric after reload](https://github.com/mezz/JustEnoughItems/commit/caa72a5471117a83c8cd25e00722b317f9a78980) - mezz
    
*   [Update Fabric version in dev environment](https://github.com/mezz/JustEnoughItems/commit/cbdb368862e9c3c6a3320feba4d84cf567689f21) - mezz
    
*   [Improve config file watcher, avoid creating excess threads on world reload](https://github.com/mezz/JustEnoughItems/commit/33a6b1fadf01cc6f77a44c5c086a73a6b9e03bda) - mezz
    
*   [Move input debug logs behind a new DebugInputs config flag](https://github.com/mezz/JustEnoughItems/commit/a18dcf94aa7b9b849e4f23e6a4211bee7d14622f) - mezz
    
*   [Fix ghost ingredient dragging](https://github.com/mezz/JustEnoughItems/commit/372f9e0bbcd0a9d921520af97aeaff0445d6a031) - mezz
    
*   [Add a 1.19 config for the position of new bookmarks (#3113)](https://github.com/mezz/JustEnoughItems/commit/fffffc610db8e75a5bd50eab851c97a1b40050bd) - Waiting Idly
    
*   [Fix #3079 Write the blacklist to file if the file does not exist yet](https://github.com/mezz/JustEnoughItems/commit/15bbaa4f8db1d77cf7ddd99178ffcd22dc20bd89) - mezz
    
*   [Simplify platform config helper code](https://github.com/mezz/JustEnoughItems/commit/e6ea3b4ef72737f927939682ae9b5c90c5d980f5) - mezz
    
*   [Close #3077, Add link to open the JEI config folder when you click the settings button](https://github.com/mezz/JustEnoughItems/commit/e7570624748f7c521a9efcc8e60b7884f63ad984) - mezz
    
*   [Set a maximum Minecraft version of 1.19.2](https://github.com/mezz/JustEnoughItems/commit/71894a977f62742fcb505c83fd2e29dab46e3791) - mezz
    *   Minecraft 1.19.3 has breaking changes and is not compatible with this version of JEI.
*   [Update zh_cn.json (#3105)](https://github.com/mezz/JustEnoughItems/commit/2f56b84b5d2393ab7c410b0b25ce9941382a82e7) - ArchiDreamZ
    
*   [Fix missing period and space in kk_kz.json (#3101)](https://github.com/mezz/JustEnoughItems/commit/2106f3f3437ce339fac9555749fb3f7723077b98) - AlibekAytjan
    
*   [remove jar archive in Jenkins (it is already available in maven and curseforge)](https://github.com/mezz/JustEnoughItems/commit/9f1a77b1c5b695f8203163633fd169aff0dd7844) - mezz
    
*   [use tools.jdk for Jenkinsfile instead of JAVA_HOME env var](https://github.com/mezz/JustEnoughItems/commit/74fcc826e8e702597365261601e18ddbe2c9eecd) - mezz
    
*   [Fix #3093 Create a runtime registration step before onRuntimeAvailable](https://github.com/mezz/JustEnoughItems/commit/cfb7c8d3767f43a7ab18b9236f794abfecc70b33) - mezz
    
*   [Hide ingredients that have the tag "c:hidden_from_recipe_viewers"](https://github.com/mezz/JustEnoughItems/commit/1a08a45e887aa8224b2cbe1a24645d7b443a6676) - mezz
    
*   [chore: Add Gui and Library maven publish to Jenkinsfile (#3066)](https://github.com/mezz/JustEnoughItems/commit/01f613671cb4635a0a5c23b85c40f1d52d0f3d00) - Kli Kli
    
*   [fix sources jar configuration](https://github.com/mezz/JustEnoughItems/commit/28ca460fafde8150988b8c70bf3bacd4397e7d36) - mezz
    
*   [fix publishing of sources jars for Gui and Library](https://github.com/mezz/JustEnoughItems/commit/ca717007b3ecd35e6abf5c6b08aa82d3a4d4134c) - mezz
    
*   [publish Library and Gui jars to maven](https://github.com/mezz/JustEnoughItems/commit/66de59b65f548c2ae2a872f6a0a698d0bd41fe4b) - mezz
    
*   [Fix publishing the Core artifact](https://github.com/mezz/JustEnoughItems/commit/38fa7cbebda074de30cd19d85069d75457206695) - mezz
    
*   [Code cleanup](https://github.com/mezz/JustEnoughItems/commit/c83958436399abdc3581b16d0d73df56ea555073) - mezz
    
*   [Split up the GUI code and add API methods so that the GUI mostly depends on the API (#3058)](https://github.com/mezz/JustEnoughItems/commit/6476d975359e1c2ff517d94b58ff2dcc7bf780ae) - James Mitchell
    
*   [update pt_br (#3040)](https://github.com/mezz/JustEnoughItems/commit/8f79ba8f1b63799db85415fe82147eef6cd25908) - FITFC
    
*   [log gui change on debug mode only (#3052)](https://github.com/mezz/JustEnoughItems/commit/042cbc9463d10651cf6e6cd4bf1cc17a0ddd5f16) - Jonathan Colmenares
    
*   [Mark 1.19.2 builds as betas](https://github.com/mezz/JustEnoughItems/commit/bd7a56faccd62e5dfc10e22c8855a338f37a20c5) - mezz
    
*   [Fix hiding items from recipes via the API](https://github.com/mezz/JustEnoughItems/commit/b7f3e66e109fb467337aa78e56a99eadbfff0237) - mezz
    
*   [Reduce memory used by an adversarial PacketRecipeTransfer](https://github.com/mezz/JustEnoughItems/commit/f128c3b3dbfcbbbfe965f78ff85f514f66c4fa19) - mezz
    
*   [Split drag handling from input handling, add debug mode logs for input handling](https://github.com/mezz/JustEnoughItems/commit/9992840db5ad4a6c52f8e64bf4d179042c8e42cd) - mezz
    
*   [#3018 Fix crashing VanillaPlugin on invalid brewing recipes](https://github.com/mezz/JustEnoughItems/commit/1c2dd1a9402607ac1a2861862e5a723924aa13fe) - mezz
    
*   [fix internal javadoc](https://github.com/mezz/JustEnoughItems/commit/e8312ddd16a0e1ce1b0f008af2494f53dea0962d) - mezz
    
*   [#3022 Only delete items on left-click](https://github.com/mezz/JustEnoughItems/commit/5252f70c55bcef8bdf474013eacb2625375ec740) - mezz
    
*   [#3022 Fix picking up multiple items with the mouse in cheat mode](https://github.com/mezz/JustEnoughItems/commit/1f93f82bfc6bac8b3a90c06c1a4f26c53ea40b6b) - mezz
    
*   [Ensure packets are handled on the correct thread](https://github.com/mezz/JustEnoughItems/commit/f758d0d4c9b0568091253dfc7fbb4b0e2ec55dff) - mezz
    
*   [add IJeiHelpers#getRecipeType to help addon mods](https://github.com/mezz/JustEnoughItems/commit/38096675e85d6ebc61109da3b21b24c6bf4f5bbc) - mezz
    
*   [Fix #2993 Reduce recipe validation errors to debug logs](https://github.com/mezz/JustEnoughItems/commit/9a8f8dd61a6fdd2875d7d685dd61f9f3e1e198b2) - mezz
    
*   [Fix #3014 Saving edit-mode changes to file fails](https://github.com/mezz/JustEnoughItems/commit/97bfb62ebbdbb092f62f75b4970998899a85a09e) - mezz
    
*   [fix ConfigSerializer sorting for config categories](https://github.com/mezz/JustEnoughItems/commit/d881e68ebec0d4dca6b22b17999a628e1d267de2) - mezz
    
*   [Fix #3009 returning negative X/Y values from getGuiExtraAreas() breaks filter text selection](https://github.com/mezz/JustEnoughItems/commit/0364eed6b0823a9eb2b9d695336a287a695a8cb7) - mezz
    
*   [Improve performance of checking fuels on Fabric (#2997)](https://github.com/mezz/JustEnoughItems/commit/cab76d8154e70206bb7441d5ec6ea2cc497eed57) - Technici4n
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/a0410148a9984b38c951a83ac3ec356ae9bea2fb) - mezz
    
*   [Minor cleanup in config code](https://github.com/mezz/JustEnoughItems/commit/79c34fcc1d16699389d5015d284bc16e8cbe3da1) - mezz
    
*   [Prefer more abundant items first for recipe transfer (#2987)](https://github.com/mezz/JustEnoughItems/commit/56f7b86fc5fc4b43b640b09892e6b0ccfef0500b) - DBotThePony
    
*   [Clean up unused imports](https://github.com/mezz/JustEnoughItems/commit/2e4d4f570edfc6056cbd1ebae1efbae3e24ff7be) - mezz
    
*   [Fix #2968 Add Fabric support for Potion recipes](https://github.com/mezz/JustEnoughItems/commit/730f667a4107b2b33a9c10e43e3870bde7a11c3b) - mezz
    
*   [Close #2963 Add catalogueImageIcon](https://github.com/mezz/JustEnoughItems/commit/5662c0bf93c16829c6838d3ef5bfbb7ff951cdd1) - mezz
    
*   [Fix #2978 fix server-side error logs from platform handler when deleting items](https://github.com/mezz/JustEnoughItems/commit/a3dec98206575147cc45b01adc585ee8f5e56768) - mezz
    
*   [Fix #2817 Expose more RecipeTransfer utils in IRecipeTransferHandlerHelper](https://github.com/mezz/JustEnoughItems/commit/13235737ae7d8e11308936b80f50f58ffdc3ff1f) - mezz
    
*   [Close #2795 Add API to get a RecipeType from a ResourceLocation](https://github.com/mezz/JustEnoughItems/commit/b787b86ecbccaa2b2e65ec012b8b463592224c45) - mezz
    
*   [Fix #2976 use FluidVariantRendering for Fabric fluids with compound tags](https://github.com/mezz/JustEnoughItems/commit/f60ba011e84fb87b17295eefd2a48521c9503881) - mezz
    
*   [Fix #2195 Anvil text "Enchantment Cost" has incorrect shadows](https://github.com/mezz/JustEnoughItems/commit/60e90315a4d326f079334aea1aab964268614e0c) - mezz
    
*   [Close #1579 Allow using Screen with IGlobalGuiHandler](https://github.com/mezz/JustEnoughItems/commit/a3ffb965a60ed28ad344a253e90588af89efd917) - mezz
    
*   [Close #391 Add shield decoration recipes](https://github.com/mezz/JustEnoughItems/commit/292c104ac21da757862ae8111ccd92ebd4f641bf) - mezz
    
*   [Make the `Show Recipes` tooltip optional in the API (#2972)](https://github.com/mezz/JustEnoughItems/commit/d28d213b0bc9c06aeade519019c57c577c1b337a) - Relentless
    
*   [Allow recipe transfer errors to set button color highlight (#2971)](https://github.com/mezz/JustEnoughItems/commit/c56c409b138645af2ffa814a99b345c930036e67) - Technici4n
    
*   [Fix #2959 Update to Fabric API 0.60](https://github.com/mezz/JustEnoughItems/commit/efbabfdba7af8454f56a30ea2440f54f9930c92c) - mezz
    
*   [Close #2951 Update recipe transfer handlers every tick](https://github.com/mezz/JustEnoughItems/commit/21bcb20ac61acda82c786bc9ff3226845e53b8ce) - mezz
    
*   [Github: increase stale action's operations per run](https://github.com/mezz/JustEnoughItems/commit/def1bfdcba3af124de6fe78fd23ed39c7f1d41a6) - mezz
    
*   [Github: do not comment when locking closed issues over 1 year old](https://github.com/mezz/JustEnoughItems/commit/639568c2aee5ea142e74ca63630c7f5867d7da59) - mezz
    
*   [Automatically lock Github issues older than 1 year old](https://github.com/mezz/JustEnoughItems/commit/225f4c9ef583d70592b7eab31f8a60c3a14d2cab) - mezz
    
*   [enable automatic marking and closing of stale issues](https://github.com/mezz/JustEnoughItems/commit/65a5f23de4fb4ff573d3e288dafbd02cb8da9ea6) - mezz
    
*   [start marking stale issues starting with the oldest](https://github.com/mezz/JustEnoughItems/commit/ebc5ed5b2e6c237e4733bdbddff4f921896a5a7a) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/49da070d0ae2318ee672422eff4566d8ae2ad2b7) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/e696d893dbc5cb9a662c94958d6d1c9757d162ef) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/2a596077deab20fdcb01c74bdd869279a92ef2c9) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/571cfac14933fcedf38c8adfdfb2af312f1c10d5) - mezz
    
*   [Add github stale workflow action in dry-run mode](https://github.com/mezz/JustEnoughItems/commit/c7ae5445cf44fc0a107b7b2b308757fa56848436) - mezz
    
*   [Update dependencies for Minecraft 1.19.2](https://github.com/mezz/JustEnoughItems/commit/c0859d6ac6b798bcc3d96338109f8ab976ea16c5) - mezz
    
*   [Improve javadocs for IIngredientAcceptor#addFluidStack](https://github.com/mezz/JustEnoughItems/commit/90b37d06031c8e113d51e747e3f532f4b9ed047b) - mezz
    
*   [Fix #2939 Crash on Forge when typing](https://github.com/mezz/JustEnoughItems/commit/4679f2e05ebabebde6b14ad445e39319aea689a7) - mezz
    
*   [Fix #2899 Cheat mode not working when connected to dedicated server](https://github.com/mezz/JustEnoughItems/commit/e6ef3fca950b59aa2c716c75dc6aac612470058e) - mezz
    
*   [Clean up unused method](https://github.com/mezz/JustEnoughItems/commit/acfa093e0bbf67d3f1faae56d24f5762c450fcfc) - mezz
    
*   [Update for Minecraft 1.19.1](https://github.com/mezz/JustEnoughItems/commit/16116299c676183dee0f63380a6a09a64d754359) - mezz
    
*   [Minor code cleanup](https://github.com/mezz/JustEnoughItems/commit/91527b7d5fae747455ed7630915c088e3fe0f602) - mezz
    
*   [Fix #2875 Fix recipe slot highlight and RecipeTransferErrorTooltip display. (#2922)](https://github.com/mezz/JustEnoughItems/commit/ec010fbd494f5b7c4a0514f6bdf2f20dc3464958) - vfyjxf
    
*   [Update Forge version used in the dev environment](https://github.com/mezz/JustEnoughItems/commit/00ee4988895f4eb2c177b22a252abe7e2e6bcd8e) - mezz
    
*   [Add convenience functions to reduce the need for using VanillaTypes.ITEM_STACK](https://github.com/mezz/JustEnoughItems/commit/66a18ccaccf226c3a21863f4f96b30c564e9a9bb) - mezz
    
*   [Add Kazakh translation (#2912)](https://github.com/mezz/JustEnoughItems/commit/4f0c07ea66be0c385ed41d363e78fff19c7236ef) - AlibekAytjan
    
*   [Update bg_bg.json (#2910)](https://github.com/mezz/JustEnoughItems/commit/3d3f29bc99d05e8fe6a8b988f57a0d5cc54c38a5) - Deyan Nikolov
    
*   [Create convenience function for adding a fluid ingredient to IIngredientAcceptor](https://github.com/mezz/JustEnoughItems/commit/dfbe89487d70eaa2364199916ab9afed8815f586) - mezz
    
*   [Close #2901 Make Crafting Grid Helper return the slots it creates](https://github.com/mezz/JustEnoughItems/commit/0645b00cf13fa60c3a89e905c02fa146c543359f) - mezz
    
*   [Fix #2898 Expose "show uses/recipes" key bindings in the API](https://github.com/mezz/JustEnoughItems/commit/c7f4c07d864ab21e2bc4c2ed23f87942506b8dbf) - mezz
    
*   [Fix #2897 Hovering over recipe tabs can ignore key inputs](https://github.com/mezz/JustEnoughItems/commit/96f611776ba34ad0166c1589d3cd05a9da32e171) - mezz
    
*   [Fix #2873 Use the correct mouseReleased call to finish a click on Fabric](https://github.com/mezz/JustEnoughItems/commit/1e13ab99ba7aaf2452377e8f748bcfc1abcd3689) - mezz
    
*   [Fix #2871 Fix text field synchronization from mods via the API](https://github.com/mezz/JustEnoughItems/commit/30fb27f2dfa48647d176e76f830925b097c0214b) - mezz
    
*   [Fix #2873 Ghost ingredient handling on Fabric](https://github.com/mezz/JustEnoughItems/commit/b6813e7b3a70606841b8fdb6a80252a92e5c8fac) - mezz
    
*   [Update Polish translation (#2874)](https://github.com/mezz/JustEnoughItems/commit/dde86189738a28735072ccfa3ee8e425b01c94df) - Greg-21
    
*   [Use an accesswidener to access fields with Fabric](https://github.com/mezz/JustEnoughItems/commit/de821ed60b845e5d824f2f8a9edf705f7846b50b) - mezz
    
*   [update parchment mappings](https://github.com/mezz/JustEnoughItems/commit/fdf39f73debb75a0ca37bcc3c7c0efca4394f8f2) - mezz
    
*   [Fix #2839 Improve widget focusing behavior with the search box](https://github.com/mezz/JustEnoughItems/commit/89fa05dc4ec1559c8692bfa169999baa96efaab6) - mezz
    
*   [Fix #2890 Protect against broken recipe transfer handlers crashing](https://github.com/mezz/JustEnoughItems/commit/4f991ab7b552256c01009993454f4f9c76a46865) - mezz
    
*   [Clean up unused imports](https://github.com/mezz/JustEnoughItems/commit/20bbf2808923966169b577deba8aaf5097603b6a) - mezz
    
*   [Update to support the breaking changes in forge (#2886)](https://github.com/mezz/JustEnoughItems/commit/9669b94bf94410ba0d621b43bd709e3f2cbd0de9) - Sara Freimer
    
*   [clean up configs slightly](https://github.com/mezz/JustEnoughItems/commit/e5a34c9b6921a24e09603038f190a3df141facb1) - mezz
    
*   [Cleanup](https://github.com/mezz/JustEnoughItems/commit/9dc14b1ceeb086a5332f73584845e5650325ac78) - mezz
    
*   [update parchment version](https://github.com/mezz/JustEnoughItems/commit/4dd6e22d9fabb1529d463ce0edb59e4c2b299c5d) - mezz
    
*   [Update dev forge and mappings](https://github.com/mezz/JustEnoughItems/commit/32afb34a1a11fee0d7f656b4b846fb43c3a8e191) - mezz
    
*   [set gradle to no longer use configure-on-demand, it breaks ForgeGradle](https://github.com/mezz/JustEnoughItems/commit/73ed0fef50bc1209548adb740f350ae991764fe2) - mezz
    
*   [Remove old createFocusLink method](https://github.com/mezz/JustEnoughItems/commit/071c078a733c1d08d45646188ba9506eab910174) - mezz
    
*   [Fix improper property use causing invalid dependency POM (#2854)](https://github.com/mezz/JustEnoughItems/commit/ad7fd38086d3e3c970813edb577a4a9d7b3a1686) - sciwhiz12
    *   The archivesName property of BasePluginExtension is a Property<String>.
    *   The default implementation of toString() for a Property is to print out
    *   their name and owning object, and not the toString() of their contents.
    *   This meant that passing archivesName to Node#appendNode as a value,
    *   which calls toString() on it to make it into a String, results in e.g.
    *   `extension 'base' property 'archivesName'` instead of the expected
    *   value of e.g. `jei-1.19-common-api`.
    *   The simple fix is to call Property#get() on archivesName to get its
    *   actual value and pass that on as the node value.
*   [Fix #2851 Protect against crash from broken fluids](https://github.com/mezz/JustEnoughItems/commit/edc5e7c22e0aac91a4424571525b6df85abafa53) - mezz
    
*   [Update to changes in Forge's fluid API (#2852)](https://github.com/mezz/JustEnoughItems/commit/cea569ee6a20589f9b7b0ccd037d31f5e8ddbb11) - Sara Freimer
    
*   [version 11](https://github.com/mezz/JustEnoughItems/commit/b7158ba5b7bc16f9e5f1efbe927fe8c88515cac8) - mezz
    
*   [Remove deprecated methods](https://github.com/mezz/JustEnoughItems/commit/8a65df7e56a1c00d4dd4153260902e4f26a7401a) - mezz
    
*   [Update for Minecraft 1.19](https://github.com/mezz/JustEnoughItems/commit/5b2e71f547cd13cd48de4d999c4f56bddfc421bb) - mezz
    
*   [JEI 10. Add Fabric support. Refactor into a multi-project (#2842)](https://github.com/mezz/JustEnoughItems/commit/530ef6c8d604370bef850f3656a28beab56cbfba) - mezz
    
*   [Update sv_se.json (#2836)](https://github.com/mezz/JustEnoughItems/commit/d46164fce29506569f7e3debdbab099439e042d6) - A. Regnander
    
*   [Updated Russian Translation (#2799)](https://github.com/mezz/JustEnoughItems/commit/d12ab9560bbe57681de1de20bca876bc9556f10e) - DrHesperus
    
*   [Fix #2812 Add a keybind for the key to exit a recipe screen to the inventory](https://github.com/mezz/JustEnoughItems/commit/3d1852a1f713fb79260a6670a0551437f8a536db) - mezz
    
*   [Allow focuses to match multiple ingredients in a recipe slot](https://github.com/mezz/JustEnoughItems/commit/efd8ef5bbf45e0c73c5d6285163fe5dc6f827323) - mezz
    
*   [Fix #2790 Recipes are listed twice when checking the uses of an ingredient that is also a catalyst](https://github.com/mezz/JustEnoughItems/commit/d13676b136f61716dbe8abfa43589a9ef2d1baa3) - mezz
    
*   [deprecate some api methods that depend on forge-specific code](https://github.com/mezz/JustEnoughItems/commit/e0fa409e74153d687d901fd3dba40957a02099cd) - mezz
    
*   [Create IIngredientTypeWithSubtypes for generic handling of subtypes in ingredients](https://github.com/mezz/JustEnoughItems/commit/01fd9c02bb0b2348d988452ca5edd8ccbba704cb) - mezz
    
*   [Move config screen into platform service](https://github.com/mezz/JustEnoughItems/commit/fadb4d9741884d1dec0201d541f04fbe4f764f6f) - mezz
    
*   [move forge configs into forge folder](https://github.com/mezz/JustEnoughItems/commit/981e463c97f9a3c89bed3fb6991bc1c76b334663) - mezz
    
*   [Add platform server helper](https://github.com/mezz/JustEnoughItems/commit/f4ebadd513a8ee7d628c4b3e56de3bb2293e6197) - mezz
    
*   [Use service to get particle icons](https://github.com/mezz/JustEnoughItems/commit/c97b9d3db9ef1e05195804a9caa618d9bdccefdc) - mezz
    
*   [Organize packet data into data and context](https://github.com/mezz/JustEnoughItems/commit/2b04f090497fb4cc3a54c0db4c5c9fc200a4a7b0) - mezz
    
*   [Update es_es.json (#2782)](https://github.com/mezz/JustEnoughItems/commit/0263f7090ff197d026c404cea98531b81bf8b301) - zeedif
    
*   [Fix #2783 Attempted to load class net/minecraft/client/player/LocalPlayer for invalid dist DEDICATED_SERVER](https://github.com/mezz/JustEnoughItems/commit/db613c8519cdbcbb4b0d66857b0d5dae3998c7ff) - mezz
    
*   [Clean up ErrorUtil](https://github.com/mezz/JustEnoughItems/commit/61758a12034f85b4829bb00b45d0b3b63fac123b) - mezz
    
*   [Move registry access to a service loader](https://github.com/mezz/JustEnoughItems/commit/35c1706cfe8a4fcc0f1d68f691917b1e268c984f) - mezz
    
*   [Update it_it.json (#2785)](https://github.com/mezz/JustEnoughItems/commit/3a008930cb32dc33931468be00a1e4003d1e464d) - Andrea Costa
    
*   [Protect against mod crashes when checking for enchantable items](https://github.com/mezz/JustEnoughItems/commit/ac26e8c7bd5f4727e84883a85026bd66a0b2fbf7) - mezz
    
*   [Add access to IIngredientManager from recipe catalyst registration](https://github.com/mezz/JustEnoughItems/commit/808372d990fb311eb83d89d27d111d6fdce6d92d) - mezz
    
*   [organize some network code into subprojects](https://github.com/mezz/JustEnoughItems/commit/b709cc36179fc61ea627f995335d24b0bac01216) - mezz
    
*   [Refactor server connection logic into its own class](https://github.com/mezz/JustEnoughItems/commit/98abba6b2e2b75f716978305268555e533b5402d) - mezz
    
*   [Organize some config files into subprojects](https://github.com/mezz/JustEnoughItems/commit/2c5229fca155e5655e55e4d81ed3c1e5d594d082) - mezz
    
*   [Move Translator to common.util](https://github.com/mezz/JustEnoughItems/commit/17927c0a20902319492336642484239284bc71ac) - mezz
    
*   [Include all test results in Jenkins](https://github.com/mezz/JustEnoughItems/commit/880be88737c4be9d5d73c9cf5cd7e96155307124) - mezz
    
*   [Clean up ReflectionUtil](https://github.com/mezz/JustEnoughItems/commit/5e692c7ca7168999c4a7a6105b5653917e3ad4dd) - mezz
    
*   [Move more code into the Core and Common subprojects](https://github.com/mezz/JustEnoughItems/commit/2112d63b268bce244ab6e05c9b1fc8f23dc484d8) - mezz
    
*   [Clean up ColorNamer code](https://github.com/mezz/JustEnoughItems/commit/c784e6a20312ef31e081210a3e185e2a30c13046) - mezz
    
*   [Move search logic into core subproject](https://github.com/mezz/JustEnoughItems/commit/847fb20ab1590b7e3905c49b5fe4fb7bdf1e110e) - mezz
    
*   [Create "Core" subproject for code that does not depend on Minecraft](https://github.com/mezz/JustEnoughItems/commit/d005fda4e2ea1f0a446634307654b907913d7a26) - mezz
    
*   [Fix #2756 Fuel recipes with high values can overflow the recipe background](https://github.com/mezz/JustEnoughItems/commit/8edf068e17646debaf3f095d32a736b172448614) - mezz
    
*   [Close #2771 Allow IRecipeTransferInfo to return a transfer error if it can't handle the recipe](https://github.com/mezz/JustEnoughItems/commit/8b62850a0056c2fbc2f481eb0993f3de259b7ac7) - mezz
    
*   [Improve startup code to be more resilient to modded bugs](https://github.com/mezz/JustEnoughItems/commit/5242ae9ffbdb09ebf46597f750839bba5288c6e4) - mezz
    
*   [Fix bookmark config creation](https://github.com/mezz/JustEnoughItems/commit/bfcd7ff664a66f8ceac0d9141c5ef0ecfa549b13) - mezz
    
*   [Exclude duplicate files from output jars](https://github.com/mezz/JustEnoughItems/commit/be3fad8df73eab0b98a98f51f09b45b779520a5e) - mezz
    
*   [Isolate changelog plugin in a subproject](https://github.com/mezz/JustEnoughItems/commit/daed974fd0cf47156a508af008ad4b53bd0b853d) - mezz
    
*   [Constrain gitchangelog asm version](https://github.com/mezz/JustEnoughItems/commit/a314f03808e4532e30901c418a294147bc172f0a) - mezz
    
*   [fix asm coords to org.ow2.asm:asm](https://github.com/mezz/JustEnoughItems/commit/0bc8a0b48dee4b333d62c1ae6344cf7c6984f27e) - mezz
    
*   [add comment for asm constraint](https://github.com/mezz/JustEnoughItems/commit/2456758d6acf05493bfb2432daa00d67d0e08560) - mezz
    
*   [Try constraining asm to the right version](https://github.com/mezz/JustEnoughItems/commit/4b922335cd9eced04341fba7be5add4a8c3e9477) - mezz
    
*   [Update dev Forge version](https://github.com/mezz/JustEnoughItems/commit/3e7e106e1f3974ed311bdde7670ccd60d312eee6) - mezz
    
*   [Organize internal code into a multiproject (#2772)](https://github.com/mezz/JustEnoughItems/commit/5aa1ae16fe920d7c4159eb3448d5ec8bb8891ec8) - mezz
    
*   [Update forge maven artifact id](https://github.com/mezz/JustEnoughItems/commit/04f24d67c0b7a23c517c55be2d56aa8a2758e5e9) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/5633ee657519b14567cd30ba53f73e97194a0648) - mezz
    
*   [update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/95ee3bff746fcb5ff18f8275564d1a1b46947add) - mezz
    
*   [update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/b2d3d6a756847913b1ff48d38f0c459a0b26d0c7) - mezz
    
*   [Make the give notification message work for any player that has a server](https://github.com/mezz/JustEnoughItems/commit/9db2be0b4ed1dead1c2ea167bc07202b4ffc4dab) - mezz
    
*   [fix changelog path](https://github.com/mezz/JustEnoughItems/commit/62b2f40543ee48d3006d043b4f77522b1fa1b7e1) - mezz
    
*   [fix project dependency](https://github.com/mezz/JustEnoughItems/commit/f4a08d34177c3b0e3ed5a7bf6f877244e7f1611a) - mezz
    
*   [Ensure ProcessResources updates on every new version](https://github.com/mezz/JustEnoughItems/commit/2bfe7a815be61756a3ecf6f275f2afbb777ad1ba) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/b0a994494433bd42b065578b8d4fa76608734190) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/cde4010b43e77fbc72b497d3426dd2044ec271c4) - mezz
    
*   [Organize project code](https://github.com/mezz/JustEnoughItems/commit/dd289c912d8f52da59c155850baa4c1e0aa5e9ce) - mezz
    
*   [Fix gradle project properties](https://github.com/mezz/JustEnoughItems/commit/56b5da3a8d94f2e02b7489d05bd878920b4ff101) - mezz
    
*   [Use net.minecraft.MethodsReturnNonnullByDefault](https://github.com/mezz/JustEnoughItems/commit/ebd3cbcbcce0000851fdb797c542e25114bcda69) - mezz
    
*   [Update Forge in dev environment](https://github.com/mezz/JustEnoughItems/commit/9025bb694be7c5d5e70f4e128989b1d1d18a4df4) - mezz
    
*   [Fix #2751 Crash when MC window becomes too narrow](https://github.com/mezz/JustEnoughItems/commit/84142187699e30c29295a7aa86dd44b96271eefe) - mezz
    
*   [Update Jenkinsfile to always run tests](https://github.com/mezz/JustEnoughItems/commit/543ad9baeb7c1316246b44cee32c1b903e4a7304) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/5073f9659f206f45a1c30b10eb0bb56646c4f7fa) - mezz
    
*   [Update Jenkinsfile for publishing to CurseForge](https://github.com/mezz/JustEnoughItems/commit/69af776afc6f9e53fb17008215a85886500aa8eb) - mezz
    
*   [Migrate build.gradle to build.gradle.kts (#2761)](https://github.com/mezz/JustEnoughItems/commit/ac9cbc0f58c86c85cc14370db4156922e861c982) - mezz
    *   Co-authored-by: Jared <jaredlll08@gmail.com>
*   [Fix #2754 Crash when GUI extends offscreen](https://github.com/mezz/JustEnoughItems/commit/bb7eec72a41a0c932f71a4f591b6d8977f7d031b) - mezz
    
*   [Fix #2752 Crash on gui slots that are to the left or above the gui](https://github.com/mezz/JustEnoughItems/commit/98e5ead592a85f084a9e840fd5e4125e3c8df4cc) - mezz
    
*   [Display hidden ingredients in a recipe if there are no other ingredients to show](https://github.com/mezz/JustEnoughItems/commit/b8903a1777f1dc939f2a0476f412a142ef7d6f70) - mezz
    
*   [Allow focus linking with invisible ingredients](https://github.com/mezz/JustEnoughItems/commit/ae69541a7cd44362f77c30c88e7d2c58fc5c1d2b) - mezz
    
*   [Fix debug recipes](https://github.com/mezz/JustEnoughItems/commit/61d1ebe55676727c0572eaac14367943a18650c3) - mezz
    
*   [update JUnit](https://github.com/mezz/JustEnoughItems/commit/1c12ab5031333d6aeb0577869b4fc235c83fb922) - mezz
    
*   [Clean up build script](https://github.com/mezz/JustEnoughItems/commit/02b3939453a8e7511fd4dd95034ef19bf05d05a1) - mezz
    
*   [Run Spotless cleanup](https://github.com/mezz/JustEnoughItems/commit/d281b8446a7691e579e73998bf75cb9e2c70b849) - mezz
    
*   [Fix bookmark config directory creation](https://github.com/mezz/JustEnoughItems/commit/1a1db97ecc33d282477e14536ffdf49baae23b13) - mezz
    
*   [Fix #2744 Workaround for Optifine bug](https://github.com/mezz/JustEnoughItems/commit/dcfab2e4f61c1834971f4a34718f7f426199aded) - mezz
    
*   [Fix #2744 Workaround for Optifine bug](https://github.com/mezz/JustEnoughItems/commit/d925b2ef8acf8db3226fcc6369236f90c911b1b0) - mezz
    
*   [Clean up some tags code](https://github.com/mezz/JustEnoughItems/commit/08ef7e1d958219eab93c714fb735fc29a56036db) - mezz
    
*   [suppress more deprecation warnings](https://github.com/mezz/JustEnoughItems/commit/252b96d063a3bea16ab5307a8f38182dafc4f475) - mezz
    
*   [Use Parchment mappings in dev environment](https://github.com/mezz/JustEnoughItems/commit/2f4ecf9de17ab907084fc1b269e8e57e7ba5637d) - mezz
    
*   [Make potion effects render in compact mode when JEI is open](https://github.com/mezz/JustEnoughItems/commit/982a1459a66271bf29776eb3b0e51c7fda471bec) - mezz
    
*   [add more client run configurations in developer environment](https://github.com/mezz/JustEnoughItems/commit/95e2045c572bb8335899a57ec61a5b37cae03c8b) - mezz
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/f2c87e1d88e42205b5da342f513dc78a7f15fa99) - mezz
    
*   [Link anvil recipe input/output focuses](https://github.com/mezz/JustEnoughItems/commit/09f7e93b47979253fa419b1d1d6024182d3ebaa1) - mezz
    
*   [Code cleanup](https://github.com/mezz/JustEnoughItems/commit/fcaba7451f0f7663ad850c1f14a4c142bba6999e) - mezz
    
*   [Fix logic when there are broken recipe layouts](https://github.com/mezz/JustEnoughItems/commit/490e92d46f9d20c6024f38efd2bf52e10691cf31) - mezz
    
*   [Minor code cleanup](https://github.com/mezz/JustEnoughItems/commit/b06f757bf00a965a2c001e59d06f628d3f6d6502) - mezz
    
*   [Fix type of IRecipeLookup#limitFocus](https://github.com/mezz/JustEnoughItems/commit/e7e6055d8d543206ad0807b83f14a30c58e7c093) - mezz
    
*   [Refactor: Replace IRecipeCategory.getUid() ResourceLocation with RecipeType](https://github.com/mezz/JustEnoughItems/commit/4b0270bbced63113067b0b091fb1e3b3e394dbf9) - mezz
    
*   [Mark ISlowRenderItem as deprecated](https://github.com/mezz/JustEnoughItems/commit/4c9a54e9ef57abb0ab84f9b42bd8afcbbfce08ca) - mezz
    
*   [Minor cleanup](https://github.com/mezz/JustEnoughItems/commit/02b187a06443b569b6a2cedce690c2d918d6b0a3) - mezz
    
*   [Remove unused BookmarkOverlayToggleEvent](https://github.com/mezz/JustEnoughItems/commit/176326dbdbe305a3b65f0052eb8038b2a07007b7) - mezz
    
*   [Remove FastItemRendering, it is no longer necessary and can cause conflicts](https://github.com/mezz/JustEnoughItems/commit/a6065cbf4cc979436f9c0ac1604f76bf43f7f07a) - mezz
    
*   [Add access to IJeiHelpers from IJeiRuntime](https://github.com/mezz/JustEnoughItems/commit/0d2cecd41bfe008298303312d2d37dd9c9d44d5f) - mezz
    
*   [Remove persistent WorldConfig and untangle filter text logic](https://github.com/mezz/JustEnoughItems/commit/b949f819cc30fad3eee85841b1e60055bdb5d793) - mezz
    
*   [GUI code refactor. Add configs for ingredient list and bookmark list layouts. (#2711)](https://github.com/mezz/JustEnoughItems/commit/212f9c745d1f7cb011c23c784caac036eb14e70c) - mezz
    
*   [Fix #2733 Better handling for /reload](https://github.com/mezz/JustEnoughItems/commit/1b95efefbcb8186bac071a71cadda869e91df3e1) - mezz
    
*   [Fix #2733 JEI doesn't update after /reload](https://github.com/mezz/JustEnoughItems/commit/48374815d0a0b88930ea2f8848f47f14405ea694) - mezz
    
*   [Clarify Github Issue Templates](https://github.com/mezz/JustEnoughItems/commit/aa3a7e7e35254aaafcf0e8de946ba88b78910d7e) - mezz
    
*   [Add github issue templates](https://github.com/mezz/JustEnoughItems/commit/135768cefd4fff4f3a44fb40224a7439849c6c35) - mezz
    
*   [Update README](https://github.com/mezz/JustEnoughItems/commit/8f85dafb492a45ae01b5b90720b18d2fda5e47fd) - mezz
    
*   [Simplify code for IngredientSorterComparators#getTagForSorting](https://github.com/mezz/JustEnoughItems/commit/6899e62c8421e3fb15c462e76708bfc01d2837b9) - mezz

### jei-1.19.2-forge-11.6.0.1023.jar
### Current release 11.6.0

*   [fix ImmutableRect2i math and tolerance](https://github.com/mezz/JustEnoughItems/commit/6a2c7fc01a1a334b86e1708da187ba9fb37827d2) - mezz
    
*   [Fix #3183 Fix #3523 Loosen restrictions on gui placement and rectangles going offscreen](https://github.com/mezz/JustEnoughItems/commit/b46bb996e2792a4e40634a26357d593875294345) - mezz
    
*   [Prevent recipe transfers from touching output slots](https://github.com/mezz/JustEnoughItems/commit/8612cb0974c69fabfe268497f927435d915118e5) - mezz
    
*   [run spotless](https://github.com/mezz/JustEnoughItems/commit/fa73465828dbade643000f5cb641d1667146c8c1) - mezz
    
*   [Update gradle, forge, and fabric versions](https://github.com/mezz/JustEnoughItems/commit/502d686aee290866399eb276037315765be186fa) - mezz
    
*   [Close #3320 Search default block tags for items with blocks in them](https://github.com/mezz/JustEnoughItems/commit/0d64e3aa4c27ce056bef113a63ff295db8694eba) - mezz
    
*   [Fix error handling when a recipe manager plugin crashes](https://github.com/mezz/JustEnoughItems/commit/c24d85b39a8704f4221e306be064e05214bdfcfe) - mezz
    
*   [turn spaces to tabs consistently with spotless rules](https://github.com/mezz/JustEnoughItems/commit/119aba128828f02b77c7bac900c4d1b0ec7e6848) - mezz
    
*   [update spotless plugin](https://github.com/mezz/JustEnoughItems/commit/3bd5d55df3d0bdcfa09cd639133bb193ec5eafa3) - mezz
    
*   [increase ram given to gradle](https://github.com/mezz/JustEnoughItems/commit/cd7bc9ee368e072d8d29f8e43f5ace96fdff7889) - mezz
    
*   [Fix copying recipe id so that it doesn't just copy the first one displayed](https://github.com/mezz/JustEnoughItems/commit/3b3a418fccc35f07a40625827447230f5f32a842) - mezz
    
*   [Add "Fabric-Loom-Remap" to fabric api jar manifest](https://github.com/mezz/JustEnoughItems/commit/e29a94c2d1bd9baf8984ee717a4fb8c8e49105b5) - mezz
    
*   [Add modrinth upload task](https://github.com/mezz/JustEnoughItems/commit/3d6494bdae2346db583fe7c5f424c6434794bc41) - mezz
    
*   [Close #3190 Add support for ghost ingredient dragging from bookmarks](https://github.com/mezz/JustEnoughItems/commit/d11e1491f6d4945151536edb5e37b57a3e8439aa) - mezz
    
*   [Make FileWatcherThread a daemon thread](https://github.com/mezz/JustEnoughItems/commit/f1df855db8766961f7f66fe2a146c6c02e8bbd65) - mezz
    *   This prevents it from keeping the JVM from exiting during data generation.
*   [Remove fabric depends statement for anything other than the core project](https://github.com/mezz/JustEnoughItems/commit/b69b1cd8bb1729bc37e6ae57e4af88a689fd6200) - mezz
    
*   [Fix #2991 Fix starting on server thread in Fabric after reload](https://github.com/mezz/JustEnoughItems/commit/caa72a5471117a83c8cd25e00722b317f9a78980) - mezz
    
*   [Update Fabric version in dev environment](https://github.com/mezz/JustEnoughItems/commit/cbdb368862e9c3c6a3320feba4d84cf567689f21) - mezz
    
*   [Improve config file watcher, avoid creating excess threads on world reload](https://github.com/mezz/JustEnoughItems/commit/33a6b1fadf01cc6f77a44c5c086a73a6b9e03bda) - mezz
    
*   [Move input debug logs behind a new DebugInputs config flag](https://github.com/mezz/JustEnoughItems/commit/a18dcf94aa7b9b849e4f23e6a4211bee7d14622f) - mezz
    
*   [Fix ghost ingredient dragging](https://github.com/mezz/JustEnoughItems/commit/372f9e0bbcd0a9d921520af97aeaff0445d6a031) - mezz
    
*   [Add a 1.19 config for the position of new bookmarks (#3113)](https://github.com/mezz/JustEnoughItems/commit/fffffc610db8e75a5bd50eab851c97a1b40050bd) - Waiting Idly
    
*   [Fix #3079 Write the blacklist to file if the file does not exist yet](https://github.com/mezz/JustEnoughItems/commit/15bbaa4f8db1d77cf7ddd99178ffcd22dc20bd89) - mezz
    
*   [Simplify platform config helper code](https://github.com/mezz/JustEnoughItems/commit/e6ea3b4ef72737f927939682ae9b5c90c5d980f5) - mezz
    
*   [Close #3077, Add link to open the JEI config folder when you click the settings button](https://github.com/mezz/JustEnoughItems/commit/e7570624748f7c521a9efcc8e60b7884f63ad984) - mezz
    
*   [Set a maximum Minecraft version of 1.19.2](https://github.com/mezz/JustEnoughItems/commit/71894a977f62742fcb505c83fd2e29dab46e3791) - mezz
    *   Minecraft 1.19.3 has breaking changes and is not compatible with this version of JEI.
*   [Update zh_cn.json (#3105)](https://github.com/mezz/JustEnoughItems/commit/2f56b84b5d2393ab7c410b0b25ce9941382a82e7) - ArchiDreamZ
    
*   [Fix missing period and space in kk_kz.json (#3101)](https://github.com/mezz/JustEnoughItems/commit/2106f3f3437ce339fac9555749fb3f7723077b98) - AlibekAytjan
    
*   [remove jar archive in Jenkins (it is already available in maven and curseforge)](https://github.com/mezz/JustEnoughItems/commit/9f1a77b1c5b695f8203163633fd169aff0dd7844) - mezz
    
*   [use tools.jdk for Jenkinsfile instead of JAVA_HOME env var](https://github.com/mezz/JustEnoughItems/commit/74fcc826e8e702597365261601e18ddbe2c9eecd) - mezz
    
*   [Fix #3093 Create a runtime registration step before onRuntimeAvailable](https://github.com/mezz/JustEnoughItems/commit/cfb7c8d3767f43a7ab18b9236f794abfecc70b33) - mezz
    
*   [Hide ingredients that have the tag "c:hidden_from_recipe_viewers"](https://github.com/mezz/JustEnoughItems/commit/1a08a45e887aa8224b2cbe1a24645d7b443a6676) - mezz
    
*   [chore: Add Gui and Library maven publish to Jenkinsfile (#3066)](https://github.com/mezz/JustEnoughItems/commit/01f613671cb4635a0a5c23b85c40f1d52d0f3d00) - Kli Kli
    
*   [fix sources jar configuration](https://github.com/mezz/JustEnoughItems/commit/28ca460fafde8150988b8c70bf3bacd4397e7d36) - mezz
    
*   [fix publishing of sources jars for Gui and Library](https://github.com/mezz/JustEnoughItems/commit/ca717007b3ecd35e6abf5c6b08aa82d3a4d4134c) - mezz
    
*   [publish Library and Gui jars to maven](https://github.com/mezz/JustEnoughItems/commit/66de59b65f548c2ae2a872f6a0a698d0bd41fe4b) - mezz
    
*   [Fix publishing the Core artifact](https://github.com/mezz/JustEnoughItems/commit/38fa7cbebda074de30cd19d85069d75457206695) - mezz
    
*   [Code cleanup](https://github.com/mezz/JustEnoughItems/commit/c83958436399abdc3581b16d0d73df56ea555073) - mezz
    
*   [Split up the GUI code and add API methods so that the GUI mostly depends on the API (#3058)](https://github.com/mezz/JustEnoughItems/commit/6476d975359e1c2ff517d94b58ff2dcc7bf780ae) - James Mitchell
    
*   [update pt_br (#3040)](https://github.com/mezz/JustEnoughItems/commit/8f79ba8f1b63799db85415fe82147eef6cd25908) - FITFC
    
*   [log gui change on debug mode only (#3052)](https://github.com/mezz/JustEnoughItems/commit/042cbc9463d10651cf6e6cd4bf1cc17a0ddd5f16) - Jonathan Colmenares
    
*   [Mark 1.19.2 builds as betas](https://github.com/mezz/JustEnoughItems/commit/bd7a56faccd62e5dfc10e22c8855a338f37a20c5) - mezz
    
*   [Fix hiding items from recipes via the API](https://github.com/mezz/JustEnoughItems/commit/b7f3e66e109fb467337aa78e56a99eadbfff0237) - mezz
    
*   [Reduce memory used by an adversarial PacketRecipeTransfer](https://github.com/mezz/JustEnoughItems/commit/f128c3b3dbfcbbbfe965f78ff85f514f66c4fa19) - mezz
    
*   [Split drag handling from input handling, add debug mode logs for input handling](https://github.com/mezz/JustEnoughItems/commit/9992840db5ad4a6c52f8e64bf4d179042c8e42cd) - mezz
    
*   [#3018 Fix crashing VanillaPlugin on invalid brewing recipes](https://github.com/mezz/JustEnoughItems/commit/1c2dd1a9402607ac1a2861862e5a723924aa13fe) - mezz
    
*   [fix internal javadoc](https://github.com/mezz/JustEnoughItems/commit/e8312ddd16a0e1ce1b0f008af2494f53dea0962d) - mezz
    
*   [#3022 Only delete items on left-click](https://github.com/mezz/JustEnoughItems/commit/5252f70c55bcef8bdf474013eacb2625375ec740) - mezz
    
*   [#3022 Fix picking up multiple items with the mouse in cheat mode](https://github.com/mezz/JustEnoughItems/commit/1f93f82bfc6bac8b3a90c06c1a4f26c53ea40b6b) - mezz
    
*   [Ensure packets are handled on the correct thread](https://github.com/mezz/JustEnoughItems/commit/f758d0d4c9b0568091253dfc7fbb4b0e2ec55dff) - mezz
    
*   [add IJeiHelpers#getRecipeType to help addon mods](https://github.com/mezz/JustEnoughItems/commit/38096675e85d6ebc61109da3b21b24c6bf4f5bbc) - mezz
    
*   [Fix #2993 Reduce recipe validation errors to debug logs](https://github.com/mezz/JustEnoughItems/commit/9a8f8dd61a6fdd2875d7d685dd61f9f3e1e198b2) - mezz
    
*   [Fix #3014 Saving edit-mode changes to file fails](https://github.com/mezz/JustEnoughItems/commit/97bfb62ebbdbb092f62f75b4970998899a85a09e) - mezz
    
*   [fix ConfigSerializer sorting for config categories](https://github.com/mezz/JustEnoughItems/commit/d881e68ebec0d4dca6b22b17999a628e1d267de2) - mezz
    
*   [Fix #3009 returning negative X/Y values from getGuiExtraAreas() breaks filter text selection](https://github.com/mezz/JustEnoughItems/commit/0364eed6b0823a9eb2b9d695336a287a695a8cb7) - mezz
    
*   [Improve performance of checking fuels on Fabric (#2997)](https://github.com/mezz/JustEnoughItems/commit/cab76d8154e70206bb7441d5ec6ea2cc497eed57) - Technici4n
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/a0410148a9984b38c951a83ac3ec356ae9bea2fb) - mezz
    
*   [Minor cleanup in config code](https://github.com/mezz/JustEnoughItems/commit/79c34fcc1d16699389d5015d284bc16e8cbe3da1) - mezz
    
*   [Prefer more abundant items first for recipe transfer (#2987)](https://github.com/mezz/JustEnoughItems/commit/56f7b86fc5fc4b43b640b09892e6b0ccfef0500b) - DBotThePony
    
*   [Clean up unused imports](https://github.com/mezz/JustEnoughItems/commit/2e4d4f570edfc6056cbd1ebae1efbae3e24ff7be) - mezz
    
*   [Fix #2968 Add Fabric support for Potion recipes](https://github.com/mezz/JustEnoughItems/commit/730f667a4107b2b33a9c10e43e3870bde7a11c3b) - mezz
    
*   [Close #2963 Add catalogueImageIcon](https://github.com/mezz/JustEnoughItems/commit/5662c0bf93c16829c6838d3ef5bfbb7ff951cdd1) - mezz
    
*   [Fix #2978 fix server-side error logs from platform handler when deleting items](https://github.com/mezz/JustEnoughItems/commit/a3dec98206575147cc45b01adc585ee8f5e56768) - mezz
    
*   [Fix #2817 Expose more RecipeTransfer utils in IRecipeTransferHandlerHelper](https://github.com/mezz/JustEnoughItems/commit/13235737ae7d8e11308936b80f50f58ffdc3ff1f) - mezz
    
*   [Close #2795 Add API to get a RecipeType from a ResourceLocation](https://github.com/mezz/JustEnoughItems/commit/b787b86ecbccaa2b2e65ec012b8b463592224c45) - mezz
    
*   [Fix #2976 use FluidVariantRendering for Fabric fluids with compound tags](https://github.com/mezz/JustEnoughItems/commit/f60ba011e84fb87b17295eefd2a48521c9503881) - mezz
    
*   [Fix #2195 Anvil text "Enchantment Cost" has incorrect shadows](https://github.com/mezz/JustEnoughItems/commit/60e90315a4d326f079334aea1aab964268614e0c) - mezz
    
*   [Close #1579 Allow using Screen with IGlobalGuiHandler](https://github.com/mezz/JustEnoughItems/commit/a3ffb965a60ed28ad344a253e90588af89efd917) - mezz
    
*   [Close #391 Add shield decoration recipes](https://github.com/mezz/JustEnoughItems/commit/292c104ac21da757862ae8111ccd92ebd4f641bf) - mezz
    
*   [Make the `Show Recipes` tooltip optional in the API (#2972)](https://github.com/mezz/JustEnoughItems/commit/d28d213b0bc9c06aeade519019c57c577c1b337a) - Relentless
    
*   [Allow recipe transfer errors to set button color highlight (#2971)](https://github.com/mezz/JustEnoughItems/commit/c56c409b138645af2ffa814a99b345c930036e67) - Technici4n
    
*   [Fix #2959 Update to Fabric API 0.60](https://github.com/mezz/JustEnoughItems/commit/efbabfdba7af8454f56a30ea2440f54f9930c92c) - mezz
    
*   [Close #2951 Update recipe transfer handlers every tick](https://github.com/mezz/JustEnoughItems/commit/21bcb20ac61acda82c786bc9ff3226845e53b8ce) - mezz
    
*   [Github: increase stale action's operations per run](https://github.com/mezz/JustEnoughItems/commit/def1bfdcba3af124de6fe78fd23ed39c7f1d41a6) - mezz
    
*   [Github: do not comment when locking closed issues over 1 year old](https://github.com/mezz/JustEnoughItems/commit/639568c2aee5ea142e74ca63630c7f5867d7da59) - mezz
    
*   [Automatically lock Github issues older than 1 year old](https://github.com/mezz/JustEnoughItems/commit/225f4c9ef583d70592b7eab31f8a60c3a14d2cab) - mezz
    
*   [enable automatic marking and closing of stale issues](https://github.com/mezz/JustEnoughItems/commit/65a5f23de4fb4ff573d3e288dafbd02cb8da9ea6) - mezz
    
*   [start marking stale issues starting with the oldest](https://github.com/mezz/JustEnoughItems/commit/ebc5ed5b2e6c237e4733bdbddff4f921896a5a7a) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/49da070d0ae2318ee672422eff4566d8ae2ad2b7) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/e696d893dbc5cb9a662c94958d6d1c9757d162ef) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/2a596077deab20fdcb01c74bdd869279a92ef2c9) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/571cfac14933fcedf38c8adfdfb2af312f1c10d5) - mezz
    
*   [Add github stale workflow action in dry-run mode](https://github.com/mezz/JustEnoughItems/commit/c7ae5445cf44fc0a107b7b2b308757fa56848436) - mezz
    
*   [Update dependencies for Minecraft 1.19.2](https://github.com/mezz/JustEnoughItems/commit/c0859d6ac6b798bcc3d96338109f8ab976ea16c5) - mezz
    
*   [Improve javadocs for IIngredientAcceptor#addFluidStack](https://github.com/mezz/JustEnoughItems/commit/90b37d06031c8e113d51e747e3f532f4b9ed047b) - mezz
    
*   [Fix #2939 Crash on Forge when typing](https://github.com/mezz/JustEnoughItems/commit/4679f2e05ebabebde6b14ad445e39319aea689a7) - mezz
    
*   [Fix #2899 Cheat mode not working when connected to dedicated server](https://github.com/mezz/JustEnoughItems/commit/e6ef3fca950b59aa2c716c75dc6aac612470058e) - mezz
    
*   [Clean up unused method](https://github.com/mezz/JustEnoughItems/commit/acfa093e0bbf67d3f1faae56d24f5762c450fcfc) - mezz
    
*   [Update for Minecraft 1.19.1](https://github.com/mezz/JustEnoughItems/commit/16116299c676183dee0f63380a6a09a64d754359) - mezz
    
*   [Minor code cleanup](https://github.com/mezz/JustEnoughItems/commit/91527b7d5fae747455ed7630915c088e3fe0f602) - mezz
    
*   [Fix #2875 Fix recipe slot highlight and RecipeTransferErrorTooltip display. (#2922)](https://github.com/mezz/JustEnoughItems/commit/ec010fbd494f5b7c4a0514f6bdf2f20dc3464958) - vfyjxf
    
*   [Update Forge version used in the dev environment](https://github.com/mezz/JustEnoughItems/commit/00ee4988895f4eb2c177b22a252abe7e2e6bcd8e) - mezz
    
*   [Add convenience functions to reduce the need for using VanillaTypes.ITEM_STACK](https://github.com/mezz/JustEnoughItems/commit/66a18ccaccf226c3a21863f4f96b30c564e9a9bb) - mezz
    
*   [Add Kazakh translation (#2912)](https://github.com/mezz/JustEnoughItems/commit/4f0c07ea66be0c385ed41d363e78fff19c7236ef) - AlibekAytjan
    
*   [Update bg_bg.json (#2910)](https://github.com/mezz/JustEnoughItems/commit/3d3f29bc99d05e8fe6a8b988f57a0d5cc54c38a5) - Deyan Nikolov
    
*   [Create convenience function for adding a fluid ingredient to IIngredientAcceptor](https://github.com/mezz/JustEnoughItems/commit/dfbe89487d70eaa2364199916ab9afed8815f586) - mezz
    
*   [Close #2901 Make Crafting Grid Helper return the slots it creates](https://github.com/mezz/JustEnoughItems/commit/0645b00cf13fa60c3a89e905c02fa146c543359f) - mezz
    
*   [Fix #2898 Expose "show uses/recipes" key bindings in the API](https://github.com/mezz/JustEnoughItems/commit/c7f4c07d864ab21e2bc4c2ed23f87942506b8dbf) - mezz
    
*   [Fix #2897 Hovering over recipe tabs can ignore key inputs](https://github.com/mezz/JustEnoughItems/commit/96f611776ba34ad0166c1589d3cd05a9da32e171) - mezz
    
*   [Fix #2873 Use the correct mouseReleased call to finish a click on Fabric](https://github.com/mezz/JustEnoughItems/commit/1e13ab99ba7aaf2452377e8f748bcfc1abcd3689) - mezz
    
*   [Fix #2871 Fix text field synchronization from mods via the API](https://github.com/mezz/JustEnoughItems/commit/30fb27f2dfa48647d176e76f830925b097c0214b) - mezz
    
*   [Fix #2873 Ghost ingredient handling on Fabric](https://github.com/mezz/JustEnoughItems/commit/b6813e7b3a70606841b8fdb6a80252a92e5c8fac) - mezz
    
*   [Update Polish translation (#2874)](https://github.com/mezz/JustEnoughItems/commit/dde86189738a28735072ccfa3ee8e425b01c94df) - Greg-21
    
*   [Use an accesswidener to access fields with Fabric](https://github.com/mezz/JustEnoughItems/commit/de821ed60b845e5d824f2f8a9edf705f7846b50b) - mezz
    
*   [update parchment mappings](https://github.com/mezz/JustEnoughItems/commit/fdf39f73debb75a0ca37bcc3c7c0efca4394f8f2) - mezz
    
*   [Fix #2839 Improve widget focusing behavior with the search box](https://github.com/mezz/JustEnoughItems/commit/89fa05dc4ec1559c8692bfa169999baa96efaab6) - mezz
    
*   [Fix #2890 Protect against broken recipe transfer handlers crashing](https://github.com/mezz/JustEnoughItems/commit/4f991ab7b552256c01009993454f4f9c76a46865) - mezz
    
*   [Clean up unused imports](https://github.com/mezz/JustEnoughItems/commit/20bbf2808923966169b577deba8aaf5097603b6a) - mezz
    
*   [Update to support the breaking changes in forge (#2886)](https://github.com/mezz/JustEnoughItems/commit/9669b94bf94410ba0d621b43bd709e3f2cbd0de9) - Sara Freimer
    
*   [clean up configs slightly](https://github.com/mezz/JustEnoughItems/commit/e5a34c9b6921a24e09603038f190a3df141facb1) - mezz
    
*   [Cleanup](https://github.com/mezz/JustEnoughItems/commit/9dc14b1ceeb086a5332f73584845e5650325ac78) - mezz
    
*   [update parchment version](https://github.com/mezz/JustEnoughItems/commit/4dd6e22d9fabb1529d463ce0edb59e4c2b299c5d) - mezz
    
*   [Update dev forge and mappings](https://github.com/mezz/JustEnoughItems/commit/32afb34a1a11fee0d7f656b4b846fb43c3a8e191) - mezz
    
*   [set gradle to no longer use configure-on-demand, it breaks ForgeGradle](https://github.com/mezz/JustEnoughItems/commit/73ed0fef50bc1209548adb740f350ae991764fe2) - mezz
    
*   [Remove old createFocusLink method](https://github.com/mezz/JustEnoughItems/commit/071c078a733c1d08d45646188ba9506eab910174) - mezz
    
*   [Fix improper property use causing invalid dependency POM (#2854)](https://github.com/mezz/JustEnoughItems/commit/ad7fd38086d3e3c970813edb577a4a9d7b3a1686) - sciwhiz12
    *   The archivesName property of BasePluginExtension is a Property<String>.
    *   The default implementation of toString() for a Property is to print out
    *   their name and owning object, and not the toString() of their contents.
    *   This meant that passing archivesName to Node#appendNode as a value,
    *   which calls toString() on it to make it into a String, results in e.g.
    *   `extension 'base' property 'archivesName'` instead of the expected
    *   value of e.g. `jei-1.19-common-api`.
    *   The simple fix is to call Property#get() on archivesName to get its
    *   actual value and pass that on as the node value.
*   [Fix #2851 Protect against crash from broken fluids](https://github.com/mezz/JustEnoughItems/commit/edc5e7c22e0aac91a4424571525b6df85abafa53) - mezz
    
*   [Update to changes in Forge's fluid API (#2852)](https://github.com/mezz/JustEnoughItems/commit/cea569ee6a20589f9b7b0ccd037d31f5e8ddbb11) - Sara Freimer
    
*   [version 11](https://github.com/mezz/JustEnoughItems/commit/b7158ba5b7bc16f9e5f1efbe927fe8c88515cac8) - mezz
    
*   [Remove deprecated methods](https://github.com/mezz/JustEnoughItems/commit/8a65df7e56a1c00d4dd4153260902e4f26a7401a) - mezz
    
*   [Update for Minecraft 1.19](https://github.com/mezz/JustEnoughItems/commit/5b2e71f547cd13cd48de4d999c4f56bddfc421bb) - mezz
    
*   [JEI 10. Add Fabric support. Refactor into a multi-project (#2842)](https://github.com/mezz/JustEnoughItems/commit/530ef6c8d604370bef850f3656a28beab56cbfba) - mezz
    
*   [Update sv_se.json (#2836)](https://github.com/mezz/JustEnoughItems/commit/d46164fce29506569f7e3debdbab099439e042d6) - A. Regnander
    
*   [Updated Russian Translation (#2799)](https://github.com/mezz/JustEnoughItems/commit/d12ab9560bbe57681de1de20bca876bc9556f10e) - DrHesperus
    
*   [Fix #2812 Add a keybind for the key to exit a recipe screen to the inventory](https://github.com/mezz/JustEnoughItems/commit/3d1852a1f713fb79260a6670a0551437f8a536db) - mezz
    
*   [Allow focuses to match multiple ingredients in a recipe slot](https://github.com/mezz/JustEnoughItems/commit/efd8ef5bbf45e0c73c5d6285163fe5dc6f827323) - mezz
    
*   [Fix #2790 Recipes are listed twice when checking the uses of an ingredient that is also a catalyst](https://github.com/mezz/JustEnoughItems/commit/d13676b136f61716dbe8abfa43589a9ef2d1baa3) - mezz
    
*   [deprecate some api methods that depend on forge-specific code](https://github.com/mezz/JustEnoughItems/commit/e0fa409e74153d687d901fd3dba40957a02099cd) - mezz
    
*   [Create IIngredientTypeWithSubtypes for generic handling of subtypes in ingredients](https://github.com/mezz/JustEnoughItems/commit/01fd9c02bb0b2348d988452ca5edd8ccbba704cb) - mezz
    
*   [Move config screen into platform service](https://github.com/mezz/JustEnoughItems/commit/fadb4d9741884d1dec0201d541f04fbe4f764f6f) - mezz
    
*   [move forge configs into forge folder](https://github.com/mezz/JustEnoughItems/commit/981e463c97f9a3c89bed3fb6991bc1c76b334663) - mezz
    
*   [Add platform server helper](https://github.com/mezz/JustEnoughItems/commit/f4ebadd513a8ee7d628c4b3e56de3bb2293e6197) - mezz
    
*   [Use service to get particle icons](https://github.com/mezz/JustEnoughItems/commit/c97b9d3db9ef1e05195804a9caa618d9bdccefdc) - mezz
    
*   [Organize packet data into data and context](https://github.com/mezz/JustEnoughItems/commit/2b04f090497fb4cc3a54c0db4c5c9fc200a4a7b0) - mezz
    
*   [Update es_es.json (#2782)](https://github.com/mezz/JustEnoughItems/commit/0263f7090ff197d026c404cea98531b81bf8b301) - zeedif
    
*   [Fix #2783 Attempted to load class net/minecraft/client/player/LocalPlayer for invalid dist DEDICATED_SERVER](https://github.com/mezz/JustEnoughItems/commit/db613c8519cdbcbb4b0d66857b0d5dae3998c7ff) - mezz
    
*   [Clean up ErrorUtil](https://github.com/mezz/JustEnoughItems/commit/61758a12034f85b4829bb00b45d0b3b63fac123b) - mezz
    
*   [Move registry access to a service loader](https://github.com/mezz/JustEnoughItems/commit/35c1706cfe8a4fcc0f1d68f691917b1e268c984f) - mezz
    
*   [Update it_it.json (#2785)](https://github.com/mezz/JustEnoughItems/commit/3a008930cb32dc33931468be00a1e4003d1e464d) - Andrea Costa
    
*   [Protect against mod crashes when checking for enchantable items](https://github.com/mezz/JustEnoughItems/commit/ac26e8c7bd5f4727e84883a85026bd66a0b2fbf7) - mezz
    
*   [Add access to IIngredientManager from recipe catalyst registration](https://github.com/mezz/JustEnoughItems/commit/808372d990fb311eb83d89d27d111d6fdce6d92d) - mezz
    
*   [organize some network code into subprojects](https://github.com/mezz/JustEnoughItems/commit/b709cc36179fc61ea627f995335d24b0bac01216) - mezz
    
*   [Refactor server connection logic into its own class](https://github.com/mezz/JustEnoughItems/commit/98abba6b2e2b75f716978305268555e533b5402d) - mezz
    
*   [Organize some config files into subprojects](https://github.com/mezz/JustEnoughItems/commit/2c5229fca155e5655e55e4d81ed3c1e5d594d082) - mezz
    
*   [Move Translator to common.util](https://github.com/mezz/JustEnoughItems/commit/17927c0a20902319492336642484239284bc71ac) - mezz
    
*   [Include all test results in Jenkins](https://github.com/mezz/JustEnoughItems/commit/880be88737c4be9d5d73c9cf5cd7e96155307124) - mezz
    
*   [Clean up ReflectionUtil](https://github.com/mezz/JustEnoughItems/commit/5e692c7ca7168999c4a7a6105b5653917e3ad4dd) - mezz
    
*   [Move more code into the Core and Common subprojects](https://github.com/mezz/JustEnoughItems/commit/2112d63b268bce244ab6e05c9b1fc8f23dc484d8) - mezz
    
*   [Clean up ColorNamer code](https://github.com/mezz/JustEnoughItems/commit/c784e6a20312ef31e081210a3e185e2a30c13046) - mezz
    
*   [Move search logic into core subproject](https://github.com/mezz/JustEnoughItems/commit/847fb20ab1590b7e3905c49b5fe4fb7bdf1e110e) - mezz
    
*   [Create "Core" subproject for code that does not depend on Minecraft](https://github.com/mezz/JustEnoughItems/commit/d005fda4e2ea1f0a446634307654b907913d7a26) - mezz
    
*   [Fix #2756 Fuel recipes with high values can overflow the recipe background](https://github.com/mezz/JustEnoughItems/commit/8edf068e17646debaf3f095d32a736b172448614) - mezz
    
*   [Close #2771 Allow IRecipeTransferInfo to return a transfer error if it can't handle the recipe](https://github.com/mezz/JustEnoughItems/commit/8b62850a0056c2fbc2f481eb0993f3de259b7ac7) - mezz
    
*   [Improve startup code to be more resilient to modded bugs](https://github.com/mezz/JustEnoughItems/commit/5242ae9ffbdb09ebf46597f750839bba5288c6e4) - mezz
    
*   [Fix bookmark config creation](https://github.com/mezz/JustEnoughItems/commit/bfcd7ff664a66f8ceac0d9141c5ef0ecfa549b13) - mezz
    
*   [Exclude duplicate files from output jars](https://github.com/mezz/JustEnoughItems/commit/be3fad8df73eab0b98a98f51f09b45b779520a5e) - mezz
    
*   [Isolate changelog plugin in a subproject](https://github.com/mezz/JustEnoughItems/commit/daed974fd0cf47156a508af008ad4b53bd0b853d) - mezz
    
*   [Constrain gitchangelog asm version](https://github.com/mezz/JustEnoughItems/commit/a314f03808e4532e30901c418a294147bc172f0a) - mezz
    
*   [fix asm coords to org.ow2.asm:asm](https://github.com/mezz/JustEnoughItems/commit/0bc8a0b48dee4b333d62c1ae6344cf7c6984f27e) - mezz
    
*   [add comment for asm constraint](https://github.com/mezz/JustEnoughItems/commit/2456758d6acf05493bfb2432daa00d67d0e08560) - mezz
    
*   [Try constraining asm to the right version](https://github.com/mezz/JustEnoughItems/commit/4b922335cd9eced04341fba7be5add4a8c3e9477) - mezz
    
*   [Update dev Forge version](https://github.com/mezz/JustEnoughItems/commit/3e7e106e1f3974ed311bdde7670ccd60d312eee6) - mezz
    
*   [Organize internal code into a multiproject (#2772)](https://github.com/mezz/JustEnoughItems/commit/5aa1ae16fe920d7c4159eb3448d5ec8bb8891ec8) - mezz
    
*   [Update forge maven artifact id](https://github.com/mezz/JustEnoughItems/commit/04f24d67c0b7a23c517c55be2d56aa8a2758e5e9) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/5633ee657519b14567cd30ba53f73e97194a0648) - mezz
    
*   [update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/95ee3bff746fcb5ff18f8275564d1a1b46947add) - mezz
    
*   [update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/b2d3d6a756847913b1ff48d38f0c459a0b26d0c7) - mezz
    
*   [Make the give notification message work for any player that has a server](https://github.com/mezz/JustEnoughItems/commit/9db2be0b4ed1dead1c2ea167bc07202b4ffc4dab) - mezz
    
*   [fix changelog path](https://github.com/mezz/JustEnoughItems/commit/62b2f40543ee48d3006d043b4f77522b1fa1b7e1) - mezz
    
*   [fix project dependency](https://github.com/mezz/JustEnoughItems/commit/f4a08d34177c3b0e3ed5a7bf6f877244e7f1611a) - mezz
    
*   [Ensure ProcessResources updates on every new version](https://github.com/mezz/JustEnoughItems/commit/2bfe7a815be61756a3ecf6f275f2afbb777ad1ba) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/b0a994494433bd42b065578b8d4fa76608734190) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/cde4010b43e77fbc72b497d3426dd2044ec271c4) - mezz
    
*   [Organize project code](https://github.com/mezz/JustEnoughItems/commit/dd289c912d8f52da59c155850baa4c1e0aa5e9ce) - mezz
    
*   [Fix gradle project properties](https://github.com/mezz/JustEnoughItems/commit/56b5da3a8d94f2e02b7489d05bd878920b4ff101) - mezz
    
*   [Use net.minecraft.MethodsReturnNonnullByDefault](https://github.com/mezz/JustEnoughItems/commit/ebd3cbcbcce0000851fdb797c542e25114bcda69) - mezz
    
*   [Update Forge in dev environment](https://github.com/mezz/JustEnoughItems/commit/9025bb694be7c5d5e70f4e128989b1d1d18a4df4) - mezz
    
*   [Fix #2751 Crash when MC window becomes too narrow](https://github.com/mezz/JustEnoughItems/commit/84142187699e30c29295a7aa86dd44b96271eefe) - mezz
    
*   [Update Jenkinsfile to always run tests](https://github.com/mezz/JustEnoughItems/commit/543ad9baeb7c1316246b44cee32c1b903e4a7304) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/5073f9659f206f45a1c30b10eb0bb56646c4f7fa) - mezz
    
*   [Update Jenkinsfile for publishing to CurseForge](https://github.com/mezz/JustEnoughItems/commit/69af776afc6f9e53fb17008215a85886500aa8eb) - mezz
    
*   [Migrate build.gradle to build.gradle.kts (#2761)](https://github.com/mezz/JustEnoughItems/commit/ac9cbc0f58c86c85cc14370db4156922e861c982) - mezz
    *   Co-authored-by: Jared <jaredlll08@gmail.com>
*   [Fix #2754 Crash when GUI extends offscreen](https://github.com/mezz/JustEnoughItems/commit/bb7eec72a41a0c932f71a4f591b6d8977f7d031b) - mezz
    
*   [Fix #2752 Crash on gui slots that are to the left or above the gui](https://github.com/mezz/JustEnoughItems/commit/98e5ead592a85f084a9e840fd5e4125e3c8df4cc) - mezz
    
*   [Display hidden ingredients in a recipe if there are no other ingredients to show](https://github.com/mezz/JustEnoughItems/commit/b8903a1777f1dc939f2a0476f412a142ef7d6f70) - mezz
    
*   [Allow focus linking with invisible ingredients](https://github.com/mezz/JustEnoughItems/commit/ae69541a7cd44362f77c30c88e7d2c58fc5c1d2b) - mezz
    
*   [Fix debug recipes](https://github.com/mezz/JustEnoughItems/commit/61d1ebe55676727c0572eaac14367943a18650c3) - mezz
    
*   [update JUnit](https://github.com/mezz/JustEnoughItems/commit/1c12ab5031333d6aeb0577869b4fc235c83fb922) - mezz
    
*   [Clean up build script](https://github.com/mezz/JustEnoughItems/commit/02b3939453a8e7511fd4dd95034ef19bf05d05a1) - mezz
    
*   [Run Spotless cleanup](https://github.com/mezz/JustEnoughItems/commit/d281b8446a7691e579e73998bf75cb9e2c70b849) - mezz
    
*   [Fix bookmark config directory creation](https://github.com/mezz/JustEnoughItems/commit/1a1db97ecc33d282477e14536ffdf49baae23b13) - mezz
    
*   [Fix #2744 Workaround for Optifine bug](https://github.com/mezz/JustEnoughItems/commit/dcfab2e4f61c1834971f4a34718f7f426199aded) - mezz
    
*   [Fix #2744 Workaround for Optifine bug](https://github.com/mezz/JustEnoughItems/commit/d925b2ef8acf8db3226fcc6369236f90c911b1b0) - mezz
    
*   [Clean up some tags code](https://github.com/mezz/JustEnoughItems/commit/08ef7e1d958219eab93c714fb735fc29a56036db) - mezz
    
*   [suppress more deprecation warnings](https://github.com/mezz/JustEnoughItems/commit/252b96d063a3bea16ab5307a8f38182dafc4f475) - mezz
    
*   [Use Parchment mappings in dev environment](https://github.com/mezz/JustEnoughItems/commit/2f4ecf9de17ab907084fc1b269e8e57e7ba5637d) - mezz
    
*   [Make potion effects render in compact mode when JEI is open](https://github.com/mezz/JustEnoughItems/commit/982a1459a66271bf29776eb3b0e51c7fda471bec) - mezz
    
*   [add more client run configurations in developer environment](https://github.com/mezz/JustEnoughItems/commit/95e2045c572bb8335899a57ec61a5b37cae03c8b) - mezz
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/f2c87e1d88e42205b5da342f513dc78a7f15fa99) - mezz
    
*   [Link anvil recipe input/output focuses](https://github.com/mezz/JustEnoughItems/commit/09f7e93b47979253fa419b1d1d6024182d3ebaa1) - mezz
    
*   [Code cleanup](https://github.com/mezz/JustEnoughItems/commit/fcaba7451f0f7663ad850c1f14a4c142bba6999e) - mezz
    
*   [Fix logic when there are broken recipe layouts](https://github.com/mezz/JustEnoughItems/commit/490e92d46f9d20c6024f38efd2bf52e10691cf31) - mezz
    
*   [Minor code cleanup](https://github.com/mezz/JustEnoughItems/commit/b06f757bf00a965a2c001e59d06f628d3f6d6502) - mezz
    
*   [Fix type of IRecipeLookup#limitFocus](https://github.com/mezz/JustEnoughItems/commit/e7e6055d8d543206ad0807b83f14a30c58e7c093) - mezz
    
*   [Refactor: Replace IRecipeCategory.getUid() ResourceLocation with RecipeType](https://github.com/mezz/JustEnoughItems/commit/4b0270bbced63113067b0b091fb1e3b3e394dbf9) - mezz
    
*   [Mark ISlowRenderItem as deprecated](https://github.com/mezz/JustEnoughItems/commit/4c9a54e9ef57abb0ab84f9b42bd8afcbbfce08ca) - mezz
    
*   [Minor cleanup](https://github.com/mezz/JustEnoughItems/commit/02b187a06443b569b6a2cedce690c2d918d6b0a3) - mezz
    
*   [Remove unused BookmarkOverlayToggleEvent](https://github.com/mezz/JustEnoughItems/commit/176326dbdbe305a3b65f0052eb8038b2a07007b7) - mezz
    
*   [Remove FastItemRendering, it is no longer necessary and can cause conflicts](https://github.com/mezz/JustEnoughItems/commit/a6065cbf4cc979436f9c0ac1604f76bf43f7f07a) - mezz
    
*   [Add access to IJeiHelpers from IJeiRuntime](https://github.com/mezz/JustEnoughItems/commit/0d2cecd41bfe008298303312d2d37dd9c9d44d5f) - mezz
    
*   [Remove persistent WorldConfig and untangle filter text logic](https://github.com/mezz/JustEnoughItems/commit/b949f819cc30fad3eee85841b1e60055bdb5d793) - mezz
    
*   [GUI code refactor. Add configs for ingredient list and bookmark list layouts. (#2711)](https://github.com/mezz/JustEnoughItems/commit/212f9c745d1f7cb011c23c784caac036eb14e70c) - mezz
    
*   [Fix #2733 Better handling for /reload](https://github.com/mezz/JustEnoughItems/commit/1b95efefbcb8186bac071a71cadda869e91df3e1) - mezz
    
*   [Fix #2733 JEI doesn't update after /reload](https://github.com/mezz/JustEnoughItems/commit/48374815d0a0b88930ea2f8848f47f14405ea694) - mezz
    
*   [Clarify Github Issue Templates](https://github.com/mezz/JustEnoughItems/commit/aa3a7e7e35254aaafcf0e8de946ba88b78910d7e) - mezz
    
*   [Add github issue templates](https://github.com/mezz/JustEnoughItems/commit/135768cefd4fff4f3a44fb40224a7439849c6c35) - mezz
    
*   [Update README](https://github.com/mezz/JustEnoughItems/commit/8f85dafb492a45ae01b5b90720b18d2fda5e47fd) - mezz
    
*   [Simplify code for IngredientSorterComparators#getTagForSorting](https://github.com/mezz/JustEnoughItems/commit/6899e62c8421e3fb15c462e76708bfc01d2837b9) - mezz

### jei-1.19.2-forge-11.6.0.1022.jar
### Current release 11.6.0

*   [Fix #3183 Fix #3523 Loosen restrictions on gui placement and rectangles going offscreen](https://github.com/mezz/JustEnoughItems/commit/b46bb996e2792a4e40634a26357d593875294345) - mezz
    
*   [Prevent recipe transfers from touching output slots](https://github.com/mezz/JustEnoughItems/commit/8612cb0974c69fabfe268497f927435d915118e5) - mezz
    
*   [run spotless](https://github.com/mezz/JustEnoughItems/commit/fa73465828dbade643000f5cb641d1667146c8c1) - mezz
    
*   [Update gradle, forge, and fabric versions](https://github.com/mezz/JustEnoughItems/commit/502d686aee290866399eb276037315765be186fa) - mezz
    
*   [Close #3320 Search default block tags for items with blocks in them](https://github.com/mezz/JustEnoughItems/commit/0d64e3aa4c27ce056bef113a63ff295db8694eba) - mezz
    
*   [Fix error handling when a recipe manager plugin crashes](https://github.com/mezz/JustEnoughItems/commit/c24d85b39a8704f4221e306be064e05214bdfcfe) - mezz
    
*   [turn spaces to tabs consistently with spotless rules](https://github.com/mezz/JustEnoughItems/commit/119aba128828f02b77c7bac900c4d1b0ec7e6848) - mezz
    
*   [update spotless plugin](https://github.com/mezz/JustEnoughItems/commit/3bd5d55df3d0bdcfa09cd639133bb193ec5eafa3) - mezz
    
*   [increase ram given to gradle](https://github.com/mezz/JustEnoughItems/commit/cd7bc9ee368e072d8d29f8e43f5ace96fdff7889) - mezz
    
*   [Fix copying recipe id so that it doesn't just copy the first one displayed](https://github.com/mezz/JustEnoughItems/commit/3b3a418fccc35f07a40625827447230f5f32a842) - mezz
    
*   [Add "Fabric-Loom-Remap" to fabric api jar manifest](https://github.com/mezz/JustEnoughItems/commit/e29a94c2d1bd9baf8984ee717a4fb8c8e49105b5) - mezz
    
*   [Add modrinth upload task](https://github.com/mezz/JustEnoughItems/commit/3d6494bdae2346db583fe7c5f424c6434794bc41) - mezz
    
*   [Close #3190 Add support for ghost ingredient dragging from bookmarks](https://github.com/mezz/JustEnoughItems/commit/d11e1491f6d4945151536edb5e37b57a3e8439aa) - mezz
    
*   [Make FileWatcherThread a daemon thread](https://github.com/mezz/JustEnoughItems/commit/f1df855db8766961f7f66fe2a146c6c02e8bbd65) - mezz
    *   This prevents it from keeping the JVM from exiting during data generation.
*   [Remove fabric depends statement for anything other than the core project](https://github.com/mezz/JustEnoughItems/commit/b69b1cd8bb1729bc37e6ae57e4af88a689fd6200) - mezz
    
*   [Fix #2991 Fix starting on server thread in Fabric after reload](https://github.com/mezz/JustEnoughItems/commit/caa72a5471117a83c8cd25e00722b317f9a78980) - mezz
    
*   [Update Fabric version in dev environment](https://github.com/mezz/JustEnoughItems/commit/cbdb368862e9c3c6a3320feba4d84cf567689f21) - mezz
    
*   [Improve config file watcher, avoid creating excess threads on world reload](https://github.com/mezz/JustEnoughItems/commit/33a6b1fadf01cc6f77a44c5c086a73a6b9e03bda) - mezz
    
*   [Move input debug logs behind a new DebugInputs config flag](https://github.com/mezz/JustEnoughItems/commit/a18dcf94aa7b9b849e4f23e6a4211bee7d14622f) - mezz
    
*   [Fix ghost ingredient dragging](https://github.com/mezz/JustEnoughItems/commit/372f9e0bbcd0a9d921520af97aeaff0445d6a031) - mezz
    
*   [Add a 1.19 config for the position of new bookmarks (#3113)](https://github.com/mezz/JustEnoughItems/commit/fffffc610db8e75a5bd50eab851c97a1b40050bd) - Waiting Idly
    
*   [Fix #3079 Write the blacklist to file if the file does not exist yet](https://github.com/mezz/JustEnoughItems/commit/15bbaa4f8db1d77cf7ddd99178ffcd22dc20bd89) - mezz
    
*   [Simplify platform config helper code](https://github.com/mezz/JustEnoughItems/commit/e6ea3b4ef72737f927939682ae9b5c90c5d980f5) - mezz
    
*   [Close #3077, Add link to open the JEI config folder when you click the settings button](https://github.com/mezz/JustEnoughItems/commit/e7570624748f7c521a9efcc8e60b7884f63ad984) - mezz
    
*   [Set a maximum Minecraft version of 1.19.2](https://github.com/mezz/JustEnoughItems/commit/71894a977f62742fcb505c83fd2e29dab46e3791) - mezz
    *   Minecraft 1.19.3 has breaking changes and is not compatible with this version of JEI.
*   [Update zh_cn.json (#3105)](https://github.com/mezz/JustEnoughItems/commit/2f56b84b5d2393ab7c410b0b25ce9941382a82e7) - ArchiDreamZ
    
*   [Fix missing period and space in kk_kz.json (#3101)](https://github.com/mezz/JustEnoughItems/commit/2106f3f3437ce339fac9555749fb3f7723077b98) - AlibekAytjan
    
*   [remove jar archive in Jenkins (it is already available in maven and curseforge)](https://github.com/mezz/JustEnoughItems/commit/9f1a77b1c5b695f8203163633fd169aff0dd7844) - mezz
    
*   [use tools.jdk for Jenkinsfile instead of JAVA_HOME env var](https://github.com/mezz/JustEnoughItems/commit/74fcc826e8e702597365261601e18ddbe2c9eecd) - mezz
    
*   [Fix #3093 Create a runtime registration step before onRuntimeAvailable](https://github.com/mezz/JustEnoughItems/commit/cfb7c8d3767f43a7ab18b9236f794abfecc70b33) - mezz
    
*   [Hide ingredients that have the tag "c:hidden_from_recipe_viewers"](https://github.com/mezz/JustEnoughItems/commit/1a08a45e887aa8224b2cbe1a24645d7b443a6676) - mezz
    
*   [chore: Add Gui and Library maven publish to Jenkinsfile (#3066)](https://github.com/mezz/JustEnoughItems/commit/01f613671cb4635a0a5c23b85c40f1d52d0f3d00) - Kli Kli
    
*   [fix sources jar configuration](https://github.com/mezz/JustEnoughItems/commit/28ca460fafde8150988b8c70bf3bacd4397e7d36) - mezz
    
*   [fix publishing of sources jars for Gui and Library](https://github.com/mezz/JustEnoughItems/commit/ca717007b3ecd35e6abf5c6b08aa82d3a4d4134c) - mezz
    
*   [publish Library and Gui jars to maven](https://github.com/mezz/JustEnoughItems/commit/66de59b65f548c2ae2a872f6a0a698d0bd41fe4b) - mezz
    
*   [Fix publishing the Core artifact](https://github.com/mezz/JustEnoughItems/commit/38fa7cbebda074de30cd19d85069d75457206695) - mezz
    
*   [Code cleanup](https://github.com/mezz/JustEnoughItems/commit/c83958436399abdc3581b16d0d73df56ea555073) - mezz
    
*   [Split up the GUI code and add API methods so that the GUI mostly depends on the API (#3058)](https://github.com/mezz/JustEnoughItems/commit/6476d975359e1c2ff517d94b58ff2dcc7bf780ae) - James Mitchell
    
*   [update pt_br (#3040)](https://github.com/mezz/JustEnoughItems/commit/8f79ba8f1b63799db85415fe82147eef6cd25908) - FITFC
    
*   [log gui change on debug mode only (#3052)](https://github.com/mezz/JustEnoughItems/commit/042cbc9463d10651cf6e6cd4bf1cc17a0ddd5f16) - Jonathan Colmenares
    
*   [Mark 1.19.2 builds as betas](https://github.com/mezz/JustEnoughItems/commit/bd7a56faccd62e5dfc10e22c8855a338f37a20c5) - mezz
    
*   [Fix hiding items from recipes via the API](https://github.com/mezz/JustEnoughItems/commit/b7f3e66e109fb467337aa78e56a99eadbfff0237) - mezz
    
*   [Reduce memory used by an adversarial PacketRecipeTransfer](https://github.com/mezz/JustEnoughItems/commit/f128c3b3dbfcbbbfe965f78ff85f514f66c4fa19) - mezz
    
*   [Split drag handling from input handling, add debug mode logs for input handling](https://github.com/mezz/JustEnoughItems/commit/9992840db5ad4a6c52f8e64bf4d179042c8e42cd) - mezz
    
*   [#3018 Fix crashing VanillaPlugin on invalid brewing recipes](https://github.com/mezz/JustEnoughItems/commit/1c2dd1a9402607ac1a2861862e5a723924aa13fe) - mezz
    
*   [fix internal javadoc](https://github.com/mezz/JustEnoughItems/commit/e8312ddd16a0e1ce1b0f008af2494f53dea0962d) - mezz
    
*   [#3022 Only delete items on left-click](https://github.com/mezz/JustEnoughItems/commit/5252f70c55bcef8bdf474013eacb2625375ec740) - mezz
    
*   [#3022 Fix picking up multiple items with the mouse in cheat mode](https://github.com/mezz/JustEnoughItems/commit/1f93f82bfc6bac8b3a90c06c1a4f26c53ea40b6b) - mezz
    
*   [Ensure packets are handled on the correct thread](https://github.com/mezz/JustEnoughItems/commit/f758d0d4c9b0568091253dfc7fbb4b0e2ec55dff) - mezz
    
*   [add IJeiHelpers#getRecipeType to help addon mods](https://github.com/mezz/JustEnoughItems/commit/38096675e85d6ebc61109da3b21b24c6bf4f5bbc) - mezz
    
*   [Fix #2993 Reduce recipe validation errors to debug logs](https://github.com/mezz/JustEnoughItems/commit/9a8f8dd61a6fdd2875d7d685dd61f9f3e1e198b2) - mezz
    
*   [Fix #3014 Saving edit-mode changes to file fails](https://github.com/mezz/JustEnoughItems/commit/97bfb62ebbdbb092f62f75b4970998899a85a09e) - mezz
    
*   [fix ConfigSerializer sorting for config categories](https://github.com/mezz/JustEnoughItems/commit/d881e68ebec0d4dca6b22b17999a628e1d267de2) - mezz
    
*   [Fix #3009 returning negative X/Y values from getGuiExtraAreas() breaks filter text selection](https://github.com/mezz/JustEnoughItems/commit/0364eed6b0823a9eb2b9d695336a287a695a8cb7) - mezz
    
*   [Improve performance of checking fuels on Fabric (#2997)](https://github.com/mezz/JustEnoughItems/commit/cab76d8154e70206bb7441d5ec6ea2cc497eed57) - Technici4n
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/a0410148a9984b38c951a83ac3ec356ae9bea2fb) - mezz
    
*   [Minor cleanup in config code](https://github.com/mezz/JustEnoughItems/commit/79c34fcc1d16699389d5015d284bc16e8cbe3da1) - mezz
    
*   [Prefer more abundant items first for recipe transfer (#2987)](https://github.com/mezz/JustEnoughItems/commit/56f7b86fc5fc4b43b640b09892e6b0ccfef0500b) - DBotThePony
    
*   [Clean up unused imports](https://github.com/mezz/JustEnoughItems/commit/2e4d4f570edfc6056cbd1ebae1efbae3e24ff7be) - mezz
    
*   [Fix #2968 Add Fabric support for Potion recipes](https://github.com/mezz/JustEnoughItems/commit/730f667a4107b2b33a9c10e43e3870bde7a11c3b) - mezz
    
*   [Close #2963 Add catalogueImageIcon](https://github.com/mezz/JustEnoughItems/commit/5662c0bf93c16829c6838d3ef5bfbb7ff951cdd1) - mezz
    
*   [Fix #2978 fix server-side error logs from platform handler when deleting items](https://github.com/mezz/JustEnoughItems/commit/a3dec98206575147cc45b01adc585ee8f5e56768) - mezz
    
*   [Fix #2817 Expose more RecipeTransfer utils in IRecipeTransferHandlerHelper](https://github.com/mezz/JustEnoughItems/commit/13235737ae7d8e11308936b80f50f58ffdc3ff1f) - mezz
    
*   [Close #2795 Add API to get a RecipeType from a ResourceLocation](https://github.com/mezz/JustEnoughItems/commit/b787b86ecbccaa2b2e65ec012b8b463592224c45) - mezz
    
*   [Fix #2976 use FluidVariantRendering for Fabric fluids with compound tags](https://github.com/mezz/JustEnoughItems/commit/f60ba011e84fb87b17295eefd2a48521c9503881) - mezz
    
*   [Fix #2195 Anvil text "Enchantment Cost" has incorrect shadows](https://github.com/mezz/JustEnoughItems/commit/60e90315a4d326f079334aea1aab964268614e0c) - mezz
    
*   [Close #1579 Allow using Screen with IGlobalGuiHandler](https://github.com/mezz/JustEnoughItems/commit/a3ffb965a60ed28ad344a253e90588af89efd917) - mezz
    
*   [Close #391 Add shield decoration recipes](https://github.com/mezz/JustEnoughItems/commit/292c104ac21da757862ae8111ccd92ebd4f641bf) - mezz
    
*   [Make the `Show Recipes` tooltip optional in the API (#2972)](https://github.com/mezz/JustEnoughItems/commit/d28d213b0bc9c06aeade519019c57c577c1b337a) - Relentless
    
*   [Allow recipe transfer errors to set button color highlight (#2971)](https://github.com/mezz/JustEnoughItems/commit/c56c409b138645af2ffa814a99b345c930036e67) - Technici4n
    
*   [Fix #2959 Update to Fabric API 0.60](https://github.com/mezz/JustEnoughItems/commit/efbabfdba7af8454f56a30ea2440f54f9930c92c) - mezz
    
*   [Close #2951 Update recipe transfer handlers every tick](https://github.com/mezz/JustEnoughItems/commit/21bcb20ac61acda82c786bc9ff3226845e53b8ce) - mezz
    
*   [Github: increase stale action's operations per run](https://github.com/mezz/JustEnoughItems/commit/def1bfdcba3af124de6fe78fd23ed39c7f1d41a6) - mezz
    
*   [Github: do not comment when locking closed issues over 1 year old](https://github.com/mezz/JustEnoughItems/commit/639568c2aee5ea142e74ca63630c7f5867d7da59) - mezz
    
*   [Automatically lock Github issues older than 1 year old](https://github.com/mezz/JustEnoughItems/commit/225f4c9ef583d70592b7eab31f8a60c3a14d2cab) - mezz
    
*   [enable automatic marking and closing of stale issues](https://github.com/mezz/JustEnoughItems/commit/65a5f23de4fb4ff573d3e288dafbd02cb8da9ea6) - mezz
    
*   [start marking stale issues starting with the oldest](https://github.com/mezz/JustEnoughItems/commit/ebc5ed5b2e6c237e4733bdbddff4f921896a5a7a) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/49da070d0ae2318ee672422eff4566d8ae2ad2b7) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/e696d893dbc5cb9a662c94958d6d1c9757d162ef) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/2a596077deab20fdcb01c74bdd869279a92ef2c9) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/571cfac14933fcedf38c8adfdfb2af312f1c10d5) - mezz
    
*   [Add github stale workflow action in dry-run mode](https://github.com/mezz/JustEnoughItems/commit/c7ae5445cf44fc0a107b7b2b308757fa56848436) - mezz
    
*   [Update dependencies for Minecraft 1.19.2](https://github.com/mezz/JustEnoughItems/commit/c0859d6ac6b798bcc3d96338109f8ab976ea16c5) - mezz
    
*   [Improve javadocs for IIngredientAcceptor#addFluidStack](https://github.com/mezz/JustEnoughItems/commit/90b37d06031c8e113d51e747e3f532f4b9ed047b) - mezz
    
*   [Fix #2939 Crash on Forge when typing](https://github.com/mezz/JustEnoughItems/commit/4679f2e05ebabebde6b14ad445e39319aea689a7) - mezz
    
*   [Fix #2899 Cheat mode not working when connected to dedicated server](https://github.com/mezz/JustEnoughItems/commit/e6ef3fca950b59aa2c716c75dc6aac612470058e) - mezz
    
*   [Clean up unused method](https://github.com/mezz/JustEnoughItems/commit/acfa093e0bbf67d3f1faae56d24f5762c450fcfc) - mezz
    
*   [Update for Minecraft 1.19.1](https://github.com/mezz/JustEnoughItems/commit/16116299c676183dee0f63380a6a09a64d754359) - mezz
    
*   [Minor code cleanup](https://github.com/mezz/JustEnoughItems/commit/91527b7d5fae747455ed7630915c088e3fe0f602) - mezz
    
*   [Fix #2875 Fix recipe slot highlight and RecipeTransferErrorTooltip display. (#2922)](https://github.com/mezz/JustEnoughItems/commit/ec010fbd494f5b7c4a0514f6bdf2f20dc3464958) - vfyjxf
    
*   [Update Forge version used in the dev environment](https://github.com/mezz/JustEnoughItems/commit/00ee4988895f4eb2c177b22a252abe7e2e6bcd8e) - mezz
    
*   [Add convenience functions to reduce the need for using VanillaTypes.ITEM_STACK](https://github.com/mezz/JustEnoughItems/commit/66a18ccaccf226c3a21863f4f96b30c564e9a9bb) - mezz
    
*   [Add Kazakh translation (#2912)](https://github.com/mezz/JustEnoughItems/commit/4f0c07ea66be0c385ed41d363e78fff19c7236ef) - AlibekAytjan
    
*   [Update bg_bg.json (#2910)](https://github.com/mezz/JustEnoughItems/commit/3d3f29bc99d05e8fe6a8b988f57a0d5cc54c38a5) - Deyan Nikolov
    
*   [Create convenience function for adding a fluid ingredient to IIngredientAcceptor](https://github.com/mezz/JustEnoughItems/commit/dfbe89487d70eaa2364199916ab9afed8815f586) - mezz
    
*   [Close #2901 Make Crafting Grid Helper return the slots it creates](https://github.com/mezz/JustEnoughItems/commit/0645b00cf13fa60c3a89e905c02fa146c543359f) - mezz
    
*   [Fix #2898 Expose "show uses/recipes" key bindings in the API](https://github.com/mezz/JustEnoughItems/commit/c7f4c07d864ab21e2bc4c2ed23f87942506b8dbf) - mezz
    
*   [Fix #2897 Hovering over recipe tabs can ignore key inputs](https://github.com/mezz/JustEnoughItems/commit/96f611776ba34ad0166c1589d3cd05a9da32e171) - mezz
    
*   [Fix #2873 Use the correct mouseReleased call to finish a click on Fabric](https://github.com/mezz/JustEnoughItems/commit/1e13ab99ba7aaf2452377e8f748bcfc1abcd3689) - mezz
    
*   [Fix #2871 Fix text field synchronization from mods via the API](https://github.com/mezz/JustEnoughItems/commit/30fb27f2dfa48647d176e76f830925b097c0214b) - mezz
    
*   [Fix #2873 Ghost ingredient handling on Fabric](https://github.com/mezz/JustEnoughItems/commit/b6813e7b3a70606841b8fdb6a80252a92e5c8fac) - mezz
    
*   [Update Polish translation (#2874)](https://github.com/mezz/JustEnoughItems/commit/dde86189738a28735072ccfa3ee8e425b01c94df) - Greg-21
    
*   [Use an accesswidener to access fields with Fabric](https://github.com/mezz/JustEnoughItems/commit/de821ed60b845e5d824f2f8a9edf705f7846b50b) - mezz
    
*   [update parchment mappings](https://github.com/mezz/JustEnoughItems/commit/fdf39f73debb75a0ca37bcc3c7c0efca4394f8f2) - mezz
    
*   [Fix #2839 Improve widget focusing behavior with the search box](https://github.com/mezz/JustEnoughItems/commit/89fa05dc4ec1559c8692bfa169999baa96efaab6) - mezz
    
*   [Fix #2890 Protect against broken recipe transfer handlers crashing](https://github.com/mezz/JustEnoughItems/commit/4f991ab7b552256c01009993454f4f9c76a46865) - mezz
    
*   [Clean up unused imports](https://github.com/mezz/JustEnoughItems/commit/20bbf2808923966169b577deba8aaf5097603b6a) - mezz
    
*   [Update to support the breaking changes in forge (#2886)](https://github.com/mezz/JustEnoughItems/commit/9669b94bf94410ba0d621b43bd709e3f2cbd0de9) - Sara Freimer
    
*   [clean up configs slightly](https://github.com/mezz/JustEnoughItems/commit/e5a34c9b6921a24e09603038f190a3df141facb1) - mezz
    
*   [Cleanup](https://github.com/mezz/JustEnoughItems/commit/9dc14b1ceeb086a5332f73584845e5650325ac78) - mezz
    
*   [update parchment version](https://github.com/mezz/JustEnoughItems/commit/4dd6e22d9fabb1529d463ce0edb59e4c2b299c5d) - mezz
    
*   [Update dev forge and mappings](https://github.com/mezz/JustEnoughItems/commit/32afb34a1a11fee0d7f656b4b846fb43c3a8e191) - mezz
    
*   [set gradle to no longer use configure-on-demand, it breaks ForgeGradle](https://github.com/mezz/JustEnoughItems/commit/73ed0fef50bc1209548adb740f350ae991764fe2) - mezz
    
*   [Remove old createFocusLink method](https://github.com/mezz/JustEnoughItems/commit/071c078a733c1d08d45646188ba9506eab910174) - mezz
    
*   [Fix improper property use causing invalid dependency POM (#2854)](https://github.com/mezz/JustEnoughItems/commit/ad7fd38086d3e3c970813edb577a4a9d7b3a1686) - sciwhiz12
    *   The archivesName property of BasePluginExtension is a Property<String>.
    *   The default implementation of toString() for a Property is to print out
    *   their name and owning object, and not the toString() of their contents.
    *   This meant that passing archivesName to Node#appendNode as a value,
    *   which calls toString() on it to make it into a String, results in e.g.
    *   `extension 'base' property 'archivesName'` instead of the expected
    *   value of e.g. `jei-1.19-common-api`.
    *   The simple fix is to call Property#get() on archivesName to get its
    *   actual value and pass that on as the node value.
*   [Fix #2851 Protect against crash from broken fluids](https://github.com/mezz/JustEnoughItems/commit/edc5e7c22e0aac91a4424571525b6df85abafa53) - mezz
    
*   [Update to changes in Forge's fluid API (#2852)](https://github.com/mezz/JustEnoughItems/commit/cea569ee6a20589f9b7b0ccd037d31f5e8ddbb11) - Sara Freimer
    
*   [version 11](https://github.com/mezz/JustEnoughItems/commit/b7158ba5b7bc16f9e5f1efbe927fe8c88515cac8) - mezz
    
*   [Remove deprecated methods](https://github.com/mezz/JustEnoughItems/commit/8a65df7e56a1c00d4dd4153260902e4f26a7401a) - mezz
    
*   [Update for Minecraft 1.19](https://github.com/mezz/JustEnoughItems/commit/5b2e71f547cd13cd48de4d999c4f56bddfc421bb) - mezz
    
*   [JEI 10. Add Fabric support. Refactor into a multi-project (#2842)](https://github.com/mezz/JustEnoughItems/commit/530ef6c8d604370bef850f3656a28beab56cbfba) - mezz
    
*   [Update sv_se.json (#2836)](https://github.com/mezz/JustEnoughItems/commit/d46164fce29506569f7e3debdbab099439e042d6) - A. Regnander
    
*   [Updated Russian Translation (#2799)](https://github.com/mezz/JustEnoughItems/commit/d12ab9560bbe57681de1de20bca876bc9556f10e) - DrHesperus
    
*   [Fix #2812 Add a keybind for the key to exit a recipe screen to the inventory](https://github.com/mezz/JustEnoughItems/commit/3d1852a1f713fb79260a6670a0551437f8a536db) - mezz
    
*   [Allow focuses to match multiple ingredients in a recipe slot](https://github.com/mezz/JustEnoughItems/commit/efd8ef5bbf45e0c73c5d6285163fe5dc6f827323) - mezz
    
*   [Fix #2790 Recipes are listed twice when checking the uses of an ingredient that is also a catalyst](https://github.com/mezz/JustEnoughItems/commit/d13676b136f61716dbe8abfa43589a9ef2d1baa3) - mezz
    
*   [deprecate some api methods that depend on forge-specific code](https://github.com/mezz/JustEnoughItems/commit/e0fa409e74153d687d901fd3dba40957a02099cd) - mezz
    
*   [Create IIngredientTypeWithSubtypes for generic handling of subtypes in ingredients](https://github.com/mezz/JustEnoughItems/commit/01fd9c02bb0b2348d988452ca5edd8ccbba704cb) - mezz
    
*   [Move config screen into platform service](https://github.com/mezz/JustEnoughItems/commit/fadb4d9741884d1dec0201d541f04fbe4f764f6f) - mezz
    
*   [move forge configs into forge folder](https://github.com/mezz/JustEnoughItems/commit/981e463c97f9a3c89bed3fb6991bc1c76b334663) - mezz
    
*   [Add platform server helper](https://github.com/mezz/JustEnoughItems/commit/f4ebadd513a8ee7d628c4b3e56de3bb2293e6197) - mezz
    
*   [Use service to get particle icons](https://github.com/mezz/JustEnoughItems/commit/c97b9d3db9ef1e05195804a9caa618d9bdccefdc) - mezz
    
*   [Organize packet data into data and context](https://github.com/mezz/JustEnoughItems/commit/2b04f090497fb4cc3a54c0db4c5c9fc200a4a7b0) - mezz
    
*   [Update es_es.json (#2782)](https://github.com/mezz/JustEnoughItems/commit/0263f7090ff197d026c404cea98531b81bf8b301) - zeedif
    
*   [Fix #2783 Attempted to load class net/minecraft/client/player/LocalPlayer for invalid dist DEDICATED_SERVER](https://github.com/mezz/JustEnoughItems/commit/db613c8519cdbcbb4b0d66857b0d5dae3998c7ff) - mezz
    
*   [Clean up ErrorUtil](https://github.com/mezz/JustEnoughItems/commit/61758a12034f85b4829bb00b45d0b3b63fac123b) - mezz
    
*   [Move registry access to a service loader](https://github.com/mezz/JustEnoughItems/commit/35c1706cfe8a4fcc0f1d68f691917b1e268c984f) - mezz
    
*   [Update it_it.json (#2785)](https://github.com/mezz/JustEnoughItems/commit/3a008930cb32dc33931468be00a1e4003d1e464d) - Andrea Costa
    
*   [Protect against mod crashes when checking for enchantable items](https://github.com/mezz/JustEnoughItems/commit/ac26e8c7bd5f4727e84883a85026bd66a0b2fbf7) - mezz
    
*   [Add access to IIngredientManager from recipe catalyst registration](https://github.com/mezz/JustEnoughItems/commit/808372d990fb311eb83d89d27d111d6fdce6d92d) - mezz
    
*   [organize some network code into subprojects](https://github.com/mezz/JustEnoughItems/commit/b709cc36179fc61ea627f995335d24b0bac01216) - mezz
    
*   [Refactor server connection logic into its own class](https://github.com/mezz/JustEnoughItems/commit/98abba6b2e2b75f716978305268555e533b5402d) - mezz
    
*   [Organize some config files into subprojects](https://github.com/mezz/JustEnoughItems/commit/2c5229fca155e5655e55e4d81ed3c1e5d594d082) - mezz
    
*   [Move Translator to common.util](https://github.com/mezz/JustEnoughItems/commit/17927c0a20902319492336642484239284bc71ac) - mezz
    
*   [Include all test results in Jenkins](https://github.com/mezz/JustEnoughItems/commit/880be88737c4be9d5d73c9cf5cd7e96155307124) - mezz
    
*   [Clean up ReflectionUtil](https://github.com/mezz/JustEnoughItems/commit/5e692c7ca7168999c4a7a6105b5653917e3ad4dd) - mezz
    
*   [Move more code into the Core and Common subprojects](https://github.com/mezz/JustEnoughItems/commit/2112d63b268bce244ab6e05c9b1fc8f23dc484d8) - mezz
    
*   [Clean up ColorNamer code](https://github.com/mezz/JustEnoughItems/commit/c784e6a20312ef31e081210a3e185e2a30c13046) - mezz
    
*   [Move search logic into core subproject](https://github.com/mezz/JustEnoughItems/commit/847fb20ab1590b7e3905c49b5fe4fb7bdf1e110e) - mezz
    
*   [Create "Core" subproject for code that does not depend on Minecraft](https://github.com/mezz/JustEnoughItems/commit/d005fda4e2ea1f0a446634307654b907913d7a26) - mezz
    
*   [Fix #2756 Fuel recipes with high values can overflow the recipe background](https://github.com/mezz/JustEnoughItems/commit/8edf068e17646debaf3f095d32a736b172448614) - mezz
    
*   [Close #2771 Allow IRecipeTransferInfo to return a transfer error if it can't handle the recipe](https://github.com/mezz/JustEnoughItems/commit/8b62850a0056c2fbc2f481eb0993f3de259b7ac7) - mezz
    
*   [Improve startup code to be more resilient to modded bugs](https://github.com/mezz/JustEnoughItems/commit/5242ae9ffbdb09ebf46597f750839bba5288c6e4) - mezz
    
*   [Fix bookmark config creation](https://github.com/mezz/JustEnoughItems/commit/bfcd7ff664a66f8ceac0d9141c5ef0ecfa549b13) - mezz
    
*   [Exclude duplicate files from output jars](https://github.com/mezz/JustEnoughItems/commit/be3fad8df73eab0b98a98f51f09b45b779520a5e) - mezz
    
*   [Isolate changelog plugin in a subproject](https://github.com/mezz/JustEnoughItems/commit/daed974fd0cf47156a508af008ad4b53bd0b853d) - mezz
    
*   [Constrain gitchangelog asm version](https://github.com/mezz/JustEnoughItems/commit/a314f03808e4532e30901c418a294147bc172f0a) - mezz
    
*   [fix asm coords to org.ow2.asm:asm](https://github.com/mezz/JustEnoughItems/commit/0bc8a0b48dee4b333d62c1ae6344cf7c6984f27e) - mezz
    
*   [add comment for asm constraint](https://github.com/mezz/JustEnoughItems/commit/2456758d6acf05493bfb2432daa00d67d0e08560) - mezz
    
*   [Try constraining asm to the right version](https://github.com/mezz/JustEnoughItems/commit/4b922335cd9eced04341fba7be5add4a8c3e9477) - mezz
    
*   [Update dev Forge version](https://github.com/mezz/JustEnoughItems/commit/3e7e106e1f3974ed311bdde7670ccd60d312eee6) - mezz
    
*   [Organize internal code into a multiproject (#2772)](https://github.com/mezz/JustEnoughItems/commit/5aa1ae16fe920d7c4159eb3448d5ec8bb8891ec8) - mezz
    
*   [Update forge maven artifact id](https://github.com/mezz/JustEnoughItems/commit/04f24d67c0b7a23c517c55be2d56aa8a2758e5e9) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/5633ee657519b14567cd30ba53f73e97194a0648) - mezz
    
*   [update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/95ee3bff746fcb5ff18f8275564d1a1b46947add) - mezz
    
*   [update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/b2d3d6a756847913b1ff48d38f0c459a0b26d0c7) - mezz
    
*   [Make the give notification message work for any player that has a server](https://github.com/mezz/JustEnoughItems/commit/9db2be0b4ed1dead1c2ea167bc07202b4ffc4dab) - mezz
    
*   [fix changelog path](https://github.com/mezz/JustEnoughItems/commit/62b2f40543ee48d3006d043b4f77522b1fa1b7e1) - mezz
    
*   [fix project dependency](https://github.com/mezz/JustEnoughItems/commit/f4a08d34177c3b0e3ed5a7bf6f877244e7f1611a) - mezz
    
*   [Ensure ProcessResources updates on every new version](https://github.com/mezz/JustEnoughItems/commit/2bfe7a815be61756a3ecf6f275f2afbb777ad1ba) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/b0a994494433bd42b065578b8d4fa76608734190) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/cde4010b43e77fbc72b497d3426dd2044ec271c4) - mezz
    
*   [Organize project code](https://github.com/mezz/JustEnoughItems/commit/dd289c912d8f52da59c155850baa4c1e0aa5e9ce) - mezz
    
*   [Fix gradle project properties](https://github.com/mezz/JustEnoughItems/commit/56b5da3a8d94f2e02b7489d05bd878920b4ff101) - mezz
    
*   [Use net.minecraft.MethodsReturnNonnullByDefault](https://github.com/mezz/JustEnoughItems/commit/ebd3cbcbcce0000851fdb797c542e25114bcda69) - mezz
    
*   [Update Forge in dev environment](https://github.com/mezz/JustEnoughItems/commit/9025bb694be7c5d5e70f4e128989b1d1d18a4df4) - mezz
    
*   [Fix #2751 Crash when MC window becomes too narrow](https://github.com/mezz/JustEnoughItems/commit/84142187699e30c29295a7aa86dd44b96271eefe) - mezz
    
*   [Update Jenkinsfile to always run tests](https://github.com/mezz/JustEnoughItems/commit/543ad9baeb7c1316246b44cee32c1b903e4a7304) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/5073f9659f206f45a1c30b10eb0bb56646c4f7fa) - mezz
    
*   [Update Jenkinsfile for publishing to CurseForge](https://github.com/mezz/JustEnoughItems/commit/69af776afc6f9e53fb17008215a85886500aa8eb) - mezz
    
*   [Migrate build.gradle to build.gradle.kts (#2761)](https://github.com/mezz/JustEnoughItems/commit/ac9cbc0f58c86c85cc14370db4156922e861c982) - mezz
    *   Co-authored-by: Jared <jaredlll08@gmail.com>
*   [Fix #2754 Crash when GUI extends offscreen](https://github.com/mezz/JustEnoughItems/commit/bb7eec72a41a0c932f71a4f591b6d8977f7d031b) - mezz
    
*   [Fix #2752 Crash on gui slots that are to the left or above the gui](https://github.com/mezz/JustEnoughItems/commit/98e5ead592a85f084a9e840fd5e4125e3c8df4cc) - mezz
    
*   [Display hidden ingredients in a recipe if there are no other ingredients to show](https://github.com/mezz/JustEnoughItems/commit/b8903a1777f1dc939f2a0476f412a142ef7d6f70) - mezz
    
*   [Allow focus linking with invisible ingredients](https://github.com/mezz/JustEnoughItems/commit/ae69541a7cd44362f77c30c88e7d2c58fc5c1d2b) - mezz
    
*   [Fix debug recipes](https://github.com/mezz/JustEnoughItems/commit/61d1ebe55676727c0572eaac14367943a18650c3) - mezz
    
*   [update JUnit](https://github.com/mezz/JustEnoughItems/commit/1c12ab5031333d6aeb0577869b4fc235c83fb922) - mezz
    
*   [Clean up build script](https://github.com/mezz/JustEnoughItems/commit/02b3939453a8e7511fd4dd95034ef19bf05d05a1) - mezz
    
*   [Run Spotless cleanup](https://github.com/mezz/JustEnoughItems/commit/d281b8446a7691e579e73998bf75cb9e2c70b849) - mezz
    
*   [Fix bookmark config directory creation](https://github.com/mezz/JustEnoughItems/commit/1a1db97ecc33d282477e14536ffdf49baae23b13) - mezz
    
*   [Fix #2744 Workaround for Optifine bug](https://github.com/mezz/JustEnoughItems/commit/dcfab2e4f61c1834971f4a34718f7f426199aded) - mezz
    
*   [Fix #2744 Workaround for Optifine bug](https://github.com/mezz/JustEnoughItems/commit/d925b2ef8acf8db3226fcc6369236f90c911b1b0) - mezz
    
*   [Clean up some tags code](https://github.com/mezz/JustEnoughItems/commit/08ef7e1d958219eab93c714fb735fc29a56036db) - mezz
    
*   [suppress more deprecation warnings](https://github.com/mezz/JustEnoughItems/commit/252b96d063a3bea16ab5307a8f38182dafc4f475) - mezz
    
*   [Use Parchment mappings in dev environment](https://github.com/mezz/JustEnoughItems/commit/2f4ecf9de17ab907084fc1b269e8e57e7ba5637d) - mezz
    
*   [Make potion effects render in compact mode when JEI is open](https://github.com/mezz/JustEnoughItems/commit/982a1459a66271bf29776eb3b0e51c7fda471bec) - mezz
    
*   [add more client run configurations in developer environment](https://github.com/mezz/JustEnoughItems/commit/95e2045c572bb8335899a57ec61a5b37cae03c8b) - mezz
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/f2c87e1d88e42205b5da342f513dc78a7f15fa99) - mezz
    
*   [Link anvil recipe input/output focuses](https://github.com/mezz/JustEnoughItems/commit/09f7e93b47979253fa419b1d1d6024182d3ebaa1) - mezz
    
*   [Code cleanup](https://github.com/mezz/JustEnoughItems/commit/fcaba7451f0f7663ad850c1f14a4c142bba6999e) - mezz
    
*   [Fix logic when there are broken recipe layouts](https://github.com/mezz/JustEnoughItems/commit/490e92d46f9d20c6024f38efd2bf52e10691cf31) - mezz
    
*   [Minor code cleanup](https://github.com/mezz/JustEnoughItems/commit/b06f757bf00a965a2c001e59d06f628d3f6d6502) - mezz
    
*   [Fix type of IRecipeLookup#limitFocus](https://github.com/mezz/JustEnoughItems/commit/e7e6055d8d543206ad0807b83f14a30c58e7c093) - mezz
    
*   [Refactor: Replace IRecipeCategory.getUid() ResourceLocation with RecipeType](https://github.com/mezz/JustEnoughItems/commit/4b0270bbced63113067b0b091fb1e3b3e394dbf9) - mezz
    
*   [Mark ISlowRenderItem as deprecated](https://github.com/mezz/JustEnoughItems/commit/4c9a54e9ef57abb0ab84f9b42bd8afcbbfce08ca) - mezz
    
*   [Minor cleanup](https://github.com/mezz/JustEnoughItems/commit/02b187a06443b569b6a2cedce690c2d918d6b0a3) - mezz
    
*   [Remove unused BookmarkOverlayToggleEvent](https://github.com/mezz/JustEnoughItems/commit/176326dbdbe305a3b65f0052eb8038b2a07007b7) - mezz
    
*   [Remove FastItemRendering, it is no longer necessary and can cause conflicts](https://github.com/mezz/JustEnoughItems/commit/a6065cbf4cc979436f9c0ac1604f76bf43f7f07a) - mezz
    
*   [Add access to IJeiHelpers from IJeiRuntime](https://github.com/mezz/JustEnoughItems/commit/0d2cecd41bfe008298303312d2d37dd9c9d44d5f) - mezz
    
*   [Remove persistent WorldConfig and untangle filter text logic](https://github.com/mezz/JustEnoughItems/commit/b949f819cc30fad3eee85841b1e60055bdb5d793) - mezz
    
*   [GUI code refactor. Add configs for ingredient list and bookmark list layouts. (#2711)](https://github.com/mezz/JustEnoughItems/commit/212f9c745d1f7cb011c23c784caac036eb14e70c) - mezz
    
*   [Fix #2733 Better handling for /reload](https://github.com/mezz/JustEnoughItems/commit/1b95efefbcb8186bac071a71cadda869e91df3e1) - mezz
    
*   [Fix #2733 JEI doesn't update after /reload](https://github.com/mezz/JustEnoughItems/commit/48374815d0a0b88930ea2f8848f47f14405ea694) - mezz
    
*   [Clarify Github Issue Templates](https://github.com/mezz/JustEnoughItems/commit/aa3a7e7e35254aaafcf0e8de946ba88b78910d7e) - mezz
    
*   [Add github issue templates](https://github.com/mezz/JustEnoughItems/commit/135768cefd4fff4f3a44fb40224a7439849c6c35) - mezz
    
*   [Update README](https://github.com/mezz/JustEnoughItems/commit/8f85dafb492a45ae01b5b90720b18d2fda5e47fd) - mezz
    
*   [Simplify code for IngredientSorterComparators#getTagForSorting](https://github.com/mezz/JustEnoughItems/commit/6899e62c8421e3fb15c462e76708bfc01d2837b9) - mezz

### jei-1.19.2-forge-11.6.0.1021.jar
### Current release 11.6.0

*   [Prevent recipe transfers from touching output slots](https://github.com/mezz/JustEnoughItems/commit/8612cb0974c69fabfe268497f927435d915118e5) - mezz
    
*   [run spotless](https://github.com/mezz/JustEnoughItems/commit/fa73465828dbade643000f5cb641d1667146c8c1) - mezz
    
*   [Update gradle, forge, and fabric versions](https://github.com/mezz/JustEnoughItems/commit/502d686aee290866399eb276037315765be186fa) - mezz
    
*   [Close #3320 Search default block tags for items with blocks in them](https://github.com/mezz/JustEnoughItems/commit/0d64e3aa4c27ce056bef113a63ff295db8694eba) - mezz
    
*   [Fix error handling when a recipe manager plugin crashes](https://github.com/mezz/JustEnoughItems/commit/c24d85b39a8704f4221e306be064e05214bdfcfe) - mezz
    
*   [turn spaces to tabs consistently with spotless rules](https://github.com/mezz/JustEnoughItems/commit/119aba128828f02b77c7bac900c4d1b0ec7e6848) - mezz
    
*   [update spotless plugin](https://github.com/mezz/JustEnoughItems/commit/3bd5d55df3d0bdcfa09cd639133bb193ec5eafa3) - mezz
    
*   [increase ram given to gradle](https://github.com/mezz/JustEnoughItems/commit/cd7bc9ee368e072d8d29f8e43f5ace96fdff7889) - mezz
    
*   [Fix copying recipe id so that it doesn't just copy the first one displayed](https://github.com/mezz/JustEnoughItems/commit/3b3a418fccc35f07a40625827447230f5f32a842) - mezz
    
*   [Add "Fabric-Loom-Remap" to fabric api jar manifest](https://github.com/mezz/JustEnoughItems/commit/e29a94c2d1bd9baf8984ee717a4fb8c8e49105b5) - mezz
    
*   [Add modrinth upload task](https://github.com/mezz/JustEnoughItems/commit/3d6494bdae2346db583fe7c5f424c6434794bc41) - mezz
    
*   [Close #3190 Add support for ghost ingredient dragging from bookmarks](https://github.com/mezz/JustEnoughItems/commit/d11e1491f6d4945151536edb5e37b57a3e8439aa) - mezz
    
*   [Make FileWatcherThread a daemon thread](https://github.com/mezz/JustEnoughItems/commit/f1df855db8766961f7f66fe2a146c6c02e8bbd65) - mezz
    *   This prevents it from keeping the JVM from exiting during data generation.
*   [Remove fabric depends statement for anything other than the core project](https://github.com/mezz/JustEnoughItems/commit/b69b1cd8bb1729bc37e6ae57e4af88a689fd6200) - mezz
    
*   [Fix #2991 Fix starting on server thread in Fabric after reload](https://github.com/mezz/JustEnoughItems/commit/caa72a5471117a83c8cd25e00722b317f9a78980) - mezz
    
*   [Update Fabric version in dev environment](https://github.com/mezz/JustEnoughItems/commit/cbdb368862e9c3c6a3320feba4d84cf567689f21) - mezz
    
*   [Improve config file watcher, avoid creating excess threads on world reload](https://github.com/mezz/JustEnoughItems/commit/33a6b1fadf01cc6f77a44c5c086a73a6b9e03bda) - mezz
    
*   [Move input debug logs behind a new DebugInputs config flag](https://github.com/mezz/JustEnoughItems/commit/a18dcf94aa7b9b849e4f23e6a4211bee7d14622f) - mezz
    
*   [Fix ghost ingredient dragging](https://github.com/mezz/JustEnoughItems/commit/372f9e0bbcd0a9d921520af97aeaff0445d6a031) - mezz
    
*   [Add a 1.19 config for the position of new bookmarks (#3113)](https://github.com/mezz/JustEnoughItems/commit/fffffc610db8e75a5bd50eab851c97a1b40050bd) - Waiting Idly
    
*   [Fix #3079 Write the blacklist to file if the file does not exist yet](https://github.com/mezz/JustEnoughItems/commit/15bbaa4f8db1d77cf7ddd99178ffcd22dc20bd89) - mezz
    
*   [Simplify platform config helper code](https://github.com/mezz/JustEnoughItems/commit/e6ea3b4ef72737f927939682ae9b5c90c5d980f5) - mezz
    
*   [Close #3077, Add link to open the JEI config folder when you click the settings button](https://github.com/mezz/JustEnoughItems/commit/e7570624748f7c521a9efcc8e60b7884f63ad984) - mezz
    
*   [Set a maximum Minecraft version of 1.19.2](https://github.com/mezz/JustEnoughItems/commit/71894a977f62742fcb505c83fd2e29dab46e3791) - mezz
    *   Minecraft 1.19.3 has breaking changes and is not compatible with this version of JEI.
*   [Update zh_cn.json (#3105)](https://github.com/mezz/JustEnoughItems/commit/2f56b84b5d2393ab7c410b0b25ce9941382a82e7) - ArchiDreamZ
    
*   [Fix missing period and space in kk_kz.json (#3101)](https://github.com/mezz/JustEnoughItems/commit/2106f3f3437ce339fac9555749fb3f7723077b98) - AlibekAytjan
    
*   [remove jar archive in Jenkins (it is already available in maven and curseforge)](https://github.com/mezz/JustEnoughItems/commit/9f1a77b1c5b695f8203163633fd169aff0dd7844) - mezz
    
*   [use tools.jdk for Jenkinsfile instead of JAVA_HOME env var](https://github.com/mezz/JustEnoughItems/commit/74fcc826e8e702597365261601e18ddbe2c9eecd) - mezz
    
*   [Fix #3093 Create a runtime registration step before onRuntimeAvailable](https://github.com/mezz/JustEnoughItems/commit/cfb7c8d3767f43a7ab18b9236f794abfecc70b33) - mezz
    
*   [Hide ingredients that have the tag "c:hidden_from_recipe_viewers"](https://github.com/mezz/JustEnoughItems/commit/1a08a45e887aa8224b2cbe1a24645d7b443a6676) - mezz
    
*   [chore: Add Gui and Library maven publish to Jenkinsfile (#3066)](https://github.com/mezz/JustEnoughItems/commit/01f613671cb4635a0a5c23b85c40f1d52d0f3d00) - Kli Kli
    
*   [fix sources jar configuration](https://github.com/mezz/JustEnoughItems/commit/28ca460fafde8150988b8c70bf3bacd4397e7d36) - mezz
    
*   [fix publishing of sources jars for Gui and Library](https://github.com/mezz/JustEnoughItems/commit/ca717007b3ecd35e6abf5c6b08aa82d3a4d4134c) - mezz
    
*   [publish Library and Gui jars to maven](https://github.com/mezz/JustEnoughItems/commit/66de59b65f548c2ae2a872f6a0a698d0bd41fe4b) - mezz
    
*   [Fix publishing the Core artifact](https://github.com/mezz/JustEnoughItems/commit/38fa7cbebda074de30cd19d85069d75457206695) - mezz
    
*   [Code cleanup](https://github.com/mezz/JustEnoughItems/commit/c83958436399abdc3581b16d0d73df56ea555073) - mezz
    
*   [Split up the GUI code and add API methods so that the GUI mostly depends on the API (#3058)](https://github.com/mezz/JustEnoughItems/commit/6476d975359e1c2ff517d94b58ff2dcc7bf780ae) - James Mitchell
    
*   [update pt_br (#3040)](https://github.com/mezz/JustEnoughItems/commit/8f79ba8f1b63799db85415fe82147eef6cd25908) - FITFC
    
*   [log gui change on debug mode only (#3052)](https://github.com/mezz/JustEnoughItems/commit/042cbc9463d10651cf6e6cd4bf1cc17a0ddd5f16) - Jonathan Colmenares
    
*   [Mark 1.19.2 builds as betas](https://github.com/mezz/JustEnoughItems/commit/bd7a56faccd62e5dfc10e22c8855a338f37a20c5) - mezz
    
*   [Fix hiding items from recipes via the API](https://github.com/mezz/JustEnoughItems/commit/b7f3e66e109fb467337aa78e56a99eadbfff0237) - mezz
    
*   [Reduce memory used by an adversarial PacketRecipeTransfer](https://github.com/mezz/JustEnoughItems/commit/f128c3b3dbfcbbbfe965f78ff85f514f66c4fa19) - mezz
    
*   [Split drag handling from input handling, add debug mode logs for input handling](https://github.com/mezz/JustEnoughItems/commit/9992840db5ad4a6c52f8e64bf4d179042c8e42cd) - mezz
    
*   [#3018 Fix crashing VanillaPlugin on invalid brewing recipes](https://github.com/mezz/JustEnoughItems/commit/1c2dd1a9402607ac1a2861862e5a723924aa13fe) - mezz
    
*   [fix internal javadoc](https://github.com/mezz/JustEnoughItems/commit/e8312ddd16a0e1ce1b0f008af2494f53dea0962d) - mezz
    
*   [#3022 Only delete items on left-click](https://github.com/mezz/JustEnoughItems/commit/5252f70c55bcef8bdf474013eacb2625375ec740) - mezz
    
*   [#3022 Fix picking up multiple items with the mouse in cheat mode](https://github.com/mezz/JustEnoughItems/commit/1f93f82bfc6bac8b3a90c06c1a4f26c53ea40b6b) - mezz
    
*   [Ensure packets are handled on the correct thread](https://github.com/mezz/JustEnoughItems/commit/f758d0d4c9b0568091253dfc7fbb4b0e2ec55dff) - mezz
    
*   [add IJeiHelpers#getRecipeType to help addon mods](https://github.com/mezz/JustEnoughItems/commit/38096675e85d6ebc61109da3b21b24c6bf4f5bbc) - mezz
    
*   [Fix #2993 Reduce recipe validation errors to debug logs](https://github.com/mezz/JustEnoughItems/commit/9a8f8dd61a6fdd2875d7d685dd61f9f3e1e198b2) - mezz
    
*   [Fix #3014 Saving edit-mode changes to file fails](https://github.com/mezz/JustEnoughItems/commit/97bfb62ebbdbb092f62f75b4970998899a85a09e) - mezz
    
*   [fix ConfigSerializer sorting for config categories](https://github.com/mezz/JustEnoughItems/commit/d881e68ebec0d4dca6b22b17999a628e1d267de2) - mezz
    
*   [Fix #3009 returning negative X/Y values from getGuiExtraAreas() breaks filter text selection](https://github.com/mezz/JustEnoughItems/commit/0364eed6b0823a9eb2b9d695336a287a695a8cb7) - mezz
    
*   [Improve performance of checking fuels on Fabric (#2997)](https://github.com/mezz/JustEnoughItems/commit/cab76d8154e70206bb7441d5ec6ea2cc497eed57) - Technici4n
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/a0410148a9984b38c951a83ac3ec356ae9bea2fb) - mezz
    
*   [Minor cleanup in config code](https://github.com/mezz/JustEnoughItems/commit/79c34fcc1d16699389d5015d284bc16e8cbe3da1) - mezz
    
*   [Prefer more abundant items first for recipe transfer (#2987)](https://github.com/mezz/JustEnoughItems/commit/56f7b86fc5fc4b43b640b09892e6b0ccfef0500b) - DBotThePony
    
*   [Clean up unused imports](https://github.com/mezz/JustEnoughItems/commit/2e4d4f570edfc6056cbd1ebae1efbae3e24ff7be) - mezz
    
*   [Fix #2968 Add Fabric support for Potion recipes](https://github.com/mezz/JustEnoughItems/commit/730f667a4107b2b33a9c10e43e3870bde7a11c3b) - mezz
    
*   [Close #2963 Add catalogueImageIcon](https://github.com/mezz/JustEnoughItems/commit/5662c0bf93c16829c6838d3ef5bfbb7ff951cdd1) - mezz
    
*   [Fix #2978 fix server-side error logs from platform handler when deleting items](https://github.com/mezz/JustEnoughItems/commit/a3dec98206575147cc45b01adc585ee8f5e56768) - mezz
    
*   [Fix #2817 Expose more RecipeTransfer utils in IRecipeTransferHandlerHelper](https://github.com/mezz/JustEnoughItems/commit/13235737ae7d8e11308936b80f50f58ffdc3ff1f) - mezz
    
*   [Close #2795 Add API to get a RecipeType from a ResourceLocation](https://github.com/mezz/JustEnoughItems/commit/b787b86ecbccaa2b2e65ec012b8b463592224c45) - mezz
    
*   [Fix #2976 use FluidVariantRendering for Fabric fluids with compound tags](https://github.com/mezz/JustEnoughItems/commit/f60ba011e84fb87b17295eefd2a48521c9503881) - mezz
    
*   [Fix #2195 Anvil text "Enchantment Cost" has incorrect shadows](https://github.com/mezz/JustEnoughItems/commit/60e90315a4d326f079334aea1aab964268614e0c) - mezz
    
*   [Close #1579 Allow using Screen with IGlobalGuiHandler](https://github.com/mezz/JustEnoughItems/commit/a3ffb965a60ed28ad344a253e90588af89efd917) - mezz
    
*   [Close #391 Add shield decoration recipes](https://github.com/mezz/JustEnoughItems/commit/292c104ac21da757862ae8111ccd92ebd4f641bf) - mezz
    
*   [Make the `Show Recipes` tooltip optional in the API (#2972)](https://github.com/mezz/JustEnoughItems/commit/d28d213b0bc9c06aeade519019c57c577c1b337a) - Relentless
    
*   [Allow recipe transfer errors to set button color highlight (#2971)](https://github.com/mezz/JustEnoughItems/commit/c56c409b138645af2ffa814a99b345c930036e67) - Technici4n
    
*   [Fix #2959 Update to Fabric API 0.60](https://github.com/mezz/JustEnoughItems/commit/efbabfdba7af8454f56a30ea2440f54f9930c92c) - mezz
    
*   [Close #2951 Update recipe transfer handlers every tick](https://github.com/mezz/JustEnoughItems/commit/21bcb20ac61acda82c786bc9ff3226845e53b8ce) - mezz
    
*   [Github: increase stale action's operations per run](https://github.com/mezz/JustEnoughItems/commit/def1bfdcba3af124de6fe78fd23ed39c7f1d41a6) - mezz
    
*   [Github: do not comment when locking closed issues over 1 year old](https://github.com/mezz/JustEnoughItems/commit/639568c2aee5ea142e74ca63630c7f5867d7da59) - mezz
    
*   [Automatically lock Github issues older than 1 year old](https://github.com/mezz/JustEnoughItems/commit/225f4c9ef583d70592b7eab31f8a60c3a14d2cab) - mezz
    
*   [enable automatic marking and closing of stale issues](https://github.com/mezz/JustEnoughItems/commit/65a5f23de4fb4ff573d3e288dafbd02cb8da9ea6) - mezz
    
*   [start marking stale issues starting with the oldest](https://github.com/mezz/JustEnoughItems/commit/ebc5ed5b2e6c237e4733bdbddff4f921896a5a7a) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/49da070d0ae2318ee672422eff4566d8ae2ad2b7) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/e696d893dbc5cb9a662c94958d6d1c9757d162ef) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/2a596077deab20fdcb01c74bdd869279a92ef2c9) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/571cfac14933fcedf38c8adfdfb2af312f1c10d5) - mezz
    
*   [Add github stale workflow action in dry-run mode](https://github.com/mezz/JustEnoughItems/commit/c7ae5445cf44fc0a107b7b2b308757fa56848436) - mezz
    
*   [Update dependencies for Minecraft 1.19.2](https://github.com/mezz/JustEnoughItems/commit/c0859d6ac6b798bcc3d96338109f8ab976ea16c5) - mezz
    
*   [Improve javadocs for IIngredientAcceptor#addFluidStack](https://github.com/mezz/JustEnoughItems/commit/90b37d06031c8e113d51e747e3f532f4b9ed047b) - mezz
    
*   [Fix #2939 Crash on Forge when typing](https://github.com/mezz/JustEnoughItems/commit/4679f2e05ebabebde6b14ad445e39319aea689a7) - mezz
    
*   [Fix #2899 Cheat mode not working when connected to dedicated server](https://github.com/mezz/JustEnoughItems/commit/e6ef3fca950b59aa2c716c75dc6aac612470058e) - mezz
    
*   [Clean up unused method](https://github.com/mezz/JustEnoughItems/commit/acfa093e0bbf67d3f1faae56d24f5762c450fcfc) - mezz
    
*   [Update for Minecraft 1.19.1](https://github.com/mezz/JustEnoughItems/commit/16116299c676183dee0f63380a6a09a64d754359) - mezz
    
*   [Minor code cleanup](https://github.com/mezz/JustEnoughItems/commit/91527b7d5fae747455ed7630915c088e3fe0f602) - mezz
    
*   [Fix #2875 Fix recipe slot highlight and RecipeTransferErrorTooltip display. (#2922)](https://github.com/mezz/JustEnoughItems/commit/ec010fbd494f5b7c4a0514f6bdf2f20dc3464958) - vfyjxf
    
*   [Update Forge version used in the dev environment](https://github.com/mezz/JustEnoughItems/commit/00ee4988895f4eb2c177b22a252abe7e2e6bcd8e) - mezz
    
*   [Add convenience functions to reduce the need for using VanillaTypes.ITEM_STACK](https://github.com/mezz/JustEnoughItems/commit/66a18ccaccf226c3a21863f4f96b30c564e9a9bb) - mezz
    
*   [Add Kazakh translation (#2912)](https://github.com/mezz/JustEnoughItems/commit/4f0c07ea66be0c385ed41d363e78fff19c7236ef) - AlibekAytjan
    
*   [Update bg_bg.json (#2910)](https://github.com/mezz/JustEnoughItems/commit/3d3f29bc99d05e8fe6a8b988f57a0d5cc54c38a5) - Deyan Nikolov
    
*   [Create convenience function for adding a fluid ingredient to IIngredientAcceptor](https://github.com/mezz/JustEnoughItems/commit/dfbe89487d70eaa2364199916ab9afed8815f586) - mezz
    
*   [Close #2901 Make Crafting Grid Helper return the slots it creates](https://github.com/mezz/JustEnoughItems/commit/0645b00cf13fa60c3a89e905c02fa146c543359f) - mezz
    
*   [Fix #2898 Expose "show uses/recipes" key bindings in the API](https://github.com/mezz/JustEnoughItems/commit/c7f4c07d864ab21e2bc4c2ed23f87942506b8dbf) - mezz
    
*   [Fix #2897 Hovering over recipe tabs can ignore key inputs](https://github.com/mezz/JustEnoughItems/commit/96f611776ba34ad0166c1589d3cd05a9da32e171) - mezz
    
*   [Fix #2873 Use the correct mouseReleased call to finish a click on Fabric](https://github.com/mezz/JustEnoughItems/commit/1e13ab99ba7aaf2452377e8f748bcfc1abcd3689) - mezz
    
*   [Fix #2871 Fix text field synchronization from mods via the API](https://github.com/mezz/JustEnoughItems/commit/30fb27f2dfa48647d176e76f830925b097c0214b) - mezz
    
*   [Fix #2873 Ghost ingredient handling on Fabric](https://github.com/mezz/JustEnoughItems/commit/b6813e7b3a70606841b8fdb6a80252a92e5c8fac) - mezz
    
*   [Update Polish translation (#2874)](https://github.com/mezz/JustEnoughItems/commit/dde86189738a28735072ccfa3ee8e425b01c94df) - Greg-21
    
*   [Use an accesswidener to access fields with Fabric](https://github.com/mezz/JustEnoughItems/commit/de821ed60b845e5d824f2f8a9edf705f7846b50b) - mezz
    
*   [update parchment mappings](https://github.com/mezz/JustEnoughItems/commit/fdf39f73debb75a0ca37bcc3c7c0efca4394f8f2) - mezz
    
*   [Fix #2839 Improve widget focusing behavior with the search box](https://github.com/mezz/JustEnoughItems/commit/89fa05dc4ec1559c8692bfa169999baa96efaab6) - mezz
    
*   [Fix #2890 Protect against broken recipe transfer handlers crashing](https://github.com/mezz/JustEnoughItems/commit/4f991ab7b552256c01009993454f4f9c76a46865) - mezz
    
*   [Clean up unused imports](https://github.com/mezz/JustEnoughItems/commit/20bbf2808923966169b577deba8aaf5097603b6a) - mezz
    
*   [Update to support the breaking changes in forge (#2886)](https://github.com/mezz/JustEnoughItems/commit/9669b94bf94410ba0d621b43bd709e3f2cbd0de9) - Sara Freimer
    
*   [clean up configs slightly](https://github.com/mezz/JustEnoughItems/commit/e5a34c9b6921a24e09603038f190a3df141facb1) - mezz
    
*   [Cleanup](https://github.com/mezz/JustEnoughItems/commit/9dc14b1ceeb086a5332f73584845e5650325ac78) - mezz
    
*   [update parchment version](https://github.com/mezz/JustEnoughItems/commit/4dd6e22d9fabb1529d463ce0edb59e4c2b299c5d) - mezz
    
*   [Update dev forge and mappings](https://github.com/mezz/JustEnoughItems/commit/32afb34a1a11fee0d7f656b4b846fb43c3a8e191) - mezz
    
*   [set gradle to no longer use configure-on-demand, it breaks ForgeGradle](https://github.com/mezz/JustEnoughItems/commit/73ed0fef50bc1209548adb740f350ae991764fe2) - mezz
    
*   [Remove old createFocusLink method](https://github.com/mezz/JustEnoughItems/commit/071c078a733c1d08d45646188ba9506eab910174) - mezz
    
*   [Fix improper property use causing invalid dependency POM (#2854)](https://github.com/mezz/JustEnoughItems/commit/ad7fd38086d3e3c970813edb577a4a9d7b3a1686) - sciwhiz12
    *   The archivesName property of BasePluginExtension is a Property<String>.
    *   The default implementation of toString() for a Property is to print out
    *   their name and owning object, and not the toString() of their contents.
    *   This meant that passing archivesName to Node#appendNode as a value,
    *   which calls toString() on it to make it into a String, results in e.g.
    *   `extension 'base' property 'archivesName'` instead of the expected
    *   value of e.g. `jei-1.19-common-api`.
    *   The simple fix is to call Property#get() on archivesName to get its
    *   actual value and pass that on as the node value.
*   [Fix #2851 Protect against crash from broken fluids](https://github.com/mezz/JustEnoughItems/commit/edc5e7c22e0aac91a4424571525b6df85abafa53) - mezz
    
*   [Update to changes in Forge's fluid API (#2852)](https://github.com/mezz/JustEnoughItems/commit/cea569ee6a20589f9b7b0ccd037d31f5e8ddbb11) - Sara Freimer
    
*   [version 11](https://github.com/mezz/JustEnoughItems/commit/b7158ba5b7bc16f9e5f1efbe927fe8c88515cac8) - mezz
    
*   [Remove deprecated methods](https://github.com/mezz/JustEnoughItems/commit/8a65df7e56a1c00d4dd4153260902e4f26a7401a) - mezz
    
*   [Update for Minecraft 1.19](https://github.com/mezz/JustEnoughItems/commit/5b2e71f547cd13cd48de4d999c4f56bddfc421bb) - mezz
    
*   [JEI 10. Add Fabric support. Refactor into a multi-project (#2842)](https://github.com/mezz/JustEnoughItems/commit/530ef6c8d604370bef850f3656a28beab56cbfba) - mezz
    
*   [Update sv_se.json (#2836)](https://github.com/mezz/JustEnoughItems/commit/d46164fce29506569f7e3debdbab099439e042d6) - A. Regnander
    
*   [Updated Russian Translation (#2799)](https://github.com/mezz/JustEnoughItems/commit/d12ab9560bbe57681de1de20bca876bc9556f10e) - DrHesperus
    
*   [Fix #2812 Add a keybind for the key to exit a recipe screen to the inventory](https://github.com/mezz/JustEnoughItems/commit/3d1852a1f713fb79260a6670a0551437f8a536db) - mezz
    
*   [Allow focuses to match multiple ingredients in a recipe slot](https://github.com/mezz/JustEnoughItems/commit/efd8ef5bbf45e0c73c5d6285163fe5dc6f827323) - mezz
    
*   [Fix #2790 Recipes are listed twice when checking the uses of an ingredient that is also a catalyst](https://github.com/mezz/JustEnoughItems/commit/d13676b136f61716dbe8abfa43589a9ef2d1baa3) - mezz
    
*   [deprecate some api methods that depend on forge-specific code](https://github.com/mezz/JustEnoughItems/commit/e0fa409e74153d687d901fd3dba40957a02099cd) - mezz
    
*   [Create IIngredientTypeWithSubtypes for generic handling of subtypes in ingredients](https://github.com/mezz/JustEnoughItems/commit/01fd9c02bb0b2348d988452ca5edd8ccbba704cb) - mezz
    
*   [Move config screen into platform service](https://github.com/mezz/JustEnoughItems/commit/fadb4d9741884d1dec0201d541f04fbe4f764f6f) - mezz
    
*   [move forge configs into forge folder](https://github.com/mezz/JustEnoughItems/commit/981e463c97f9a3c89bed3fb6991bc1c76b334663) - mezz
    
*   [Add platform server helper](https://github.com/mezz/JustEnoughItems/commit/f4ebadd513a8ee7d628c4b3e56de3bb2293e6197) - mezz
    
*   [Use service to get particle icons](https://github.com/mezz/JustEnoughItems/commit/c97b9d3db9ef1e05195804a9caa618d9bdccefdc) - mezz
    
*   [Organize packet data into data and context](https://github.com/mezz/JustEnoughItems/commit/2b04f090497fb4cc3a54c0db4c5c9fc200a4a7b0) - mezz
    
*   [Update es_es.json (#2782)](https://github.com/mezz/JustEnoughItems/commit/0263f7090ff197d026c404cea98531b81bf8b301) - zeedif
    
*   [Fix #2783 Attempted to load class net/minecraft/client/player/LocalPlayer for invalid dist DEDICATED_SERVER](https://github.com/mezz/JustEnoughItems/commit/db613c8519cdbcbb4b0d66857b0d5dae3998c7ff) - mezz
    
*   [Clean up ErrorUtil](https://github.com/mezz/JustEnoughItems/commit/61758a12034f85b4829bb00b45d0b3b63fac123b) - mezz
    
*   [Move registry access to a service loader](https://github.com/mezz/JustEnoughItems/commit/35c1706cfe8a4fcc0f1d68f691917b1e268c984f) - mezz
    
*   [Update it_it.json (#2785)](https://github.com/mezz/JustEnoughItems/commit/3a008930cb32dc33931468be00a1e4003d1e464d) - Andrea Costa
    
*   [Protect against mod crashes when checking for enchantable items](https://github.com/mezz/JustEnoughItems/commit/ac26e8c7bd5f4727e84883a85026bd66a0b2fbf7) - mezz
    
*   [Add access to IIngredientManager from recipe catalyst registration](https://github.com/mezz/JustEnoughItems/commit/808372d990fb311eb83d89d27d111d6fdce6d92d) - mezz
    
*   [organize some network code into subprojects](https://github.com/mezz/JustEnoughItems/commit/b709cc36179fc61ea627f995335d24b0bac01216) - mezz
    
*   [Refactor server connection logic into its own class](https://github.com/mezz/JustEnoughItems/commit/98abba6b2e2b75f716978305268555e533b5402d) - mezz
    
*   [Organize some config files into subprojects](https://github.com/mezz/JustEnoughItems/commit/2c5229fca155e5655e55e4d81ed3c1e5d594d082) - mezz
    
*   [Move Translator to common.util](https://github.com/mezz/JustEnoughItems/commit/17927c0a20902319492336642484239284bc71ac) - mezz
    
*   [Include all test results in Jenkins](https://github.com/mezz/JustEnoughItems/commit/880be88737c4be9d5d73c9cf5cd7e96155307124) - mezz
    
*   [Clean up ReflectionUtil](https://github.com/mezz/JustEnoughItems/commit/5e692c7ca7168999c4a7a6105b5653917e3ad4dd) - mezz
    
*   [Move more code into the Core and Common subprojects](https://github.com/mezz/JustEnoughItems/commit/2112d63b268bce244ab6e05c9b1fc8f23dc484d8) - mezz
    
*   [Clean up ColorNamer code](https://github.com/mezz/JustEnoughItems/commit/c784e6a20312ef31e081210a3e185e2a30c13046) - mezz
    
*   [Move search logic into core subproject](https://github.com/mezz/JustEnoughItems/commit/847fb20ab1590b7e3905c49b5fe4fb7bdf1e110e) - mezz
    
*   [Create "Core" subproject for code that does not depend on Minecraft](https://github.com/mezz/JustEnoughItems/commit/d005fda4e2ea1f0a446634307654b907913d7a26) - mezz
    
*   [Fix #2756 Fuel recipes with high values can overflow the recipe background](https://github.com/mezz/JustEnoughItems/commit/8edf068e17646debaf3f095d32a736b172448614) - mezz
    
*   [Close #2771 Allow IRecipeTransferInfo to return a transfer error if it can't handle the recipe](https://github.com/mezz/JustEnoughItems/commit/8b62850a0056c2fbc2f481eb0993f3de259b7ac7) - mezz
    
*   [Improve startup code to be more resilient to modded bugs](https://github.com/mezz/JustEnoughItems/commit/5242ae9ffbdb09ebf46597f750839bba5288c6e4) - mezz
    
*   [Fix bookmark config creation](https://github.com/mezz/JustEnoughItems/commit/bfcd7ff664a66f8ceac0d9141c5ef0ecfa549b13) - mezz
    
*   [Exclude duplicate files from output jars](https://github.com/mezz/JustEnoughItems/commit/be3fad8df73eab0b98a98f51f09b45b779520a5e) - mezz
    
*   [Isolate changelog plugin in a subproject](https://github.com/mezz/JustEnoughItems/commit/daed974fd0cf47156a508af008ad4b53bd0b853d) - mezz
    
*   [Constrain gitchangelog asm version](https://github.com/mezz/JustEnoughItems/commit/a314f03808e4532e30901c418a294147bc172f0a) - mezz
    
*   [fix asm coords to org.ow2.asm:asm](https://github.com/mezz/JustEnoughItems/commit/0bc8a0b48dee4b333d62c1ae6344cf7c6984f27e) - mezz
    
*   [add comment for asm constraint](https://github.com/mezz/JustEnoughItems/commit/2456758d6acf05493bfb2432daa00d67d0e08560) - mezz
    
*   [Try constraining asm to the right version](https://github.com/mezz/JustEnoughItems/commit/4b922335cd9eced04341fba7be5add4a8c3e9477) - mezz
    
*   [Update dev Forge version](https://github.com/mezz/JustEnoughItems/commit/3e7e106e1f3974ed311bdde7670ccd60d312eee6) - mezz
    
*   [Organize internal code into a multiproject (#2772)](https://github.com/mezz/JustEnoughItems/commit/5aa1ae16fe920d7c4159eb3448d5ec8bb8891ec8) - mezz
    
*   [Update forge maven artifact id](https://github.com/mezz/JustEnoughItems/commit/04f24d67c0b7a23c517c55be2d56aa8a2758e5e9) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/5633ee657519b14567cd30ba53f73e97194a0648) - mezz
    
*   [update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/95ee3bff746fcb5ff18f8275564d1a1b46947add) - mezz
    
*   [update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/b2d3d6a756847913b1ff48d38f0c459a0b26d0c7) - mezz
    
*   [Make the give notification message work for any player that has a server](https://github.com/mezz/JustEnoughItems/commit/9db2be0b4ed1dead1c2ea167bc07202b4ffc4dab) - mezz
    
*   [fix changelog path](https://github.com/mezz/JustEnoughItems/commit/62b2f40543ee48d3006d043b4f77522b1fa1b7e1) - mezz
    
*   [fix project dependency](https://github.com/mezz/JustEnoughItems/commit/f4a08d34177c3b0e3ed5a7bf6f877244e7f1611a) - mezz
    
*   [Ensure ProcessResources updates on every new version](https://github.com/mezz/JustEnoughItems/commit/2bfe7a815be61756a3ecf6f275f2afbb777ad1ba) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/b0a994494433bd42b065578b8d4fa76608734190) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/cde4010b43e77fbc72b497d3426dd2044ec271c4) - mezz
    
*   [Organize project code](https://github.com/mezz/JustEnoughItems/commit/dd289c912d8f52da59c155850baa4c1e0aa5e9ce) - mezz
    
*   [Fix gradle project properties](https://github.com/mezz/JustEnoughItems/commit/56b5da3a8d94f2e02b7489d05bd878920b4ff101) - mezz
    
*   [Use net.minecraft.MethodsReturnNonnullByDefault](https://github.com/mezz/JustEnoughItems/commit/ebd3cbcbcce0000851fdb797c542e25114bcda69) - mezz
    
*   [Update Forge in dev environment](https://github.com/mezz/JustEnoughItems/commit/9025bb694be7c5d5e70f4e128989b1d1d18a4df4) - mezz
    
*   [Fix #2751 Crash when MC window becomes too narrow](https://github.com/mezz/JustEnoughItems/commit/84142187699e30c29295a7aa86dd44b96271eefe) - mezz
    
*   [Update Jenkinsfile to always run tests](https://github.com/mezz/JustEnoughItems/commit/543ad9baeb7c1316246b44cee32c1b903e4a7304) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/5073f9659f206f45a1c30b10eb0bb56646c4f7fa) - mezz
    
*   [Update Jenkinsfile for publishing to CurseForge](https://github.com/mezz/JustEnoughItems/commit/69af776afc6f9e53fb17008215a85886500aa8eb) - mezz
    
*   [Migrate build.gradle to build.gradle.kts (#2761)](https://github.com/mezz/JustEnoughItems/commit/ac9cbc0f58c86c85cc14370db4156922e861c982) - mezz
    *   Co-authored-by: Jared <jaredlll08@gmail.com>
*   [Fix #2754 Crash when GUI extends offscreen](https://github.com/mezz/JustEnoughItems/commit/bb7eec72a41a0c932f71a4f591b6d8977f7d031b) - mezz
    
*   [Fix #2752 Crash on gui slots that are to the left or above the gui](https://github.com/mezz/JustEnoughItems/commit/98e5ead592a85f084a9e840fd5e4125e3c8df4cc) - mezz
    
*   [Display hidden ingredients in a recipe if there are no other ingredients to show](https://github.com/mezz/JustEnoughItems/commit/b8903a1777f1dc939f2a0476f412a142ef7d6f70) - mezz
    
*   [Allow focus linking with invisible ingredients](https://github.com/mezz/JustEnoughItems/commit/ae69541a7cd44362f77c30c88e7d2c58fc5c1d2b) - mezz
    
*   [Fix debug recipes](https://github.com/mezz/JustEnoughItems/commit/61d1ebe55676727c0572eaac14367943a18650c3) - mezz
    
*   [update JUnit](https://github.com/mezz/JustEnoughItems/commit/1c12ab5031333d6aeb0577869b4fc235c83fb922) - mezz
    
*   [Clean up build script](https://github.com/mezz/JustEnoughItems/commit/02b3939453a8e7511fd4dd95034ef19bf05d05a1) - mezz
    
*   [Run Spotless cleanup](https://github.com/mezz/JustEnoughItems/commit/d281b8446a7691e579e73998bf75cb9e2c70b849) - mezz
    
*   [Fix bookmark config directory creation](https://github.com/mezz/JustEnoughItems/commit/1a1db97ecc33d282477e14536ffdf49baae23b13) - mezz
    
*   [Fix #2744 Workaround for Optifine bug](https://github.com/mezz/JustEnoughItems/commit/dcfab2e4f61c1834971f4a34718f7f426199aded) - mezz
    
*   [Fix #2744 Workaround for Optifine bug](https://github.com/mezz/JustEnoughItems/commit/d925b2ef8acf8db3226fcc6369236f90c911b1b0) - mezz
    
*   [Clean up some tags code](https://github.com/mezz/JustEnoughItems/commit/08ef7e1d958219eab93c714fb735fc29a56036db) - mezz
    
*   [suppress more deprecation warnings](https://github.com/mezz/JustEnoughItems/commit/252b96d063a3bea16ab5307a8f38182dafc4f475) - mezz
    
*   [Use Parchment mappings in dev environment](https://github.com/mezz/JustEnoughItems/commit/2f4ecf9de17ab907084fc1b269e8e57e7ba5637d) - mezz
    
*   [Make potion effects render in compact mode when JEI is open](https://github.com/mezz/JustEnoughItems/commit/982a1459a66271bf29776eb3b0e51c7fda471bec) - mezz
    
*   [add more client run configurations in developer environment](https://github.com/mezz/JustEnoughItems/commit/95e2045c572bb8335899a57ec61a5b37cae03c8b) - mezz
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/f2c87e1d88e42205b5da342f513dc78a7f15fa99) - mezz
    
*   [Link anvil recipe input/output focuses](https://github.com/mezz/JustEnoughItems/commit/09f7e93b47979253fa419b1d1d6024182d3ebaa1) - mezz
    
*   [Code cleanup](https://github.com/mezz/JustEnoughItems/commit/fcaba7451f0f7663ad850c1f14a4c142bba6999e) - mezz
    
*   [Fix logic when there are broken recipe layouts](https://github.com/mezz/JustEnoughItems/commit/490e92d46f9d20c6024f38efd2bf52e10691cf31) - mezz
    
*   [Minor code cleanup](https://github.com/mezz/JustEnoughItems/commit/b06f757bf00a965a2c001e59d06f628d3f6d6502) - mezz
    
*   [Fix type of IRecipeLookup#limitFocus](https://github.com/mezz/JustEnoughItems/commit/e7e6055d8d543206ad0807b83f14a30c58e7c093) - mezz
    
*   [Refactor: Replace IRecipeCategory.getUid() ResourceLocation with RecipeType](https://github.com/mezz/JustEnoughItems/commit/4b0270bbced63113067b0b091fb1e3b3e394dbf9) - mezz
    
*   [Mark ISlowRenderItem as deprecated](https://github.com/mezz/JustEnoughItems/commit/4c9a54e9ef57abb0ab84f9b42bd8afcbbfce08ca) - mezz
    
*   [Minor cleanup](https://github.com/mezz/JustEnoughItems/commit/02b187a06443b569b6a2cedce690c2d918d6b0a3) - mezz
    
*   [Remove unused BookmarkOverlayToggleEvent](https://github.com/mezz/JustEnoughItems/commit/176326dbdbe305a3b65f0052eb8038b2a07007b7) - mezz
    
*   [Remove FastItemRendering, it is no longer necessary and can cause conflicts](https://github.com/mezz/JustEnoughItems/commit/a6065cbf4cc979436f9c0ac1604f76bf43f7f07a) - mezz
    
*   [Add access to IJeiHelpers from IJeiRuntime](https://github.com/mezz/JustEnoughItems/commit/0d2cecd41bfe008298303312d2d37dd9c9d44d5f) - mezz
    
*   [Remove persistent WorldConfig and untangle filter text logic](https://github.com/mezz/JustEnoughItems/commit/b949f819cc30fad3eee85841b1e60055bdb5d793) - mezz
    
*   [GUI code refactor. Add configs for ingredient list and bookmark list layouts. (#2711)](https://github.com/mezz/JustEnoughItems/commit/212f9c745d1f7cb011c23c784caac036eb14e70c) - mezz
    
*   [Fix #2733 Better handling for /reload](https://github.com/mezz/JustEnoughItems/commit/1b95efefbcb8186bac071a71cadda869e91df3e1) - mezz
    
*   [Fix #2733 JEI doesn't update after /reload](https://github.com/mezz/JustEnoughItems/commit/48374815d0a0b88930ea2f8848f47f14405ea694) - mezz
    
*   [Clarify Github Issue Templates](https://github.com/mezz/JustEnoughItems/commit/aa3a7e7e35254aaafcf0e8de946ba88b78910d7e) - mezz
    
*   [Add github issue templates](https://github.com/mezz/JustEnoughItems/commit/135768cefd4fff4f3a44fb40224a7439849c6c35) - mezz
    
*   [Update README](https://github.com/mezz/JustEnoughItems/commit/8f85dafb492a45ae01b5b90720b18d2fda5e47fd) - mezz
    
*   [Simplify code for IngredientSorterComparators#getTagForSorting](https://github.com/mezz/JustEnoughItems/commit/6899e62c8421e3fb15c462e76708bfc01d2837b9) - mezz

### jei-1.19.4-forge-13.1.0.18.jar
### Current release 13.1.0

*   [Prevent recipe transfers from touching output slots](https://github.com/mezz/JustEnoughItems/commit/acaae815ca800ed5f3d493dd391179d84e306d15) - mezz
    
*   [Update gradle, forge, and fabric versions](https://github.com/mezz/JustEnoughItems/commit/48e628ceaf09095070dbdba62eeb6315a610dbf9) - mezz
    
*   [Add "Fabric-Loom-Remap" to fabric api jar manifest](https://github.com/mezz/JustEnoughItems/commit/affeac7d60425ee98c40c1b4435f6a635e4fcf22) - mezz
    
*   [Update pt_br.json (#3226)](https://github.com/mezz/JustEnoughItems/commit/f3eeef5ece92de050b48be9cb9c981c29ddd4b6f) - Tony
    
*   [Fix mismatch between display names (#3220)](https://github.com/mezz/JustEnoughItems/commit/75dec2817651beed070863c68b39042dc72e963d) - HwakYuk
    
*   [Fix #3232 Call guiEventHandler.onGuiInit only after GuiInit in Fabric](https://github.com/mezz/JustEnoughItems/commit/6fd2dc81cbc056da6d0494ec3e5bd085bca9daf9) - mezz
    
*   [Fix #3240 crash from enabling color search](https://github.com/mezz/JustEnoughItems/commit/2ca0921bd638e128cbee9c89cd2a4efa799c2381) - mezz
    
*   [Fix the text filter search box](https://github.com/mezz/JustEnoughItems/commit/3ebf026d68cfe2de3428dff35a28f793189653c4) - mezz
    
*   [remove unused call to ClientConfig](https://github.com/mezz/JustEnoughItems/commit/30b0ac70729b570e7f3ff43bcc25228d6b5bee2b) - mezz
    
*   [use consumer instead of set for search tree results](https://github.com/mezz/JustEnoughItems/commit/b5b00557f5df18c35e545e3cc8cd65ca4b975ba1) - mezz
    
*   [Fix tests](https://github.com/mezz/JustEnoughItems/commit/db5b17cb3d260ffa00667b73906167c95ea15fde) - mezz
    
*   [Clean up functional supplier code](https://github.com/mezz/JustEnoughItems/commit/957440c8f8a41950f9a525d39a727418a5d7d091) - mezz
    
*   [Add config option to lookup recipes for the fluid inside of items in addition to the item](https://github.com/mezz/JustEnoughItems/commit/76278d489072fc1d3e3477df163228ae03e6e42e) - mezz
    *   jei-client.ini -> [advanced] -> LookupFluidContents
*   [Update config files when new options are added or removed](https://github.com/mezz/JustEnoughItems/commit/f8410febaf0e88866a6f0fd8fc9717f17c7bc1f3) - mezz
    
*   [Update uk_ua.json (#3155)](https://github.com/mezz/JustEnoughItems/commit/268a3e3b9a74bc736ee4838816eec2fd08998b4d) - Un roman
    
*   [Create vi_vn.json (#3141)](https://github.com/mezz/JustEnoughItems/commit/8570c996d35344b4be47759cc58824de5168d135) - bl205vn
    
*   [Fix #3194 Make the save config thread short-lived](https://github.com/mezz/JustEnoughItems/commit/570a3054aeed76362b2116c9bf19228e046a57e0) - mezz
    
*   [Fix #3183 Too many catalysts crashes the client](https://github.com/mezz/JustEnoughItems/commit/e30d1bd7cafcaac72f20b13c26d25a6d20f1d275) - mezz
    
*   [Fix #3183 Loosen restrictions on gui placement and rectangles going offscreen](https://github.com/mezz/JustEnoughItems/commit/e2b92506c9ec5a663fdb769e7e3c6722da645ac5) - mezz
    
*   [Close #3190 Add support for ghost ingredient dragging from bookmarks](https://github.com/mezz/JustEnoughItems/commit/992edcc6196ee8a6d3f78785ece0d11118b51734) - mezz
    
*   [Make FileWatcherThread a daemon thread](https://github.com/mezz/JustEnoughItems/commit/48325818e94d1fdb5fc2cf75324524d95580efe7) - mezz
    *   This prevents it from keeping the JVM from exiting during data generation.
*   [Add JeiHelpers access to VanillaCategoryExtension (#3174)](https://github.com/mezz/JustEnoughItems/commit/2bbf6670b43d5d1221f286e0d13f4813f2df1a2b) - Davide Albiero
    
*   [Update to Minecraft 1.19.4](https://github.com/mezz/JustEnoughItems/commit/a8a0405cec5fddf28efaa320b150089b01c155dc) - mezz
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/739fde73225d006c83af22db04c5723d9c539dc7) - mezz
    
*   [Remove fabric depends statement for anything other than the core project](https://github.com/mezz/JustEnoughItems/commit/c6c115cfad74659c56cfbc293992e064f9deae0f) - mezz
    
*   [Fix #2991 Fix starting on server thread in Fabric after reload](https://github.com/mezz/JustEnoughItems/commit/b79af654216f26887d4f01e54c1a0d04011546d5) - mezz
    
*   [Fix #3145 JEI fails to load on Forge server](https://github.com/mezz/JustEnoughItems/commit/8d7aaa149bfb330af91cc46ac70a23950e4834fb) - mezz
    
*   [Improve logging of slow plugins, reduce info log spam](https://github.com/mezz/JustEnoughItems/commit/71229ebe8e605ed84300ed95fcfd8bc559f22820) - mezz
    
*   [Move some loading steps and config loading to an earlier time](https://github.com/mezz/JustEnoughItems/commit/4128bf4261e025ce10e0d8b4be70f83826f3dc1f) - mezz
    
*   [Improve config file watcher, avoid creating excess threads on world reload](https://github.com/mezz/JustEnoughItems/commit/59ef1d2817ecd351e1857b32a57adbe79da6925c) - mezz
    
*   [Move input debug logs behind a new DebugInputs config flag](https://github.com/mezz/JustEnoughItems/commit/e70a56ea2f1b42d1022e75edec08b2ec936726c0) - mezz
    
*   [Fix ghost ingredient dragging](https://github.com/mezz/JustEnoughItems/commit/464e895dae49d19e01d5704a6ff85d81b98957c4) - mezz
    
*   [Add a 1.19 config for the position of new bookmarks (#3113)](https://github.com/mezz/JustEnoughItems/commit/972c690ab94065f4a87b7731a36ff3ed371b86f8) - Waiting Idly
    
*   [Clarify version names for modrinth publishing](https://github.com/mezz/JustEnoughItems/commit/6522d3eb59663e2edd700cefe6c5e6f250570e76) - mezz
    
*   [differentiate forge and fabric versions for modrinth](https://github.com/mezz/JustEnoughItems/commit/65422bb04d43e7f9ae2e011b7c5714b23bf05148) - mezz
    
*   [List fewer changes in the changelog.md](https://github.com/mezz/JustEnoughItems/commit/acf218192a552349d80907ba96eeade15f76166e) - mezz
    
*   [Add modrinth upload task](https://github.com/mezz/JustEnoughItems/commit/9cdd9915f017e314ba7e7edf7b9dc7b09ba5eb15) - mezz
    
*   [Fix parchment mapping repo resolution for Fabric projects](https://github.com/mezz/JustEnoughItems/commit/4e1333e0019779f97434f7c0f84961eedbaf5047) - mezz
    
*   [Expose config serializers to the API](https://github.com/mezz/JustEnoughItems/commit/f7851dcc6311285266403da16d09615cb031f920) - mezz
    
*   [Expose control of the configs to the API](https://github.com/mezz/JustEnoughItems/commit/2c830f825626242f927bcd45d021949f9afef670) - mezz
    
*   [Minor cleanup](https://github.com/mezz/JustEnoughItems/commit/aed8a2e32ab97a41c377dbb5b3e6ca1945c14ee4) - mezz
    
*   [Clean up ReflectionUtil](https://github.com/mezz/JustEnoughItems/commit/657a679c775b3b716d07619c30caaf406c433dde) - mezz
    
*   [Fix #3079 Write the blacklist to file if the file does not exist yet](https://github.com/mezz/JustEnoughItems/commit/2d9a2b1431fb59eb2ed852edbeded22b84d82dfd) - mezz
    
*   [Simplify platform config helper code](https://github.com/mezz/JustEnoughItems/commit/4b504fcc2855a28fd915aa693c137781d33d0fc5) - mezz
    
*   [Speed up maven repo resolution](https://github.com/mezz/JustEnoughItems/commit/0a76f9806bc4ec0e13edda671f8ec66e7328678b) - mezz
    
*   [update to Recommended Forge for 1.19.3](https://github.com/mezz/JustEnoughItems/commit/274cffed6af95206bc78884a6e0dcd7b140ac594) - mezz
    
*   [Close #3077, Add link to open the JEI config folder when you click the settings button](https://github.com/mezz/JustEnoughItems/commit/87dbb6bbbb9a517fff3a20a61f6157f3664c0d4e) - mezz
    
*   [remove jar archive in Jenkins (it is already available in maven and curseforge)](https://github.com/mezz/JustEnoughItems/commit/ac55b73177258975d53e3c32eae2fc0ae52646e6) - mezz
    
*   [use tools.jdk for Jenkinsfile instead of JAVA_HOME env var](https://github.com/mezz/JustEnoughItems/commit/7b9827c376f936c1dc28373ef06ec40fd4673262) - mezz
    
*   [Fix #3093 Create a runtime registration step before onRuntimeAvailable](https://github.com/mezz/JustEnoughItems/commit/b271a9c052bb06aad239b718a7d5d4a42bd3bd19) - mezz
    
*   [Hide ingredients that have the tag "c:hidden_from_recipe_viewers"](https://github.com/mezz/JustEnoughItems/commit/7558039b767af2b59a5dc39d54b8ea919163ddfa) - mezz
    
*   [Update to 1.19.3](https://github.com/mezz/JustEnoughItems/commit/4430d23acac0eafb9d9f2543d1156558fda40fec) - mezz
    
*   [chore: Add Gui and Library maven publish to Jenkinsfile (#3066)](https://github.com/mezz/JustEnoughItems/commit/01f613671cb4635a0a5c23b85c40f1d52d0f3d00) - Kli Kli
    
*   [fix sources jar configuration](https://github.com/mezz/JustEnoughItems/commit/28ca460fafde8150988b8c70bf3bacd4397e7d36) - mezz
    
*   [fix publishing of sources jars for Gui and Library](https://github.com/mezz/JustEnoughItems/commit/ca717007b3ecd35e6abf5c6b08aa82d3a4d4134c) - mezz
    
*   [publish Library and Gui jars to maven](https://github.com/mezz/JustEnoughItems/commit/66de59b65f548c2ae2a872f6a0a698d0bd41fe4b) - mezz
    
*   [Fix publishing the Core artifact](https://github.com/mezz/JustEnoughItems/commit/38fa7cbebda074de30cd19d85069d75457206695) - mezz
    
*   [Code cleanup](https://github.com/mezz/JustEnoughItems/commit/c83958436399abdc3581b16d0d73df56ea555073) - mezz
    
*   [Split up the GUI code and add API methods so that the GUI mostly depends on the API (#3058)](https://github.com/mezz/JustEnoughItems/commit/6476d975359e1c2ff517d94b58ff2dcc7bf780ae) - James Mitchell
    
*   [update pt_br (#3040)](https://github.com/mezz/JustEnoughItems/commit/8f79ba8f1b63799db85415fe82147eef6cd25908) - FITFC
    
*   [log gui change on debug mode only (#3052)](https://github.com/mezz/JustEnoughItems/commit/042cbc9463d10651cf6e6cd4bf1cc17a0ddd5f16) - Jonathan Colmenares
    
*   [Mark 1.19.2 builds as betas](https://github.com/mezz/JustEnoughItems/commit/bd7a56faccd62e5dfc10e22c8855a338f37a20c5) - mezz
    
*   [Fix hiding items from recipes via the API](https://github.com/mezz/JustEnoughItems/commit/b7f3e66e109fb467337aa78e56a99eadbfff0237) - mezz
    
*   [Reduce memory used by an adversarial PacketRecipeTransfer](https://github.com/mezz/JustEnoughItems/commit/f128c3b3dbfcbbbfe965f78ff85f514f66c4fa19) - mezz
    
*   [Split drag handling from input handling, add debug mode logs for input handling](https://github.com/mezz/JustEnoughItems/commit/9992840db5ad4a6c52f8e64bf4d179042c8e42cd) - mezz
    
*   [#3018 Fix crashing VanillaPlugin on invalid brewing recipes](https://github.com/mezz/JustEnoughItems/commit/1c2dd1a9402607ac1a2861862e5a723924aa13fe) - mezz
    
*   [fix internal javadoc](https://github.com/mezz/JustEnoughItems/commit/e8312ddd16a0e1ce1b0f008af2494f53dea0962d) - mezz
    
*   [#3022 Only delete items on left-click](https://github.com/mezz/JustEnoughItems/commit/5252f70c55bcef8bdf474013eacb2625375ec740) - mezz
    
*   [#3022 Fix picking up multiple items with the mouse in cheat mode](https://github.com/mezz/JustEnoughItems/commit/1f93f82bfc6bac8b3a90c06c1a4f26c53ea40b6b) - mezz
    
*   [Ensure packets are handled on the correct thread](https://github.com/mezz/JustEnoughItems/commit/f758d0d4c9b0568091253dfc7fbb4b0e2ec55dff) - mezz
    
*   [add IJeiHelpers#getRecipeType to help addon mods](https://github.com/mezz/JustEnoughItems/commit/38096675e85d6ebc61109da3b21b24c6bf4f5bbc) - mezz
    
*   [Fix #2993 Reduce recipe validation errors to debug logs](https://github.com/mezz/JustEnoughItems/commit/9a8f8dd61a6fdd2875d7d685dd61f9f3e1e198b2) - mezz
    
*   [Fix #3014 Saving edit-mode changes to file fails](https://github.com/mezz/JustEnoughItems/commit/97bfb62ebbdbb092f62f75b4970998899a85a09e) - mezz
    
*   [fix ConfigSerializer sorting for config categories](https://github.com/mezz/JustEnoughItems/commit/d881e68ebec0d4dca6b22b17999a628e1d267de2) - mezz
    
*   [Fix #3009 returning negative X/Y values from getGuiExtraAreas() breaks filter text selection](https://github.com/mezz/JustEnoughItems/commit/0364eed6b0823a9eb2b9d695336a287a695a8cb7) - mezz
    
*   [Improve performance of checking fuels on Fabric (#2997)](https://github.com/mezz/JustEnoughItems/commit/cab76d8154e70206bb7441d5ec6ea2cc497eed57) - Technici4n
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/a0410148a9984b38c951a83ac3ec356ae9bea2fb) - mezz
    
*   [Minor cleanup in config code](https://github.com/mezz/JustEnoughItems/commit/79c34fcc1d16699389d5015d284bc16e8cbe3da1) - mezz
    
*   [Prefer more abundant items first for recipe transfer (#2987)](https://github.com/mezz/JustEnoughItems/commit/56f7b86fc5fc4b43b640b09892e6b0ccfef0500b) - DBotThePony
    
*   [Clean up unused imports](https://github.com/mezz/JustEnoughItems/commit/2e4d4f570edfc6056cbd1ebae1efbae3e24ff7be) - mezz
    
*   [Fix #2968 Add Fabric support for Potion recipes](https://github.com/mezz/JustEnoughItems/commit/730f667a4107b2b33a9c10e43e3870bde7a11c3b) - mezz
    
*   [Close #2963 Add catalogueImageIcon](https://github.com/mezz/JustEnoughItems/commit/5662c0bf93c16829c6838d3ef5bfbb7ff951cdd1) - mezz
    
*   [Fix #2978 fix server-side error logs from platform handler when deleting items](https://github.com/mezz/JustEnoughItems/commit/a3dec98206575147cc45b01adc585ee8f5e56768) - mezz
    
*   [Fix #2817 Expose more RecipeTransfer utils in IRecipeTransferHandlerHelper](https://github.com/mezz/JustEnoughItems/commit/13235737ae7d8e11308936b80f50f58ffdc3ff1f) - mezz
    
*   [Close #2795 Add API to get a RecipeType from a ResourceLocation](https://github.com/mezz/JustEnoughItems/commit/b787b86ecbccaa2b2e65ec012b8b463592224c45) - mezz
    
*   [Fix #2976 use FluidVariantRendering for Fabric fluids with compound tags](https://github.com/mezz/JustEnoughItems/commit/f60ba011e84fb87b17295eefd2a48521c9503881) - mezz
    
*   [Fix #2195 Anvil text "Enchantment Cost" has incorrect shadows](https://github.com/mezz/JustEnoughItems/commit/60e90315a4d326f079334aea1aab964268614e0c) - mezz
    
*   [Close #1579 Allow using Screen with IGlobalGuiHandler](https://github.com/mezz/JustEnoughItems/commit/a3ffb965a60ed28ad344a253e90588af89efd917) - mezz
    
*   [Close #391 Add shield decoration recipes](https://github.com/mezz/JustEnoughItems/commit/292c104ac21da757862ae8111ccd92ebd4f641bf) - mezz
    
*   [Make the `Show Recipes` tooltip optional in the API (#2972)](https://github.com/mezz/JustEnoughItems/commit/d28d213b0bc9c06aeade519019c57c577c1b337a) - Relentless
    
*   [Allow recipe transfer errors to set button color highlight (#2971)](https://github.com/mezz/JustEnoughItems/commit/c56c409b138645af2ffa814a99b345c930036e67) - Technici4n
    
*   [Fix #2959 Update to Fabric API 0.60](https://github.com/mezz/JustEnoughItems/commit/efbabfdba7af8454f56a30ea2440f54f9930c92c) - mezz
    
*   [Close #2951 Update recipe transfer handlers every tick](https://github.com/mezz/JustEnoughItems/commit/21bcb20ac61acda82c786bc9ff3226845e53b8ce) - mezz
    
*   [Github: increase stale action's operations per run](https://github.com/mezz/JustEnoughItems/commit/def1bfdcba3af124de6fe78fd23ed39c7f1d41a6) - mezz
    
*   [Github: do not comment when locking closed issues over 1 year old](https://github.com/mezz/JustEnoughItems/commit/639568c2aee5ea142e74ca63630c7f5867d7da59) - mezz
    
*   [Automatically lock Github issues older than 1 year old](https://github.com/mezz/JustEnoughItems/commit/225f4c9ef583d70592b7eab31f8a60c3a14d2cab) - mezz
    
*   [enable automatic marking and closing of stale issues](https://github.com/mezz/JustEnoughItems/commit/65a5f23de4fb4ff573d3e288dafbd02cb8da9ea6) - mezz
    
*   [start marking stale issues starting with the oldest](https://github.com/mezz/JustEnoughItems/commit/ebc5ed5b2e6c237e4733bdbddff4f921896a5a7a) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/49da070d0ae2318ee672422eff4566d8ae2ad2b7) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/e696d893dbc5cb9a662c94958d6d1c9757d162ef) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/2a596077deab20fdcb01c74bdd869279a92ef2c9) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/571cfac14933fcedf38c8adfdfb2af312f1c10d5) - mezz
    
*   [Add github stale workflow action in dry-run mode](https://github.com/mezz/JustEnoughItems/commit/c7ae5445cf44fc0a107b7b2b308757fa56848436) - mezz
    
*   [Update dependencies for Minecraft 1.19.2](https://github.com/mezz/JustEnoughItems/commit/c0859d6ac6b798bcc3d96338109f8ab976ea16c5) - mezz
    
*   [Improve javadocs for IIngredientAcceptor#addFluidStack](https://github.com/mezz/JustEnoughItems/commit/90b37d06031c8e113d51e747e3f532f4b9ed047b) - mezz
    
*   [Fix #2939 Crash on Forge when typing](https://github.com/mezz/JustEnoughItems/commit/4679f2e05ebabebde6b14ad445e39319aea689a7) - mezz
    
*   [Fix #2899 Cheat mode not working when connected to dedicated server](https://github.com/mezz/JustEnoughItems/commit/e6ef3fca950b59aa2c716c75dc6aac612470058e) - mezz
    
*   [Clean up unused method](https://github.com/mezz/JustEnoughItems/commit/acfa093e0bbf67d3f1faae56d24f5762c450fcfc) - mezz
    
*   [Update for Minecraft 1.19.1](https://github.com/mezz/JustEnoughItems/commit/16116299c676183dee0f63380a6a09a64d754359) - mezz
    
*   [Minor code cleanup](https://github.com/mezz/JustEnoughItems/commit/91527b7d5fae747455ed7630915c088e3fe0f602) - mezz
    
*   [Fix #2875 Fix recipe slot highlight and RecipeTransferErrorTooltip display. (#2922)](https://github.com/mezz/JustEnoughItems/commit/ec010fbd494f5b7c4a0514f6bdf2f20dc3464958) - vfyjxf
    
*   [Update Forge version used in the dev environment](https://github.com/mezz/JustEnoughItems/commit/00ee4988895f4eb2c177b22a252abe7e2e6bcd8e) - mezz
    
*   [Add convenience functions to reduce the need for using VanillaTypes.ITEM_STACK](https://github.com/mezz/JustEnoughItems/commit/66a18ccaccf226c3a21863f4f96b30c564e9a9bb) - mezz
    
*   [Add Kazakh translation (#2912)](https://github.com/mezz/JustEnoughItems/commit/4f0c07ea66be0c385ed41d363e78fff19c7236ef) - AlibekAytjan
    
*   [Update bg_bg.json (#2910)](https://github.com/mezz/JustEnoughItems/commit/3d3f29bc99d05e8fe6a8b988f57a0d5cc54c38a5) - Deyan Nikolov
    
*   [Create convenience function for adding a fluid ingredient to IIngredientAcceptor](https://github.com/mezz/JustEnoughItems/commit/dfbe89487d70eaa2364199916ab9afed8815f586) - mezz
    
*   [Close #2901 Make Crafting Grid Helper return the slots it creates](https://github.com/mezz/JustEnoughItems/commit/0645b00cf13fa60c3a89e905c02fa146c543359f) - mezz
    
*   [Fix #2898 Expose "show uses/recipes" key bindings in the API](https://github.com/mezz/JustEnoughItems/commit/c7f4c07d864ab21e2bc4c2ed23f87942506b8dbf) - mezz
    
*   [Fix #2897 Hovering over recipe tabs can ignore key inputs](https://github.com/mezz/JustEnoughItems/commit/96f611776ba34ad0166c1589d3cd05a9da32e171) - mezz
    
*   [Fix #2873 Use the correct mouseReleased call to finish a click on Fabric](https://github.com/mezz/JustEnoughItems/commit/1e13ab99ba7aaf2452377e8f748bcfc1abcd3689) - mezz
    
*   [Fix #2871 Fix text field synchronization from mods via the API](https://github.com/mezz/JustEnoughItems/commit/30fb27f2dfa48647d176e76f830925b097c0214b) - mezz
    
*   [Fix #2873 Ghost ingredient handling on Fabric](https://github.com/mezz/JustEnoughItems/commit/b6813e7b3a70606841b8fdb6a80252a92e5c8fac) - mezz
    
*   [Update Polish translation (#2874)](https://github.com/mezz/JustEnoughItems/commit/dde86189738a28735072ccfa3ee8e425b01c94df) - Greg-21
    
*   [Use an accesswidener to access fields with Fabric](https://github.com/mezz/JustEnoughItems/commit/de821ed60b845e5d824f2f8a9edf705f7846b50b) - mezz
    
*   [update parchment mappings](https://github.com/mezz/JustEnoughItems/commit/fdf39f73debb75a0ca37bcc3c7c0efca4394f8f2) - mezz
    
*   [Fix #2839 Improve widget focusing behavior with the search box](https://github.com/mezz/JustEnoughItems/commit/89fa05dc4ec1559c8692bfa169999baa96efaab6) - mezz
    
*   [Fix #2890 Protect against broken recipe transfer handlers crashing](https://github.com/mezz/JustEnoughItems/commit/4f991ab7b552256c01009993454f4f9c76a46865) - mezz
    
*   [Clean up unused imports](https://github.com/mezz/JustEnoughItems/commit/20bbf2808923966169b577deba8aaf5097603b6a) - mezz
    
*   [Update to support the breaking changes in forge (#2886)](https://github.com/mezz/JustEnoughItems/commit/9669b94bf94410ba0d621b43bd709e3f2cbd0de9) - Sara Freimer
    
*   [clean up configs slightly](https://github.com/mezz/JustEnoughItems/commit/e5a34c9b6921a24e09603038f190a3df141facb1) - mezz
    
*   [Cleanup](https://github.com/mezz/JustEnoughItems/commit/9dc14b1ceeb086a5332f73584845e5650325ac78) - mezz
    
*   [update parchment version](https://github.com/mezz/JustEnoughItems/commit/4dd6e22d9fabb1529d463ce0edb59e4c2b299c5d) - mezz
    
*   [Update dev forge and mappings](https://github.com/mezz/JustEnoughItems/commit/32afb34a1a11fee0d7f656b4b846fb43c3a8e191) - mezz
    
*   [set gradle to no longer use configure-on-demand, it breaks ForgeGradle](https://github.com/mezz/JustEnoughItems/commit/73ed0fef50bc1209548adb740f350ae991764fe2) - mezz
    
*   [Remove old createFocusLink method](https://github.com/mezz/JustEnoughItems/commit/071c078a733c1d08d45646188ba9506eab910174) - mezz
    
*   [Fix improper property use causing invalid dependency POM (#2854)](https://github.com/mezz/JustEnoughItems/commit/ad7fd38086d3e3c970813edb577a4a9d7b3a1686) - sciwhiz12
    *   The archivesName property of BasePluginExtension is a Property<String>.
    *   The default implementation of toString() for a Property is to print out
    *   their name and owning object, and not the toString() of their contents.
    *   This meant that passing archivesName to Node#appendNode as a value,
    *   which calls toString() on it to make it into a String, results in e.g.
    *   `extension 'base' property 'archivesName'` instead of the expected
    *   value of e.g. `jei-1.19-common-api`.
    *   The simple fix is to call Property#get() on archivesName to get its
    *   actual value and pass that on as the node value.
*   [Fix #2851 Protect against crash from broken fluids](https://github.com/mezz/JustEnoughItems/commit/edc5e7c22e0aac91a4424571525b6df85abafa53) - mezz
    
*   [Update to changes in Forge's fluid API (#2852)](https://github.com/mezz/JustEnoughItems/commit/cea569ee6a20589f9b7b0ccd037d31f5e8ddbb11) - Sara Freimer
    
*   [version 11](https://github.com/mezz/JustEnoughItems/commit/b7158ba5b7bc16f9e5f1efbe927fe8c88515cac8) - mezz
    
*   [Remove deprecated methods](https://github.com/mezz/JustEnoughItems/commit/8a65df7e56a1c00d4dd4153260902e4f26a7401a) - mezz
    
*   [Update for Minecraft 1.19](https://github.com/mezz/JustEnoughItems/commit/5b2e71f547cd13cd48de4d999c4f56bddfc421bb) - mezz
    
*   [JEI 10. Add Fabric support. Refactor into a multi-project (#2842)](https://github.com/mezz/JustEnoughItems/commit/530ef6c8d604370bef850f3656a28beab56cbfba) - mezz
    
*   [Update sv_se.json (#2836)](https://github.com/mezz/JustEnoughItems/commit/d46164fce29506569f7e3debdbab099439e042d6) - A. Regnander
    
*   [Updated Russian Translation (#2799)](https://github.com/mezz/JustEnoughItems/commit/d12ab9560bbe57681de1de20bca876bc9556f10e) - DrHesperus
    
*   [Fix #2812 Add a keybind for the key to exit a recipe screen to the inventory](https://github.com/mezz/JustEnoughItems/commit/3d1852a1f713fb79260a6670a0551437f8a536db) - mezz
    
*   [Allow focuses to match multiple ingredients in a recipe slot](https://github.com/mezz/JustEnoughItems/commit/efd8ef5bbf45e0c73c5d6285163fe5dc6f827323) - mezz
    
*   [Fix #2790 Recipes are listed twice when checking the uses of an ingredient that is also a catalyst](https://github.com/mezz/JustEnoughItems/commit/d13676b136f61716dbe8abfa43589a9ef2d1baa3) - mezz
    
*   [deprecate some api methods that depend on forge-specific code](https://github.com/mezz/JustEnoughItems/commit/e0fa409e74153d687d901fd3dba40957a02099cd) - mezz
    
*   [Create IIngredientTypeWithSubtypes for generic handling of subtypes in ingredients](https://github.com/mezz/JustEnoughItems/commit/01fd9c02bb0b2348d988452ca5edd8ccbba704cb) - mezz
    
*   [Move config screen into platform service](https://github.com/mezz/JustEnoughItems/commit/fadb4d9741884d1dec0201d541f04fbe4f764f6f) - mezz
    
*   [move forge configs into forge folder](https://github.com/mezz/JustEnoughItems/commit/981e463c97f9a3c89bed3fb6991bc1c76b334663) - mezz
    
*   [Add platform server helper](https://github.com/mezz/JustEnoughItems/commit/f4ebadd513a8ee7d628c4b3e56de3bb2293e6197) - mezz
    
*   [Use service to get particle icons](https://github.com/mezz/JustEnoughItems/commit/c97b9d3db9ef1e05195804a9caa618d9bdccefdc) - mezz
    
*   [Organize packet data into data and context](https://github.com/mezz/JustEnoughItems/commit/2b04f090497fb4cc3a54c0db4c5c9fc200a4a7b0) - mezz
    
*   [Update es_es.json (#2782)](https://github.com/mezz/JustEnoughItems/commit/0263f7090ff197d026c404cea98531b81bf8b301) - zeedif
    
*   [Fix #2783 Attempted to load class net/minecraft/client/player/LocalPlayer for invalid dist DEDICATED_SERVER](https://github.com/mezz/JustEnoughItems/commit/db613c8519cdbcbb4b0d66857b0d5dae3998c7ff) - mezz
    
*   [Clean up ErrorUtil](https://github.com/mezz/JustEnoughItems/commit/61758a12034f85b4829bb00b45d0b3b63fac123b) - mezz
    
*   [Move registry access to a service loader](https://github.com/mezz/JustEnoughItems/commit/35c1706cfe8a4fcc0f1d68f691917b1e268c984f) - mezz
    
*   [Update it_it.json (#2785)](https://github.com/mezz/JustEnoughItems/commit/3a008930cb32dc33931468be00a1e4003d1e464d) - Andrea Costa
    
*   [Protect against mod crashes when checking for enchantable items](https://github.com/mezz/JustEnoughItems/commit/ac26e8c7bd5f4727e84883a85026bd66a0b2fbf7) - mezz
    
*   [Add access to IIngredientManager from recipe catalyst registration](https://github.com/mezz/JustEnoughItems/commit/808372d990fb311eb83d89d27d111d6fdce6d92d) - mezz
    
*   [organize some network code into subprojects](https://github.com/mezz/JustEnoughItems/commit/b709cc36179fc61ea627f995335d24b0bac01216) - mezz
    
*   [Refactor server connection logic into its own class](https://github.com/mezz/JustEnoughItems/commit/98abba6b2e2b75f716978305268555e533b5402d) - mezz
    
*   [Organize some config files into subprojects](https://github.com/mezz/JustEnoughItems/commit/2c5229fca155e5655e55e4d81ed3c1e5d594d082) - mezz
    
*   [Move Translator to common.util](https://github.com/mezz/JustEnoughItems/commit/17927c0a20902319492336642484239284bc71ac) - mezz
    
*   [Include all test results in Jenkins](https://github.com/mezz/JustEnoughItems/commit/880be88737c4be9d5d73c9cf5cd7e96155307124) - mezz
    
*   [Clean up ReflectionUtil](https://github.com/mezz/JustEnoughItems/commit/5e692c7ca7168999c4a7a6105b5653917e3ad4dd) - mezz
    
*   [Move more code into the Core and Common subprojects](https://github.com/mezz/JustEnoughItems/commit/2112d63b268bce244ab6e05c9b1fc8f23dc484d8) - mezz
    
*   [Clean up ColorNamer code](https://github.com/mezz/JustEnoughItems/commit/c784e6a20312ef31e081210a3e185e2a30c13046) - mezz
    
*   [Move search logic into core subproject](https://github.com/mezz/JustEnoughItems/commit/847fb20ab1590b7e3905c49b5fe4fb7bdf1e110e) - mezz
    
*   [Create "Core" subproject for code that does not depend on Minecraft](https://github.com/mezz/JustEnoughItems/commit/d005fda4e2ea1f0a446634307654b907913d7a26) - mezz
    
*   [Fix #2756 Fuel recipes with high values can overflow the recipe background](https://github.com/mezz/JustEnoughItems/commit/8edf068e17646debaf3f095d32a736b172448614) - mezz
    
*   [Close #2771 Allow IRecipeTransferInfo to return a transfer error if it can't handle the recipe](https://github.com/mezz/JustEnoughItems/commit/8b62850a0056c2fbc2f481eb0993f3de259b7ac7) - mezz
    
*   [Improve startup code to be more resilient to modded bugs](https://github.com/mezz/JustEnoughItems/commit/5242ae9ffbdb09ebf46597f750839bba5288c6e4) - mezz
    
*   [Fix bookmark config creation](https://github.com/mezz/JustEnoughItems/commit/bfcd7ff664a66f8ceac0d9141c5ef0ecfa549b13) - mezz
    
*   [Exclude duplicate files from output jars](https://github.com/mezz/JustEnoughItems/commit/be3fad8df73eab0b98a98f51f09b45b779520a5e) - mezz
    
*   [Isolate changelog plugin in a subproject](https://github.com/mezz/JustEnoughItems/commit/daed974fd0cf47156a508af008ad4b53bd0b853d) - mezz
    
*   [Constrain gitchangelog asm version](https://github.com/mezz/JustEnoughItems/commit/a314f03808e4532e30901c418a294147bc172f0a) - mezz
    
*   [fix asm coords to org.ow2.asm:asm](https://github.com/mezz/JustEnoughItems/commit/0bc8a0b48dee4b333d62c1ae6344cf7c6984f27e) - mezz
    
*   [add comment for asm constraint](https://github.com/mezz/JustEnoughItems/commit/2456758d6acf05493bfb2432daa00d67d0e08560) - mezz
    
*   [Try constraining asm to the right version](https://github.com/mezz/JustEnoughItems/commit/4b922335cd9eced04341fba7be5add4a8c3e9477) - mezz
    
*   [Update dev Forge version](https://github.com/mezz/JustEnoughItems/commit/3e7e106e1f3974ed311bdde7670ccd60d312eee6) - mezz
    
*   [Organize internal code into a multiproject (#2772)](https://github.com/mezz/JustEnoughItems/commit/5aa1ae16fe920d7c4159eb3448d5ec8bb8891ec8) - mezz
    
*   [Update forge maven artifact id](https://github.com/mezz/JustEnoughItems/commit/04f24d67c0b7a23c517c55be2d56aa8a2758e5e9) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/5633ee657519b14567cd30ba53f73e97194a0648) - mezz
    
*   [update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/95ee3bff746fcb5ff18f8275564d1a1b46947add) - mezz
    
*   [update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/b2d3d6a756847913b1ff48d38f0c459a0b26d0c7) - mezz
    
*   [Make the give notification message work for any player that has a server](https://github.com/mezz/JustEnoughItems/commit/9db2be0b4ed1dead1c2ea167bc07202b4ffc4dab) - mezz
    
*   [fix changelog path](https://github.com/mezz/JustEnoughItems/commit/62b2f40543ee48d3006d043b4f77522b1fa1b7e1) - mezz
    
*   [fix project dependency](https://github.com/mezz/JustEnoughItems/commit/f4a08d34177c3b0e3ed5a7bf6f877244e7f1611a) - mezz
    
*   [Ensure ProcessResources updates on every new version](https://github.com/mezz/JustEnoughItems/commit/2bfe7a815be61756a3ecf6f275f2afbb777ad1ba) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/b0a994494433bd42b065578b8d4fa76608734190) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/cde4010b43e77fbc72b497d3426dd2044ec271c4) - mezz
    
*   [Organize project code](https://github.com/mezz/JustEnoughItems/commit/dd289c912d8f52da59c155850baa4c1e0aa5e9ce) - mezz
    
*   [Fix gradle project properties](https://github.com/mezz/JustEnoughItems/commit/56b5da3a8d94f2e02b7489d05bd878920b4ff101) - mezz
    
*   [Use net.minecraft.MethodsReturnNonnullByDefault](https://github.com/mezz/JustEnoughItems/commit/ebd3cbcbcce0000851fdb797c542e25114bcda69) - mezz
    
*   [Update Forge in dev environment](https://github.com/mezz/JustEnoughItems/commit/9025bb694be7c5d5e70f4e128989b1d1d18a4df4) - mezz
    
*   [Fix #2751 Crash when MC window becomes too narrow](https://github.com/mezz/JustEnoughItems/commit/84142187699e30c29295a7aa86dd44b96271eefe) - mezz
    
*   [Update Jenkinsfile to always run tests](https://github.com/mezz/JustEnoughItems/commit/543ad9baeb7c1316246b44cee32c1b903e4a7304) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/5073f9659f206f45a1c30b10eb0bb56646c4f7fa) - mezz
    
*   [Update Jenkinsfile for publishing to CurseForge](https://github.com/mezz/JustEnoughItems/commit/69af776afc6f9e53fb17008215a85886500aa8eb) - mezz
    
*   [Migrate build.gradle to build.gradle.kts (#2761)](https://github.com/mezz/JustEnoughItems/commit/ac9cbc0f58c86c85cc14370db4156922e861c982) - mezz
    *   Co-authored-by: Jared <jaredlll08@gmail.com>
*   [Fix #2754 Crash when GUI extends offscreen](https://github.com/mezz/JustEnoughItems/commit/bb7eec72a41a0c932f71a4f591b6d8977f7d031b) - mezz
    
*   [Fix #2752 Crash on gui slots that are to the left or above the gui](https://github.com/mezz/JustEnoughItems/commit/98e5ead592a85f084a9e840fd5e4125e3c8df4cc) - mezz
    
*   [Display hidden ingredients in a recipe if there are no other ingredients to show](https://github.com/mezz/JustEnoughItems/commit/b8903a1777f1dc939f2a0476f412a142ef7d6f70) - mezz
    
*   [Allow focus linking with invisible ingredients](https://github.com/mezz/JustEnoughItems/commit/ae69541a7cd44362f77c30c88e7d2c58fc5c1d2b) - mezz
    
*   [Fix debug recipes](https://github.com/mezz/JustEnoughItems/commit/61d1ebe55676727c0572eaac14367943a18650c3) - mezz
    
*   [update JUnit](https://github.com/mezz/JustEnoughItems/commit/1c12ab5031333d6aeb0577869b4fc235c83fb922) - mezz
    
*   [Clean up build script](https://github.com/mezz/JustEnoughItems/commit/02b3939453a8e7511fd4dd95034ef19bf05d05a1) - mezz
    
*   [Run Spotless cleanup](https://github.com/mezz/JustEnoughItems/commit/d281b8446a7691e579e73998bf75cb9e2c70b849) - mezz
    
*   [Fix bookmark config directory creation](https://github.com/mezz/JustEnoughItems/commit/1a1db97ecc33d282477e14536ffdf49baae23b13) - mezz
    
*   [Fix #2744 Workaround for Optifine bug](https://github.com/mezz/JustEnoughItems/commit/dcfab2e4f61c1834971f4a34718f7f426199aded) - mezz
    
*   [Fix #2744 Workaround for Optifine bug](https://github.com/mezz/JustEnoughItems/commit/d925b2ef8acf8db3226fcc6369236f90c911b1b0) - mezz
    
*   [Clean up some tags code](https://github.com/mezz/JustEnoughItems/commit/08ef7e1d958219eab93c714fb735fc29a56036db) - mezz
    
*   [suppress more deprecation warnings](https://github.com/mezz/JustEnoughItems/commit/252b96d063a3bea16ab5307a8f38182dafc4f475) - mezz
    
*   [Use Parchment mappings in dev environment](https://github.com/mezz/JustEnoughItems/commit/2f4ecf9de17ab907084fc1b269e8e57e7ba5637d) - mezz
    
*   [Make potion effects render in compact mode when JEI is open](https://github.com/mezz/JustEnoughItems/commit/982a1459a66271bf29776eb3b0e51c7fda471bec) - mezz
    
*   [add more client run configurations in developer environment](https://github.com/mezz/JustEnoughItems/commit/95e2045c572bb8335899a57ec61a5b37cae03c8b) - mezz
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/f2c87e1d88e42205b5da342f513dc78a7f15fa99) - mezz
    
*   [Link anvil recipe input/output focuses](https://github.com/mezz/JustEnoughItems/commit/09f7e93b47979253fa419b1d1d6024182d3ebaa1) - mezz
    
*   [Code cleanup](https://github.com/mezz/JustEnoughItems/commit/fcaba7451f0f7663ad850c1f14a4c142bba6999e) - mezz
    
*   [Fix logic when there are broken recipe layouts](https://github.com/mezz/JustEnoughItems/commit/490e92d46f9d20c6024f38efd2bf52e10691cf31) - mezz
    
*   [Minor code cleanup](https://github.com/mezz/JustEnoughItems/commit/b06f757bf00a965a2c001e59d06f628d3f6d6502) - mezz
    
*   [Fix type of IRecipeLookup#limitFocus](https://github.com/mezz/JustEnoughItems/commit/e7e6055d8d543206ad0807b83f14a30c58e7c093) - mezz
    
*   [Refactor: Replace IRecipeCategory.getUid() ResourceLocation with RecipeType](https://github.com/mezz/JustEnoughItems/commit/4b0270bbced63113067b0b091fb1e3b3e394dbf9) - mezz
    
*   [Mark ISlowRenderItem as deprecated](https://github.com/mezz/JustEnoughItems/commit/4c9a54e9ef57abb0ab84f9b42bd8afcbbfce08ca) - mezz
    
*   [Minor cleanup](https://github.com/mezz/JustEnoughItems/commit/02b187a06443b569b6a2cedce690c2d918d6b0a3) - mezz
    
*   [Remove unused BookmarkOverlayToggleEvent](https://github.com/mezz/JustEnoughItems/commit/176326dbdbe305a3b65f0052eb8038b2a07007b7) - mezz
    
*   [Remove FastItemRendering, it is no longer necessary and can cause conflicts](https://github.com/mezz/JustEnoughItems/commit/a6065cbf4cc979436f9c0ac1604f76bf43f7f07a) - mezz
    
*   [Add access to IJeiHelpers from IJeiRuntime](https://github.com/mezz/JustEnoughItems/commit/0d2cecd41bfe008298303312d2d37dd9c9d44d5f) - mezz
    
*   [Remove persistent WorldConfig and untangle filter text logic](https://github.com/mezz/JustEnoughItems/commit/b949f819cc30fad3eee85841b1e60055bdb5d793) - mezz
    
*   [GUI code refactor. Add configs for ingredient list and bookmark list layouts. (#2711)](https://github.com/mezz/JustEnoughItems/commit/212f9c745d1f7cb011c23c784caac036eb14e70c) - mezz
    
*   [Fix #2733 Better handling for /reload](https://github.com/mezz/JustEnoughItems/commit/1b95efefbcb8186bac071a71cadda869e91df3e1) - mezz
    
*   [Fix #2733 JEI doesn't update after /reload](https://github.com/mezz/JustEnoughItems/commit/48374815d0a0b88930ea2f8848f47f14405ea694) - mezz
    
*   [Clarify Github Issue Templates](https://github.com/mezz/JustEnoughItems/commit/aa3a7e7e35254aaafcf0e8de946ba88b78910d7e) - mezz
    
*   [Add github issue templates](https://github.com/mezz/JustEnoughItems/commit/135768cefd4fff4f3a44fb40224a7439849c6c35) - mezz
    
*   [Update README](https://github.com/mezz/JustEnoughItems/commit/8f85dafb492a45ae01b5b90720b18d2fda5e47fd) - mezz
    
*   [Simplify code for IngredientSorterComparators#getTagForSorting](https://github.com/mezz/JustEnoughItems/commit/6899e62c8421e3fb15c462e76708bfc01d2837b9) - mezz

### jei-1.19.4-forge-13.1.0.17.jar
### Current release 13.1.0

*   [Update gradle, forge, and fabric versions](https://github.com/mezz/JustEnoughItems/commit/48e628ceaf09095070dbdba62eeb6315a610dbf9) - mezz
    
*   [Add "Fabric-Loom-Remap" to fabric api jar manifest](https://github.com/mezz/JustEnoughItems/commit/affeac7d60425ee98c40c1b4435f6a635e4fcf22) - mezz
    
*   [Update pt_br.json (#3226)](https://github.com/mezz/JustEnoughItems/commit/f3eeef5ece92de050b48be9cb9c981c29ddd4b6f) - Tony
    
*   [Fix mismatch between display names (#3220)](https://github.com/mezz/JustEnoughItems/commit/75dec2817651beed070863c68b39042dc72e963d) - HwakYuk
    
*   [Fix #3232 Call guiEventHandler.onGuiInit only after GuiInit in Fabric](https://github.com/mezz/JustEnoughItems/commit/6fd2dc81cbc056da6d0494ec3e5bd085bca9daf9) - mezz
    
*   [Fix #3240 crash from enabling color search](https://github.com/mezz/JustEnoughItems/commit/2ca0921bd638e128cbee9c89cd2a4efa799c2381) - mezz
    
*   [Fix the text filter search box](https://github.com/mezz/JustEnoughItems/commit/3ebf026d68cfe2de3428dff35a28f793189653c4) - mezz
    
*   [remove unused call to ClientConfig](https://github.com/mezz/JustEnoughItems/commit/30b0ac70729b570e7f3ff43bcc25228d6b5bee2b) - mezz
    
*   [use consumer instead of set for search tree results](https://github.com/mezz/JustEnoughItems/commit/b5b00557f5df18c35e545e3cc8cd65ca4b975ba1) - mezz
    
*   [Fix tests](https://github.com/mezz/JustEnoughItems/commit/db5b17cb3d260ffa00667b73906167c95ea15fde) - mezz
    
*   [Clean up functional supplier code](https://github.com/mezz/JustEnoughItems/commit/957440c8f8a41950f9a525d39a727418a5d7d091) - mezz
    
*   [Add config option to lookup recipes for the fluid inside of items in addition to the item](https://github.com/mezz/JustEnoughItems/commit/76278d489072fc1d3e3477df163228ae03e6e42e) - mezz
    *   jei-client.ini -> [advanced] -> LookupFluidContents
*   [Update config files when new options are added or removed](https://github.com/mezz/JustEnoughItems/commit/f8410febaf0e88866a6f0fd8fc9717f17c7bc1f3) - mezz
    
*   [Update uk_ua.json (#3155)](https://github.com/mezz/JustEnoughItems/commit/268a3e3b9a74bc736ee4838816eec2fd08998b4d) - Un roman
    
*   [Create vi_vn.json (#3141)](https://github.com/mezz/JustEnoughItems/commit/8570c996d35344b4be47759cc58824de5168d135) - bl205vn
    
*   [Fix #3194 Make the save config thread short-lived](https://github.com/mezz/JustEnoughItems/commit/570a3054aeed76362b2116c9bf19228e046a57e0) - mezz
    
*   [Fix #3183 Too many catalysts crashes the client](https://github.com/mezz/JustEnoughItems/commit/e30d1bd7cafcaac72f20b13c26d25a6d20f1d275) - mezz
    
*   [Fix #3183 Loosen restrictions on gui placement and rectangles going offscreen](https://github.com/mezz/JustEnoughItems/commit/e2b92506c9ec5a663fdb769e7e3c6722da645ac5) - mezz
    
*   [Close #3190 Add support for ghost ingredient dragging from bookmarks](https://github.com/mezz/JustEnoughItems/commit/992edcc6196ee8a6d3f78785ece0d11118b51734) - mezz
    
*   [Make FileWatcherThread a daemon thread](https://github.com/mezz/JustEnoughItems/commit/48325818e94d1fdb5fc2cf75324524d95580efe7) - mezz
    *   This prevents it from keeping the JVM from exiting during data generation.
*   [Add JeiHelpers access to VanillaCategoryExtension (#3174)](https://github.com/mezz/JustEnoughItems/commit/2bbf6670b43d5d1221f286e0d13f4813f2df1a2b) - Davide Albiero
    
*   [Update to Minecraft 1.19.4](https://github.com/mezz/JustEnoughItems/commit/a8a0405cec5fddf28efaa320b150089b01c155dc) - mezz
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/739fde73225d006c83af22db04c5723d9c539dc7) - mezz
    
*   [Remove fabric depends statement for anything other than the core project](https://github.com/mezz/JustEnoughItems/commit/c6c115cfad74659c56cfbc293992e064f9deae0f) - mezz
    
*   [Fix #2991 Fix starting on server thread in Fabric after reload](https://github.com/mezz/JustEnoughItems/commit/b79af654216f26887d4f01e54c1a0d04011546d5) - mezz
    
*   [Fix #3145 JEI fails to load on Forge server](https://github.com/mezz/JustEnoughItems/commit/8d7aaa149bfb330af91cc46ac70a23950e4834fb) - mezz
    
*   [Improve logging of slow plugins, reduce info log spam](https://github.com/mezz/JustEnoughItems/commit/71229ebe8e605ed84300ed95fcfd8bc559f22820) - mezz
    
*   [Move some loading steps and config loading to an earlier time](https://github.com/mezz/JustEnoughItems/commit/4128bf4261e025ce10e0d8b4be70f83826f3dc1f) - mezz
    
*   [Improve config file watcher, avoid creating excess threads on world reload](https://github.com/mezz/JustEnoughItems/commit/59ef1d2817ecd351e1857b32a57adbe79da6925c) - mezz
    
*   [Move input debug logs behind a new DebugInputs config flag](https://github.com/mezz/JustEnoughItems/commit/e70a56ea2f1b42d1022e75edec08b2ec936726c0) - mezz
    
*   [Fix ghost ingredient dragging](https://github.com/mezz/JustEnoughItems/commit/464e895dae49d19e01d5704a6ff85d81b98957c4) - mezz
    
*   [Add a 1.19 config for the position of new bookmarks (#3113)](https://github.com/mezz/JustEnoughItems/commit/972c690ab94065f4a87b7731a36ff3ed371b86f8) - Waiting Idly
    
*   [Clarify version names for modrinth publishing](https://github.com/mezz/JustEnoughItems/commit/6522d3eb59663e2edd700cefe6c5e6f250570e76) - mezz
    
*   [differentiate forge and fabric versions for modrinth](https://github.com/mezz/JustEnoughItems/commit/65422bb04d43e7f9ae2e011b7c5714b23bf05148) - mezz
    
*   [List fewer changes in the changelog.md](https://github.com/mezz/JustEnoughItems/commit/acf218192a552349d80907ba96eeade15f76166e) - mezz
    
*   [Add modrinth upload task](https://github.com/mezz/JustEnoughItems/commit/9cdd9915f017e314ba7e7edf7b9dc7b09ba5eb15) - mezz
    
*   [Fix parchment mapping repo resolution for Fabric projects](https://github.com/mezz/JustEnoughItems/commit/4e1333e0019779f97434f7c0f84961eedbaf5047) - mezz
    
*   [Expose config serializers to the API](https://github.com/mezz/JustEnoughItems/commit/f7851dcc6311285266403da16d09615cb031f920) - mezz
    
*   [Expose control of the configs to the API](https://github.com/mezz/JustEnoughItems/commit/2c830f825626242f927bcd45d021949f9afef670) - mezz
    
*   [Minor cleanup](https://github.com/mezz/JustEnoughItems/commit/aed8a2e32ab97a41c377dbb5b3e6ca1945c14ee4) - mezz
    
*   [Clean up ReflectionUtil](https://github.com/mezz/JustEnoughItems/commit/657a679c775b3b716d07619c30caaf406c433dde) - mezz
    
*   [Fix #3079 Write the blacklist to file if the file does not exist yet](https://github.com/mezz/JustEnoughItems/commit/2d9a2b1431fb59eb2ed852edbeded22b84d82dfd) - mezz
    
*   [Simplify platform config helper code](https://github.com/mezz/JustEnoughItems/commit/4b504fcc2855a28fd915aa693c137781d33d0fc5) - mezz
    
*   [Speed up maven repo resolution](https://github.com/mezz/JustEnoughItems/commit/0a76f9806bc4ec0e13edda671f8ec66e7328678b) - mezz
    
*   [update to Recommended Forge for 1.19.3](https://github.com/mezz/JustEnoughItems/commit/274cffed6af95206bc78884a6e0dcd7b140ac594) - mezz
    
*   [Close #3077, Add link to open the JEI config folder when you click the settings button](https://github.com/mezz/JustEnoughItems/commit/87dbb6bbbb9a517fff3a20a61f6157f3664c0d4e) - mezz
    
*   [remove jar archive in Jenkins (it is already available in maven and curseforge)](https://github.com/mezz/JustEnoughItems/commit/ac55b73177258975d53e3c32eae2fc0ae52646e6) - mezz
    
*   [use tools.jdk for Jenkinsfile instead of JAVA_HOME env var](https://github.com/mezz/JustEnoughItems/commit/7b9827c376f936c1dc28373ef06ec40fd4673262) - mezz
    
*   [Fix #3093 Create a runtime registration step before onRuntimeAvailable](https://github.com/mezz/JustEnoughItems/commit/b271a9c052bb06aad239b718a7d5d4a42bd3bd19) - mezz
    
*   [Hide ingredients that have the tag "c:hidden_from_recipe_viewers"](https://github.com/mezz/JustEnoughItems/commit/7558039b767af2b59a5dc39d54b8ea919163ddfa) - mezz
    
*   [Update to 1.19.3](https://github.com/mezz/JustEnoughItems/commit/4430d23acac0eafb9d9f2543d1156558fda40fec) - mezz
    
*   [chore: Add Gui and Library maven publish to Jenkinsfile (#3066)](https://github.com/mezz/JustEnoughItems/commit/01f613671cb4635a0a5c23b85c40f1d52d0f3d00) - Kli Kli
    
*   [fix sources jar configuration](https://github.com/mezz/JustEnoughItems/commit/28ca460fafde8150988b8c70bf3bacd4397e7d36) - mezz
    
*   [fix publishing of sources jars for Gui and Library](https://github.com/mezz/JustEnoughItems/commit/ca717007b3ecd35e6abf5c6b08aa82d3a4d4134c) - mezz
    
*   [publish Library and Gui jars to maven](https://github.com/mezz/JustEnoughItems/commit/66de59b65f548c2ae2a872f6a0a698d0bd41fe4b) - mezz
    
*   [Fix publishing the Core artifact](https://github.com/mezz/JustEnoughItems/commit/38fa7cbebda074de30cd19d85069d75457206695) - mezz
    
*   [Code cleanup](https://github.com/mezz/JustEnoughItems/commit/c83958436399abdc3581b16d0d73df56ea555073) - mezz
    
*   [Split up the GUI code and add API methods so that the GUI mostly depends on the API (#3058)](https://github.com/mezz/JustEnoughItems/commit/6476d975359e1c2ff517d94b58ff2dcc7bf780ae) - James Mitchell
    
*   [update pt_br (#3040)](https://github.com/mezz/JustEnoughItems/commit/8f79ba8f1b63799db85415fe82147eef6cd25908) - FITFC
    
*   [log gui change on debug mode only (#3052)](https://github.com/mezz/JustEnoughItems/commit/042cbc9463d10651cf6e6cd4bf1cc17a0ddd5f16) - Jonathan Colmenares
    
*   [Mark 1.19.2 builds as betas](https://github.com/mezz/JustEnoughItems/commit/bd7a56faccd62e5dfc10e22c8855a338f37a20c5) - mezz
    
*   [Fix hiding items from recipes via the API](https://github.com/mezz/JustEnoughItems/commit/b7f3e66e109fb467337aa78e56a99eadbfff0237) - mezz
    
*   [Reduce memory used by an adversarial PacketRecipeTransfer](https://github.com/mezz/JustEnoughItems/commit/f128c3b3dbfcbbbfe965f78ff85f514f66c4fa19) - mezz
    
*   [Split drag handling from input handling, add debug mode logs for input handling](https://github.com/mezz/JustEnoughItems/commit/9992840db5ad4a6c52f8e64bf4d179042c8e42cd) - mezz
    
*   [#3018 Fix crashing VanillaPlugin on invalid brewing recipes](https://github.com/mezz/JustEnoughItems/commit/1c2dd1a9402607ac1a2861862e5a723924aa13fe) - mezz
    
*   [fix internal javadoc](https://github.com/mezz/JustEnoughItems/commit/e8312ddd16a0e1ce1b0f008af2494f53dea0962d) - mezz
    
*   [#3022 Only delete items on left-click](https://github.com/mezz/JustEnoughItems/commit/5252f70c55bcef8bdf474013eacb2625375ec740) - mezz
    
*   [#3022 Fix picking up multiple items with the mouse in cheat mode](https://github.com/mezz/JustEnoughItems/commit/1f93f82bfc6bac8b3a90c06c1a4f26c53ea40b6b) - mezz
    
*   [Ensure packets are handled on the correct thread](https://github.com/mezz/JustEnoughItems/commit/f758d0d4c9b0568091253dfc7fbb4b0e2ec55dff) - mezz
    
*   [add IJeiHelpers#getRecipeType to help addon mods](https://github.com/mezz/JustEnoughItems/commit/38096675e85d6ebc61109da3b21b24c6bf4f5bbc) - mezz
    
*   [Fix #2993 Reduce recipe validation errors to debug logs](https://github.com/mezz/JustEnoughItems/commit/9a8f8dd61a6fdd2875d7d685dd61f9f3e1e198b2) - mezz
    
*   [Fix #3014 Saving edit-mode changes to file fails](https://github.com/mezz/JustEnoughItems/commit/97bfb62ebbdbb092f62f75b4970998899a85a09e) - mezz
    
*   [fix ConfigSerializer sorting for config categories](https://github.com/mezz/JustEnoughItems/commit/d881e68ebec0d4dca6b22b17999a628e1d267de2) - mezz
    
*   [Fix #3009 returning negative X/Y values from getGuiExtraAreas() breaks filter text selection](https://github.com/mezz/JustEnoughItems/commit/0364eed6b0823a9eb2b9d695336a287a695a8cb7) - mezz
    
*   [Improve performance of checking fuels on Fabric (#2997)](https://github.com/mezz/JustEnoughItems/commit/cab76d8154e70206bb7441d5ec6ea2cc497eed57) - Technici4n
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/a0410148a9984b38c951a83ac3ec356ae9bea2fb) - mezz
    
*   [Minor cleanup in config code](https://github.com/mezz/JustEnoughItems/commit/79c34fcc1d16699389d5015d284bc16e8cbe3da1) - mezz
    
*   [Prefer more abundant items first for recipe transfer (#2987)](https://github.com/mezz/JustEnoughItems/commit/56f7b86fc5fc4b43b640b09892e6b0ccfef0500b) - DBotThePony
    
*   [Clean up unused imports](https://github.com/mezz/JustEnoughItems/commit/2e4d4f570edfc6056cbd1ebae1efbae3e24ff7be) - mezz
    
*   [Fix #2968 Add Fabric support for Potion recipes](https://github.com/mezz/JustEnoughItems/commit/730f667a4107b2b33a9c10e43e3870bde7a11c3b) - mezz
    
*   [Close #2963 Add catalogueImageIcon](https://github.com/mezz/JustEnoughItems/commit/5662c0bf93c16829c6838d3ef5bfbb7ff951cdd1) - mezz
    
*   [Fix #2978 fix server-side error logs from platform handler when deleting items](https://github.com/mezz/JustEnoughItems/commit/a3dec98206575147cc45b01adc585ee8f5e56768) - mezz
    
*   [Fix #2817 Expose more RecipeTransfer utils in IRecipeTransferHandlerHelper](https://github.com/mezz/JustEnoughItems/commit/13235737ae7d8e11308936b80f50f58ffdc3ff1f) - mezz
    
*   [Close #2795 Add API to get a RecipeType from a ResourceLocation](https://github.com/mezz/JustEnoughItems/commit/b787b86ecbccaa2b2e65ec012b8b463592224c45) - mezz
    
*   [Fix #2976 use FluidVariantRendering for Fabric fluids with compound tags](https://github.com/mezz/JustEnoughItems/commit/f60ba011e84fb87b17295eefd2a48521c9503881) - mezz
    
*   [Fix #2195 Anvil text "Enchantment Cost" has incorrect shadows](https://github.com/mezz/JustEnoughItems/commit/60e90315a4d326f079334aea1aab964268614e0c) - mezz
    
*   [Close #1579 Allow using Screen with IGlobalGuiHandler](https://github.com/mezz/JustEnoughItems/commit/a3ffb965a60ed28ad344a253e90588af89efd917) - mezz
    
*   [Close #391 Add shield decoration recipes](https://github.com/mezz/JustEnoughItems/commit/292c104ac21da757862ae8111ccd92ebd4f641bf) - mezz
    
*   [Make the `Show Recipes` tooltip optional in the API (#2972)](https://github.com/mezz/JustEnoughItems/commit/d28d213b0bc9c06aeade519019c57c577c1b337a) - Relentless
    
*   [Allow recipe transfer errors to set button color highlight (#2971)](https://github.com/mezz/JustEnoughItems/commit/c56c409b138645af2ffa814a99b345c930036e67) - Technici4n
    
*   [Fix #2959 Update to Fabric API 0.60](https://github.com/mezz/JustEnoughItems/commit/efbabfdba7af8454f56a30ea2440f54f9930c92c) - mezz
    
*   [Close #2951 Update recipe transfer handlers every tick](https://github.com/mezz/JustEnoughItems/commit/21bcb20ac61acda82c786bc9ff3226845e53b8ce) - mezz
    
*   [Github: increase stale action's operations per run](https://github.com/mezz/JustEnoughItems/commit/def1bfdcba3af124de6fe78fd23ed39c7f1d41a6) - mezz
    
*   [Github: do not comment when locking closed issues over 1 year old](https://github.com/mezz/JustEnoughItems/commit/639568c2aee5ea142e74ca63630c7f5867d7da59) - mezz
    
*   [Automatically lock Github issues older than 1 year old](https://github.com/mezz/JustEnoughItems/commit/225f4c9ef583d70592b7eab31f8a60c3a14d2cab) - mezz
    
*   [enable automatic marking and closing of stale issues](https://github.com/mezz/JustEnoughItems/commit/65a5f23de4fb4ff573d3e288dafbd02cb8da9ea6) - mezz
    
*   [start marking stale issues starting with the oldest](https://github.com/mezz/JustEnoughItems/commit/ebc5ed5b2e6c237e4733bdbddff4f921896a5a7a) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/49da070d0ae2318ee672422eff4566d8ae2ad2b7) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/e696d893dbc5cb9a662c94958d6d1c9757d162ef) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/2a596077deab20fdcb01c74bdd869279a92ef2c9) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/571cfac14933fcedf38c8adfdfb2af312f1c10d5) - mezz
    
*   [Add github stale workflow action in dry-run mode](https://github.com/mezz/JustEnoughItems/commit/c7ae5445cf44fc0a107b7b2b308757fa56848436) - mezz
    
*   [Update dependencies for Minecraft 1.19.2](https://github.com/mezz/JustEnoughItems/commit/c0859d6ac6b798bcc3d96338109f8ab976ea16c5) - mezz
    
*   [Improve javadocs for IIngredientAcceptor#addFluidStack](https://github.com/mezz/JustEnoughItems/commit/90b37d06031c8e113d51e747e3f532f4b9ed047b) - mezz
    
*   [Fix #2939 Crash on Forge when typing](https://github.com/mezz/JustEnoughItems/commit/4679f2e05ebabebde6b14ad445e39319aea689a7) - mezz
    
*   [Fix #2899 Cheat mode not working when connected to dedicated server](https://github.com/mezz/JustEnoughItems/commit/e6ef3fca950b59aa2c716c75dc6aac612470058e) - mezz
    
*   [Clean up unused method](https://github.com/mezz/JustEnoughItems/commit/acfa093e0bbf67d3f1faae56d24f5762c450fcfc) - mezz
    
*   [Update for Minecraft 1.19.1](https://github.com/mezz/JustEnoughItems/commit/16116299c676183dee0f63380a6a09a64d754359) - mezz
    
*   [Minor code cleanup](https://github.com/mezz/JustEnoughItems/commit/91527b7d5fae747455ed7630915c088e3fe0f602) - mezz
    
*   [Fix #2875 Fix recipe slot highlight and RecipeTransferErrorTooltip display. (#2922)](https://github.com/mezz/JustEnoughItems/commit/ec010fbd494f5b7c4a0514f6bdf2f20dc3464958) - vfyjxf
    
*   [Update Forge version used in the dev environment](https://github.com/mezz/JustEnoughItems/commit/00ee4988895f4eb2c177b22a252abe7e2e6bcd8e) - mezz
    
*   [Add convenience functions to reduce the need for using VanillaTypes.ITEM_STACK](https://github.com/mezz/JustEnoughItems/commit/66a18ccaccf226c3a21863f4f96b30c564e9a9bb) - mezz
    
*   [Add Kazakh translation (#2912)](https://github.com/mezz/JustEnoughItems/commit/4f0c07ea66be0c385ed41d363e78fff19c7236ef) - AlibekAytjan
    
*   [Update bg_bg.json (#2910)](https://github.com/mezz/JustEnoughItems/commit/3d3f29bc99d05e8fe6a8b988f57a0d5cc54c38a5) - Deyan Nikolov
    
*   [Create convenience function for adding a fluid ingredient to IIngredientAcceptor](https://github.com/mezz/JustEnoughItems/commit/dfbe89487d70eaa2364199916ab9afed8815f586) - mezz
    
*   [Close #2901 Make Crafting Grid Helper return the slots it creates](https://github.com/mezz/JustEnoughItems/commit/0645b00cf13fa60c3a89e905c02fa146c543359f) - mezz
    
*   [Fix #2898 Expose "show uses/recipes" key bindings in the API](https://github.com/mezz/JustEnoughItems/commit/c7f4c07d864ab21e2bc4c2ed23f87942506b8dbf) - mezz
    
*   [Fix #2897 Hovering over recipe tabs can ignore key inputs](https://github.com/mezz/JustEnoughItems/commit/96f611776ba34ad0166c1589d3cd05a9da32e171) - mezz
    
*   [Fix #2873 Use the correct mouseReleased call to finish a click on Fabric](https://github.com/mezz/JustEnoughItems/commit/1e13ab99ba7aaf2452377e8f748bcfc1abcd3689) - mezz
    
*   [Fix #2871 Fix text field synchronization from mods via the API](https://github.com/mezz/JustEnoughItems/commit/30fb27f2dfa48647d176e76f830925b097c0214b) - mezz
    
*   [Fix #2873 Ghost ingredient handling on Fabric](https://github.com/mezz/JustEnoughItems/commit/b6813e7b3a70606841b8fdb6a80252a92e5c8fac) - mezz
    
*   [Update Polish translation (#2874)](https://github.com/mezz/JustEnoughItems/commit/dde86189738a28735072ccfa3ee8e425b01c94df) - Greg-21
    
*   [Use an accesswidener to access fields with Fabric](https://github.com/mezz/JustEnoughItems/commit/de821ed60b845e5d824f2f8a9edf705f7846b50b) - mezz
    
*   [update parchment mappings](https://github.com/mezz/JustEnoughItems/commit/fdf39f73debb75a0ca37bcc3c7c0efca4394f8f2) - mezz
    
*   [Fix #2839 Improve widget focusing behavior with the search box](https://github.com/mezz/JustEnoughItems/commit/89fa05dc4ec1559c8692bfa169999baa96efaab6) - mezz
    
*   [Fix #2890 Protect against broken recipe transfer handlers crashing](https://github.com/mezz/JustEnoughItems/commit/4f991ab7b552256c01009993454f4f9c76a46865) - mezz
    
*   [Clean up unused imports](https://github.com/mezz/JustEnoughItems/commit/20bbf2808923966169b577deba8aaf5097603b6a) - mezz
    
*   [Update to support the breaking changes in forge (#2886)](https://github.com/mezz/JustEnoughItems/commit/9669b94bf94410ba0d621b43bd709e3f2cbd0de9) - Sara Freimer
    
*   [clean up configs slightly](https://github.com/mezz/JustEnoughItems/commit/e5a34c9b6921a24e09603038f190a3df141facb1) - mezz
    
*   [Cleanup](https://github.com/mezz/JustEnoughItems/commit/9dc14b1ceeb086a5332f73584845e5650325ac78) - mezz
    
*   [update parchment version](https://github.com/mezz/JustEnoughItems/commit/4dd6e22d9fabb1529d463ce0edb59e4c2b299c5d) - mezz
    
*   [Update dev forge and mappings](https://github.com/mezz/JustEnoughItems/commit/32afb34a1a11fee0d7f656b4b846fb43c3a8e191) - mezz
    
*   [set gradle to no longer use configure-on-demand, it breaks ForgeGradle](https://github.com/mezz/JustEnoughItems/commit/73ed0fef50bc1209548adb740f350ae991764fe2) - mezz
    
*   [Remove old createFocusLink method](https://github.com/mezz/JustEnoughItems/commit/071c078a733c1d08d45646188ba9506eab910174) - mezz
    
*   [Fix improper property use causing invalid dependency POM (#2854)](https://github.com/mezz/JustEnoughItems/commit/ad7fd38086d3e3c970813edb577a4a9d7b3a1686) - sciwhiz12
    *   The archivesName property of BasePluginExtension is a Property<String>.
    *   The default implementation of toString() for a Property is to print out
    *   their name and owning object, and not the toString() of their contents.
    *   This meant that passing archivesName to Node#appendNode as a value,
    *   which calls toString() on it to make it into a String, results in e.g.
    *   `extension 'base' property 'archivesName'` instead of the expected
    *   value of e.g. `jei-1.19-common-api`.
    *   The simple fix is to call Property#get() on archivesName to get its
    *   actual value and pass that on as the node value.
*   [Fix #2851 Protect against crash from broken fluids](https://github.com/mezz/JustEnoughItems/commit/edc5e7c22e0aac91a4424571525b6df85abafa53) - mezz
    
*   [Update to changes in Forge's fluid API (#2852)](https://github.com/mezz/JustEnoughItems/commit/cea569ee6a20589f9b7b0ccd037d31f5e8ddbb11) - Sara Freimer
    
*   [version 11](https://github.com/mezz/JustEnoughItems/commit/b7158ba5b7bc16f9e5f1efbe927fe8c88515cac8) - mezz
    
*   [Remove deprecated methods](https://github.com/mezz/JustEnoughItems/commit/8a65df7e56a1c00d4dd4153260902e4f26a7401a) - mezz
    
*   [Update for Minecraft 1.19](https://github.com/mezz/JustEnoughItems/commit/5b2e71f547cd13cd48de4d999c4f56bddfc421bb) - mezz
    
*   [JEI 10. Add Fabric support. Refactor into a multi-project (#2842)](https://github.com/mezz/JustEnoughItems/commit/530ef6c8d604370bef850f3656a28beab56cbfba) - mezz
    
*   [Update sv_se.json (#2836)](https://github.com/mezz/JustEnoughItems/commit/d46164fce29506569f7e3debdbab099439e042d6) - A. Regnander
    
*   [Updated Russian Translation (#2799)](https://github.com/mezz/JustEnoughItems/commit/d12ab9560bbe57681de1de20bca876bc9556f10e) - DrHesperus
    
*   [Fix #2812 Add a keybind for the key to exit a recipe screen to the inventory](https://github.com/mezz/JustEnoughItems/commit/3d1852a1f713fb79260a6670a0551437f8a536db) - mezz
    
*   [Allow focuses to match multiple ingredients in a recipe slot](https://github.com/mezz/JustEnoughItems/commit/efd8ef5bbf45e0c73c5d6285163fe5dc6f827323) - mezz
    
*   [Fix #2790 Recipes are listed twice when checking the uses of an ingredient that is also a catalyst](https://github.com/mezz/JustEnoughItems/commit/d13676b136f61716dbe8abfa43589a9ef2d1baa3) - mezz
    
*   [deprecate some api methods that depend on forge-specific code](https://github.com/mezz/JustEnoughItems/commit/e0fa409e74153d687d901fd3dba40957a02099cd) - mezz
    
*   [Create IIngredientTypeWithSubtypes for generic handling of subtypes in ingredients](https://github.com/mezz/JustEnoughItems/commit/01fd9c02bb0b2348d988452ca5edd8ccbba704cb) - mezz
    
*   [Move config screen into platform service](https://github.com/mezz/JustEnoughItems/commit/fadb4d9741884d1dec0201d541f04fbe4f764f6f) - mezz
    
*   [move forge configs into forge folder](https://github.com/mezz/JustEnoughItems/commit/981e463c97f9a3c89bed3fb6991bc1c76b334663) - mezz
    
*   [Add platform server helper](https://github.com/mezz/JustEnoughItems/commit/f4ebadd513a8ee7d628c4b3e56de3bb2293e6197) - mezz
    
*   [Use service to get particle icons](https://github.com/mezz/JustEnoughItems/commit/c97b9d3db9ef1e05195804a9caa618d9bdccefdc) - mezz
    
*   [Organize packet data into data and context](https://github.com/mezz/JustEnoughItems/commit/2b04f090497fb4cc3a54c0db4c5c9fc200a4a7b0) - mezz
    
*   [Update es_es.json (#2782)](https://github.com/mezz/JustEnoughItems/commit/0263f7090ff197d026c404cea98531b81bf8b301) - zeedif
    
*   [Fix #2783 Attempted to load class net/minecraft/client/player/LocalPlayer for invalid dist DEDICATED_SERVER](https://github.com/mezz/JustEnoughItems/commit/db613c8519cdbcbb4b0d66857b0d5dae3998c7ff) - mezz
    
*   [Clean up ErrorUtil](https://github.com/mezz/JustEnoughItems/commit/61758a12034f85b4829bb00b45d0b3b63fac123b) - mezz
    
*   [Move registry access to a service loader](https://github.com/mezz/JustEnoughItems/commit/35c1706cfe8a4fcc0f1d68f691917b1e268c984f) - mezz
    
*   [Update it_it.json (#2785)](https://github.com/mezz/JustEnoughItems/commit/3a008930cb32dc33931468be00a1e4003d1e464d) - Andrea Costa
    
*   [Protect against mod crashes when checking for enchantable items](https://github.com/mezz/JustEnoughItems/commit/ac26e8c7bd5f4727e84883a85026bd66a0b2fbf7) - mezz
    
*   [Add access to IIngredientManager from recipe catalyst registration](https://github.com/mezz/JustEnoughItems/commit/808372d990fb311eb83d89d27d111d6fdce6d92d) - mezz
    
*   [organize some network code into subprojects](https://github.com/mezz/JustEnoughItems/commit/b709cc36179fc61ea627f995335d24b0bac01216) - mezz
    
*   [Refactor server connection logic into its own class](https://github.com/mezz/JustEnoughItems/commit/98abba6b2e2b75f716978305268555e533b5402d) - mezz
    
*   [Organize some config files into subprojects](https://github.com/mezz/JustEnoughItems/commit/2c5229fca155e5655e55e4d81ed3c1e5d594d082) - mezz
    
*   [Move Translator to common.util](https://github.com/mezz/JustEnoughItems/commit/17927c0a20902319492336642484239284bc71ac) - mezz
    
*   [Include all test results in Jenkins](https://github.com/mezz/JustEnoughItems/commit/880be88737c4be9d5d73c9cf5cd7e96155307124) - mezz
    
*   [Clean up ReflectionUtil](https://github.com/mezz/JustEnoughItems/commit/5e692c7ca7168999c4a7a6105b5653917e3ad4dd) - mezz
    
*   [Move more code into the Core and Common subprojects](https://github.com/mezz/JustEnoughItems/commit/2112d63b268bce244ab6e05c9b1fc8f23dc484d8) - mezz
    
*   [Clean up ColorNamer code](https://github.com/mezz/JustEnoughItems/commit/c784e6a20312ef31e081210a3e185e2a30c13046) - mezz
    
*   [Move search logic into core subproject](https://github.com/mezz/JustEnoughItems/commit/847fb20ab1590b7e3905c49b5fe4fb7bdf1e110e) - mezz
    
*   [Create "Core" subproject for code that does not depend on Minecraft](https://github.com/mezz/JustEnoughItems/commit/d005fda4e2ea1f0a446634307654b907913d7a26) - mezz
    
*   [Fix #2756 Fuel recipes with high values can overflow the recipe background](https://github.com/mezz/JustEnoughItems/commit/8edf068e17646debaf3f095d32a736b172448614) - mezz
    
*   [Close #2771 Allow IRecipeTransferInfo to return a transfer error if it can't handle the recipe](https://github.com/mezz/JustEnoughItems/commit/8b62850a0056c2fbc2f481eb0993f3de259b7ac7) - mezz
    
*   [Improve startup code to be more resilient to modded bugs](https://github.com/mezz/JustEnoughItems/commit/5242ae9ffbdb09ebf46597f750839bba5288c6e4) - mezz
    
*   [Fix bookmark config creation](https://github.com/mezz/JustEnoughItems/commit/bfcd7ff664a66f8ceac0d9141c5ef0ecfa549b13) - mezz
    
*   [Exclude duplicate files from output jars](https://github.com/mezz/JustEnoughItems/commit/be3fad8df73eab0b98a98f51f09b45b779520a5e) - mezz
    
*   [Isolate changelog plugin in a subproject](https://github.com/mezz/JustEnoughItems/commit/daed974fd0cf47156a508af008ad4b53bd0b853d) - mezz
    
*   [Constrain gitchangelog asm version](https://github.com/mezz/JustEnoughItems/commit/a314f03808e4532e30901c418a294147bc172f0a) - mezz
    
*   [fix asm coords to org.ow2.asm:asm](https://github.com/mezz/JustEnoughItems/commit/0bc8a0b48dee4b333d62c1ae6344cf7c6984f27e) - mezz
    
*   [add comment for asm constraint](https://github.com/mezz/JustEnoughItems/commit/2456758d6acf05493bfb2432daa00d67d0e08560) - mezz
    
*   [Try constraining asm to the right version](https://github.com/mezz/JustEnoughItems/commit/4b922335cd9eced04341fba7be5add4a8c3e9477) - mezz
    
*   [Update dev Forge version](https://github.com/mezz/JustEnoughItems/commit/3e7e106e1f3974ed311bdde7670ccd60d312eee6) - mezz
    
*   [Organize internal code into a multiproject (#2772)](https://github.com/mezz/JustEnoughItems/commit/5aa1ae16fe920d7c4159eb3448d5ec8bb8891ec8) - mezz
    
*   [Update forge maven artifact id](https://github.com/mezz/JustEnoughItems/commit/04f24d67c0b7a23c517c55be2d56aa8a2758e5e9) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/5633ee657519b14567cd30ba53f73e97194a0648) - mezz
    
*   [update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/95ee3bff746fcb5ff18f8275564d1a1b46947add) - mezz
    
*   [update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/b2d3d6a756847913b1ff48d38f0c459a0b26d0c7) - mezz
    
*   [Make the give notification message work for any player that has a server](https://github.com/mezz/JustEnoughItems/commit/9db2be0b4ed1dead1c2ea167bc07202b4ffc4dab) - mezz
    
*   [fix changelog path](https://github.com/mezz/JustEnoughItems/commit/62b2f40543ee48d3006d043b4f77522b1fa1b7e1) - mezz
    
*   [fix project dependency](https://github.com/mezz/JustEnoughItems/commit/f4a08d34177c3b0e3ed5a7bf6f877244e7f1611a) - mezz
    
*   [Ensure ProcessResources updates on every new version](https://github.com/mezz/JustEnoughItems/commit/2bfe7a815be61756a3ecf6f275f2afbb777ad1ba) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/b0a994494433bd42b065578b8d4fa76608734190) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/cde4010b43e77fbc72b497d3426dd2044ec271c4) - mezz
    
*   [Organize project code](https://github.com/mezz/JustEnoughItems/commit/dd289c912d8f52da59c155850baa4c1e0aa5e9ce) - mezz
    
*   [Fix gradle project properties](https://github.com/mezz/JustEnoughItems/commit/56b5da3a8d94f2e02b7489d05bd878920b4ff101) - mezz
    
*   [Use net.minecraft.MethodsReturnNonnullByDefault](https://github.com/mezz/JustEnoughItems/commit/ebd3cbcbcce0000851fdb797c542e25114bcda69) - mezz
    
*   [Update Forge in dev environment](https://github.com/mezz/JustEnoughItems/commit/9025bb694be7c5d5e70f4e128989b1d1d18a4df4) - mezz
    
*   [Fix #2751 Crash when MC window becomes too narrow](https://github.com/mezz/JustEnoughItems/commit/84142187699e30c29295a7aa86dd44b96271eefe) - mezz
    
*   [Update Jenkinsfile to always run tests](https://github.com/mezz/JustEnoughItems/commit/543ad9baeb7c1316246b44cee32c1b903e4a7304) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/5073f9659f206f45a1c30b10eb0bb56646c4f7fa) - mezz
    
*   [Update Jenkinsfile for publishing to CurseForge](https://github.com/mezz/JustEnoughItems/commit/69af776afc6f9e53fb17008215a85886500aa8eb) - mezz
    
*   [Migrate build.gradle to build.gradle.kts (#2761)](https://github.com/mezz/JustEnoughItems/commit/ac9cbc0f58c86c85cc14370db4156922e861c982) - mezz
    *   Co-authored-by: Jared <jaredlll08@gmail.com>
*   [Fix #2754 Crash when GUI extends offscreen](https://github.com/mezz/JustEnoughItems/commit/bb7eec72a41a0c932f71a4f591b6d8977f7d031b) - mezz
    
*   [Fix #2752 Crash on gui slots that are to the left or above the gui](https://github.com/mezz/JustEnoughItems/commit/98e5ead592a85f084a9e840fd5e4125e3c8df4cc) - mezz
    
*   [Display hidden ingredients in a recipe if there are no other ingredients to show](https://github.com/mezz/JustEnoughItems/commit/b8903a1777f1dc939f2a0476f412a142ef7d6f70) - mezz
    
*   [Allow focus linking with invisible ingredients](https://github.com/mezz/JustEnoughItems/commit/ae69541a7cd44362f77c30c88e7d2c58fc5c1d2b) - mezz
    
*   [Fix debug recipes](https://github.com/mezz/JustEnoughItems/commit/61d1ebe55676727c0572eaac14367943a18650c3) - mezz
    
*   [update JUnit](https://github.com/mezz/JustEnoughItems/commit/1c12ab5031333d6aeb0577869b4fc235c83fb922) - mezz
    
*   [Clean up build script](https://github.com/mezz/JustEnoughItems/commit/02b3939453a8e7511fd4dd95034ef19bf05d05a1) - mezz
    
*   [Run Spotless cleanup](https://github.com/mezz/JustEnoughItems/commit/d281b8446a7691e579e73998bf75cb9e2c70b849) - mezz
    
*   [Fix bookmark config directory creation](https://github.com/mezz/JustEnoughItems/commit/1a1db97ecc33d282477e14536ffdf49baae23b13) - mezz
    
*   [Fix #2744 Workaround for Optifine bug](https://github.com/mezz/JustEnoughItems/commit/dcfab2e4f61c1834971f4a34718f7f426199aded) - mezz
    
*   [Fix #2744 Workaround for Optifine bug](https://github.com/mezz/JustEnoughItems/commit/d925b2ef8acf8db3226fcc6369236f90c911b1b0) - mezz
    
*   [Clean up some tags code](https://github.com/mezz/JustEnoughItems/commit/08ef7e1d958219eab93c714fb735fc29a56036db) - mezz
    
*   [suppress more deprecation warnings](https://github.com/mezz/JustEnoughItems/commit/252b96d063a3bea16ab5307a8f38182dafc4f475) - mezz
    
*   [Use Parchment mappings in dev environment](https://github.com/mezz/JustEnoughItems/commit/2f4ecf9de17ab907084fc1b269e8e57e7ba5637d) - mezz
    
*   [Make potion effects render in compact mode when JEI is open](https://github.com/mezz/JustEnoughItems/commit/982a1459a66271bf29776eb3b0e51c7fda471bec) - mezz
    
*   [add more client run configurations in developer environment](https://github.com/mezz/JustEnoughItems/commit/95e2045c572bb8335899a57ec61a5b37cae03c8b) - mezz
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/f2c87e1d88e42205b5da342f513dc78a7f15fa99) - mezz
    
*   [Link anvil recipe input/output focuses](https://github.com/mezz/JustEnoughItems/commit/09f7e93b47979253fa419b1d1d6024182d3ebaa1) - mezz
    
*   [Code cleanup](https://github.com/mezz/JustEnoughItems/commit/fcaba7451f0f7663ad850c1f14a4c142bba6999e) - mezz
    
*   [Fix logic when there are broken recipe layouts](https://github.com/mezz/JustEnoughItems/commit/490e92d46f9d20c6024f38efd2bf52e10691cf31) - mezz
    
*   [Minor code cleanup](https://github.com/mezz/JustEnoughItems/commit/b06f757bf00a965a2c001e59d06f628d3f6d6502) - mezz
    
*   [Fix type of IRecipeLookup#limitFocus](https://github.com/mezz/JustEnoughItems/commit/e7e6055d8d543206ad0807b83f14a30c58e7c093) - mezz
    
*   [Refactor: Replace IRecipeCategory.getUid() ResourceLocation with RecipeType](https://github.com/mezz/JustEnoughItems/commit/4b0270bbced63113067b0b091fb1e3b3e394dbf9) - mezz
    
*   [Mark ISlowRenderItem as deprecated](https://github.com/mezz/JustEnoughItems/commit/4c9a54e9ef57abb0ab84f9b42bd8afcbbfce08ca) - mezz
    
*   [Minor cleanup](https://github.com/mezz/JustEnoughItems/commit/02b187a06443b569b6a2cedce690c2d918d6b0a3) - mezz
    
*   [Remove unused BookmarkOverlayToggleEvent](https://github.com/mezz/JustEnoughItems/commit/176326dbdbe305a3b65f0052eb8038b2a07007b7) - mezz
    
*   [Remove FastItemRendering, it is no longer necessary and can cause conflicts](https://github.com/mezz/JustEnoughItems/commit/a6065cbf4cc979436f9c0ac1604f76bf43f7f07a) - mezz
    
*   [Add access to IJeiHelpers from IJeiRuntime](https://github.com/mezz/JustEnoughItems/commit/0d2cecd41bfe008298303312d2d37dd9c9d44d5f) - mezz
    
*   [Remove persistent WorldConfig and untangle filter text logic](https://github.com/mezz/JustEnoughItems/commit/b949f819cc30fad3eee85841b1e60055bdb5d793) - mezz
    
*   [GUI code refactor. Add configs for ingredient list and bookmark list layouts. (#2711)](https://github.com/mezz/JustEnoughItems/commit/212f9c745d1f7cb011c23c784caac036eb14e70c) - mezz
    
*   [Fix #2733 Better handling for /reload](https://github.com/mezz/JustEnoughItems/commit/1b95efefbcb8186bac071a71cadda869e91df3e1) - mezz
    
*   [Fix #2733 JEI doesn't update after /reload](https://github.com/mezz/JustEnoughItems/commit/48374815d0a0b88930ea2f8848f47f14405ea694) - mezz
    
*   [Clarify Github Issue Templates](https://github.com/mezz/JustEnoughItems/commit/aa3a7e7e35254aaafcf0e8de946ba88b78910d7e) - mezz
    
*   [Add github issue templates](https://github.com/mezz/JustEnoughItems/commit/135768cefd4fff4f3a44fb40224a7439849c6c35) - mezz
    
*   [Update README](https://github.com/mezz/JustEnoughItems/commit/8f85dafb492a45ae01b5b90720b18d2fda5e47fd) - mezz
    
*   [Simplify code for IngredientSorterComparators#getTagForSorting](https://github.com/mezz/JustEnoughItems/commit/6899e62c8421e3fb15c462e76708bfc01d2837b9) - mezz

### jei-1.19.2-forge-11.6.0.1020.jar
### Current release 11.6.0

*   [run spotless](https://github.com/mezz/JustEnoughItems/commit/fa73465828dbade643000f5cb641d1667146c8c1) - mezz
    
*   [Update gradle, forge, and fabric versions](https://github.com/mezz/JustEnoughItems/commit/502d686aee290866399eb276037315765be186fa) - mezz
    
*   [Close #3320 Search default block tags for items with blocks in them](https://github.com/mezz/JustEnoughItems/commit/0d64e3aa4c27ce056bef113a63ff295db8694eba) - mezz
    
*   [Fix error handling when a recipe manager plugin crashes](https://github.com/mezz/JustEnoughItems/commit/c24d85b39a8704f4221e306be064e05214bdfcfe) - mezz
    
*   [turn spaces to tabs consistently with spotless rules](https://github.com/mezz/JustEnoughItems/commit/119aba128828f02b77c7bac900c4d1b0ec7e6848) - mezz
    
*   [update spotless plugin](https://github.com/mezz/JustEnoughItems/commit/3bd5d55df3d0bdcfa09cd639133bb193ec5eafa3) - mezz
    
*   [increase ram given to gradle](https://github.com/mezz/JustEnoughItems/commit/cd7bc9ee368e072d8d29f8e43f5ace96fdff7889) - mezz
    
*   [Fix copying recipe id so that it doesn't just copy the first one displayed](https://github.com/mezz/JustEnoughItems/commit/3b3a418fccc35f07a40625827447230f5f32a842) - mezz
    
*   [Add "Fabric-Loom-Remap" to fabric api jar manifest](https://github.com/mezz/JustEnoughItems/commit/e29a94c2d1bd9baf8984ee717a4fb8c8e49105b5) - mezz
    
*   [Add modrinth upload task](https://github.com/mezz/JustEnoughItems/commit/3d6494bdae2346db583fe7c5f424c6434794bc41) - mezz
    
*   [Close #3190 Add support for ghost ingredient dragging from bookmarks](https://github.com/mezz/JustEnoughItems/commit/d11e1491f6d4945151536edb5e37b57a3e8439aa) - mezz
    
*   [Make FileWatcherThread a daemon thread](https://github.com/mezz/JustEnoughItems/commit/f1df855db8766961f7f66fe2a146c6c02e8bbd65) - mezz
    *   This prevents it from keeping the JVM from exiting during data generation.
*   [Remove fabric depends statement for anything other than the core project](https://github.com/mezz/JustEnoughItems/commit/b69b1cd8bb1729bc37e6ae57e4af88a689fd6200) - mezz
    
*   [Fix #2991 Fix starting on server thread in Fabric after reload](https://github.com/mezz/JustEnoughItems/commit/caa72a5471117a83c8cd25e00722b317f9a78980) - mezz
    
*   [Update Fabric version in dev environment](https://github.com/mezz/JustEnoughItems/commit/cbdb368862e9c3c6a3320feba4d84cf567689f21) - mezz
    
*   [Improve config file watcher, avoid creating excess threads on world reload](https://github.com/mezz/JustEnoughItems/commit/33a6b1fadf01cc6f77a44c5c086a73a6b9e03bda) - mezz
    
*   [Move input debug logs behind a new DebugInputs config flag](https://github.com/mezz/JustEnoughItems/commit/a18dcf94aa7b9b849e4f23e6a4211bee7d14622f) - mezz
    
*   [Fix ghost ingredient dragging](https://github.com/mezz/JustEnoughItems/commit/372f9e0bbcd0a9d921520af97aeaff0445d6a031) - mezz
    
*   [Add a 1.19 config for the position of new bookmarks (#3113)](https://github.com/mezz/JustEnoughItems/commit/fffffc610db8e75a5bd50eab851c97a1b40050bd) - Waiting Idly
    
*   [Fix #3079 Write the blacklist to file if the file does not exist yet](https://github.com/mezz/JustEnoughItems/commit/15bbaa4f8db1d77cf7ddd99178ffcd22dc20bd89) - mezz
    
*   [Simplify platform config helper code](https://github.com/mezz/JustEnoughItems/commit/e6ea3b4ef72737f927939682ae9b5c90c5d980f5) - mezz
    
*   [Close #3077, Add link to open the JEI config folder when you click the settings button](https://github.com/mezz/JustEnoughItems/commit/e7570624748f7c521a9efcc8e60b7884f63ad984) - mezz
    
*   [Set a maximum Minecraft version of 1.19.2](https://github.com/mezz/JustEnoughItems/commit/71894a977f62742fcb505c83fd2e29dab46e3791) - mezz
    *   Minecraft 1.19.3 has breaking changes and is not compatible with this version of JEI.
*   [Update zh_cn.json (#3105)](https://github.com/mezz/JustEnoughItems/commit/2f56b84b5d2393ab7c410b0b25ce9941382a82e7) - ArchiDreamZ
    
*   [Fix missing period and space in kk_kz.json (#3101)](https://github.com/mezz/JustEnoughItems/commit/2106f3f3437ce339fac9555749fb3f7723077b98) - AlibekAytjan
    
*   [remove jar archive in Jenkins (it is already available in maven and curseforge)](https://github.com/mezz/JustEnoughItems/commit/9f1a77b1c5b695f8203163633fd169aff0dd7844) - mezz
    
*   [use tools.jdk for Jenkinsfile instead of JAVA_HOME env var](https://github.com/mezz/JustEnoughItems/commit/74fcc826e8e702597365261601e18ddbe2c9eecd) - mezz
    
*   [Fix #3093 Create a runtime registration step before onRuntimeAvailable](https://github.com/mezz/JustEnoughItems/commit/cfb7c8d3767f43a7ab18b9236f794abfecc70b33) - mezz
    
*   [Hide ingredients that have the tag "c:hidden_from_recipe_viewers"](https://github.com/mezz/JustEnoughItems/commit/1a08a45e887aa8224b2cbe1a24645d7b443a6676) - mezz
    
*   [chore: Add Gui and Library maven publish to Jenkinsfile (#3066)](https://github.com/mezz/JustEnoughItems/commit/01f613671cb4635a0a5c23b85c40f1d52d0f3d00) - Kli Kli
    
*   [fix sources jar configuration](https://github.com/mezz/JustEnoughItems/commit/28ca460fafde8150988b8c70bf3bacd4397e7d36) - mezz
    
*   [fix publishing of sources jars for Gui and Library](https://github.com/mezz/JustEnoughItems/commit/ca717007b3ecd35e6abf5c6b08aa82d3a4d4134c) - mezz
    
*   [publish Library and Gui jars to maven](https://github.com/mezz/JustEnoughItems/commit/66de59b65f548c2ae2a872f6a0a698d0bd41fe4b) - mezz
    
*   [Fix publishing the Core artifact](https://github.com/mezz/JustEnoughItems/commit/38fa7cbebda074de30cd19d85069d75457206695) - mezz
    
*   [Code cleanup](https://github.com/mezz/JustEnoughItems/commit/c83958436399abdc3581b16d0d73df56ea555073) - mezz
    
*   [Split up the GUI code and add API methods so that the GUI mostly depends on the API (#3058)](https://github.com/mezz/JustEnoughItems/commit/6476d975359e1c2ff517d94b58ff2dcc7bf780ae) - James Mitchell
    
*   [update pt_br (#3040)](https://github.com/mezz/JustEnoughItems/commit/8f79ba8f1b63799db85415fe82147eef6cd25908) - FITFC
    
*   [log gui change on debug mode only (#3052)](https://github.com/mezz/JustEnoughItems/commit/042cbc9463d10651cf6e6cd4bf1cc17a0ddd5f16) - Jonathan Colmenares
    
*   [Mark 1.19.2 builds as betas](https://github.com/mezz/JustEnoughItems/commit/bd7a56faccd62e5dfc10e22c8855a338f37a20c5) - mezz
    
*   [Fix hiding items from recipes via the API](https://github.com/mezz/JustEnoughItems/commit/b7f3e66e109fb467337aa78e56a99eadbfff0237) - mezz
    
*   [Reduce memory used by an adversarial PacketRecipeTransfer](https://github.com/mezz/JustEnoughItems/commit/f128c3b3dbfcbbbfe965f78ff85f514f66c4fa19) - mezz
    
*   [Split drag handling from input handling, add debug mode logs for input handling](https://github.com/mezz/JustEnoughItems/commit/9992840db5ad4a6c52f8e64bf4d179042c8e42cd) - mezz
    
*   [#3018 Fix crashing VanillaPlugin on invalid brewing recipes](https://github.com/mezz/JustEnoughItems/commit/1c2dd1a9402607ac1a2861862e5a723924aa13fe) - mezz
    
*   [fix internal javadoc](https://github.com/mezz/JustEnoughItems/commit/e8312ddd16a0e1ce1b0f008af2494f53dea0962d) - mezz
    
*   [#3022 Only delete items on left-click](https://github.com/mezz/JustEnoughItems/commit/5252f70c55bcef8bdf474013eacb2625375ec740) - mezz
    
*   [#3022 Fix picking up multiple items with the mouse in cheat mode](https://github.com/mezz/JustEnoughItems/commit/1f93f82bfc6bac8b3a90c06c1a4f26c53ea40b6b) - mezz
    
*   [Ensure packets are handled on the correct thread](https://github.com/mezz/JustEnoughItems/commit/f758d0d4c9b0568091253dfc7fbb4b0e2ec55dff) - mezz
    
*   [add IJeiHelpers#getRecipeType to help addon mods](https://github.com/mezz/JustEnoughItems/commit/38096675e85d6ebc61109da3b21b24c6bf4f5bbc) - mezz
    
*   [Fix #2993 Reduce recipe validation errors to debug logs](https://github.com/mezz/JustEnoughItems/commit/9a8f8dd61a6fdd2875d7d685dd61f9f3e1e198b2) - mezz
    
*   [Fix #3014 Saving edit-mode changes to file fails](https://github.com/mezz/JustEnoughItems/commit/97bfb62ebbdbb092f62f75b4970998899a85a09e) - mezz
    
*   [fix ConfigSerializer sorting for config categories](https://github.com/mezz/JustEnoughItems/commit/d881e68ebec0d4dca6b22b17999a628e1d267de2) - mezz
    
*   [Fix #3009 returning negative X/Y values from getGuiExtraAreas() breaks filter text selection](https://github.com/mezz/JustEnoughItems/commit/0364eed6b0823a9eb2b9d695336a287a695a8cb7) - mezz
    
*   [Improve performance of checking fuels on Fabric (#2997)](https://github.com/mezz/JustEnoughItems/commit/cab76d8154e70206bb7441d5ec6ea2cc497eed57) - Technici4n
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/a0410148a9984b38c951a83ac3ec356ae9bea2fb) - mezz
    
*   [Minor cleanup in config code](https://github.com/mezz/JustEnoughItems/commit/79c34fcc1d16699389d5015d284bc16e8cbe3da1) - mezz
    
*   [Prefer more abundant items first for recipe transfer (#2987)](https://github.com/mezz/JustEnoughItems/commit/56f7b86fc5fc4b43b640b09892e6b0ccfef0500b) - DBotThePony
    
*   [Clean up unused imports](https://github.com/mezz/JustEnoughItems/commit/2e4d4f570edfc6056cbd1ebae1efbae3e24ff7be) - mezz
    
*   [Fix #2968 Add Fabric support for Potion recipes](https://github.com/mezz/JustEnoughItems/commit/730f667a4107b2b33a9c10e43e3870bde7a11c3b) - mezz
    
*   [Close #2963 Add catalogueImageIcon](https://github.com/mezz/JustEnoughItems/commit/5662c0bf93c16829c6838d3ef5bfbb7ff951cdd1) - mezz
    
*   [Fix #2978 fix server-side error logs from platform handler when deleting items](https://github.com/mezz/JustEnoughItems/commit/a3dec98206575147cc45b01adc585ee8f5e56768) - mezz
    
*   [Fix #2817 Expose more RecipeTransfer utils in IRecipeTransferHandlerHelper](https://github.com/mezz/JustEnoughItems/commit/13235737ae7d8e11308936b80f50f58ffdc3ff1f) - mezz
    
*   [Close #2795 Add API to get a RecipeType from a ResourceLocation](https://github.com/mezz/JustEnoughItems/commit/b787b86ecbccaa2b2e65ec012b8b463592224c45) - mezz
    
*   [Fix #2976 use FluidVariantRendering for Fabric fluids with compound tags](https://github.com/mezz/JustEnoughItems/commit/f60ba011e84fb87b17295eefd2a48521c9503881) - mezz
    
*   [Fix #2195 Anvil text "Enchantment Cost" has incorrect shadows](https://github.com/mezz/JustEnoughItems/commit/60e90315a4d326f079334aea1aab964268614e0c) - mezz
    
*   [Close #1579 Allow using Screen with IGlobalGuiHandler](https://github.com/mezz/JustEnoughItems/commit/a3ffb965a60ed28ad344a253e90588af89efd917) - mezz
    
*   [Close #391 Add shield decoration recipes](https://github.com/mezz/JustEnoughItems/commit/292c104ac21da757862ae8111ccd92ebd4f641bf) - mezz
    
*   [Make the `Show Recipes` tooltip optional in the API (#2972)](https://github.com/mezz/JustEnoughItems/commit/d28d213b0bc9c06aeade519019c57c577c1b337a) - Relentless
    
*   [Allow recipe transfer errors to set button color highlight (#2971)](https://github.com/mezz/JustEnoughItems/commit/c56c409b138645af2ffa814a99b345c930036e67) - Technici4n
    
*   [Fix #2959 Update to Fabric API 0.60](https://github.com/mezz/JustEnoughItems/commit/efbabfdba7af8454f56a30ea2440f54f9930c92c) - mezz
    
*   [Close #2951 Update recipe transfer handlers every tick](https://github.com/mezz/JustEnoughItems/commit/21bcb20ac61acda82c786bc9ff3226845e53b8ce) - mezz
    
*   [Github: increase stale action's operations per run](https://github.com/mezz/JustEnoughItems/commit/def1bfdcba3af124de6fe78fd23ed39c7f1d41a6) - mezz
    
*   [Github: do not comment when locking closed issues over 1 year old](https://github.com/mezz/JustEnoughItems/commit/639568c2aee5ea142e74ca63630c7f5867d7da59) - mezz
    
*   [Automatically lock Github issues older than 1 year old](https://github.com/mezz/JustEnoughItems/commit/225f4c9ef583d70592b7eab31f8a60c3a14d2cab) - mezz
    
*   [enable automatic marking and closing of stale issues](https://github.com/mezz/JustEnoughItems/commit/65a5f23de4fb4ff573d3e288dafbd02cb8da9ea6) - mezz
    
*   [start marking stale issues starting with the oldest](https://github.com/mezz/JustEnoughItems/commit/ebc5ed5b2e6c237e4733bdbddff4f921896a5a7a) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/49da070d0ae2318ee672422eff4566d8ae2ad2b7) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/e696d893dbc5cb9a662c94958d6d1c9757d162ef) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/2a596077deab20fdcb01c74bdd869279a92ef2c9) - mezz
    
*   [testing github action to close stale issues](https://github.com/mezz/JustEnoughItems/commit/571cfac14933fcedf38c8adfdfb2af312f1c10d5) - mezz
    
*   [Add github stale workflow action in dry-run mode](https://github.com/mezz/JustEnoughItems/commit/c7ae5445cf44fc0a107b7b2b308757fa56848436) - mezz
    
*   [Update dependencies for Minecraft 1.19.2](https://github.com/mezz/JustEnoughItems/commit/c0859d6ac6b798bcc3d96338109f8ab976ea16c5) - mezz
    
*   [Improve javadocs for IIngredientAcceptor#addFluidStack](https://github.com/mezz/JustEnoughItems/commit/90b37d06031c8e113d51e747e3f532f4b9ed047b) - mezz
    
*   [Fix #2939 Crash on Forge when typing](https://github.com/mezz/JustEnoughItems/commit/4679f2e05ebabebde6b14ad445e39319aea689a7) - mezz
    
*   [Fix #2899 Cheat mode not working when connected to dedicated server](https://github.com/mezz/JustEnoughItems/commit/e6ef3fca950b59aa2c716c75dc6aac612470058e) - mezz
    
*   [Clean up unused method](https://github.com/mezz/JustEnoughItems/commit/acfa093e0bbf67d3f1faae56d24f5762c450fcfc) - mezz
    
*   [Update for Minecraft 1.19.1](https://github.com/mezz/JustEnoughItems/commit/16116299c676183dee0f63380a6a09a64d754359) - mezz
    
*   [Minor code cleanup](https://github.com/mezz/JustEnoughItems/commit/91527b7d5fae747455ed7630915c088e3fe0f602) - mezz
    
*   [Fix #2875 Fix recipe slot highlight and RecipeTransferErrorTooltip display. (#2922)](https://github.com/mezz/JustEnoughItems/commit/ec010fbd494f5b7c4a0514f6bdf2f20dc3464958) - vfyjxf
    
*   [Update Forge version used in the dev environment](https://github.com/mezz/JustEnoughItems/commit/00ee4988895f4eb2c177b22a252abe7e2e6bcd8e) - mezz
    
*   [Add convenience functions to reduce the need for using VanillaTypes.ITEM_STACK](https://github.com/mezz/JustEnoughItems/commit/66a18ccaccf226c3a21863f4f96b30c564e9a9bb) - mezz
    
*   [Add Kazakh translation (#2912)](https://github.com/mezz/JustEnoughItems/commit/4f0c07ea66be0c385ed41d363e78fff19c7236ef) - AlibekAytjan
    
*   [Update bg_bg.json (#2910)](https://github.com/mezz/JustEnoughItems/commit/3d3f29bc99d05e8fe6a8b988f57a0d5cc54c38a5) - Deyan Nikolov
    
*   [Create convenience function for adding a fluid ingredient to IIngredientAcceptor](https://github.com/mezz/JustEnoughItems/commit/dfbe89487d70eaa2364199916ab9afed8815f586) - mezz
    
*   [Close #2901 Make Crafting Grid Helper return the slots it creates](https://github.com/mezz/JustEnoughItems/commit/0645b00cf13fa60c3a89e905c02fa146c543359f) - mezz
    
*   [Fix #2898 Expose "show uses/recipes" key bindings in the API](https://github.com/mezz/JustEnoughItems/commit/c7f4c07d864ab21e2bc4c2ed23f87942506b8dbf) - mezz
    
*   [Fix #2897 Hovering over recipe tabs can ignore key inputs](https://github.com/mezz/JustEnoughItems/commit/96f611776ba34ad0166c1589d3cd05a9da32e171) - mezz
    
*   [Fix #2873 Use the correct mouseReleased call to finish a click on Fabric](https://github.com/mezz/JustEnoughItems/commit/1e13ab99ba7aaf2452377e8f748bcfc1abcd3689) - mezz
    
*   [Fix #2871 Fix text field synchronization from mods via the API](https://github.com/mezz/JustEnoughItems/commit/30fb27f2dfa48647d176e76f830925b097c0214b) - mezz
    
*   [Fix #2873 Ghost ingredient handling on Fabric](https://github.com/mezz/JustEnoughItems/commit/b6813e7b3a70606841b8fdb6a80252a92e5c8fac) - mezz
    
*   [Update Polish translation (#2874)](https://github.com/mezz/JustEnoughItems/commit/dde86189738a28735072ccfa3ee8e425b01c94df) - Greg-21
    
*   [Use an accesswidener to access fields with Fabric](https://github.com/mezz/JustEnoughItems/commit/de821ed60b845e5d824f2f8a9edf705f7846b50b) - mezz
    
*   [update parchment mappings](https://github.com/mezz/JustEnoughItems/commit/fdf39f73debb75a0ca37bcc3c7c0efca4394f8f2) - mezz
    
*   [Fix #2839 Improve widget focusing behavior with the search box](https://github.com/mezz/JustEnoughItems/commit/89fa05dc4ec1559c8692bfa169999baa96efaab6) - mezz
    
*   [Fix #2890 Protect against broken recipe transfer handlers crashing](https://github.com/mezz/JustEnoughItems/commit/4f991ab7b552256c01009993454f4f9c76a46865) - mezz
    
*   [Clean up unused imports](https://github.com/mezz/JustEnoughItems/commit/20bbf2808923966169b577deba8aaf5097603b6a) - mezz
    
*   [Update to support the breaking changes in forge (#2886)](https://github.com/mezz/JustEnoughItems/commit/9669b94bf94410ba0d621b43bd709e3f2cbd0de9) - Sara Freimer
    
*   [clean up configs slightly](https://github.com/mezz/JustEnoughItems/commit/e5a34c9b6921a24e09603038f190a3df141facb1) - mezz
    
*   [Cleanup](https://github.com/mezz/JustEnoughItems/commit/9dc14b1ceeb086a5332f73584845e5650325ac78) - mezz
    
*   [update parchment version](https://github.com/mezz/JustEnoughItems/commit/4dd6e22d9fabb1529d463ce0edb59e4c2b299c5d) - mezz
    
*   [Update dev forge and mappings](https://github.com/mezz/JustEnoughItems/commit/32afb34a1a11fee0d7f656b4b846fb43c3a8e191) - mezz
    
*   [set gradle to no longer use configure-on-demand, it breaks ForgeGradle](https://github.com/mezz/JustEnoughItems/commit/73ed0fef50bc1209548adb740f350ae991764fe2) - mezz
    
*   [Remove old createFocusLink method](https://github.com/mezz/JustEnoughItems/commit/071c078a733c1d08d45646188ba9506eab910174) - mezz
    
*   [Fix improper property use causing invalid dependency POM (#2854)](https://github.com/mezz/JustEnoughItems/commit/ad7fd38086d3e3c970813edb577a4a9d7b3a1686) - sciwhiz12
    *   The archivesName property of BasePluginExtension is a Property<String>.
    *   The default implementation of toString() for a Property is to print out
    *   their name and owning object, and not the toString() of their contents.
    *   This meant that passing archivesName to Node#appendNode as a value,
    *   which calls toString() on it to make it into a String, results in e.g.
    *   `extension 'base' property 'archivesName'` instead of the expected
    *   value of e.g. `jei-1.19-common-api`.
    *   The simple fix is to call Property#get() on archivesName to get its
    *   actual value and pass that on as the node value.
*   [Fix #2851 Protect against crash from broken fluids](https://github.com/mezz/JustEnoughItems/commit/edc5e7c22e0aac91a4424571525b6df85abafa53) - mezz
    
*   [Update to changes in Forge's fluid API (#2852)](https://github.com/mezz/JustEnoughItems/commit/cea569ee6a20589f9b7b0ccd037d31f5e8ddbb11) - Sara Freimer
    
*   [version 11](https://github.com/mezz/JustEnoughItems/commit/b7158ba5b7bc16f9e5f1efbe927fe8c88515cac8) - mezz
    
*   [Remove deprecated methods](https://github.com/mezz/JustEnoughItems/commit/8a65df7e56a1c00d4dd4153260902e4f26a7401a) - mezz
    
*   [Update for Minecraft 1.19](https://github.com/mezz/JustEnoughItems/commit/5b2e71f547cd13cd48de4d999c4f56bddfc421bb) - mezz
    
*   [JEI 10. Add Fabric support. Refactor into a multi-project (#2842)](https://github.com/mezz/JustEnoughItems/commit/530ef6c8d604370bef850f3656a28beab56cbfba) - mezz
    
*   [Update sv_se.json (#2836)](https://github.com/mezz/JustEnoughItems/commit/d46164fce29506569f7e3debdbab099439e042d6) - A. Regnander
    
*   [Updated Russian Translation (#2799)](https://github.com/mezz/JustEnoughItems/commit/d12ab9560bbe57681de1de20bca876bc9556f10e) - DrHesperus
    
*   [Fix #2812 Add a keybind for the key to exit a recipe screen to the inventory](https://github.com/mezz/JustEnoughItems/commit/3d1852a1f713fb79260a6670a0551437f8a536db) - mezz
    
*   [Allow focuses to match multiple ingredients in a recipe slot](https://github.com/mezz/JustEnoughItems/commit/efd8ef5bbf45e0c73c5d6285163fe5dc6f827323) - mezz
    
*   [Fix #2790 Recipes are listed twice when checking the uses of an ingredient that is also a catalyst](https://github.com/mezz/JustEnoughItems/commit/d13676b136f61716dbe8abfa43589a9ef2d1baa3) - mezz
    
*   [deprecate some api methods that depend on forge-specific code](https://github.com/mezz/JustEnoughItems/commit/e0fa409e74153d687d901fd3dba40957a02099cd) - mezz
    
*   [Create IIngredientTypeWithSubtypes for generic handling of subtypes in ingredients](https://github.com/mezz/JustEnoughItems/commit/01fd9c02bb0b2348d988452ca5edd8ccbba704cb) - mezz
    
*   [Move config screen into platform service](https://github.com/mezz/JustEnoughItems/commit/fadb4d9741884d1dec0201d541f04fbe4f764f6f) - mezz
    
*   [move forge configs into forge folder](https://github.com/mezz/JustEnoughItems/commit/981e463c97f9a3c89bed3fb6991bc1c76b334663) - mezz
    
*   [Add platform server helper](https://github.com/mezz/JustEnoughItems/commit/f4ebadd513a8ee7d628c4b3e56de3bb2293e6197) - mezz
    
*   [Use service to get particle icons](https://github.com/mezz/JustEnoughItems/commit/c97b9d3db9ef1e05195804a9caa618d9bdccefdc) - mezz
    
*   [Organize packet data into data and context](https://github.com/mezz/JustEnoughItems/commit/2b04f090497fb4cc3a54c0db4c5c9fc200a4a7b0) - mezz
    
*   [Update es_es.json (#2782)](https://github.com/mezz/JustEnoughItems/commit/0263f7090ff197d026c404cea98531b81bf8b301) - zeedif
    
*   [Fix #2783 Attempted to load class net/minecraft/client/player/LocalPlayer for invalid dist DEDICATED_SERVER](https://github.com/mezz/JustEnoughItems/commit/db613c8519cdbcbb4b0d66857b0d5dae3998c7ff) - mezz
    
*   [Clean up ErrorUtil](https://github.com/mezz/JustEnoughItems/commit/61758a12034f85b4829bb00b45d0b3b63fac123b) - mezz
    
*   [Move registry access to a service loader](https://github.com/mezz/JustEnoughItems/commit/35c1706cfe8a4fcc0f1d68f691917b1e268c984f) - mezz
    
*   [Update it_it.json (#2785)](https://github.com/mezz/JustEnoughItems/commit/3a008930cb32dc33931468be00a1e4003d1e464d) - Andrea Costa
    
*   [Protect against mod crashes when checking for enchantable items](https://github.com/mezz/JustEnoughItems/commit/ac26e8c7bd5f4727e84883a85026bd66a0b2fbf7) - mezz
    
*   [Add access to IIngredientManager from recipe catalyst registration](https://github.com/mezz/JustEnoughItems/commit/808372d990fb311eb83d89d27d111d6fdce6d92d) - mezz
    
*   [organize some network code into subprojects](https://github.com/mezz/JustEnoughItems/commit/b709cc36179fc61ea627f995335d24b0bac01216) - mezz
    
*   [Refactor server connection logic into its own class](https://github.com/mezz/JustEnoughItems/commit/98abba6b2e2b75f716978305268555e533b5402d) - mezz
    
*   [Organize some config files into subprojects](https://github.com/mezz/JustEnoughItems/commit/2c5229fca155e5655e55e4d81ed3c1e5d594d082) - mezz
    
*   [Move Translator to common.util](https://github.com/mezz/JustEnoughItems/commit/17927c0a20902319492336642484239284bc71ac) - mezz
    
*   [Include all test results in Jenkins](https://github.com/mezz/JustEnoughItems/commit/880be88737c4be9d5d73c9cf5cd7e96155307124) - mezz
    
*   [Clean up ReflectionUtil](https://github.com/mezz/JustEnoughItems/commit/5e692c7ca7168999c4a7a6105b5653917e3ad4dd) - mezz
    
*   [Move more code into the Core and Common subprojects](https://github.com/mezz/JustEnoughItems/commit/2112d63b268bce244ab6e05c9b1fc8f23dc484d8) - mezz
    
*   [Clean up ColorNamer code](https://github.com/mezz/JustEnoughItems/commit/c784e6a20312ef31e081210a3e185e2a30c13046) - mezz
    
*   [Move search logic into core subproject](https://github.com/mezz/JustEnoughItems/commit/847fb20ab1590b7e3905c49b5fe4fb7bdf1e110e) - mezz
    
*   [Create "Core" subproject for code that does not depend on Minecraft](https://github.com/mezz/JustEnoughItems/commit/d005fda4e2ea1f0a446634307654b907913d7a26) - mezz
    
*   [Fix #2756 Fuel recipes with high values can overflow the recipe background](https://github.com/mezz/JustEnoughItems/commit/8edf068e17646debaf3f095d32a736b172448614) - mezz
    
*   [Close #2771 Allow IRecipeTransferInfo to return a transfer error if it can't handle the recipe](https://github.com/mezz/JustEnoughItems/commit/8b62850a0056c2fbc2f481eb0993f3de259b7ac7) - mezz
    
*   [Improve startup code to be more resilient to modded bugs](https://github.com/mezz/JustEnoughItems/commit/5242ae9ffbdb09ebf46597f750839bba5288c6e4) - mezz
    
*   [Fix bookmark config creation](https://github.com/mezz/JustEnoughItems/commit/bfcd7ff664a66f8ceac0d9141c5ef0ecfa549b13) - mezz
    
*   [Exclude duplicate files from output jars](https://github.com/mezz/JustEnoughItems/commit/be3fad8df73eab0b98a98f51f09b45b779520a5e) - mezz
    
*   [Isolate changelog plugin in a subproject](https://github.com/mezz/JustEnoughItems/commit/daed974fd0cf47156a508af008ad4b53bd0b853d) - mezz
    
*   [Constrain gitchangelog asm version](https://github.com/mezz/JustEnoughItems/commit/a314f03808e4532e30901c418a294147bc172f0a) - mezz
    
*   [fix asm coords to org.ow2.asm:asm](https://github.com/mezz/JustEnoughItems/commit/0bc8a0b48dee4b333d62c1ae6344cf7c6984f27e) - mezz
    
*   [add comment for asm constraint](https://github.com/mezz/JustEnoughItems/commit/2456758d6acf05493bfb2432daa00d67d0e08560) - mezz
    
*   [Try constraining asm to the right version](https://github.com/mezz/JustEnoughItems/commit/4b922335cd9eced04341fba7be5add4a8c3e9477) - mezz
    
*   [Update dev Forge version](https://github.com/mezz/JustEnoughItems/commit/3e7e106e1f3974ed311bdde7670ccd60d312eee6) - mezz
    
*   [Organize internal code into a multiproject (#2772)](https://github.com/mezz/JustEnoughItems/commit/5aa1ae16fe920d7c4159eb3448d5ec8bb8891ec8) - mezz
    
*   [Update forge maven artifact id](https://github.com/mezz/JustEnoughItems/commit/04f24d67c0b7a23c517c55be2d56aa8a2758e5e9) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/5633ee657519b14567cd30ba53f73e97194a0648) - mezz
    
*   [update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/95ee3bff746fcb5ff18f8275564d1a1b46947add) - mezz
    
*   [update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/b2d3d6a756847913b1ff48d38f0c459a0b26d0c7) - mezz
    
*   [Make the give notification message work for any player that has a server](https://github.com/mezz/JustEnoughItems/commit/9db2be0b4ed1dead1c2ea167bc07202b4ffc4dab) - mezz
    
*   [fix changelog path](https://github.com/mezz/JustEnoughItems/commit/62b2f40543ee48d3006d043b4f77522b1fa1b7e1) - mezz
    
*   [fix project dependency](https://github.com/mezz/JustEnoughItems/commit/f4a08d34177c3b0e3ed5a7bf6f877244e7f1611a) - mezz
    
*   [Ensure ProcessResources updates on every new version](https://github.com/mezz/JustEnoughItems/commit/2bfe7a815be61756a3ecf6f275f2afbb777ad1ba) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/b0a994494433bd42b065578b8d4fa76608734190) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/cde4010b43e77fbc72b497d3426dd2044ec271c4) - mezz
    
*   [Organize project code](https://github.com/mezz/JustEnoughItems/commit/dd289c912d8f52da59c155850baa4c1e0aa5e9ce) - mezz
    
*   [Fix gradle project properties](https://github.com/mezz/JustEnoughItems/commit/56b5da3a8d94f2e02b7489d05bd878920b4ff101) - mezz
    
*   [Use net.minecraft.MethodsReturnNonnullByDefault](https://github.com/mezz/JustEnoughItems/commit/ebd3cbcbcce0000851fdb797c542e25114bcda69) - mezz
    
*   [Update Forge in dev environment](https://github.com/mezz/JustEnoughItems/commit/9025bb694be7c5d5e70f4e128989b1d1d18a4df4) - mezz
    
*   [Fix #2751 Crash when MC window becomes too narrow](https://github.com/mezz/JustEnoughItems/commit/84142187699e30c29295a7aa86dd44b96271eefe) - mezz
    
*   [Update Jenkinsfile to always run tests](https://github.com/mezz/JustEnoughItems/commit/543ad9baeb7c1316246b44cee32c1b903e4a7304) - mezz
    
*   [Update Jenkinsfile](https://github.com/mezz/JustEnoughItems/commit/5073f9659f206f45a1c30b10eb0bb56646c4f7fa) - mezz
    
*   [Update Jenkinsfile for publishing to CurseForge](https://github.com/mezz/JustEnoughItems/commit/69af776afc6f9e53fb17008215a85886500aa8eb) - mezz
    
*   [Migrate build.gradle to build.gradle.kts (#2761)](https://github.com/mezz/JustEnoughItems/commit/ac9cbc0f58c86c85cc14370db4156922e861c982) - mezz
    *   Co-authored-by: Jared <jaredlll08@gmail.com>
*   [Fix #2754 Crash when GUI extends offscreen](https://github.com/mezz/JustEnoughItems/commit/bb7eec72a41a0c932f71a4f591b6d8977f7d031b) - mezz
    
*   [Fix #2752 Crash on gui slots that are to the left or above the gui](https://github.com/mezz/JustEnoughItems/commit/98e5ead592a85f084a9e840fd5e4125e3c8df4cc) - mezz
    
*   [Display hidden ingredients in a recipe if there are no other ingredients to show](https://github.com/mezz/JustEnoughItems/commit/b8903a1777f1dc939f2a0476f412a142ef7d6f70) - mezz
    
*   [Allow focus linking with invisible ingredients](https://github.com/mezz/JustEnoughItems/commit/ae69541a7cd44362f77c30c88e7d2c58fc5c1d2b) - mezz
    
*   [Fix debug recipes](https://github.com/mezz/JustEnoughItems/commit/61d1ebe55676727c0572eaac14367943a18650c3) - mezz
    
*   [update JUnit](https://github.com/mezz/JustEnoughItems/commit/1c12ab5031333d6aeb0577869b4fc235c83fb922) - mezz
    
*   [Clean up build script](https://github.com/mezz/JustEnoughItems/commit/02b3939453a8e7511fd4dd95034ef19bf05d05a1) - mezz
    
*   [Run Spotless cleanup](https://github.com/mezz/JustEnoughItems/commit/d281b8446a7691e579e73998bf75cb9e2c70b849) - mezz
    
*   [Fix bookmark config directory creation](https://github.com/mezz/JustEnoughItems/commit/1a1db97ecc33d282477e14536ffdf49baae23b13) - mezz
    
*   [Fix #2744 Workaround for Optifine bug](https://github.com/mezz/JustEnoughItems/commit/dcfab2e4f61c1834971f4a34718f7f426199aded) - mezz
    
*   [Fix #2744 Workaround for Optifine bug](https://github.com/mezz/JustEnoughItems/commit/d925b2ef8acf8db3226fcc6369236f90c911b1b0) - mezz
    
*   [Clean up some tags code](https://github.com/mezz/JustEnoughItems/commit/08ef7e1d958219eab93c714fb735fc29a56036db) - mezz
    
*   [suppress more deprecation warnings](https://github.com/mezz/JustEnoughItems/commit/252b96d063a3bea16ab5307a8f38182dafc4f475) - mezz
    
*   [Use Parchment mappings in dev environment](https://github.com/mezz/JustEnoughItems/commit/2f4ecf9de17ab907084fc1b269e8e57e7ba5637d) - mezz
    
*   [Make potion effects render in compact mode when JEI is open](https://github.com/mezz/JustEnoughItems/commit/982a1459a66271bf29776eb3b0e51c7fda471bec) - mezz
    
*   [add more client run configurations in developer environment](https://github.com/mezz/JustEnoughItems/commit/95e2045c572bb8335899a57ec61a5b37cae03c8b) - mezz
    
*   [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/f2c87e1d88e42205b5da342f513dc78a7f15fa99) - mezz
    
*   [Link anvil recipe input/output focuses](https://github.com/mezz/JustEnoughItems/commit/09f7e93b47979253fa419b1d1d6024182d3ebaa1) - mezz
    
*   [Code cleanup](https://github.com/mezz/JustEnoughItems/commit/fcaba7451f0f7663ad850c1f14a4c142bba6999e) - mezz
    
*   [Fix logic when there are broken recipe layouts](https://github.com/mezz/JustEnoughItems/commit/490e92d46f9d20c6024f38efd2bf52e10691cf31) - mezz
    
*   [Minor code cleanup](https://github.com/mezz/JustEnoughItems/commit/b06f757bf00a965a2c001e59d06f628d3f6d6502) - mezz
    
*   [Fix type of IRecipeLookup#limitFocus](https://github.com/mezz/JustEnoughItems/commit/e7e6055d8d543206ad0807b83f14a30c58e7c093) - mezz
    
*   [Refactor: Replace IRecipeCategory.getUid() ResourceLocation with RecipeType](https://github.com/mezz/JustEnoughItems/commit/4b0270bbced63113067b0b091fb1e3b3e394dbf9) - mezz
    
*   [Mark ISlowRenderItem as deprecated](https://github.com/mezz/JustEnoughItems/commit/4c9a54e9ef57abb0ab84f9b42bd8afcbbfce08ca) - mezz
    
*   [Minor cleanup](https://github.com/mezz/JustEnoughItems/commit/02b187a06443b569b6a2cedce690c2d918d6b0a3) - mezz
    
*   [Remove unused BookmarkOverlayToggleEvent](https://github.com/mezz/JustEnoughItems/commit/176326dbdbe305a3b65f0052eb8038b2a07007b7) - mezz
    
*   [Remove FastItemRendering, it is no longer necessary and can cause conflicts](https://github.com/mezz/JustEnoughItems/commit/a6065cbf4cc979436f9c0ac1604f76bf43f7f07a) - mezz
    
*   [Add access to IJeiHelpers from IJeiRuntime](https://github.com/mezz/JustEnoughItems/commit/0d2cecd41bfe008298303312d2d37dd9c9d44d5f) - mezz
    
*   [Remove persistent WorldConfig and untangle filter text logic](https://github.com/mezz/JustEnoughItems/commit/b949f819cc30fad3eee85841b1e60055bdb5d793) - mezz
    
*   [GUI code refactor. Add configs for ingredient list and bookmark list layouts. (#2711)](https://github.com/mezz/JustEnoughItems/commit/212f9c745d1f7cb011c23c784caac036eb14e70c) - mezz
    
*   [Fix #2733 Better handling for /reload](https://github.com/mezz/JustEnoughItems/commit/1b95efefbcb8186bac071a71cadda869e91df3e1) - mezz
    
*   [Fix #2733 JEI doesn't update after /reload](https://github.com/mezz/JustEnoughItems/commit/48374815d0a0b88930ea2f8848f47f14405ea694) - mezz
    
*   [Clarify Github Issue Templates](https://github.com/mezz/JustEnoughItems/commit/aa3a7e7e35254aaafcf0e8de946ba88b78910d7e) - mezz
    
*   [Add github issue templates](https://github.com/mezz/JustEnoughItems/commit/135768cefd4fff4f3a44fb40224a7439849c6c35) - mezz
    
*   [Update README](https://github.com/mezz/JustEnoughItems/commit/8f85dafb492a45ae01b5b90720b18d2fda5e47fd) - mezz
    
*   [Simplify code for IngredientSorterComparators#getTagForSorting](https://github.com/mezz/JustEnoughItems/commit/6899e62c8421e3fb15c462e76708bfc01d2837b9) - mezz

## Macaw's Roofs - Oh The Biomes You'll Go
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-roofs-oh-the-biomes-youll-go)

### macawsroofsbyg-1.19.2-1.4
Fix Jsons

### macawsroofsbyg-1.19.3-1.1
Fix Jsons

### macawsroofsbyg-1.19.3-1.0
Port to 1.19.3 !

Work in 1.19.4 just update the required depedency !

## Macaw's Bridges
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-bridges)

### v3.0.1 / mc1.19.2 - Forge
Changes:  
- Bamboo, Dry Bamboo, Red Asian Bridges have the same  
properties like planks

Fixed Issues :  
- No Collision for Bamboo & Dry Bamboo & Red Asian Bridges/Stairs

### v3.0.1 / mc1.19.1 - Forge
Changes:  
- Bamboo, Dry Bamboo, Red Asian Bridges have the same  
properties like planks

Fixed Issues :  
- No Collision for Bamboo & Dry Bamboo & Red Asian Bridges/Stairs

### v3.0.1 / mc1.19 - Forge
Changes:  
- Bamboo, Dry Bamboo, Red Asian Bridges have the same  
properties like planks

Fixed Issues :  
- No Collision for Bamboo & Dry Bamboo & Red Asian Bridges/Stairs

### v3.0.0 / mc1.19.4 - Forge
Update Warning: Important Information

We're thrilled to introduce the latest 3.0.0 update, which includes significant optimizations.

If you are updating from an older version to this one and have already placed bridges or stairs, please note that they will look weird due to changes in the update. To resolve this issue, you'll need to perform a block update on affected bridges or stairs. Here's how:

Place any block above/next to the affected bridge or stairs, or break and replace the affected bridge or stairs, which will trigger an update for neighboring bridges.

We highly recommend creating backups of your existing game worlds before applying this update.

Changelog:

Performance:  
- Made many changes, to reduce the memory usage as much as I  
could, lowered memory usage by 80-90%.  
- Refactored code to be more efficient and optimized  
- Lowered the count of all blockstates by 85 - 89 %  
( From 13920 to 1516 )  
- Removed lots of model.jsons and made them more efficient

Added :  
- Stone Bridges, Stairs, Piers have new variations  
( nether bricks, mossy cobblestone, cobblestone, end stone bricks,  
prismarine bricks, andesite, granite, diorite )  
- New Balustrade Stone Bridges ( 17 variations )  
- Red Asian Bridge, Support, Stairs  
- Glass Bridge, Support, Stairs

Bridge Torch & Lantern:  
- Can be placed on bridge/bridge stairs railings ( They have a tooltip )  
- Cannot be placed in the middle  
- They break if there is no solid block below them

Bridge Piers:  
- Can now be waterlogged (again!..)  
- Have a new model

Changes:  
- Most bridges have an improved model  
- All Bridges have now the same height (base/railings), this change fixes the no step sounds whilst walking on a bridge  
- Removed Torches in bridges, made separate torches which can be placed on bridge/bridge stair railing ( to prevent doubling the states because of this..)  
- Rope Bridges have only 2 facing sides, north and east. Since west and south would be the same as north and east, we decided to merge it so it wont create redundant blockstates  
- Bridge handrails/handguards have been reworked, you can now toggle between all 4 sides or empty platform, with this change you can modify bridges like never before  
- Bridges have an updated placing mechanism, if you place a bridge while on a bridge, it will place down a bridge in the way you are facing ( Similar to the scaffolding )  
- Bridge Stairs have also an updated placing mechanism, if you place the stair on the stair, it will build another stair one block behind and above it, this way you can easily build bridge stairs upwards.  
- Shears can be used like pliers  
- Bridges now have a tooltip about Pliers/Shears  
- Bridges and Stairs cannot be placed directly above themselves, this makes it easier to build  
- Bridge Piers/Supports no longer connect but they have an improved model to make them look just as good as before  
- All Stone recipes can now be crafted in the stonecutter too  
- Bridges now have the tag Trapdoors, this is because entities are pathfinding it when it has the tag...

New Translations:  
fr_fr by Calvineries  
ko_kr by spinodal23  
uk_ua by Moonvvell  
es_cl by Ganbare-Lucifer

Updated Translations:  
ru_ru by mindryder  
de_de by PatrickK01  
es_es by Divinium115

Issues Fixed:  
- Bridges have no step sound  
- Wrong breaking sounds on a few blocks  
- Wrong hardness on some blocks  
- Bridge Piers/Supports cannot be waterlogged  
- Two Wide Bridges don't connect to stairs  
- Stone and Log Bridges have wrong texture for bottom  
- Wrong texture UV size on some stairs  
- Iron Bridge can be used as fuel  
- Bridge stairs alignment is weird  
- Z-fighting on some bridges and stairs  
- Pliers do not appear in creative menu or JEI  
- Pliers unable to make a bridge fully open  
- Bamboo and Dry Bamboo Bridges and Stairs do not fully  
connect  
- Missing mcw tags from some blocks  
- Mobs Pathfinding get stuck on bridge ( They now walk correctly on the base bridge, but when there is a block with handrail they will jump-move, but they are now pathfinding bridges )  
- Bridge Support is not a full block

### v3.0.0 / mc1.19.3 - Forge
Update Warning: Important Information

We're thrilled to introduce the latest 3.0.0 update, which includes significant optimizations.

If you are updating from an older version to this one and have already placed bridges or stairs, please note that they will look weird due to changes in the update. To resolve this issue, you'll need to perform a block update on affected bridges or stairs. Here's how:

Place any block above/next to the affected bridge or stairs, or break and replace the affected bridge or stairs, which will trigger an update for neighboring bridges.

We highly recommend creating backups of your existing game worlds before applying this update.

Changelog:

Performance:  
- Made many changes, to reduce the memory usage as much as I  
could, lowered memory usage by 80-90%.  
- Refactored code to be more efficient and optimized  
- Lowered the count of all blockstates by 85 - 89 %  
( From 13920 to 1516 )  
- Removed lots of model.jsons and made them more efficient

Added :  
- Stone Bridges, Stairs, Piers have new variations  
( nether bricks, mossy cobblestone, cobblestone, end stone bricks,  
prismarine bricks, andesite, granite, diorite )  
- New Balustrade Stone Bridges ( 17 variations )  
- Red Asian Bridge, Support, Stairs  
- Glass Bridge, Support, Stairs

Bridge Torch & Lantern:  
- Can be placed on bridge/bridge stairs railings ( They have a tooltip )  
- Cannot be placed in the middle  
- They break if there is no solid block below them

Bridge Piers:  
- Can now be waterlogged (again!..)  
- Have a new model

Changes:  
- Most bridges have an improved model  
- All Bridges have now the same height (base/railings), this change fixes the no step sounds whilst walking on a bridge  
- Removed Torches in bridges, made separate torches which can be placed on bridge/bridge stair railing ( to prevent doubling the states because of this..)  
- Rope Bridges have only 2 facing sides, north and east. Since west and south would be the same as north and east, we decided to merge it so it wont create redundant blockstates  
- Bridge handrails/handguards have been reworked, you can now toggle between all 4 sides or empty platform, with this change you can modify bridges like never before  
- Bridges have an updated placing mechanism, if you place a bridge while on a bridge, it will place down a bridge in the way you are facing ( Similar to the scaffolding )  
- Bridge Stairs have also an updated placing mechanism, if you place the stair on the stair, it will build another stair one block behind and above it, this way you can easily build bridge stairs upwards.  
- Shears can be used like pliers  
- Bridges now have a tooltip about Pliers/Shears  
- Bridges and Stairs cannot be placed directly above themselves, this makes it easier to build  
- Bridge Piers/Supports no longer connect but they have an improved model to make them look just as good as before  
- All Stone recipes can now be crafted in the stonecutter too  
- Bridges now have the tag Trapdoors, this is because entities are pathfinding it when it has the tag...

New Translations:  
fr_fr by Calvineries  
ko_kr by spinodal23  
uk_ua by Moonvvell  
es_cl by Ganbare-Lucifer

Updated Translations:  
ru_ru by mindryder  
de_de by PatrickK01  
es_es by Divinium115

Issues Fixed:  
- Bridges have no step sound  
- Wrong breaking sounds on a few blocks  
- Wrong hardness on some blocks  
- Bridge Piers/Supports cannot be waterlogged  
- Two Wide Bridges don't connect to stairs  
- Stone and Log Bridges have wrong texture for bottom  
- Wrong texture UV size on some stairs  
- Iron Bridge can be used as fuel  
- Bridge stairs alignment is weird  
- Z-fighting on some bridges and stairs  
- Pliers do not appear in creative menu or JEI  
- Pliers unable to make a bridge fully open  
- Bamboo and Dry Bamboo Bridges and Stairs do not fully  
connect  
- Missing mcw tags from some blocks  
- Mobs Pathfinding get stuck on bridge ( They now walk correctly on the base bridge, but when there is a block with handrail they will jump-move, but they are now pathfinding bridges )  
- Bridge Support is not a full block

## Macaw's Doors
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-doors)

### v1.1.1 / mc1.19.2 - Forge
Changes:  
- All doors now have correct properties like vanilla doors (excluding sliding doors and special doors)  
- Added tooltip for metal doors to show that they need redstone power  
- Sliding Glass Door & Store Door no longer requires redstone power

Translations:  
es_cl by Ganbare-Lucifer  
updated ru_ru by cutiegin

Fixed Issues:  
- Suggested Lang Fixes, Bamboo Doors are not Mesh Doors, and  
prints are no longer called by woodtype but by doortype so Oak Door Print is now called Classic Door Print  
- Wrong and Unneeded Recipes found for Macaw Doors, warped mystic door and crimson nether door  
- In the en_us.json file exists an not existing Item block.mcwdoors.cherry_waffle_door  
- sliding doors have incorrect sounds when opened with redstone  
- Sliding door won't open without redstone power  
- Fixed nullpointerexception for prints  
- waffle print door missing  
- add missing prints like cherry advancement

### v1.1.1 / mc1.19.1 - Forge
Changes:  
- All doors now have correct properties like vanilla doors (excluding sliding doors and special doors)  
- Added tooltip for metal doors to show that they need redstone power  
- Sliding Glass Door & Store Door no longer requires redstone power

Translations:  
es_cl by Ganbare-Lucifer  
updated ru_ru by cutiegin

Fixed Issues:  
- Suggested Lang Fixes, Bamboo Doors are not Mesh Doors, and  
prints are no longer called by woodtype but by doortype so Oak Door Print is now called Classic Door Print  
- Wrong and Unneeded Recipes found for Macaw Doors, warped mystic door and crimson nether door  
- In the en_us.json file exists an not existing Item block.mcwdoors.cherry_waffle_door  
- sliding doors have incorrect sounds when opened with redstone  
- Sliding door won't open without redstone power  
- Fixed nullpointerexception for prints  
- waffle print door missing  
- add missing prints like cherry advancement

### v1.1.1 / mc1.19 - Forge
Changes:  
- All doors now have correct properties like vanilla doors (excluding sliding doors and special doors)  
- Added tooltip for metal doors to show that they need redstone power  
- Sliding Glass Door & Store Door no longer requires redstone power

Translations:  
es_cl by Ganbare-Lucifer  
updated ru_ru by cutiegin

Fixed Issues:  
- Suggested Lang Fixes, Bamboo Doors are not Mesh Doors, and  
prints are no longer called by woodtype but by doortype so Oak Door Print is now called Classic Door Print  
- Wrong and Unneeded Recipes found for Macaw Doors, warped mystic door and crimson nether door  
- In the en_us.json file exists an not existing Item block.mcwdoors.cherry_waffle_door  
- sliding doors have incorrect sounds when opened with redstone  
- Sliding door won't open without redstone power  
- Fixed nullpointerexception for prints  
- waffle print door missing  
- add missing prints like cherry advancement

### v1.1.0 / mc1.19.4 - Forge
Added:  
- Waffle Doors ( The cherry door from 1.20 but in other wood colors )

Changes:  
- Walls & Iron Bars now connect to the Jail Door  
- Removed Waterlogging for Garage Doors, Portcullis, Stable Door, Shoji Door

Fixed Issues:  
- Textures for the Bark Glass Doors don't align with the top and bottom halves  
- Spruce Bark Glass Door glitch  
- Portcullis & Garage door ignoring redstone power  
- Wrong texture for bark door, the item is yellow, it should be green  
- Recipe all unlock at the world start

Translation:  
- Added uk_ua by Moonvvell  
- Added de_de by Padder

### v1.1.0 / mc1.19.3 - Forge
Added:  
- Waffle Doors ( The cherry door from 1.20 but in other wood colors )

Changes:  
- Walls & Iron Bars now connect to the Jail Door  
- Removed Waterlogging for Garage Doors, Portcullis, Stable Door, Shoji Door

Fixed Issues:  
- Textures for the Bark Glass Doors don't align with the top and bottom halves  
- Spruce Bark Glass Door glitch  
- Portcullis & Garage door ignoring redstone power  
- Wrong texture for bark door, the item is yellow, it should be green  
- Recipe all unlock at the world start

Translation:  
- Added uk_ua by Moonvvell  
- Added de_de by Padder

## Macaw's Fences and Walls
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-fences-and-walls)

### v1.1.2 / mc1.19.2 - Forge
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

### v1.1.2 / mc1.19.1 - Forge
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

### v1.1.2 / mc1.19 - Forge
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

### v1.1.1 / mc1.19.4 - Forge
- Fixed crash at startup  
- Fixed server crash  
- Removed automatic leaves & grass color in biome, for now it will use a custom  
texture and will be revisited later and re-implemented

### v1.1.1 / mc1.19.3 - Forge
- Fixed crash at startup  
- Fixed server crash  
- Removed automatic leaves & grass color in biome, for now it will use a custom  
texture and will be revisited later and re-implemented

## Macaw's Roofs
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-roofs)

### v2.3.1 / mc1.19.2 - Forge
Added:  
- Grass Roofs ( Can be made with grassblock in stonecutter )

Changes:  
- Performance improvements  
- Top Roofs have a better code to handle less blockstates, in game placed one will require a block update ( Place a block next to the roof, or break/place it)

Fixed Issues:  
- When a slab is placed in front of a roof, the face of the slab is invisible

Translations  
- es_cl by Ganbare-Lucifer  
- uk_ua by Moonvvell  
- ru_ru by cutiegin

### v2.3.1 / mc1.19.1 - Forge
Added:  
- Grass Roofs ( Can be made with grassblock in stonecutter )

Changes:  
- Performance improvements  
- Top Roofs have a better code to handle less blockstates, in game placed one will require a block update ( Place a block next to the roof, or break/place it)

Fixed Issues:  
- When a slab is placed in front of a roof, the face of the slab is invisible

Translations  
- es_cl by Ganbare-Lucifer  
- uk_ua by Moonvvell  
- ru_ru by cutiegin

### v2.3.1 / mc1.19 - Forge
Added:  
- Grass Roofs ( Can be made with grassblock in stonecutter )

Changes:  
- Performance improvements  
- Top Roofs have a better code to handle less blockstates, in game placed one will require a block update ( Place a block next to the roof, or break/place it)

Fixed Issues:  
- When a slab is placed in front of a roof, the face of the slab is invisible

Translations  
- es_cl by Ganbare-Lucifer  
- uk_ua by Moonvvell  
- ru_ru by cutiegin

### v2.3.0 / mc1.19.4 - Forge
Added:  
- Stone Bricks Roofs

Changes:  
- Glass Roof model improvements  
- Roof Rain Gutter Lang improvements by Guinaro

Bug Fixes:  
- Removed Waterlogging, (performance improvements)  
- Bottom rain gutter has wrong hitbox when there is another gutter above it  
- Roofing Hammer has some transparent pixels  
- Breaking the rain gutter (not the base and not dyed) it takes a while to break and does not drop anything  
- Inconsistencies in roof textures/UVs  
- Some Roofs can't be toggled with the roofing hammer  
- Lower top and base roofs are broken  
- I placed upside-down steep roofs over some stairs, and that made the top of the stairs disappear and show everything beyond.  
- When any block with complete upper surface is placed under any type of outer corner roof, the bottom of the roof become transparent, leaving annoying see-through gaps.  
- Roofing state just resetting to original state with roofing hammer. When using the hammer on any roof, it ends up just going back to its original state.

### v2.3.0 / mc1.19.3 - Forge
Added:  
- Stone Bricks Roofs

Changes:  
- Glass Roof model improvements  
- Roof Rain Gutter Lang improvements by Guinaro

Bug Fixes:  
- Removed Waterlogging, (performance improvements)  
- Bottom rain gutter has wrong hitbox when there is another gutter above it  
- Roofing Hammer has some transparent pixels  
- Breaking the rain gutter (not the base and not dyed) it takes a while to break and does not drop anything  
- Inconsistencies in roof textures/UVs  
- Some Roofs can't be toggled with the roofing hammer  
- Lower top and base roofs are broken  
- I placed upside-down steep roofs over some stairs, and that made the top of the stairs disappear and show everything beyond.  
- When any block with complete upper surface is placed under any type of outer corner roof, the bottom of the roof become transparent, leaving annoying see-through gaps.  
- Roofing state just resetting to original state with roofing hammer. When using the hammer on any roof, it ends up just going back to its original state.

## Macaw's Windows
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-windows)

### v2.3.0 / mc1.19.2 - Forge
Warning:  
- Resizeable Windows placed facing south, will need to be broken and placed again, since we optimized the hell out of them, only the ones placed like that will need to be placed again to adjust to the optimized code

Added:  
- Deepslate, Sandstone, Red Sandstone, Bricks, quartz, Metal variations for windows  
- Curtain Rods, you can place curtains below them to make them look even better! ( Wooden + Metal, Golden )

Changes:  
- Windows no longer have a placement HINGE like doors, from now one one click opens them to the left, then right, then closes. Making the opening more user friendly  
- Windows from now on when locked, they close  
- Blinds no londer need sneaking for raising them up,  
from now on you can just right click to all states (closed,open,raised)  
- Shutters are no longer redstone compatible (mistake)  
- ConnectedWindows no longer have the state Toggled, the hammer changing the block is now the same as in Roofs mod  
- ConnectedWindows no longer has Facing West & South, instead just North & East ( since East & West / North & South used the same models  
- Curtains now have collisions  
- Blinds light physics  
- Shutters now open all connected shutters, like windows/blinds  
- Curtains no longer have the gray rod texture in them, instead they can be placed under the new curtain rods  
- Curtains have new two variations for a single window

Performance:  
- In total the mod used to have around 15k blockstates, in this version it uses around 7.5k  
- Blinds instead of 32 states use 24  
- Shutters instead of 32 states use 16  
- Connected Windows instead of 128 states use 32  
- WindowBarred instead of 32 states use 16 states  
- Window instead of 128 states use 64 states

Translations:  
- ru_ru by cutiegin  
- es_cl by Ganbare-Lucifer  
- es_es by BroxyZF  
- tr_tr by RuyaSavascisi

Bug Fixes:  
- Culling between resizeable window, and a different type when on top/below of each other  
- Open Macaw's Windows & Curtains don't move on Create Mod contraptions  
- Mosaic Glass Blocks do not let light go through  
- Suggested Language File Fixes

### v2.3.0 / mc1.19.1 - Forge
Warning:  
- Resizeable Windows placed facing south, will need to be broken and placed again, since we optimized the hell out of them, only the ones placed like that will need to be placed again to adjust to the optimized code

Added:  
- Deepslate, Sandstone, Red Sandstone, Bricks, quartz, Metal variations for windows  
- Curtain Rods, you can place curtains below them to make them look even better! ( Wooden + Metal, Golden )

Changes:  
- Windows no longer have a placement HINGE like doors, from now one one click opens them to the left, then right, then closes. Making the opening more user friendly  
- Windows from now on when locked, they close  
- Blinds no londer need sneaking for raising them up,  
from now on you can just right click to all states (closed,open,raised)  
- Shutters are no longer redstone compatible (mistake)  
- ConnectedWindows no longer have the state Toggled, the hammer changing the block is now the same as in Roofs mod  
- ConnectedWindows no longer has Facing West & South, instead just North & East ( since East & West / North & South used the same models  
- Curtains now have collisions  
- Blinds light physics  
- Shutters now open all connected shutters, like windows/blinds  
- Curtains no longer have the gray rod texture in them, instead they can be placed under the new curtain rods  
- Curtains have new two variations for a single window

Performance:  
- In total the mod used to have around 15k blockstates, in this version it uses around 7.5k  
- Blinds instead of 32 states use 24  
- Shutters instead of 32 states use 16  
- Connected Windows instead of 128 states use 32  
- WindowBarred instead of 32 states use 16 states  
- Window instead of 128 states use 64 states

Translations:  
- ru_ru by cutiegin  
- es_cl by Ganbare-Lucifer  
- es_es by BroxyZF  
- tr_tr by RuyaSavascisi

Bug Fixes:  
- Culling between resizeable window, and a different type when on top/below of each other  
- Open Macaw's Windows & Curtains don't move on Create Mod contraptions  
- Mosaic Glass Blocks do not let light go through  
- Suggested Language File Fixes

### v2.3.0 / mc1.19 - Forge
Warning:  
- Resizeable Windows placed facing south, will need to be broken and placed again, since we optimized the hell out of them, only the ones placed like that will need to be placed again to adjust to the optimized code

Added:  
- Deepslate, Sandstone, Red Sandstone, Bricks, quartz, Metal variations for windows  
- Curtain Rods, you can place curtains below them to make them look even better! ( Wooden + Metal, Golden )

Changes:  
- Windows no longer have a placement HINGE like doors, from now one one click opens them to the left, then right, then closes. Making the opening more user friendly  
- Windows from now on when locked, they close  
- Blinds no londer need sneaking for raising them up,  
from now on you can just right click to all states (closed,open,raised)  
- Shutters are no longer redstone compatible (mistake)  
- ConnectedWindows no longer have the state Toggled, the hammer changing the block is now the same as in Roofs mod  
- ConnectedWindows no longer has Facing West & South, instead just North & East ( since East & West / North & South used the same models  
- Curtains now have collisions  
- Blinds light physics  
- Shutters now open all connected shutters, like windows/blinds  
- Curtains no longer have the gray rod texture in them, instead they can be placed under the new curtain rods  
- Curtains have new two variations for a single window

Performance:  
- In total the mod used to have around 15k blockstates, in this version it uses around 7.5k  
- Blinds instead of 32 states use 24  
- Shutters instead of 32 states use 16  
- Connected Windows instead of 128 states use 32  
- WindowBarred instead of 32 states use 16 states  
- Window instead of 128 states use 64 states

Translations:  
- ru_ru by cutiegin  
- es_cl by Ganbare-Lucifer  
- es_es by BroxyZF  
- tr_tr by RuyaSavascisi

Bug Fixes:  
- Culling between resizeable window, and a different type when on top/below of each other  
- Open Macaw's Windows & Curtains don't move on Create Mod contraptions  
- Mosaic Glass Blocks do not let light go through  
- Suggested Language File Fixes

### v2.2.1 / mc1.19.4 - Forge
- Added One Way Glass & Pane  
- Added 10 more curtain options (Can be cycled through)

Quality of Life Changes:  
- Curtains can now be cycled backwards while crouching  
- Curtains no longer have a collision box (because they are curtains after all)  
- Windows are no longer opening both sides, but just one whole side

Fixed Issues:  
- Shutters Curtain Waterlogging issue  
- Panes are connecting to Blinds  
- Shutters have wrong color  
- Removed unecessary files  
- Connected windows are resetting with hammer next to them  
- All crafting components not showing in workbench correctly  
- When blinds are raised up and there is no model, it has  
purple/black particles breaking

### v2.2.1 / mc1.19.3 - Forge
- Added One Way Glass & Pane  
- Added 10 more curtain options (Can be cycled through)

Quality of Life Changes:  
- Curtains can now be cycled backwards while crouching  
- Curtains no longer have a collision box (because they are curtains after all)  
- Windows are no longer opening both sides, but just one whole side

Fixed Issues:  
- Shutters Curtain Waterlogging issue  
- Panes are connecting to Blinds  
- Shutters have wrong color  
- Removed unecessary files  
- Connected windows are resetting with hammer next to them  
- All crafting components not showing in workbench correctly  
- When blinds are raised up and there is no model, it has  
purple/black particles breaking

## Macaw's Fences - Oh The Biomes You'll Go
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-fences-oh-the-biomes-youll-go)

### mcwfencesbyg-forge-1.19.2-1.1


### mcwfencesbyg-forge-1.19.3-1.0
Port to 1.19.3 !

Work in 1.19.4 just update the required depedency !

## Moonlight Lib
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/selene)

### moonlight-1.19.2-2.3.7-forge.jar
### UPDATED:

*   Added undetected _stripped_cloudcap_stem_ from **Aether: Redux**, it will be detected by **Every Compat**

## Packet Fixer
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/packet-fixer)

### Packet Fixer 1.4.2
*   **Fixed:** Fixed compat with Immersive Portals

### Packet Fixer 1.4.1
*   **Fixed:** Unable to fit X into 3.

### Packet Fixer 1.4.0
*   **Added:** Change messages when throws errors.
*   **Added:** Now you can modify all sizes in the Packet Fixer config.

### Packet Fixer 1.3.2
*   **Fixed:** Connectivity crash.

### Packet Fixer 1.3.1
*   **Fixed:** Crash with NBT

### Packet Fixer 1.3.0
*   **Fixes:** Problems with payload 1048576

### Packet Fixer Forge 1.2.8
Fixed payload 1048576

## Recipe Essentials[Forge/Fabric]
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/recipe-essentials-forge-fabric)

### recipeessentials-1.19.2-3.5.jar
3.5: Fix enableBetterRecipebookSorting config not applying

## Create Slice & Dice
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/slice-and-dice)

### Forge 2.3.3
Fixed:

*   harvesters not using shears for leaves anymore (#153)
*   mod crashed without farmers delight

Added:

*   French translation by @rmnvgr

**Full Changelog**: [https://github.com/PssbleTrngle/SliceAndDice/compare/2.3.2...2.3.3](https://github.com/PssbleTrngle/SliceAndDice/compare/2.3.2...2.3.3)

## Sound Physics Remastered
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/sound-physics-remastered)

### [FORGE][1.19.2] Sound Physics Remastered 1.19.2-1.4.5
*   Updated Simplified Chinese translation

### [FORGE][1.19.2] Sound Physics Remastered 1.19.2-1.4.2
*   Disable thunder sound evaluation by default
*   Disable goat horn sound evaluation by default
*   Fixed audio positioning when eating or drinking
*   Fixed level cache being updated when mod is disabled
*   Fixed reverb attenuation
*   Added reverb distance config option

### [FORGE][1.19.2] Sound Physics Remastered 1.19.2-1.4.1
*   Fixed sounds getting muffled when they shouldn't
*   Fixed raycast block exclusion regression
*   Fixed log spam when joining a world

### [FORGE][1.19.2] Sound Physics Remastered 1.19.2-1.4.0
*   Fixed thread safety issues
*   Fixed compatibility with Create
*   Improved performance
*   Added performance profiling

Thanks to @augustsaintfreytag

### [FORGE][1.19.2] Sound Physics Remastered 1.19.2-1.3.1
*   Updated dependencies
*   Fixed mod icon size

### [1.19.2] Sound Physics Remastered 1.19.2-1.3.0
*   Added Spanish translation
*   Added Chinese translation
*   Fixed underwater sounds
*   Fixed boat rowing sounds muffled
*   Fixed player hurt sound muffled when standing in water
*   Fixed not being able to hear ambient cave sounds
*   Fixed ambient underwater sounds being muffled
*   Fixed jukebox sounds being occluded

### [1.19.4] Sound Physics Remastered 1.19.4-1.2.1
*   Fixed crash on servers

### [1.19.2] Sound Physics Remastered 1.19.2-1.2.1
*   Fixed crash on servers

### [1.19.4] Sound Physics Remastered 1.19.4-1.2.0
*   Fixed game freezing when far away from the world origin
*   Fixed lag spikes
*   Reworked reflectivity config
*   Reworked occlusion config
*   Added voice chat audio categories to allowed sounds config

### [1.19.2] Sound Physics Remastered 1.19.2-1.2.0
*   Fixed game freezing when far away from the world origin
*   Fixed lag spikes
*   Reworked reflectivity config
*   Reworked occlusion config
*   Added voice chat audio categories to allowed sounds config

### [FORGE][1.19.4] Sound Physics Remastered 1.19.4-1.1.1
*   Fixed some cloth config settings not saving properly

### [FORGE][1.19.4] Sound Physics Remastered 1.19.4-1.1.0
*   Updated to 1.19.4

### [FORGE][1.19.3] Sound Physics Remastered 1.19.3-1.1.0
*   Updated ConfigBuilder
*   Added comments to the config
*   Removed sound blacklist regex
*   Added allowed sounds config
*   Fixed lag when saving in cloth config GUI
*   Fixed sound distance allowance not working with playsound commands

### [FORGE][1.19.3] Sound Physics Remastered 1.19.3-1.0.18
*   Improved performance when having 'update_moving_sounds' enabled

## Tarot Cards
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/tarot-cards)

### tarotcards-1.19.2-1.6.4.jar
*   added french translation (by aspyro)

## Trade Cycling
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/trade-cycling)

### [FORGE][1.19.2] Trade Cycling 1.19.2-1.0.13
*   Updated dependencies
*   Fixed crash

### [FORGE][1.19.2] Trade Cycling 1.19.2-1.0.10
*   Updated Mexican Spanish translation

### [FORGE][1.19.2] Trade Cycling 1.19.2-1.0.9


### [FORGE][1.19.2] Trade Cycling 1.19.2-1.0.8
*   Updated update checker URL
*   Updated config builder

### [FORGE][1.19.4] Trade Cycling 1.19.4-1.0.5
*   Updated to 1.19.4

### [FORGE][1.19.3] Trade Cycling 1.19.3-1.0.5
*   Updated to 1.19.3

## Simple Voice Chat
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat)

### [FORGE][1.19.2] Simple Voice Chat 1.19.2-2.5.19
*   Updated Korean translation

### [FORGE][1.19.2] Simple Voice Chat 1.19.2-2.5.18
*   Updated French translations
*   Improved server address determination on clients

### [FORGE][1.19.2] Simple Voice Chat 1.19.2-2.5.17
*   Updated Swedish translation

### [FORGE][1.19.2] Simple Voice Chat 1.19.2-2.5.16
*   Updated Russian translation

## Joy of Painting
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/joy-of-painting)

### Forge 1.19.2 - Version 1.0.2
Fixed a crash with painting rendering in some cases, added sanitization to the import function, fixed some message translation keys getting mixed up

### Forge 1.19.4 - Version 1.0.1
Fixed a crash with painting rendering in some cases, added sanitization to the import function, fixed some message translation keys getting mixed up

### Forge 1.19.4 - Version 1.0.0
Updated to 1.19.4

### Forge 1.19.3 - Version 1.0.1
Fixed import/export commands being only runnable by ops on multiplayer

### Forge 1.19.3 - Version 1.0.0
Updated to 1.19.3


_________________
# **Removed Mods**

## Noisium (Unofficial port)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/noisium-unofficial-forge-port)

## DoesPotatoTick?
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/doespotatotick)


_________________

Changelog generated by [CF-Changelog-Generator](https://github.com/Charismara/CF-Changelog-Generator)