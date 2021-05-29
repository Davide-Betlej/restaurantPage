/* <nav id="navList">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main id="main" class="main">
        <div id="home">
          <p>The best pizza in Poland!</p>
          <p>Made with passion since 1410</p>
          <img src="img/chef.png" alt="pizzaman">
          <p>Order online or visit us!</p>
        </div>
      </main>
    </div> */
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createNavHeader() {
    const navHeader = document.createElement('nav');
    navHeader.classList.add('navList');

    const ulContainer = document.createElement('ul');

    const homeButton = document.createElement('li');
    homeButton.classList.add('list-nav')
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const menuButton = document.createElement('li');
    menuButton.classList.add('list-nav')
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(menuButton);
        loadMenu();
    });

    const contactButton = document.createElement('li');
    contactButton.classList.add('list-nav')
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(contactButton);
        loadContact();
    })

    ulContainer.appendChild(homeButton);
    ulContainer.appendChild(menuButton);
    ulContainer.appendChild(contactButton);
    navHeader.appendChild(ulContainer);

    return navHeader;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.list-nav');

    buttons.forEach((button) => {
        if (button != this) {
            button.classList.remove('active')
        }
    });
    button.classList.add('active')
}

function initializeWebsite() {
    const content = document.getElementById('content')

    content.appendChild(createNavHeader());
    content.appendChild(createMain());

    setActiveButton(document.querySelector('.list-nav'));
    loadHome();
}

export default initializeWebsite;