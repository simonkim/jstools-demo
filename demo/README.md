# Node.js hello

## Install node first

## Project creation
From command line, type to generate <code> package.json </code>
```
$ npm init
```

```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (node) hello
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/simon/Documents/workspace/jstools-demo/node/package.json:

{
  "name": "hello",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) 
```

Create index.js with the following line,
```
console.log('hello');
```

## Run

From command line, type,
```
node index.js
```

And you will get,
```
hello
```

