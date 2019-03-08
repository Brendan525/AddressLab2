// let button = getElementByID('Add');
// let remove = getElementByID('Remove');
// let buttonFormDiv = document.querySelector('.buttonAddForm');

const section = document.querySelector('.list');
const addButton = document.querySelector('button');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const phoneInput = document.querySelector('.phone');
const realationInput = document.querySelector('.realation');


class AddressBook {
    constructor(contacts){
    this.contacts = contacts;
    }

add(info) {
    this.contacts.push(info);
}

deleteAt(index) {
  this.contacts.splice(index, 1,)
}

print() { 
  console.log(book)
}
}

const display = () => {
  section.innerHTML = '';
  for (let i = 0; i < this.contacts.length; i++) {
    const item = this.contacts[i];
    const div = document.createElement('div');
    const nameParagraph = document.createElement('p');
    const emailParagraph = document.createElement('p');
    const phoneParagraph = document.createElement('p');
    const button = document.createElement('button');
    nameParagraph.innerText = `Name: ${item.name}`;
    emailParagraph.innerText = `Email: ${item.email}`;
    phoneParagraph.innerText = `Phone Number: ${item.phone}`;
    realationInput.innerText = `Realation: ${item.relation}`
    button.innerHTML = 'Delete';
    button.addEventListener('click' , () => {
      this.deleteItem(i);
      this.display();
    });
    div.appendChild(nameParagraph);
    div.appendChild(emailParagraph);
    div.appendChild(phoneParagraph);
    div.appendChild(button);
    div.appendChild(relationParagraph);
    section.appendChild(div);
    }
  }

class Contact {
    constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    }
}

addButton.addEventListener('click', () => {
  const contact = new Contact(nameInput.value, emailInput.value, phoneInput.value, realationInput.value);
  myAddressBook.add(contact);
  myAddressBook.display();
})

const myAddressBook = new AddressBook ([new Contact('Ian', 'ian@gmail.com', '313-123-4568', 'family'), new Contact ('Kat','kat@gmail.com', '313-123-4577', 'family'), new Contact ('Caro', 'caro@gmail.com', '313-123-4569', 'friend' )]);
console.log(myAddressBook);

myAddressBook.display();
