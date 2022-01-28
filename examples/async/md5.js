import crypto from 'crypto'
import errors from './errors.js';

export default (string, callback) => {
    const withCallback = typeof callback === 'function';

    try {
        const hash = crypto.createHash('md5')
            .update(string)
            .digest('hex');

        withCallback && callback(null, hash);
    } catch (e) {
        if (withCallback) {
            console.log(e)
            callback(errors.hashFail)
        }
        else throw e;
    }
}