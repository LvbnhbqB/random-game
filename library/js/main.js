(function () {

    ///burgen menu
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


///// menu_profile_no_Auth start


const clickIconProfile = document.querySelector('.icon_profile_img');
const dropMenuProfile = document.querySelector('.menu_profile_no_Auth');
   
  /// открытие-закрытие меню на клик по иконке
//  dropMenuProfile.classList.toggle('menu_profile_no_Auth_active');
//  clickIconProfile.addEventListener('click', () => {
//     });

     // закрытие меню по вне иконки и меню
    document.addEventListener('click', (e) => {
      const click = e.composedPath().includes(clickIconProfile);
      const clickM = e.composedPath().includes(dropMenuProfile);
     if ( !click && !clickM) {  //если клик не на меню и не на открытие меню то
     dropMenuProfile.classList.remove('menu_profile_no_Auth_active');
     //console.log('spam');
     }
  }); 


///// menu_profile_no_Auth end



}());





///favorites - start

    const dwin = document.getElementById('winter');    
    const dspr = document.getElementById('spring');   
    const dsum = document.getElementById('summer');   
    const daut = document.getElementById('autumn'); 
    const booksLine1 = document.querySelector('.books_line1');
    const booksLine2 = document.querySelector('.books_line2');
    const booksLine3 = document.querySelector('.books_line3');
    const booksLine4 = document.querySelector('.books_line4');
    const booksLine5 = document.querySelector('.books_line5');
    const booksLine6 = document.querySelector('.books_line6');
    const booksLine7 = document.querySelector('.books_line7');
    const booksLine8 = document.querySelector('.books_line8');

    function attenuationDwin() {
        document.getElementsByClassName('books_line3')[0].style.opacity = "1";
        document.getElementsByClassName('books_line4')[0].style.opacity = "1";
        document.getElementsByClassName('books_line5')[0].style.opacity = "1";
        document.getElementsByClassName('books_line6')[0].style.opacity = "1";
        document.getElementsByClassName('books_line7')[0].style.opacity = "1";
        document.getElementsByClassName('books_line8')[0].style.opacity = "1";
        document.getElementsByClassName('books_line3')[0].style.animation = "eni 0.5s forwards";
        document.getElementsByClassName('books_line4')[0].style.animation = "eni 0.5s forwards";
        document.getElementsByClassName('books_line5')[0].style.animation = "eni 0.5s forwards";
        document.getElementsByClassName('books_line6')[0].style.animation = "eni 0.5s forwards";
        document.getElementsByClassName('books_line7')[0].style.animation = "eni 0.5s forwards";
        document.getElementsByClassName('books_line8')[0].style.animation = "eni 0.5s forwards";
      }
  
      function changeDwin() {
          document.getElementsByClassName('books_line1')[0].style.display = "flex";
          document.getElementsByClassName('books_line2')[0].style.display = "flex";
          document.getElementsByClassName('books_line3')[0].style.display = "none";
          document.getElementsByClassName('books_line4')[0].style.display = "none";
          document.getElementsByClassName('books_line5')[0].style.display = "none";
          document.getElementsByClassName('books_line6')[0].style.display = "none";
          document.getElementsByClassName('books_line7')[0].style.display = "none";
          document.getElementsByClassName('books_line8')[0].style.display = "none";
          document.getElementsByClassName('books_line1')[0].style.opacity = "0";
          document.getElementsByClassName('books_line2')[0].style.opacity = "0";
          document.getElementsByClassName('books_line1')[0].style.animation = "ani 1.5s forwards";
          document.getElementsByClassName('books_line2')[0].style.animation = "ani 1.5s forwards";
      }


    function attenuationDspr() {
        document.getElementsByClassName('books_line1')[0].style.opacity = "1";
        document.getElementsByClassName('books_line2')[0].style.opacity = "1";
        document.getElementsByClassName('books_line5')[0].style.opacity = "1";
        document.getElementsByClassName('books_line6')[0].style.opacity = "1";
        document.getElementsByClassName('books_line7')[0].style.opacity = "1";
        document.getElementsByClassName('books_line8')[0].style.opacity = "1";
        document.getElementsByClassName('books_line1')[0].style.animation = "eni 0.5s forwards";
        document.getElementsByClassName('books_line2')[0].style.animation = "eni 0.5s forwards";
        document.getElementsByClassName('books_line5')[0].style.animation = "eni 0.5s forwards";
        document.getElementsByClassName('books_line6')[0].style.animation = "eni 0.5s forwards";
        document.getElementsByClassName('books_line7')[0].style.animation = "eni 0.5s forwards";
        document.getElementsByClassName('books_line8')[0].style.animation = "eni 0.5s forwards";
      }
  
      function changeDspr() {
          document.getElementsByClassName('books_line3')[0].style.display = "flex";
          document.getElementsByClassName('books_line4')[0].style.display = "flex";
          document.getElementsByClassName('books_line1')[0].style.display = "none";
          document.getElementsByClassName('books_line2')[0].style.display = "none";
          document.getElementsByClassName('books_line5')[0].style.display = "none";
          document.getElementsByClassName('books_line6')[0].style.display = "none";
          document.getElementsByClassName('books_line7')[0].style.display = "none";
          document.getElementsByClassName('books_line8')[0].style.display = "none";
          document.getElementsByClassName('books_line3')[0].style.opacity = "0";
          document.getElementsByClassName('books_line4')[0].style.opacity = "0";
          document.getElementsByClassName('books_line3')[0].style.animation = "ani 1.5s forwards";
          document.getElementsByClassName('books_line4')[0].style.animation = "ani 1.5s forwards";
      }



    function attenuationDsum() {
      document.getElementsByClassName('books_line1')[0].style.opacity = "1";
      document.getElementsByClassName('books_line2')[0].style.opacity = "1";
      document.getElementsByClassName('books_line3')[0].style.opacity = "1";
      document.getElementsByClassName('books_line4')[0].style.opacity = "1";
      document.getElementsByClassName('books_line7')[0].style.opacity = "1";
      document.getElementsByClassName('books_line8')[0].style.opacity = "1";
      document.getElementsByClassName('books_line1')[0].style.animation = "eni 0.5s forwards";
      document.getElementsByClassName('books_line2')[0].style.animation = "eni 0.5s forwards";
      document.getElementsByClassName('books_line3')[0].style.animation = "eni 0.5s forwards";
      document.getElementsByClassName('books_line4')[0].style.animation = "eni 0.5s forwards";
      document.getElementsByClassName('books_line7')[0].style.animation = "eni 0.5s forwards";
      document.getElementsByClassName('books_line8')[0].style.animation = "eni 0.5s forwards";
    }

    function changeDsum() {
        document.getElementsByClassName('books_line5')[0].style.display = "flex";
        document.getElementsByClassName('books_line6')[0].style.display = "flex";
        document.getElementsByClassName('books_line1')[0].style.display = "none";
        document.getElementsByClassName('books_line2')[0].style.display = "none";
        document.getElementsByClassName('books_line3')[0].style.display = "none";
        document.getElementsByClassName('books_line4')[0].style.display = "none";
        document.getElementsByClassName('books_line7')[0].style.display = "none";
        document.getElementsByClassName('books_line8')[0].style.display = "none";
        document.getElementsByClassName('books_line5')[0].style.opacity = "0";
        document.getElementsByClassName('books_line6')[0].style.opacity = "0";
        document.getElementsByClassName('books_line5')[0].style.animation = "ani 1.5s forwards";
        document.getElementsByClassName('books_line6')[0].style.animation = "ani 1.5s forwards";
    }
    


     function attenuationDaut() {
        document.getElementsByClassName('books_line1')[0].style.opacity = "1";
        document.getElementsByClassName('books_line2')[0].style.opacity = "1";
        document.getElementsByClassName('books_line3')[0].style.opacity = "1";
        document.getElementsByClassName('books_line4')[0].style.opacity = "1";
        document.getElementsByClassName('books_line5')[0].style.opacity = "1";
        document.getElementsByClassName('books_line6')[0].style.opacity = "1";
        document.getElementsByClassName('books_line1')[0].style.animation = "eni 0.5s forwards";
        document.getElementsByClassName('books_line2')[0].style.animation = "eni 0.5s forwards";
        document.getElementsByClassName('books_line3')[0].style.animation = "eni 0.5s forwards";
        document.getElementsByClassName('books_line4')[0].style.animation = "eni 0.5s forwards";
        document.getElementsByClassName('books_line5')[0].style.animation = "eni 0.5s forwards";
        document.getElementsByClassName('books_line6')[0].style.animation = "eni 0.5s forwards";

    }

    function changeDaut() {
        document.getElementsByClassName('books_line7')[0].style.display = "flex";
        document.getElementsByClassName('books_line8')[0].style.display = "flex";
        document.getElementsByClassName('books_line1')[0].style.display = "none";
        document.getElementsByClassName('books_line2')[0].style.display = "none";
        document.getElementsByClassName('books_line3')[0].style.display = "none";
        document.getElementsByClassName('books_line4')[0].style.display = "none";
        document.getElementsByClassName('books_line5')[0].style.display = "none";
        document.getElementsByClassName('books_line6')[0].style.display = "none";
        document.getElementsByClassName('books_line7')[0].style.opacity = "0";
        document.getElementsByClassName('books_line8')[0].style.opacity = "0";
        document.getElementsByClassName('books_line7')[0].style.animation = "ani 1.5s forwards";
        document.getElementsByClassName('books_line8')[0].style.animation = "ani 1.5s forwards";
    }
    
    dwin.addEventListener('click', () => {
        setTimeout(attenuationDwin, 0)
        setTimeout(changeDwin, 500)
     });

    dspr.addEventListener('click', () => {
        setTimeout(attenuationDspr, 0)
        setTimeout(changeDspr, 500)
     });

    dsum.addEventListener('click', () => {
        setTimeout(attenuationDsum, 0)
        setTimeout(changeDsum, 500)
     });

    daut.addEventListener('click', () => {
        setTimeout(attenuationDaut, 0)
        setTimeout(changeDaut, 500)
    });

