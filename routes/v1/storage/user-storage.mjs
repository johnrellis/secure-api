import { User } from '../domain/user.mjs';
import { v4 as uuidv4 } from 'uuid';

const firstUserId = "e38e1254-cd86-41ee-bfbe-0d4dc256c853";

// Seed some data here, this isn't particularly a good idea in a real system
const users = [
  {
    id: firstUserId, // this should really be generated at the time of creation
    username: "firstuser",
    password: "$2b$10$7vlBKy2PJkr66PrxaqRV1uBFLQKk8Jewc7sGwIl2H5TN8/zlwjXO6" // firstuserpassword
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

  async createUser(user) {
    // TODO: ensure username is unique
    const newUser = {
      id: uuidv4(),
      username: user.username,
      password: user.password
    };
    users.push(newUser);
    return new User(newUser);
  }

  async listUsers() {
    return users.map(user => new User(user));
  }

  async deleteUser(id) {
    const userIndex = users.findIndex(user => user.id === id);
    if(userIndex !== -1 && users[userIndex].id !== firstUserId) {
      const deletedUser = users.splice(userIndex, 1);
      return new User(deletedUser[0]);
    }
    return undefined;
  }
}