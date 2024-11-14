import bcrypt from 'bcrypt';

// some users
const users = [
  { id: 1, username: 'john', password: 'johnpassword' },
  { id: 2, username: 'jane', password: 'janepassword' },
  { id: 3, username: 'doe', password: 'doepassword' }
];

// hash and salt our passwords in one go
const hashPasswords = async () => {
  for (const user of users) {
    const now = Date.now();
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const elapsed = Date.now() - now;
    console.log(`Hashed password for user ${user.username} in ${elapsed} ms`);
    user.password = hashedPassword;
  }
};

await hashPasswords();

// print out our users
console.log(JSON.stringify(users, null, 2));