const nameField = document.getElementById("inputName");
const emailField = document.getElementById("inputEmail");
const telephoneField = document.getElementById("inputTel");

const submitButton = document.getElementById("submitBtn");

const contactBook = [];

function addNewEntry() {
    const newEntry = [{
        name: nameField.value,
        email: emailField.value,
        telephone: telephoneField.value
    }];

    
    contactBook.push(newEntry);
    console.log(contactBook);

}

submitButton.addEventListener("click", addNewEntry);
