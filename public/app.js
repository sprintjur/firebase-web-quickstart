(function(){

	// Initialize Firebase
  	var config = {
	    apiKey: "AIzaSyA2L0i0h1aWv4N3Sks3dBWCPQEgoGbEAjo",
	    authDomain: "web-quickstart-d9fd6.firebaseapp.com",
	    databaseURL: "https://web-quickstart-d9fd6.firebaseio.com",
	    storageBucket: "web-quickstart-d9fd6.appspot.com",
	    messagingSenderId: "112769363932"
  	};
  
  	firebase.initializeApp(config);

	var app = angular.module('app', ['firebase']);

	app.config(function($firebaseRefProvider){

		$firebaseRefProvider.registerUrl({
			default: config.databaseURL,
			object: `${config.databaseURL}/angular/users/jurerick`
		});
	});

	app.factory('ObjectFactory', ObjectFactory);

	app.controller('MyCtrl', MyCtrl);

	function ObjectFactory($firebaseObject, $firebaseRef){
		return $firebaseObject($firebaseRef.object);
	}

	function MyCtrl(ObjectFactory){
		this.object = ObjectFactory;

		this.sayHello = () => {
			return `Hello, ${this.object.email}`;
		}
	}

	var testData = {email: 'jurerick.porras@gmail.com'};

	const myCtrl = new MyCtrl(testData);

	const message = myCtrl.sayHello();

	console.assert( message === 'Hello, jurerick.porras@gmail.com', `Wrong Email ${myCtrl.object.email}` );

	console.log("DONE");

}());