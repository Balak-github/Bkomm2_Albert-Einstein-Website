function responsiveMenu() {
    var element = document.getElementById("he");
    if (element.className === "navheader") {
        element.className += " responsive";
    } else {
        element.className = "navheader";
    }
  }