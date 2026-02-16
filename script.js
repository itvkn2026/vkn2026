// ACCORDION funkcija
function toggleAccordion(element) {
    // Atrast projekta kartīti
    const card = element.closest('.accordion-card');
    
    // Pārslēgt active klasi (parāda/paslēpj saturu)
    card.classList.toggle('active');
}

// =====================================
// POP-UP FUNKCIJAS
// =====================================

function openPopup(popupId) {
    // Atrast popup elementu pēc ID
    const popup = document.getElementById(popupId);
    
    // Parādīt popup
    popup.style.display = 'flex';
    
    // Bloķē scrolling lapā
    document.body.style.overflow = 'hidden';
}

function closePopup(popupId) {
    // Atrast popup elementu
    const popup = document.getElementById(popupId);
    
    // Paslēpt popup
    popup.style.display = 'none';
    
    // Atjauno scrolling
    document.body.style.overflow = 'auto';
}

// Aizvērt ja klikšķina uz tumšā fona
window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
        closePopup(event.target.id);
    }
}

// Aizvērt ar ESC taustiņu
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const popups = document.querySelectorAll('.popup');
        popups.forEach(popup => {
            popup.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    }
});