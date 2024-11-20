// Func that generates a random integer between two given values.
function randomInteger(min, max) {

    //Math.random() => generate decimal number between 0&1
    //Math.random() * (max - min + 1) => get the random number between min and exclusive of max
    //Math.floor() => rounding to nearest whole number
    // + min => shift result to start at min
    return Math.floor(Math.random() * (max - min + 1)) + min;
}