const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Jane'},
  {id: 3, name: 'Doe'},
  {id: 4, name: 'Houdini'}
];
export class UserStorage{
  constructor(){
  }
  async getUserById(id){
    return users.find(user => user.id === id);
  }
}