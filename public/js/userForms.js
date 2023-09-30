const loginFormHandler = async (event) => {
try {
    event.preventDefault()
    const email = await document.querySelector('email').value.trim();
    const password = await document.querySelector('password').value.trim();

    if (email && password) {
        const login = fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        })
    
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

const signUpForm = async (event) => {
    event.preventDefault()
    try {
   
        console.log("iwas here")
        const first_name = await document.querySelector('#first_name').value.trim();
        const last_name = await document.querySelector('#last_name').value.trim();
        const password = await document.querySelector('#password').value.trim();
        const username = await document.querySelector('#username').value.trim()
    
        if (first_name && last_name && password && username) {
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
// taken from School Work
const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
// document.querySelector('#logout').addEventListener('click', logout);
// document.querySelector('.signup-form').addEventListener('submit', signUpForm)
  

