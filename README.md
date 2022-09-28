# `Book Bean 2`

Node.js/PostgresSQL book search and coffee recommendation application to Express authentication template using Passport + Flash messages + custom middleware

![Home Screen](/public/assets/img/homescreen.png)

![Sample Profile](/public/assets/img/sampleprofile.png)

![Sample Search Results](/public/assets/img/searchresultsexample.png)

![Coffee Pairing Based On Book Selection](/public/assets/img/coffeesuggestionbookdetail.png)


## What it includes

* Passport and passport-local for authentication
* Sessions to keep user logged in between pages
* Flash messages for errors and successes
* Passwords that are hashed with BCrypt
* EJS Templating and EJS Layouts

#### What is the application about?

  A book tracking application based on Google books API volumes endpoint. 

  - **Signup Required**: User can search books based on keywords and see the details of the books such as title, author, description...etc.
    - User have access to their own personal library that includes saved books at the top of the home page.
    - **Bookshelf**: User can add/move/remove book from their bookshelf.
    - **Coffee Recommendations**: Once user selects a book, they receive optimal coffee pairings for that book
    - **Shop**: User can purchase coffee from shop

- #### What Framework/library did I use?

  **Frontend**: 

  ​	- main: javascript, css, bootstrap

  **Backend**: nodeJS, express, axios

  **Database/Management**: Sequelize models / migrations; PostgresSQL

  **API**: Google books Volumes Endpoint

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
### Wireframes
![Wireframe](/public/assets/img/bookbeanwire.png)

### ERD

![ERD](/public/assets/img/bookbeanerd.png)

### To Install

## `1` Fork & Clone Project & Install Dependencies
`1` First `fork` and `clone` repository

`2` Next install the current dependencies that are listed inside of `package.json`
```text
npm install
```
## Blockers/Future Plans
I was unable to merge my shop and book search by the deadline. I spent the first week of the project creating a shop. When I created the book search, I should have created it as a branch of the original repo, but did not and it caused major problems trying to reconcile the two projects. My original repo can be found here: 
[BookBean]([https://link-url-here.org](https://github.com/CatW-M/BookBean))

Going forward, I would like to add in the shop and also use a scraper to add coffees from local roasters to the database. As I learn more about AI, I would like to create a program that can offer more refined coffee-pairings based on user data.
