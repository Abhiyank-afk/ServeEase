class Hero {
    constructor() {
        this.init();
    }

    init() {
        const heroSection = document.createElement('section');
        heroSection.id = 'hero';
        heroSection.innerHTML = `
            <div class="hero-text">
                <h1>Welcome to ServeEase</h1>
                <p>Your one-stop solution for home services like cleaning, plumbing, and homemaking.</p>
                <a href="#services" class="btn">Explore Services</a>
            </div>
        `;
        document.querySelector('main').prepend(heroSection);
    }
}

export default Hero;
