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

const ul = document.getElementById("TARGET");
const noContact = document.getElementById("noContact");

function createElement() {
    let newDelBtn = document.createElement("button");
    let newLi = document.createElement("li");
    let newh2 = document.createElement("h2");
    let newP = document.createElement("p");
    let NewSpan = document.createElement("span");

    newDelBtn.setAttribute("class", "removeContact");

    for (i of contactBook) {
        newh2.textContent = `${i.name}`
        newP.textContent = `${i.email}`
        NewSpan.textContent = `${i.telephone}`
    }

    newDelBtn.onclick = function() {
        newDelBtn.parentElement.remove()
        return;
    }

    newLi.appendChild(newDelBtn);
    newLi.appendChild(newh2);
    newLi.appendChild(newP);
    newLi.appendChild(NewSpan);
    
    ul.appendChild(newLi);
    
    if (ul.contains(noContact)) {
        ul.removeChild(noContact);
    }

    console.log(newLi);
}
    

submitButton.addEventListener("click", addNewEntry);
submitButton.addEventListener("click", createElement);