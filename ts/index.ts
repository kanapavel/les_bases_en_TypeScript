function addition(x : number, y : number): number {
    return x + y;
}
const result = addition(10, 20);
console.log(result);

// Ne modifiez que le typage TypeScript, ne touchez pas au code JavaScript !
type transaction = {
    firstName: string;
    money: number;
};

function sayHello(target:transaction): string {
    return `Hello ${target.firstName}, you have ${target.money} on your bank account.`;
}
const message: string = sayHello({ firstName: 'World', money: 123 });

