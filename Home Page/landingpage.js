document.getElementById('edubutton').addEventListener('click', function() {
    window.location.href = "../Educational Projects/EducationalProjectsHome.html"
    })
//finds the thing with class 'edubutton' in the entire document
//waits until (button is clicked) then does function
//the current URL of the window, set that to = edu projects screen
//leaves current folder, goes into edu proj folder, opens new HTML

document.getElementById('recbutton').addEventListener('click', function() {
    window.location.href = "../Recreational Projects/RecreationalProjectsHome.html"
    })

document.getElementById('expbutton').addEventListener('click', function() {
    window.location.href = "../Experiences/ExperiencesHome.html"
    })

document.getElementById('abtbutton').addEventListener('click', function() {
    window.location.href = "../About Me/AboutMeHome.html"
    })