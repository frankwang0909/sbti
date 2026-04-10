/**
 * SBTI Test Logic - Language Aware
 */
import { QUESTIONS, SBTI_TYPES, UI_STRINGS } from './data.js';

let currentQuestionIndex = 0;
let userScores = {};
const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';

// Initialize scores
Object.keys(SBTI_TYPES).forEach(type => {
    userScores[type] = 0;
});

const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');

const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

// Start Quiz
startBtn.addEventListener('click', () => {
    showScreen(quizScreen);
    loadQuestion();
});

// Restart Quiz
restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    Object.keys(userScores).forEach(type => {
        userScores[type] = 0;
    });
    showScreen(welcomeScreen);
});

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function loadQuestion() {
    const question = QUESTIONS[currentQuestionIndex];
    questionText.textContent = question.text[currentLang];
    optionsContainer.innerHTML = '';

    // Update progress
    const progress = (currentQuestionIndex / QUESTIONS.length) * 100;
    progressBar.style.width = `${progress}%`;

    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-option';
        btn.textContent = option.text[currentLang];
        btn.addEventListener('click', () => handleAnswer(option.type));
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(type) {
    userScores[type] = (userScores[type] || 0) + 1;
    currentQuestionIndex++;

    if (currentQuestionIndex < QUESTIONS.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    progressBar.style.width = '100%';

    // Determine the highest score
    let maxScore = -1;
    let resultTypeKey = 'MALOU'; // Default

    Object.entries(userScores).forEach(([type, score]) => {
        if (score > maxScore) {
            maxScore = score;
            resultTypeKey = type;
        }
    });

    const result = SBTI_TYPES[resultTypeKey];
    const ui = UI_STRINGS[currentLang];

    // Update result UI
    document.getElementById('result-icon').textContent = result.icon;
    document.getElementById('result-id').textContent = `TYPE: ${result.id}`;
    document.getElementById('result-name').textContent = result.name[currentLang];
    document.getElementById('result-mbti').textContent = `${ui.result.match_mbti}${result.mbti_match}`;
    document.getElementById('result-desc').textContent = result.description[currentLang];
    document.getElementById('result-persona').textContent = result.persona[currentLang];

    const traitsContainer = document.getElementById('traits-container');
    traitsContainer.innerHTML = '';
    result.traits[currentLang].forEach(trait => {
        const span = document.createElement('span');
        span.className = 'trait-tag';
        span.textContent = trait;
        traitsContainer.appendChild(span);
    });

    // Color theme change for result
    document.querySelector('.result-card').style.borderColor = result.color;
    document.getElementById('result-name').style.color = result.color;

    // Setup share button
    setupShare(result, ui);

    showScreen(resultScreen);
}

function setupShare(result, ui) {
    const typeName = result.name[currentLang];
    const shareText = currentLang === 'zh'
        ? `我做了 SBTI 灵魂确诊，结果是【${typeName}】${result.icon}\n你也来测测你的真实精神状态 👇`
        : `I took the SBTI Soul Test — I'm "${typeName}" ${result.icon}\nCome diagnose your soul 👇`;
    const shareUrl = window.location.href;
    const originalLabel = shareBtn.textContent;

    updateSocialShareLinks(shareText, shareUrl);
    shareBtn.onclick = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: currentLang === 'zh' ? 'SBTI 灵魂确诊' : 'SBTI Soul Test',
                    text: shareText,
                    url: shareUrl
                });
            } catch (e) { /* User cancelled */ }
        } else {
            try {
                await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
                shareBtn.textContent = currentLang === 'zh' ? '✅ 链接已复制！' : '✅ Link Copied!';
                setTimeout(() => { shareBtn.textContent = originalLabel; }, 2500);
            } catch (e) {
                // Final fallback: prompt
                window.prompt(currentLang === 'zh' ? '复制链接：' : 'Copy link:', shareUrl);
            }
        }
    };
}

function updateSocialShareLinks(shareText, shareUrl) {
    const encoded = encodeURIComponent(`${shareText}\n${shareUrl}`);
    const urlOnly = encodeURIComponent(shareUrl);
    const textOnly = encodeURIComponent(shareText);

    const twitterBtn = document.getElementById('twitter-share');
    const facebookBtn = document.getElementById('facebook-share');

    if (twitterBtn) {
        twitterBtn.href = `https://twitter.com/intent/tweet?text=${textOnly}&url=${urlOnly}`;
    }
    if (facebookBtn) {
        facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${urlOnly}&quote=${textOnly}`;
    }
}
