const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 8001;
const { sequelize } = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const sessionOption = require('./lib/sessionOption');

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

const MySQLStore = require('express-mysql-session')(session);
const sessionStore = new MySQLStore(sessionOption);
app.use(session({  
  key: 'session_cookie_name',
  secret: process.env.COOKIE_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}))


app.use(express.static(path.join(__dirname, '/build')));
app.use('/api/users', authRouter);
app.use('/api/posts', postRouter);

app.get('/', (req, res) => {    
    req.sendFile(path.join(__dirname, '/build/index.html'));
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});