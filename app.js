const express = require('express');
const app = express();
const path = require('path');//requring path for ejs files path





app.set('view engin', 'ejs');//setting views engine for views templates
app.set('views', path.join(__dirname, 'views')); //setting path for views templates

app.use(express.urlencoded({ extended: true })); // to parse url data comes with post request
app.use(express.json()); //to parge json data comes with pots request.



app.get('/', (req, res) => {
    res.send("Server is working");
})

app.get('/form', (req, res) => {
    res.render('form.ejs');
})

app.post('/form', (req, res) => {

    const { name } = req.body;
    res.send(`Hello MR. ${name}`);
})


const port = 3000;
app.listen(port, () => {
    console.log(`Listening at  port ${port}`);
});
