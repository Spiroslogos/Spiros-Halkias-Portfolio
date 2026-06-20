document.getElementById('edubutton').addEventListener('click', function() {
    window.location.href = "../Professional Path/ProfessionalPathHome.html"
    })
//finds the thing with class 'edubutton' in the entire document
//waits until (button is clicked) then does function
//the current URL of the window, set that to = edu projects screen
//leaves current folder, goes into edu proj folder, opens new HTML

document.getElementById('recbutton').addEventListener('click', function() {
    window.location.href = "../Personal Path/PersonalPathHome.html"
    })

document.getElementById('expbutton').addEventListener('click', function() {
    window.location.href = "../Blog/Blog.html"
    })

document.getElementById('abtbutton').addEventListener('click', function() {
    window.location.href = "../About Me/AboutMeHome.html"
    })

document.getElementById('infobutton').addEventListener('click', function() {
    document.getElementById('infoinfo').classList.toggle('buttonshow')
});
document.getElementById('infobutton').addEventListener('click', function() {
    document.getElementById('infoinfo2').classList.toggle('buttonshow2')
});
document.getElementById('infobutton').addEventListener('click', function() {
    document.getElementById('infoinfo3').classList.toggle('buttonshow3')
});
document.getElementById('infobutton').addEventListener('click', function() {
    document.getElementById('infoinfo4').classList.toggle('buttonshow4')
});