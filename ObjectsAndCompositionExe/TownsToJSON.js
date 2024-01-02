function reformat(input) {
    let matrix = input.map((row) => 
    row.trim()
    .split("|")
    .map((cell) => cell.trim()))
    .map((row) => row.filter((cell) => cell !== ""));

    let headers = matrix[0];
    let data = matrix.slice(1);

    let result = data.map((row) => {
        let tempDict = {};

        headers.forEach((header, index)=> {
            let tryParseToNum = Number(row[index]);
            tempDict[header] = isNaN(tryParseToNum) ? row[index] : Number(tryParseToNum.toFixed(2));
        });

        return tempDict;
    });

    console.log(JSON.stringify(result));
}

reformat(['| Town | Latitude | Longitude |', 
'| Sofia | 42.696552 | 23.32601 |', 
'| Beijing | 39.913818 | 116.363625 |'] 
);