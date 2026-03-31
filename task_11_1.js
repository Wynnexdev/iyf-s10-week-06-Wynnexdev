console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
setTimeout(() => console.log("D"), 100);
console.log("E");
// Output order: A, C, E, B, D

function loadUser(userId, callback) {
    setTimeout(() => {
        const user = { id: userId, name: "Student" };
        callback(user);
    }, 1500);
}

loadUser(1, function (user) {
    console.log(user);
});
