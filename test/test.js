/*
  Retro Text Generator
  By Jack Baron (me@jackbaron.com)
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Testing Module
*/

// Require Dependencies
const path      = require('path')
const r         = require('request')
const crypto    = require('crypto')

// Require Self
const RetroText = require(path.join('..', 'src'))
const text      = new RetroText([
  'Line 1',
  'Line 2',
  'Line 3',
], {
  background: 3,
  textStyle: 2,
})
