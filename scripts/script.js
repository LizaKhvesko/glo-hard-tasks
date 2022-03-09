const select = document.querySelector('select');
const text = document.querySelector('.text');
const price = document.querySelector('.price');

const getData = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error))
}

getData('../db.json')
        .then(data => {
            select.innerHTML = '<option name="choose" value="choose">Выберите машину</option>';
            for (let i = 0; i < data.cars.length; i++) {
            select.innerHTML += `<option name="${data.cars[i].brand}" value="${i}">${data.cars[i].brand}</option>`; 
            }
        })
select.addEventListener('change', () => {
    getData('../db.json')
        .then(data => {
            let selectValue= select.options[select.selectedIndex].value;
            if (selectValue === 'choose') {
                text.textContent = 'Пожалуйста, сделайте свой выбор!';
                price.textContent = '';
            } else {
                text.textContent = `Машина: ${data.cars[selectValue].brand} ${data.cars[selectValue].model}`;
                price.textContent =  `Цена: ${data.cars[selectValue].price}`;
            }
        })
})

/*
const createSelect = (data) => {
    select.innerHTML = '<option name="choose" value="choose">Выберите машину</option>';
    for (let i = 0; i < data.cars.length; i++) {
       select.innerHTML += `<option name="${data.cars[i].brand}" value="${data.cars[i].brand}">${data.cars[i].brand}</option>`; 
    }
}

const makeChose = () => {
    select.addEventListener('change', async () => {
        let selectIndex = select.options[select.selectedIndex].value;
        
    })

}
*/
