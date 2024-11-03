document.addEventListener('DOMContentLoaded', () => {
    const introText = document.getElementById('intro-text');
    const mainContent = document.getElementById('main-content');

    // Menunggu beberapa detik sebelum memulai transisi
    setTimeout(() => {
        // Menambahkan kelas hide yang akan memicu animasi hilang
        introText.classList.add('hide');

        // Setelah animasi fade selesai, sembunyikan teks dan tampilkan konten
        setTimeout(() => {
            introText.classList.add('hidden'); // Sembunyikan elemen sepenuhnya
            mainContent.classList.remove('hidden'); // Tampilkan konten utama
            mainContent.classList.add('show'); // Menambahkan kelas show untuk memunculkan konten
        }, 1000); // Waktu yang sama dengan durasi animasi hilang
    }, 2000); // Waktu tampilan teks awal sebelum memudar
});

// QUIZ //
const questions = [
    {
        id: 1,
        question: "Apa yang dimaksud dengan nilai sosial dalam kehidupan masyarakat?",
        answers: {
            A: "Aturan tertulis yang harus dipatuhi",
            B: "Perasaan atau keyakinan mengenai apa yang dianggap penting oleh masyarakat",
            C: "Sistem yang mengatur perilaku ekonomi",
            D: "Larangan dalam masyarakat yang berkaitan dengan agama"
        },
        correctAnswer: "B"
    },
    {
        id: 2,
        question: "Norma sosial berfungsi untuk…",
        answers: {
            A: "Memberikan kebebasan mutlak kepada individu",
            B: "Mengatur perilaku anggota masyarakat agar sesuai dengan nilai sosial",
            C: "Menciptakan aturan yang tidak harus ditaati",
            D: "Memberikan penghargaan kepada orang-orang tertentu saja"
        },
        correctAnswer: "B"
    },
    {
        id: 3,
        question: "Norma sosial yang paling tegas dalam masyarakat disebut dengan…",
        answers: {
            A: "Folkways",
            B: "Nilai sosial",
            C: "Hukum",
            D: "Mode"
        },
        correctAnswer: "C"
    },
    {
        id: 4,
        question: "Fungsi utama nilai sosial dalam masyarakat adalah…",
        answers: {
            A: "Menjadi pembeda antara masyarakat kota dan desa",
            B: "Menjadi pedoman dalam berperilaku dan membentuk identitas sosial",
            C: "Menciptakan stratifikasi sosial yang ketat",
            D: "Meningkatkan pendapatan masyarakat"
        },
        correctAnswer: "B"
    },
    {
        id: 5,
        question: "Norma sosial berfungsi untuk membentuk keteraturan dalam masyarakat. Bagaimana cara norma tersebut bekerja?",
        answers: {
            A: "Dengan membatasi kebebasan individu secara total",
            B: "Dengan memberikan sanksi jika seseorang melanggar aturan yang berlaku",
            C: "Dengan membebaskan individu dari aturan tertentu",
            D: "Dengan mengabaikan perilaku yang tidak sesuai"
        },
        correctAnswer: "B"
    },
    {
        id: 6,
        question: "Nilai-nilai sosial biasanya berperan sebagai pedoman hidup. Namun, nilai tersebut bisa berubah karena…",
        answers: {
            A: "Adanya aturan baru dari pemerintah",
            B: "Pergantian musim",
            C: "Pengaruh budaya asing, perkembangan zaman, dan perubahan sosial",
            D: "Larangan dari orang tua"
        },
        correctAnswer: "C"
    },
    {
        id: 7,
        question: "Nilai sosial merupakan konstruksi masyarakat sebagai hasil dari…",
        answers: {
            A: "Keputusan pemerintah",
            B: "Hasil interaksi antar warga masyarakat",
            C: "Kehendak individu yang dominan",
            D: "Pengaruh teknologi modern"
        },
        correctAnswer: "B"
    },
    {
        id: 8,
        question: "Mengapa nilai sosial bukan merupakan sifat bawaan individu sejak lahir?",
        answers: {
            A: "Karena nilai sosial dihasilkan melalui proses pendidikan formal",
            B: "Karena nilai sosial hanya berlaku dalam lingkungan keluarga",
            C: "Karena nilai sosial disebarkan melalui interaksi antara sesama warga masyarakat",
            D: "Karena nilai sosial ditentukan oleh pemerintah"
        },
        correctAnswer: "C"
    },
    {
        id: 9,
        question: "Nilai sosial terbentuk melalui proses sosialisasi. Hal ini menunjukkan bahwa nilai sosial…",
        answers: {
            A: "Dapat langsung dimiliki oleh individu sejak lahir",
            B: "Dipelajari dan diserap melalui proses belajar dalam masyarakat",
            C: "Hanya berlaku dalam lingkungan formal",
            D: "Tidak membutuhkan peran masyarakat"
        },
        correctAnswer: "B"
    },
    {
        id: 10,
        question: "Ciri nilai sosial yang berkaitan satu sama lain dan membentuk sistem nilai menunjukkan bahwa…",
        answers: {
            A: "Nilai sosial tidak memiliki hubungan dengan nilai lainnya",
            B: "Nilai-nilai sosial dalam masyarakat saling terhubung dan membentuk pola yang teratur",
            C: "Setiap nilai sosial berlaku secara terpisah tanpa pengaruh nilai lainnya",
            D: "Sistem nilai tidak penting dalam kehidupan masyarakat"
        },
        correctAnswer: "B"
    },
    {
        id: 11,
        question: "Nilai dominan dalam masyarakat sering kali ditentukan oleh berbagai faktor. Salah satu faktor yang paling berpengaruh adalah:",
        answers: {
            A: "Ketidakpastian ekonomi",
            B: "Banyaknya penganut nilai tersebut",
            C: "Pengaruh media sosial",
            D: "Keberagaman budaya"
        },
        correctAnswer: "B"
    },
    {
        id: 12,
        question: "Sebuah tradisi yang telah berlangsung lama dalam masyarakat biasanya mencerminkan nilai dominan. Contoh dari tradisi ini adalah:",
        answers: {
            A: "Penolakan terhadap perubahan",
            B: "Perayaan tahun baru",
            C: "Pelaksanaan ritual keagamaan",
            D: "Pemilihan umum"
        },
        correctAnswer: "C"
    },
    {
        id: 13,
        question: "Nilai yang mendarah daging sering kali berasal dari:",
        answers: {
            A: "Proses pendidikan formal",
            B: "Pengalaman traumatis",
            C: "Keteladanan dari lingkungan sekitar",
            D: "Tekanan sosial"
        },
        correctAnswer: "C"
    },
    {
        id: 14,
        question: "Norma yang mengatur perilaku masyarakat dengan sanksi yang bersifat formal dan tertulis biasanya disebut:",
        answers: {
            A: "Norma sosial",
            B: "Norma nonformal",
            C: "Norma hukum",
            D: "Norma kesopanan"
        },
        correctAnswer: "C"
    },
    {
        id: 15,
        question: "Salah satu contoh norma nonformal yang sering berlaku dalam masyarakat adalah:",
        answers: {
            A: "Aturan perundang-undangan",
            B: "Etika dalam berkomunikasi",
            C: "Kebijakan publik",
            D: "Undang-undang hak asasi manusia"
        },
        correctAnswer: "B"
    },
    {
        id: 16,
        question: "Norma yang didasarkan pada nilai kejujuran dalam lingkungan sekolah dapat diilustrasikan dengan:",
        answers: {
            A: "Sanksi untuk pelanggaran hukum",
            B: "Larangan menyontek",
            C: "Kebiasaan mengerjakan tugas kelompok",
            D: "Aturan berpakaian siswa"
        },
        correctAnswer: "B"
    },
    {
        id: 17,
        question: "Norma agama memiliki karakteristik yang berbeda dari norma lainnya. Salah satu karakteristik tersebut adalah:",
        answers: {
            A: "Norma agama dapat diubah sesuai waktu",
            B: "Norma agama bersifat mutlak dan tidak tergantung pada konteks sosial",
            C: "Norma agama tidak memerlukan sanksi",
            D: "Norma agama hanya berlaku di tempat ibadah"
        },
        correctAnswer: "B"
    },
    {
        id: 18,
        question: "Dalam masyarakat, norma kesusilaan berfungsi untuk:",
        answers: {
            A: "Mengatur tata cara berpakaian",
            B: "Menentukan hukuman bagi pelanggar hukum",
            C: "Mengarahkan perilaku berdasarkan hati nurani",
            D: "Menetapkan aturan formal di lembaga pemerintah"
        },
        correctAnswer: "C"
    },
    {
        id: 19,
        question: "Contoh dari norma kebiasaan yang sering dijumpai dalam masyarakat adalah:",
        answers: {
            A: "Kewajiban membayar pajak",
            B: "Perayaan ulang tahun",
            C: "Aturan di tempat kerja",
            D: "Kebijakan pemerintah tentang pendidikan"
        },
        correctAnswer: "B"
    },
    {
        id: 20,
        question: "Sanksi dari norma hukum bersifat mengikat dan dapat mencakup:",
        answers: {
            A: "Penghargaan masyarakat",
            B: "Pemberian izin",
            C: "Denda atau hukuman penjara",
            D: "Dukungan sosial"
        },
        correctAnswer: "C"
    }
];


