const loginFormHandler = async (event) => {
try {
    event.preventDefault()
    const username = await document.querySelector('#username').value.trim();
    const password = await document.querySelector('#password').value.trim();

    if (username && password) {
        const login = fetch('/signupRoute', {
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
        
        const password = await document.querySelector('#password').value.trim();
        const username = await document.querySelector('#username').value.trim();
        // console.log(password)
        console.log(username)
        if (password && username) {
            const signUp = await fetch('/api/users/', {
                method: 'POST',
                body: JSON.stringify({password, username}),
                headers: {'Content-Type': 'application/json'},
            })
            console.log('signup',signUp)
          
                if(signUp.ok) {
                    document.location.replace('/')
                } else {
                alert('something went wrong')
            }
    } 
}

catch (err) {
    console.log(err);
 }};
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
  
//   document.querySelector('#logout').addEventListener('click', logout);
  
document.querySelector('#signup-form').addEventListener('submit',signUpForm);

