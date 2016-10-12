# Retro Text

## About
Retro Text - API Bindings for the Retro Text Generator  
By Jack Baron  
Copyright (c) Jack Baron 2016  
Licensed under ISC License  
[![Travis](https://img.shields.io/travis/lolPants/retrotext.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/retrotext)    

## Installation
Install the package using
```npm i retrotext```

To add it as a dependency, use
```npm i --save retrotext```

Once installed, require the package with

```js
const RetroText = require('retrotext')
const text = new RetroText()
```

## Usage
Call the `generate` function on the new `RetroText` object.  
The function returns a Promise with the url contained in it.  

Example  
```js
const RetroText = require('retrotext')
const text = new RetroText()

text.generate({
  background: 3,
  textStyle: 2,
  text: {
    line1: "Line 1",
    line2: "Line 2",
    line3: "Line 3"
  }
}).then(url => { console.log(url); }).catch( console.log );
```

## Credits
- Jack Baron (https://github.com/lolpants) - Author
- Request Team (https://github.com/request) - Request Library
- CheerioJS Team (https://github.com/cheeriojs) - Cheerio Library