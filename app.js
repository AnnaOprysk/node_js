const fs = require('fs');
const path = require('path');

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

fs.mkdir(path.join(__dirname, 'main','inPerson'), (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})