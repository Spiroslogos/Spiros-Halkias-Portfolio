const courses = [
    {
    name:'Carbon-Capture, Utilization and Storage 5692',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Organic Chemistry 2313',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Lab for Organic Chemistry 2 2314',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Transport Processes 1 2310',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Engineering Thermodynamics 2320',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Intro to Engineering Co-op Education 2000',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Organic Chemistry 1 2311',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Lab for Organic Chemistry 1 2312',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Conservation Principles 2308',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Differential Equations and Linear Algebra for Engineering 2341',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Sound and the Sacred 3354',
    obtain:'Northeastern University',
    value:'Elective'
    },
    {
    name:'Calculus 3 for Science and Engineering 2321',
    obtain:'Monroe Community College',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'First Year Writing 1111',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Calculus 2 for Science and Engineering 1342',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Cornerstone of Engineering 2 1502',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Physics for Engineering 2 1155',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Lab for Physics for Engineering 2 1156',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Interact Learn for Physics for Engineering 2 1157',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Physics for Engineering 1 1151',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Lab for Physics for Engineering 1 1152',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Interact Learn Physics for Engineering 1 1153',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Calculus 1 for Science and Engineering',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'Innovation! 2301',
    obtain:'Northeastern University',
    value:'Elective'
    },
    {
    name:'Cornerstone of Engineering 1 1501',
    obtain:'Northeastern University',
    value:'Chemical Engineering Curriculum'
    },
    {
    name:'General Chemistry 1161',
    obtain:'Advanced Placement Transfer Credit',
    value:'Elective'
    },
    {
    name:'Lab for General Chemistry 1162',
    obtain:'Advanced Placement Transfer Credit',
    value:'Elective'
    },
    {
    name:'American Government 1150',
    obtain:'Advanced Placement Transfer Credit',
    value:'Elective'
    },
    {
    name:'Introduction to World History 1110',
    obtain:'Advanced Placement Transfer Credit',
    value:'Elective'
    }
]

let CourseHTML = '';

courses.forEach((courses) => {
    CourseHTML +=
    `<div class="course-container">
        <div class="text-div">
            <p class="textone-p">
                ${courses.name}
            </p>
            <p class="texttwo-p">
                ${courses.obtain}
            </p>
            <p class="textthree-p">
                ${courses.value}
            </p>
        </div>
    </div>`
});

document.getElementById('coursehome').innerHTML = CourseHTML;