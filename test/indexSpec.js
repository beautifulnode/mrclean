sanitize = require('../');

badscript = "Hi! <script src='http://www.evilsite.com/bad_script.js'></script>It's a good day!"
badstyle = "Hi! <style type='css/text'>foobar</style>It's a good day!"
badlink = "Hi! <link href='htt://foo.bar'></link>It's a good day!"

describe('MR Clean', function() {
  describe('Sanitize Method', function() {
    it('should clean script tags', function() {
      sanitize.clean(badscript, function(err, cleanText){
        cleanText.should.eql("Hi! It's a good day!");
      });
    });
    it('should clean style tags', function() {
      sanitize.clean(badstyle, function(err, cleanText){
        cleanText.should.eql("Hi! It's a good day!");
      });
    });
    it('should clean link tags', function() {
      sanitize.clean(badlink, function(err, cleanText){
        cleanText.should.eql("Hi! It's a good day!");
      });
    });

  });
});