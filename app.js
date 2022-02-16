const fs = require('fs');
const path = require('path');

// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson

// fs.mkdir(path.join(__dirname, 'main'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.mkdir(path.join(__dirname, 'main','online'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.mkdir(path.join(__dirname, 'main','inPerson'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })


// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;

// fs.appendFile(path.join(__dirname, 'app.js'),
//     'const onlineUsers=[\n({name: "Andrii", age: 22, city: "Lviv"}, \n{name: "Ostap", age: 26, city: "Lviv" })]', (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })

const onlineUsers = [
    ({name: "Andrii", age: 22, city: "Lviv"},
        {name: "Ostap", age: 26, city: "Lviv"})]


// fs.appendFile(path.join(__dirname, 'app.js'),
//     'const inPersonUsers=[\n({name: "Anna", age: 20, city: "Lviv"}, \n{name: "Olga", age: 31, city: "Ternopil" })]', (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })


const inPersonUsers = [
    ({name: "Anna", age: 20, city: "Lviv"},
        {name: "Olga", age: 31, city: "Ternopil"})]


// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.

// fs.writeFile(path.join(__dirname,'main','online','online.txt'),'',(err)=>{
//     if (err) {
//             console.log(err);
//             throw err;
//         }
// })

// fs.writeFile(path.join(__dirname,'main','inPerson','inPerson.txt'),'',(err)=>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })


fs.appendFile(path.join(__dirname,'main','online','online.txt'),'\n const onlineUsers=[\n' +
    '({name: "Andrii", \nage: 22, \ncity: "Lviv"},\n' +
    '{name: "Ostap", \nage: 26, \ncity: "Lviv" })]',(err)=> {
    if (err) {
        console.log(err);
        throw err;
    }
} )

fs.appendFile(path.join(__dirname,'main','inPerson','inPerson.txt'),'\n const inPersonUsers =[(\n{name: "Anna",  \nage: 20, \ncity: "Lviv"},\n{name: "Olga", \nage: 31, \ncity: "Ternopil"})]',(err)=> {
    if (err) {
        console.log(err);
        throw err;
    }
} )


// напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)

