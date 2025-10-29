


    // [SOLO PARA INDEX.HTML]
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.main-menu');
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
    
    // Control de submenús en móvil
    document.querySelectorAll('.main-menu > li > a').forEach(item => {
        if(item.nextElementSibling && item.nextElementSibling.classList.contains('submenu')) {
            item.addEventListener('click', function(e) {
                if(window.innerWidth <= 768) {
                    e.preventDefault();
                    this.nextElementSibling.classList.toggle('active');
                }
            });
        }
    });

