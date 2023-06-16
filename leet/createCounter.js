var createCounter = function (num) {
    var counter = 0;
    return function () {
        //   counter += num
        return num++;
    };
};
var counter = createCounter(-3);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
