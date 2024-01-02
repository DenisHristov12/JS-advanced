function sum(arr) {
    let first = arr.shift();
    let last = arr.pop();

    let sum = Number(first) + Number(last);

    console.log(sum);
}

sum(['20', '30', '40']);