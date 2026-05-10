const projects = [
    {
    image: 'University Images/MFC.png',
    link: 'MFC/MFC.html',
    textone: 'Microbial Fuel Cells // April 23rd, 2026',
    texttwo: 'During Carbon Capture and Utilization class we learned about different methods of the three processes of carbon. The project tasked with students was to pick one of the three ways to mitigate carbon emissions with a technology of your choice. Microbial Fuels Cells in this scenario tackle the worker emissions from a predetermined ethylene oxide plant. Further reading is provided for improvements to this technology.',
    textthree: 'Size: Solo',
    memberNumber: [0,1],
    type: ['Research','Writing']
    },
    {
    image: 'University Images/PCAI.png',
    link: 'PC AI Center/PCAICenter.html',
    textone: 'Power and Cooling for AI Data Centers // April 8th, 2026',
    texttwo: 'This thermodynamics project works on a theoretical AI data center in Texas, where we try to power and cool a set amount of chips. The project is split into two groups, power and cooling, where we have to work together to optimize our processes to work together in order to power and cool the data center most efficiently. This project introduced us to Aspen, a chemical engineering software.',
    textthree: 'Size: 8 Person Group',
    memberNumber: [0,8],
    type: ['Research','Writing']
    },
    {
    image: 'University Images/UOlab.png',
    link: 'UO Lab Deliverable/UOLabDeliverable.html',
    textone: 'UO Lab Deliverable // April 8th, 2026',
    texttwo: 'This was a mini group project made to analyze data collected previously. For the class Transport Processes, the students visited the UO Lab at Northeastern University and collected data from various pipes and pumps. With this data a small project was done to show ability in collection and analyzation of the data. The visit was made to introduce students into the equipment that will be used in chemical engineering lab.',
    textthree: 'Size: 9 Person Group',
    memberNumber: [0,9],
    type: ['Research']
    },
    {
    image: 'University Images/vikinggaldr.png',
    link: 'Viking Galdr/VikingGaldr.html',
    textone: 'Viking Galdr // December 5th, 2025',
    texttwo: 'This was a project for an elective course on religious significance and history of music. Topics were researched and shared with the class throughout the semester. Projects include the sociocultural context, religious or spiritual significance, media, and more to showcase our findings. Additionally a sonic analysis was performed by each student. The final was separated into a paper, and a web document where our research was displayed online for our classmates to see.',
    textthree: 'Size: Solo',
    memberNumber: [0,1],
    type: ['Research','Writing']
    },
    {
    image: 'University Images/greenmethanol.png',
    link: 'Green Methanol/GreenMethanol.html',
    textone: 'Green Methanol // December 3rd, 2025',
    texttwo: 'Green Methanol was a conservation principles group project focused on the basic concepts of chemical engineering in order to prepare us for more advanced courses in the latter half of our studies. This project had two parts; a written report, and a presentation. Research throughout the semester was documented written up in the report, and displayed on the slide to show to the class.',
    textthree: 'Size: 4 Person Group',
    memberNumber: [0,4],
    type: ['Research','Writing']
    },
    {
    image: 'University Images/waterfilter.png',
    link: 'Attainable Water Filter/AttainableWaterFilter.html',
    textone: 'Attainable Water Filter // April 10th, 2025',
    texttwo: 'The attainable water filter was an engineering project focused on using advanced features of CAD tools and arduino. It builds on concepts developed in the Autonomous Robot Project, as well as reinforcing what we previously learned. This project addresses an ethical issue on sourcing clean water. Towards the end, each project was displayed convention style and showed off to the university.',
    textthree: 'Size: 3 Person Group',
    memberNumber: [0,3],
    type: ['Hardware','Software', 'Design']
    },
    {
    image: 'University Images/easyway.png',
    link: 'EasyWay Innovation/EasyWayInnovation.html',
    textone: 'EasyWay Innovation // December 11th, 2024',
    texttwo: 'EasyWay was a team innovation project that required working with a team to learn to brainstorm, ideate, validate and confirm market viability for an innovation of our choice. This project allowed us to experience the stages of innovation, what is required, the process used and how to address barriers that might occur along the way. EasyWays innovation was a combination of other travel apps.',
    textthree: 'Size: 5 Person Group',
    memberNumber: [0,5],
    type: ['Design','Business']
    },
    {
    image: 'University Images/robotproj.png',
    link: 'Autonomous Robot Project/AutonomousRobotProject.html',
    textone: 'Automonous Robot Project // December 6th, 2024',
    texttwo: 'This robot project focused on designing, building, and programming an autonomous robot to navigate a modular maze. As a team we defined the problem, created designs, and developed custom components using CAD tools. The final robot successfully met project goals, demonstrating effective navigation and modularity. This project emphasized teamwork, problem-solving, and hands-on engineering experience.',
    textthree: 'Size: 2 Person Group',
    memberNumber: [0,2],
    type: ['Hardware','Software', 'Design']
    }
];

document.getElementById('accesshome').addEventListener('click', function() {
    window.location.href = "../Home Page/landingpage.html"
});

document.getElementById('accessfilter').addEventListener('click', function() {
    document.getElementById('dropdownfilter').classList.toggle('open')
});

let activeFilters = {
    memberNumber: 'all',
    type: [],
    search: ''
}

    function ProjectFilter(){
    const filtered = projects.filter(project => {
        const memberMatch = activeFilters.memberNumber === 'all' || (Array.isArray(project.memberNumber)
        ? project.memberNumber.includes(activeFilters.memberNumber)
        : project.memberNumber === activeFilters.memberNumber)

        const typeMatch = activeFilters.type.length === 0 || (Array.isArray(project.type)
        ? project.type.some(temporaryvariable => activeFilters.type.includes(temporaryvariable))
        : activeFilters.type.includes(project.type))

        const searchMatch = activeFilters.search === '' ||
            project.textone.toLowerCase().includes(activeFilters.search)||
            project.texttwo.toLowerCase().includes(activeFilters.search)

        return memberMatch && typeMatch && searchMatch;
    })

    let filteredHTML = '';

    filtered.forEach((projects) => {
        filteredHTML += 
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

    document.getElementById('projectscontainer').innerHTML = filteredHTML
}

document.getElementById('memberslider').addEventListener('input', function() {
    activeFilters.memberNumber = Number(this.value)
    ProjectFilter()
})

document.querySelectorAll('.typebuttons').forEach(checkedbox => {
    checkedbox.addEventListener('change', function(){
        const value = this.nextElementSibling.textContent.trim()
        if (this.checked){
            activeFilters.type.push(value)
        } else {
            activeFilters.type = activeFilters.type.filter(temporaryvariable => temporaryvariable !== value)
        }
        ProjectFilter();
    })
})

document.querySelector('.resetbutton').addEventListener('click', function(){
    activeFilters.memberNumber = 'all'
    activeFilters.type = []
    activeFilters.search = ''

    document.getElementById('memberslider').value = 0;
    document.querySelectorAll('.typebuttons').forEach(checkedbox => {
        checkedbox.checked = false
    })
    document.querySelector('.searchinput-input').value = '';
    ProjectFilter()
})

document.querySelector('.searchinput-input').addEventListener('input', function(){
    activeFilters.search = this.value.toLowerCase()
    ProjectFilter();
})

ProjectFilter();