/**
 * @typedef {Object} LinesObject
 * @property {string} line1
 * @property {string} line2
 * @property {string} line3
 */

/**
 * @typedef {Object} RetroTextProperties
 * @property {LinesObject} textLines
 * @property {number} backgroundStyle
 * @property {number} textStyle
 */

/**
 * Retro Text Generator
 */
class RetroText {
  /**
   * @param {RetroTextProperties} data Default Properties
   */
  constructor (data = {
    textLines: { line1: '', line2: '', line3: '' },
    backgroundStyle: 2,
    textStyle: 3,
  }) {
    this.setup(data)
  }

  /**
   * Setup Class Variables
   * @param {RetroTextProperties} data Default Properties
   */
  setup (data) {
    /**
     * @type {?LinesObject}
     */
    this.textLines = data.textLines

    /**
     * @type {?number}
     */
    this.backgroundStyle = data.backgroundStyle

    /**
     * @type {?number}
     */
    this.textStyle = data.textStyle
  }
}

module.exports = RetroText
