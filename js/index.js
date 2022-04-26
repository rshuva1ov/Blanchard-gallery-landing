// TOUCH

const touchSlider = new Swiper(document.querySelector('.swiper'), {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 3000,
  autoplay: {
    delay: 2000
  },
});


// GALLERY

let gallerySlider = new Swiper(".gallery__swiper-right", {
  pagination: {
    el: ".Gswiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".Gswiper-button-next",
    prevEl: ".Gswiper-button-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 5
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    1300: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    },
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});

//BURGER MENU

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#menu-button').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })
})

// SEARCH FORM

document.querySelector(".header__searchmini-open").addEventListener("click", function() {
  document.querySelector(".header__form-container").classList.add("form__active");
  this.classList.add("active");
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header__form-container");
  if (!target.closest(".header__searchmini")) {
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".header__searchmini-open").classList.remove("active")
  }
})

document.querySelector(".header__searchmini-close").addEventListener("click", function(o) {
  document.querySelector(".header__form-container").classList.remove("form__active");
  document.querySelector(".header__searchmini-open").classList.remove("active");
})

//NAV

$(document).ready(function() {
  $("#scroll").on("click", "a", function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 900 мс
    $('body,html').animate({ scrollTop: top }, 900);
  });
});

$(document).ready(function() {
  $(".plug-link").on("click", "a", function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 900 мс
    $('body,html').animate({ scrollTop: top }, 900);
  });
});

$(document).ready(function() {
  $(".button-link").on("click", "a", function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 900 мс
    $('body,html').animate({ scrollTop: top }, 900);
  });
});

//DRPPDOWN

document.querySelectorAll(".header__navbar-btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".header__simplebar");

    document.querySelectorAll(".header__navbar-btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });

    document.querySelectorAll(".header__simplebar").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-header__navbar-item");
      }
    })
    dropdown.classList.toggle("active-header__navbar-item");
    btn.classList.toggle("active--btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header__navbar-list")) {
    document.querySelectorAll(".header__simplebar").forEach(el => {
      el.classList.remove("active-header__navbar-item");
    })
    document.querySelectorAll(".header__navbar-btn").forEach(el => {
      el.classList.remove("active--btn");
    });
  }
})


document.querySelectorAll(".simplebar").forEach(item => {
  new SimpleBar(item, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
  });
})

//GALLERY SELECT

const element = document.querySelector('#gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});


//TABSCATALOG

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__list-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
})

var btnContainer = document.getElementById("catalog-act");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("catalog__list-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("catalog__list-btn-active");
    current[0].className = current[0].className.replace(" catalog__list-btn-active", "");
    this.className += " catalog__list-btn-active";
  });
}

//TABSFRANCE

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__fw-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__left-target').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__left-target-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-target-active')
    })
  })
})

var btnContainer = document.getElementById("france");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("catalog__fw-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("catalog__fw-btn-active");
    current[0].className = current[0].className.replace(" catalog__fw-btn-active", "");
    this.className += " catalog__fw-btn-active";
  });
}

//TABSGERMANY

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__fw-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__left-target').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__left-target-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-target-active')
    })
  })
})

var btnContainer = document.getElementById("germany");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("catalog__fw-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("catalog__fw-btn-active");
    current[0].className = current[0].className.replace(" catalog__fw-btn-active", "");
    this.className += " catalog__fw-btn-active";
  });
}

//TABSITALY

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__fw-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__left-target').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__left-target-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-target-active')
    })
  })
})

var btnContainer = document.getElementById("italy");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("catalog__fw-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("catalog__fw-btn-active");
    current[0].className = current[0].className.replace(" catalog__fw-btn-active", "");
    this.className += " catalog__fw-btn-active";
  });
}

var btns = btnContainer.getElementsByClassName("catalog__fw-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("catalog__fw-btn-it");
    current[0].className = current[0].className.replace(" catalog__fw-btn-it", "");
    this.className += " catalog__fw-btn-it";
  });
}

//TABSRUSSIA

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__fw-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__left-target').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__left-target-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-target-active')
    })
  })
})

var btnContainer = document.getElementById("russia");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("catalog__fw-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("catalog__fw-btn-active");
    current[0].className = current[0].className.replace(" catalog__fw-btn-active", "");
    this.className += " catalog__fw-btn-active";
  });
}

