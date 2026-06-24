document.addEventListener("DOMContentLoaded", () => {
    
    // Intersection Observer for Scroll Animations
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-scale');
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Semblanza Modal Logic
    const teamData = {
        nelson: {
            name: "Lic. Nelson Eduardo Ruiz Ibarra",
            role: "Coordinador",
            avatar: "assets/nelson.png",
            bio: `
                <p><strong>Licenciado en Informática y Especialista en Manejo de Sistemas de Información Geográfica</strong> egresado de la Universidad Autónoma de Chiapas C-I (UNACH).</p>
                <p>Amplio conocimiento en el manejo de herramientas SIGs, procesos de fotogrametría y realización de vuelos con dron. He participado en la impartición de diferentes talleres de UNIX, ArcInfo, AutoCAD Map, ArcGIS, QGIS. Siete años de experiencia en INEGI en la generación de cartografía y marco geoestadístico para diferentes censos de población, económicos y agropecuarios.</p>
                <p>Actualmente desempeño el cargo de Coordinador de Sistemas de Información y Geografía del Instituto Ciudadano de Planeación para el Desarrollo Sustentable del Ayuntamiento de Tuxtla Gutiérrez, responsable del desarrollo del Sistema de Información y Geografía del municipio de Tuxtla Gutiérrez (SIGETUX), participación activa en la generación de cartografía temática en el ámbito territorial para la generación de propuestas para la solución de problemáticas locales, responsable de la construcción y mantenimiento de la base geoespacial de los programas de ordenamiento territorial vigentes.</p>
            `
        },
        daniel: {
            name: "Ing. Carlos Daniel Espinosa Montejo",
            role: 'Analista Técnico "B"',
            avatar: "assets/daniel.png",
            bio: `
                <p>Carlos Daniel Espinosa Montejo, de 26 años de edad, originario del municipio de Suchiapa, Chiapas, y residente actualmente en la colonia Rivera Nandayalú, es Ingeniero en Geomática egresado de la Universidad de Ciencias y Artes de Chiapas (UNICACH), donde cursó sus estudios durante el periodo 2017–2021, concluyendo formalmente en el año 2023.</p>
                <p>Cuenta con más de cinco años de experiencia profesional en el ámbito de la geomática, cartografía, sistemas de información geográfica (SIG), levantamientos topográficos y análisis territorial, desempeñándose dentro del Instituto Ciudadano de Planeación Municipal (ICIPLAM), donde ha ocupado los cargos de Analista Técnico B, Analista D y Administrativo E.</p>
                <p>A lo largo de su trayectoria profesional ha participado en diversas actividades relacionadas con el levantamiento y procesamiento de información geoespacial, destacando la realización de levantamientos topográficos y de datos en campo, integración de bases de datos geoespaciales, elaboración de cartografía temática, análisis y modelación espacial, así como la verificación y análisis de usos de suelo para proyectos de planeación urbana y ordenamiento territorial.</p>
                <p>Entre sus principales responsabilidades se encuentran la elaboración de cartografía temática para microcuencas hidrográficas urbanas, incluyendo análisis de equipamientos, uso de suelo, unidades económicas, condiciones de vialidades y riesgos; además de colaborar en proyectos de regulación de suelo y programas de planeación territorial impulsados por el gobierno municipal.</p>
                <p>Dentro de su experiencia técnica destaca su participación en el análisis multicriterio y modelación espacial de la Microcuenca Hidrográfica Urbana Pomarrosa, evaluando variables como pendiente, tipo de suelo y cobertura vegetal para la generación de información estratégica para la toma de decisiones.</p>
                <p>Ha complementado su formación profesional mediante diversos cursos y capacitaciones especializadas, entre los que destacan el Curso-Taller "Introducción a la Modelación Hidrológica de Cuencas con HEC-HMS", el Curso de Elaboración de Mapas Temáticos con Sistemas de Información Geográfica y el Curso de Manejo de Equipos GNSS Tersus. Asimismo, cursó el Diplomado Multidisciplinario en Herramientas para la Ingeniería en el año 2023.</p>
                <p>Posee experiencia en el manejo de software especializado como AutoCAD, CivilCAD, QGIS, ArcGIS, Tersus Geo Office, Agisoft Metashape y otras herramientas orientadas al procesamiento, análisis y representación de información geoespacial. Asimismo, cuenta con conocimientos en el uso de equipos topográficos y geodésicos, tales como receptores GNSS RTK, estaciones totales, drones para levantamientos fotogramétricos y niveles topográficos.</p>
                <p>Entre los proyectos relevantes en los que ha participado destacan la elaboración cartográfica del documento técnico denominado “Índice Multidimensional de Habitabilidad para determinar la Habitabilidad Urbana de Tuxtla Gutiérrez, Chiapas”; la ejecución del proyecto “Calles Compartidas: Calles de Encuentro en San Roque”; así como diversas actividades de capacitación y fortalecimiento institucional relacionadas con Sistemas de Información Geográfica, lenguaje incluyente y generación de información pública.</p>
                <p>Su formación académica, experiencia técnica y dominio de herramientas geoespaciales le han permitido desarrollar competencias en análisis territorial, cartografía digital, topografía, fotogrametría, gestión de información geográfica y apoyo técnico para la planeación urbana y el desarrollo territorial.</p>
            `
        },
        yahir: {
            name: "Ing. Carlos Yahir Fuentes Morales",
            role: 'Analista Técnico "B"',
            avatar: "assets/yahir.png",
            bio: `
                <p>Ingeniero en Geomática por la Universidad de Ciencias y Artes de Chiapas (UNICACH). Actualmente, se desempeña como Analista Técnico adscrito a la Coordinación de Sistemas de Información y Geografía (CSIyG) en el Instituto Ciudadano de Planeación Municipal para el Desarrollo Sustentable de Tuxtla Gutiérrez (ICIPLAM) y ejerce como docente en la carrera de Ingeniería Civil dentro de la Universidad de Ciencia y Tecnología Descartes.</p>
                <p>A lo largo de su trayectoria profesional, ha colaborado como consultor en proyectos de impacto territorial y urbano en el estado de Jalisco con empresas privadas, así como en iniciativas clave como el Inventario Forestal del Río Sabinal. Es especialista en análisis geoespacial mediante el uso de software SIG, levantamientos topográficos, fotogrametría, generación de cartografía temática, ortomosaicos y gemelos digitales a través de la operación de drones, así como en el procesamiento, análisis y tratamiento de datos LiDAR.</p>
                <p>En el ámbito tecnológico, destaca en el desarrollo web GIS para la creación de geoportales y mapas interactivos estrictamente responsivos y adaptables a cualquier dispositivo. Para ello, implementa arquitecturas modernas y herramientas de vanguardia que integran gestores de bases de datos relacionales y espaciales. Ha liderado iniciativas innovadoras, como el desarrollo de censos geoespaciales interactivos, la configuración de servicios WMS y la visualización de nubes de puntos en entornos web.</p>
                <p>Posee una fuerte vocación por la academia y la difusión científica. Además de su labor docente actual, ha impartido el curso de "Cartografía Digital Básica" para jóvenes tuxtlecos, cursos de introducción a los SIG en la Universidad Descartes y capacitación especializada en herramientas geoespaciales para alumnos de Ingeniería Civil de la UNACH. Su interés por compartir el conocimiento técnico lo ha llevado a participar en espacios de divulgación, como el programa radiofónico Geogente, abordando temas sobre inteligencia artificial y geoportales.</p>
                <p>Su enfoque autodidacta y su profundo interés en las Ciencias de la Tierra lo mantienen en constante especialización, buscando siempre optimizar los procesos técnicos y el procesamiento de imágenes satelitales para representar el territorio de manera precisa, eficiente y de alta utilidad para la toma de decisiones estratégicas en el ámbito urbano y ambiental.</p>
            `
        },
        mauricio: {
            name: "Ing. Sergio Mauricio Rivera Lara",
            role: 'Administrativo "B"',
            avatar: "assets/mauricio.png",
            bio: `
                <p>Profesional especializado en el desarrollo de software, con sólidos conocimientos en lenguajes de programación de alto nivel, administración de bases de datos, control y gestión de repositorios de código, así como en la implementación y administración de infraestructura en la nube mediante plataformas como Azure y AWS.</p>
                <p>A lo largo de su trayectoria profesional, ha participado en el análisis, diseño, desarrollo e implementación de sistemas de información orientados a atender necesidades específicas en distintos sectores, incluyendo áreas administrativas y turísticas. Su experiencia abarca el uso de tecnologías de desarrollo modernas, motores de bases de datos y la integración de soluciones de hardware para proyectos tecnológicos, incluyendo plataformas de prototipado electrónico como Arduino.</p>
                <p>Actualmente se desempeña en el Instituto Ciudadano de Planeación Municipal (ICIPLAM), dentro del área de Sistemas de Información Geográfica (SIG), donde participa en el mantenimiento, desarrollo y optimización de aplicaciones web geoespaciales. Asimismo, colabora en la administración de servidores, despliegue de servicios y gestión de infraestructura tecnológica, garantizando la disponibilidad, estabilidad y rendimiento de las aplicaciones institucionales mediante prácticas orientadas a DevOps.</p>
                <p>Cuenta además con experiencia en el manejo de Sistemas de Información Geográfica, publicación de cartografía digital, procesamiento de información geoespacial y generación de modelos digitales para la visualización y análisis territorial.</p>
            `
        }
    };

    const modal = new bootstrap.Modal(document.getElementById('semblanzaModal'));
    const modalAvatar = document.getElementById('modalAvatar');
    const modalName = document.getElementById('modalName');
    const modalRole = document.getElementById('modalRole');
    const modalBio = document.getElementById('modalBio');

    document.querySelectorAll('.org-card').forEach(card => {
        card.addEventListener('click', () => {
            const memberId = card.getAttribute('data-member');
            if (memberId && teamData[memberId]) {
                const data = teamData[memberId];
                modalAvatar.src = data.avatar;
                modalName.textContent = data.name;
                modalRole.textContent = data.role;
                modalBio.innerHTML = data.bio;
                modal.show();
            }
        });
    });

    // Quiz Logic
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
            showResults();
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
            loadQuiz();
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
        loadQuiz();
    };

    if(quizContainer) {
        loadQuiz();
    }

});
