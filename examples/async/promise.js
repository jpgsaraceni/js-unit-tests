import md5Callback from './callback.js';

export default (string) => { 
    return new Promise((resolve, reject) => {
        md5Callback(string, (err, hash) => {
            if (err) {
                return reject(err)
            }
            return resolve(hash)
        })
    })
}