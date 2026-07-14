document.addEventListener('DOMContentLoaded', function(){ //run before everything loads
    const images = document.querySelectorAll("img");

    images.forEach((img) =>{
        if (!img.hasAttribute("loading")) {  //check to have the currently loading imgs be lazy
            img.setAttribute("loading", "lazy");
        }
    });
});

document.body.style.minWidth = '1200px'; //minwidth, doesnt shrink

if (!document.querySelector('meta[name="viewport"]')) { //also for larger screens it gets scaled
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(meta);
}