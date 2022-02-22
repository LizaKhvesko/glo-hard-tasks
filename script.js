const square = document.querySelector('.square');
const change = document.querySelector('.start');
const reset = document.querySelector('.reset');
let active = false;
let animation;
let count = 0;

function go() {
      count++
      animation = requestAnimationFrame(go);

      if (count > 495) {
        cancelAnimationFrame(animation)
      } else {
        square.style.left = count * 3 + 'px'
      }  
    } 


change.addEventListener('click', () => {
    if(active) {
        active = !active;
        cancelAnimationFrame(animation)
    } else {
        active = true;
        requestAnimationFrame(go)  
    }
})

reset.addEventListener('click', () => {
   if(active) {
        active = !active;
        cancelAnimationFrame(animation)
    }
   count = 0;
   square.style.left = 0;
})
