export function feladat01(szinek) {
    let len = szinek.length;
    let rv = 0;
    for (let i = 1; i <= len; i++) {
        rv += Math.pow(2, i) - 1;
    }
    return rv;
}
