# **Script and Config Changes**

- Deleted some seasonal hats from non-seasonal hat collections
- Corrected some quest text about the Soul Elytra
- Fixed the Discord invite link in the Welcome page
- Inventory items can no longer be placed in Hexerei Coffers
- Various Teeth can now be crushed into Bone Meal
- Cobbled Deepslate can now be crushed into Gravel

You can find additional patch notes for archived updates here:
https://github.com/katubug/CottageWitch119/blob/main/patch%20notes/patch-notes-1.16.15.md

# **New Mods**

## CIT Reforged
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/cit-reforged)

## InventoryLogger [Backups]
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/inventorylogger-backups)

## Jade 🔍
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/jade)

## Ars Scalaes
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/ars-scalaes)

## [EMF] Entity Model Features [Fabric & Forge]
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/entity-model-features)

## [ETF] Entity Texture Features - [Fabric & Forge]
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/entity-texture-features-fabric)

## Entity Culling Fabric/Forge
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/entityculling)

## Exposure
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/exposure)

## Extra Delight
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/extradelight)

## Not Enough Animations
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/not-enough-animations)

## What Are They Up To (Watut)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/what-are-they-up-to)

## WITS (What Is This Structure?)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/wits)


_________________
# **Changed Mods**
## Apple Crates
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/apple-crates)

### Apple Crates-forge-1.19.2-2.13.1.jar
Add french translation. Add possibility to add multiple owners

### Apple Crates-forge-1.19.2-2.13.0.jar
add patch to fix updating from 29 slots to 30 slots to prevent item loss. Fix being able to underpay owner. Fix inventory offset issue

### Apple Crates-forge-1.19.2-2.12.1.jar
add comparator output for apple crates

### Apple Crates-forge-1.19.2-2.12.0.jar
1.19.2 revamped : internal changes for future proofing. Bug fixes : quick move stack crashes, payment stealing, payment not updating correctly, payment pickup not working correctly, nbt mismatch with payment, payment not leaving crate correctly on breaking

### Apple Crates-forge-1.19.2-2.11.1.jar
test release : braking changes. fix hopper support in fabric. fix some QoL mouse interaction bugs with slots and quick moving stacks

### Apple Crates-forge-1.19.2-2.11.0.jar
test release : braking changes. port to fabric. fix various menu issues. internal fixes for a smoother future programing updates

## Just Enough Items (JEI)
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/jei)

### jei-1.19.2-forge-11.8.1.1031.jar
### Current release 11.8.1

*   [Fix #3788 Not cycling through ingredients when looking at recipes](https://github.com/mezz/JustEnoughItems/commit/debef98ee7deda2e20f4b86b746042c53da388d0) - mezz
    
*   [Add support for Recipe Category Decorators (#3255)](https://github.com/mezz/JustEnoughItems/commit/1336a7bd31225acffbd235ea0bc624b410c88c38) - Relentless
    *   Co-authored-by: Relentless <relentless@rlnt.dev>
    *   Co-authored-by: LLytho <main@lytho.dev>
    *   Co-authored-by: mezz <tehgeek@gmail.com>
*   [Fix #3767 Recipe ID should be shown for all recipes when advanced tooltips are enabled](https://github.com/mezz/JustEnoughItems/commit/2e8c54db52e0612a0886cde59a146bb1ea0fc1a4) - mezz
    
*   [Fix handling of restricted slots in recipe transfers](https://github.com/mezz/JustEnoughItems/commit/ff06e682326c55ce341c0746d00a497ef04eaa30) - mezz
    
*   [Fix #3731 Ingredient list gets disordered after a resource reload](https://github.com/mezz/JustEnoughItems/commit/0350e83fe82cddee72e503f3766a85832d381396) - mezz
    
*   [Fix slot view order when recipe has linked slots](https://github.com/mezz/JustEnoughItems/commit/a1db6aa1576813682f2eb2da891f8ec8cff40369) - mezz
    *   Fixes [https://github.com/SlimeKnights/TinkersConstruct/issues/5232](https://github.com/SlimeKnights/TinkersConstruct/issues/5232)
*   [Backport a lot of code from 1.20.1 to 1.19.2 (#3766)](https://github.com/mezz/JustEnoughItems/commit/bc0732c433e6e45ca7b8d5e439e36073a44498ab) - James Mitchell
    
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

## Iris & Oculus Flywheel Compat
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/iris-flywheel-compat)

### Forge 1.19.2+1.0.3b-beta
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

## Simple Voice Chat
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat)

### [FORGE][1.19.2] Simple Voice Chat 1.19.2-2.5.23
*   Fixed potential incompatibility with other mods


_________________
# **Removed Mods**

## Item Obliterator [Forge/Neo/Fabric/Quilt]
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/item-obliterator)

## The One Probe
[CurseForge Link](https://www.curseforge.com/minecraft/mc-mods/the-one-probe)


_________________

Changelog generated by [CF-Changelog-Generator](https://github.com/Charismara/CF-Changelog-Generator)