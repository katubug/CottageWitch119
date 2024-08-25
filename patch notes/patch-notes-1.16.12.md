# **New Mods**
## UniLib
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/unilib)

## Dynamic View[Forge]
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/dynamic-view)

## iChunUtil
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/ichunutil)


_________________
# **Changed Mods**
## Akashic Tome
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/akashic-tome)

### AkashicTome-1.6-26.jar
[https://github.com/VazkiiMods/AkashicTome/releases/tag/release-1.19.2-1.6-26](https://github.com/VazkiiMods/AkashicTome/releases/tag/release-1.19.2-1.6-26)

### AkashicTome-1.6-24.jar
[https://github.com/VazkiiMods/AkashicTome/releases/tag/release-1.19.2-1.6-24](https://github.com/VazkiiMods/AkashicTome/releases/tag/release-1.19.2-1.6-24)

## Cognition (formerly Experience Obelisk)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/experience-obelisk)

### Cognition-v2.2.4-1.19.2.jar
v2.2.4
------

[Changes]

*   Metamorpher output may now be removed using hoppers or otherwise via the bottom face. Items may be fed into the input slots through any other face except the top face
*   Modified the layout of the JEI recipe viewer
*   Standardized & cleaned up tooltips
*   Changed Precision Dispeller recipe -- such that only a single cognitive crystal is required rather than a whole block

## CraftPresence
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/craftpresence)

### [Forge 1.19.2] CraftPresence v2.5.0
CraftPresence Changes
=====================

v2.5.0 (08/08/2024)
-------------------

_A Detailed Changelog from the last release is available [here](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fcompare%252frelease%252fv2.4.3...release%252fv2.5.0)_

See the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) for more info regarding the mod.

### Changes

*   (Backend) Updated Build Dependencies (Please see the appropriate repositories for changes)
    *   Unimined (`1.2.14` -> `1.3.4`)
    *   JVMDowngrader (`0.7.2` -> `1.0.0`)
    *   Shadow (`8.1.7` -> `8.1.8`)
    *   Gradle (`8.8` -> `8.9`)
    *   ModPublisher (`2.1.4` -> `2.1.6`)
    *   ModFusioner (`1.0.12` -> `removed`)
    *   UniLib (`local` -> `1.0.1`)
    *   DiscordIPC (`0.9.2` -> `0.10.0`)
