let allResources = [];

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Verificăm dacă ambele elemente există pe pagină înainte de a pune click-ul
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        console.log("Meniu apăsat!");
    });
};



// Încarcă datele din JSON (Cerința 7, 22)
async function fetchResources() {
    try {
        const response = await fetch('data/resources.json');
        allResources = await response.json();
        displayData(allResources);
    } catch (error) {
        console.error("Eroare la preluarea datelor:", error);
    }
}

// Afișează lista de resurse (Cerința 23)
function displayData(data) {
    const grid = document.getElementById('resource-grid');
    grid.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'resource-card';
        
        const tagsHtml = item.tags.map(t => `<span class="tag">#${t}</span>`).join(' ');

        card.innerHTML = `
            <div class="card-type">${item.type}</div>
            <h3>${item.name}</h3>
            <p><strong>Locație:</strong> ${item.location}</p>
            <p><strong>Program:</strong> ${item.program}</p>
            <div class="tags">${tagsHtml}</div>
        `;
        grid.appendChild(card);
    });
}

// Filtrare date
function filterData(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (category === 'Toate') {
        displayData(allResources);
    } else {
        const filtered = allResources.filter(r => r.type === category);
        displayData(filtered);
    }
}

window.onload = fetchResources;

