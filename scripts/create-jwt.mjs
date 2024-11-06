import jwt from 'jsonwebtoken';

// Define the secret key
const secretKey = 'this is a secret key';

// Define the payload
const payload = {
    sub: '1234567890',
    name: 'John Doe',
    roles: ['admin', 'user'],
    iat: Math.floor(Date.now() / 1000), // Issued at (current timestamp)
    exp: Math.floor(Date.now() / 1000) + (60 * 60) // Expiration time (1 hour from now)
};

// Generate the token
const token = jwt.sign(payload, secretKey, { algorithm: 'HS256' });

console.log('Generated JWT:', token);