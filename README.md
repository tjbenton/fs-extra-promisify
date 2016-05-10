# fs-extra-promisify
This is a very small wrapper around [fs-extra](https://github.com/jprichardson/node-fs-extra) to convert it's async functionality to use es6 promises instead of callbacks or adding
and additional dependencies to your package. I'm not doing anything fancy with this library just looping through the functions and converting the async functions to promise style using [es6-promisify](https://github.com/digitaldesignlabs/es6-promisify).


## ES6/ES2015
```js
import fs from 'fs-extra-promisify'

async function read(file) {
  return await fs.readFile(file)
}
```


## ES5
```js
var fs = require('fs-extra-promisify')

function read(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file).then(resolve).catch(reject)
  })
}
```

Some people prefer to know that a function is async so for every function that is converted to async (aka `fs.readFile`)
is also accessible through `fs.async`. This means that `fs.async.readFile` and `fs.readFile` are the same function it's just a
matter of preference on how you want to write it. I would pick one or the other and stick with it throughout the project and
not mix them throughout the project because it can cause confusion to other developers that are looking at your code.


Since this is such a small wrapper around another library there aren't a whole lot of tests so if you come across an
issue feel free to create a pull request with the fixes or open an issue and I'll get it fixed as soon as I can.

