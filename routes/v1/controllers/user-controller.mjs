export class UserController {
  constructor(userService) {
    this.userService = userService;
  }
  async getUserById(req) {
    const id = req.params.id;
    const user = await this.userService.getUserById(id);
    return {
      status: user ? 200 : 404,
      body: user
    };
  }

  async createUser(req) {
    // TODO: implement user validation
    // TODO: implement password policy
    const user = req.body;
    const createdUser = await this.userService.createUser(user);
    return {
      status: createdUser ? 201 : 409,
      body: createdUser
    };
  }

  async listUsers() {
    return {
      status: 200,
      body: await this.userService.listUsers()
    };
  }

  async deleteUser(req) {
    const id = req.params.id;
    const deletedUser = await this.userService.deleteUser(id);
    return {
      status: deletedUser ? 200 : 404,
      body: deletedUser
    };
  }
}