var bcore;

bcore = module.exports = {};

bcore.slug = function(string) {
  var seperator, unidecode;
  if (!string) {
    return null;
  }
  unidecode = require('unidecode');
  seperator = '-';
  string = unidecode(string);
  string = string.replace(/[:\/\?#\[\]@!$&'()*+,;=\\%<>\|\^~£"]/g, '').replace(/(\s|\.)/g, seperator).replace(/-+/g, seperator).toLowerCase();
  if (string.substring(string.length - 1) === '-') {
    string = string.substring(0, string.length - 1);
  }
  return string;
};

bcore.readPostsInDir = function(dir, recur) {};
