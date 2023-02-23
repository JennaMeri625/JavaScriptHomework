(() => {
const menuButton = document.querySelector('.menuButton');


function myFunction() {
    event.preventDefault();
    document.getElementById("myMenu").classList.toggle("show");
  }
 
    window.onclick = function(event) {
        if (!event.target.matches('.menuButton')) {
         let dropdowns = document.getElementsByClassName("menu-content");
         let i;
          for (i = 0; i < dropdowns.length; i++) {
           let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
    }
 menuButton = document.addEventListener('click',(myFunction)); 
})();