document.addEventListener('DOMContentLoaded', function(){ //run before everything loads
    const images = document.querySelectorAll("img");

    images.forEach((img) =>{
        if (!img.hasAttribute("loading")) {  //check to have the currently loading imgs be lazy
            img.setAttribute("loading", "lazy");
        }
    });
});
