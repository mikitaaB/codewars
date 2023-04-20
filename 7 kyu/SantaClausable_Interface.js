function isFunc(obj, method) {
    return !!obj[method] && typeof obj[method] === 'function';
}

function isSantaClausable(obj) {
    return isFunc(obj, 'sayHoHoHo') && isFunc(obj, 'distributeGifts') && isFunc(obj, 'goDownTheChimney');
}