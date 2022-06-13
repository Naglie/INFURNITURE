// ARROW APPEARANCE
window.addEventListener('scroll', (e) => {
    let pixelCount = window.pageYOffset;
    if(pixelCount <= 136) {
        document.getElementById('arrowContainer').style.opacity = '0';
        document.getElementById('arrowContainer').style.cursor = 'auto';
    }
    if(pixelCount >= 136) {
        document.getElementById('arrowContainer').style.opacity = '1';
        document.getElementById('arrowContainer').style.cursor = 'pointer';
    }
});