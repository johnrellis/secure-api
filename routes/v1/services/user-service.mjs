export class UserService {
  constructor(userStorage) {
    this.userStorage = userStorage;
  }
  async getUserById(id) {
    return this.userStorage.getUserById(id);
  }

  async getUserByUsername(name) {
    return this.userStorage.getUserByUsername(name);
  }

}