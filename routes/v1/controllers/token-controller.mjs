export class TokenController {
  constructor(tokenService) {
    this.tokenService = tokenService;
  }
  async createToken(req) {
    const user = req.body;
    const token = await this.tokenService.createToken(user);
    return {
      status: 201,
      body: {
        token
      }
    };
  }
}