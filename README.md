# GitHub User Search

## A web app to find GitHub users and display information about their recently updated project repositories.

#### By Christine Tacha, August 2016

## Description

Independent project using APIs

## Setup/Installation Requirements

To replicate, clone this repository to your local hard drive using this link: https://github.com/christinetacha/blank_repo

###Run from the command line:
```
$ npm install
$ bower install
$ gem install sass
$ gulp build
```
###Get and properly store your own GitHub API key:
```
* Visit the Settings area of your GitHub account.
* Select "Personal Access Tokens" from the sidebar and hit "Generate New Token".
* Do not select any options.  Click on "Generate Token".
* Create a file named .env at the top level of your directory.
* Place your token in the .env file (i.e. exports.apiKey = "YOUR-KEY";)
* Include the .env file in .gitignore and require the apiKey variable in your js file(s).
```
###Start the local server and view the project (from command line):
```
$ gulp serve
```
## Support and contact details

Email: tacha.christine@gmail.com

## Technologies Used

* Javascript
* AJAX
* npm
* Bower
* GitHub API

### License

MIT License

Copyright (c) 2016
