import errors from "./errors.js"

export default (...args) => {
    const numbers = args

    if (!numbers.every(Number.isFinite)) {
        throw new TypeError(errors.invalidInput)
    }

    return args.reduce((a, b) => {
        return a + b
    }, 0);
}