*   Several packaging changes have been made for ease-of-access and for future development:
    *   Added publishing support for [Nightbloom](/linkout?remoteUrl=https%253a%252f%252fnightbloom.cc%252fproject%252fcraftpresence)
    *   Re-Added support for [OG Forge](/linkout?remoteUrl=https%253a%252f%252ffiles.minecraftforge.net%252f) for MC 1.20.2+ Users
    *   Added support for Flint Loader for MC 1.21
    *   Deployed files are now split per-loader, rather than as one "fused" jar per MC version
    *   [UniLib](https://www.curseforge.com/minecraft/mc-mods/unilib) is now a required dependency
*   Removed several config options that were not applicable to CraftPresence or were redundant metadata:
    *   From `main`: `_README`, `_SOURCE`
    *   From `accessibility`: `tooltipBackground`, `tooltipBorder`, `guiBackground`, `altGuiBackground`, `renderTooltips`
*   Moved `Party Privacy` setting from `General` to `Presence Editor (PresenceData)`
    *   This makes this setting an instance property instead of a global setting
    *   Due to the changes behind this method, this property is also reset to its default
*   Improved LAN support for the `server` module
    *   Several fixes have been made for "hosting" LAN servers alongside fixes for LAN in general
    *   This also effects Essential Mod support, given the similar networking tech involved
*   Added an RPC Visualizer to the `Presence Editor` and `Display Settings` Screens
    *   Replicates the look and feel of Discord's Visualizer, allowing users an "at-a-glance" preview of their RPC before saving
    *   Only displays if `Use As Main` is enabled or is the Default Module
    *   Can be disabled with the `Strip Extra Gui Elements` setting in `Accessibility`
*   Added support for Discord Activity Types
    *   Reference: [GitHub](https://github.com/discord/discord-api-docs/pull/7033)
*   Misc. Optimizations and Performance Improvements across several APIs
    *   A large portion of CraftPresence's APIs have now branched off into [UniLib](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fUniLib), now being served as a required dependency for CraftPresence
    *   Many fixes and tweaks have been made over the last few months to make these APIs more usable for the public with better reliability and stability, especially on older versions of Minecraft
*   (Backend) Adjusted `ShadowJar` relocation paths to avoid mod conflicts

### Fixes

_A portion of these fixes are related to API functions that have been transferred to [UniLib](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fUniLib)_

*   (Backend) Fixed `Config#transferFrom` not properly considering flag data (Schema, MC Version, etc.)
    *   This regression could cause config corruption, esp. when using the `HypherConverter` or `KeyConverter`
*   (Backend) Fixed the `RAW_TRANSLATOR` not setting the proper `stripFormatting` flags
*   Fixed `enabled` and `visible` state discrepancies on various UI Text Widgets
*   Fixed issues where Slot List scrolling was inconsistent on some Legacy MC versions compared to others
*   Fixed an issue in the BTA port where weather retrieval was not properly working
*   Fixed inconsistent world data retrieval on some Legacy MC versions compared to others
*   Fixed [an issue](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fissues%252f224) where a crash can occur while registering Translation Listeners
*   Fixed potential issues where `server.players.current` could be above `server.players.max`
*   (Backend) Fixed issues relating to text going off-screen with some `ScrollableTextWidget` elements
    *   Effected the `Advanced` and `Presence Editor` UIs

* * *

### More Information

#### Known Issues

Despite configuration compatibility often being ensured between versions, caution is advised to ensure the best experience, while also baring in mind that features can be adjusted, removed, or added/iterated upon between releases.

Please refer to the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) to view more info relating to known issues.

#### Snapshot Build Info

Some Versions of this Mod are for Minecraft Snapshots or Experimental Versions, and as such, caution should be noted.

Any Snapshot Build released will be marked as **ALPHA** to match its Snapshot Status depending on tests done before release and issues found.

Snapshot Builds, depending on circumstances, may also contain changes for a future version of the mod, and will be noted as so if this is the case with the `-Staging` label.

### [Forge 1.19.3] CraftPresence v2.5.0
CraftPresence Changes
=====================

v2.5.0 (08/08/2024)
-------------------

_A Detailed Changelog from the last release is available [here](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fcompare%252frelease%252fv2.4.3...release%252fv2.5.0)_

See the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) for more info regarding the mod.

### Changes

*   (Backend) Updated Build Dependencies (Please see the appropriate repositories for changes)
    *   Unimined (`1.2.14` -> `1.3.4`)
    *   JVMDowngrader (`0.7.2` -> `1.0.0`)
    *   Shadow (`8.1.7` -> `8.1.8`)
    *   Gradle (`8.8` -> `8.9`)
    *   ModPublisher (`2.1.4` -> `2.1.6`)
    *   ModFusioner (`1.0.12` -> `removed`)
    *   UniLib (`local` -> `1.0.1`)
    *   DiscordIPC (`0.9.2` -> `0.10.0`)
