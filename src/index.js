module.exports = function reverse (n) {
  let nReverse = n.toString().split("").reverse();

  if (nReverse[nReverse.length-1] == "-") return nReverse.slice(0, (nReverse.length-1)).join("");
  else return nReverse.join("");
}
