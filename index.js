// # Mr Clean
//
// Disclaimer: This is a work in progress....
// 
// A Genie who will make your markup clean!
//
module.exports = (function() {
  var scum = "html head body script style link".split(' ')
  
  // does the actual cleaning
  var scrub = function(text) {
    var _i, _len, _s, _exp;
    for(_i = 0, _len = scum.length; _i < _len; _i++) {
      _s = scum[_i];
      _exp = new RegExp("<" + _s + "[^>]*?>.*?<\/" + _s + ">", "gi")
      text = text.replace(_exp, '');
      
    }
    return text;
  }
  
  return {
    clean: function(text, callback) {
      var _cleantext;
      _cleantext = scrub(text);
      callback(null, _cleantext);
      return true;
    }
  }
})();