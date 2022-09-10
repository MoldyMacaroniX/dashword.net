---
title: "How To Import Pixel Art In Geometry Dash"
desc: "Pixel art is relatively underdeveloped in Geometry Dash due to how tedious it is to make. Fortunately, there now exists tools to import pixel art into the game."
image: https://i.ytimg.com/vi/P4mL4MeAivI/maxresdefault.jpg
date: 2022-01-25
tags:
    - guide
author: moldymacaronix
---

Pixel art is relatively underdeveloped in Geometry Dash due to how tedious it is to make. Most of the time it requires tracing art from outside the game, which can be very boring due to the lack of creativity needed. Fortunately, as modding has advanced, there now exists tools to import pixel art into the game, making this otherwise tedious task a breeze.

{% alert %}
Tracing art has led to issues in the past regarding copyright. Never use external art in your levels unless you are absolutely sure you are allowed to use the respective art.
{% endalert %}

# The Program

The program that makes this possible is [Colon](https://gdbrowser.com/u/Colon)'s [Geometry Dash pixel art generator](https://github.com/GDColon/GD-Pixel-Art). This article will go over the following:

* How to download the program
* How the program works
* How to use the program
* How to run the program

Another thing to note is that this program only works for Windows as Mac support is not yet available.

# How to download the program

Start by going to the [program's GitHub page](https://github.com/GDColon/GD-Pixel-Art). Near the top of the screen, there should be a green button that says "Code." Press it and then press "Download ZIP."

Afterwards, go to your downloads folder (wherever files you download appear) and unzip the file. You will then be left with a folder with a file structure similar to the following:

```md
GD-Pixel-Art-master/
├─ node_modules/
├─ img.bat
├─ img.js
├─ leveldata.json
├─ README.md
```

# How the program works

While the specifics of how this program works is far beyond the scope of this article, in a nutshell:

* The program takes an image file and optimize it.
* The program converts the optimized image into a new level.
* The program looks for your local levels save file.
* The program adds the created level to your local levels save file.

# How to use the program

Simply add the image file you want to import into the game to the "GD-Pixel-Art-master" folder (the folder might be called something different for you).

# How to run the program

First things first, this program requires **node.js**. Here is a [download tutorial](https://phoenixnap.com/kb/install-node-js-npm-on-windows) to install it. Now with it installed, there are two methods to run the program.

## Method 1: Run `img.bat`

1. Simply double click the `img.bat` file and the program will run.
2. Type the command `npm i` to install the dependencies.
3. Close the window and repeat the first step.

## Method 2: Run `img.js`

1. Open the Windows command terminal (try searching "cmd") and navigate to the dirctory where the `img.js` file is located. If you are not familiar with the Windows command terminal, see [this tutorial](https://www.howtogeek.com/659411/how-to-change-directories-in-command-prompt-on-windows-10/).
2. Type the command `npm i` to install the dependencies.
3. Type the command `node img.js`.

# Important Considerations

* The allowed use of using this tool in rated levels has yet to be publicly decided, so please keep that in mind when using this program.
* Do not use big images. All images should be compressed down to their most basic dimensions.
* This tool is made for pixel art, not anything detailed.
* If you are worried about save file corruption, it is a good idea to backup your data prior to using this program.

If you have any questions, the [GitHub repository](https://github.com/GDColon/GD-Pixel-Art) might be of use.