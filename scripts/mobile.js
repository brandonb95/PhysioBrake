//Toggle the mobile menu icon
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });
});

btnMenu.addEventListener("click", openMenu);
// Prevents the focus state from activating
btnMenu.addEventListener("mousedown", function (e) {
  e.preventDefault();
});

// Show mobile menu list
function openMenu() {
  // Do some open/close nav stuff here...
  btnMenu.classList.toggle("active");
  nav.classList.toggle("active");
}
