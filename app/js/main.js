
document.addEventListener('DOMContentLoaded', function(){

    document.documentElement.classList.add('loaded');

// Burger menu

let headerBurger = document.querySelector('.header__btn');
headerBurger.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('menu--active');
    headerBurger.classList.toggle('header__btn--active');
    document.querySelector('.body').classList.toggle('body--hidden');
});

// Animation scroll Skills.html

window.addEventListener('scroll', (e) => {
    scrollAnimation();
    aktivMenuPunkt();
});

    const scrollAnimation = () => {
        let windowCenter = window.innerHeight / 2;
        let skills = document.querySelector('.skills');
        let topSkills = skills.getBoundingClientRect().top;

        if(windowCenter >= topSkills) {
            skills.classList.add('skills--animation');
        } else {
            skills.classList.remove('skills--animation');
        }
    };

    scrollAnimation();
    // Animation scroll menu
    aktivMenuPunkt();

// Animation scroll menu

function aktivMenuPunkt () {

    if (window.matchMedia('(min-width: 990px)').matches) {
        let scrollWidth = window.scrollY;
        document.querySelectorAll('.section').forEach((item, index) =>{

            if (item.classList.contains('.contact') || item.getBoundingClientRect().top <= 800) {
                
                document.querySelectorAll('.menu a').forEach((elem) => {
                    if(elem.classList.contains('menu__link--active')) {
                        elem.classList.remove('menu__link--active');
                    }
                });
                document.querySelectorAll('.menu li')[index].querySelector('a').classList.add('menu__link--active');
                    
            } else {

                if(item.offsetTop <= scrollWidth) {
                    document.querySelectorAll('.menu a').forEach((elem) => {
                        if(elem.classList.contains('menu__link--active')) {
                            elem.classList.remove('menu__link--active');
                        }
                    });
                    document.querySelectorAll('.menu li')[index].querySelector('a').classList.add('menu__link--active');
                } else {
                    document.querySelectorAll('.menu li')[index].querySelector('a').classList.remove('menu__link--active');
                }
            }

        });

    }
}

// add an active menu item class

const headerLinks = document.querySelectorAll('.menu__link');
for (let link of headerLinks) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = link.getAttribute('href').substr(1);
        
        document.getElementById(section).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });


        let menu = document.querySelector('.menu');
        if (menu.classList.contains('menu--active')) {
            menu.classList.toggle('menu--active');
            headerBurger.classList.toggle('header__btn--active');
            document.querySelector('.body').classList.toggle('body--hidden');
        }
    });
}


    // new WOW().init();

});
