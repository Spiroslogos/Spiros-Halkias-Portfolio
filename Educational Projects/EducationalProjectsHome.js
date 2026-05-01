const projects = [{
    image: 'EducationalProjectsHomeImages/robotproj.png',
    link: 'Autonomous Robot Project/AutonomousRobotProject.html',
    textone: 'Automonous Robot Project // December 6th, 2024',
    texttwo: 'This robot project focused on designing, building, and programming an autonomous robot to navigate a modular maze. As a team we defined the problem, created designs, and developed custom components using CAD tools. The final robot successfully met project goals, demonstrating effective navigation and modularity. This project emphasized teamwork, problem-solving, and hands-on engineering experience.',
    textthree: 'Size: 2 Person Group'
    },
    {
    image: 'EducationalProjectsHomeImages/robotproj.png',
    link: 'Autonomous Robot Project/AutonomousRobotProject.html',
    textone: 'Automonous Robot Project // December 6th, 2024',
    texttwo: 'This robot project focused on designing, building, and programming an autonomous robot to navigate a modular maze. As a team we defined the problem, created designs, and developed custom components using CAD tools. The final robot successfully met project goals, demonstrating effective navigation and modularity. This project emphasized teamwork, problem-solving, and hands-on engineering experience.',
    textthree: 'Size: 2 Person Group'
    },
    {image: 'EducationalProjectsHomeImages/robotproj.png',
    link: 'Autonomous Robot Project/AutonomousRobotProject.html',
    textone: 'Automonous Robot Project // December 6th, 2024',
    texttwo: 'This robot project focused on designing, building, and programming an autonomous robot to navigate a modular maze. As a team we defined the problem, created designs, and developed custom components using CAD tools. The final robot successfully met project goals, demonstrating effective navigation and modularity. This project emphasized teamwork, problem-solving, and hands-on engineering experience.',
    textthree: 'Size: 2 Person Group'
    }

];

let projectsHTML = '';

projects.forEach((projects) => {
    projectsHTML += 
    `<div class="projectbox-div">
        <div class="imgbutton-div">
            <img class="imgbutton-img" src="${projects.image}">
            <button class="imgbutton-button" onclick="window.location.href = '${projects.link}'">
                View Project
            </button>
        </div>
        <div class="text-div">
            <p class="textone-p">
                ${projects.textone}
            </p>
            <p class="texttwo-p">
                ${projects.texttwo}
            </p>
            <p class="textthree-p">
                ${projects.textthree}
            </p>
        </div>
    </div>`;
});

document.querySelector('.projectscontainer-js').innerHTML = projectsHTML;

document.getElementById('accesshome').addEventListener('click', function() {
    window.location.href = "../Home Page/landingpage.html"
    });

document.getElementById('accessfilter').addEventListener('click', function() {
    document.getElementById('dropdownfilter').classList.toggle('open')
    });
