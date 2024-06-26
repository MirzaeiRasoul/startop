require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const path = require('path');

const authRouter = require('./routes/auth.routes');
const searchRouter = require('./routes/search.routes');

const app = express();
const port = 80;

app.use(express.static(path.join(__dirname, '/client/build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(csrf({
    cookie: {
        key: 'csrf-token',
        sameSite: 'strict',
        httpOnly: true,
        secure: true,
        maxAge: 3600 // 1-hour
    }
}));

app.use('/api/auth', authRouter);
app.use('/api/search', searchRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});

module.exports = app;
