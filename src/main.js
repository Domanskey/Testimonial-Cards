import './style.css'

const testimonials = [
    {
        name: 'James MacGyver',
        text: 'roadhmap.sh is an incredible resource. I was fortunate to discover it during my university days in 2018. Back then, it was just a single repository with three images. It\'s amazing to see how much impact it has had on millions of lives since then.'
    },
    {
        name: 'Indiana Jones',
        text: 'Since starting my career in 2021, I have only followed one resource, roadmap.sh, it truly helped me go from 0 to having a job and changing the financial trajectory of my family.'
    },
    {
        name: 'Artem Jones',
        text: 'I have been solving all the project ideas on roadmap.sh and I am surprised how far I have come from where I started. Highly recommended!'
    },
    {
        name: 'Jackie Mackle',
        text: 'I find myself recommending roadmap.sh to all the internees or junior developers. It\'s a great way to skill up and grow in your career.'
    },
    {
        name: 'Jane Williams',
        text: 'The structured learning paths on roadmap.sh have been instrumental in my career growth. The community support is also fantastic, making it easier to stay motivated and on track.'
    }
]

const carousel = document.querySelector('.carousel');
const leftButton = document.querySelector('.button--left');
const rightButton = document.querySelector('.button--right');
const description = document.querySelector('.testimonials__description');
const author = document.querySelector('.author--testimonials');
let curIndex = 2;

function toRange(index, maxSize) {
    if (index < 0) {
        const position = Math.abs(index) % maxSize;
        return maxSize - position;
    }
    return index % maxSize;
}

function shiftRight() {
    shift('right');
}

function shiftLeft() {
    const images = document.querySelectorAll('.carousel__image');
    const left = images[1];
    const right = images[4];
    const cur = images[2];
    const next = images[3];
    cur.classList.remove("carousel__image--active");

    setTimeout(() => {
        left.classList.add('carousel__image--inactive');
    }, 0); //100

    setTimeout(() => {
        right.classList.remove('carousel__image--inactive');
    }, 0); //200

    setTimeout(() => {
        next.classList.add("carousel__image--active");
        carousel.appendChild(carousel.firstElementChild);
    }, 0); //400

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


}

leftButton.addEventListener('click', shiftRight);
rightButton.addEventListener('click', shiftLeft);

// Auto-scroll every 5 seconds
// setInterval(moveRight, 5000);
