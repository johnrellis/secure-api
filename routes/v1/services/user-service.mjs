export class UserService {
  constructor(userStorage) {
    this.userStorage = userStorage;
  }
  async getUserById(id) {
    return this.userStorage.getUserById(id);
  }

  async getUserByName(name) {
    return this.userStorage.getUserByName(name);
  }

}