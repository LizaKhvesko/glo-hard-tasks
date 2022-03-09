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

	
	tryFilterByType = (type, values) => {
		try {
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			const alertMsg = (valuesArray.length) ?
				`Данные с типом ${type}: ${valuesArray}` :
				`Отсутствуют данные типа ${type}`;
			showResults(alertMsg);
		} catch (e) {
			showError(`Ошибка: ${e}`);
		}
	};

const filterButton = document.querySelector('#filter-btn');

filterButton.addEventListener('click', e => {
	const typeInput = document.querySelector('#type');
	const dataInput = document.querySelector('#data');

	if (dataInput.value === '') {
		dataInput.setCustomValidity('Поле не должно быть пустым!');
		showNoResults();
	} else {
		dataInput.setCustomValidity('');
		e.preventDefault();
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
	}
});

