function lastKNums(n, k){
    let arr = [1];
 
    for (let i = 1; i < n; i++) {
        let lastElements = arr.slice(-k);
        let sum = 0;
   
        for (let el of lastElements) {
            sum += el;
        }
        arr.push(sum);
    }

    return arr;
}

console.log(lastKNums(6, 3));