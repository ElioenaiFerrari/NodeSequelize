const express = require('express');
const app = express();
const {
    users,
} = require('./routes/index');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(users);


app.listen(3000, () => {
    console.log('Server on listen...');
});