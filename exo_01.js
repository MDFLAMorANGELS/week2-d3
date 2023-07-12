const numbers1 = [10, 15, 3, 7];
const numbers2 = [1, 8, 10, 21];
const k = 17;
const j = 19;

function check(tab, nb) {
    const length = tab.length;

    for (let i = 0; i < length; i++) {
        for (let f = i + 1; f < length; f++) {
            if (tab[i] + tab[f] === nb) {
                return true;
            }
        }
    }
    return false;
}

console.log(check(numbers1, k));
console.log(check(numbers2, j));
