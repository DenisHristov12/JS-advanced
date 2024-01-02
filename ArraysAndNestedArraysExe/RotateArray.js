function rotate(arr, numRotations) {
    let arrCopy = [...arr];

    for (let j = 0; j < numRotations; j++) {
        let lastNum = arrCopy.pop();
        arrCopy.unshift(lastNum);
    }
    console.log(arrCopy.join(" "));
}

rotate(['1',  
'2',  
'3',  
'4'],  
2 
);