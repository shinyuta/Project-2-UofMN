window.alert('hi');

// let submitButton = document.querySelector('.submitButton');
let contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let subject = document.getElementById('subject');
let email = document.getElementById('email');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('anything');
  let form = {
    name: name.value.trim(),
    email: email.value.trim(),
    subject: subject.value.trim(),
    message: message.value.trim()
  };

  console.log('email address', form.email);
  // console.log(form);

  fetch('/api/emailRoute/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })
    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            window.alert('issue')
        }    _
    })
    .then((data) => {
    //   console.log('here is the data', data);
    //   if (data.message === 'success') {
    //     name.value = '';
    //     email.value = '';
    //     subject.value = '';
    //     message.value = '';
    //   } else {
    //     alert('Something went wrong sending your message.');
    //   }
    window.alert('success')
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Something went wrong sending your message.');
    });
});
