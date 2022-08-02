


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