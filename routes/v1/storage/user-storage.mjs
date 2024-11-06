const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Doe'}
]
export class UserStorage{
    constructor(){
    }
    async getUserById(id){
        return users.find(user => user.id === id);
    }
}