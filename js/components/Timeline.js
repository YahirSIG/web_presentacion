class AppTimeline extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="lenguaje" class="section-padding bg-light-slate">
                <div class="container">
                    <div class="text-center mb-5 reveal-up">
                        <h2 class="section-title">Nuestro Lenguaje Básico</h2>
                        <p class="subtitle">Conceptos y productos fundamentales en nuestro flujo de trabajo</p>
                    </div>

                    <div class="timeline">

                        <!-- Step 1 -->
                        <div class="timeline-item left reveal-up" style="--delay: 0.1s">
                            <div class="timeline-content">
                                <div class="timeline-img-placeholder p-0">
                                    <img src="assets/lenguaje_basico/fotogrametria.png" alt="Fotogrametría" class="w-100 h-100"
                                        style="object-fit:cover;">
                                </div>
                                <div class="text-start">
                                    <div class="d-flex align-items-center gap-3 mb-2 flex-row-reverse">
                                        <span class="timeline-step">01</span>
                                        <h4 class="timeline-title mb-0">Fotogrametría</h4>
                                    </div>
                                    <p class="timeline-text">Ciencia consistente en obtener mediciones fiables a partir de
                                        fotografías e imágenes digitales.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Step 2 -->
                        <div class="timeline-item right reveal-up" style="--delay: 0.2s">
                            <div class="timeline-content">
                                <div class="timeline-img-placeholder p-0">
                                    <img src="assets/lenguaje_basico/gnss.png" alt="GNSS" class="w-100 h-100"
                                        style="object-fit:cover;">
                                </div>
                                <div class="text-start">
                                    <div class="d-flex align-items-center gap-3 mb-2">
                                        <span class="timeline-step">02</span>
                                        <h4 class="timeline-title mb-0">GNSS</h4>
                                    </div>
                                    <p class="timeline-text">Sistema de navegación por satélite que transmite información de
                                        geolocalización precisa.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Step 3 -->
                        <div class="timeline-item left reveal-up" style="--delay: 0.3s">
                            <div class="timeline-content">
                                <div class="timeline-img-placeholder p-0">
                                    <img src="assets/lenguaje_basico/RTK.png" alt="RTK" class="w-100 h-100"
                                        style="object-fit:cover;">
                                </div>
                                <div class="text-start">
                                    <div class="d-flex align-items-center gap-3 mb-2 flex-row-reverse">
                                        <span class="timeline-step">03</span>
                                        <h4 class="timeline-title mb-0">RTK</h4>
                                    </div>
                                    <p class="timeline-text">Técnica de posicionamiento satelital con precisión centimétrica.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Step 4 -->
                        <div class="timeline-item right reveal-up" style="--delay: 0.4s">
                            <div class="timeline-content">
                                <div class="timeline-img-placeholder p-0">
                                    <img src="assets/lenguaje_basico/nube_de_puntos.png" alt="Nube de puntos"
                                        class="w-100 h-100" style="object-fit:cover;">
                                </div>
                                <div class="text-start">
                                    <div class="d-flex align-items-center gap-3 mb-2">
                                        <span class="timeline-step">04</span>
                                        <h4 class="timeline-title mb-0">Nube de puntos</h4>
                                    </div>
                                    <p class="timeline-text">Es el primer producto resultante del escaneo láser o la
                                        fotogrametría digital y el paso previo a la creación de modelos 3D.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Step 5 -->
                        <div class="timeline-item left reveal-up" style="--delay: 0.5s">
                            <div class="timeline-content">
                                <div class="timeline-img-placeholder p-0">
                                    <img src="assets/lenguaje_basico/mde.png" alt="MDE" class="w-100 h-100"
                                        style="object-fit:cover;">
                                </div>
                                <div class="text-start">
                                    <div class="d-flex align-items-center gap-3 mb-2 flex-row-reverse">
                                        <span class="timeline-step">05</span>
                                        <h4 class="timeline-title mb-0">MDE</h4>
                                    </div>
                                    <p class="timeline-text">Representación visual y matemática de los valores de altura con
                                        respecto al nivel medio del mar. Permite apreciar las características, formas del
                                        relieve y los elementos u objetos presentes en el mismo.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Step 6 -->
                        <div class="timeline-item right reveal-up" style="--delay: 0.6s">
                            <div class="timeline-content">
                                <div class="timeline-img-placeholder p-0">
                                    <img src="assets/lenguaje_basico/ortofoto.png" alt="Ortofoto" class="w-100 h-100"
                                        style="object-fit:cover;">
                                </div>
                                <div class="text-start">
                                    <div class="d-flex align-items-center gap-3 mb-2">
                                        <span class="timeline-step">06</span>
                                        <h4 class="timeline-title mb-0">Ortofoto</h4>
                                    </div>
                                    <p class="timeline-text">Presentación fotográfica de una zona en la superficie terrestre,
                                        donde todos los elementos presentan la misma escala, libre de errores y deformaciones,
                                        con la misma validez de un plano cartográfico.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Step 7 -->
                        <div class="timeline-item left reveal-up" style="--delay: 0.7s">
                            <div class="timeline-content">
                                <div class="timeline-img-placeholder p-0">
                                    <img src="assets/lenguaje_basico/sig.png" alt="SIG" class="w-100 h-100"
                                        style="object-fit:cover;">
                                </div>
                                <div class="text-start">
                                    <div class="d-flex align-items-center gap-3 mb-2 flex-row-reverse">
                                        <span class="timeline-step">07</span>
                                        <h4 class="timeline-title mb-0">SIG</h4>
                                    </div>
                                    <p class="timeline-text">Sistemas de Información Geográfica: Herramientas tecnológicas
                                        diseñadas para capturar, almacenar, manipular, analizar y desplegar información
                                        georreferenciada.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Step 8 -->
                        <div class="timeline-item right reveal-up" style="--delay: 0.8s">
                            <div class="timeline-content">
                                <div class="timeline-img-placeholder">
                                    <i class="fa-solid fa-map fs-3"></i>
                                </div>
                                <div class="text-start">
                                    <div class="d-flex align-items-center gap-3 mb-2">
                                        <span class="timeline-step">08</span>
                                        <h4 class="timeline-title mb-0">Cartografía</h4>
                                    </div>
                                    <p class="timeline-text">Ciencia, arte y tecnología que se encarga del estudio y la
                                        elaboración de mapas geográficos, territoriales y de diferentes dimensiones a escala
                                        espacial.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Step 9 -->
                        <div class="timeline-item left reveal-up" style="--delay: 0.9s">
                            <div class="timeline-content">
                                <div class="timeline-img-placeholder">
                                    <i class="fa-solid fa-code fs-3"></i>
                                </div>
                                <div class="text-start">
                                    <div class="d-flex align-items-center gap-3 mb-2 flex-row-reverse">
                                        <span class="timeline-step">09</span>
                                        <h4 class="timeline-title mb-0">Programación de Alto Nivel</h4>
                                    </div>
                                    <p class="timeline-text">Uso de lenguajes como Python, JavaScript o SQL para automatizar
                                        procesos geoespaciales, desarrollar aplicaciones y analizar grandes volúmenes de datos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Step 10 -->
                        <div class="timeline-item right reveal-up" style="--delay: 1.0s">
                            <div class="timeline-content">
                                <div class="timeline-img-placeholder">
                                    <i class="fa-solid fa-server fs-3"></i>
                                </div>
                                <div class="text-start">
                                    <div class="d-flex align-items-center gap-3 mb-2">
                                        <span class="timeline-step">10</span>
                                        <h4 class="timeline-title mb-0">DevOps</h4>
                                    </div>
                                    <p class="timeline-text">Conjunto de prácticas que integran el desarrollo de software y las
                                        operaciones de TI, garantizando un despliegue continuo, estabilidad y alto rendimiento
                                        en las aplicaciones geoespaciales e infraestructuras de servidores.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('app-timeline', AppTimeline);
