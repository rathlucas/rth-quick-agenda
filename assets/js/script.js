const nameField = document.getElementById("inputName");
const emailField = document.getElementById("inputEmail");
const telephoneField = document.getElementById("inputTel");

const submitButton = document.getElementById("submitBtn");

const contactBook = [];

function addNewEntry() {
    const newEntry = [{
        name: nameValue,
        email: emailValue,
        telephone: telephoneValue
    }];

    
    contactBook.push(newEntry);
    console.log(contactBook);

}

submitButton.addEventListener("click", addNewEntry);
