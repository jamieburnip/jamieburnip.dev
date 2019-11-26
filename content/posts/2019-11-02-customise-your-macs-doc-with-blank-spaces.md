---
date: 2019-11-02
title: "Add spaces to customise your macs doc"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
slug: "add-spaces-to-your-mac-doc"
categories:
  - Snippets
tags:
    - mac os
---
# Add
Enter this into the terminal.
```terminal
$ defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'
```

Changes wont show up untill the dock is restarted.
```terminal
$ killall Dock
```
