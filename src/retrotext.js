const request = require('request')
const cheerio = require('cheerio')

let RetroText = function() {}

RetroText.prototype.generate = function (options) {
  return new Promise(function (fulfill, reject) {
    if (options === undefined) reject("Invalid Options")
    let parsedOptions = {}
    parsedOptions.bcg = (!isNaN(options.background) && options.background > 0 && options.background < 6) ? options.background : 5
    parsedOptions.txt = (!isNaN(options.textStyle) && options.textStyle > 0 && options.textStyle < 5) ? options.textStyle : 5
    if (options.text === undefined) options.text = {}
    parsedOptions.text1 = (options.text.line1 !== undefined) ? options.text.line1 : ""
    parsedOptions.text2 = (options.text.line2 !== undefined) ? options.text.line2 : ""
    parsedOptions.text3 = (options.text.line3 !== undefined) ? options.text.line3 : ""

    request.post({
      url: `http://photofunia.com/effects/retro-wave`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: parsedOptions
    }, (error, response, body) => {
      if (!error) {
        request({
          url: "http://photofunia.com" + response.headers.location
        }, (error, response, body) => {
          if (!error && response.statusCode === 200) {
            let $ = cheerio.load(body)
            let url = $('.options-container').children('.downloads-container').children('.links').children().first().children().first().attr('href')

            url = url.split("?")[0]
            fulfill(url)
          } else {
            reject(error)
          }
        })
      } else {
        reject(error)
      }
    })
  })
}

module.exports = RetroText