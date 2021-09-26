const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
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
    const sqlGetFriends = "SELECT users.id,users.name FROM users JOIN relation on users.id = relation.with_user_id WHERE users.id IN (SELECT with_user_id FROM relation WHERE user_id = ?)";
    const sqlGetUsers = `SELECT users.id,users.name FROM users WHERE id <> ? `;
    db.query(sqlGetFriends, id, (err, result) => {
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

app.listen('3001', () => {
    console.log('Server is running on port 3001');
});