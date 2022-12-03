function getCount(str) {
    let aVowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (aVowels.includes(str[i])) {
        count++;
      }
    }
    return count;
}