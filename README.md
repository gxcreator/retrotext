# Retro Text
[![Travis](https://img.shields.io/travis/lolPants/retrotext.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/retrotext)    

## About
Retro Text - API Bindings for the Retro Text Generator on PhotoFunia  
By Jack Baron  
Licensed under ISC License  
[PhotoFunia](https://photofunia.com/)  

## Credits
- Jack Baron (https://github.com/lolpants) - Author
- Capsule Digital (https://photofunia.com/) - Original Online Generator
- Visionmedia (https://github.com/visionmedia) - Superagent Library
- CheerioJS Team (https://github.com/cheeriojs) - Cheerio Library

## Installation
Install the package using  
`npm i retrotext`

To add it as a dependency, use  
`yarn add retrotext` or `npm i -S retrotext`

Once installed, require the package with

```js
const RetroText = require('retrotext')
const text = new RetroText(text, options)
```

### Options
The `RetroText` class takes two options:  
* `text` - An array of text lines (3 maximum)
* `options` - An object containing `background` and `textStyle`  
`background` takes a number from 1 - 5 inclusive    
`textStyle` takes a number from 1 - 4 inclusive

## Usage
Call the `getURL` or `getBuffer` functions on the new `RetroText` object.  
The function returns a Promise with the URL / buffer respectively.  

Example:

```js
const RetroText = require('retrotext')
const text = new RetroText([
  'Line 1',
  'Line 2',
  'Line 3',
], {
  background: 3,
  textStyle: 2,
})

text.getURL().then(url => { console.log(url) }).catch( console.log )
```