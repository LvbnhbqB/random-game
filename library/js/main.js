(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const close = document.querySelector('.header_burger_close');
    const closeItem = document.querySelector('.header_burger_close');
    const openItem = document.querySelector('.header_burger');
    
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
        openItem.classList.add('header_burger_123');
        close.classList.add('header_burger_close_active');
        console.log(menuLinks);
    });

        if (document.documentElement.classList.contains('nav-link')) {
            console.log(666)
            };


//    closeItem.addEventListener('click', () => {
//       menu.classList.remove('header_nav_active');
//        close.classList.remove('header_burger_close_active');
//        openItem.classList.remove('header_burger_123');
//    });

//    if (window.innerWidth <= 1054) {
//      console.log(3);
//      for (let i =0; i < menuLinks.length; i += 1) {
//         menuLinks[i].addEventListener('click', () => {
//             menu.classList.remove('header_nav_active');
//             close.classList.remove('header_burger_close_active');
//            openItem.classList.remove('header_burger_123');
//             console.log(menu);
//             console.log(1);
//          });
//      }
//  }

    const menuu = document.querySelector('.header_nav');
    const menuuBurger = document.querySelector('.header_burger');
    const menuLinks = document.querySelector('.nav-list');
    document.addEventListener('click', (e) => {
        const click = e.composedPath().includes(menuuBurger);
        const clickM = e.composedPath().includes(menuu);
        const clickMM = e.composedPath().includes(menuLinks);

       if ( !click && !clickM) {
           menu.classList.remove('header_nav_active');
           close.classList.remove('header_burger_close_active');
           openItem.classList.remove('header_burger_123');
           console.log(click);
           console.log(clickM);
           console.log(clickMM);
       }
    });



}());