class Header {
    constructor() {
        this.init();
    }

    init() {
        this.createHeader();
        this.addEventListeners();
    }

    createHeader() {
        this.header = document.createElement('header');
        this.header.innerHTML = `
            <nav>
                <div class="logo">ServeEase</div>
                <ul class="nav-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        `;
        document.body.prepend(this.header);
    }

    addEventListeners() {
        const links = this.header.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', this.smoothScroll);
        });
    }

    smoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

export default Header;
