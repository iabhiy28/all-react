const crypto  = require('crypto');

const name = "abhishek"
const hash = crypto.createHash('sha256').update(name).digest('hex');
console.log(hash);