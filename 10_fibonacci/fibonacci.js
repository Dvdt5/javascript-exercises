const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }
    let numbers = [0,1];
    for (let i = 0; i < number-1; i++){
        numbers.push(numbers[i] + numbers[i+1]);
    }
    return numbers[number];
};

// Do not edit below this line
module.exports = fibonacci;
