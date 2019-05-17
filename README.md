# clementine-back

> Nodejs Project

## Build Setup

``` bash
$ npm install

$ npm run start

$ node_modules/.bin/sequelize db:migrate

$ node_modules/.bin/sequelize db:seed:all

```

## Availables routes

### Users

* `GET : /users/` -> return all users
* `GET : /users/:id` -> return user with id  `:id`
* `POST : /users/` -> create a user 
* `UPDATE : /users/:id` -> update user with id  `:id`
* `DELETE : /users/:id` -> delete user with id  `:id`

### Companies

* `GET : /companies/` -> return all companies
* `GET : /companies/:id` -> return company with id  `:id`
* `POST : /companies/` -> create a company 
* `UPDATE : /companies/:id` -> update company with id  `:id`
* `DELETE : /companies/:id` -> delete company with id  `:id`
* `POST : /companies/:company_id/users/:user_id` -> add user with id `:user_id` to company with id `:company_id`
* `DELETE : /companies/:company_id/users/:user_id` -> remove user with id `:user_id` from company with id `:company_id`

