import bcrypt from 'bcrypt';

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

  async verifyUserWithPassword(username, password) {
    const user = await this.userStorage.getUserByUsername(username);
    const protectedFields = await this.userStorage.getProtectedFields(user.username);
    const isVerified = await bcrypt.compare(password, protectedFields.password);
    if(user && isVerified) {
      return user;
    }
    return undefined;
  }

  async createUser(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = {
      username: user.username,
      password: hashedPassword
    };
    return this.userStorage.createUser(newUser);
  }

  async listUsers() {
    return this.userStorage.listUsers();
  }

  async deleteUser(id) {
    return this.userStorage.deleteUser(id);
  }

}