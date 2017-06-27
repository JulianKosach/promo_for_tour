angular.module('app').controller('mainCtrl', ['$rootScope', function($rootScope){
	console.log('Made by Julian Kosach');
	console.log('mainCtrl');
	$rootScope.lang = 'ua';
}]);