*   Several packaging changes have been made for ease-of-access and for future development:
    *   Added publishing support for [Nightbloom](/linkout?remoteUrl=https%253a%252f%252fnightbloom.cc%252fproject%252fcraftpresence)
    *   Re-Added support for [OG Forge](/linkout?remoteUrl=https%253a%252f%252ffiles.minecraftforge.net%252f) for MC 1.20.2+ Users
    *   Added support for Flint Loader for MC 1.21
    *   Deployed files are now split per-loader, rather than as one "fused" jar per MC version
    *   [UniLib](https://www.curseforge.com/minecraft/mc-mods/unilib) is now a required dependency
*   Removed several config options that were not applicable to CraftPresence or were redundant metadata:
    *   From `main`: `_README`, `_SOURCE`
    *   From `accessibility`: `tooltipBackground`, `tooltipBorder`, `guiBackground`, `altGuiBackground`, `renderTooltips`
*   Moved `Party Privacy` setting from `General` to `Presence Editor (PresenceData)`
    *   This makes this setting an instance property instead of a global setting
    *   Due to the changes behind this method, this property is also reset to its default
*   Improved LAN support for the `server` module
    *   Several fixes have been made for "hosting" LAN servers alongside fixes for LAN in general
    *   This also effects Essential Mod support, given the similar networking tech involved
*   Added an RPC Visualizer to the `Presence Editor` and `Display Settings` Screens
    *   Replicates the look and feel of Discord's Visualizer, allowing users an "at-a-glance" preview of their RPC before saving
    *   Only displays if `Use As Main` is enabled or is the Default Module
    *   Can be disabled with the `Strip Extra Gui Elements` setting in `Accessibility`
*   Added support for Discord Activity Types
    *   Reference: [GitHub](https://github.com/discord/discord-api-docs/pull/7033)
*   Misc. Optimizations and Performance Improvements across several APIs
    *   A large portion of CraftPresence's APIs have now branched off into [UniLib](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fUniLib), now being served as a required dependency for CraftPresence
    *   Many fixes and tweaks have been made over the last few months to make these APIs more usable for the public with better reliability and stability, especially on older versions of Minecraft
*   (Backend) Adjusted `ShadowJar` relocation paths to avoid mod conflicts

### Fixes

_A portion of these fixes are related to API functions that have been transferred to [UniLib](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fUniLib)_

*   (Backend) Fixed `Config#transferFrom` not properly considering flag data (Schema, MC Version, etc.)
    *   This regression could cause config corruption, esp. when using the `HypherConverter` or `KeyConverter`
*   (Backend) Fixed the `RAW_TRANSLATOR` not setting the proper `stripFormatting` flags
*   Fixed `enabled` and `visible` state discrepancies on various UI Text Widgets
*   Fixed issues where Slot List scrolling was inconsistent on some Legacy MC versions compared to others
*   Fixed an issue in the BTA port where weather retrieval was not properly working
*   Fixed inconsistent world data retrieval on some Legacy MC versions compared to others
*   Fixed [an issue](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence%252f-%252fissues%252f224) where a crash can occur while registering Translation Listeners
*   Fixed potential issues where `server.players.current` could be above `server.players.max`
*   (Backend) Fixed issues relating to text going off-screen with some `ScrollableTextWidget` elements
    *   Effected the `Advanced` and `Presence Editor` UIs

* * *

### More Information

#### Known Issues

Despite configuration compatibility often being ensured between versions, caution is advised to ensure the best experience, while also baring in mind that features can be adjusted, removed, or added/iterated upon between releases.

Please refer to the Mod Description or [README](/linkout?remoteUrl=https%253a%252f%252fgitlab.com%252fCDAGaming%252fCraftPresence) to view more info relating to known issues.

#### Snapshot Build Info

Some Versions of this Mod are for Minecraft Snapshots or Experimental Versions, and as such, caution should be noted.

Any Snapshot Build released will be marked as **ALPHA** to match its Snapshot Status depending on tests done before release and issues found.

Snapshot Builds, depending on circumstances, may also contain changes for a future version of the mod, and will be noted as so if this is the case with the `-Staging` label.

### CraftPresence v2.4.3 (1.19)
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

## Ding (Forge)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/ding)

### [1.19.2 Forge] v 1.5.0
Ding
====

### 1.5.0

*   Now dependent on iChunUtil for all Mod Loaders. CompleteConfig no longer required on Fabric.
*   Significant code refactors due to new dependency on iChunUtil.

### 1.4.1

*   Ported to MC 1.20.4
*   Ported to NeoForge
*   Added missing icon.png for Mods list.

* * *

This changelog only lists at most the 5 most recent changes since its implementation.

Ports to new MC versions will not be included in the changelog unless the version is also updated.

### Ding-1.19.4-Forge-1.4.1.jar
1.4.1:  
- Fix crash caused when FML catches an error from another mod and stops loading mods.  
- Ported to 1.19.4

### Ding-1.19.3-Forge-1.4.1.jar
1.4.1:  
- Fix crash caused when FML catches an error from another mod and stops loading mods.

## ImmediatelyFast
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/immediatelyfast)

### ImmediatelyFast 1.2.20
**v1.2.20 Changelog**

*   Hotfix mod compatibility issues introduced in v1.2.19

**v1.2.19 Changelog**

*   Added support for Minecraft 1.21.1 (Fabric + NeoForge)
*   Updated libraries
*   Fixed screen batching conflict with PolyLib
*   Added support for custom glint RenderLayers
*   Fixed compatibility issues with mods rendering custom item overlays
*   Fixed performance issues with negative width glyphs
*   Fixed armor trim rendering order

### ImmediatelyFast 1.2.19
*   Added support for Minecraft 1.21.1 (Fabric + NeoForge)
*   Updated libraries
*   Fixed screen batching conflict with PolyLib
*   Added support for custom glint RenderLayers
*   Fixed compatibility issues with mods rendering custom item overlays
*   Fixed performance issues with negative width glyphs
*   Fixed armor trim rendering order

## Xaero's Minimap
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap)

