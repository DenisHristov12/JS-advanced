function negativePositive(arr) {
    let reuslt = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            reuslt.unshift(arr[i]);
        }else{
            reuslt.push(arr[i]);
        }
    }

    console.log(reuslt.join("\n")); 
}

negativePositive([7, -2, 8, 9] );