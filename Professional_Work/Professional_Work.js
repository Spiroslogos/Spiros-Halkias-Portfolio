document.getElementById('University').addEventListener('click', function() {
    window.location.href = "University/University.html"
});
document.getElementById('Career').addEventListener('click', function() {
    window.location.href = "Work/Career.html"
});
document.getElementById('Open_Resume').addEventListener('click', function() {
    document.getElementById('Resume_Hidden').classList.toggle('Unhidden-div')
});