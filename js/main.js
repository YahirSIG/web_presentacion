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
                <p><em>Información de semblanza en proceso de actualización.</em></p>
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

});
