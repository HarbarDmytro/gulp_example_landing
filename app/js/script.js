function test(cb, ...p) {
    return cb(...p)
}

console.log(test((...p) => p.reduce((ac, n) => ac + n, 0)));