let sayHello = function(name) {
    console.log(`Greeting message for ${name}`);
    console.log(`Hey ${name}`);
}

// sayHello('John')


let fullNameMaker = function( firstname, lastname) {
    console.log('Welcome to LCO');
    console.log(`Happy to have you, ${firstname} ${lastname}`);

}

// fullNameMaker('John', 'Doe')


let myAdder = function(num1, num2) {
    let added = num1 + num2 
    return added
}

// let result = myAdder(3, 5)
// console.log(result);
console.log(myAdder(3, 5));