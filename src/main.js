import './style.css'

// const testimonials = [
//     {
//         name: 'James MacGyver',
//         text: 'roadhmap.sh is an incredible resource. I was fortunate to discover it during my university days in 2018. Back then, it was just a single repository with three images. It\'s amazing to see how much impact it has had on millions of lives since then.',
//         img: 'src/assets/profile4.webp'
//     },
//     {
//         name: 'Indiana Jones',
//         text: 'Since starting my career in 2021, I have only followed one resource, roadmap.sh, it truly helped me go from 0 to having a job and changing the financial trajectory of my family.',
//         img: 'src/assets/profile2.jpg'
//     },
//     {
//         name: 'Artem Jones',
//         text: 'I have been solving all the project ideas on roadmap.sh and I am surprised how far I have come from where I started. Highly recommended!',
//         img: 'src/assets/profile1.webp'
//     },
//     {
//         name: 'Jackie Mackle',
//         text: 'I find myself recommending roadmap.sh to all the internees or junior developers. It\'s a great way to skill up and grow in your career.',
//         img: 'src/assets/profile3.jpg'
//     },
//     {
//         name: 'Jane Williams',
//         text: 'The structured learning paths on roadmap.sh have been instrumental in my career growth. The community support is also fantastic, making it easier to stay motivated and on track.',
//         img: 'src/assets/profile4.webp'
//     }
// ]

// const carousel = document.querySelector('.carousel');
// const images = document.querySelectorAll('.carousel__image');
// const leftButton = document.querySelector('.button--left');
// const rightButton = document.querySelector('.button--right');
// const imagesLength = images.length;
// const gap = 8;

// let curLeftIndex = 0;

// function getWidth(element) {
//     return element.offsetWidth;
// }

// function adjustIndex(index) {
//     if (index > 0) return index % imagesLength;
//     else {
//         return imgagesLength - (Math.abs(index) % imagesLength);
//     }
// }

// function moveRight() {
    
//     for (const image of images) {
//         const xx = getWidth(images[1])
//         console.log(getWidth(image))
//         image.style.transform = `translateX(${-( xx+ gap)}px)`
//     }


// }


// leftButton.addEventListener('click', moveLeft);
// rightButton.addEventListener('click', moveRight);

// Auto-scroll every 5 seconds
// setInterval(moveRight, 5000);