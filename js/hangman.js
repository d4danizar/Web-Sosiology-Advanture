const words = ["PENYIMPANGAN", "PENGENDALIAN", "KETERATURAN"];
        let currentWordIndex = 0;
        let selectedWord;
        let guessedLetters;
        let maxAttempts;
        let currentAttempts;
        export let scoreHangman = 0; // Variable to store the total score

        // DOM Elements
        const wordsDisplay = document.getElementById("words-display");
        const hangmanImage = document.getElementById("hangman-image");
        const letterInput = document.getElementById("letter-input");
        const guessButton = document.getElementById("guess-button");
        const scoreDisplay = document.getElementById("score-display");
        const nextButton = document.getElementById("next-button");

        function startGame() {
            if (currentWordIndex < words.length) {
                selectedWord = words[currentWordIndex];
                guessedLetters = [];
                maxAttempts = 6; // Total attempts allowed
                currentAttempts = 0;
                updateWordDisplay();
                updateHangmanImage();
                letterInput.value = "";
                guessButton.disabled = false; // Enable guessing
                scoreDisplay.style.display = "none"; // Hide score display initially
                nextButton.style.display = "none"; // Hide next button initially
            } else {
                endGame(); // End game if all words are attempted
            }
        }

        function updateWordDisplay() {
            const displayWord = selectedWord.split("").map(letter => (guessedLetters.includes(letter) ? letter : "_")).join(" ");
            wordsDisplay.innerText = displayWord;
        }

        function updateHangmanImage() {
            hangmanImage.src = `css/img/hangman/hangman${Math.min(currentAttempts, maxAttempts)}.png`;
        }

        function endGame() {
            // Display score and show next button
            if (scoreHangman === 0) {
                alert("Anda tidak berhasil menebak kata apapun. Skor akhir: 0");
            }
            scoreDisplay.innerText = `Total Skor Anda: ${scoreHangman}`;
            scoreDisplay.style.display = "block";
            guessButton.disabled = true;
            nextButton.style.display = "inline-block";
        }

        guessButton.addEventListener("click", () => {
            const letter = letterInput.value.toUpperCase();
            letterInput.value = "";

            if (!letter || guessedLetters.includes(letter)) {
                alert("Masukkan huruf yang valid atau sudah ditebak.");
                return;
            }

            guessedLetters.push(letter);

            if (!selectedWord.includes(letter)) {
                currentAttempts++;

                // Jika sudah salah 4 kali, lanjut ke kata berikutnya
                if (currentAttempts > 3) {
                    alert(`Anda telah melakukan 4 kesalahan! Kata yang benar adalah: ${selectedWord}.`);
                    currentWordIndex++;
                    startGame();
                    return;
                }
            }

            updateWordDisplay();
            updateHangmanImage();

            if (currentAttempts >= maxAttempts) {
                alert(`Anda kalah! Kata yang benar adalah: ${selectedWord}.`);
                currentWordIndex++;
                startGame();
            } else if (selectedWord.split("").every(letter => guessedLetters.includes(letter))) {
                scoreHangman += 30;
                alert(`Selamat! Anda berhasil menebak kata! Total Skor: ${scoreHangman}`);
                
                currentWordIndex++;
                
                if (currentWordIndex < words.length) {
                    startGame();
                } else {
                    endGame(); // End game if all words are completed
                }
            }
        });

        nextButton.addEventListener("click", goToNextPage);

        function goToNextPage() {
            window.location.href = "selesai.html"; // Ganti dengan URL halaman tujuan
        }

        // Start the game on page load
        startGame();