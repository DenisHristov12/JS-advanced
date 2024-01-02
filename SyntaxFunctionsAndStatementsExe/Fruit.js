function fruit(fruitType, weightInGrams, pricePerKG) {
    let weightInKG = weightInGrams / 1000;
    let price = weightInKG * pricePerKG;

    console.log(`I need $${price.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruitType}.`);
}

fruit('orange', 2500, 1.80 );