function sortArr(arr) {
    let sortedArr = arr.sort((a, b) => {
        let firstCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b);
        return firstCriteria || secondCriteria;
    });

    console.log(sortedArr.join("\n"));
}

sortArr(['alpha',  
'beta', 'gamma']  
);