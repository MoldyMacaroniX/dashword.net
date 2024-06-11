---
pageSlug: how-to-downgrade-geometry-dash-2-206-on-steam-and-restore-your-mods
title: How To Downgrade Geometry Dash 2.206 On Steam & Restore Your Mods
desc: After installing the latest Geometry Dash update, you may want to
  downgrade Geometry Dash 2.206 to 2.2, 2.205, or 2.204 after the update broke
  your mods.
date: 2024-06-10T23:36:42.699Z
tags:
  - guide
  - featured
author: dashword
image: https://geode-sdk.org/main-menu.webp
imageSource: https://geode-sdk.org/install/
affiliateLinks: false
hideAds: false
---
After installing the latest Geometry Dash update, you may want to downgrade Geometry Dash 2.206 to 2.2, 2.205, or 2.204 after the update broke your mods.

With [Geometry Dash's latest 2.206 update](/posts/geometry-dash-2-206-released-on-ios-android-and-steam/), all your mods may have broke, such as [Geode](/posts/geometry-dash-geode-how-to-download-and-install/), [Mega Hack](/posts/geometry-dash-mega-hack-how-to-download-and-install/), and [Globed](/posts/geometry-dash-multiplayer-how-to-download-and-install/).

In order to restore your mods, you will need to rollback to Geometry Dash version [2.205](/posts/geometry-dash-update-2-205-released-on-ios-android/), [2.204](/posts/geometry-dash-update-2-204-released-on-steam/), or [2.2](/posts/geometry-dash-2-2-released/), depending on your device. For Windows, you will need to downgrade to Geometry Dash 2.204. So here's how to do just that and downgrade Geometry Dash 2.206 to 2.204 on Steam and bring back your mods.

# How to downgrade Geometry Dash 2.206 on Steam

1. Press WIN + R on your desktop to open the run menu, then type `steam://nav/console`
2. In the console, paste this: `download_depot 322170 322171 2530486154587189554`
3. Wait for it to complete. This could take a few minutes.
4. Navigate to `C:\Program Files (x86)\Steam\steamapps\content` and go into the `depot_322171` folder. This contains all the game files and is basically just the Geometry Dash folder, but with a different name.
5. Once you are in the folder with the game files, create a text file called `steam_appid`, open it, and type `322170`, and then save.
6. [Install Geode](/posts/geometry-dash-geode-how-to-download-and-install/) and **be sure to change the install director to the depot folder!**
7. After Geode is installed, you are now done and can open the `GeometryDash.exe` file to start the game.

Note that these instructions only work for Windows users, as Mac users do not have access to Geometry Dash 2.204, which is the version this method supports.

# How to transfer your existing mods


If you want to transfer your existing mods from Geometry Dash 2.206 to your downgraded version, drag and drop the folders from the Geometry Dash 2.206 version (only the folders and their contents, not any other files) into the `depot_322171` folder (Geometry Dash 2.204). Be sure to drag and drop the Geode folder into the downgraded version.