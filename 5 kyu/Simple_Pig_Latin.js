function pigIt(str) {
    const keyWord = "ay";
    const arr = str.trim().split(" ");
    const punctuationArr = ["!", "?", ".", ","];
    return arr.map(word => {
        return punctuationArr.every(el => !word.includes(el))
            ? word.slice(1, word.length) + word[0] + keyWord
            : word;
    }).join(" ");
}