// Constants -----------------------------------------------------------------//
// nav bar and top bar
var githubButton = document.getElementById("github_button");
var linkedInButton = document.getElementById("linked_in_button");
var emailButton = document.getElementById("email_button");
var githubButton2 = document.getElementById("github_button2");
var linkedInButton2 = document.getElementById("linked_in_button2");
var emailButton2 = document.getElementById("email_button2");

var homeNavBar = document.getElementById("home_navbar");
var floatingNavBar = document.getElementById("floating_nav");

var aboutTab = document.getElementById("about_tab");
var resumeTab = document.getElementById("resume_tab");
var projectsTab = document.getElementById("projects_tab");
var designTab = document.getElementById("design_tab");
var activitesTab = document.getElementById("activities_tab");
var contactTab = document.getElementById("contact_tab");

var fHomeTab = document.getElementById("f_home_tab");
var fAboutTab = document.getElementById("f_about_tab");
var fResumeTab = document.getElementById("f_resume_tab");
var fProjectsTab = document.getElementById("f_projects_tab");
var fDesignTab = document.getElementById("f_design_tab");
var fActivitesTab = document.getElementById("f_activities_tab");
var fContactTab = document.getElementById("f_contact_tab");

// sections
var homeSection = document.getElementById("home");
var aboutSection = document.getElementById("about");
var resumeSection = document.getElementById("resume");
var projectsSection = document.getElementById("projects");
var contactSection = document.getElementById("contact");

// Home section
var homeDownArrow = document.getElementById("down_arrow");

// Resume section
var cvButton = document.getElementById("cv_button");

// Project section
var hyperthermProject = document.getElementById("hypertherm");
var sublitProject = document.getElementById("sublit");
var gamepoleProject = document.getElementById("gamepole");
var myrunsProject = document.getElementById("myruns");
var jiraProject = document.getElementById("jira");
var websiteProject = document.getElementById("website");
var projectDetailScreen = document.getElementById("project_detail");
var closeButton = document.getElementById("close_pop_up");

// Connect
var linkedInLink = document.getElementById("linked_in_link");



// Home nav bar -----------------------------------------------------------------//
aboutTab.onclick = function() {
    aboutSection.scrollIntoView({ behavior: 'smooth' }); 
}
resumeTab.onclick = function() {
    resumeSection.scrollIntoView({ behavior: 'smooth' }); 
}
projectsTab.onclick = function() {
    projectsSection.scrollIntoView({ behavior: 'smooth' }); 
}
contactTab.onclick = function() {
    contactSection.scrollIntoView({ behavior: 'smooth' });
}
// Github and Linked in links, and email
githubButton.onclick = function() {
    window.open("https://github.com/chase-krivickas", "_blank");
}
linkedInButton.onclick = function() {
    window.open("https://www.linkedin.com/in/chase-krivickas", "_blank");
}
emailButton.onclick = function() {
    contactSection.scrollIntoView({ behavior: 'smooth' });
}
githubButton2.onclick = function() {
    window.open("https://github.com/chase-krivickas", "_blank");
}
linkedInButton2.onclick = function() {
    window.open("https://www.linkedin.com/in/chase-krivickas", "_blank");
}
emailButton2.onclick = function() {
    contactSection.scrollIntoView({ behavior: 'smooth' });
}



// Floating nav bar -----------------------------------------------------------------//
fHomeTab.onclick = function() {
    homeSection.scrollIntoView({ behavior: 'smooth' }); 
}
fAboutTab.onclick = function() {
    aboutSection.scrollIntoView({ behavior: 'smooth' }); 
}
fResumeTab.onclick = function() {
    resumeSection.scrollIntoView({ behavior: 'smooth' }); 
}
fProjectsTab.onclick = function() {
    projectsSection.scrollIntoView({ behavior: 'smooth' }); 
}
fContactTab.onclick = function() {
    contactSection.scrollIntoView({ behavior: 'smooth' });
}


// Home section-----------------------------------------------------------------//
// Down arrow
homeDownArrow.onclick = function() {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
}

// Connect section-----------------------------------------------------------------//
linkedInLink.onclick = function() {
    window.open("https://www.linkedin.com/in/chase-krivickas", "_blank");
}

