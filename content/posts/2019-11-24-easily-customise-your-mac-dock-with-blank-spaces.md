---
date: 2019-11-24
title: "Easily customise your Mac dock with blank spaces"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: "easily-customise-your-mac-dock-with-blank-spaces"
category: Snippets
tags:
    - mac os
---
Enter this into the terminal.
```terminal
$ defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'
```

Changes wont show up untill the dock is restarted.
```terminal
$ killall Dock
```
