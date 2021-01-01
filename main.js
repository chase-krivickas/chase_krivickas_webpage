// Constants -----------------------------------------------------------------//
// nav bar and top bar
var githubButton = document.getElementById("github_button");
var linkedInButton = document.getElementById("linked_in_button");
var githubButton2 = document.getElementById("github_button2");
var linkedInButton2 = document.getElementById("linked_in_button2");

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

// Home section
var homeDownArrow = document.getElementById("down_arrow");



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
// Github and Linked in links
githubButton.onclick = function() {
    window.open("https://github.com/chase-krivickas", "_blank");
}
linkedInButton.onclick = function() {
    window.open("https://www.linkedin.com/in/chase-krivickas", "_blank");
}
githubButton2.onclick = function() {
    window.open("https://github.com/chase-krivickas", "_blank");
}
linkedInButton2.onclick = function() {
    window.open("https://www.linkedin.com/in/chase-krivickas", "_blank");
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


// Home section-----------------------------------------------------------------//
// Down arrow
homeDownArrow.onclick = function() {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
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
    } else {
        homeNavBar.style.display = "none";
        floatingNavBar.classList.add("sticky");
    }
    // about section
    
    // resume section

    // projects section
}




