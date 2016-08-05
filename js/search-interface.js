var Search = require('./../js/search.js').searchModule;
var searchObject = new Search();

var displaySearch = function(username, numberOfRepos) {
  $('#title').text(username + " has " + numberOfRepos + " public repositories.");
  $('#showButton').html("<button class='submit' id='seeRepos'>See Repos</button>");
  $('#seeRepos').click(function(event){
    searchObject.getUserRepos(username, displayRepos);
  });
};

var displayRepos = function(username, repos) {
  $('#title2').text("Here are the 30 repos they've updated most recently:");
  repos.forEach(function(repo) {
    if (repo.description === null) {
      repo.description = "No description provided";
    }
    $('#listRepos').append('<li><a href=' + repo.html_url + '>' + repo.name + '</a> ' + repo.description + '</li>');
  });
};

$(document).ready(function() {
  $('.searchForm').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    console.log(username);
    searchObject.userSearch(username, displaySearch);

  });
});
