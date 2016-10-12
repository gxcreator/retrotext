const path      = require('path')
const open      = require('open')
const r         = require('request')
const crypto    = require('crypto');
const RetroText = require(path.join("..", "main.js"))
const text      = new RetroText()

text.generate({
  background: 3,
  textStyle: 2,
  text: {
    line1: "Line 1",
    line2: "Line 2",
    line3: "Line 3"
  }
}).then(url => {
    r.get(url, (error, request, body) => {
      if (!error) {
        // Test Image Hash
        let hash = crypto.createHash('md5').update(body).digest('hex');
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
});