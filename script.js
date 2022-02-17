const DomElement = function(selector, height, width, fontSize, text, bg, color, position){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.fontSize = fontSize;
    this.bg = bg;
    this.color = color;
    this.position = position;
    this.text = text;
    this.create = function() {
        if(this.selector[0] === '.') {
            let newElement = document.createElement('div');
            newElement.classList.add(this.selector.slice(1));
            this.cssText(newElement);
            document.querySelector('body').append(newElement);
        } else if (this.selector[0] === '#') {
            let newElement = document.createElement('p');
            newElement.id = this.selector;
            this.cssText(newElement);
            document.querySelector('body').append(newElement);
        }
    }
    this.cssText = function(elem) {
        elem.style.cssText = `height: ${this.height};
            width: ${this.width};
            background-image: ${this.bg};
            font-size: ${this.fontSize};
            background-color: ${this.color};
            position: ${this.position};`
            elem.textContent = this.text;
    }
}

function move (event) {
    let square = document.querySelector('.square');
    switch(event.key) {
        case 'ArrowUp': square.style.top = (square.getBoundingClientRect().top - 10) + 'px';
        break;
        case 'ArrowRight': square.style.left = (square.getBoundingClientRect().left + 10) + 'px';
        break;
        case 'ArrowDown': square.style.top = (square.getBoundingClientRect().top + 10) + 'px';
        break;
        case 'ArrowLeft': square.style.left = (square.getBoundingClientRect().left - 10) + 'px';;
        break;
    }
}

const newObj1 = new DomElement('.block', '100px', '200px', '15px', 'JS make me cry', 'url(image/color.jpeg)');
const newObj2 = new DomElement('#best', '200px', '300px', '25px', 'Too hard for understanding', 'url(image/color2.jpeg)');
const square = new DomElement('.square', '100px', '100px', '','', '','yellow', 'absolute');

newObj1.create();
newObj2.create();
document.addEventListener('DOMContentLoaded', function(event) {
    square.create();
})
document.addEventListener('keydown', move);