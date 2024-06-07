document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Toggle do menu em telas menores
    menuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });

    // Rola suavemente até a seção correspondente ao clicar em um link do menu
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
            // Fecha o menu em telas menores após clicar em um link
            document.querySelector('nav ul').classList.remove('show');
        });
    });

    const contactForm = document.getElementById('contact-form');

    // Adiciona o evento de submissão do formulário de contato
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Validação de formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }

        // Envio do formulário
        submitForm(name, email, message);
    });

    // Função para enviar o formulário
    function submitForm(name, email, message) {
        alert(`Obrigado pela mensagem, ${name}!`);
        console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);
        contactForm.reset();
    }

    // Animação das barras de habilidades ao carregar a página
    const skillBars = document.querySelectorAll('.skill-bar span');
    skillBars.forEach(skillBar => {
        const level = skillBar.parentElement.dataset.level;
        skillBar.style.width = level + '%';
    });
});
