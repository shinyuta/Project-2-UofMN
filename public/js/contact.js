const { response } = require("express");

// let submitButton = document.querySelector('.submitButton');
let contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let subject = document.getElementById('subject');
let email = document.getElementById('email');
let message = document.getElementById('message');


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let form = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    console.log('email address', form.email);
    // console.log(form);


    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })
    .then(response => response.text())
    .then(data => {
        console.log('here is the data', data);
        if (data === 'success') {
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            response.send('Something went wrong sending your message.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        response.send('Something went wrong sending your message.')
    });
})
