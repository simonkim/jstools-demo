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

<blockquote>
After this, lib/hlsm3u8.js, index.js, and sample.js have been created and implemented. 
</blockquote>

## Build

Install npm dependencies first,
```
npm install
```

Build command invokes <code>webpack</code> to build code into public/dist/hlsm3u8.js for browser use.
```
npm run build
```

## Run

From command line, type,
```
node sample.js
```

## Testing

To run browser tests, open <code>jasmine/SpecRunner.html</code> in a browser.

To run tests from command line,

First, install Jasmine NPM module,
```
npm install -g jasmine
```

Run Node based tests,
```
npm run test
```

This runs Jasmine spec defined in spec/hlsm3u8spec.js.


## Sample code
In HTML for browser run,
```
<script src="dist/hlsm3u8.js"></script>
<script type="text/javascript">
    var text = '#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=2215351,BANDWIDTH=2266597,CODECS="avc1.640020,mp4a.40.2",RESOLUTION=960x540,FRAME-RATE=59.940,CLOSED-CAPTIONS="cc1",AUDIO="aud1",SUBTITLES="sub1"';
    var hlsm3u8 = new Hlsm3u8();
    var attrs = hlsm3u8.streamInfoAttrs(text);
    var strings = attrs.map(function(attr, index){
        return attr.attr + ': ' + attr.value;
    });
    // ...
</script>
```

## Documents
Build API documents,
```
npm run docs
```

And then open <code>docs/index.html</code> in a browser.