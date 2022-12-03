function reverse(str){
    return str.trim().split(" ").map((word, i) => {
      return i % 2 === 0 ? word : word.split("").reverse().join("");
    }).join(" ");
}