//TABSSPAIN

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__fw-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__left-target').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__left-target-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-target-active')
    })
  })
})

var btnContainer = document.getElementById("spain");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("catalog__fw-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("catalog__fw-btn-active");
    current[0].className = current[0].className.replace(" catalog__fw-btn-active", "");
    this.className += " catalog__fw-btn-active";
  });
}


//ACCORDION
$(function() {
  $(".catalog__right-list").accordion();
});
$(".catalog__right-list").accordion({
  heightStyle: "content",
  refresh: true,
  collapsible: true,
  active: 0
});


//CATALOG EFFECT

$('.catalog__right-item').click(function() {
  $('.catalog__right-item').not(this).removeClass('catalog__right-item-active');
  $(this).toggleClass('catalog__right-item-active');
});


//CATALOG SCROLL TO PAINTER MOBILE
$('.catalog__fw-btn').click(function () {
    if (window.innerWidth <= 767) {
        const tabNo = this.closest('.tab-content').dataset.target;
        $('body, html').animate({scrollTop : $(`.tab-content[data-target="${tabNo}"] .catalog__left-target.catalog__left-target-active`).offset().top} ,900);
        return false;
   }
})


//DOINGS

let doingsSlider = new Swiper(".doings__swiper", {
  navigation: {
    nextEl: ".Dswiper-button-next",
    prevEl: ".Dswiper-button-prev"
  },
  pagination: {
    el: '.Dswiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
    },
    590: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
    },
    920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 24,
    },
    1240: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 34,
    },
    1640: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50,
    },
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});


//PROJECTS

tippy('.tooltip-1', {
  theme: 'projects',
  content: 'Пример современных тенденций - современная методология разработки',
  trigger: 'click',
  trigger: 'focus'
});

tippy('.tooltip-2', {
  theme: 'projects',
  content: 'В стремлении повысить качество',
  trigger: 'click',
  trigger: 'focus'
});

tippy('.tooltip-3', {
  theme: 'projects',
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  trigger: 'click',
  trigger: 'focus'
});

//PROJECTS SWIPER

let projectsSlider = new Swiper(".projects__swiper", {

  navigation: {
    nextEl: ".Pswiper-button-next",
    prevEl: ".Pswiper-button-prev"
  },

  breakpoints: {
    767: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 40,
    },
    1023: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 50,
    },
    1640: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 50,
    },
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});

// FORM

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999 99 99");

im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const tel = selector.inputmask.unmaskedvalue()
        console.log(tel)
        return Number(tel) && tel.length === 10
      }
    },
    mail: {
      required: true,
      email: true
    }
  },
  messages: {
    name: {
      required: 'Недопустимый формат',
      minLength: 'Недопустимый формат',
      maxLength: 'Недопустимый формат'
    },
    tel: {
      required: 'Недопустимый формат',
      function: 'Недопустимый формат'
    }
  },
});

// //MAP


function init() {
  const myMap = new ymaps.Map("map", {
    center: [55.75, 37.60],
    zoom: 14.5,
    controls: [],
  });

  const myPlacemark = new ymaps.Placemark([55.75, 37.60], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/tip.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0],
  });

  myMap.controls.add('geolocationControl', {
    float: 'right',
    position: {
      bottom: '308px',
      right: '12px',
    },
  });

  myMap.controls.add('zoomControl', {
    size: 'small',
    float: 'none',
    position: {
      bottom: '360px',
      right: '20px',
    },
  });

  myMap.geoObjects.add(myPlacemark);

  function checkMediaQuery() {
    if (window.innerWidth < 1025) {
      myMap.behaviors.disable(['drag', 'scrollZoom']);
    }
    if (window.innerWidth > 1025) {
      myMap.behaviors.enable(['drag', 'scrollZoom']);
    }
  }
  window.addEventListener('resize', checkMediaQuery);
};

ymaps.ready(init);

// MODAL

const modal = document.querySelector('.gallery__modal')
const modalClose = document.querySelector('.modal__close')
const gallerswiperButton = document.querySelectorAll('.gallery__picture')


gallerswiperButton.forEach((el) => {
  el.addEventListener('click', () => {
    modal.classList.add('show');
  })
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('show');
})

