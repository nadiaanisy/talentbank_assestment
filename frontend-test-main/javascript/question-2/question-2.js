// Func to removes duplicate values from an array
function removeDuplicates(arr) {
    //Set() method store unique values of any type
    return [...new Set(arr)];
}