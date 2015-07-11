bcore = module.exports = {}

bcore.slug = (string) ->
  return null if not string
  unidecode  = require 'unidecode'
  seperator = '-'
  string = unidecode(string)
  string = string.replace(/[:\/\?#\[\]@!$&'()*+,;=\\%<>\|\^~£"]/g, '').replace(/(\s|\.)/g, seperator).replace(/-+/g, seperator).toLowerCase()
  string = string.substring(0, string.length - 1) if string.substring(string.length - 1) is '-'
  string

bcore.readPostsInDir = (dir, recur) ->
  # todo: promisify