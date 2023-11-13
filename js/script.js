const headerBurger = document.querySelector('.header__burger');
const headerBurgerBox = document.querySelector('.header__burgerBox');
const headerTop = document.querySelector('.header__top');

if (headerBurger) {
    const headerMenu = document.querySelector('.header__list');
    headerBurgerBox.addEventListener("click", function (e) {
        if (window.matchMedia('(max-width: 720px)').matches) {
            document.body.classList.toggle('_lock');
        }
        headerBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
        headerTop.classList.toggle('_active');
    })
}

const svgContainer = document.getElementById('svg-container');
const path = document.getElementById('anim');

path.style.strokeDasharray = path.getTotalLength();
path.style.strokeDashoffset = path.getTotalLength();
path.style.fillOpacity = 0;

const tl = gsap.timeline()

tl.fromTo("#mainSvg", {

}, {}).fromTo(path, {}, {
    duration: 2,
    strokeDashoffset: 0,
    ease: "power1.inOut",
    onComplete: () => {

        gsap.to(path, {
            duration: 1,
            fillOpacity: 1,
            fill: 'white',
        });
    }
})
gsap.fromTo('.header__background', {
    display: 'none',
    y: 770,
}, {
    delay: 3,
    display: 'block',
    y: 160,
    duration: 0.6,

})
gsap.fromTo('.header__block', {
    display: 'none',
    y: 300,
}, {
    delay: 3.2,
    display: 'block',
    y: -13,
    duration: 0.6,
})
gsap.fromTo('.header__top', {
    opacity: 0,
    y: -100,
}, {
    delay: 3.3,
    display: 'block',
    y: 0,
    opacity: 1,
})

const blockBtn = document.querySelector('.block-header__button');
const headerBg = document.querySelector('.header__background');
const headerBody = document.querySelector('.header__body');
const header = document.querySelector('.header');
const headerBgContainer = document.querySelector('.background__container');

