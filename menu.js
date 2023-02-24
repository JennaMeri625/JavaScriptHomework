(() => {
    const menuButton = document.getElementById('menuButton');
    const menuContent = document.getElementById("menu-content");
    const letters = document.getElementById("lettersLink");
    const numbers = document.getElementById("numbersLink");
    
    const toggleMenuContent = function () {menuContent.classList.toggle("show");};
    document.documentElement.addEventListener('click', () => {
        if (menuContent.classList.contains("show")) {
            toggleMenuContent();
        }
    });
    
    menuButton.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMenuContent(); 
    });

    letters.addEventListener('click', (event) => {
        event.preventDefault();
        const lettersShow = document.getElementById('letters');
        const numbersHide = document.getElementById('numbers');
        lettersShow.style.display = 'block';
        numbersHide.style.display = 'none';
    });

    numbers.addEventListener('click', (event) => {
        event.preventDefault();
        const numbersShow = document.getElementById('numbers');
        const lettersHide = document.getElementById('letters');
        lettersHide.style.display = 'none';
        numbersShow.style.display = 'block';
    });
    
    })();