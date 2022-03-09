//в аргументах выбранный тип данных и массив значений, который мы ввели
//делаем фильтрацию, чтобы остались только значения, подходящие под выбранный тип
const filterByType = (type, ...values) => values.filter(value => typeof value === type),

//функция, чтобы спрятать все блоки, показывающие результат
	hideAllResponseBlocks = () => {
		//находим все результативные блоки и помещаем их в массив из нодлиста
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
		//скрываем их всех, прячем
		responseBlocksArray.forEach(block => block.style.display = 'none');
	},

	//функция, которая будет показывать нужный результативный блок
	//передаем туда селектор блока, текст, который будем показывать и место для текста, если оно есть
	showResponseBlock = (blockSelector, msgText, spanSelector) => {
		//сначала прячем все результативные блоки, вызывая нужную функцию
		hideAllResponseBlocks();
		//открываем нужный блок по селектору
		document.querySelector(blockSelector).style.display = 'block';
		//проверяем предусмотрено ли место для сообщения
		if (spanSelector) {
			//если да, то выводим текст сообщения в соответвующий спан
			document.querySelector(spanSelector).textContent = msgText;
		}
	},

	//эта функция вызовется, если выбросит ошибку, покажем блок с текстом про ошибку
	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),
	
	//эта функция вызовется при успешной отработке
	//обязательно нужно передать в нее текст - результат отработки
	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),
	
	//функция вызывается в начале, еще до того как мы что нибудь делаем
	//либо если мы ничего не вводим, то результата нет, тоже прказываем этот блок
	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),


	//запускаем процесс фильтрации, передавая выбранный тип и то, что мы ввели
	tryFilterByType = (type, values) => {
		//пытаемся сделать это в случае успеха
		try {
			//eval принимает в виде строки свои аргументы и выполняет код, т.е. в нашем случае запускает функцию фильтрации
			//результат функции filterByType получится массив
			//через джоин мы приводим полученные значения к строке, разделяем запятой
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			//формируем результативное сообщение
			//проверяем получили ли мы вообще результат?
			const alertMsg = (valuesArray.length) ?
				//если да, то формируем сообщение, что получили данные такого-то типа и показываем их
				`Данные с типом ${type}: ${valuesArray}` :
				//если подходящих данных под тип нет, то формируем такое сообщение 
				`Отсутствуют данные типа ${type}`;
			//вызываем функцию, которая покажет нам результат
			showResults(alertMsg);
		//перехватываем ошибку
		} catch (e) {
			//вызываем функцию, которая покажет результативный блок с ошибкой
			showError(`Ошибка: ${e}`);
		}
	};

//нашли кнопку для фильтрации
const filterButton = document.querySelector('#filter-btn');

//повесили событие по клику
filterButton.addEventListener('click', e => {
	//нашли инпут, где мы выбираем тип данных
	const typeInput = document.querySelector('#type');
	//нашли инпут где мы вводим сами данные
	const dataInput = document.querySelector('#data');

	//если мы ничего не ввели...
	if (dataInput.value === '') {
		//создаем сообщение для пользователя о том, что что-то не так
		dataInput.setCustomValidity('Поле не должно быть пустым!');
		//запускаем функцию, которая откроет безрезультатный пока блок
		showNoResults();
	//если же мы что-то ввели...
	} else {
		//очищаем сообщение для пользователя
		dataInput.setCustomValidity('');
		//убираем автоматические действия при кнопки типа сабмит
		e.preventDefault();
		//запускаем функцию фильтрации, предварительно избавившись от лишних пробелов по краям
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
	}
});

