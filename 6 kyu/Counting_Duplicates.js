function duplicateCount(text) {
    const arrText = text.toLowerCase().split("");
    const arrUnique = [...new Set(arrText)];
    const arrCountEverySym = arrUnique.map(el => [el, arrText.filter(sym => sym === el).length]);
    return arrCountEverySym.map(el => el[1]).filter(el => el > 1).length;
}