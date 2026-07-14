document.getElementById('edubutton').addEventListener('click', function() {
    window.location.href = "../Professional_Work/Professional_Work.html"
    })
//finds the thing with class 'edubutton' in the entire document
//waits until (button is clicked) then does function
//the current URL of the window, set that to = edu projects screen
//leaves current folder, goes into edu proj folder, opens new HTML

document.getElementById('recbutton').addEventListener('click', function() {
    window.location.href = "../Personal_Projects/Personal_Projects.html"
    })

document.getElementById('expbutton').addEventListener('click', function() {
    window.location.href = "../Photo_Blog/Photo_Blog.html"
    })

document.getElementById('abtbutton').addEventListener('click', function() {
    window.location.href = "../About_Me/About_Me.html"
    })


document.getElementById('Info_Button').addEventListener('click', function() {
    document.getElementById('Info_Info1').classList.toggle('Show_Button1')
    document.getElementById('Info_Info1').classList.toggle('Unhidden-div')
});
document.getElementById('Info_Button').addEventListener('click', function() {
    document.getElementById('Info_Info2').classList.toggle('Show_Button2')
    document.getElementById('Info_Info2').classList.toggle('Unhidden-div')
});
document.getElementById('Info_Button').addEventListener('click', function() {
    document.getElementById('Info_Info3').classList.toggle('Show_Button3')
    document.getElementById('Info_Info3').classList.toggle('Unhidden-div')
});
document.getElementById('Info_Button').addEventListener('click', function() {
    document.getElementById('Info_Info4').classList.toggle('Show_Button4')
    document.getElementById('Info_Info4').classList.toggle('Unhidden-div')
});