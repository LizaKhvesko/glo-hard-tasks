function updateTime() {
  let first = document.querySelector('.first');
  let second = document.querySelector('.second');
  let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  let today = new Date();
  let weekIndex = today.getDay();
  let year = today.getFullYear();
  let monthIndex = today.getMonth();
  let day = today.getDate();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let wordM = 'минут';
  let wordS = 'секунд';

  function addTail(number) {
    let str = String(number);
    if(number !== 11 && str[str.length-1] === '1') {
      return 'а';
    } else if ((number < 10 || number > 20) && (str[str.length-1] === '2' || str[str.length-1] === '3' || str[str.length-1] === '4')) {
      return 'ы';
    } else {
      return '';
    }
  }

  function hourWord (hour) {
    if (hour === 1 || hour === 21) {
      return 'час';
    } else if (hour === 2 || hour === 3 || hour === 4 || hour === 22 || hour === 23) {
      return 'часа';
    } else {
      return 'часов';
    }
  }

  function addZero(number) {
    if (String(number).length === 1) {
      number = '0' + number;
    }
    return number;
  }

  let wordH = hourWord(hour);
  wordM += addTail(minutes);
  wordS += addTail(seconds)
  first.textContent = `Сегодня ${week[weekIndex]}, ${day} ${months[monthIndex]} ${year} года, ${hour} ${wordH} ${minutes} ${wordM} ${seconds} ${wordS}`;

  monthIndex = addZero(monthIndex);
  day = addZero(day);
  hour = addZero(hour);
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  second.textContent = `${day}.${monthIndex}.${year} - ${hour}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
