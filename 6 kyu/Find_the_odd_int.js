function findOdd(A) {
    let map = new Map();
    for (let i = 0; i < A.length; i++) {
      map.set(A[i], A.filter(num => A[i] === num).length);
    }
    for (let ent of map) {
      if (ent[1] % 2 === 1) {
        return ent[0];
      }
    }
}