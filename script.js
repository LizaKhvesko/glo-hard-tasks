const text = document.querySelector('input');
const result = document.querySelector('.result');

function message() {
    setTimeout(function() {
        result.textContent = text.value;
    }, 300)
}

function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
const processChange = debounce(() => message());

text.addEventListener('input', processChange);
