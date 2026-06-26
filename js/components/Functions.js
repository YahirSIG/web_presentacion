class AppFunctions extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="funciones" class="section-padding functions-section">
                <div class="container">
                    <h2 class="section-title reveal-up">Nuestras atribuciones <span>(De acuerdo al decreto de creación del
                            instituto, Art. 26)</span></h2>
                    <div class="bento-grid mt-5">

                        <div class="bento-item bento-large bg-dark-slate reveal-up d-flex flex-column" style="--delay: 0.1s">
                            <div class="bento-icon"><i class="fa-solid fa-map-location-dot"></i></div>
                            <div class="pe-5">
                                <h3>Sistemas de Información</h3>
                                <p>Desarrollar e implementar los sistemas de información geográfica y estadística, para analizar
                                    y representar espacialmente la información del ICIPLAM.</p>
                            </div>
                            <div class="mt-auto pt-4 text-center">
                                <img src="assets/pmdu.png" alt="Sistemas de Información PMDU" class="img-fluid rounded-3 shadow"
                                    style="border: 1px solid rgba(255,255,255,0.1);">
                            </div>
                        </div>

                        <div class="bento-item bg-mustard text-dark reveal-up" style="--delay: 0.2s">
                            <div class="bento-icon"><i class="fa-solid fa-arrows-rotate"></i></div>
                            <h3>Actualización de Datos</h3>
                            <p>Coordinar la actualización de la información geográfica, estadística socioeconómica y de
                                desarrollo urbano.</p>
                        </div>

                        <div class="bento-item bg-light-slate reveal-up" style="--delay: 0.3s">
                            <div class="bento-icon"><i class="fa-solid fa-city"></i></div>
                            <h3>Carta Urbana</h3>
                            <p>Participar en la actualización de la carta urbana de Tuxtla Gutiérrez y en estudios del
                                territorio y medio ambiente.</p>
                        </div>

                        <div class="bento-item bg-dark reveal-up" style="--delay: 0.4s">
                            <div class="bento-icon text-mustard"><i class="fa-solid fa-server"></i></div>
                            <h3>Banco de Proyectos</h3>
                            <p>Integrar y administrar el banco de información geográfica y estadística para la toma de
                                decisiones del desarrollo sustentable.</p>
                        </div>

                        <div class="bento-item bento-wide bg-gradient-slate reveal-up" style="--delay: 0.5s">
                            <div
                                class="d-flex flex-column flex-md-row align-items-center align-items-md-start text-center text-md-start gap-4">
                                <div class="flex-shrink-0" style="font-size: 2.5rem; opacity: 0.8; color: var(--clr-mustard);">
                                    <i class="fa-solid fa-chart-line"></i>
                                </div>
                                <div>
                                    <h3>Asesoría e Indicadores</h3>
                                    <p>Asesorar en el diseño de investigación espacial y establecer sistemas de indicadores de
                                        gestión para evaluar el cumplimiento de políticas públicas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('app-functions', AppFunctions);
