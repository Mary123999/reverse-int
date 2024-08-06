module.exports = function reverse (n) {
  const numberS = Math.abs(n).toString();
  const deli = numberS.split('').reverse().join('');
  return parseInt(deli);
}
