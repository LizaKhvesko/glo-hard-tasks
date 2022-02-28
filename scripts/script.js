let squareBody = document.querySelector('.square-body');
let blocks = document.querySelectorAll('.block');
let btnReset = document.querySelector('.btn-reset');

squareBody.addEventListener('click', (e) => {
    let index;
    for (let i = 0; i < blocks.length; i++) {
        if(blocks[i] === e.target.closest('.block')) {
            index = i;
            break;
        }
    }
    let targetBlock = blocks[index].querySelector('.block-number');
    let text = targetBlock.textContent;
    let blockTop, blockDown, blockRight, blockLeft

    index > 4 ?  blockTop = blocks[index-5].querySelector('.block-number') : blockTop = targetBlock;
    index < 20 ? blockDown = blocks[index+5].querySelector('.block-number') : blockDown = targetBlock;
    index > 0 ? blockLeft = blocks[index-1].querySelector('.block-number') : blockLeft = targetBlock;
    index < 24 ? blockRight = blocks[index+1].querySelector('.block-number') : blockRight = targetBlock;

    function move(element) {
        targetBlock.textContent = element.textContent;
        element.textContent = text;
        blocks = document.querySelectorAll('.block');
    }
        
        if (e.target.closest('.left')) {
           move(blockLeft);
        } else  if(e.target.closest('.right')) {
           move(blockRight);
        } else if (e.target.closest('.top')) {
           move(blockTop);
        } else if(e.target.closest('.bottom')) {
           move(blockDown);
        }
})

btnReset.addEventListener('click', () => {
    blocks.forEach((block, index) => {
        block.querySelector('.block-number').textContent = index+1;
    })
})