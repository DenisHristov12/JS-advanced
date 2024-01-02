function operations(arr) {
    let sum = 0;
    let inverseSum = 0;
    let concatenated = "";

    for (const el of arr) {
        sum += el;
        inverseSum += 1/el;
        concatenated += el;
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concatenated);
}

operations([1, 2, 3]);