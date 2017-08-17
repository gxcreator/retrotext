/**
 * @typedef {Object} TextObject
 * @property {string} line1
 * @property {string} line2
 * @property {string} line3
 */

/**
 * @typedef {Object} RetroTextProperties
 * @property {TextObject} text
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
    text: { line1: '', line2: '', line3: '' },
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
     * @type {?TextObject}
     */
    this.text = data.text

    /**
     * @type {?number}
     */
    this.backgroundStyle = data.backgroundStyle

    /**
     * @type {?number}
     */
    this.textStyle = data.textStyle
  }

  /**
   * Set Text for Generation
   * @param {TextObject} text Text Object
   * @returns {RetroText}
   */
  setText (text) {
    this.text = text
    return this
  }

  /**
   * Set Line 1 Text for Generation
   * @param {string} line Line 1 Text
   * @returns {RetroText}
   */
  setLine1 (line) {
    this.text.line1 = line.toString()
    return this
  }

  /**
   * Set Line 2 Text for Generation
   * @param {string} line Line 2 Text
   * @returns {RetroText}
   */
  setLine2 (line) {
    this.text.line2 = line.toString()
    return this
  }

  /**
   * Set Line 3 Text for Generation
   * @param {string} line Line 3 Text
   * @returns {RetroText}
   */
  setLine3 (line) {
    this.text.line3 = line.toString()
    return this
  }

  /**
   * Set a Line's Text for Generation
   * @param {number|string} number Line Number (1 - 3)
   * @param {string} line Line Text
   * @returns {RetroText}
   */
  setLine (number, line) {
    if (typeof number === 'string') number = parseInt(number)
    if (number < 1 || number > 3) throw new Error('Invalid Line Number')

    line = line.toString()
    switch (number) {
      case 1:
        this.text.line1 = line
        break
      case 2:
        this.text.line2 = line
        break
      case 3:
        this.text.line3 = line
        break
    }
    return this
  }
}

const text = new RetroText()
  .setLine1('Testing')
  .setLine2('This')
  .setLine3('Thang')

console.log(text)

// Used for debugging
// VSCode Workaround
setInterval(() => {}, 9999999999999)

module.exports = RetroText
