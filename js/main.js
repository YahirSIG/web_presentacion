import { initAnimations } from './modules/animations.js';
import { initTeamModal } from './modules/teamModal.js';
import { initQuiz } from './modules/quiz.js';

// Web Components
import './components/Navbar.js';
import './components/Hero.js';
import './components/Functions.js';
import './components/Team.js';
import './components/DataCollection.js';
import './components/Timeline.js';
import './components/Ecosystem.js';
import './components/QuizSection.js';
import './components/Footer.js';

// Game logic
import './game.js';

document.addEventListener("DOMContentLoaded", () => {
    initAnimations();
    initTeamModal();
    initQuiz();
});
