angular.module('app').factory('contentData', ['$rootScope', function($rootScope){
	var obj = {
		content: {

			tourTitle: {
				ua: '" 10 родзинок Закарпаття "',
				ru: '" 10 изюминок Закарпатья "'
			},
			tourSlogan: [
				{
					ua: 'Відчуйте на собі магію Закарпаття!',
					ru: 'Почувствуйте на себе магию Закарпатья!'
				},
				{
					ua: 'Пориньте в особливу атмосферу мальовничого регіону України!',
					ru: 'Oкунитесь в особенную атмосферу живописного региона Украины!'
				},
				{
					ua: 'Унікальні враження за найприємнішими цінами!',
					ru: 'Уникальные впечатления по самым приятным ценам!'
				},
				{
					ua: 'Замовте вже зараз всього за 995 грн!',
					ru: 'Закажите уже сейчас всего за 995 грн!'
				},
				{
					ua: 'Карпати, замки, палаци, вина!',
					ru: 'Карпаты, замки, дворцы, вина!'
				},
				{
					ua: 'Все найкраще, що може запропонувати гостинне Закарпаття!',
					ru: 'Все лучшее, что может предложить гостеприимное Закарпатье!'
				},
				{
					ua: 'Початок найближчого туру вже 07.07.2017!',
					ru: 'Начало ближайшего тура уже 07.07.2017!'
				},
				{
					ua: 'Поспішіть! Залишилось всього 5 вільних місць!',
					ru: 'Поспешите! Осталось всего 5 свободных мест!'
				}
			],
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
					ua: 'Програма',
					ru: 'Программа'
				},
				i3: {
					ua: 'Вартість',
					ru: 'Стоимость'
				},
				i4: {
					ua: 'Замовити',
					ru: 'Заказать'
				}
			},

			detail: {
				s1: {
					title: {
						ua: 'Тривалість туру',
						ru: 'Длительность тура'
					},
					days: {
						ua: '3 дні',
						ru: '3 дня'
					},
					nights: {
						ua: '2 ночі',
						ru: '2 ночи'
					}
				},

				day1: {
					title: {
						ua: 'День 1',
						ru: 'День 1'
					},
					ev1: {
						d: {
							ua: 'Санаторій Карпати. Палац Шенборна (екскурсія)',
							ru: 'Санаторий Карпаты. Дворец Шенборна (экскурсия)'
						},
						t: 'виїзд зі Львова 08:00'
					},
					ev2: {
						d: {
							ua: 'Мукачево (екскурсія замком і обід)',
							ru: 'Мукачево (экскурсия по замку и обед)'
						}
					},
					ev3: {
						d: {
							ua: 'Берегово (купання в термальному басейні, дегустація вин)',
							ru: 'Берегово (купание в термальном бассейне, дегустация вин)'
						}
					},
					ev4: {
						d: {
							ua: 'Берегівський р-н (ночівля в угорських садибах сільського туризму)',
							ru: 'Береговской р-н (ночевка в усадьбах сельского туризма)'
						},
						t: '21:30'
					}
				},


				day2: {
					title: {
						ua: 'День 2',
						ru: 'День 2'
					},
					ev1: {
						d: {
							ua: 'Cніданок і виїзд',
							ru: 'Завтрак и выезд'
						},
						t: '08:00'
					},
					ev2: {
						d: {
							ua: 'Ужгород (екскурсія містом, замком та обід)',
							ru: 'Ужгород (экскурсия по городу, по замку и обед)'
						}
					},
					ev3: {
						d: {
							ua: 'Лумшори (купання в чанах)',
							ru: 'Лумшоры (купание в чанах)'
						}
					},
					ev4: {
						d: {
							ua: 'Повернення в садиби',
							ru: 'Возвращение в усадьбы'
						},
						t: '20:30'
					}
				},

				day3: {
					title: {
						ua: 'День 3',
						ru: 'День 3'
					},
					ev1: {
						d: {
							ua: 'Cніданок і виїзд',
							ru: 'Завтрак и выезд'
						},
						t: '08:00'
					},
					ev2: {
						d: {
							ua: 'Іза (дегустація сиру)',
							ru: 'Иза (дегустация сыра)'
						}
					},
					ev3: {
						d: {
							ua: 'Oзеро Синевир (екскурсія та обід)',
							ru: 'Oзеро Синевир (экскурсия и обед)'
						}
					},
					ev4: {
						d: {
							ua: 'Пилипець (огляд водоспаду Шипіт)',
							ru: 'Пилипец (обзор водопада Шипот)'
						},
						t: 'повернення o 23:00'
					}
				}
			},

			price: {

			},


			form: {
				title: {
					ua: 'Замовити тур',
					ru: 'Заказать тур'
				},
				nameLbl: {
					ua: 'Прізвище, Ім\'я та по-Батькові',
					ru: 'Фамилия, Имя и Отчество'
				},
				phoneLbl: {
					ua: 'Телефон',
					ru: 'Телефон'
				},
				emailLbl: {
					ua: 'Електронна пошта',
					ru: 'Електронная пошта'
				},
				dateLbl: {
					ua: 'Дата',
					ru: 'Дата'
				},
				countLbl: {
					ua: 'Кількість осіб',
					ru: 'Количество человек'
				},
				asksLbl: {
					ua: 'Побажання',
					ru: 'Пожелания'
				},
				submit: {
					ua: 'Замовити',
					ru: 'Заказать'
				}
			}

		}
	};

	return obj;
}]);