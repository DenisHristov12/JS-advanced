function walk(stepsToUni, footPrintLength, speed) {
    let distanceInMeters = stepsToUni * footPrintLength;
    let distanceInKm = distanceInMeters / 1000;
    let breakTime = Math.trunc(distanceInMeters / 500);
    let walkTime = (distanceInKm / speed);
    let hours = Math.trunc(walkTime);

    if (hours < 10) {
        hours = "0" + hours;
    }

    let minutes = Math.trunc(walkTime * 60 + breakTime);

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let seconds = Math.round(walkTime * 3600 - (Math.trunc(walkTime * 60)) * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}

walk(2564,
    0.70,
    5.5);