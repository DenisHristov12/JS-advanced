function calorieObj(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i+=2) {
        let [product, calories] = [arr[i], arr[i+1]];

        result[product] = Number(calories);
    }

    console.log(result);
}

calorieObj(['Yoghurt', '48', 'Rise', '138', 
'Apple', '52'] 
);