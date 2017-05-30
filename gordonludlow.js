function openTab(evt, tabName, submenuName="", parentName="") {
    // Declare all variables
    var i, tabcontent, tablinks, submenu;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="submenu" and hide them
    submenu = document.getElementsByClassName("submenu");
    for (i = 0; i < submenu.length; i++) {
        submenu[i].style.display = "none";
    }    
    
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, show the it's submenu and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    if (submenuName.length)
        document.getElementById(submenuName).style.display = "block";
    evt.currentTarget.className += " active";
    if (parentName.length)
        document.getElementById(parentName).className += " active";
}