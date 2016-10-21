var React = require('react');
var ReactDom = require('react-dom');
var NetflixBox = require('./components/NetflixBox');

window.onload = function(){
  ReactDom.render(
    <NetflixBox />, 
    document.getElementById('app')
  );
}