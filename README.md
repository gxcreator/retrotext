<h1 align='center'>Retro Text <a href='https://www.npmjs.com/package/retrotext'><img src='https://img.shields.io/travis/lolPants/retrotext.svg?maxAge=2592000%3Fstyle=flat-square' /></a></h1>

<h5 align='center'>API Bindings for the Retro Text Generator on PhotoFunia. Licensed under ISC License.</h5>

<h2 align='center'><i>NOTE: As of Version 2.0.0 Nodejs 8 or higher is REQUIRED</i></h2>

## Installation
<div style='width: 100%; display: flex; justify-content: space-around;'>
  <span>Using NPM: <code>npm install retrotext</code></span>
  <span>Using Yarn: <code>yarn add retrotext</code></span>
</div>

## Usage
First, create a new instance of the RetroText class:
```js
const RetroText = require('retrotext')
const text = new RetroText()
```

Next, add details as appropriate:
```js
const text = new RetroText()
  .setLine1('Line 1')
  .setLine1('Line 1')
  .setLine1('Line 1')
  .setBackgroundStyle(1)
  .setTextStyle(4)
```

Finally, fetch either a URL to the final image, or the image downloaded as a `Buffer` object:  
*Note: Both methods return Promises*
```js
let URL = await text.fetchURL()
let buffer = await text.fetchBuffer()
```

## Credits
- Capsule Digital (https://photofunia.com/) - Original Online Generator
- Gus Caplan (https://github.com/devsnek) - Snekfetch HTTP Library
- Cheerio Team (https://github.com/cheeriojs) - Cheerio Library
