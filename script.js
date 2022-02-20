let schoolNumber = document.querySelector('#school');
let nameTeacher = document.querySelector('#name');
let ageTeacher = document.querySelector('#age');
let main = document.querySelector('#main');
let teacherSelect = document.querySelector('#teacherSelect');
let educ = document.querySelector('#educ');
let days = document.querySelectorAll('.day');
let saveBtn = document.querySelector('#save');
let tables = document.querySelector('.tables');
let result = [];

result = JSON.parse(localStorage.getItem ("result")) || result;
render()

//родительский класс
class Teacher{
    constructor(school, lesson, isMain, education = '') {
        this.school = school
        this.lesson = lesson
        this.isMain = isMain
        this._education = education
    }
    duty() {
        return 'Who is on duty today';
    }
    get education() {
        return this._education
    }
    set education(str) {
        this._education += str;
    }
}
//первый наследник
class Russian extends Teacher {
    constructor (school, lesson, isMain, education = '', name, age, daysWork = '') {
        super(school, lesson, isMain, education = '')
        this.name = name
        this.age = age
        this._daysWork = daysWork
    }
    rule() {
        return "Жи-ши пиши с буквой И";
    }
    get daysWork() {
        return this._daysWork
    }
    set daysWork(str) {
        this._daysWork += str;
    }
}
//второй наследник
class Geo extends Teacher {
    constructor (school, lesson, isMain, education = '', name, age, daysWork = '') {
        super(school, lesson, isMain, education = '')
        this.name = name
        this.age = age
        this._daysWork = daysWork
    }
    rule() {
        return "Минск столица Беларуси"
    }
    get daysWork() {
        return this._daysWork
    }
    set daysWork(str) {
        this._daysWork += str
    }
}

function render () {
    tables.innerHTML = ''
   result.forEach(function(obj) {
       let table = document.createElement('table')
        table.innerHTML = `
            <tr>
                <th>Номер школы</th>
                <th>Имя</th>
                <th>Возраст</th>
                <th>Урок</th>
                <th>Образование</th>
                <th>Рабочие дни</th>
                <th>Класс.рук.</th>
                <th><button class="delete">Х</button></th>
            </tr>
            <tr>
                <td>${obj.school}</td>
                <td>${obj.name}</td>
                <td>${obj.age}</td>
                <td>${obj.lesson}</td>
                <td>${obj._education}</td>
                <td>${obj._daysWork}</td>
                <td>${obj.isMain}</td>
                <td></td>
            </tr>
            `
    tables.append(table)
    deleteBtn()
    schoolNumber.value = '';
    nameTeacher.value = '';
    ageTeacher.value = '';
    educ.value = '';
    if(main.checked) {
       main.checked = false; 
    }
    teacherSelect.options[0].selected = true;
    days.forEach(function(elem) {
        if(elem.checked) {
            elem.checked = false
        }
    })
   }) 
}

saveBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let lessonValue = teacherSelect.options[teacherSelect.selectedIndex].value;
    let lessonText = teacherSelect.options[teacherSelect.selectedIndex].textContent
    let classMain = '';
    let schedule = '';

    if (main.checked) {
       classMain = 'Классный руководитель' 
    } else {
       classMain = 'Нет классного руководства' 
    }

    for (let i = 0; i < days.length; i++) {
        if (days[i].checked) {
            schedule += days[i].value + ' '
        } else{
            continue
        }
    }

    const teacherRussian = new Russian(schoolNumber.value, lessonText, classMain, '',nameTeacher.value, ageTeacher.value);
    teacherRussian.education = educ.value;
    teacherRussian.daysWork = schedule;

    const teacherGeo = new Geo(schoolNumber.value, lessonText, classMain, '',nameTeacher.value, ageTeacher.value);
    teacherGeo.education = educ.value;
    teacherGeo.daysWork = schedule;

     if(lessonValue === 'russian') {
        result.push(teacherRussian)
    } else {
        result.push(teacherGeo)
    }
    render()
    localStorage.setItem('result', JSON.stringify(result))
})

function deleteBtn(){
    let deleteBtn = tables.querySelectorAll('button');
    deleteBtn.forEach(function(elem, index) {
    elem.addEventListener('click', function() {
        result.splice(index, 1)
        render();
        localStorage.setItem('result', JSON.stringify(result))
        })
    })
}
