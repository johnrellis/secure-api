export class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getUserById(req, res) {
        const id = parseInt(req.params.id);
        const user = await this.userService.getUserById(id);
        return {
            status: user ? 200 : 404,
            body: user
        };
    }
}