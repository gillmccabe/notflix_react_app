var React = require('react');
var FilmList = require('./FilmList');
var SearchBox = require('./SearchBox');

var NetflixBox = React.createClass({


  getInitialState: function(){
    return ({results: [] })
  },

  componentDidMount: function(){
    var url = "http://netflixroulette.net/api/api.php?director=lynch"
    this.getData(url);
  },

  getData: function(url){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var filmResults = JSON.parse(request.responseText)
      this.setState({results: filmResults})
    }.bind(this);
    request.send();
  },

  render: function(){
    return (
      <div>
        <h1 className="page-heading"> Notflix </h1>
        <SearchBox requestFunction={this.getData}>    </SearchBox>
        <FilmList films={this.state.results}></FilmList>
      </div>
    )
  }
});

module.exports = NetflixBox;