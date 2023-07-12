const numbers1 = [10, 15, 3, 7];
const numbers2 = [1, 8, 10, 21];
const k = 17;
const j = 19;

function check(tab, nb) {
    const length = tab.length;
    const numbers = new Set(); // Initialisation d'un ensemble vide pour stocker les nombre visiter au fur et a mesure.
  
    for (let i = 0; i < length; i++) {
        const complement = nb - tab[i];

        if (numbers.has(complement)) { // Verifie si le complement obtenu est present dans l'ensemble numbers.
            return true;
        }
        numbers.add(tab[i]); // ajoute chaque nombre visiter dans le tab a l'ensemble numbers.
    }
    
    return false;
  }
  
  console.log(check(numbers1, k));
  console.log(check(numbers2, j));