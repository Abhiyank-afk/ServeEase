class About {
    constructor() {
        this.init();
    }

    init() {
        const aboutSection = document.createElement('section');
        aboutSection.id = 'about';
        aboutSection.innerHTML = `
            <h2>About Us</h2>
            <p>At ServeEase, we are committed to simplifying your life by providing top-notch home services with just a few clicks.</p>
        `;
        document.querySelector('main').appendChild(aboutSection);
    }
}

export default About;
