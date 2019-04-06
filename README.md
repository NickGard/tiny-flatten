# tiny-flatten

[![source](https://badgen.net/npm/v/@ngard/tiny-flatten)](https://www.npmjs.com/package/@ngard/tiny-flatten)
[![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-flatten)](https://bundlephobia.com/result?p=@ngard/tiny-flatten)
[![build status](https://badgen.net/travis/NickGard/tiny-flatten)](https://travis-ci.org/NickGard/tiny-flatten)
[![license](https://badgen.net/badge/license/MIT/blue)](https://badgen.net/badge/license/MIT/blue)

A minimal-weight utility equivalent to `lodash.flatten`. For when every byte counts!

<hr/>

lodash.flatten [![bundle size](https://badgen.net/bundlephobia/minzip/lodash.flatten)](https://bundlephobia.com/result?p=lodash.flatten)
<br/>
tiny-flatten [![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-flatten)](https://bundlephobia.com/result?p=@ngard/tiny-flatten)

<hr/>

## Syntax

```js
flatten(/* array */)
```

## Parameters

`array` - An array to flatten

## Return

Flattens an array a single level deep.

## Example

```javascript
import { flatten } from '@ngard/tiny-flatten';

const value = flatten([1, [2, 3], [4, [5]]]);
// returns [1, 2, 3, 4, [5]]
```
