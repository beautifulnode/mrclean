Mr Clean
========

It's a HTML Sanitizer!
It's a genie!

It's fabulous!

## Install

``` sh
npm install mrclean
```

## Usage

``` javascript
mrclean = require('mrclean');

dirtyHtml = "Hi! <script src='http://www.evilsite.com/bad_script.js'></script>It's a good day!"
mrclean.clean(dirtyHtml, function(err, cleanHtml) {
  // All Clean!
  console.log(cleanHtml);
});

```


## Contributing

Contributors are welcome, please create issues and submit pull requests in feature branches!

See [http://scottchacon.com/2011/08/31/github-flow.html](http://scottchacon.com/2011/08/31/github-flow.html)

## License

SEE LICENSE