const mugCardTemplate = document.querySelector("[data-user-template]")
const mugCardsContainer = document.querySelector("[data-mug-cards-container]")
const dataSearch = document.querySelector("[data-search]")

let users = []

dataSearch.addEventListener("input", e => {
    // convert to lowercase as search is case sensitive
    const value = e.target.value.toLowerCase()
    // console.log(users)
    users.forEach(user => {
        // changes visibility of mug-cards 
        const isVisible = user.name.toLowerCase().includes(value) 
        || user.email.toLowerCase().includes(value)
        // if visible, unhide user, if !visible hide user (removes hide class) seen in CSS
        user.element.classList.toggle("hide", !isVisible)
    })
})

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = mugCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            header.textContent = user.name
            body.textContent = user.email

            // adds the card
            mugCardsContainer.append(card)

            return { name: user.name, email: user.email, element: card }
        })
    })