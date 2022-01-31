let lang = document.getElementsByTagName('html')[0].getAttribute('lang');

if (lang==='en') {
    console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
} else if(lang==='ru') {
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
}

switch(lang) {
    case 'ru':
       console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
       break
    case 'en':
        console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
        break  
    default:
        console.log('Неизвестный язык');
        break
}

let days = [['en', 'ru'], 
['Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday', 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье']];
let index = days[0].indexOf(lang);
console.log(days[1][index]);

let namePerson = 'Лиза';
namePerson==='Артем'? console.log('директор') : namePerson==='Александр' ? console.log('преподаватель') : console.log('студент');
