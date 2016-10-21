var React = require('react');

var SearchBox = React.createClass({
  getInitialState: function(){
    return( {searchTerm: null});
  },

  requestNewData: function(userInput){
    console.log(this.state)
    var url = "http://netflixroulette.net/api/api.php?"+this.state.searchTerm+"="+userInput
    console.log(url)
    this.props.requestFunction(url);
  },

  handleSelect: function(event){
    var searchType= event.target.value;
    console.log(searchType);
    this.setState({searchTerm: searchType })
  },

  handleButtonClick: function(event) {
    var element= document.getElementById('userInput');
    var userSearchTerm = element.value;
    console.log(userSearchTerm);
    
    if(userSearchTerm.length >= 5){
      this.requestNewData(userSearchTerm);    
    }  
  },

  render: function(){
    return (
      <div className="drop-down">
        <select onChange={this.handleSelect}>
        <option selected disabled>Pick a Category</option>
        <option value="actor">Actor</option>
        <option value="director">Director</option>
        <option value="title">Film</option>
      </select>

      <input type='text' id='userInput' onChange={this.handleButtonClick}/>
    
    </div>

      );
  }

})

module.exports= SearchBox;
