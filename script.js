const bg = document.querySelector('[data-cursor-bg]');

window.addEventListener('pointermove', (w) => {
    bg.animate({
        top: `${w.pageY}px`,
        left: `${w.pageX}px`
    }, {duration: 0, fill:'forwards'})
})