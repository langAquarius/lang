let callback = (config) => {
    let username = config.params.username;
    let password = config.params.password;

    return new Promise((resolve, reject) => {
        Login.find((item, index, arr) => {
            if (item.username == username) {
                if (item.password == password) {
                    let res = {
                        errCode: 0,
                        errMsg: "",
                        isSuccess: true
                    }
                    resolve([200, res]);
                } else {
                    let res = {
                        errCode: 2,
                        errMsg: "密码不正确",
                        isSuccess: false
                    }
                    reject(res);
                }
            } else {
                let res = {
                    errCode: 1,
                    errMsg: "用户名不正确",
                    isSuccess: false
                }
                reject(res)
            }
        });
        resolve(user);
    });
}
export default callback;