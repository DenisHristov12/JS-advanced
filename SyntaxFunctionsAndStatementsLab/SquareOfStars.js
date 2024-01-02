function draw(size) {
    let result = ``;

    for (let row = 0; row < size; row++) {
        for (let col = 1; col < size; col++) {
            result += `* `;
        } 
        result += `* \n`;
    }

    console.log(result);
}

draw(5);