let mailCopyText = document.querySelector('#sidebar__mail-copy')
let mailBtn = document.querySelector('.sidebar__item-mail')

mailBtn.onclick = function () {
    document.execCommand("copy");
    mailBtn.innerHTML = `<p style="color:#4B4B4B; text-transform: uppercase;">Copied</p>`

    function removeText() {
        return  mailBtn.innerHTML = `<p style="color:#FFF; text-transform: uppercase;">mail</p>` 
    
    }
    
    setTimeout(removeText, 4000)
}

mailBtn.addEventListener("copy", (event) => {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", mailCopyText.textContent);
    }
});


$(document).ready(function() {
    let position = 0;
    const slidesToShow = 6;
    const slidesToScroll = 1;
    const container = $('.content__container');
    const track = $('.content__track');
    const item = $('.content__item');
    const btnPrev = $('.prev__btn');
    const btnNext = $('.next__btn');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;


    item.each(function(index, item){
        $(item).css({
            minWidth: itemWidth - 18,
        })
    });

    btnNext.click(function() {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow *itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition()
        checkBtns()
    });

    btnPrev.click(function() {
        const itemsLeft = Math.abs(position) / itemWidth;

        position +=  itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition()
        checkBtns()

    })

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`,
        });
    }

    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
            'disabled',
            position <= -(itemsCount - slidesToShow) * itemWidth
        )
    }

    checkBtns()




})