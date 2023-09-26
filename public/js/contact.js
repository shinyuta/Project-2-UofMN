const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let subject = document.getElementById('subject');
let email = document.getElementById('email');
let message = document.getElementById('element');


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let form = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })
    .then(response => response.text())
    .then(data => {
        if (data == 'success') {
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            alert('Something went wrong sending your message.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Something went wrong sending your message.')
    });
})
