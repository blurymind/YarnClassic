![Yarn Editor CI](https://github.com/daviddq/YarnEditor/workflows/Yarn%20Editor%20CI/badge.svg?branch=ci)

# Yarn 🐱 🧺

Dialogue editor created for "Night in the Woods" (and other projects) by @NoelFB, @blurymind and @infinite_ammo with contributions from @seiyria and @beeglebug. It is heavily inspired by and based on the amazing Twine software: http://twinery.org/

# 🧶 Live Web APP (Use it in the browser)
<a href="https://yarnspinnertool.github.io/YarnEditor">https://yarnspinnertool.github.io/YarnEditor/</a>
<br/>
<a href="https://yarnspinnertool.github.io/YarnEditor"><img src="https://raw.githubusercontent.com/YarnSpinnerTool/YarnEditor/master/doc/yarnWebApp.png"
alt="Yarn web app"  height="480" border="10" /></a>

# 📲 Install the Web App on your mobile device
1. Visit <a href="https://yarnspinnertool.github.io/YarnEditor">https://yarnspinnertool.github.io/YarnEditor/</a>
<br/> with your smartphone or tablet
2. Open the web browser's menu and select "Add to home screen"
3. When you run Yarn from the home screen, it will work in full screen mode, even when you are offline!
<br/>
<a href="https://yarnspinnertool.github.io/YarnEditor"><img src="https://raw.githubusercontent.com/YarnSpinnerTool/YarnEditor/master/doc/yarnMobile.jpeg"
alt="Yarn web app"  height="480" border="10" /></a>

# 🚧 Roadmap
You can see planned features, vote for features or see how you can contribute at the roadmap here:
https://trello.com/b/ZXhhOzDl/yarn-roadmap

# 🎮 Game engines that bundle Yarn editor
There are a few game engines that have YarnEditor bundled with their IDE. That means that you can use it straight in those engines, without need to save files and open files and so on. It's directly integratedin their workflow!

- Gdevelop : A full-featured, open-source game development software, allowing to create HTML5 and native games without any knowledge in a specific programming language. All the game logic is built up using an intuitive and powerful event-based system.
https://github.com/4ian/GDevelop

- Ct.js : A desktop game editor that makes learning programming fun and game development easy by its visual editors and well-documented code library.
https://github.com/ct-js/ct-js

# 🧠 Yarn runtimes
The runtime is a library that allows your game engine to parse the files that yarn creates. There are a couple of popular ones that you can use. If you have created a runtime, you are working on one or want to get one included with your game engine, these can be of some use to you

- YarnSpinner : A C# library for interactive dialogue in games! Ideal  if you are using Unity3d or another C# game engine!
https://github.com/YarnSpinnerTool/YarnSpinner

- Bondagejs : A Javascript-based parser for the Yarn dialogue tree markup language. Ideal if your game engine uses html5 technologies to run (Gdevelop and ctjs use it).
https://github.com/hylyh/bondage.js

# 🐬 Features 🦄

### BBcode styling in editor, Spellchecking, Autocompletion, and more!
- Optional syntax autocompletion (autoclose tags)
- preview of bbcode tag effects and goto in trimmed nodes
- optional spell checking
- optional word guessing and autocompletion
- optional preview bbcode in editor mode
- a color picker (using spectrum.js) to set font color in bbcode
- emoji picker to insert emojis
- new context menu
- misspelled word suggestions in the new context menu - if you have selected a misspelled word
- similar word suggestions in the new context menu (thesaurus)
- nodelink suggestions as you type in the right places
- Night mode - Toggling it will invert all the light colors which the editor currently uses
- A context menu command to visit other nodes via their links in the editor and even create new ones
- Button to go back to the previous edited node. If there is no previous - save and close the current one
![yarn-0 3 5-newfeatures](https://user-images.githubusercontent.com/6495061/50045609-b646e900-008d-11e9-9f17-2ac6b01908f6.gif)

# Electron Builds

Win64 and MacOS: https://github.com/YarnSpinnerTool/YarnEditor/releases/latest

# ⚙️ Compile and run web app on localhost:
Make sure you have nodejs installed. Then from the root folder
```
npm install

npm start
```
You can access it on your smartphone too if it is on the same wifi network

# To build web app:
```
npm run build

```
you will find it in the /dist folder

# To compile and run electron app:
First of all you need to have compiled the web app (see previous steps)
```
cd electron

npm install

npm start
```

# To build an electron yarn executable yourself:
```
cd electron

npm run build-windows

or

npm run build-linux
```

# 😮 Examples

Games built with Unity and Yarn.

Lost Constellation: http://finji.itch.io/lost-constellation

![Screenshot](http://infiniteammo.com/Yarn/lost-constellation.jpg)

Knights and Bikes: https://www.kickstarter.com/projects/foamsword/knights-and-bikes

![Screenshot](http://infiniteammo.com/Yarn/knights-and-bikes.jpg)

Sunflower (Demo): http://infiniteammo.com/Sunflower

![Screenshot](http://infiniteammo.com/Yarn/sunflower.jpg)

Far From Noise by George Batchelor (@georgebatch): http://www.georgebatchelor.com/#!far-from-noise/c1ceg

![Screenshot](http://infiniteammo.com/Yarn/far-from-noise.png)

YarnTest: http://infiniteammo.com/YarnTest/

Test drive your Yarn files here ^

# How to Connect Nodes

Node connections work similar to Twine.

![Screenshot](http://infiniteammo.com/Yarn/node-connections.jpg)

# Shortcut Options

Shortcut options are a new method of creating dialogue branches that does not require creating new nodes.

![Screenshot](http://infiniteammo.com/Yarn/shortcut-options.jpg)

# How to Import Twine Files

One way to import Twine files into Yarn is to export a "Twee" file from Twine. (txt format) Open this txt file in Yarn as you would any other file.

Note: This method of importing will not preserve node locations, just each node's title, body and tags.

# How to Run Your Dialogue in Unity

You can find basic Yarn parsing and playback example code here:

https://github.com/InfiniteAmmoInc/yarn-test

You can find a more advanced Yarn interpreter here:

https://github.com/YarnSpinnerTool/YarnSpinner

# Yarn Icon

Yarn logo/icon created by @Mr_Alistair.

![Icon](http://infiniteammo.com/Yarn/yarn-icon.png)
