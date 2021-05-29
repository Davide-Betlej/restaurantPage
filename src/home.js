function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const pizzaManImage = document.createElement('img');
    pizzaManImage.src = "img/chef.png";
    pizzaManImage.alt = 'Pizzaman';

    home.appendChild(createParagraph('The best pizza in Poland!'));
    home.appendChild(createParagraph('Made with passion since 1906'));
    home.appendChild(pizzaManImage);
    home.appendChild(createParagraph('Order online or visit us!'));

    return home;
};

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  };
  
  function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
  };
  
  export default loadHome;