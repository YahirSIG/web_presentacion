class AppHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="hero d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 hero-content reveal-up">
                            <div class="badge-accent mb-3"><i class="fa-solid fa-earth-americas"></i> ICIPLAM Tuxtla Gutiérrez
                            </div>
                            <h1 class="display-1 fw-black text-uppercase">
                                Transformando el <span class="text-primary-accent">Territorio</span> con <span
                                    class="text-secondary-accent">Datos</span>.
                            </h1>
                            <p class="lead mt-4 col-md-10">
                                Somos la <strong>Coordinación de Sistemas de Información y Geografía (CSIyG)</strong>.
                                Integramos análisis espacial y estadística para una mejor toma de decisiones en el desarrollo
                                urbano.
                            </p>
                            <div class="mt-4 d-flex align-items-center gap-4 flex-wrap">
                                <a href="#funciones" class="btn btn-custom">Descubre lo que hacemos <i
                                        class="fa-solid fa-arrow-down ms-2"></i></a>
                                <div
                                    class="d-flex align-items-center gap-3 bg-dark-slate p-2 rounded-3 border border-secondary border-opacity-25 shadow-sm">
                                    <img src="assets/qr_presentación.png" alt="QR Presentación"
                                        style="width: 5rem; height: 5rem; object-fit: contain; background: white; border-radius: 0.3125rem; padding: 0.3125rem;">
                                    <div class="text-start">
                                        <small class="text-mustard fw-bold d-block" style="font-size: 0.85rem;">Sigue la
                                            presentación</small>
                                        <small class="text-white opacity-75" style="font-size: 0.8rem;">Escanea este
                                            código</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-lg-4 d-flex justify-content-center align-items-center position-relative reveal-scale mt-5 mt-lg-0">
                            <div class="logo-showcase">
                                <img src="assets/csiyg.png" alt="CSIyG Logo" class="csiyg-hero-logo img-fluid">
                                <div class="floating-circle circle-1"></div>
                                <div class="floating-circle circle-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('app-hero', AppHero);
