/*
  Retro Text Generator
  By Jack Baron (me@jackbaron.com)
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Generate Module
*/

// Require Dependencies
const request = require('request')
const cheerio = require('cheerio')

// Define Self
let RetroText = function() {}

// Generate Function
RetroText.prototype.generate = function (options) {
  // Return a Promise
  return new Promise(function (fulfill, reject) {
    // Reject if options are wrong
    if (options === undefined) reject("Invalid Options")

    // Define Parsed Options
    let parsedOptions = {}

    // Parse the two easy things
    parsedOptions.bcg = (!isNaN(options.background) && options.background > 0 && options.background < 6) ? options.background : 5
    parsedOptions.txt = (!isNaN(options.textStyle) && options.textStyle > 0 && options.textStyle < 5) ? options.textStyle : 4

    // Text lines are optional, parse them too
    if (options.text === undefined) options.text = {}
    parsedOptions.text1 = (options.text.line1 !== undefined) ? options.text.line1 : ""
    parsedOptions.text2 = (options.text.line2 !== undefined) ? options.text.line2 : ""
    parsedOptions.text3 = (options.text.line3 !== undefined) ? options.text.line3 : ""

    // Send a request to their servers
    request.post({
      url: `http://photofunia.com/effects/retro-wave`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: parsedOptions
    }, (error, response, body) => {
      // Handle error
      if (!error) {
        // If OK, request the result URL
        request({
          url: "http://photofunia.com" + response.headers.location
        }, (error, response, body) => {
          // Check if all is well
          if (!error && response.statusCode === 200) {
            // Define local jQuery (I'm sorry it works OK)
            let $ = cheerio.load(body)

            // Find the URL in the response and remove the ?download parameter
            let url = $('.options-container').children('.downloads-container').children('.links').children().first().children().first().attr('href')
            url = url.split("?")[0]

            // Fulfill the promise
            fulfill(url)
          } else {
            // On an error,
            // reject the promise
            reject(error)
          }
        })
      } else {
        // On an error,
        // reject the promise
        reject(error)
      }
    })
  })
}

// Export self
module.exports = RetroText