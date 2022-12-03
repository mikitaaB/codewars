function highAndLow(numbers){
    let aNums = numbers.split(" ");
    return Math.max(...aNums) + " " + Math.min(...aNums);
}