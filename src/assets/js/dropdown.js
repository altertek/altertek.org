function dropdown() {
  const elem = document.getElementById("navbarCollapse").className;
  if (elem.includes('show')) {
    document.getElementById("toggler").className = "navbar-toggler collapsed";
    document.getElementById("navbarCollapse").className = "navbar-collapse collapse";
  } else {
    document.getElementById("toggler").className = "navbar-toggler";
    document.getElementById("navbarCollapse").className = "navbar-collapse collapse show";
  }
}
