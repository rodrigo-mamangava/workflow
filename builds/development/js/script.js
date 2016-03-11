//alert
var alert = function (){
	alert('Hello!');
};

//tagline
var fill;

(fill = function(item) {
  return $('.tagline').append("" + item);
})('The most creative minds in Art');

fill;

//template
$(function (){

	var Mustache = require('mustache');

	$.getJSON('js/data.json', function (data){
		console.log(data);
	});//getJSON

}); //function

//test
var test = function (){
	console.log('teste');
}
//test