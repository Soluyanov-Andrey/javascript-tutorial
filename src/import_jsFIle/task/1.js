/**
 * Нужно создать функцию которая уберет из строки все гласные английского алфавита, за
 * исключением Y. И вернет строку но уже с исключенными гласными.
 */

let strVar = "Andrey wrote this script";

function removeVowels(str) {
    let array = ["a", "e", "i", "o", "U", "A", "E", "I", "O", "U"];
    let ref_str = "";
    for (let i of str) {
        let flag = false;
        for (let b = 0; b < array.length; b++) {
            if (i == array[b]) {
                flag = true;
            }
        }
        if (flag != true) {
            ref_str = ref_str + i;
        }
    }
    return ref_str;
}

console.log(removeVowels(strVar)); // Вернет ndry wrt ths scrpt

/**
 * Другие варианты решения данной задачи
 */

// function removeVowels(str) {
//     return str.replace(/[aeiou]/gi, '');
// }
// console.log(removeVowels(strVar));




// function disemvowel(str) {
//     return (str || "").replace(/[aeiou]/gi, "");
// }




// disemvowel = str => str.replace(/[aeiou]/gi,'');



// const disemvowel = (str) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let newStr = '';
//     for (let i = 0; i <= str.length; i++) {
//         let char = str.charAt(i);
//         if (vowels.indexOf(char) == -1) {
//             newStr += char;
//         }
//     }
//     return newStr;
//
//
// };



// const vowels = 'aeiou';
//
// function disemvowel(str) {
//     return str
//         .split('')
//         .filter(letter => !vowels.includes(letter.toLowerCase()))
//         .join('');
// }



// function disemvowel(str) {
//     return str.replace(/[aeiouAEUIOU]/g, '');
// }

// function disemvowel(str) {
//     str=str.replace(/[a\e\i\u\o\A\E\I\O\U]/g,"")
//     return str;
// }



// function disemvowel(str) {
//     var str2="";
//     for (var i=0; i<str.length; i++){
//         if ("aeiou".indexOf(str[i].toLowerCase())<0) {
//             str2+=str[i];
//         }
//     }
//     str=str2
//     return str;
// }



// function disemvowel(str) {
//     var abjad = ['a','i','u','e','o','A','I','U','E','O'];
//     str = str.split('').map(e => abjad.includes(e) ? '' : e).join('');
//     return str;
// }
