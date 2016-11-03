# Retro Text
[![Travis](https://img.shields.io/travis/lolPants/retrotext.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/retrotext)    

## About
Retro Text - API Bindings for the Retro Text Generator  
By Jack Baron  
Copyright (c) Jack Baron 2016  
Licensed under ISC License  

## Installation
Install the package using  
`npm i retrotext`

To add it as a dependency, use  
`yarn add retrotext` or `npm i -S retrotext`

Once installed, require the package with

```js
const RetroText = require('retrotext')
const text = new RetroText()
```

## Usage
Call the `generate` function on the new `RetroText` object.  
The function returns a Promise with the url contained in it.  

### Options
The `generate` function takes two options:  
* `text` - An array of text lines (3 maximum)
* `options` - An object containing `background` and `textStyle`  
`background` takes a number from 1 - 5 inclusive    
`textStyle` takes a number from 1 - 4 inclusive

Example:

```js
const RetroText = require('retrotext')
const text = new RetroText()

text.generate([
  'Line 1',
  'Line 2',
  'Line 3',
], {
  background: 3,
  textStyle: 2,
}).then(url => { console.log(url) }).catch( console.log )
```

## Credits
- Jack Baron (https://github.com/lolpants) - Author
- Request Team (https://github.com/request) - Request Library
- CheerioJS Team (https://github.com/cheeriojs) - Cheerio Library