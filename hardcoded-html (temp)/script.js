const mugCardTemplate = document.querySelector("data-user-template")

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        const card = mugCardTemplate
    })