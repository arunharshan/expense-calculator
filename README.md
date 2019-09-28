#### React App Demo

https://reactexpensecalculator.herokuapp.com/

### Production- API Base url

https://react-json-server-db.herokuapp.com/

### Repos

Heroku Production git repo:
https://git.heroku.com/reactexpensecalculator.git

Local server git repo:
https://github.com/arunharshan/expense-calculator.git

### Expense expense calculator Demo

This dummy react-redux project showcase the use of Hooks in the react 16.9 version.<br/>
Read more at https://reactexpensecalculator.herokuapp.com/about

Tech: React JS 16.9 version with Hooks and Redux, Thunk, Async-Await, Promises, Router, Private router(page authentication), Axios, ES6, Responsive design, google material bootstrap (only free version topics)json-server, concurrently, and Heroku App deployment (both App and Json server), Axios, ES6,.<br>

## How to run the page locally

1. git clone https://github.com/arunharshan/expense-calculator.git<br/>

2. Cd into project folder <br>

3. run- npm install to install the dependencies<br>

4. run- npm run dev <br>

Runs the app in the development mode. at http://localhost:3000<br/>

The database json-server runs at port http://localhost:5000 <br/>

The page will reload if you make edits.<br>

Once you have the production API ready, make these changes in your react.js <br/>

React API call : <br/>
const baseurl =
process.env.NODE_ENV == 'production'
? 'https://react-json-server-db.herokuapp.com/'
: 'http://localhost:5000';

### Heroku Deployment

#### Publishing the API :

How to deploy the fake json api :<br/>
https://github.com/arunharshan/xpns-react-app-json-db/blob/master/README.md

#### Publishing the React App

The env.process variable in the react app won't switch inside the heroku server. Hence we need to deploy in Heroku way. (if you have an alternate solution please let me know)<br/>

The process below will setup a git in the Heroku server. For local code you can maintain a different git repo (or you can use the heroku git ).<br/>

Follow the process: <br/>
https://github.com/mars/create-react-app-buildpack#quick-start

#### For a fresh build

From your development folder run these commands:
git init
heroku create <PrintYourAppName> --buildpack mars/create-react-app
( Here <PrintYourAppName> is reactexpensecalculator which should be a fresh unique app name)
git add .
git commit -m "first commit"
git push heroku master
heroku open

(with this process the code goes into https://git.heroku.com/reactexpensecalculator.git )

#### Deploying from an existing git repo.

heroku git:remote -a reactexpensecalculator
git add .
git commit -m "first commit...."
git push heroku master
heroku open
