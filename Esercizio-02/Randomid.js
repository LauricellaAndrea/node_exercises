const crypto = require('crypto');
const randomId = crypto.randomBytes(10).toString('hex');
console.log(randomId);

  