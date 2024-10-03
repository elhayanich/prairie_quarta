const apprenants = [
    "Chaymae", "Connie", "Manal", "Mariam", "Harold",
    "Colas", "Mathieu", "Mattias", "Bruno", "Léo",
    "Karolan", "Sofian", "Avriska", "Ioana"
];
// Fischer yates pour shuffle 
// function shuffle(array) {
// for (let i = array.length - 1; i > 0; i--) {
// const j = Math.floor(Math.random() * (i + 1));
// [array[i], array[j]] = [array[j], array[i]]; 
//  }
// return array;
// }

function shuffle(array) {
const newArray = [...array]
const length = newArray.length
for (let i = 0; i < length; i++) {
const randomPosition = Math.floor((newArray.length - i) * Math.random())
const randomItem = newArray.splice(randomPosition, 1)
newArray.push(...randomItem)
}
return newArray
}

const array = ["a", "b","c","d","f","g"]
const newArray = shuffle(array)
console.log(newArray);

function groupes(k) {
    shuffle(apprenants); 
    const result = [];
    
    for (let i = 0; i < apprenants.length; i += k) {
        result.push(apprenants.slice(i, i + k)); 
    }

    return result; 
}


const k = 5; 
const groupesResultats = groupes(k);
console.log(groupesResultats);