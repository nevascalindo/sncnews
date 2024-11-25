document.getElementById("menuHamburger").addEventListener("click", function() {
    let sidebar = document.getElementById("sidebar");
    let mainContent = document.getElementById("mainContent");

    sidebar.classList.toggle("open");
    mainContent.classList.toggle("main-dimmed");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    let sidebar = document.getElementById("sidebar");
    let mainContent = document.getElementById("mainContent");

    sidebar.classList.remove("open");
    mainContent.classList.remove("main-dimmed");
});

document.getElementById("mainContent").addEventListener("click", function() {
    let sidebar = document.getElementById("sidebar");
    let mainContent = document.getElementById("mainContent");

    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        mainContent.classList.remove("main-dimmed");
    }
});
