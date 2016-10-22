var React = require('react');

var FilmList = function(props){

  console.log(props.films);

  var films = props.films.map(function(film, index){
    
    return (
      <div id='item'>
        <li key={index} id="li">
          <div className="filmImage">
            <img src ={film.poster} />
          </div>
          <div className="filmText">
            <h4 id='film-title'>{film.show_title}</h4>
            <p>Director: {film.director}</p>
            <p>{film.summary}</p>
          </div>
        </li>
      </div>
    )
  })

  return (
    <ul>
      {films}
    </ul>
  )

}

module.exports = FilmList;