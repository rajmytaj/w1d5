var exports = module.exports 
// module.exports = {};

exports.sayHelloEnglish = function(){
	console.log('hello');
	sayHelloSpanish();
};

function sayHelloSpanish(){
	console.log('hola');
};

