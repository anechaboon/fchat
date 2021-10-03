const express = require('express'),
        mongoose = require('mongoose'),
        cors = require('cors'),
        bodyParser = require('body-parser'),
        dbConfig = require('./database/db');




//Express route
const userRoute = require('../server/routes/user.route');

// connect mongodb 
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser: true
}).then(() => {
    console.log('connected scc')
},
    err => {
        console.log('error connecting' + err)
    }
)

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/users', userRoute);

// port


const mysql = require('mysql');



app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host: "localhost",
    password:"",
    database:"node"
});

//create user
app.post('/create',(req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    db.query("INSERT INTO users (name, email) VALUES (?, ?)",
        [name, email],
        (err, result) => {
            if (err) {
                console.log(err);
            }else{
                res.send('employees inserted');
            }
        }
    );
});

//get friend list
app.get('/friend/:id',(req, res) => {
    const id = req.params.id;
    const sqlGetFriends = "SELECT users.id, users.name  FROM users  JOIN relation on users.id = relation.with_user_id OR users.id = relation.user_id WHERE (users.id IN (SELECT with_user_id FROM relation WHERE user_id = ?)) OR (users.id IN (SELECT user_id FROM relation WHERE with_user_id = ?)) GROUP BY users.id";

    const sqlGetUsers = `SELECT users.id,users.name FROM users WHERE id <> ? `;
    db.query(sqlGetFriends, [id, id], (err, result) => {
        if (err) {
            console.log(err);
        }else{
            res.send(result);
        }
    })
});


app.get('/user',(req, res) => {
    const sqlGetUsers = "SELECT users.id,users.name FROM users ";
    db.query(sqlGetUsers,  (err, result) => {
        if (err) {
            console.log(err);
        }else{
            res.send(result);
        }
    })
});

// add friend
app.post('/addFriend',(req, res) => {

    const user_id = req.body.user_id;
    const with_user_id = req.body.with_user_id;
    db.query("INSERT INTO relation (user_id, with_user_id) VALUES (?, ?)",
        [user_id, with_user_id],
        (err, result) => {
            if (err) {
                console.log(err);
            }else{
                res.send('user_id');
            }
        }
    );
});
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Server is running on port '+ port);
});

// 404 error
app.use((req, res, next) => {
    next(createError(404))
})

// err handle
app.use(function (req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})