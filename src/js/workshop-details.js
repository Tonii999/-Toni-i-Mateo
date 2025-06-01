// Workshop Details JavaScript

// Mock data za radionice - simulacija API poziva
const workshopsData = {
    'uvod-u-razvoj-igara': {
        id: 1,
        title: 'Uvod u razvoj igara',
        category: 'Programiranje',
        ageGroup: '12-16 godina',
        date: '15. srpnja 2025.',
        time: '9:00 - 16:00',
        location: 'TVZ, laboratorij A301',
        instructor: {
            name: 'Dr. Marko Novak',
            title: 'Predavač programiranja',
            experience: '10+ godina iskustva'
        },
        description: [
            'Ova radionica pruža učenicima priliku da se upoznaju s osnovama razvoja video igara kroz praktičan i kreativan pristup.',
            'Tijekom radionice, učenici će raditi na stvarnim projektima i kreirati vlastite igre.'
        ],
        availableSpots: 12
    }
};

// Učitavanje podataka o radionici
function loadWorkshopData() {
    console.log('Workshop data loaded');
}

// Modal funkcionalnost za slike
function openModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modal.style.display = 'block';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Registracija za radionicu
function registerForWorkshop() {
    alert('Funkcionalnost registracije će biti implementirana u sljedećem koraku!');
}

// Kontakt s instruktorom
function contactInstructor() {
    alert('Funkcionalnost kontakta će biti implementirana u sljedećem koraku!');
}

// Učitavanje stranice
document.addEventListener('DOMContentLoaded', loadWorkshopData);