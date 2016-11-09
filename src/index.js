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

class RetroText {
  /**
   * Retro Text Generator
   * @param {array} text - Array of Text Lines
   * @param {Object} options - Options for Background and Text Styles
   * @throws {Error}
   */
  constructor (text = [], options) {
    // Reject if options are missing
    if (text === undefined) throw new Error(`Invalid Options`)
    if (options === undefined) throw new Error(`Invalid Options`)

    // Define Parsed Options
    this._parsedOptions = this._parseOptions(text, options)

    console.log(this._parsedOptions)
  }

  /**
   * Parse Options into Correct Format
   * @param {array} text - Array of Text Lines
   * @param {Object} options - Options for Background and Text Styles
   * @returns {Object} Parsed Options
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
}

// Export Class
module.exports = RetroText
