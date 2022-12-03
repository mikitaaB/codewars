function mostFrequentItemCount(collection) {
    if (!collection.length) {
      return 0;
    }
    let map = new Map();
    for (let i = 0; i < collection.length; i++) {
      map.set(collection[i], collection.filter(num => collection[i] === num).length);
    }
    return [...map.entries()].reduce((key, val) => val[1] > key[1] ? val : key)[1];
}