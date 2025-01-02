class Services {
    constructor() {
        this.services = [
            {
                title: 'Home Cleaning',
                image: 'home-cleaning.jpg',
                description: 'Professional and thorough cleaning services for your home.',
                link: 'HomeCleaning/cleaning.html'
            },
            {
                title: 'Carpet Cleaning',
                image: 'carpet-cleaning.jpg',
                description: 'Expert carpet cleaning services to refresh your home.',
                link: 'CarpetCleaning/cleaning.html'
            },
            // Add other services here
        ];
        this.init();
    }

    init() {
        this.createServicesSection();
    }

    createServicesSection() {
        const section = document.createElement('section');
        section.id = 'services';
        section.innerHTML = `
            <h2>Our Services</h2>
            <div class="service-cards">
                ${this.services.map(service => this.createServiceCard(service)).join('')}
            </div>
        `;
        document.querySelector('main').appendChild(section);
    }

    createServiceCard(service) {
        return `
            <div class="card" onclick="window.location.href='${service.link}'">
                <img src="${service.image}" alt="${service.title}">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;
    }
}

export default Services;
