// для фиксации хедера
const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
    const isScroll = window.scrollY > 0;
    header.classList.toggle("fixed", isScroll)
})



document.addEventListener('DOMContentLoaded', function() {
    //для перемещения к нужнему блоку сайта
    const links = document.querySelectorAll('.navbar__link');
    const button = document.querySelector('.home__btn');

    button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        const targetElement = document.getElementById(target);
        const headerHeight = document.querySelector('.header').offsetHeight;

        if (targetElement) {
            const targetPosition = targetElement.offsetTop - headerHeight;

            links.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector(`.navbar__link[href="#${target}"]`).classList.add('active');

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });

    function setActiveLink() {
        let fromTop = window.scrollY;

        links.forEach(link => {
            let targetId = link.getAttribute('href').substring(1);
            let targetElement = document.getElementById(targetId);

            if (
                targetElement.offsetTop - document.querySelector('.header').offsetHeight <= fromTop &&
                targetElement.offsetTop - document.querySelector('.header').offsetHeight + targetElement.offsetHeight > fromTop
            ) {
                links.forEach(link => {
                    link.classList.remove('active');
                });

                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const headerHeight = document.querySelector('.header').offsetHeight;

            if (targetElement) {
                const targetPosition = targetElement.offsetTop - headerHeight + 3;

                links.forEach(link => {
                    link.classList.remove('active');
                });

                this.classList.add('active');

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    //для сортировки в потрфолио
    const buttons = document.querySelectorAll(".portfolio__filter-button");
    const galleryItems = document.querySelectorAll(".portfolio__gallery-img__wrapper");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.id;

            galleryItems.forEach(item => {
                item.style.display = "none";

                if (category === "all" || item.dataset.category === category) {
                    item.style.display = "block";
                }
            });

            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
    
    
    //для функциональности модального окна
    const windowOpenButtons = document.querySelectorAll(".portfolio__gallery-img__btn");
    const windowCloseButton = document.querySelector(".window__btn");
    const overlay = document.querySelector(".overlay");
    const modalWindow = document.querySelector(".window");

    windowOpenButtons.forEach(windowCloseButton => {
        windowCloseButton.addEventListener("click", function(){
            modalWindow.classList.add("open");
            overlay.classList.add("open");
            document.body.classList.add("open");
        });
    });

    windowCloseButton.addEventListener("click", function() {
        modalWindow.classList.remove("open");
        overlay.classList.remove("open");
        document.body.classList.remove("open");
    })
});

const submitBtn = document.querySelector(".contacts__btn");
submitBtn.addEventListener("mousedown", function(){
    submitBtn.style.backgroundColor="#222";
    submitBtn.style.transition="ease 0.5s";
});


//слайдеры
let teamSwiper = new Swiper(".team__slider", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

let clientsSwiper = new Swiper(".clients__slider", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

let testimonialsSwiper = new Swiper(".testimonials__slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});