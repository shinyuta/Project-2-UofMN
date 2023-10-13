
const loginFormHandler = async (event) => {
try {
    event.preventDefault()
    const username = await document.querySelector('#username').value.trim();
    const password = await document.querySelector('#password').value.trim();

    if (username && password) {
        const login = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        })
        console.log(login)
        if(login.ok) {
            document.location.replace('/')
        }else {
            alert('FAILED TO LOGIN')
        };
    };
} catch (err) {
    console.log(err);
}
};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
