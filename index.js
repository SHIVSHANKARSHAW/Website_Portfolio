// Navbar Toggle add

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

// Scroll

let sections = document.querySelectorAll ('section');
let navLinks = document.querySelectorAll ('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Sticky Navbar

let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);

// SLider

let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slider img');
    if (n < 0) {
        slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
        slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

showSlide(slideIndex);
setInterval(nextSlide, 6000);

// ScrollReaveal Js

ScrollReveal({
    reset: true,
    distance:'70px',
    duration:1500,
    delay:100
})

ScrollReveal().reveal('.body-content , .heading, .proj-heading, .abt-heading,input', { origin : 'top' })
ScrollReveal().reveal('.home-img, .about-img,textarea', { origin : 'bottom' })
ScrollReveal().reveal('h3 , .social-media, .skill-b,.s-c', { origin : 'left' })
ScrollReveal().reveal('p, .btn,.s_c,.slider-container', { origin : 'right' })

// Typed JS

const typed = new Typed('.multiple',{
    strings:['MERN Stack Developer ! ','Content Writer ! ','CSE Student ! '],
    typespeed:70,
    backspeed:80,
    backdelay:1500,
    loop:true
});

// smtp Form

function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mightguy460@gmail.com",
        Password : "Onetwothree#123",
        To : 'shivshankarshaw2003@gmail.com',
        From : document.getElementById('email').value,
        Subject: document.getElementById('subject').value ,
        Body : "Name : " + document.getElementById('name').value +
                "<br> Number : " + document.getElementById('number').value +
                "<br> Message : " + document.getElementById('message').value
    }).then(
      message => alert("Thanks for response !")
    );
}
