const crypto = require('crypto');

// Generate a random 64-byte (512-bit) secret key
const secretKey = crypto.randomBytes(64).toString('hex');

console.log('Generated JWT Secret Key:');
console.log(secretKey);
console.log('\nCopy this key to your .env file as JWT_SECRET='); 