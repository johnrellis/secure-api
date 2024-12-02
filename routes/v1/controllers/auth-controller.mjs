export class AuthController {

  constructor(userService, tokenService) {
    this.userService = userService;
    this.tokenService = tokenService;
  }

  async login(req) {
    const user = req.body;
    const foundUser = await this.userService.verifyUserWithPassword(user.username, user.password);
    const token = await this.tokenService.createToken(foundUser);
    return {
      status: 200,
      body: {
        user: {
          id: foundUser.id,
          username: foundUser.username
        },
        token
      }
    };
  }
}