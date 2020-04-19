const row = document.querySelector('.containerCarousel');
const movies = document.querySelectorAll('.movie');

const rightArrow = document.getElementById('rightArrow');
const leftArrow = document.getElementById('leftArrow');

// -- Event Listener Right Arrow -- 

rightArrow.addEventListener('click', () => {
    row.scrollLeft += row.offsetWidth;
    const activeIndicator = document.querySelector('.indicators .active');
    if(activeIndicator.nextSibling) {
        activeIndicator.nextSibling.classList.add('active');
        activeIndicator.classList.remove('active');
    }
})

// -- Event Listener Left Arrow -- 

leftArrow.addEventListener('click', () => {
    row.scrollLeft -= row.offsetWidth;
    const activeIndicator = document.querySelector('.indicators .active');
    if(activeIndicator.previousSibling) {
        activeIndicator.previousSibling.classList.add('active');
        activeIndicator.classList.remove('active');
    }
})

// -- Event Listener Left Arrow -- 

const numberPage = Math.ceil(movies.length / 5);
for(let i = 0; i < numberPage; i++) {
    const indicator = document.createElement('button');
    if(i === 0) 
        indicator.classList.add('active');
    document.querySelector('.indicators').appendChild(indicator);
    indicator.addEventListener('click', (e) => {
        row.scrollLeft = i * row.offsetWidth;
        document.querySelector('.indicators .active').classList.remove('active');
        e.target.classList.add('active');
    })
}

// -- Hover --
movies.forEach(movie => {
    movie.addEventListener('mouseenter', (e) => {
        const element = e.currentTarget;
        setTimeout(() => {
            movies.forEach(movie => movie.classList.remove('hover'));
            element.classList.add('hover');
        }, 300);
    });
});

row.addEventListener('mouseleave', () => {
    movies.forEach(movie => movie.classList.remove('hover'));
});