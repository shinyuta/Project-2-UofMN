const loginFormHandler = async (event) => {
try {
    event.preventDefault()
    const username = await document.querySelector('username').value.trim();
    const password = await document.querySelector('password').value.trim();

    if (email && password) {
        const login = fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
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
    try {
        event.preventDefault()
        const username = await document.querySelector('user').value.trim();
        const password = await document.querySelector('password').value.trim();
        // const username = await document.querySelector('username').value.trim
    
        if (email && password && username ) {
            const signUp = fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({ password, username}),
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
  
  document.querySelector('#logout').addEventListener('click', logout);
  


