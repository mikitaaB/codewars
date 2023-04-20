const deepCount = (a) => {
    return a.reduce((acc, cur) => {
        return acc + ((typeof(cur) === 'object' && cur.length) ? deepCount(cur) : 0);
    }, a.length);
}