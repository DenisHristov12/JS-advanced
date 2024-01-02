function population(arr) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        let [name, population] = arr[i].split("<->");
        population = Number(population);

        if(map[name] === undefined){
            map[name] = population;
        }else{
            map[name] += population;
        }
    }

    for (const key in map) {
        console.log(`${key}: ${map[key]}`);
    }
}

population(['Sofia <-> 1200000', 
'Montana <-> 20000', 
'New York <-> 10000000', 
'Washington <-> 2345000', 
'Las Vegas <-> 1000000'] 
);