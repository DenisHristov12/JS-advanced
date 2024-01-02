function diagonalSums(arr) {
    let innerArr = arr[0];
    let sumMain = 0;
    let sumSecond = 0;
    let secondDiagonalIndex = innerArr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        let mainDiagonalEl = arr[i][i];
        let secondDiagonal = arr[i][secondDiagonalIndex--];

        sumMain += mainDiagonalEl;
        sumSecond += secondDiagonal;
    }

    console.log(sumMain, sumSecond);
}

diagonalSums([[20, 40],[10, 60]]);