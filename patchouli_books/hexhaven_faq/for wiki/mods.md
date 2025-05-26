# Guide to Modded MC

Modded Minecraft can be confusing and overwhelming to learn.

Here are some simple guides to help you along the way!

# Applied Energistics 2 - AE2

Applied Energistics 2 is a storage mod.

In Cottage Witch, we have *heavily* modified the recipes and gameplay surrounding AE2 to make it more thematic and accessible for all skill levels. {Curseforge Page}(https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2)

This section of the FAQ book is meant to be used in conjunction with the **quests** under the **storage section**.

If something doesn't quite make sense, make sure to look in $(l:patchouli:mods/jei)JEI$() and/or the **quest book**!

AE2 is very similar to Refined Storage. Some blocks have direct equivalents, but there are differences."

## Storing Items

One difference is storing items. In RS, you would want to make a **Celestial Glyphstone** (or 64k drive) to store as many items as possible.

Take a look at some AE2 glyphstones on the right. There is a *limit* on the number of *unique item types* that a glyphstone can hold.

Hovering over this **Celestial Glyphstone**, it says there are 0 of *63 types*.

This means that *63 unique items* can go into that glyphstone.

There is another number there - 0 of 65536 Facets. This is the *total number* of items that can go into this glyphstone.

This means you can stack a *large amount* of any of the *63 unique item types*.

As soon as you try to put a 64th item type in, you won't be able to.

### Which Glyphstone to Use

Crafting the Gems (comparable to crafting glyphs in RS) is more complex due to how their storage works.

We recommend starting with the *Arcane Resonant Glyphstones (4k)* for storing most of your items while getting the most out of your resources.

If you find you have a large amount of some items, consider storing them in a *functional storage drawer* or making the larger glyphstones!

## Making an AE2 system

"images": ["hexhaven:textures/faq/mods/simple_ae2.png"],
"text": "Picture of a simple AE2 Setup

We couldn't get a multiblock for this setup in, so please take an image in its stead.

For a simple setup, you will need a **Glyphic Repository**, **Lodestone Core**, a **Scrying Nexus** (or) a **Nexus Crafting Aperture** on a cable, and **Glyphstones**!

## External Storage

Want to hookup your Functional Storage Drawers?

The equivalent of the RS **External Storage** for AE2 is the **Nexus Storage Anchor**!

Remember that the **Storage Anchor** sits on a **cable** connected to your AE2 system.

This connects to your Functional Storage **Storage Controller**!

Recall that you should increase the priority of your **Storage Anchor** to store items in the drawers.

## Going Wireless

Your wireless journey will require a handful of items and blocks.

To start, add these two blocks onto your existing AE2 system: The **Aetheric Beacon** and the **Guardian Ward**. 

Then you will need to connect your **Resonant Aperture**.

### Getting Access

Connect to your network by *shift clicking* your **Resonant Aperture** inside your **Guardian Ward**.

Now you will have short range wireless access!

"hexhaven:textures/faq/mods/guardian_ward_screen.png"],
"text": "Example of Guardian Ward with linked Resonant Aperture!

Next, let's get the required materials for *cross-dimensional* access.

We will need to make a **Aetheric Core**, which is made using the fairy ring on the right!

Inside the fairy ring, toss an **Eye of Ender**, **Rough Lazurite**, **Tablet of Binding**, and **Consecrated Certus Quartz Crystal**

### Fairy Ring

"text": "The center dirt blocks can be any block",
"multiblock": {
    "mapping": {
        "P": "#minecraft:mushroom_grow_block",
        "M": "#forge:mushrooms",
        "D": "minecraft:dirt"
    },
    "pattern": [
        [" MM ", "M  M", "M  M", " MM "],
        ["0PP ", "PDDP", "PDDP", " PP "]
    ]
}

With the **Aetheric Core**, you will make two *linked* **Entangled Aetheric Fragments.**

In order to do this, you will need to explode a **Aetheric Core** and **Ender Dust** or an Ender Pearl.

You can obtain **Ender Dust** by crushing an ender pearl using a crushing wheel or a millstone.

For a small explosion that causes no block damage use **Tiny TNT**!

Drop both items on the ground next to the Tiny TNT and then light it with a flint and steel.

## Crossing Dimensions

A multiblock structure will need to be connected to your AE2 system.

After connecting the **Aetheric Bridge** with a cable, right click on the center block and insert one **Entangled Aetheric Fragment**.

You'll need the second **Entangled Aetheric Fragment** in the next step.

### Aetheric Bridge

"text": "Requires 8x **Aetheric Ring** and 1x **Aetheric Chamber**",
"multiblock": {
    "mapping": {
        "R": "ae2:quantum_ring",
        "C": "ae2:quantum_link"
    },
    "pattern": [
        [" ", "R", "R", "R", " "],
        [" ", "R", "C", "R", " "],
        ["0", "R", "R", "R", " "]
    ]
}

Finally, we will need a **Planar Bridge Card** and the second **Entangled Aetheric Fragment**.

Open your **Resonant Aperture** and find the sidebar to the right.

"images": ["hexhaven:textures/faq/mods/wireless_ae2.png"],
"text": "*Manually* insert both items into the sidebar.

Ensure the chunk containing your AE2 system is chunk loaded!

You can read more about chunk loading $(l:patchouli:mods/ftb#claiming)here$()!

# Contact

Contact is a mailing mod. 

If you do not have a mailbox setup, mail will be sent to the central mailbox.

Central mailboxes can only be placed by server admins. [Curseforge Page](https://www.curseforge.com/minecraft/mc-mods/contact).

Mail sent by other users will arrive at your mailbox.

Contact only allows you to have one mailbox at a time.

To send mail, you will need to use wrapping paper or ender wrapping paper. You can pack up to 4 items into the wrapping paper. Once packed, it will turn into a parcel!

Ender parcels will send to a mailbox instantly. The time required to send a normal parcel is based on how far away that mailbox is.

To send the parcels, you place them in a postbox and enter the username of the player you wish to send it to!