// Project section-----------------------------------------------------------------//
hyperthermProject.onclick = function() {
    projectDetailScreen.style.display = "block";
    projectDetailScreen.scrollIntoView();
    floatingNavBar.style.display = "none";
    document.getElementById("pop_up_image").src = "./media/hypertherm_logo.png";
    document.getElementById("project_name").innerHTML = "Consumable Inventory Management";
    document.getElementById("project_description").innerHTML = "Hypertherm is a company that produces industrial cutting systems. I worked with Hypertherm engineers and a team of Dartmouth engineering students to create an inventory tracking and alert system for Hypertherm customers. The system keeps an up to date inventory of Hypertherm parts at the customer level and creates alerts when inventory falls below a certain threshold. We utilized React, Node.js and AWS to build a server less web application to track inventory levels. RFID and Arduino technologies were used to communicate with the database and update inventory levels in the cloud.";
    document.getElementById("language_list").innerHTML = "JS, HTML, CSS, AWS, ARDUINO";
}
sublitProject.onclick = function() {
    projectDetailScreen.style.display = "block";
    projectDetailScreen.scrollIntoView();
    floatingNavBar.style.display = "none";
    document.getElementById("pop_up_image").src = "./media/sublit_website.png";
    document.getElementById("project_name").innerHTML = "Sublit";
    document.getElementById("project_description").innerHTML = "Sublit is a web application where students can post information about apartment lease sublets and connect with other students looking to sublet through a chat feature. We used JavaScript, Bootstrap, Redux, Heroku, and MongoDB to build the web app.";
    document.getElementById("language_list").innerHTML = "JS, HTML, CSS, BOOTSTRAP, REDUX, HEROKU, MONGODB"
}
gamepoleProject.onclick = function() {
    projectDetailScreen.style.display = "block";
    projectDetailScreen.scrollIntoView();
    floatingNavBar.style.display = "none";
    document.getElementById("pop_up_image").src = "./media/gamepole_screen.png";
    document.getElementById("project_name").innerHTML = "Gamepole App";
    document.getElementById("project_description").innerHTML = "Gamepole is a social network Android app designed for hunters. It gives the ability for users to connect with other hunters in their area and become more informed. The app allows hunters to share photos of their successes and reports of what they are experiencing in the field. Through the use of filtering by location and game of interest, users are also able to view the hunting reports and successes of others in their area.";
    document.getElementById("language_list").innerHTML = "JAVA, ANDROID"
}
myrunsProject.onclick = function() {
    projectDetailScreen.style.display = "block";
    projectDetailScreen.scrollIntoView();
    floatingNavBar.style.display = "none";
    document.getElementById("pop_up_image").src = "./media/myruns_screen.png";
    document.getElementById("project_name").innerHTML = "MyRuns App";
    document.getElementById("project_description").innerHTML = "The MyRuns apps is a fitness app for Android. The app allows users to log and track their workouts. MyRuns saves workout data and runs, walks, or bike rides can be viewed overplayed on Google Maps. The app also utilizes sensors in the phone to automatically identify exercise type. The project was for the CS65 Android Programming class at Dartmouth.";
    document.getElementById("language_list").innerHTML = "JAVA, ANDROID";
}
jiraProject.onclick = function() {
    projectDetailScreen.style.display = "block";
    projectDetailScreen.scrollIntoView();
    floatingNavBar.style.display = "none"
    document.getElementById("pop_up_image").src = "./media/jira_logo.png";
    document.getElementById("project_name").innerHTML = "Veracross Product Engineering Ticket Migration";
    document.getElementById("project_description").innerHTML = "I worked on this project during my internship at Veracross which is a private equity owned SaaS company serving the education technology market. The goal of the project was to migrate all of the current and historical product engineering tickets from Clubhouse and Github to Jira. I participated in requirements gathering and created the necessary mapping structure. I wrote a Ruby based program that utilized available APIs to successfully migrate the 7000+ product engineering tickets to Jira.";
    document.getElementById("language_list").innerHTML = "RUBY";
}
websiteProject.onclick = function() {
    projectDetailScreen.style.display = "block";
    projectDetailScreen.scrollIntoView();
    floatingNavBar.style.display = "none";
    document.getElementById("pop_up_image").src = "./media/my_website.png";
    document.getElementById("project_name").innerHTML = "Personal Website";
    document.getElementById("project_description").innerHTML = "Created own personal website for showing resume and projects.";
    document.getElementById("language_list").innerHTML = "JAVASCRIPT, HTML, CSS";
}

function disableScroll() { 
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 
  
function enableScroll() { 
    window.onscroll = function() {}; 
}


function close_project() {
    projectDetailScreen.style.display = "none";
    projectsSection.scrollIntoView();
    floatingNavBar.style.display = "flex";
}

function hide_windows() {
    projectDetailScreen.style.display = "none";
}

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

window.onscroll = function() {
    // home section
    if (isScrolledIntoView(homeSection)) {
        homeNavBar.style.display = "grid";
        floatingNavBar.classList.remove("sticky");
        homeDownArrow.style.display = "grid";
        console.log("in");
    } else {
        homeNavBar.style.display = "none";
        floatingNavBar.classList.add("sticky");
        homeDownArrow.style.display = "none";
        console.log("out");
    }
    // about section
    
    // resume section

    // projects section
}




