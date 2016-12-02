/*
  Retro Text Generator
  By Jack Baron (me@jackbaron.com)
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Testing Module
*/

// Require Dependencies
const crypto = require('crypto')
const chai = require('chai')
const expect = chai.expect
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

// Require Self
const RetroText = require('../src/')
const text = new RetroText([
  'Line 1',
  'Line 2',
  'Line 3',
], {
  background: 3,
  textStyle: 2,
})

describe('RetroText', () => {
  describe('Generation', () => {
    it('Fulfills Promise', () => {
      expect(text.getBuffer()).to.eventually.be.fulfilled
    })

    it('Has Correct Hash', () => {
      let hash = '731ab4fa94807c2529ffb8467fbf26df'
      expect(
        text
          .getBuffer()
          .then(buffer => crypto.createHash('md5').update(buffer).digest('hex'))
        )
      .to.eventually.equal(hash)
    })
  })
})
