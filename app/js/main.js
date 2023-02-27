
document.addEventListener('DOMContentLoaded', function(){

    document.documentElement.classList.add('loaded');
//////////////////////////////
    const scrollAnimation = () => {
        let windowCenter = innerHeight / 2;
        let skills = document.querySelector('.skills');
        let topSkills = skills.getBoundingClientRect().top;

        if(windowCenter >= topSkills) {
            skills.classList.add('skills--animation');
        } else {
            skills.classList.remove('skills--animation');
        }
    };

    scrollAnimation();

    window.addEventListener('scroll', () => {
        scrollAnimation();
    });

////////////////////////////////////////

const headerLinks = document.querySelectorAll('.menu__link');
for (let link of headerLinks) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = link.getAttribute('href').substr(1);
        
        document.getElementById(section).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        // document.querySelector('.menu').classList.toggle('menu--active');
        // document.querySelector('.menu__button').classList.toggle('menu__button--active');
        // document.querySelectorAll('.header__btn-item').forEach(item => {
        //     item.classList.toggle('header__btn-item--active');
        // });
    });
}






    // scrollAnimation();
    
    // const scrollAnimation = () => {
    //     let windowCenter = (window.innerHeight / 2) + window.scrollY;

    //     let skills = document.querySelector('.skills');
    //     let scrollSkills = skills.offsetTop + (skills.offsetHeight / 10);

    //     if(windowCenter >= scrollSkills) {
    //         skills.classList.add('skills--animation');
    //     } else {
    //         skills.classList.remove('skills--animation');
    //     }

    // };





















    // let headerItems = document.querySelectorAll('.header__btn-item');
    // document.querySelector('.header__btn').addEventListener('click', function(){
    //     document.querySelector('.menu').classList.toggle('menu--active');
    //     headerItems.forEach(elem => {
    //         elem.classList.toggle('header__btn-item--active');
    //     });
    // });

    // window.addEventListener('scroll', function(){
    //     if(window.scrollY >= 100) {
    //         document.querySelector('.header').classList.add('header--active');
    //         document.querySelector('.home-page__title').classList.add('home-page__title--outLeft');
    //         document.querySelector('.home-page__name').classList.add('home-page__name--outLeft');
    //         document.querySelector('.home-page__link').classList.add('home-page__link--outLeft');
    //     }
    //     else {
    //         document.querySelector('.header').classList.remove('header--active');
    //         document.querySelector('.home-page__title').classList.remove('home-page__title--outLeft');
    //         document.querySelector('.home-page__name').classList.remove('home-page__name--outLeft');
    //         document.querySelector('.home-page__link').classList.remove('home-page__link--outLeft');
    //     }
    // });

    // const anim = ['html', 'css', 'js', 'sass', 'gulp', 'git', 'jquery', 'figma'];
    // anim.forEach(id =>
    //     new Vivus(id, {
    //         duration: 300,
    //         type: 'delayed'
    //     })
    // );

    // $('.menu__link, .logo, .home-page__link').on('click', function (event) {
    //     event.preventDefault();
    //     var id = $(this).attr('href');
    //     var top = $(id).offset().top;
    //     $('body,html').animate({scrollTop: top}, 1500);

    //     $('.menu').removeClass('menu--active');
    //     $('.header__btn-item').removeClass('header__btn-item--active');
    // });

    // new WOW().init();
});
