const form = document.querySelector('.signup-form')

form.addEventListener('submit',  (event) => {

        event.preventDefault()
        console.log("i was here")
        const first_name = document.querySelector('#first_name').value.trim();
        const last_name = document.querySelector('#last_name').value.trim();
        const password = document.querySelector('#password').value.trim();
        const username = document.querySelector('#username').value.trim()
    
        if (first_name && last_name&& password && username) {
            const signUp = fetch('/api/users/', {
                method: 'POST',
                body: JSON.stringify({first_name, last_name, password, username}),
                headers: {'Content-Type': 'application/json'},
            })
        
            if(signUp.ok) {
                document.location.replace('/')
            }else {
                alert('FAILED TO LOGIN')
            };
        };
})