///favorites - end


/// about - start

const slider = new Swiper('.swiper', {
    simulateTouch: false,
	breakpoints: {
		1: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 25,
		},
		1360: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 25,
		}
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		clickable: true,
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		bulletActiveClass: 'carousel_pagination_active',
		bulletClass: 'carousel_pagination',
		clickable: true,
	},
});

///about - end



  /// открытие-закрытие меню профиля гостя на клик по иконке
  document.querySelector('.icon_profile_img').onclick = function() {
    document.querySelector('.menu_profile_no_Auth').classList.toggle('menu_profile_no_Auth_active');
  };

   /// открытие меню авторизации на клику в меню
   document.getElementById('menu_profile_no_Auth_login').onclick = function() {
    document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
    document.querySelector('.blackout').classList.add('blackout_active');
    document.querySelector('.menu_profile_no_Auth').classList.toggle('menu_profile_no_Auth_active');
  }; 

    /// открытие меню авторизации на клику в get reader card
    document.getElementById('buy_login_in').onclick = function() {
      event.preventDefault();
      document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
      document.querySelector('.blackout').classList.add('blackout_active');
    };  

      /// открытие меню авторизации на buy
    document.getElementById('buybuy1').onclick = function() {
      event.preventDefault();
      document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
      document.querySelector('.blackout').classList.add('blackout_active');
    };  
          /// открытие меню авторизации на buy
          document.getElementById('buybuy2').onclick = function() {
            event.preventDefault();
            document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
            document.querySelector('.blackout').classList.add('blackout_active');
          }; 

              /// открытие меню авторизации на buy
    document.getElementById('buybuy3').onclick = function() {
      event.preventDefault();
      document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
      document.querySelector('.blackout').classList.add('blackout_active');
    }; 

          /// открытие меню авторизации на buy
          document.getElementById('buybuy4').onclick = function() {
            event.preventDefault();
            document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
            document.querySelector('.blackout').classList.add('blackout_active');
          }; 

      /// открытие меню авторизации на buy
      document.getElementById('buybuy5').onclick = function() {
        event.preventDefault();
        document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
        document.querySelector('.blackout').classList.add('blackout_active');
      }; 

            /// открытие меню авторизации на buy
    document.getElementById('buybuy6').onclick = function() {
      event.preventDefault();
      document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
      document.querySelector('.blackout').classList.add('blackout_active');
    }; 

      /// открытие меню авторизации на buy
      document.getElementById('buybuy7').onclick = function() {
        event.preventDefault();
        document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
        document.querySelector('.blackout').classList.add('blackout_active');
      }; 

            /// открытие меню авторизации на buy
    document.getElementById('buybuy8').onclick = function() {
      event.preventDefault();
      document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
      document.querySelector('.blackout').classList.add('blackout_active');
    }; 

          /// открытие меню авторизации на buy
          document.getElementById('buybuy9').onclick = function() {
            event.preventDefault();
            document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
            document.querySelector('.blackout').classList.add('blackout_active');
          }; 

                /// открытие меню авторизации на buy
    document.getElementById('buybuy10').onclick = function() {
      event.preventDefault();
      document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
      document.querySelector('.blackout').classList.add('blackout_active');
    }; 

          /// открытие меню авторизации на buy
          document.getElementById('buybuy11').onclick = function() {
            event.preventDefault();
            document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
            document.querySelector('.blackout').classList.add('blackout_active');
          }; 
                    /// открытие меню авторизации на buy
                    document.getElementById('buybuy12').onclick = function() {
                      event.preventDefault();
                      document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
                      document.querySelector('.blackout').classList.add('blackout_active');
                    }; 
                              /// открытие меню авторизации на buy
          document.getElementById('buybuy13').onclick = function() {
            event.preventDefault();
            document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
            document.querySelector('.blackout').classList.add('blackout_active');
          }; 

                    /// открытие меню авторизации на buy
                    document.getElementById('buybuy14').onclick = function() {
                      event.preventDefault();
                      document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
                      document.querySelector('.blackout').classList.add('blackout_active');
                    }; 

                              /// открытие меню авторизации на buy
          document.getElementById('buybuy15').onclick = function() {
            event.preventDefault();
            document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
            document.querySelector('.blackout').classList.add('blackout_active');
          }; 

                    /// открытие меню авторизации на buy
                    document.getElementById('buybuy16').onclick = function() {
                      event.preventDefault();
                      document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
                      document.querySelector('.blackout').classList.add('blackout_active');
                    }; 

        /// закрытие формы авторизации на крестик
    document.getElementById('close_btn').onclick = function() {
      event.preventDefault();
      document.querySelector('.modal_Log_In').classList.remove('modal_Log_In_active');
      document.querySelector('.blackout').classList.remove('blackout_active');
    };  

        /// закрытие формы авторизации на свободное поле
    document.getElementById('blackout_close_click').onclick = function() {
      event.preventDefault();
      document.querySelector('.modal_Log_In').classList.remove('modal_Log_In_active');
      document.querySelector('.blackout').classList.remove('blackout_active');
    }; 

                 ///открытие меню авторизации на форме регистрации
          document.getElementById('reg_to_login').onclick = function() {
            event.preventDefault();
            document.querySelector('.modal_Register').classList.remove('modal_Register_active');
            document.querySelector('.modal_Log_In').classList.add('modal_Log_In_active');
          }; 

                           ///открытие меню регистрации на форме авторизации
          document.getElementById('login_to_reg').onclick = function() {
            event.preventDefault();
            document.querySelector('.modal_Log_In').classList.remove('modal_Log_In_active');
            document.querySelector('.modal_Register').classList.add('modal_Register_active');
          }; 

             /// открытие меню авторизации на клику в меню
   document.getElementById('menu_profile_no_Auth_register').onclick = function() {
    document.querySelector('.modal_Register').classList.add('modal_Register_active');
    document.querySelector('.blackout').classList.add('blackout_active');
    document.querySelector('.menu_profile_no_Auth').classList.toggle('menu_profile_no_Auth_active');
  }; 


          /// закрытие формы авторизации на крестик
          document.getElementById('close_btn_r').onclick = function() {
            event.preventDefault();
            document.querySelector('.modal_Register').classList.remove('modal_Register_active');
            document.querySelector('.blackout').classList.remove('blackout_active');
          };  
      
              /// закрытие формы авторизации на свободное поле
          document.getElementById('blackout_close_click').onclick = function() {
            event.preventDefault();
            document.querySelector('.modal_Register').classList.remove('modal_Register_active');
            document.querySelector('.blackout').classList.remove('blackout_active');
          }; 



