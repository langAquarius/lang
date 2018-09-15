import mock from "mockjs"

let users = [];

for (let i = 0; i < 10; i++) {
    users.push(mock.mock({
        "name": "@cname",
        "age": "@number"
    }));
}

export default users;