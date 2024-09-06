function sayHello(target) {
    return `Hello ${target.firstname}, you have ${target.money} on your bank account.`;
}
const message = sayHello({ firstname: 'World', money: 123 });
