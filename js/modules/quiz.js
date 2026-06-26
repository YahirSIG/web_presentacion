export function initQuiz() {
    const quizData = [
        {
            question: "¿Qué significan las siglas CSIyG?",
            options: [
                "Centro de Sistemas Informáticos y Geología",
                "Coordinación de Sistemas de Información y Geografía",
                "Comité de Servicios de Infraestructura y Gestión",
                "Coordinación de Satélites de Información y Geometría"
            ],
            correct: 1
        },
        {
            question: "¿Cuál es la función principal de la Plataforma SIGETUX?",
            options: [
                "Vender terrenos en la ciudad",
                "Acceso centralizado a capas temáticas de planeación urbana",
                "Crear redes sociales para ciudadanos",
                "Administrar el transporte público"
            ],
            correct: 1
        },
        {
            question: "¿Qué geoportal sirve para verificar si un terreno es apto frente a inundaciones y fallas?",
            options: [
                "VISOP Tuxtla",
                "Información Económica",
                "No Compres Riesgos",
                "Uso de Suelo"
            ],
            correct: 2
        },
        {
            question: "Ciencia que obtiene mediciones fiables a partir de fotografías e imágenes digitales:",
            options: [
                "Fotogrametría",
                "Topografía",
                "Astronomía",
                "Cartografía"
            ],
            correct: 0
        },
        {
            question: "¿Qué es el GNSS?",
            options: [
                "Un tipo de dron de alta velocidad",
                "Un sistema de navegación por satélite para geolocalización precisa",
                "Un programa de diseño 3D",
                "Una técnica de dibujo de mapas"
            ],
            correct: 1
        },
        {
            question: "¿Qué técnica satelital ofrece precisión centimétrica?",
            options: [
                "MDE",
                "GPS estándar",
                "RTK",
                "Radar"
            ],
            correct: 2
        },
        {
            question: "Es el primer producto resultante del escaneo láser y paso previo a modelos 3D:",
            options: [
                "Ortofoto",
                "Nube de puntos",
                "Plano arquitectónico",
                "Fotografía satelital"
            ],
            correct: 1
        },
        {
            question: "¿Qué permite apreciar un MDE (Modelo Digital de Elevaciones)?",
            options: [
                "Las formas del relieve y valores de altura respecto al nivel del mar",
                "El clima de una región",
                "El tráfico vehicular",
                "La densidad de población"
            ],
            correct: 0
        },
        {
            question: "Presentación fotográfica sin errores ni deformaciones, con validez de plano cartográfico:",
            options: [
                "Mapa conceptual",
                "Croquis",
                "Ortofoto",
                "Render"
            ],
            correct: 2
        },
        {
            question: "¿Qué equipos utilizamos principalmente para el levantamiento de información en campo?",
            options: [
                "Lupas y brújulas",
                "Cintas métricas y libretas",
                "Receptores GNSS, Drones (UAV) y Tabletas",
                "Telescopios y radares"
            ],
            correct: 2
        }
    ];

    let currentQuestion = 0;
    let score = 0;
    const quizContainer = document.getElementById('quiz-container');

    window.loadQuiz = function() {
        if (!quizContainer) return;
        
        if (currentQuestion >= quizData.length) {
            window.showResults();
            return;
        }

        const q = quizData[currentQuestion];
        const progress = (currentQuestion / quizData.length) * 100;

        let html = `
            <div class="quiz-progress">
                <div class="quiz-progress-bar" style="width: ${progress}%"></div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-4">
                <span class="text-muted small fw-bold text-uppercase tracking-wider">Pregunta ${currentQuestion + 1} de ${quizData.length}</span>
                <span class="badge bg-slate text-white px-3 py-2">Puntaje: ${score}</span>
            </div>
            <h4 class="fw-bold mb-4" style="line-height:1.5;">${q.question}</h4>
            <div class="options-container">
        `;

        q.options.forEach((opt, index) => {
            html += `<button class="quiz-option" onclick="checkAnswer(${index})">${opt}</button>`;
        });

        html += `</div>`;
        quizContainer.innerHTML = html;
    };

    window.checkAnswer = function(selectedIndex) {
        const q = quizData[currentQuestion];
        const options = document.querySelectorAll('.quiz-option');
        
        options.forEach(opt => opt.disabled = true);

        if (selectedIndex === q.correct) {
            options[selectedIndex].classList.add('correct');
            options[selectedIndex].innerHTML += ' <i class="fa-solid fa-check-circle float-end mt-1"></i>';
            score++;
        } else {
            options[selectedIndex].classList.add('incorrect');
            options[selectedIndex].innerHTML += ' <i class="fa-solid fa-times-circle float-end mt-1"></i>';
            options[q.correct].classList.add('correct');
            options[q.correct].innerHTML += ' <i class="fa-solid fa-check-circle float-end mt-1"></i>';
        }

        setTimeout(() => {
            currentQuestion++;
            window.loadQuiz();
        }, 1500);
    };

    window.showResults = function() {
        let message = "";
        let icon = "";
        if (score === 10) {
            message = "¡Excelente! Eres un experto en Sistemas de Información Geográfica.";
            icon = '<i class="fa-solid fa-trophy text-warning fa-4x mb-4"></i>';
        } else if (score >= 7) {
            message = "¡Muy bien! Tienes un gran conocimiento sobre nuestro trabajo.";
            icon = '<i class="fa-solid fa-medal text-primary fa-4x mb-4"></i>';
        } else {
            message = "¡Buen intento! Te invitamos a repasar un poco más sobre nuestros geoportales.";
            icon = '<i class="fa-solid fa-thumbs-up text-success fa-4x mb-4"></i>';
        }

        quizContainer.innerHTML = `
            <div class="text-center py-4">
                ${icon}
                <h3 class="fw-bold mb-3">Tu puntuación: ${score} de ${quizData.length}</h3>
                <p class="text-muted mb-4">${message}</p>
                <button class="btn btn-custom" onclick="restartQuiz()"><i class="fa-solid fa-rotate-right me-2"></i>Volver a intentar</button>
            </div>
        `;
    };

    window.restartQuiz = function() {
        currentQuestion = 0;
        score = 0;
        window.loadQuiz();
    };

    if(quizContainer) {
        window.loadQuiz();
    }
}
