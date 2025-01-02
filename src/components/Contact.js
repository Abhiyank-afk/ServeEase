class Contact {
    constructor() {
        this.init();
    }

    init() {
        const contactSection = document.createElement('section');
        contactSection.id = 'contact';
        contactSection.innerHTML = `
            <h2>Contact Us</h2>
            <div class="contact">
                <p>Email us at <a href="mailto:support@serveease.com">support@serveease.com</a></p>
                <p>or call us at <a href="tel:+1234567890">+123 456 7890</a></p>
            </div>
        `;
        document.querySelector('main').appendChild(contactSection);
    }
}

export default Contact;
