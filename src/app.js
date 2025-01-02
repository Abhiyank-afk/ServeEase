import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Services from './components/Services.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        // Create main structure
        this.createMainStructure();
        
        // Initialize components in order
        this.header = new Header();
        this.hero = new Hero();
        this.services = new Services();
        this.about = new About();
        this.contact = new Contact();
        this.footer = new Footer();
    }

    createMainStructure() {
        const main = document.createElement('main');
        document.body.appendChild(main);
    }
}

// Initialize the application
new App();
