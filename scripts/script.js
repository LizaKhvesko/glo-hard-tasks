let squareBody = document.querySelector('.square-body');
let blocks = document.querySelectorAll('.block');
let btnReset = document.querySelector('.btn-reset');

blocks.forEach((block, index) => {
    block.addEventListener('click', (e) => {
        let targetBlock = blocks[index].querySelector('.block-number');
        let text = targetBlock.textContent;
        let blockTop;
        let blockDown;
        let blockRight;
        let blockLeft

        index > 4 ?  blockTop = blocks[index-5].querySelector('.block-number') : blockTop = targetBlock;
        index < 20 ? blockDown = blocks[index+5].querySelector('.block-number') : blockDown = targetBlock;
        index > 0 ? blockLeft = blocks[index-1].querySelector('.block-number') : blockLeft = targetBlock;
        index < 24 ? blockRight = blocks[index+1].querySelector('.block-number') : blockRight = targetBlock;
        
        if (e.target.closest('.left')) {
           targetBlock.textContent = blockLeft.textContent;
           blockLeft.textContent = text;
           blocks = document.querySelectorAll('.block');
        } else  if(e.target.closest('.right')) {
           targetBlock.textContent = blockRight.textContent;
           blockRight.textContent = text;
           blocks = document.querySelectorAll('.block');
        } else if (e.target.closest('.top')) {
           targetBlock.textContent = blockTop.textContent;
           blockTop.textContent = text;
           blocks = document.querySelectorAll('.block');
        } else if(e.target.closest('.bottom')) {
           targetBlock.textContent = blockDown.textContent;
           blockDown.textContent = text;
           blocks = document.querySelectorAll('.block');
        }
    })
})

btnReset.addEventListener('click', () => {
    blocks.forEach((block, index) => {
        block.querySelector('.block-number').textContent = index+1;
    })
})