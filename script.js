function openTab(pageURL) {
    // Get all tab elements
    var tabs = document.querySelectorAll("nav ul li");
    // Remove active class from all tabs
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    // Add active class to the selected tab
    event.target.classList.add("active");

    // Load the respective HTML page for the selected tab
    document.getElementById("tabContent").innerHTML = "";
    if (pageURL !== "") {
        window.location.href = pageURL;
    }
}
