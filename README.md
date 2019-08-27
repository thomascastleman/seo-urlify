# seo-urlify

This is a very light-weight, dependency-free package that formats strings, removing characters that are unsafe for use in URLs and joining word tokens with a given delimiter.

This can be useful for generating SEO-friendly URLs from strings, such as:
```
https://stackoverflow.com/questions/7920860/how-to-generate-large-random-numbers-c
```

In this case, they have taken the question title ("How to generate large random numbers C") and formatted it for use in the question URL.

## Installation

First, install:
```
npm install seo-urlify --save
```

Then, import the module before using:
```javascript
const urlify = require('seo-urlify');
```

## Usage
#### Simple
Simply call `urlify` on the string you wish to format

```javascript
urlify("This string is definitely, most certainly, not URL friendly!");
// --> "this-string-is-definitely-most-certainly-not-url-friendly"
```

#### Advanced
You also have the option to pass in an object with parameters as a second argument to `urlify`. The available parameters are:
- **delim**: the character with which to join word tokens in the formatted string
- **preserveCase**: a boolean indicating whether or not upper case letters should be preserved in the output

```javascript
urlify("This string is definitely, most certainly, not URL friendly!", { delim: '_', preserveCase: true });
// --> "This_string_is_definitely_most_certainly_not_URL_friendly"
```