### v24.3.0 for Forge 1.19.2 (or .1)
[Read changelogs](/linkout?remoteUrl=https%253a%252f%252fchocolateminecraft.com%252fupdate.php%253fmod_id%253d0)

### v24.2.0 for Forge 1.19.4
[Read changelogs](/linkout?remoteUrl=https%253a%252f%252fchocolateminecraft.com%252fupdate.php%253fmod_id%253d0)

## Connected Glass
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/connected-glass)

### Connected Glass 1.1.12 for Forge 1.19.2
### Connected Glass 1.1.12

*   Added Turkish translations (thanks to RuyaSavascisi!)
*   Added Ukrainian translations (thanks to MeDustyy!)
*   Added glass blocks to the appropriate `forge:glass/<color>` tags

### Connected Glass 1.1.11

*   Fixed mobs being able to spawn on the glass blocks
*   Added Japanese translations (thanks to ALFECLARE!)
*   Updated Russian translations (thanks to TheAnaxMan!)

### Connected Glass 1.1.10

*   Fixed dedicated server crash when Fusion is not installed

### Connected Glass 1.1.9

*   Connected Glass now uses Fusion for connected textures
*   Support for Forge's and Fabric's appearance API
*   Resource packs can now properly chance glass blocks' models
*   Improved performance

### Connected Glass 1.1.8

*   Fix concurrency issue

### Connected Glass 1.1.7

*   Update Rechiseled integration

### Connected Glass 1.1.6

*   Fix crash when Rechiseled is not installed

### Connected Glass 1.1.5

*   Updated to core library 1.1

### Connected Glass 1.1.11 for Forge 1.19.3
### Connected Glass 1.1.11

*   Fixed mobs being able to spawn on the glass blocks
*   Added Japanese translations (thanks to ALFECLARE!)
*   Updated Russian translations (thanks to TheAnaxMan!)

### Connected Glass 1.1.10

*   Fixed dedicated server crash when Fusion is not installed

### Connected Glass 1.1.9

*   Connected Glass now uses Fusion for connected textures
*   Support for Forge's and Fabric's appearance API
*   Resource packs can now properly chance glass blocks' models
*   Improved performance

### Connected Glass 1.1.8

*   Fix concurrency issue

### Connected Glass 1.1.7

*   Update Rechiseled integration

### Connected Glass 1.1.6

*   Initial release of Connected Glass for Minecraft 1.19.3

## Friends&Foes (Forge/NeoForge)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/friends-and-foes-forge)

### Friends&Foes 2.0.16
*   Fixed glares breeding
*   Added wildfire to the freeze_hurts_extra_types tag
*   Disabled auto check for new mod updates (previously enabled by default)

### Friends&Foes 2.0.15
*   Fixed pig spawning in the iceologer cabin structure
*   Fixed beehive states

### Friends&Foes 2.0.15
*   Fixed pig spawning in the iceologer cabin structure
*   Fixed beehive states

## Integrated Dungeons and Structures
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/idas)

### idas_forge-1.7.7+1.19.2.jar
*   ****Backported the Ice and Fire update to 1.19****
*   **The Labyrinth no longer has elder guardians, IDAS will automatically detect if you've killed the boss (Pharaoh for base mod, Gorgon if Ice and Fire is installed) and apply mining fatigue based on that. HUGE thanks to YungNickYoung for letting me use some of his code to implement this.**
*   **IDAS Structures will now AUTOMATICALLY start create contaptions through a new processor in Integrated API. This means the Labyrinth and Tinker's Workshop will always be activated and will not have to be activated by the player.**
*   **Fixed a typo in the name of the Pharaoh of the Labyrinth**
*   **Fixed an issue with a secret room being impossible to reach in the Labyrinth  
    REMEMBER TO UPDATE THE CONFIG DATAPACK**

