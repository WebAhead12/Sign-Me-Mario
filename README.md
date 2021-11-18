# Sign Me Mario

Our Website is focused around the creating of petitions and signing them, you must have an account registered in order to sign a particular petition, once you sign you cannot unsign so you have to be careful of what you agree to sign and what not.

Made by [Hala](https://github.com/halakhamis07) and [George](https://github.com/Iz1cK)

### DB SCHEME

![](https://i.imgur.com/pgk7V3u.png)

### SERVER ROUTES

- / => (index.html) petitions with title and desc
- GET /all-petitions => (json) returns all petitions data
- GET /create-petition => (create.html) create a new petition
- POST /create-petition => redirects to GET /petition
- GET /petition => (petition.html)
- GET /p/:petition_id => (json)
- POST /sign-petition => stays on the same page
- GET /authenticate => (autheticate.html)
- POST /register => redirects to GET /sign-in
- POST /login-in => redirects to GET /
- GET /log-out => redirects to GET / authenticate

## FOLDER STRUCTURE

- Main folder:
  - database
    - connection.js
    - init.sql
  - middleware
    - verifyToken.js
  - front-end
    - index
      - index.html
      - index.js
      - index.css
    - create
      - create.html
      - create.js
      - create.css
    - authenticate
      - authenticate.html
      - authenticate.js
      - authenticate.css
    - petition
      - petition.html
      - petition.js
      - petition.css
  - handlers
    - index.js
    - create.js
    - authenticate.js
    - petition.js
  - server.js
  - router.js
  - package.json
  - .env

## FEATURES

- Sign-in feature
- Petitions
- Petiton goal
- Comments

## WIRE-FRAMES

#### index.html

![](https://i.imgur.com/XbK4igU.png)

#### create.html

![](https://i.imgur.com/TElVO4D.png)

#### authenticate.html

![](https://i.imgur.com/Bw9uG6i.png)

#### petition.html

![](https://i.imgur.com/WckdVo2.png)
