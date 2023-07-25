let gallery = document.querySelector('.gallery');
let backBtn = document.querySelector('#backBtn');
let nextBtn = document.querySelector('#nextBtn');

gallery.addEventListener('wheel', (e) => {
    e.preventDefault();
    gallery.scrollLeft += e.deltaY;
    gallery.style.scrollBehavior = "auto";
});

nextBtn.addEventListener('click', function(){
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft += 900;
})

backBtn.addEventListener('click', function(){
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft -= 900;
})