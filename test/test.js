/*
  Retro Text Generator
  By Jack Baron (me@jackbaron.com)
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Testing Module
*/

// Require Dependencies
const path      = require('path')
const open      = require('open')
const r         = require('request')
const crypto    = require('crypto')

// Require Self
const RetroText = require(path.join('..', 'lib', '/'))
const text      = new RetroText()

// Test it
text.generate({
  background: 3,
  textStyle: 2,
  text: {
    line1: "Line 1",
    line2: "Line 2",
    line3: "Line 3"
  }
}).then(url => {
  // Check the test result
  r.get(url, (error, request, body) => {
    if (!error) {
      // Test Image Hash
      let hash = crypto.createHash('md5').update(body).digest('hex')
      if (hash === "92a440c856d5f9150c1d527a9271729d") {
        // Hash is good
        process.exit(0)
      } else {
        // Hash is wrong
        process.exit(1)
      }
    } else {
      process.exit(1)
    }
  })
}).catch( err => {
  // Failure  
  process.exit(1)
})