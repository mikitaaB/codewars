function order(words){
    const res = [];
    const awords = words.split(" ");
    const wordsLength = awords.length;
    for (let i = 0; i < wordsLength; i++) {
        const n = i+1;
        for (let j = 0; j < wordsLength; j++) {
            if (awords[j].includes(n)) {
                res.push(awords[j]);
            }
        }
    }
    return res.join(" ");
}