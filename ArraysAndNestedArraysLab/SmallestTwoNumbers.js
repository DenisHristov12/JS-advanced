function smallestTwoNums(arr) {
    let result = [];

    for (let j = 0; j < 2; j++) {
        let smallest = arr[0];
        for (let i = 0; i < arr.length; i++) {
            let currEl = arr[i];
    
            if(currEl <= smallest){
                smallest = currEl;
            }
        }

        let index = arr.indexOf(smallest);

        result.push(smallest);
        arr.splice(index, 1);
    }

    console.log(result.join(" "));
}

smallestTwoNums([3, 0, 10, 4, 7, 3]  );