function inventory(arr) {
    let finalReuslt = [];

    for (const el of arr) {
        let result = {};
        let [name, level, items] = el.split(" / ");

        result.name = name;
        result.level = Number(level);

        let allItems = items;
        result.items = allItems ? items.split(", ") : [];

        finalReuslt.push(result);
    }

    return JSON.stringify(finalReuslt);
}

inventory(['Isacc / 25 / Apple, GravityGun', 
'Derek / 12 / BarrelVest, DestructionSword', 
'Hes / 1 / Desolator, Sentinel, Antara'] 
);