const street1 = [3, 7, 8, 3, 6, 1];
const street2 = [1, 4, 5, 8];

function check(tab) {
    const length = tab.length;
    let result = 0;

    for (let i = 0; i < length; i++) {
        let sunsetView = true;

        for (let j = i + 1; j < length; j++){
            if (tab[j] >= tab[i]) {
                sunsetView = false;
                break;
            }
        }
        if (sunsetView) {
            result++;
        }
    }
    return result;
}

console.log(check(street1));
console.log(check(street2));