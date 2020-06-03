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

Something else to think about...
```terminal
1
My first note
01/01/1970
```

```js
const note = {
  id: 1,
  title: 'My first note',
  date: '01/01/1970',
}
```

Traditionally, if you wanted to create a new variable for each property, you would have to assign each variable individually, with a lot of repetition:

```js
// Create variables from the Object properties
const id = note.id
const title = note.title
const date = note.date
```

With object destructuring, this can all be done in one line. By surrounding each variable in curly brackets {}, JavaScript will create new variables from each property with the same name:

```js
// Destructure properties into variables
const { id, title, date } = note
Now, console.log() the new variables:

console.log(id)
console.log(title)
console.log(date)
```