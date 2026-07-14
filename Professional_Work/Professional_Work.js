document.getElementById('accesshome').addEventListener('click', function() {
    window.location.href = "../Home Page/landingpage.html"
});
document.getElementById('accesshome2').addEventListener('click', function() {
    window.location.href = "../Home Page/landingpage.html"
});
document.getElementById('university').addEventListener('click', function() {
    window.location.href = "University/UniversityHome.html"
});
document.getElementById('career').addEventListener('click', function() {
    window.location.href = "Work/Career.html"
});
document.getElementById('openresume').addEventListener('click', function() {
    document.getElementById('resumehidden').classList.toggle('resumeshow')
});