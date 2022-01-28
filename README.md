# JavaScript unit tests with Mochi

Study repo for unit tests in JavaScript using the Mochi and Chai framework. I chose Mochi because it supports ESM (Jest supports only experimentally), and Chai because the [tutorial](https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/#ismochajsabddtool) I followed uses Chai for assertions.

The example directory contains examples from the said tutorial, with some (mostly) minor improvements.

## About running tests with Mochi

By default (`mochi test` command), Mochi runs everything in the `test` directory (`./test`). Personally, I prefer having my unit tests together with the files they are testing, so I name them with a `.test.js` extension, and have the script

```json
"scripts": {
    "test": "mocha ./**/*.test.js"
},
```

in my `package.json`, to just run `npm test` and test all files. Note that you don't import Mochi in any code files, you just run the CLI command.

**You may need to install mochi globally (`npm i --global mochi`) to run the Mochi CLI**
