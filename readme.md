# verim [![Build Status](https://travis-ci.org/herber/verim.svg?branch=master)](https://travis-ci.org/herber/verim) [![codecov](https://codecov.io/gh/herber/verim/badge.svg?branch=master)](https://codecov.io/gh/herber/verim?branch=master)

> A minimal assertion library

## Install

```
$ npm install verim
```

## Usage

```js
const verim = require('verim');

verim(false, 'unicorns & rainbows');
//=> 'unicorns & rainbows'
```

## API

### verim(boolean, message, strict)

#### boolean

Type: `boolean`

If not true an error will be thrown

#### message

Type: `string`

The error message

#### strict

Type: `boolean`
Default: `true`

If set to `true` an error will be thrown else the `message` will be logged to stderr.

## License

MIT © [Tobias Herber](http://tobihrbr.com)
