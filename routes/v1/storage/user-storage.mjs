import { User } from '../domain/user.mjs';

// let's work under the assumption that id and username are unique
const users = [
  { id: 1, username: 'john', password: 'johnpassword' },
  { id: 2, username: 'jane', password: 'janepassword' },
  { id: 3, username: 'doe', password: 'doepassword' }
];

export class UserStorage {
  constructor() {
  }
  async getUserById(id) {
    const foundUser = users.find(user => user.id === id);
    return foundUser ? new User(foundUser) : undefined;
  }

  async getUserByUsername(username) {
    const foundUser = users.find(user => user.username.toLowerCase() === username.toLowerCase());
    return foundUser ? new User(foundUser) : undefined;
  }

}