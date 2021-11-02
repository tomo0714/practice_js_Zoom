// DOM
const thumb = document.getElementById('thumb');
const span = document.querySelector('#thumb span');
const img = document.querySelector('#zoom img');

// Variable
const offsetLeft = thumb.offsetLeft;
const offsetWidth = thumb.offsetWidth;
const offsetTop = thumb.offsetTop;
const offsetHeight = thumb.offsetHeight;
// console.log(span);

// Function
const zoom = (x, y) => {
    img.style.top = (offsetTop - y) * 10 + 'px';
    img.style.left = (offsetLeft - x) * 10 + 'px';
};

const cursor = e => {
    if(e.x > offsetLeft && e.x <= offsetLeft + offsetWidth && e.y > offsetTop && e.y <= offsetTop + offsetHeight) {
        let posX = e.x;
        let posY = e.y;
        if(e.x <= offsetLeft + 20) {
            posX = offsetLeft;
        } else if(e.x >= offsetLeft + offsetWidth - 20) {
            posX = offsetLeft + offsetWidth - 40;
        } else {
            posX -= 20;
        }
        if(e.y <= offsetTop + 20) {
            posY = offsetTop
        } else if(e.y >= offsetTop + offsetHeight - 20) {
            posY = offsetTop + offsetHeight - 40;
        } else {
            posY -= 20;
        }
        span.style.top = posY + 'px';
        span.style.left = posX + 'px';
        span.style.display = 'block';

        zoom(posX, posY);
    } else {
        span.style.display = 'none';
    }
};

// Event
window.addEventListener('mousemove' , cursor);