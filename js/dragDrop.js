const draggables = document.querySelectorAll('.jawaban');
const dropZones = document.querySelectorAll('.drop-box');
export let scoreDnd = 0;  // Variable to store the score

// Enable dragging for each draggable item
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

// Set up drop zones
dropZones.forEach(zone => {
    zone.addEventListener('dragover', e => {
        e.preventDefault(); // Allow the drop
        zone.classList.add('over');
    });

    zone.addEventListener('dragleave', () => {
        zone.classList.remove('over');
    });

    zone.addEventListener('drop', e => {
        const draggable = document.querySelector('.dragging');
        if (draggable) {
            // Set the dimensions of the draggable item to fill the drop zone
            draggable.style.position = 'absolute';
            draggable.style.top = '0';
            draggable.style.left = '0';
            zone.innerHTML = '';  // Clear the drop zone before appending new item
            zone.appendChild(draggable);
            zone.classList.remove('empty'); // Remove the empty class when filled
        }
        zone.classList.remove('over');
    });
});

function checkAnswers() {
    dropZones.forEach(zone => {
        const answer = zone.querySelector('.jawaban');
        const correctAnswer = zone.dataset.correct;
        if (answer) {
            if (answer.dataset.answer === correctAnswer) {
                zone.classList.add('correct'); // Highlight correct answer
                scoreDnd += 20; // Add 20 points for the correct answer
            } else {
                zone.classList.add('wrong'); // Highlight wrong answer
            }
        }
    });
    document.getElementById('scoreDisplay').innerText = `Skor: ${scoreDnd}`;  // Update score display
    document.getElementById('nextBtn').style.display = 'block'; // Show next button if score is displayed
}

function goToNextPage() {
    window.location.href = "Peta Sosiologi-papua.html"; // Ganti dengan URL halaman tujuan
}