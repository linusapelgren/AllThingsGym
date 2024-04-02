document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger button
    var hamburger = document.querySelector('.menubtn');
  
    // Get the side navigation menu
    var sidenav = document.getElementById('sidenav');
  
    // Toggle the side navigation menu and change the icon on click
    hamburger.addEventListener('click', function() {
      var icon = this.children[0];
      if (sidenav.style.width === '0px') {
        sidenav.style.width = '33%'; // Open the side navigation menu
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        sidenav.style.width = '0'; // Close the side navigation menu
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
});  