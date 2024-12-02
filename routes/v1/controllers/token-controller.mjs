export class TokenController {
  constructor(tokenService, userService) {
    this.tokenService = tokenService;
    this.userService = userService;
  }
  async createToken(req) {
    const user = req.body;
    const foundUser = await this.userService.verifyUserWithPassword(user.username, user.password);
    const token = await this.tokenService.createToken(foundUser);
    return {
      status: 201,
      body: {
        token
      }
    };
  }
}