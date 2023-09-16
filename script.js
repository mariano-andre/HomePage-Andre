const cursor = document.querySelector('[data-cursor');
const cursorBorder = document.querySelector('[data-cursor-border]');

window.addEventListener('mousemove', (w) => {
    const x = w.clientX;
    const y = w.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    cursorBorder.style.left = `${x}px`
    cursorBorder.style.top = `${y}px`;
    cursorBorder.animate({
        left: `${x}px`,
        top: `${y}px`
    }, {duration: 50, fill: 'forwards'});
})

window.addEventListener('click', () => {
    const w = '20px';
    cursorBorder.animate({
        width: '0px',
        height: '0px'
    }, {duration: 100, fill:'forwards'});
    cursorBorder.animate({
        width: w,
        height: w
    }, {duration: 300, fill: 'forwards'})
})