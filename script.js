let first = document.querySelector('.first');
let second = document.querySelector('.second');
let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let today = new Date();
let weekIndex = today.getDay();

for (let i = 0; i < week.length; i++) {
  let span = document.createElement('span');
  span.textContent = week[i] + ' ';
  if (i === 0 || i === 6) {
    span.style.fontWeight = '900';
  }
  if (i === weekIndex) {
     span.style.fontStyle = 'italic';
  }
  first.append(span);
}

for (let i = 0; i < week.length; i++) {
  let p = document.createElement('p');
  p.textContent = week[i];
  if (i === 0 || i === 6) {
    p.style.fontWeight = '900';
  }
  if (i === weekIndex) {
     p.style.fontStyle = 'italic';
  }
  second.append(p);
}
