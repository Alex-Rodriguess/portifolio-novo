var typed = new Typed(".multiple-text", {
    strings: ["Analista de Sistemas", "Dev Front-end"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*toggle icon navbar */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/* scroll sctions active link */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*Sticky navbar */

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    
    /*REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL) */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*Scroll Reveal */

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading', { origin: top });

/**Envio de mensagem pelo whatsapp */

function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    var url =
      "https://wa.me/51995428272?text=" + // Seu numero
      "*Formulário de Contato*" +
      "%0a" + // Mensagem personalizada
      "%0a" + // Quebra de linha
      "*Nome*: " +
      nome +
      "%0a" + // Dados do formulário
      "*Telefone*: " +
      telefone +
      "%0a" +
      "*E-mail*: " +
      email +
      "%0a" +
      "*Mensagem*: " +
      msg;
    window.open(url, "_blank").focus();
  }

 