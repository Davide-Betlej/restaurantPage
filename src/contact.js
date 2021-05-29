function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactUs = document.createElement('h1');
    contactUs.textContent = "Contact Us!"
    contactUs.classList.add('contacth1')

    const phone = document.createElement('p');
    phone.textContent = "Phone: 987-654-321";
    phone.classList.add('phonePara');

    const address = document.createElement('p');
    address.textContent = "Address: 43-300 Bielsko-Biała, ul. Wymyślona 5";
    address.classList.add('addressPara');

    contact.appendChild(contactUs);
    contact.appendChild(phone);
    contact.appendChild(address);

    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;