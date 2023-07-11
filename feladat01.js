export function feladat01(szinek) {
    let len = szinek.length;
    let rv = 0; //return value
    for (let i = 2; i <= len; i++) {
        rv += c(len, i);
    }
    return rv;
}

function c(n, k) {
    let rv = 1;
    for (let i = 1; i <= k; i++) {
        rv *= (n - (k - i)) / i;
    }
    return rv;
}
