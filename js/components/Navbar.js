class AppNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar py-4">
                <div class="container d-flex justify-content-between align-items-center">
                    <div class="logos-container d-flex align-items-center gap-3 gap-md-4 flex-wrap">
                        <img src="assets/ayuntamiento-logovertical-color.png" alt="Ayuntamiento Logo"
                            class="brand-logo ayto-logo">
                        <div class="divider"></div>
                        <img src="assets/logo_iciplam.png" alt="ICIPLAM Logo" class="brand-logo iciplam-logo">
                        <div class="divider d-none d-md-block"></div>
                        <img src="assets/logo_sigetux.webp" alt="SIGETUX Logo" class="brand-logo sigetux-logo"
                            style="max-height: 55px; object-fit: contain;">
                    </div>
                </div>
            </nav>
        `;
    }
}
customElements.define('app-navbar', AppNavbar);
