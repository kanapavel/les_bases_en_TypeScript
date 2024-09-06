function sayHello(target: { firstname: string, money: number }): string {
    return `Hello ${target.firstname}, you have ${target.money} on your bank account.`;
 }
 const message: string = sayHello({ firstname: 'World', money: 123 });
 