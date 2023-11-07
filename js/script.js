console.log('Hello World!');
let name = prompt('Enter Name');
alert(`Hello ${name}`);

let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');

let min = a;

if (min === b) {
    console.log(`Числа равны`);    
} else {
    if (min > b) {
        console.log(`Минимальное число ${b}`);  
    } else {
        console.log(`Минимальное число ${a}`);    
    }        
}