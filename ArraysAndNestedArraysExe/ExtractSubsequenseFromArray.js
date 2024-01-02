function extract(arr) {
    let result = [];

    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        let currEl = arr[i];

        if(currEl >= biggest){
            result.push(currEl);
            biggest = currEl;
        }
    }

    return result;
}

extract([1,  
    3,  
    8,  
    4,
    10,  
    12,  
    3,  
    2,  
    24]);