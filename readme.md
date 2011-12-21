Mr Clean
========

It's a HTML Sanitizer!
It's a genie!

It's fabulous!

## Install

``` sh
npm install mrclean
```

## Usage in NodeJs

``` javascript
mrclean = require('mrclean');

dirtyHtml = "Hi! <script src='http://www.evilsite.com/bad_script.js'></script>It's a good day!"
mrclean.clean(dirtyHtml, function(err, cleanHtml) {
  // All Clean!
  console.log(cleanHtml);
});

```

## Usage in the Browser

First add mrclean.js to your html page.

``` javascript
<script type="text/javascript">
$(document).ready(function() {
  $('button').click(function() {
    MrClean.clean($('textarea').val(), function(err, cleanText) {
      console.log(cleanText);
    });
  });
});

</script>

```


## Contributing

Contributors are welcome, please create issues and submit pull requests in feature branches!

See [http://scottchacon.com/2011/08/31/github-flow.html](http://scottchacon.com/2011/08/31/github-flow.html)

## License

SEE LICENSE