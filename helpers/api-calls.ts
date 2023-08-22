//WIP
import bcrypt from 'bcrypt';
const fs = require('fs');
const secret = require("./secret.json");

try {
    // Note that jsonString will be a <Buffer> since we did not specify an
    // encoding type for the file. But it'll still work because JSON.parse() will
    // use <Buffer>.toString().
    const secretString = fs.readFileSync("./secret.json");
    const secrets = JSON.parse(secretString);
  } catch (err) {
    console.log(err);
  }

export class APIHelper {
    async addUser({request}, firstName, lastName, email, password) {
        const res = await request.delete('https://thinking-tester-contact-list.herokuapp.com/users/me', {
            data: {
                'firstName' : firstName,
                'lastName' : lastName,
                'email' : email,
                'password' : password,
                'Authorization': `Bearer any`,
            }
        });
    }


    async deleteUserByID({request}, id) {
        const res = await request.delete('https://thinking-tester-contact-list.herokuapp.com/users/me', {
            data: {
                'Authorization': `Bearer ${process.env.API_TOKEN}`,
            }
        });
    }
}