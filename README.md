# codecrypt
### Web app For Information Security

## Setup

#### Node

For Linux:

```
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs
```

For Mac:

```
brew install node
```

#### mySQL

Install the community edition [here](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04).

#### React

```
npm install -g create-react-app
```

To create a new React app:

```
create-react-app name_of_app
```

To run the app, cd into the directory and do:

```
npm start
```

## Running the Assignment

Run mySQL:

```
mysql -u root -p
```

mySQL would be running on your local server after entering correct password.

create a entry into your database:

```
use database; 
```
```
CREATE TABLE `accounts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
  
```
```
insert into users (username,password) values (test,test);
```

This will open the mySQL shell with that database loaded and this particular entr.y


Run Express:

Before entering these commands go to server.js and enter your mySQL credentials to allow express to access mySQL.
```
cd backend/
npm install
npm run start
```

Run React:

```
cd frontend
npm install/
npm run start
```

Navigate to localhost:3000/ in your browser.

## Lecture Videos

There are lecture videos on the following topics:

* Introduction to Quantum Computing
* Qubit States
* Qubit Gates
* Rotational Operators
* Quantum Fourier Transform
* Quantum Key Distribution
* Quantum Phase Estimation
* Noisy vs Noiseless channels
* Beginning of Encryption
* Primitive Ciphers
* Basic Cryptography Protocols
* Crypto Solutions To Oblivious Transfers
* Oblivious Transfers

All these lectures had been possible due to the Security Paathshala team.
We have integrated their videos in our app.


## Quizzes

There are quizzes on the following topics:

* Advanced Encryption Standard
* Cross Site Request Forgery
* DNS Spoofing
* DDoS Attacks
* Perfect Secrecy
* Pseudo Random Number Generator
* RSA Algorithm
* SQL Injection
* Cross Site Scripting


## Video Explanations of Cyber Attacks

There are video explanations of the following topics:

* Cross Site Request Forgery
* Cross Site Scripting
* DDoS Attack
* DNS Spoofing
* SQL Injection


## Virtual Lab for Hands-on experimenting

There is a virtual experiment for hands-on experience for SQL Injection.
@saboo lab experiment srif SQL Injection ke liye hi h na ?????????
