function biggestElement(matrix) {
    let biggest = matrix[0][0];
    for (let j = 0; j < matrix.length; j++) {
        let currArr = matrix[j];
        for (let i = 0; i < currArr.length; i++) {
            let currEl = currArr[i];
    
            if(currEl >= biggest){
                biggest = currEl;
            }
        }
    }

    console.log(biggest);
}

biggestElement([[20, 50, 10], 
                [ 8, 33, 145]] );