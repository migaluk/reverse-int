module.exports = function reverse (n) {
    let module = Math.abs(n);
    let result = module.toString().split('').reverse().join('');
    return result;
}
