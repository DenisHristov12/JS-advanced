function piece(arr, pie1, pie2) {
    let firstPie = arr.indexOf(pie1);
    let lastPie = arr.lastIndexOf(pie2);

    let result = arr.slice(firstPie, lastPie + 1);

    return result;

}

piece(['Pumpkin Pie', 
'Key Lime Pie', 
'Cherry Pie', 
'Lemon Meringue Pie', 
'Sugar Cream Pie'], 
'Key Lime Pie', 
'Lemon Meringue Pie' 
);