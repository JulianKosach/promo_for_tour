angular.module('app').controller('mainCtrl', ['$rootScope', 'contentData', function($rootScope, contentData){
	console.log('Made by Julian Kosach');
	console.log('mainCtrl');
	
	$rootScope.lang = 'ua';

	this.tourTitle = contentData.tourTitle;
	this.tourSlogan = contentData.tourSlogan;

}]);