~~~~~~~~~~~~~~~~~

[![](https://media.forgecdn.net/attachments/452/988/bh_id_promo.png)](https://www.curseforge.com/linkout?remoteUrl=https://www.bisecthosting.com/craisincraft)

I’ve spent over 400 hours building and coding this mod. I learned Java specifically for this. A great way to support me is to get your server through Bisect, and use my code CraisinCraft. Click on the picture

## Lootr (Forge & NeoForge)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/lootr)

### lootr-forge-1.19-0.4.28.74.jar
*   Bump version for release. [(e12b9914)](https://github.com/noobanidus/lootr/commit/e12b9914)
*   Tweaks to work for 1.19. [(d3796679)](https://github.com/noobanidus/lootr/commit/d3796679)
*   Improve the open_as, add open_as_uuid. [(9016daed)](https://github.com/noobanidus/lootr/commit/9016daed)
*   Additional admin commands: list_player, open_as. [(8d54056b)](https://github.com/noobanidus/lootr/commit/8d54056b)

This mod was made possible by Patreon support from players like you. Thank you!

*   sirdizarm
*   ChosenArchitect
*   Graham Hughes
*   fowltief
*   LyrenF
*   Aranai Ra
*   SeriousCreeper

### lootr-forge-1.19-0.4.28.73.jar
*   Greatly improve performance of ticking data. [(325c7007)](https://github.com/noobanidus/lootr/commit/325c7007)
*   New translations en_us.json (Spanish) (#433) [(6b41ef32)](https://github.com/noobanidus/lootr/commit/6b41ef32)
*   New Crowdin updates (#425) [(8ceb8109)](https://github.com/noobanidus/lootr/commit/8ceb8109)
*   New Crowdin updates (#417) [(4549b865)](https://github.com/noobanidus/lootr/commit/4549b865)
*   New Crowdin updates (#397) [(98eac8bc)](https://github.com/noobanidus/lootr/commit/98eac8bc)
*   New translations en_us.json (Japanese) (#393) [(5db93cf1)](https://github.com/noobanidus/lootr/commit/5db93cf1)
*   New Crowdin updates (#392) [(37160aa9)](https://github.com/noobanidus/lootr/commit/37160aa9)

This mod was made possible by Patreon support from players like you. Thank you!

*   sirdizarm
*   ChosenArchitect
*   Graham Hughes
*   fowltief
*   LyrenF
*   Aranai Ra
*   SeriousCreeper

## Macaw's Bridges - Oh The Biomes You'll Go / Oh The Biomes We've Gone
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-bridges-oh-the-biomes-youll-go)

### macawsbridgesbyg-1.19.2-1.5
Add Balustrade Stone Bridges  
Add French Translation  
Add tags for Wood and Stone Bridges  
Add Stair Recycle Recipes

### macawsbridgesbyg-1.19-1.3
Add Balustrade Stone Bridges  
Add French Translation  
Add tags for Wood and Stone Bridges  
Add Stair Recycle Recipes

### macawsbridgesbyg-1.19.3-1.2
Fix Jsons Error !

## Macaw's Fences - Oh The Biomes You'll Go / Oh The Biomes We've Gone
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/macaws-fences-oh-the-biomes-youll-go)

### mcwfencesbyg-1.19.2-1.2
Add Stone Walls  
Add Hedges Variants

### mcwfencesbyg-forge-1.19.3-1.1


## Iris & Oculus Flywheel Compat
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/iris-flywheel-compat)

### oculus-flywheel-compat-forge1.19.2+1.0.3.jar
**This version only compatible with Iris&Oculus 1.7.0 and above.**

TL;DR:

*   Fix issues in **PBR** and **Parallax Occlusion Mapping**.
*   Support **Seus PTGI HRR 3**, **Shrimple**, and **UShader**, etc.
*   Includes Flywheel in the jar file, so you don't need to install it separately.

### 1.1.3

*   Fix issue [#146](https://github.com/leon-o/iris-flw-compat/issues/146).
    *   Fix issues in PBR. Normals and tangents of moving contraptions now are correct.
    *   Support Parallax Occlusion Mapping.
*   Fix issue [#150](https://github.com/leon-o/iris-flw-compat/issues/150).
    *   Replace `vertex v` with `vertex _flw_v` to avoid conflict with existing variables.
*   Include Flywheel in jar file.
    *   Because some users don't use the Create mod and have trouble with the Flywheel installation, I decided to include it in the jar file.

**New compatible shaders**:

*   Seus PTGI HRR 3
*   Shrimple
*   UShader

There are still many that have not been tested but may be compatible.

### oculus-flywheel-compat-forge1.19.2+1.0.2.jar
1.0.2
-----

1.  Fix issue [#143](https://github.com/leon-o/iris-flw-compat/issues/143), [#36](https://github.com/leon-o/iris-flw-compat/issues/136), [#89](https://github.com/leon-o/iris-flw-compat/issues/89): OpenGL error messages occur when shaders have too many attributes. Now is completely compatible with Bliss and Euphoria Patches.

1.0.1
-----

1.  Fix issue [#125](https://github.com/leon-o/iris-flw-compat/issues/125): occasional crashes when shaders are not enabled. Thanks [MoePus](https://github.com/leon-o/iris-flw-compat/pull/141) for the contribution.

1.0.0
-----

This version only support Iris 1.6.9+.

1.  Fix lighting issues of the moving contraption.
    *   The vertex light strength was incorrectly set to a fixed value, causing the moving contraption won't be affected by the light source.
2.  Use architecture to reorganize the project.
    *   Forge and Fabric forge are now merged into a single project, which is more convenient for future development.
3.  New version number format.
    *   Now the version number starts from 1.0.0. The first number represents the major version and will be increased when the mod has a significant update. The second number represents the Iris/Oculus compatibility and will be increased when the mod is no longer compatible with older versions of iris.

### oculus-flywheel-compat-forge1.19.2+1.0.1.jar
1.0.1
-----

1.  Fix issue [#125](https://github.com/leon-o/iris-flw-compat/issues/125): occasional crashes when shaders are not enabled. Thanks [MoePus](https://github.com/leon-o/iris-flw-compat/pull/141) for the contribution.

1.0.0
-----

This version only support Iris 1.6.9+.

1.  Fix lighting issues of the moving contraption.
    *   The vertex light strength was incorrectly set to a fixed value, causing the moving contraption won't be affected by the light source.
2.  Use architecture to reorganize the project.
    *   Forge and Fabric forge are now merged into a single project, which is more convenient for future development.
3.  New version number format.
    *   Now the version number starts from 1.0.0. The first number represents the major version and will be increased when the mod has a significant update. The second number represents the Iris/Oculus compatibility and will be increased when the mod is no longer compatible with older versions of iris.

### Forge 1.19.2-1.0.0 for Iris 1.6.9+
1.  Fix lighting issues of the moving contraption.
    *   The vertex light strength was incorrectly set to a fixed value, causing the moving contraption won't be affected by the light source.
2.  Use architecture to reorganize the project.
    *   Forge and Fabric forge are now merged into a single project, which is more convenient for future development.
3.  New version number format.
    *   Now the version number starts from 1.0.0. The first number represents the major version and will be increased when the mod has a significant update. The second number represents the Iris/Oculus compatibility and will be increased when the mod is no longer compatible with older versions of iris.

## Trade Cycling
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/trade-cycling)

### [FORGE][1.19.2] Trade Cycling 1.19.2-1.0.14
*   Added Traditional Chinese translation

## Simple Voice Chat
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat)

### [FORGE][1.19.2] Simple Voice Chat 1.19.2-2.5.20
*   Added Vietnamese translation


_________________
# **Removed Mods**

## Mystical Oak Tree
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/mystical-oak-tree)

## Charging Gadgets + Create Style!
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/charging-gadgets-create-style)

## Create Style for Refined Storage
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/create-style-for-refined-storage)

## Fancy Boss Bars
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/fancy-boss-bars)

## Magitech Building Gadgets
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/magitech-biulding-gadgets)

## Magitech Experience Obelisk
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/magitech-experience-obelisk)

## Magitech Pipez Retextures
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/magitech-pipez-mod-retextures)

## Old Jappa's Sand
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/old-jappas-sand)


_________________

Changelog generated by [CF-Changelog-Generator](https://github.com/Charismara/CF-Changelog-Generator)