const path = require('path')
const open = require('open')
const RetroText = require(path.join("..", "main.js"))
const text = new RetroText()

text.generate({
  background: 3,
  textStyle: 2,
  text: {
    line1: "Line 1",
    line2: "Line 2",
    line3: "Line 3"
  }
}).then(url => { throw 'test' }).catch( console.log );