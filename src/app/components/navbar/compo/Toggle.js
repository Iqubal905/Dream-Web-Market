const toggleNav = () => {
  let element = document.getElementById("smallScreen");
  let ham1 = document.getElementById("ham1");
  let ham2 = document.getElementById("ham2");
  let ham3 = document.getElementById("ham3");
  ham1.classList.toggle("nav-ham1");
  ham2.classList.toggle("nav-ham2");
  ham3.classList.toggle("nav-ham3");
  if (element.classList.contains("nav-left-full")) {
    element.classList.remove("nav-left-full");
    element.classList.add("nav-left-0");
  } else {
    element.classList.remove("nav-left-0");
    element.classList.add("nav-left-full");
  }
};

export default toggleNav;
