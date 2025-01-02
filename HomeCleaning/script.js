// script.js
// Fetching random user profiles
document.addEventListener("DOMContentLoaded", () => {
    const profileContainer = document.getElementById("profile-container");

    // Fetch profiles from Random User API
    fetch("https://randomuser.me/api/?results=6")
        .then((response) => response.json())
        .then((data) => {
            data.results.forEach((user) => {
                const profileCard = document.createElement("div");
                profileCard.className = "profile-card";

                profileCard.innerHTML = `
            <img src="${user.picture.large}" alt="Profile Picture">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.location.city}, ${user.location.country}</p>
            <button onclick="hire('${user.name.first}')">Hire Me</button>
          `;
                profileContainer.appendChild(profileCard);
            });
        })
        .catch((error) => console.error("Error fetching user profiles:", error));
});

// Hiring functionality
function hire(name) {
alert(`You have hired ${name}!`);
}

// Adding Three.js Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("background") });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// Adding 3D objects
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0x007bff });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

// Light
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
