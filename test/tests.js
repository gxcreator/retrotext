/*
  Retro Text Generator
  By Jack Baron (me@jackbaron.com)
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Testing Module
*/

// Require Dependencies
const path      = require('path')
const crypto    = require('crypto')

// Require Self
const RetroText = require(path.join('..', 'src'))
const text      = new RetroText([
  'Line 1',
  'Line 2',
  'Line 3',
], {
  background: 3,
  textStyle: 2,
})

text.getBuffer()
  .then(img => {
    let hash = crypto.createHash('md5').update(img).digest('hex')
    if (hash === '731ab4fa94807c2529ffb8467fbf26df') {
      // Hash is good
      process.exit(0)
    } else {
      // Hash is wrong
      process.exit(1)
    }
  })
  .catch(() => {
    // Failure
    process.exit(1)
  })
