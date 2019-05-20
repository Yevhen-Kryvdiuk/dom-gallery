const large = document.querySelector('.large');
const bottomImg = document.querySelector('.bottom-img');

bottomImg.addEventListener('click',  function (event) {
    event.preventDefault();
    const  target = event.target.closest('a');
    return changeLargeImg(target.href, target.title);
});

function changeLargeImg(href, title) {
    large.src = href;
    large.alt = title;
}