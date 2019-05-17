const large = document.querySelector('.large');
const bottomImg = document.querySelector('.bottom-img');

bottomImg.onclick = function (event) {
    let  target = event.target;
    console.log(target);
    while (target !== this) {
        if (target.nodeName === 'A') {
            return changeLargeImg(target.href, target.title);
        }

         target = target.parentNode;
    }

};

function changeLargeImg(href, title) {
    large.src = href;
    large.alt = title;
    return false;
}