blockBtn.addEventListener("click", function (e) {

    headerBg.classList.toggle('_active');
    const getWindowWidth = () => window.innerWidth;
    const windowWidth = getWindowWidth();
    let activeWidth;
    let activeHeight;
    let nonActiveWidth;
    let nonActiveHeight;

    let activeSvgWidth;
    let activeSvgHeight;
    let nonActiveSvgWidth;
    let nonActiveSvgHeight;
    let activeSvgMargin;
    let nonActiveSvgMargin;
    let activeSvgX;
    let aciveSvgY;
    let nonActiveSvgX;
    let nonAciveSvgY;

    let activeBoxWidth;
    let activeBoxHeight;
    let nonActiveBoxWidth;
    let nonActiveBoxHeight;

    if (windowWidth > 1740) {
        activeWidth = 1296;
        activeHeight = 970;
        nonActiveWidth = 655;
        nonActiveHeight = 770;

        activeSvgWidth = 747;
        activeSvgHeight = 197;
        nonActiveSvgWidth = 1217;
        nonActiveSvgHeight = 321;
        activeSvgMargin = '160 0 0 0';
        nonActiveSvgMargin = '216 210 0 0';
        activeSvgX = "42vw";
        aciveSvgY = 103;
        nonActiveSvgX = 0;
        nonAciveSvgY = 0;

        activeBoxWidth = 685;
        activeBoxHeight = 455;
        nonActiveBoxWidth = 875;
        nonActiveBoxHeight = 269;
    } else if (windowWidth > 1200) {
        activeWidth = 1000;
        activeHeight = 767;
        nonActiveWidth = 646;
        nonActiveHeight = 767;

        activeSvgWidth = 653;
        activeSvgHeight = 172;
        nonActiveSvgWidth = 1007;
        nonActiveSvgHeight = 266;
        activeSvgMargin = '118 0 0 0';
        nonActiveSvgMargin = '216 80 0 0';
        activeSvgX = "42vw";
        aciveSvgY = 63;
        nonActiveSvgX = 0;
        nonAciveSvgY = 0;

        activeBoxWidth = 545;
        activeBoxHeight = 285;
        nonActiveBoxWidth = 875;
        nonActiveBoxHeight = 269;
    } else if (windowWidth > 720) {
        activeWidth = 625;
        activeHeight = 700;
        nonActiveWidth = 434;
        nonActiveHeight = 535;

        activeSvgWidth = 478;
        activeSvgHeight = 127;
        nonActiveSvgWidth = 720
        nonActiveSvgHeight = 191;
        activeSvgMargin = '232 0 0 0';
        nonActiveSvgMargin = '241 0 0 0';
        activeSvgX = "40.5vw";
        aciveSvgY = 153;
        nonActiveSvgX = 0;
        nonAciveSvgY = 0;

        activeBoxWidth = 440;
        activeBoxHeight = 258;
        nonActiveBoxWidth = 540;
        nonActiveBoxHeight = 172;
    } else {
        activeWidth = "100%";
        activeHeight = 700;
        nonActiveWidth = 328;
        nonActiveHeight = 459;

        activeSvgWidth = 340;
        activeSvgHeight = 90;
        nonActiveSvgWidth = 340;
        nonActiveSvgHeight = 90;
        activeSvgMargin = '386 0 0 0';
        nonActiveSvgMargin = '95 0 0 0';

        activeBoxWidth = 390;
        activeBoxHeight = 258;
        nonActiveBoxWidth = "100%";
        nonActiveBoxHeight = 190;
    }



    if (headerBg.classList.contains('_active')) {
        gsap.to(headerBg, {
            duration: 0.5,
            y: 0,
            width: activeWidth,
            height: activeHeight,
        });
        gsap.to('.block-header__button', {
            rotate: -180,
        });
    } else {
        gsap.to(headerBg, {
            duration: 0.5,
            y: 160,
            width: nonActiveWidth,
            height: nonActiveHeight,
        });
        gsap.to('.block-header__button', {
            rotate: -360,
        });
    }


    if (headerBg.classList.contains('_active')) {
        gsap.to('#mainSvg', {
            width: activeSvgWidth,
            height: activeSvgHeight,
            margin: activeSvgMargin,
        });
        gsap.to('#emptySvg', {
            width: activeSvgWidth,
            height: activeSvgHeight,
            y: aciveSvgY,
            x: activeSvgX,
        });

        if(windowWidth > 720){
            gsap.to(".header__block", {
                width: activeBoxWidth,
                height: activeBoxHeight,

            });
        }else{
            gsap.to(".header__block", {
                width: activeBoxWidth,
                height: activeBoxHeight,
                x: "22vw",
                y: -400
            });
        }
        gsap.to('.block-header__title',{
            display: "block",
            delay: -1,
        });
        gsap.to('.block-header__text.text-1', {
            display: "block",
            delay: -1,
        });
        gsap.to('.block-header__text.text-2', {
            display: "none",
            delay: -1,
        });

    } else {
        gsap.to('#mainSvg', {
            width: nonActiveSvgWidth,
            height: nonActiveSvgHeight,
            margin: nonActiveSvgMargin,
        });
        gsap.to('#emptySvg', {
            width: nonActiveSvgWidth,
            height: nonActiveSvgHeight,
            y: nonAciveSvgY,
            x: nonActiveSvgX,
        });

        if(windowWidth > 720){
            gsap.to(".header__block", {
                width: nonActiveBoxWidth,
                height: nonActiveBoxHeight,
            });
        } else {
            gsap.to(".header__block", {
                width: nonActiveBoxWidth,
                height: nonActiveBoxHeight,
                x:0,
                y:0
            });
        }
        gsap.to('.block-header__title', {
            display: "none",
            delay: -1,
        });

        gsap.to('.block-header__text.text-1', {
            display: "none",
            delay: -1,
        });
        gsap.to('.block-header__text.text-2', {
            display: "block",
            delay: -1,
        });
    }
    if (headerBg.classList.contains('_active')) {
        header.appendChild(headerBg);
    } else {
        headerBgContainer.appendChild(headerBg);
    }

});



const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.galery-next',
        prevEl: '.galery-prev',
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    speed: 1000,
    on: {
        slideChangeTransitionStart: function () {
            var nextSlide = this.slides[this.activeIndex+1];

            gsap.to(nextSlide, {
                width: "62vw",
                height: "33vw",
                duration: 1,
            });
            var activeSlide = this.slides[this.activeIndex];
            gsap.to(activeSlide, {
                width: "27.7vw",
                height: "20vw",
                duration: 1,
            });
        },
    }
});


import { useDynamicAdapt } from './dynamAdapt.js'

useDynamicAdapt()