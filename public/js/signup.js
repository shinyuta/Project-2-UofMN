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

  
document.querySelector('#signup-form').addEventListener('submit',signUpForm);