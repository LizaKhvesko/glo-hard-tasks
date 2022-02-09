const body = document.querySelector('body');
const books = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const title3 = books[4].querySelector('a');
const chapter7 = books[2].querySelector('li:nth-child(9)');
const list2 = books[0].querySelectorAll('li');
const list5 = books[5].querySelectorAll('li');

books[0].before(books[1]);
books[5].after(books[2]);
books[0].after(books[4]);

body.style.backgroundImage = 'url(./image/adv.jpg)';

title3.textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

const chapter8 = document.createElement('li');
chapter8.textContent = 'Глава 8: За пределами ES6';
chapter7.after(chapter8);

list2[9].after(list2[2]);
list2[3].after(list2[6]);
list2[6].after(list2[8]);

list5[1].after(list5[9]);
list5[4].after(list5[2]);
list5[8].before(list5[5]);


