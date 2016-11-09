/*
  Retro Text Generator
  By Jack Baron (me@jackbaron.com)
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Generate Module
*/

// Require Dependencies
const request = require('superagent')
const cheerio = require('cheerio')

class RetroText {
  /**
   * Retro Text Generator
   * @param {array} text - Array of Text Lines
   * @param {Object} options - Options for Background and Text Styles
   * @throws {Error}
   * @constructor
   */
  constructor (text = [], options) {
    // Reject if options are missing
    if (text === undefined) throw new Error(`Invalid Options`)
    if (options === undefined) throw new Error(`Invalid Options`)

    // Define Parsed Options
    this._parsedOptions = this._parseOptions(text, options)
  }

  /**
   * Parse Options into Correct Format
   * @param {array} text - Array of Text Lines
   * @param {Object} options - Options for Background and Text Styles
   * @returns {Object} Parsed Options
   * @private
   */
  _parseOptions (text, options) {
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
   * @private
   */
  _grabURL (body) {
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

  _parse () {
    return new Promise((resolve, reject) => {

    })
  }
}

// Export Class
module.exports = RetroText
