var React = require('react');

var FilmList = function(props){

  console.log(props.films);

  var films = props.films.map(function(film, index){
    return (
      <li key={index} id="li">
        <div className="filmImage">
          <img src ={film.poster} />
        </div>

        <div className="filmText">
          
          <h4>{film.show_title}</h4>
          <p>{film.release_year}</p>
          <p>{film.category}</p>
          <p>{film.director}</p>
          <p>{film.summary}</p>
         
        </div>
      </li>

    )
  })

  return (
    <ul>
      {films}
    </ul>
  )
}

module.exports = FilmList;