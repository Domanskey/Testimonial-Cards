import './style.css'


const testimonials = [
    {
        name: 'James MacGyver',
        text: 'roadhmap.sh is an incredible resource. I discovered it in 2018. Back then, it was just a single repository with three images. It\'s amazing to see how much impact it has'
    },
    {
        name: 'Indiana Jones',
        text: 'Since starting my career in 2021, I have only followed one resource, roadmap.sh, it truly helped me go from 0 to having a job and changing the financial trajectory of my family.'
    },
    {
        name: 'Artem Jones',
        text: 'I have been solving all the project ideas on roadmap.sh and I am surprised how far I have come from where I started. It keeps me motivated. Highly recommended!'
    },
    {
        name: 'Jackie Mackle',
        text: 'I really recommend amazing site roadmap.sh to all the internees, junior developers and students. It\'s a great way to skill up and grow in your dream career.'
    },
    {
        name: 'Jane Williams',
        text: 'The structured learning paths on roadmap.sh have been instrumental in my career growth. The community support is also fantastic, making it easier to stay motivated.'
    }
]


const carousel = document.querySelector('.carousel');
const leftButton = document.querySelector('.button--left');
const rightButton = document.querySelector('.button--right');
const description = document.querySelector('.testimonials__description');
const author = document.querySelector('.author--testimonials');
let curIndex = 2;
let intervalId = null;


function toRange(index, maxSize) {
    if (index < 0) {
        const position = Math.abs(index) % maxSize;
        return maxSize - position;
    }
    return index % maxSize;
}


function shiftRight() {
    const images = document.querySelectorAll('.carousel__image');
    const left = images[0];
    const right = images[3];
    const cur = images[2];
    const prev = images[1];

    cur.classList.remove("carousel__image--active");
    right.classList.add('carousel__image--inactive');
    left.classList.remove('carousel__image--inactive');
    prev.classList.add("carousel__image--active");
    carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);


    curIndex = toRange(curIndex - 1, images.length);

    description.textContent = testimonials[curIndex].text;
    description.classList.add('right-swing');
    setTimeout(() => {
        description.classList.remove('right-swing');
    }, 100);

    author.textContent = testimonials[curIndex].name;
    author.classList.add('up-swing');
    setTimeout(() => {
        author.classList.remove('up-swing');
    }, 100);

    delayInterval();
}

function shiftLeft() {
    const images = document.querySelectorAll('.carousel__image');
    const left = images[1];
    const right = images[4];
    const cur = images[2];
    const next = images[3];

    cur.classList.remove("carousel__image--active");
    left.classList.add('carousel__image--inactive');
    right.classList.remove('carousel__image--inactive');
    next.classList.add("carousel__image--active");
    carousel.appendChild(carousel.firstElementChild);

    curIndex = toRange(curIndex + 1, images.length);

    description.textContent = testimonials[curIndex].text;
    description.classList.add('left-swing');
    setTimeout(() => {
        description.classList.remove('left-swing');
    }, 100);

    author.textContent = testimonials[curIndex].name;
    author.classList.add('up-swing');
    setTimeout(() => {
        author.classList.remove('up-swing');
    }, 100);

    delayInterval();
}


leftButton.addEventListener('click', shiftRight);
rightButton.addEventListener('click', shiftLeft);


// Auto-scroll every 5 seconds
function startInterval() {
    if (intervalId === null) {
        intervalId = setInterval(shiftLeft, 5000); 
    }
}
startInterval();

function delayInterval() {
    clearInterval(intervalId);
    intervalId = null;
    startInterval();
}
