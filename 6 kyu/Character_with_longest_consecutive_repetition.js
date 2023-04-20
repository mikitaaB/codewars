function longestRepetition(s) {
    let str = "";
    let count = 1;
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) {
            count++;
        } else {
            if (arr.every(v => v<count)) {
            str = s[i] + count;
            }
            arr.push(count);
            count = 1;
        }
    }
    return !str ? ["", 0]:[str.slice(0,1), str.slice(1)*1];
}