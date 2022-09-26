require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
let methodOverride = require('method-override');
const db = require('./models');
const book = require('./models/book');

const SECRET_SESSION = process.env.SECRET_SESSION;
console.log(SECRET_SESSION);

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(session({
  secret: SECRET_SESSION,    // What we actually will be giving the user on our site as a session cookie
  resave: false,             // Save the session even if it's modified, make this false
  saveUninitialized: true    // If we have a new session, we save it, therefore making that true
}));

app.use(flash());            // flash middleware

app.use(passport.initialize());      // Initialize passport
app.use(passport.session());         // Add a session

app.use((req, res, next) => {
  console.log(`res locals >>>>`, res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();//whenever you get this information do whatever the next thing is (go to a route or a page)
});

app.get('/', (req, res) => {
  res.render('index');
});

// Add this above /auth controllers
app.get('/profile', isLoggedIn, async (req, res) => {
  const { id, name, email } = req.user.get(); 
  const the_books = await db.Book.findAll();
  console.log(the_books);
  res.render('profile', { id, name, email, the_books });
});

app.get('/profile/edit', isLoggedIn, (req, res) => {
  res.render('edit');
})

app.put('/profile/:id', isLoggedIn, async (req, res) => {
  try {
    const usersUpdated = await db.user.update({
      email: req.body.email,
      name: req.body.name
    }, {
      where: {
        id: req.params.id
      }
  });

  console.log('********** PUT ROUTE *************');
  console.log('Users updated', usersUpdated);
  console.log('***********************');

  // redirect back to the profile page
  res.redirect('/profile'); // route
  } catch (error) {
    console.log('*********************ERROR***********************');
    console.log(error);
    console.log('**************************************************');
    res.render('edit');
  }
});
app.get('/mybook/:id', isLoggedIn, async (req, res) => {
  let book = await db.Book.findOne({
      where: { id: req.params.id }
  });
  book = book.toJSON();
  console.log('===== this is the show route =====');
  console.log(book);
  // go to the db and grab one book
  // render the books/show page with the book
  res.render('mybook', { book });
})

//access to all of our auth routes GET /auth/login, GET /auth/signip POST routes
app.use('/auth', require('./controllers/auth'));
app.use('/books', isLoggedIn, require('./controllers/books'));

app.get('/*', (req, res) => {
  res.render('404')
});
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
