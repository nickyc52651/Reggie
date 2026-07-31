function expandYearContainer(yearID) {
    var x = window.matchMedia("(max-width: 450px");
    var element = document.getElementById(yearID);
    if (element.style.gridColumn) {
        element.style.gridColumn = null;
    } else if (x.matches) {
        element.style.gridColumn = "1 / span 2";
    } else {
        element.style.gridColumn = "1 / span 4";
    }
}