let currentQuestionIndex = 0;
export let scoreQuiz = 0;   // Variabel untuk menyimpan skor

const quizContainer = document.getElementById('quiz-container');

// Tampilkan soal
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const answers = Object.entries(question.answers).map(([key, value]) => 
        `<input type="radio" name="answer" value="${key}"> ${value}<br>`
    ).join('');

    quizContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <div>${answers}</div>
    `;
}

// Kirim jawaban
document.getElementById('submit-button').addEventListener('click', function () {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestionIndex].correctAnswer) {
            scoreQuiz += 10; // Menambahkan 10 poin untuk jawaban yang benar
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    } else {
        alert("Silakan pilih jawaban sebelum melanjutkan.");
    }
});

// Menampilkan hasil
function displayResult() {
    quizContainer.innerHTML = `
    <h2>Skor Anda: ${scoreQuiz} </h2>
    <button id="nextBtn">Kembali ke Pesos</button>
    `;

    document.getElementById('nextBtn').addEventListener('click', function () {
        window.location.href = "Peta Sosiologi-kalteng.html";
    });
    // Variabel skor dapat diakses di sini
    console.log("Skor akhir:", scoreQuiz); // Hasil skor yang disimpan dapat dilihat di konsol
}

// Menampilkan soal pertama saat halaman dimuat
displayQuestion();

// QUIZ END //

// Drag n Drop Game Start //
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
    window.location.href = "https://www.example.com"; // Ganti dengan URL halaman tujuan
}

// Drag n Drop Game End //
