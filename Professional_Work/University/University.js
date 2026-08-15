document.getElementById('Access_Home').addEventListener('click', function() {
    window.location.href = "../../Home_Page/Landing_Page.html"
});
document.getElementById('Access_Filter').addEventListener('click', function() {
    document.getElementById('Filter_Menu').classList.toggle('open')
});
const projects = [
    {
    image:'Project_Images/University_Image.avif',
    link:'University_Courses/University_Courses.html',
    textone:'University Courses',
    texttwo:'In this section, includes each class I have taken throughout university.',
    textthree:'',
    memberNumber: [0,1,2,3,4,5,6,7,8,9,10],
    type:['Hardware', 'Software', 'Research', 'Design', 'Writing', 'Business']
    },
    {
    image: 'Project_Images/MFC_Image.avif',
    link: 'MFC/MFC.html',
    textone: 'Microbial Fuel Cells // April 23rd, 2026',
    texttwo: 'During Carbon Capture and Utilization class we learned about different methods of the three processes of carbon. The project tasked with students was to pick one of the three ways to mitigate carbon emissions with a technology of your choice. Microbial Fuels Cells in this scenario tackle the worker emissions from a predetermined ethylene oxide plant. Further reading is provided for improvements to this technology.',
    textthree: 'Size: Solo',
    memberNumber: [0,1],
    type: ['Research','Writing']
    },
    {
    image: 'Project_Images/PCAI_Image.avif',
    link: 'PCAI_Center/PCAI_Center.html',
    textone: 'Power and Cooling for AI Data Centers // April 8th, 2026',
    texttwo: 'This thermodynamics project works on a theoretical AI data center in Texas, where we try to power and cool a set amount of chips. The project is split into two groups, power and cooling, where we have to work together to optimize our processes to work together in order to power and cool the data center most efficiently. This project introduced us to Aspen, a chemical engineering software.',
    textthree: 'Size: 8 Person Group',
    memberNumber: [0,8],
    type: ['Research','Writing']
    },
    {
    image: 'Project_Images/UOLab_Image.avif',
    link: 'UOLab_Deliverable/UOLab_Deliverable.html',
    textone: 'UO Lab Deliverable // April 8th, 2026',
    texttwo: 'This was a mini group project made to analyze data collected previously. For the class Transport Processes, the students visited the UO Lab at Northeastern University and collected data from various pipes and pumps. With this data a small project was done to show ability in collection and analyzation of the data. The visit was made to introduce students into the equipment that will be used in chemical engineering lab.',
    textthree: 'Size: 9 Person Group',
    memberNumber: [0,9],
    type: ['Research']
    },
    {
    image: 'Project_Images/Viking_Galdr_Image.avif',
    link: 'Viking_Galdr/Viking_Galdr.html',
    textone: 'Viking Galdr // December 5th, 2025',
    texttwo: 'This was a project for an elective course on religious significance and history of music. Topics were researched and shared with the class throughout the semester. Projects include the sociocultural context, religious or spiritual significance, media, and more to showcase our findings. Additionally a sonic analysis was performed by each student. The final was separated into a paper, and a web document where our research was displayed online for our classmates to see.',
    textthree: 'Size: Solo',
    memberNumber: [0,1],
    type: ['Research','Writing']
    },
    {
    image: 'Project_Images/Green_Methanol_Image.avif',
    link: 'Green_Methanol/Green_Methanol.html',
    textone: 'Green Methanol // December 3rd, 2025',
    texttwo: 'Green Methanol was a conservation principles group project focused on the basic concepts of chemical engineering in order to prepare us for more advanced courses in the latter half of our studies. This project had two parts; a written report, and a presentation. Research throughout the semester was documented written up in the report, and displayed on the slide to show to the class.',
    textthree: 'Size: 4 Person Group',
    memberNumber: [0,4],
    type: ['Research','Writing']
    },
    {
    image: 'Project_Images/Water_Filter_Image.avif',
    link: 'Attainable_Water_Filter/Attainable_Water_Filter.html',
    textone: 'Attainable Water Filter // April 10th, 2025',
    texttwo: 'The attainable water filter was an engineering project focused on using advanced features of CAD tools and arduino. It builds on concepts developed in the Autonomous Robot Project, as well as reinforcing what we previously learned. This project addresses an ethical issue on sourcing clean water. Towards the end, each project was displayed convention style and showed off to the university.',
    textthree: 'Size: 3 Person Group',
    memberNumber: [0,3],
    type: ['Hardware','Software', 'Design']
    },
    {
    image: 'Project_Images/Easyway_Image.avif',
    link: 'Easyway_Innovation/Easyway_Innovation.html',
    textone: 'EasyWay Innovation // December 11th, 2024',
    texttwo: 'EasyWay was a team innovation project that required working with a team to learn to brainstorm, ideate, validate and confirm market viability for an innovation of our choice. This project allowed us to experience the stages of innovation, what is required, the process used and how to address barriers that might occur along the way. EasyWays innovation was a combination of other travel apps.',
    textthree: 'Size: 5 Person Group',
    memberNumber: [0,5],
    type: ['Design','Business']
    },
    {
    image: 'Project_Images/Robot_Image.avif',
    link: 'Autonomous_Robot_Project/Autonomous_Robot_Project.html',
    textone: 'Automonous Robot Project // December 6th, 2024',
    texttwo: 'This robot project focused on designing, building, and programming an autonomous robot to navigate a modular maze. As a team we defined the problem, created designs, and developed custom components using CAD tools. The final robot successfully met project goals, demonstrating effective navigation and modularity. This project emphasized teamwork, problem-solving, and hands-on engineering experience.',
    textthree: 'Size: 2 Person Group',
    memberNumber: [0,2],
    type: ['Hardware','Software', 'Design']
    }
];
let ActiveFilters = {
    memberNumber: 'all',
    type: [],
    search: ''
}
function ProjectFilter(){
    const Filtered = projects.filter(project => {
        const MemberMatch = ActiveFilters.memberNumber === 'all' || (Array.isArray(project.memberNumber)
            ? project.memberNumber.includes(ActiveFilters.memberNumber)
            : project.memberNumber === ActiveFilters.memberNumber)
        const TypeMatch = ActiveFilters.type.length === 0 || (Array.isArray(project.type)
            ? project.type.some(temporaryvariable => ActiveFilters.type.includes(temporaryvariable))
            : ActiveFilters.type.includes(project.type))
        const SearchMatch = ActiveFilters.search === '' ||
            project.textone.toLowerCase().includes(ActiveFilters.search)||
            project.texttwo.toLowerCase().includes(ActiveFilters.search)

        return MemberMatch && TypeMatch && SearchMatch;
    })

    let FilteredHTML = '';

    Filtered.forEach((projects) => {
        let card = ''
        if (projects.textone === 'University Courses'){
            card = `<div class="Project_Holding-div">
            <div class="Left_Side-div">
                <img class="Left_Image-img" src="${projects.image}">
                <button class="Left_Button-button" onclick="window.location.href = '${projects.link}'">
                    View Courses
                </button>
            </div>
            <div class="text-div">
                <p class="Text_One-p">
                    ${projects.textone}
                </p>
                <p class="Text_Two-p">
                    ${projects.texttwo}
                </p>
            </div>
        </div>`;
        }
        else{
        card = `<div class="Project_Holding-div">
            <div class="Left_Side-div">
                <img class="Left_Image-img" src="${projects.image}">
                <button class="Left_Button-button" onclick="window.location.href = '${projects.link}'">
                    View Project
                </button>
            </div>
            <div class="Right_Side-div">
                <p class="Text_One-p">
                    ${projects.textone}
                </p>
                <p class="Text_Two-p">
                    ${projects.texttwo}
                </p>
                <p class="Text_Three-p">
                    ${projects.textthree}
                </p>
            </div>
        </div>`;
        }
        FilteredHTML += card
    });

    document.getElementById('Project_Container').innerHTML = FilteredHTML
}
document.getElementById('Group_Size_Slider').addEventListener('input', function() {
    ActiveFilters.memberNumber = Number(this.value)
    ProjectFilter()
})
document.querySelectorAll('.Checkbox-input').forEach(checkedbox => {
    checkedbox.addEventListener('change', function(){
        const value = this.nextElementSibling.textContent.trim()
        if (this.checked){
            ActiveFilters.type.push(value)
        } else {
            ActiveFilters.type = ActiveFilters.type.filter(temporaryvariable => temporaryvariable !== value)
        }
        ProjectFilter();
    })
})
document.querySelector('.Reset-button').addEventListener('click', function(){
    ActiveFilters.memberNumber = 'all'
    ActiveFilters.type = []
    ActiveFilters.search = ''

    document.getElementById('Group_Size_Slider').value = 0;
    document.querySelectorAll('.Checkbox-input').forEach(checkedbox => {
        checkedbox.checked = false
    })
    document.querySelector('.Search_Input-input').value = '';
    ProjectFilter()
})
document.querySelector('.Search_Input-input').addEventListener('input', function(){
    ActiveFilters.search = this.value.toLowerCase()
    ProjectFilter();
})
ProjectFilter();