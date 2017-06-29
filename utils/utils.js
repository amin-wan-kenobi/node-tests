const add = (a, b) => a + b;
const asyncAdd = (a, b, callback) => {
    setTimeout( () => {
        callback(a + b);
    }, 1500);
}

const square = (x) => x * x;
const asyncSquar = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 1200);
}
const sub = (a, b) => a - b;
const setName = (user, fullName) => {
    let [firstName, lastName] = fullName.split(' ');
    return user = {
        firstName,
        lastName
    };
}


module.exports = {
    add,
    square,
    sub,
    setName,
    asyncAdd,
    asyncSquar
}