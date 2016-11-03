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
let RetroText = function RetroText () {}

/**
 * Parse Options into Correct Format
 * @param {array} text - Array of Text Lines
 * @param {Object} options - Options for Background and Text Styles
 * @returns {Object} Parsed Options
 */
const _parseOptions = (text, options) => {
  let _parsed = {}
  _parsed.bcg = !isNaN(options.background) && options.background > 0 && options.background < 6 ? options.background : 5
  _parsed.txt = !isNaN(options.textStyle) && options.textStyle > 0 && options.textStyle < 5 ? options.textStyle : 4

  _parsed.text1 = text[0] !== undefined ? text[0] : ``
  _parsed.text2 = text[1] !== undefined ? text[1] : ``
  _parsed.text3 = text[2] !== undefined ? text[2] : ``

  return _parsed
}

/**
 * Grab URL from Body of page
 * @param {string} body - Page body to scrape
 * @returns {string} URL of scraped image
 */
const _grabURL = body => {
  // Define local jQuery (I'm sorry it works OK)
  let $ = cheerio.load(body)

  // Find the URL in the response and remove the ?download parameter
  let url = $('.options-container').children('.downloads-container').children('.links')
    .children()
    .first()
    .children()
    .first()
    .attr('href')

  return url.split(`?`)[0]
}

/**
 * Retro Text Generator
 * @param {array} text - Array of Text Lines
 * @param {Object} options - Options for Background and Text Styles
 * @async
 * @returns {string} URL of generated image
 * @throws {Error}
 */
RetroText.prototype.generate = function generate (text = [], options) {
  // Return a Promise
  return new Promise((fulfill, reject) => {
    // Reject if options are missing
    if (text === undefined) reject(`Invalid Options`)
    if (options === undefined) reject(`Invalid Options`)

    // Define Parsed Options
    let _parsedOptions = _parseOptions(text, options)

    // Send a request to their servers
    request.post({
      url: 'http://photofunia.com/effects/retro-wave',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      form: _parsedOptions,
    }, (error, response) => {
      // Handle error
      if (!error) {
        // If OK, request the result URL
        request({
          url: `http://photofunia.com${response.headers.location}`,
        }, (error, response, body) => {
          // Check if all is well
          if (!error && response.statusCode === 200) {
            let url = _grabURL(body)

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
