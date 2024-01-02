function solve(area, vol, input) { 
    let objects = JSON.parse(input);
    let result = [];

    for (const obj of objects) {
        let newArea = area.call(obj);
        let newVolume = vol.call(obj);
        result.push({area: newArea, volume: newVolume});
    }

    return result;
} 

solve(area, vol, `[ 
    {"x":"1","y":"2","z":"10"}, 
    {"x":"7","y":"7","z":"10"}, 
    {"x":"5","y":"2","z":"10"} 
    ]` );

function area() {     
    return Math.abs(this.x * this.y); 
}

function vol() {     
    return Math.abs(this.x * this.y * this.z); 
}
