import './style.css'

const testimonials = [
    {
        name: 'Artem Jones',
        text: 'I have been solving all the project ideas on roadmap.sh and I am surprised how far I have come from where I started. Highly recommended!',
        img: 'src/assets/profile1.webp'
    },
    {
        name: 'Indiana Jones',
        text: 'Since starting my career in 2021, I have only followed one resource, roadmap.sh, it truly helped me go from 0 to having a job and changing the financial trajectory of my family.',
        img: 'src/assets/profile2.jpg'
    },
    {
        name: 'Jackie Mackle',
        text: 'I find myself recommending roadmap.sh to all the internees or junior developers. It\'s a great way to skill up and grow in your career.',
        img: 'src/assets/profile3.jpg'
    },
    {
        name: 'James MacGyver',
        text: 'roadhmap.sh is an incredible resource. I was fortunate to discover it during my university days in 2018. Back then, it was just a single repository with three images. It\'s amazing to see how much impact it has had on millions of lives since then.',
        img: 'src/assets/profile4.webp'
    }
]

let currentTestimonial = 0;

const testimonialText = document.querySelector('.testimonials__description');
const userImage = document.querySelector('.testimonials__image--middle');
const userImageLeft = document.querySelector('.testimonials__image--left');
const userImageRight = document.querySelector('.testimonials__image--right');
const username = document.querySelector('.author--testimonials');
const leftButton = document.querySelector('.button--left');
const rightButton = document.querySelector('.button--right');

function updateTestimonial() {
    const person = testimonials[currentTestimonial];

    testimonialText.textContent = person.text;
    username.textContent = person.name;
    userImage.src = person.img;

    userImageLeft.src = testimonials[(currentTestimonial + testimonials.length - 1) % testimonials.length].img;
    userImageRight.src = testimonials[(currentTestimonial + 1) % testimonials.length].img;
}


function nextTestimonial() {
    currentTestimonial++;

    currentTestimonial %= testimonials.length;

    updateTestimonial();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial + testimonials.length - 1) % testimonials.length;

    updateTestimonial();
}

leftButton.addEventListener('click', prevTestimonial);
rightButton.addEventListener('click', nextTestimonial);

updateTestimonial();