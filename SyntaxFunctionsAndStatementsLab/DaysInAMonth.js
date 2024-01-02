function calculateDays(month, year) {
    let date = new Date(year, month, 0);
    console.log(date.getDate());
}

calculateDays(2, 2023);