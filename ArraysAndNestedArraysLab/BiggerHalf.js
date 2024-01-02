function biggerHalf(arr) {
    let result = [];
    arr.sort((a, b) => a - b);
    let half = Math.ceil(arr.length / 2);

    for (let i = arr.length - 1; i >= arr.length - half; i--) {
        result.push(arr[i]);
    }

    result.reverse();
    return result;
}

console.log(biggerHalf([4, 7, 2, 5]));