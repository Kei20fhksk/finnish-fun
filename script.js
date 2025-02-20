// Show/hide sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// Reading Comprehension Quiz
function checkQuiz() {
    const answers = {
        q1: 'Lassi',
        q2: 'Kissan',
        q3: 'Ei',
        q4: 'Sinulla on vettä.',
        q5: 'Kyllä'
    };
    let score = 0;
    for (let i = 1; i <= 5; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === answers[`q${i}`]) {
            score++;
        }
    }
    document.getElementById('quizResult').innerText = `You got ${score}/5! Hyvin tehty!`;
}

// Translation Tool
const finnishWords = [
    { finnish: 'Minulla on nälkä', english: 'I’m hungry' },
    { finnish: 'Missä sinä olet?', english: 'Where are you?' },
    { finnish: 'Hän juo maitoa', english: 'He/she drinks milk' },
    { finnish: 'Haluan mennä', english: 'I want to go' },
    { finnish: 'Nähdään huomenna', english: 'See you tomorrow' }
];
const englishWords = [
    { english: 'Do you have a cat?', finnish: 'Onko sinulla kissa?' },
    { english: 'I like ice cream', finnish: 'Minä tykkään jäätelöstä' },
    { english: 'What is your name?', finnish: 'Mikä on sinun nimesi?' },
    { english: 'We are happy', finnish: 'Me olemme iloisia' },
    { english: 'No, thank you', finnish: 'Ei, kiitos' }
];

let finnishIndex = 0;
let englishIndex = 0;

function nextFinnishWord() {
    document.getElementById('finnishWord').innerText = finnishWords[finnishIndex].finnish;
    document.getElementById('finnishAnswer').value = '';
    document.getElementById('finnishResult').innerText = '';
    finnishIndex = (finnishIndex + 1) % finnishWords.length;
}

function nextEnglishWord() {
    document.getElementById('englishWord').innerText = englishWords[englishIndex].english;
    document.getElementById('englishAnswer').value = '';
    document.getElementById('englishResult').innerText = '';
    englishIndex = (englishIndex + 1) % englishWords.length;
}

function checkTranslation(type) {
    if (type === 'finnish') {
        const userAnswer = document.getElementById('finnishAnswer').value.trim().toLowerCase();
        const correctAnswer = finnishWords[finnishIndex === 0 ? finnishWords.length - 1 : finnishIndex - 1].english.toLowerCase();
        document.getElementById('finnishResult').innerText = userAnswer === correctAnswer ? 'Oikein!' : `Try again! It’s “${correctAnswer}”.`;
    } else {
        const userAnswer = document.getElementById('englishAnswer').value.trim().toLowerCase();
        const correctAnswer = englishWords[englishIndex === 0 ? englishWords.length - 1 : englishIndex - 1].finnish.toLowerCase();
        document.getElementById('englishResult').innerText = userAnswer === correctAnswer ? 'Oikein!' : `Try again! It’s “${correctAnswer}”.`;
    }
}

// Load initial words
nextFinnishWord();
nextEnglishWord();