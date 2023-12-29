---
pageSlug: geometry-dash-needs-multiplayer-here-is-how-robtop-can-do-it
title: Geometry Dash Needs Multiplayer. Here Is How RobTop Can Do It
desc: "After Geometry Dash 2.2, Geometry Dash has pretty much every feature any
  creator could ask for. However, there is something that the game still needs:
  Multiplayer."
date: 2023-12-28T20:41:05.080Z
tags:
  - video
author: moldy
image: https://i.ytimg.com/vi/ikHNmNiyTss/maxresdefault.jpg
imageSource: ""
affiliateLinks: false
hideAds: false
---
After [Geometry Dash 2.2](/categories/2.2/), Geometry Dash has pretty much every feature any creator could ask for. However, there is something that the game still needs: Multiplayer.

While Platformer mode is already begging for it, it could work in normal mode and in the editor as well. Here is our idea for a multiplayer update and how RobTop can make it happen!

But first, a Geometry Dash multiplayer update would contain three things:

1. [Normal mode multiplayer](#normal-mode-multiplayer)
2. [Platformer mode multiplayer](#platformer-mode-multiplayer)
3. [Live collab system for the level editor](live-collab-system-for-the-level-editor)

# Normal mode multiplayer

This is probably the easiest multiplayer to introduce, but that doesn't mean it won't be super impactful!

While RobTop is [adding Versus Mode in 2.21](/posts/robtop-cancels-geometry-dash-2-2-versus-mode-after-6-years-of-development/), that will not feature live multiplayer in the sense that you can see the other players. You can only see yourself.

Fortunately, adding the ability to see other players is not as difficult as it may seem! Modders already made a multiplayer mod back in update 2.1, so if they could do it on their own, surely RobTop could do it with his resources.

That being said, this approach to multiplayer may appear to have some issues on the surface. For one, there could be some cases where players look like they are flying or going through walls due to finding hidden secrets in the level.

Since you only see the other player's icon and not the platforms that they are using, it could look a little strange.

However, this is the exception rather than the rule. The vast majority of non-platformer levels, even in 2.2, don't feature many of these gimmicks. Likewise, Super Mario Wonder's online mode has been able to get away with an identical system.

# Platformer mode multiplayer

This system would be slightly harder to implement but still totally doable. For starters, everything will be the same as the [normal mode multiplayer](#normal-mode-multiplayer) system, but with one addition.

All triggers in a level will have two states: **local mode** and **server mode**.

- **Local mode** triggers will only effect the level of the player who activates it.
- **Server mode** triggers will effect everyone who is playing together.

So that old levels don't break, all triggers will default to **local mode**.

This way, creators can connect keys that open doors to **server mode** triggers, whereas triggers that control the camera for each player can be kept on **local mode**.