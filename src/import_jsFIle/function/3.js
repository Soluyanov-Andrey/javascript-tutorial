const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];
const f = (s) => s.length;

function f1() {
    const cities = ['Athens', 'Roma'];
    // toUpperCase переводит строку в заглавные
    const f = (s) => s.toUpperCase();
    console.log(cities);          //'Athens', 'Roma'
    console.log(cities.map(f));   //"ATHENS", "ROMA"

    {
        // toLowerCase переводит строку в маленькие буквы
        const f = (s) => s.toLowerCase();
        console.log(cities);        //'Athens', 'Roma'
        console.log(cities.map(f)); //"ATHENS", "ROMA"
    }

    {
        const cities = ['London', 'Beijing', 'Kiev'];
        console.log(cities);  //'London', 'Beijing', 'Kiev'
        console.log(cities.map(f)); //"LONDON", "BEIJING", "KIEV"
    }

}

f1();

console.log(cities);        //"Athens", "Roma", "London", "Beijing", "Kiev", "Riga"
console.log(cities.map(f)); //6, 4, 6, 7, 4, 4