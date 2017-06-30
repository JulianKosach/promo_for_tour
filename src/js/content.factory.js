angular.module('app').factory('contentData', ['$rootScope', function($rootScope){
	var obj = {
		content: {

			tourTitle: {
				ua: '" 10 родзинок Закарпаття "',
				ru: '" 10 изюминок Закарпатья "'
			},
			tourSlogan: {
				ua: 'Відчуйте на собі магію Закарпаття і пориньте в особливу атмосферу мальовничого регіону України!',
				ru: 'Почувствуйте на себе магию Закарпатья и окунитесь в особенную атмосферу живописного региона Украины!'
			},
			buyTourBtn: {
				ua: 'В тур!',
				ru: 'В тур!'
			},
			moreBtn: {
				ua: 'Дізнатись більше',
				ru: 'Узнать больше'
			},

			menuItem: {
				i1: {
					ua: 'Головна',
					ru: 'Главная'
				},
				i2: {
					ua: 'section2',
					ru: 'section2'
				},
				i3: {
					ua: 'section3',
					ru: 'section3'
				},
				i4: {
					ua: 'section4',
					ru: 'section4'
				}
			},

		}
	};

	return obj;
}]);