function oddPositions(arr) {
    let newArr = arr.filter((x, i) => i % 2 === 1).map(x => x * 2).reverse();

    return newArr;
}

oddPositions([10, 15, 20, 25]);