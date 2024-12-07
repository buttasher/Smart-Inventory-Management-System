function notidropdown(){
    var notifications = document.getElementById("Notifications")
     if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}
function dropmenu() {
    // Get references to the elements
    const menuBar = document.getElementById('menu-bar');
    const menuToggle = document.getElementById('menu-toggle');
    
    // Toggle the visibility of the menu
    menuBar.classList.toggle('hidden');
    
    // Change the icon in the button
    if (menuBar.classList.contains('hidden')) {
        menuToggle.innerHTML = '☰';  // Show the menu icon
    } else {
       menuToggle.innerHTML = '✖';  // Show the close icon
    }
}