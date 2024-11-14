import { User } from '../domain/user.mjs';

// let's work under the assumption that id and username are unique
const users = [
  {
    id: 1,
    username: "john",
    password: "$2b$10$L1Prxb4hdJk7hbBKVDIExepxJdnyAEfmWshvHNVaYD25ej5LOXqky"
  },
  {
    id: 2,
    username: "jane",
    password: "$2b$10$yIbdzEDGWgvzT8ErL4PUxuEFERe7jSRIzFFhZsj8FeCYUnmN11VMK"
  },
  {
    id: 3,
    username: "doe",
    password: "$2b$10$aIGWLPNxB7/BdfgD/yRlKed5rdMahIa.Kvi57mlpDV056dYkY.Cqu"
  }
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

  async getProtectedFields(username) {
    const foundUser = users.find(user => user.username.toLowerCase() === username.toLowerCase());
    return foundUser;
  }

}