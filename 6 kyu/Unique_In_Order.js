const uniqueInOrder = (array) => {
    const res = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i+1]) {
            res.push(array[i]);
        }
    }
    return res;
}