let number = 17359751892;
    output = [];

while (number) {
    output.push(number % 10);
    number = Math.floor(number/10);
}

console.log(output.reverse().join(','));