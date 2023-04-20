function moveZeros(arr) {
    const newArr = arr.filter(el => el !== 0);
    const count = arr.length - newArr.length;
    for (let i = 0; i < count; i++) {
        newArr.push(0);
    }
    return newArr;
}