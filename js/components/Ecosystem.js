class AppEcosystem extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- Video Explicativo SIGETUX -->
            <section id="video-sigetux" class="section-padding bg-dark text-white position-relative">
                <div class="container position-relative z-1">
                    <div class="text-center mb-5 reveal-up">
                        <h2 class="section-title text-white">¿Qué es el SIGETUX?</h2>
                        <p class="subtitle text-light opacity-75">Conoce nuestra plataforma integral en acción</p>
                    </div>

                    <div class="row justify-content-center reveal-up" style="--delay: 0.2s">
                        <div class="col-lg-10">
                            <div class="ratio ratio-16x9 shadow-lg rounded-4 overflow-hidden border border-secondary border-opacity-25"
                                style="background-color: #000;">
                                <video controls poster="assets/sigetux.png">
                                    <source src="assets/video_sigetux/1.mp4" type="video/mp4">
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Banco de Proyectos (Ecosistema SIGETUX) -->
            <section id="proyectos" class="section-padding bg-dark-slate">
                <div class="container">
                    <div class="text-center mb-5 reveal-up">
                        <h2 class="section-title text-white">Ecosistema SIGETUX</h2>
                        <p class="subtitle text-white-50">Banco de proyectos: Plataformas interactivas y geoportales</p>
                    </div>

                    <div class="row g-4">
                        <!-- Card 1 -->
                        <div class="col-lg-4 col-md-6 reveal-up" style="--delay: 0.1s">
                            <div class="eco-card h-100">
                                <div class="eco-img-wrapper">
                                    <img src="assets/sigetux.png" alt="Plataforma SIGETUX" class="eco-card-img">
                                    <span class="eco-badge">PLATAFORMA CENTRAL</span>
                                </div>
                                <div class="eco-body">
                                    <h4 class="eco-title">Plataforma SIGETUX</h4>
                                </div>
                            </div>
                        </div>

                        <!-- Card 2 -->
                        <div class="col-lg-4 col-md-6 reveal-up" style="--delay: 0.2s">
                            <div class="eco-card h-100">
                                <div class="eco-img-wrapper">
                                    <img src="assets/visop.png" alt="VISOP Tuxtla" class="eco-card-img">
                                    <span class="eco-badge">INFRAESTRUCTURA</span>
                                </div>
                                <div class="eco-body">
                                    <h4 class="eco-title">VISOP Tuxtla</h4>
                                </div>
                            </div>
                        </div>

                        <!-- Card 3 -->
                        <div class="col-lg-4 col-md-6 reveal-up" style="--delay: 0.3s">
                            <div class="eco-card h-100">
                                <div class="eco-img-wrapper">
                                    <img src="assets/economia.png" alt="Información Económica" class="eco-card-img">
                                    <span class="eco-badge">ECONOMÍA</span>
                                </div>
                                <div class="eco-body">
                                    <h4 class="eco-title">Información Económica</h4>
                                </div>
                            </div>
                        </div>

                        <!-- Card 4 -->
                        <div class="col-lg-4 col-md-6 reveal-up" style="--delay: 0.4s">
                            <div class="eco-card h-100">
                                <div class="eco-img-wrapper">
                                    <img src="assets/inventario_forestal.png" alt="Inventario de biodiversidad"
                                        class="eco-card-img">
                                    <span class="eco-badge">MEDIO AMBIENTE</span>
                                </div>
                                <div class="eco-body">
                                    <h4 class="eco-title">Inventario de biodiversidad</h4>
                                </div>
                            </div>
                        </div>

                        <!-- Card 5 -->
                        <div class="col-lg-4 col-md-6 reveal-up" style="--delay: 0.5s">
                            <div class="eco-card h-100">
                                <div class="eco-img-wrapper">
                                    <img src="assets/no_compres_riesgos.png" alt="No Compres Riesgos" class="eco-card-img">
                                    <span class="eco-badge">PROTECCIÓN CIVIL</span>
                                </div>
                                <div class="eco-body">
                                    <h4 class="eco-title">No Compres Riesgos</h4>
                                </div>
                            </div>
                        </div>

                        <!-- Card 6 -->
                        <div class="col-lg-4 col-md-6 reveal-up" style="--delay: 0.6s">
                            <div class="eco-card h-100">
                                <div class="eco-img-wrapper">
                                    <img src="assets/uso de suelo.png" alt="Uso de suelo" class="eco-card-img">
                                    <span class="eco-badge">CARTOGRAFÍA BÁSICA</span>
                                </div>
                                <div class="eco-body">
                                    <h4 class="eco-title">Uso de suelo</h4>
                                </div>
                            </div>
                        </div>

                        <!-- Card 7 -->
                        <div class="col-lg-4 col-md-6 reveal-up" style="--delay: 0.7s">
                            <div class="eco-card h-100">
                                <div class="eco-img-wrapper">
                                    <img src="assets/asentamientos.png" alt="Asentamientos" class="eco-card-img">
                                    <span class="eco-badge">CARTOGRAFÍA BÁSICA</span>
                                </div>
                                <div class="eco-body">
                                    <h4 class="eco-title">Asentamientos</h4>
                                </div>
                            </div>
                        </div>

                        <!-- Card 8 -->
                        <div class="col-lg-4 col-md-6 reveal-up" style="--delay: 0.8s">
                            <div class="eco-card h-100">
                                <div class="eco-img-wrapper">
                                    <img src="assets/centro_3d.png" alt="Centro" class="eco-card-img">
                                    <span class="eco-badge">CARTOGRAFÍA BÁSICA</span>
                                </div>
                                <div class="eco-body">
                                    <h4 class="eco-title">Centro</h4>
                                </div>
                            </div>
                        </div>

                        <!-- Card 9 -->
                        <div class="col-lg-4 col-md-6 reveal-up" style="--delay: 0.9s">
                            <div class="eco-card h-100">
                                <div class="eco-img-wrapper">
                                    <img src="assets/lidar.png" alt="LiDAR" class="eco-card-img">
                                    <span class="eco-badge" style="background-color: #d39e38; color: white;">MODELOS DIGITALES Y
                                        DATOS LIDAR</span>
                                </div>
                                <div class="eco-body">
                                    <h4 class="eco-title" style="color: #d39e38;">LiDAR</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Botón hacia SIGETUX Hub -->
                    <div class="row mt-5 pt-3 reveal-up" style="--delay: 0.2s">
                        <div class="col-12 text-center">
                            <a href="https://sigetux.tuxtla.gob.mx/sigetux-hub/" target="_blank" rel="noopener noreferrer"
                                class="btn btn-custom px-5 py-3 fs-5 fw-bold shadow-lg text-uppercase mb-3"
                                style="border-radius: 50px; letter-spacing: 1px;">
                                Visitar SIGETUX Hub <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                            </a>
                            <div class="mt-4">
                                <img src="assets/qr_hub.png" alt="Código QR SIGETUX Hub"
                                    class="img-fluid rounded-3 bg-white p-2 shadow-lg hover-scale transition-all"
                                    style="max-width: 150px;">
                                <p class="mt-3 text-white-50">Escanea el código QR o da clic en el botón para explorar la
                                    plataforma central</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <!-- Tecnologías Ecosistema -->
            <section id="tecnologias" class="section-padding bg-white overflow-hidden">
                <div class="container">
                    <div class="text-center mb-5 reveal-up">
                        <h2 class="section-title">Tecnologías utilizadas dentro de nuestro Ecosistema SIGETUX</h2>
                        <p class="subtitle text-muted">Herramientas, lenguajes y frameworks que potencian nuestras plataformas
                        </p>
                    </div>
                </div>

                <div class="marquee-container reveal-up" style="--delay: 0.2s">
                    <div class="marquee-content">
                        <!-- Group 1 -->
                        <img src="assets/icons/GeoServer_500.png" alt="GeoServer" class="tech-icon" title="GeoServer">
                        <img src="assets/icons/devicon--python.png" alt="Python" class="tech-icon" title="Python">
                        <img src="assets/icons/devicon--fastapi.png" alt="FastAPI" class="tech-icon" title="FastAPI">
                        <img src="assets/icons/devicon--postgresql-wordmark.png" alt="PostgreSQL" class="tech-icon"
                            title="PostgreSQL">
                        <img src="assets/icons/qgis-icon_anita02.png" alt="QGIS" class="tech-icon" title="QGIS">
                        <img src="assets/icons/material-icon-theme--react-ts.png" alt="React TS" class="tech-icon"
                            title="React TS">
                        <img src="assets/icons/devicon--tailwindcss.png" alt="TailwindCSS" class="tech-icon"
                            title="TailwindCSS">
                        <img src="assets/icons/vscode-icons--file-type-html.png" alt="HTML" class="tech-icon" title="HTML">
                        <img src="assets/icons/vscode-icons--file-type-js-official.png" alt="JavaScript" class="tech-icon"
                            title="JavaScript">
                        <img src="assets/icons/nonicons--css-16.png" alt="CSS" class="tech-icon" title="CSS">
                        <img src="assets/icons/material-icon-theme--git.png" alt="Git" class="tech-icon" title="Git">
                        <img src="assets/icons/mdi--github.png" alt="GitHub" class="tech-icon" title="GitHub">
                        <img src="assets/icons/material-icon-theme--vscode.png" alt="VS Code" class="tech-icon" title="VS Code">

                        <!-- Group 2 (Duplicate for infinite scroll) -->
                        <img src="assets/icons/GeoServer_500.png" alt="GeoServer" class="tech-icon" title="GeoServer">
                        <img src="assets/icons/devicon--python.png" alt="Python" class="tech-icon" title="Python">
                        <img src="assets/icons/devicon--fastapi.png" alt="FastAPI" class="tech-icon" title="FastAPI">
                        <img src="assets/icons/devicon--postgresql-wordmark.png" alt="PostgreSQL" class="tech-icon"
                            title="PostgreSQL">
                        <img src="assets/icons/qgis-icon_anita02.png" alt="QGIS" class="tech-icon" title="QGIS">
                        <img src="assets/icons/material-icon-theme--react-ts.png" alt="React TS" class="tech-icon"
                            title="React TS">
                        <img src="assets/icons/devicon--tailwindcss.png" alt="TailwindCSS" class="tech-icon"
                            title="TailwindCSS">
                        <img src="assets/icons/vscode-icons--file-type-html.png" alt="HTML" class="tech-icon" title="HTML">
                        <img src="assets/icons/vscode-icons--file-type-js-official.png" alt="JavaScript" class="tech-icon"
                            title="JavaScript">
                        <img src="assets/icons/nonicons--css-16.png" alt="CSS" class="tech-icon" title="CSS">
                        <img src="assets/icons/material-icon-theme--git.png" alt="Git" class="tech-icon" title="Git">
                        <img src="assets/icons/mdi--github.png" alt="GitHub" class="tech-icon" title="GitHub">
                        <img src="assets/icons/material-icon-theme--vscode.png" alt="VS Code" class="tech-icon" title="VS Code">
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('app-ecosystem', AppEcosystem);
