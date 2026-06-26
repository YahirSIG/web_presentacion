class AppTeam extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="equipo" class="section-padding team-section">
                <div class="container">
                    <div class="text-center mb-5 reveal-up">
                        <h2 class="section-title">Nuestro Equipo</h2>
                        <p class="subtitle">Conoce a quienes integran la coordinación (CSIyG)</p>
                    </div>

                    <div class="org-chart">
                        <!-- Coordinador -->
                        <div class="org-node leader reveal-scale" style="--delay: 0.1s">
                            <div class="org-card" data-member="nelson">
                                <img src="assets/nelson.png" alt="Lic. Nelson Eduardo Ruiz Ibarra" class="org-avatar">
                                <div class="org-role">Coordinador</div>
                                <div class="org-name">Lic. Nelson Eduardo Ruiz Ibarra</div>
                                <div class="org-decor"></div>
                            </div>
                        </div>

                        <div class="org-connector"></div>

                        <!-- Equipo Subordinado -->
                        <div class="org-branch row justify-content-center">

                            <div class="col-lg-4 col-md-6 col-12 org-node mb-4 reveal-up" style="--delay: 0.2s">
                                <div class="org-card sub" data-member="daniel">
                                    <img src="assets/daniel.png" alt="Ing. Carlos Daniel Espinosa Montejo" class="org-avatar">
                                    <div class="org-role">Analista Técnico "B"</div>
                                    <div class="org-name">Ing. Carlos Daniel Espinosa Montejo</div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-12 org-node mb-4 reveal-up" style="--delay: 0.3s">
                                <div class="org-card sub" data-member="mauricio">
                                    <img src="assets/mauricio.png" alt="Ing. Sergio Mauricio Rivera Lara" class="org-avatar">
                                    <div class="org-role">Administrativo "B"</div>
                                    <div class="org-name">Ing. Sergio Mauricio Rivera Lara</div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-12 org-node mb-4 reveal-up" style="--delay: 0.4s">
                                <div class="org-card sub" data-member="yahir">
                                    <img src="assets/yahir.png" alt="Ing. Carlos Yahir Fuentes Morales" class="org-avatar">
                                    <div class="org-role">Analista Técnico "B"</div>
                                    <div class="org-name">Ing. Carlos Yahir Fuentes Morales</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('app-team', AppTeam);
