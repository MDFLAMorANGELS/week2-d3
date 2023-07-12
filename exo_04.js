const street1 = [3, 7, 8, 3, 6, 1];
const street2 = [1, 4, 5, 8];

function check(tab) {
    const length = tab.length;
    let result = 0;
    let heightMax = 0;

    for (let i = length - 1; i >= 0; i--) {
        if (tab[i] > heightMax) {
            heightMax = tab[i];
            result++;
        }
    }
    return result;
}

console.log(check(street1));
console.log(check(street2));