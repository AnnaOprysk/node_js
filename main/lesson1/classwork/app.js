// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell

const path = require("path");
const fs = require('fs')

fs.mkdir(path.join(__dirname, 'Test1'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        throw err
    }
})
fs.writeFile(path.join(__dirname, 'Test1', 'File1.txt'), 'Some data', (err) => {
    if (err) {
        console.log(err)
        throw err
    }
})
fs.writeFile(path.join(__dirname, 'Test1', 'File2.txt'), '', (err) => {
    if (err) {
        console.log(err)
        throw err
    }
})

function recordData() {
    fs.readFile(path.join(__dirname, 'Test1', 'File1.txt'), (err, data) => {
        if (err) {
            console.log(err)
            throw err
        }

        fs.writeFile(path.join(__dirname, 'Test1', 'File2.txt'), data, (err) => {
            if (err) {
                console.log(err)
                throw err
            }

        })
    })
}

recordData();

// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell


fs.mkdir(path.join(__dirname, 'Test2'), {recursive: true}, (err) => {
    if (err) {
        console.log(err)
        throw err
    }
    fs.writeFile(path.join(__dirname, 'Test2', 'NewFile1.txt'), 'Some new data', (err) => {
        if (err) {
            console.log(err)
            throw err
        }
        fs.mkdir(path.join(__dirname, 'Test2', 'NewFile2'), {recursive: true}, (err) => {
            if (err) {
                console.log(err)
                throw err
            }

            fs.writeFile(path.join(__dirname, 'Test2', 'NewFile2', 'NewFile2.txt'), '', (err) => {
                if (err) {
                    console.log(err)
                    throw err
                }
                fs.readFile(path.join(__dirname, 'Test2', 'NewFile1.txt'), (err, data) => {
                    if (err) {
                        console.log(err)
                        throw err
                    }
                    fs.writeFile(path.join(__dirname, 'Test2', 'NewFile2', 'NewFile2.txt'), data, (err) => {
                        if (err) {
                            console.log(err)
                            throw err
                        }
                    })
                })
            })
        })
    })
})


// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

fs.mkdir(path.join(__dirname, 'Test3', 'One','Any1.txt'), err => {
    if (err) {
        console.log(err)
        throw err
    }
})

fs.mkdir(path.join(__dirname, 'Test3', 'Two','Any2.txt'), err => {
    if (err) {
        console.log(err)
        throw err
    }
})

fs.writeFile(path.join(__dirname, 'Test3', 'File1.txt'), 'Hello world ', err => {
    if (err) {
        console.log(err)
        throw err
    }
})

fs.writeFile(path.join(__dirname, 'Test3', 'File2.txt'), 'Hello okten', err => {
    if (err) {
        console.log(err)
        throw err
    }
})

const searchFiles = (file) => {
    fs.readdir(path.join(__dirname, `${file}`), (err, data) => {
        if (err) {
            console.log(err)
            throw err
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].includes('.txt')) {
                fs.truncate(path.join(__dirname, `${file}`, `${data[i]}`), err => {
                    if (err) {
                        console.log(err)
                        throw err
                    }
                })
            } else {
                fs.rename(path.join(__dirname, `${file}`, `${data[i]}`),
                    path.join(__dirname, `${file}`, `new_${data[i]}`), err => {
                        if (err) {
                            console.log(err)
                            throw err
                        }
                    })
            }
        }
    })
}
searchFiles('Test3');