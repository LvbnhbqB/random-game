(function () {
    const burgerItem = document.querySelector('.header_burger');
    const menu = document.querySelector('.header_nav');
    const close = document.querySelector('.header_burger_close');
    const closeItem = document.querySelector('.header_burger_close');
    const openItem = document.querySelector('.header_burger');
    const menuLinks = document.querySelectorAll('.nav-link');

    /// открытие меню на клик по иконке
    burgerItem.addEventListener('click', () => {
       menu.classList.add('header_nav_active');
       openItem.classList.add('header_burger_123');
       close.classList.add('header_burger_close_active');
    });
    /// закрытие меню на клик по иконке
    closeItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
        close.classList.remove('header_burger_close_active');
        openItem.classList.remove('header_burger_123');
    });


    // закрытие меню по клику на ссылку
  const menuu = document.querySelector('.header_nav'); // меню которые скрыто за пределами
  const menuuBurger = document.querySelector('.header_burger'); // иконка открытия меню
  document.addEventListener('click', (e) => {
      const click = e.composedPath().includes(menuuBurger);
       const clickM = e.composedPath().includes(menuu);
     if ( !click && !clickM) {  //если клик не на меню и не на открытие меню то
         menu.classList.remove('header_nav_active'); // удаляем - меню которые появляется после клика на иконку, хедарнав пропал
         close.classList.remove('header_burger_close_active');
         openItem.classList.remove('header_burger_123');
     }
  });

   // if (window.innerWidth < 1055) {
        for (let i =0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
              menu.classList.remove('header_nav_active');
              close.classList.remove('header_burger_close_active');
              openItem.classList.remove('header_burger_123');
            });
        }
    //}

}());