import jwt from 'jsonwebtoken';

export class TokenService {
  constructor(userService) {
    this.userService = userService;
  }

  async createToken(user) {
    console.log(`Creating token for user: ${user}`);
    const foundUser = await this.userService.getUserByName(user.name);
    // Define the payload
    const payload = {
      sub: 'secure-api',
      name: foundUser.name,
      iat: Math.floor(Date.now() / 1000), // Issued at (current timestamp)
      exp: Math.floor(Date.now() / 1000) + (60 * 60) // Expiration time (1 hour from now)
    };

    // Generate the token
    return jwt.sign(payload, process.env.JWT_SECRET, { algorithm: 'HS256' });
  }
}