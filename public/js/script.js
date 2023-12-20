// Add event listener to .miniCard elements
document.querySelectorAll('.miniCard').forEach(function(element) {
    element.addEventListener('click', function (event) {
        if (event.target === element) {
            element.classList.toggle('miniCardFocus');
            toggleDescriptionDisplay(element);
        }
    });
});

// Add event listener to img children of .miniCard elements
document.querySelectorAll('.miniCard img').forEach(function(element) {
    element.addEventListener('click', function (event) {
        const miniCard = event.currentTarget.closest('.miniCard');
        event.currentTarget.closest('.miniCard').classList.toggle('miniCardFocus');
        toggleDescriptionDisplay(miniCard);
    });
});

function toggleDescriptionDisplay(miniCard) {
    const description = miniCard.querySelector('.description');
    if (miniCard.classList.contains('miniCardFocus')) {
        description.classList.remove('hidden');
    } else {
        description.classList.add('hidden');
    }
}