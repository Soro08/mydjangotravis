// var iconCollapse = document.querySelector('.collapse-icon');
// var link = document.querySelectorAll('.sidebar__menu__item');

// link.forEach(itemLink => {
//     itemLink.addEventListener('click', function () {
//         iconCollapse.classList.toggle('collapse-icon-rotate');

//         console.log("click")
//     })
// })

$('#specialite').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

$('#testimonial').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1400:{
            items: 4
        }
    }
})


var btnMenu = document.getElementById('btn-menu');
var sideBar = document.getElementById('sidebar');
var btnClose = document.getElementById('btn-close');

btnMenu.addEventListener('click', function(){
    sideBar.classList.add('sidebar--active');
});

btnClose.addEventListener('click', function () {
    sideBar.classList.remove('sidebar--active');
});


function changeLanguage(smallImg){
    var fullImg = document.getElementById("imageBox");
    fullImg.src = smallImg.src;
}

function addIcon(icon){
    var span = icon.previousElementSibling;
    var img = span.querySelector('img');

    var fullImg = document.getElementById("imageBox");
    fullImg.src = img.src;
}






