function solution(number) {
    var map ={ M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, V:5, I:1},
    res = '';
    for (var i in map) {
      while (number >= map[i]) {
        res += i;
        number -= map[i];
      }
    }
    return res;
  }

  console.log(solution(6))