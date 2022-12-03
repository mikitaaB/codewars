function solution(number) {
    var k = 0;
    for (var i = 0; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        k += i;
      }
    }
    return k;
}