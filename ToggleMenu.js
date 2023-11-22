function toggleMobileMenu() {
  var mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.style.display =
    mobileMenu.style.display === "block" ? "none" : "block";
}

// Close the mobile menu when a menu item is clicked
var mobileMenuItems = document.querySelectorAll(".mobile-menu a");
mobileMenuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    var mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display = "none";
  });
});
