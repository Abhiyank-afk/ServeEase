class Footer {
    constructor() {
        this.init();
    }

    init() {
        const footer = document.createElement('footer');
        footer.innerHTML = `
            <p>© 2024 ServeEase. All rights reserved.</p>
        `;
        document.body.appendChild(footer);
    }
}

export default Footer;
