class AppDataCollection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="recoleccion" class="section-padding bg-white">
                <div class="container">
                    <div class="row align-items-center mb-5">
                        <div class="col-12 text-center reveal-up">
                            <div class="badge-accent mb-3"><i class="fa-solid fa-satellite-dish"></i> Trabajo de Campo</div>
                            <h2 class="section-title">Todo nace de la recolección de información</h2>
                            <p class="subtitle text-muted">El origen de nuestros datos para la toma de decisiones territoriales
                            </p>
                        </div>
                    </div>

                    <div class="row g-5 align-items-center">
                        <!-- Carousel -->
                        <div class="col-lg-6 reveal-up" style="--delay: 0.2s">
                            <div id="carouselCampo" class="carousel slide shadow-lg rounded-4 overflow-hidden"
                                data-bs-ride="carousel" data-bs-interval="4000">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="assets/levantamientos/1.png" class="d-block w-100"
                                            alt="Levantamiento en Campo">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/levantamientos/2.jpg" class="d-block w-100" alt="Vuelo Fotogramétrico">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/levantamientos/3.jpg" class="d-block w-100" alt="Mapeo y Topografía">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/levantamientos/4.jpeg" class="d-block w-100"
                                            alt="Levantamiento de Información">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/levantamientos/5.jpeg" class="d-block w-100"
                                            alt="Levantamiento de Información">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/levantamientos/6.jpeg" class="d-block w-100"
                                            alt="Levantamiento de Información">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/levantamientos/7.jpeg" class="d-block w-100"
                                            alt="Levantamiento de Información">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselCampo"
                                    data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Anterior</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselCampo"
                                    data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Siguiente</span>
                                </button>
                            </div>
                        </div>

                        <!-- Text Content -->
                        <div class="col-lg-6 reveal-up" style="--delay: 0.4s">
                            <div class="info-blocks ps-lg-4">

                                <div
                                    class="d-flex flex-column flex-sm-row align-items-center align-items-sm-start text-center text-sm-start mb-4">
                                    <div class="flex-shrink-0 me-sm-4 mb-3 mb-sm-0">
                                        <div class="icon-circle bg-mustard text-dark d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                                            style="width: 3.75rem; height: 3.75rem;">
                                            <i class="fa-solid fa-database fs-4"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 class="fw-bold mb-2">¿Qué levantamos?</h4>
                                        <p class="text-muted" style="line-height: 1.7;">Recopilamos información geoespacial
                                            precisa: atributos topológicos, censos urbanos, equipamiento, infraestructura
                                            pública, arbolado y datos socioeconómicos.</p>
                                    </div>
                                </div>

                                <div
                                    class="d-flex flex-column flex-sm-row align-items-center align-items-sm-start text-center text-sm-start mb-4">
                                    <div class="flex-shrink-0 me-sm-4 mb-3 mb-sm-0">
                                        <div class="icon-circle bg-dark-slate text-white d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                                            style="width: 3.75rem; height: 3.75rem;">
                                            <i class="fa-solid fa-route fs-4"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 class="fw-bold mb-2">¿Cómo lo hacemos?</h4>
                                        <p class="text-muted" style="line-height: 1.7;">A través de recorridos sistemáticos,
                                            levantamientos topográficos, encuestas digitales móviles y captura aérea, asegurando
                                            la actualización del territorio en tiempo real.</p>
                                    </div>
                                </div>

                                <div
                                    class="d-flex flex-column flex-sm-row align-items-center align-items-sm-start text-center text-sm-start mb-4">
                                    <div class="flex-shrink-0 me-sm-4 mb-3 mb-sm-0">
                                        <div class="icon-circle bg-dark text-mustard d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                                            style="width: 3.75rem; height: 3.75rem;">
                                            <i class="fa-solid fa-satellite fs-4"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 class="fw-bold mb-2">Equipos y Tecnología</h4>
                                        <p class="text-muted" style="line-height: 1.7;">Utilizamos <strong>Receptores GNSS
                                                (GPS)</strong> de alta precisión, <strong>Drones (UAV)</strong> para cartografía
                                            aérea, y <strong>Tabletas de campo</strong> con software especializado para
                                            sincronización inmediata.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Caso Práctico: Arbolado -->
            <section id="caso-practico" class="section-padding bg-dark text-white position-relative">
                <div class="container position-relative z-1">
                    <div class="text-center mb-5 reveal-up">
                        <span class="badge bg-mustard text-dark mb-3 px-3 py-2 text-uppercase fw-bold"
                            style="letter-spacing: 1px;">Caso Práctico</span>
                        <h2 class="section-title text-white">De Campo al SIG: Inventario de Arbolado</h2>
                        <p class="subtitle text-light opacity-75">Un ejemplo real de cómo logramos la unión de todo el proceso
                            de levantamiento</p>
                    </div>

                    <div class="row g-4 position-relative justify-content-center">

                        <!-- Step 1 -->
                        <div class="col-lg-4 col-md-6 reveal-up" style="--delay: 0.1s">
                            <div class="card h-100 bg-dark-slate border-0 text-center p-4 shadow-lg"
                                style="border-radius: 15px; position: relative; z-index: 1;">
                                <div class="bg-mustard text-dark mx-auto mb-4 d-flex align-items-center justify-content-center shadow"
                                    style="width: 70px; height: 70px; border-radius: 50%; font-size: 1.5rem;">
                                    <i class="fa-solid fa-satellite"></i>
                                </div>
                                <h4 class="fw-bold text-white mb-3">1. GNSS</h4>
                                <p class="text-light opacity-75 mb-0" style="font-size: 0.95rem;">Levantamiento puntual de cada
                                    árbol con precisión centimétrica para obtener su coordenada exacta en campo.</p>
                            </div>
                        </div>

                        <!-- Step 2 -->
                        <div class="col-lg-4 col-md-6 reveal-up" style="--delay: 0.2s">
                            <div class="card h-100 bg-dark-slate border-0 text-center p-4 shadow-lg"
                                style="border-radius: 15px; position: relative; z-index: 1;">
                                <div class="bg-slate text-white mx-auto mb-4 d-flex align-items-center justify-content-center shadow"
                                    style="width: 70px; height: 70px; border-radius: 50%; font-size: 1.5rem;">
                                    <i class="fa-solid fa-mobile-screen-button"></i>
                                </div>
                                <h4 class="fw-bold text-white mb-3">2. Fotografía</h4>
                                <p class="text-light opacity-75 mb-0" style="font-size: 0.95rem;">Registro fotográfico en campo
                                    con teléfono celular, asociando la imagen directamente a la coordenada levantada.</p>
                            </div>
                        </div>

                        <!-- Step 3 -->
                        <div class="col-lg-4 col-md-6 reveal-up" style="--delay: 0.3s">
                            <div class="card h-100 bg-dark-slate border-0 text-center p-4 shadow-lg"
                                style="border-radius: 15px; position: relative; z-index: 1;">
                                <div class="bg-mustard text-dark mx-auto mb-4 d-flex align-items-center justify-content-center shadow"
                                    style="width: 70px; height: 70px; border-radius: 50%; font-size: 1.5rem;">
                                    <i class="fa-solid fa-leaf"></i>
                                </div>
                                <h4 class="fw-bold text-white mb-3">3. Datos Cualitativos</h4>
                                <p class="text-light opacity-75 mb-0" style="font-size: 0.95rem;">El Biól. Diego Cordero
                                    recopila de forma asincrónica información vital: especie, estado de salud y dimensiones.</p>
                            </div>
                        </div>

                        <!-- Step 4 -->
                        <div class="col-lg-4 col-md-6 reveal-up" style="--delay: 0.4s">
                            <div class="card h-100 bg-dark-slate border-0 text-center p-4 shadow-lg"
                                style="border-radius: 15px; position: relative; z-index: 1;">
                                <div class="bg-slate text-white mx-auto mb-4 d-flex align-items-center justify-content-center shadow"
                                    style="width: 70px; height: 70px; border-radius: 50%; font-size: 1.5rem;">
                                    <i class="fa-solid fa-object-group"></i>
                                </div>
                                <h4 class="fw-bold text-white mb-3">4. Integración SIG (Join)</h4>
                                <p class="text-light opacity-75 mb-0" style="font-size: 0.95rem;">En gabinete, se ingresa todo
                                    al SIG y se hace un <strong>Join</strong> entre la información cualitativa tabular y la
                                    geometría espacial.</p>
                            </div>
                        </div>

                        <!-- Step 5 -->
                        <div class="col-lg-4 col-md-6 reveal-up" style="--delay: 0.5s">
                            <div class="card h-100 bg-dark-slate border-0 text-center p-4 shadow-lg"
                                style="border-radius: 15px; position: relative; z-index: 1;">
                                <div class="bg-mustard text-dark mx-auto mb-4 d-flex align-items-center justify-content-center shadow"
                                    style="width: 70px; height: 70px; border-radius: 50%; font-size: 1.5rem;">
                                    <i class="fa-solid fa-map"></i>
                                </div>
                                <h4 class="fw-bold text-white mb-3">5. Cartografía</h4>
                                <p class="text-light opacity-75 mb-0" style="font-size: 0.95rem;">Generación de mapas de calor,
                                    unidades vegetales exóticas y nativas, así como tableros de control (dashboards).</p>
                            </div>
                        </div>

                        <!-- Step 6 -->
                        <div class="col-lg-4 col-md-6 reveal-up" style="--delay: 0.6s">
                            <div class="card h-100 bg-dark-slate border-0 text-center p-4 shadow-lg"
                                style="border-radius: 15px; position: relative; z-index: 1;">
                                <div class="bg-white text-dark mx-auto mb-4 d-flex align-items-center justify-content-center shadow"
                                    style="width: 70px; height: 70px; border-radius: 50%; font-size: 1.5rem;">
                                    <i class="fa-solid fa-earth-americas"></i>
                                </div>
                                <h4 class="fw-bold text-white mb-3">6. Geoportales Interactivos</h4>
                                <p class="text-light opacity-75 mb-0" style="font-size: 0.95rem;">Carga y despliegue de los
                                    resultados en plataformas web interactivas tras el tratamiento y análisis final de la
                                    información.</p>
                            </div>
                        </div>

                    </div>

                    <!-- Galería de Fotos del Inventario -->
                    <div class="row justify-content-center mt-5 pt-4 reveal-up" style="--delay: 0.7s">
                        <div class="col-lg-10">
                            <div class="text-center mb-4">
                                <h4 class="text-mustard fw-bold"><i class="fa-solid fa-camera-retro me-2"></i>Galería: Trabajo
                                    en campo</h4>
                            </div>
                            <div id="carouselInventario"
                                class="carousel slide carousel-fade shadow-lg rounded-4 overflow-hidden border border-secondary border-opacity-25"
                                data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselInventario" data-bs-slide-to="0"
                                        class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselInventario" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselInventario" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselInventario" data-bs-slide-to="3"
                                        aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselInventario" data-bs-slide-to="4"
                                        aria-label="Slide 5"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="3000"
                                        style="background-color: #111827;">
                                        <img src="assets/del_campo_al_sig/1.jpeg" class="d-block w-100" alt="Levantamiento 1"
                                            style="height: 500px; object-fit: contain;">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="3000" style="background-color: #111827;">
                                        <img src="assets/del_campo_al_sig/2.jpeg" class="d-block w-100" alt="Levantamiento 2"
                                            style="height: 500px; object-fit: contain;">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="3000" style="background-color: #111827;">
                                        <img src="assets/del_campo_al_sig/3.jpeg" class="d-block w-100" alt="Levantamiento 3"
                                            style="height: 500px; object-fit: contain;">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="3000" style="background-color: #111827;">
                                        <img src="assets/del_campo_al_sig/4.jpeg" class="d-block w-100" alt="Levantamiento 4"
                                            style="height: 500px; object-fit: contain;">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="3000" style="background-color: #111827;">
                                        <img src="assets/del_campo_al_sig/5.jpeg" class="d-block w-100" alt="Levantamiento 5"
                                            style="height: 500px; object-fit: contain;">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselInventario"
                                    data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Anterior</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselInventario"
                                    data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Siguiente</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        `;
    }
}
customElements.define('app-data-collection', AppDataCollection);
