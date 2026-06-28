function loadImages(){
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        if (img.dataset.src){
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }
    })
}

function dovisibilitychange(){
    if (document.visibilityState === 'visible') {
        loadImages();
        document.removeEventListener('visibilitychange', dovisibilitychange);
    }

}

if (document.visibilityState === 'visible'){
    loadImages();
} else {
    document.addEventListener('visibilitychange', dovisibilitychange);
}