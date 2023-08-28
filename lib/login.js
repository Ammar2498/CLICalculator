let Usercredential = [];
export function UserRegisteration(userName, UserPassword) {
    Usercredential.push({ userName, UserPassword });
}
;
export function userSignIn(userName, UserPassword) {
    let foundUser = Usercredential.find(function (user) {
        return user.userName === userName && UserPassword === user.UserPassword;
    });
    return foundUser !== undefined;
}
