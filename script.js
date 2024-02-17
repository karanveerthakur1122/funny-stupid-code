const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const icon = document.querySelector('.icon img');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

let clickedYes = false;

yesBtn.addEventListener('click', () => {
    if (!clickedYes) {
        question.innerHTML = 'I Knew it, didn\'t I? 😁';
        icon.src = 'https://media.tenor.com/n8DB4bmpduIAAAAM/yeah-bwoi-grin.gif';
        clickedYes = true;
    } else {
        question.innerHTML = 'Hehe Stupid! 😁';
        icon.src = 'https://media1.tenor.com/m/TWBu6OaESKQAAAAC/dog-hehehe.gif';
    }
});


noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});