function catalogue(input) {
    let sortedInput = input.sort((a,b) => a.localeCompare(b));

    let dict = {};

    for (let i = 0; i < sortedInput.length; i++) {
        let el = sortedInput[i].split(" : ").join(": ");
        let firstLetter = el[0];

        if(dict[firstLetter] === undefined){
            dict[firstLetter] = [];
        }
        dict[firstLetter].push(`  ${el}`);
    }

    let result = [];

    for (const key in dict) {
        let el = dict[key];

        result = [...result, key, ...el];
    }

    console.log(result.join("\n"));
}

catalogue(['Appricot : 20.4', 'Fridge : 1500', 
'TV : 1499', 
'Deodorant : 10', 
'Boiler : 300', 
'Apple : 1.25', 
'Anti-Bug Spray : 15', 
'T-Shirt : 10'] 
);