const nameField = document.getElementById("inputName");
const emailField = document.getElementById("inputEmail");
const telephoneField = document.getElementById("inputTel");
const submitButton = document.getElementById("submitBtn");

const contactBook = [];

function addNewEntry() {
    const newEntry = {
        name: nameField.value,
        email: emailField.value,
        telephone: telephoneField.value
    };
    
    
    contactBook.push(newEntry);
    console.log(contactBook);
    
}

// TODO: Fix bug adding doubled contacts on the page
function contactLoop() {
    const ul = document.getElementById("TARGET");
    for (let key of contactBook) {
        let newLi = document.createElement("li");
        
        newLi.innerHTML = `
            <button class="removeContact"></button>
            <h2>${key.name}</h2>
            <p>${key.email}</p>
            <span>${key.telephone}</span>
        `;

        ul.appendChild(newLi);
    }
}

submitButton.addEventListener("click", addNewEntry);
submitButton.addEventListener("click", contactLoop);
