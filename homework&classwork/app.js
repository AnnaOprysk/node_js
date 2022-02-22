// Homework:
// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле), password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку з усіма юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж
// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
// 3. /user/:id сторінка з інфою про одного юзера
// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект

// Classwork:
// Необхідно розширити ваше ДЗ:
// - додайте ендпоінт signIn який буде приймати email і password і якщо все вірно то редірект на сторінку цього
// * хто хоче складніше реалізуйте видалення користувача. Кнопка повинна знаходитись на сторінці з інфою про одного юзера. Після видалення редірект на "/users"

const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

let users = [];
let error = '';

app.get('/login', (req, res) => {
    res.render('login');
});
app.post('/login', ({body}, res) => {
    const userExist = users.some(user => user.email === body.email);
    if (userExist) {
        error = 'User with this email exist';
        res.redirect('/error');
        return;
    }
    users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1})
    res.redirect('/users');
});

app.get('/users', ({query}, res) => {
    if (Object.keys(query).length) {
        let usersArray = [...users];
        if (query.city) {
            usersArray = usersArray.filter(user => user.city === query.city);
        }
        if (query.age) {
            usersArray = usersArray.filter(user => user.age === query.age);
        }
        res.render('users', {users: usersArray});
        return;
    }
    res.render('users', {users});
});

app.get('/users/:userId', ({params}, res) => {
    const user = users.find(user => user.id === +params.userId);
    if (!user) {
        error = `User with ID:${params.userId} not exist`;
        res.redirect('/error');
        return;
    }
    res.render('userInfo', {user});
});
app.get('/signIn', (req, res) => {
    res.render('signIn');
});
app.post('/signIn', ({body}, res) => {
    const signInUser = users.find(user => user.email === body.email && user.password === body.password);
    if (!signInUser) {
        error = `Such email or password is not correct`;
        res.redirect('/error');
        return;
    }
    res.redirect(`/users/${signInUser.id}`);
});

app.get('/deleteUser/:id', (req, res) => {
    users = users.filter(user => user.id !== +req.params.id);
    res.redirect('/users');
});

app.get('/error', (req, res) => {
    res.render('error', {error});
});

app.use((req, res) => {
    res.render('notFound');
});

app.listen(5200, () => {
    console.log('Server is running');
})




