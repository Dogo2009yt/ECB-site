// Dati dei team (solo 3 team)
const teams = [
    {
        image: 'img/2.png',
        name: 'TECHNOTITAINS',
        points: 4
    },
    {
        image: 'img/1.png',
        name: 'KEYER',
        points: 3
    },
    {
        image: 'img/3.png',
        name: 'CLASSICGG',
        points: 1
    }
];

// Funzione per creare le righe della tabella
function populateTable() {
    const tableBody = document.getElementById('team-body');

    teams.forEach(team => {
        const row = document.createElement('tr');

        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = team.image;
        img.alt = `${team.name} logo`;
        imgCell.appendChild(img);
        row.appendChild(imgCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = team.name;
        row.appendChild(nameCell);

        const pointsCell = document.createElement('td');
        pointsCell.textContent = team.points;
        row.appendChild(pointsCell);

        tableBody.appendChild(row);
    });
}

// Popola la tabella quando la pagina viene caricata
document.addEventListener('DOMContentLoaded', populateTable);
