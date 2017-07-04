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


			obj: {
				sc: {
					t: {
						ua: 'Санаторій Карпати',
						ru: 'Санаторий Карпаты'
					},
					d: {
						ua: 'Серед карпатських живописних гір розташувався один з найгарніших і найромантичніших палаців країни, наче у казку запрошує Вас мисливський палац графів Шенборнів (1890р.). Він дивиться на Вас 365 вікнами, запрошує через 12 входів у 52 кімнати. Палац оточений гарним парком з багатьма екзотичними рослинами.',
						ru: 'Среди карпатских живописных гор расположился один из самых красивых и романтичных замков страны. Словно в сказку приглашает Вас охотничий замок графов Шенборнов (1890р.). Он смотрит на Вас 365 окнами, зазывает через 12 входов в 52 комнаты. Замок окружен красивым парком со многими экзотическими растениями. Недалеко от замка-красавца находится оборонный замок барона Перени (XIV век), к сожалению, он не такой ухоженный, как его коллега, но, в связи со своим возрастом, также заслуживает внимания туристов.'
					}
				},
				muc: {
					t: {
						ua: 'Мукачево',
						ru: 'Мукачево'
					},
					d: {
						ua: 'Звідки б Ви не наближалися до Мукачево, за десятки кілометрів, на одинокій гостроверхій сопці, як магніт, Вас притягує овіяний легендами і бойовою славою мукачівський замок “Паланок” (XIV ст.). Цей визначний воєнно-архітектурний пам\'ятник середньовіччя був збудований для охорони і контролю торгових і військових шляхів. Деякі джерела стверджують, що вже в ІХ-Х ст. на горі було невелике укріплення, збудоване для охорони кордонів Київської Русі за Карпатами. Спорудив замок руський князь Федір Корятович і перетворив його у свою резиденцію. Замкові стіни пам’ятають свою захисницю Ілону Зріні, що проявила дива мужності та героїзму при обороні замку.\n Крім потужного замку в Мукачево є ще багато цікавого: каплиця св. Мартина (XIV ст.), жіночий Миколаївський монастир на Чернечій горі (XVIIІ ст.), палац Ракоці (1663р.) та прекрасна зелена ратуша (1903р.). ',
						ru: 'Откуда бы Вы не приближались к Мукачево, за десятки километров, на одинокой остроконечной сопке, как магнит Вас притягивает овеянный легендами и боевой славой Мукачевский замок "Паланок" (XIV в.) Этот выдающийся военно-архитектурный памятник средневековья был построен для охраны и контроля торговых и военных путей. Некоторые источники утверждают, что уже в IX-Х вв. на горе было небольшое укрепление, построенное для охраны границ Киевской Руси за Карпатами. Построил замок русский князь Федор Корятович и превратил его в свою резиденцию. Замковые стены помнят свою защитницу Илону Зрини, проявившую чудеса мужества и героизма при обороне замка.'
					}
				},
				ber: {
					t: {
						ua: 'Берегове',
						ru: 'Берегово'
					},
					d: {
						ua: 'Якщо хочете відчути себе в іншій країні, де частина людей не розуміють української, російської та англійської, однозначно Вам треба в столицю угорської України - Берегово. Саме місто підготувало для гостей готичний костел Всіх Святих (1370р.), костел реформаторів (XV ст.), “Графський двір” – садиба князя Бетлені (1629р.), величний будинок імперського суду (1908р.) та касино “Золота пава”. Але найбільшою принадою є басейни з унікальною термальною водою, що піднімається з глибини1600 м. та лікує від 86 хвороб, аналоги їй є лише в Новій Зеландії.',
						ru: 'Если хотите почувствовать себя в другой стране, где большинство людей не понимает ни украинского, ни русского, ни английского языка, однозначно Вам в столицу венгерской Украины - Берегово. Сам город подготовил для гостей готический костел Всех Святых (1370р.), костел реформаторов (XV век), "Графский двор" - усадьба князя Бетлена (1629р.), величественное здание имперского суда (1908р.).'
					}
				},
				ug: {
					t: {
						ua: 'Ужгород',
						ru: 'Ужгород'
					},
					d: {
						ua: 'Перша згадка про це вічно прикордонне місто на річці Уж датується 872 роком, воно зачарує своїм шармом і колоритом навіть найвибагливішого туриста. Прогуляйтеся історичною вулицею міста - Корзо, обов’язково огляньте найвідоміший храм міста Катедральний Хрестовоздвиженський собор (1841р.), римо-католицький костел св. Георгія (1775р.), огляньте один з найстаріших в Україні замок (ХIV ст.), Закарпатський музей народної архітектури та побуту (скансен) та обов’язково завітайте в культову корчму “Деца у нотаря”. ',
						ru: 'Первое упоминание об этом вечно пограничном городе на реке Уж датируется 872 годом, он очарует своим шармом и колоритом даже самого требовательного туриста. Прогуляйтесь по исторической улицей города - Корзо, обязательно осмотрите известный храм города Катедральний Хрестовоздвиженський собор (1841р.), римо-католический костел св. Георгия(1775р.), осмотрите один из старейших в Украине замков (ХIV ст.), Закарпатский музей народной архитектуры и быта (скансен) и обязательно пожалуйте в культовую корчму "Деца в нотаря".'
					}
				},
				lum: {
					t: {
						ua: 'Лумшори',
						ru: 'Лумшоры'
					},
					d: {
						ua: 'В підніжжі найбільшої полонини українських Карпат полонини Руна знаходиться бальнеологічний курорт Лумшори, який відомий ще з XVII ст. В ньому тісно переплелися райської краси природа і елементи пекла – величезні металеві чани, в яких Вас варитимуть на повільному вогні в мінеральній сірководневій воді. Для більшої насолоди можна чергувати “варіння” в чані і купання в холодній воді. Такий відпочинок окрім незабутніх вражень, приводить до оздоровлення опорно-рухового апарату і омолоджує організм на десять років.',
						ru: 'В подножия самой большой горной долины украинских Карпат горной долины Руна находится бальнеологический курорт Лумшоры, известный еще с XVII ст. В нем тесно переплелись райской красоты природа и элементы ада - огромные металлические чаны, в которых Вас будут варить на медленном огне в минеральной сероводородной воде. Для большего наслаждения можно чередовать "варку" в чане и купание в холодной воде. Такой отдых кроме неизгладимых впечатлений, приводит к оздоровлению опорно-двигательного аппарата и омолаживает организм на десять лет.'
					}
				},
				sin: {
					t: {
						ua: 'Синевир',
						ru: 'Синевир'
					},
					d: {
						ua: 'Візитною карткою Українських Карпат є незрівнянної краси озеро Синевир, знане ще в народі як “Морське око”, воно вабить до себе мальовничими гірськими пейзажами та чистою кришталевою водою, в якій здавна водиться благородна форель.\n Озеро утворилося приблизно 10 000 років назад на висоті 989 метрів і має максимальну глибину 22 метри. ',
						ru: 'Визитной карточкой Украинских Карпат является несравненной красоты озеро Синевир, известное как "Морской глаз", оно влечет к себе живописными горными пейзажами и чистой хрустальной водой, в которой издавна водится благородная форель.\n Озеро образовалось приблизительно 10 000 лет назад на высоте 989 метров и имеет максимальную глубину 22 метра.'
					}
				},
				pul: {
					t: {
						ua: 'Пилипець',
						ru: 'Пилипец'
					},
					d: {
						ua: 'Тут з висоти15 метрів багатьма заворожуючими каскадами між андезиновими скелями скидає води в мальовничу гірську долину один з найкрасивіших водоспадів України – водоспад Шипіт. Він бере свій початок з великого підземного джерела, т.з. “морське око”, в одному з найгарніших місць українських Карпат – полонині Боржава. Перебування тут чудово допомагає відпочити від цивілізації та дає нові життєві сили.',
						ru: 'Здесь с высоты 15 метров, завораживающим каскадами между андезитовыми скалами, сбрасывает воды в живописную горную долину Водопад Шипит. Водопад берет свое начало из большого подземного источника, т.н. "Морского глаза", в одном из красивейших мест украинских Карпат - полонине Боржава. Время проведенное у Шипота помогает чудесно отдохнуть от цивилизации и дает новые жизненные силы.'
					}
				}
			},

			price: {
				pr: {
					ua: 'Всього за 995 грн!',
					ru: 'Всего за 995 грн!'
				},

				inc: {
					t: {
						ua: 'У вартість входять',
						ru: 'В стоимость входят'
					},
					i1: {
						ua: 'Проїзд комфортабельним автобусом',
						ru: 'Проезд комфортабельным автобусом'
					},
					i2: {
						ua: 'Проживання 2 ночі',
						ru: 'Проживание 2 ночи'
					},
					i3: {
						ua: 'Супровід гіда-екскурсовода',
						ru: 'Сопровождение гида-экскурсовода'
					},
					i4: {
						ua: 'Екскурсійне обслуговування',
						ru: 'Экскурсионное обслуживание'
					},
					i5: {
						ua: 'Страхування на час подорожі',
						ru: 'Страхование на время путешествия'
					}
				},

				ninc: {
					t: {
						ua: 'У вартість не входять',
						ru: 'В стоимость не входят'
					},
					i1: {
						ua: 'Вхідні квитки на екскурсійні об\'єкти',
						ru: 'Входные билеты в туристические объекты'
					},
					i2: {
						ua: 'Харчування',
						ru: 'Питание'
					},
					i3: {
						ua: 'Дегустації',
						ru: 'Дегустации'
					}
				},
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