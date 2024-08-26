var icon = document.getElementById("icon");
var downloadButton = document.getElementById("downloadCV");

icon.onclick = function() {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        icon.src = "/Images/moon.jpeg";
    } else {
        icon.src = "/Images/sun.png";
    }
}

// Event listener for the Download CV button
downloadButton.onclick = function() {
    // This will trigger the download as specified in the href and download attributes in the HTML
    // No additional code is required, as the anchor tag handles the download
    console.log("Download button clicked");
}
