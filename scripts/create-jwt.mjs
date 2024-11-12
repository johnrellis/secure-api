import jwt from 'jsonwebtoken';

// Define the secret key
const secretKey = 'this is a secret key';

// Define the payload
const payload = {
  sub: '1234567890',
  name: 'Rory Gallagher',
  roles: ['admin', 'user', 'legend'],
  iat: Math.floor(Date.now() / 1000), // Issued at (current timestamp)
  exp: Math.floor(Date.now() / 1000) + (60 * 60) // Expiration time (1 hour from now)
};

// Generate the token
const token = jwt.sign(payload, secretKey, { algorithm: 'HS256' });

// curl localhost:3000/api/v1/users/1 -H "Authorization: Bearer: `node scripts/create-jwt.mjs`"
console.log(token);