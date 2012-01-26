// # Mr Clean
//
// A Genie who will make your markup clean!
//
module.exports = function (scum) {
  var defaultScum = "html head body script style link object div span table".split(' ');
  return new MrClean(scum || defaultScum);
};

function MrClean(scum) {
  this.scum = scum;
}

var soap = function(tag, text) {
  var exp = new RegExp("<" + tag + "[^>]*?>.*?<\/" + tag + ">", "gi");
  return text.replace(exp, '');
};

var scrub = function(scum, text) {
 var i, len;
 for(i = 0, len = scum.length; i < len; i++) {
   text = soap(scum[i], text);
 }
 return text;
};

MrClean.prototype.clean = function(text, callback) {
  var self = this;
  var cleantext;
  
  cleantext = scrub(self.scum, text);
  // no style for you!
  cleantext = cleantext.replace(/style/, 'data.badfood');
  callback(null, cleantext);
  return true;
};
