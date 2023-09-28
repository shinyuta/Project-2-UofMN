const signUpForm = async (event) => {
    try {
        event.preventDefault()
        console.log("i was here")
        const first_name = await document.querySelector('#first_name').value.trim();
        const last_name = await document.querySelector('#last_name').value.trim();
        const password = await document.querySelector('#password').value.trim();
        const username = await document.querySelector('#username').value.trim()
    
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
    } catch (err) {
        console.log(err);
    };
};

document.querySelector('#signup').addEventListener('submit', signUpForm)
