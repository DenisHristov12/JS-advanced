function equalNeighbours(matrix) {
    let equalPairsAmount = 0;
    let matrixLength = matrix.length;
 
    for (let i = 0; i < matrixLength; i++) {
        let rowLength = matrix[i].length;
 
        for (let j = 0; j < rowLength; j++) {
            let currNum = matrix[i][j];
 
            if (i !== matrixLength - 1) {
                let nextNum = matrix[i][j + 1];
 
                if (currNum === nextNum) {
                    equalPairsAmount++;
                }
 
                let beneathNum = matrix[i + 1][j];
 
                if (currNum === beneathNum) {
                    equalPairsAmount++;
                }
 
            } else {
                let nextNum = matrix[i][j + 1];
 
                if (currNum === nextNum) {
                    equalPairsAmount++;
                }
            }
        }
    }
 
    return equalPairsAmount;
}

equalNeighbours([['2', '3', '4', '7', '0'], 
['4', '0', '5', '3', '4'], 
['2', '3', '5', '4', '2'], 
['9', '8', '7', '5', '4']] 
);