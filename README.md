# `Book Bean 2`

Node.js/PostgresSQL book search and coffee recommendation application to Express authentication template using Passport + Flash messages + custom middleware

## What it includes

* Sequelize models / migrations
* Settings for PostgreSQL
* Passport and passport-local for authentication
* Sessions to keep user logged in between pages
* Flash messages for errors and successes
* Passwords that are hashed with BCrypt
* EJS Templating and EJS Layouts

### User Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| name | String | Must be provided |
| email | String | Must be unique / used for login |
| password | String | Stored as a hash |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Book Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| title | String | Must be provided by API |
| author | String | Must be provided API|
| img | String | Provided by API selection thumbnail |
| description | Text | Provided by API |
| userId | Integer | Added when book is saved by user |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Routes

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | / | server.js | Home page |
| GET | /auth/login | auth.js | Login form |
| GET | /auth/signup | auth.js | Signup form |
| POST | /auth/login | auth.js | Login user |
| POST | /auth/signup | auth.js | Creates User |
| GET | /auth/logout | auth.js | Removes session info |
| GET | /profile | server.js | Regular User Profile 
| GET | /profile/edit | server.js | Show edit user form 
| PUT | /profile/:id | server.js | Edit User Form
| GET | /mybook/:id | server.js | Individual user book info and coffee rec
| GET | /books/index | books.js | Book Search | 
| POST | /books/details | book.js | Provides detail page and coffee recommendation |
| POST | /book/new | book.js | Adds searched book to user's bookshelf renders on profile |
| POST | /books/results | book.js | Search Results |
| PUT | /books/:id | book.js | Deletes Book from user's shelf |
| GET | /books/* | book.js | 404 error for false routes |

### To Install

## `1` Fork & Clone Project & Install Dependencies
`1` First `fork` and `clone` repository

`2` Next install the current dependencies that are listed inside of `package.json`
```text
npm install
```

