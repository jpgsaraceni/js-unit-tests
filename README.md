# JavaScript unit tests with Mocha

Study repo for unit tests in JavaScript using the Mocha and Chai framework. I chose Mocha because it supports ESM (Jest supports only experimentally), and Chai because the [tutorial](https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/#ismochajsabddtool) I followed uses Chai for assertions.

The example directory contains examples from the said tutorial, with some (mostly) minor improvements.

## About running tests with Mocha

By default (`mocha test` command), Mocha runs everything in the `test` directory (`./test`). Personally, I prefer having my unit tests together with the files they are testing, so I name them with a `.test.js` extension, and have the script

```json
"scripts": {
    "test": "mocha ./**/*.test.js"
},
```

in my `package.json`, to just run `npm test` and test all files. Note that you don't import Mocha in any code files, you just run the CLI command.

**You may need to install mocha globally (`npm i --global mocha`) to run the Mocha CLI**
