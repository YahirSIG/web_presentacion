class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- Comments Section -->
            <section class="section-padding bg-light-slate text-center border-top border-secondary border-opacity-25">
                <div class="container reveal-up">
                    <h3 class="fw-bold mb-3">¿Qué te pareció la exposición?</h3>
                    <p class="text-muted mb-4">Tu opinión es muy importante para nosotros. Ayúdanos a mejorar dejándonos un comentario y tu puntuación.</p>
                    <a href="https://mau343.github.io/curso_qgis_2.0-main/comentarios_generales.html" target="_blank" rel="noopener noreferrer" class="btn btn-custom px-5 py-3 fs-5 fw-bold shadow-lg text-uppercase" style="border-radius: 50px; letter-spacing: 1px;">
                        <i class="fa-solid fa-comment-dots me-2"></i> Evaluar Presentación
                    </a>
                </div>
            </section>

            <footer class="footer py-5 text-center bg-dark text-white">
                <div class="container">
                    <img src="assets/csiyg.png" alt="CSIyG" width="80" class="mb-3 opacity-75">
                    <p>© 2026 Coordinación de Sistemas de Información y Geografía</p>
                    <p class="small text-muted">Instituto Ciudadano de Planeación Municipal | Tuxtla Gutiérrez</p>
                </div>
            </footer>
        `;
    }
}
customElements.define('app-footer', AppFooter);
