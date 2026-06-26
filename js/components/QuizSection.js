class AppQuiz extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- Quiz Section -->
            <section id="quiz" class="section-padding" style="background-color: var(--clr-mustard);">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center reveal-up">
                            <h2 class="section-title text-dark">¡Pon a prueba tus conocimientos!</h2>
                            <p class="subtitle text-dark opacity-75">Demuestra lo que has aprendido sobre nuestro trabajo en
                                este breve quiz interactivo.</p>

                            <div class="card shadow-lg border-0 rounded-4 mt-5 text-start overflow-hidden">
                                <div class="card-body p-4 p-md-5 bg-white" id="quiz-container">
                                    <!-- Quiz content injected via JS -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define('app-quiz', AppQuiz);
