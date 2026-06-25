// Misión SIGETUX: Vuelo con Dron
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let isGameRunning = false;
    let isGameOver = false;
    let animationId;

    // Game variables
    let score = 0;
    let frames = 0;
    
    // Config
    const GRAVITY = 0.25;
    const JUMP = -6;
    const SPEED = 4;

    // Responsive Canvas dimensions
    let CW = canvas.width;
    let CH = canvas.height;

    // Resize handler
    function resizeCanvas() {
        const container = canvas.parentElement;
        if (container) {
            // Keep aspect ratio roughly 2:1 but fit container
            canvas.width = container.clientWidth;
            // Max height for mobile so it doesn't overflow vertically
            canvas.height = Math.min(container.clientWidth * 0.6, window.innerHeight * 0.7);
            CW = canvas.width;
            CH = canvas.height;
        }
    }
    window.addEventListener("resize", resizeCanvas);

    // Objects
    const drone = {
        x: 50,
        y: 150,
        radius: 15,
        velocity: 0,
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            // Rotar ligeramente según la velocidad
            ctx.rotate(Math.min(Math.PI / 4, Math.max(-Math.PI / 4, (this.velocity * 0.1))));
            
            // Dibujar Dron (emoji)
            ctx.font = "40px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("🚁", 0, 0);
            
            ctx.restore();
        },
        update() {
            this.velocity += GRAVITY;
            this.y += this.velocity;

            // Suelo / Techo colisiones
            if (this.y + this.radius >= CH) {
                this.y = CH - this.radius;
                gameOver();
            }
            if (this.y - this.radius <= 0) {
                this.y = this.radius;
                this.velocity = 0;
            }
        },
        jump() {
            this.velocity = JUMP;
        }
    };

    const obstacles = [];
    const pins = [];

    function drawBackground() {
        // Cielo
        const grad = ctx.createLinearGradient(0, 0, 0, CH);
        grad.addColorStop(0, "#87CEEB");
        grad.addColorStop(1, "#E0F6FF");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, CW, CH);

        // Suelo simulado
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(0, CH - 15, CW, 15);
        ctx.fillStyle = "#228B22";
        ctx.fillRect(0, CH - 20, CW, 5);
    }

    function spawnObstacle() {
        const minHeight = 50;
        const maxHeight = CH - 200;
        const height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        const gap = 150; // Espacio para pasar
        
        // Obstáculo inferior (Edificio)
        obstacles.push({
            x: CW,
            y: CH - height,
            w: 50,
            h: height,
            type: 'bottom'
        });

        // Obstáculo superior (Nube negra/antena)
        obstacles.push({
            x: CW,
            y: 0,
            w: 50,
            h: CH - height - gap,
            type: 'top'
        });

        // Pin de datos en medio
        pins.push({
            x: CW + 25,
            y: CH - height - (gap / 2),
            radius: 15,
            collected: false
        });
    }

    function updateObstaclesAndPins() {
        // Generar cada N frames dependiente del ancho
        const spawnRate = CW > 600 ? 100 : 80;
        if (frames % spawnRate === 0) {
            spawnObstacle();
        }

        for (let i = 0; i < obstacles.length; i++) {
            let obs = obstacles[i];
            obs.x -= SPEED;

            // Dibujar
            if (obs.type === 'bottom') {
                // Edificio
                ctx.fillStyle = "#4a4a4a";
                ctx.fillRect(obs.x, obs.y, obs.w, obs.h);
                // Ventanas
                ctx.fillStyle = "#FFD700";
                for (let wy = obs.y + 10; wy < CH; wy += 25) {
                    ctx.fillRect(obs.x + 10, wy, 10, 15);
                    ctx.fillRect(obs.x + 30, wy, 10, 15);
                }
            } else {
                // Obstáculo superior simulando nubes oscuras o estructura
                ctx.fillStyle = "#333";
                ctx.fillRect(obs.x + 15, obs.y, 20, obs.h);
                ctx.fillStyle = "#d9534f"; // Luz roja de antena
                ctx.fillRect(obs.x + 15, obs.y + obs.h - 10, 20, 10);
            }

            // Colisión (bounding box simple)
            if (
                drone.x + drone.radius > obs.x &&
                drone.x - drone.radius < obs.x + obs.w &&
                drone.y + drone.radius > obs.y &&
                drone.y - drone.radius < obs.y + obs.h
            ) {
                gameOver();
            }

            // Remover si salen de pantalla
            if (obs.x + obs.w < 0) {
                obstacles.splice(i, 1);
                i--;
            }
        }

        // Pines
        for (let i = 0; i < pins.length; i++) {
            let pin = pins[i];
            pin.x -= SPEED;

            if (!pin.collected) {
                // Dibujar pin
                ctx.font = "24px Arial";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("📍", pin.x, pin.y);

                // Colisión (Recolección)
                let dx = drone.x - pin.x;
                let dy = drone.y - pin.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < drone.radius + pin.radius) {
                    pin.collected = true;
                    score += 10;
                    
                    // Efecto visual rápido (cambiar color o sonido en el futuro)
                    document.getElementById("currentGameScore").innerText = score;
                }
            }

            if (pin.x + pin.radius < 0) {
                pins.splice(i, 1);
                i--;
            }
        }
    }

    function drawScore() {
        ctx.fillStyle = "#111";
        ctx.font = "bold 24px Arial";
        ctx.textAlign = "left";
        ctx.fillText(`Puntos: ${score}`, 20, 40);
    }

    function loop() {
        if (!isGameRunning) return;
        
        ctx.clearRect(0, 0, CW, CH);
        drawBackground();
        
        drone.update();
        drone.draw();
        
        updateObstaclesAndPins();
        drawScore();
        
        frames++;
        
        if (!isGameOver) {
            animationId = requestAnimationFrame(loop);
        }
    }

    function resetGame() {
        resizeCanvas();
        drone.y = CH / 2;
        drone.velocity = 0;
        obstacles.length = 0;
        pins.length = 0;
        score = 0;
        frames = 0;
        isGameOver = false;
        
        document.getElementById("currentGameScore").innerText = "0";
        document.getElementById("gameOverScreen").classList.add("d-none");
        document.getElementById("gameStartScreen").classList.add("d-none");
    }

    function gameOver() {
        isGameOver = true;
        isGameRunning = false;
        cancelAnimationFrame(animationId);
        
        const goScreen = document.getElementById("gameOverScreen");
        document.getElementById("finalScore").innerText = score;
        goScreen.classList.remove("d-none");
    }

    // Input handlers
    function handleInput(e) {
        // Prevent default for spacebar so page doesn't scroll
        if (e.type === "keydown" && e.code === "Space") {
            e.preventDefault();
        }
        
        // Solo actuar si es modal visible y teclas válidas
        if (e.type === "keydown" && e.code !== "Space" && e.code !== "ArrowUp") return;
        
        if (!isGameRunning && !isGameOver) {
            // Empezar juego ocultando el start screen (opcional si usan botón, pero buen atajo)
            isGameRunning = true;
            resetGame();
            loop();
        } else if (isGameRunning && !isGameOver) {
            drone.jump();
        } else if (isGameOver) {
            // Reiniciar con espacio
            isGameRunning = true;
            resetGame();
            loop();
        }
    }

    // Eventos de control
    canvas.addEventListener("touchstart", (e) => { e.preventDefault(); handleInput(e); }, {passive: false});
    canvas.addEventListener("mousedown", handleInput);
    
    // Importante: escuchar keydown solo cuando el modal esté abierto para no romper la web normal
    window.addEventListener("keydown", (e) => {
        const modalEl = document.getElementById('gameModal');
        if (modalEl && modalEl.classList.contains('show')) {
            handleInput(e);
        }
    });

    // Botones del DOM
    const btnStart = document.getElementById("btnStartGame");
    if(btnStart) {
        btnStart.addEventListener("click", () => {
            isGameRunning = true;
            resetGame();
            loop();
        });
    }

    const btnRestart = document.getElementById("btnRestartGame");
    if(btnRestart) {
        btnRestart.addEventListener("click", () => {
            isGameRunning = true;
            resetGame();
            loop();
        });
    }

    // Controlar modal de Bootstrap
    const gameModalEl = document.getElementById('gameModal');
    if (gameModalEl) {
        gameModalEl.addEventListener('shown.bs.modal', () => {
            resizeCanvas();
            drawBackground(); // Dibuja fondo inicial estático
            document.getElementById("gameStartScreen").classList.remove("d-none");
            document.getElementById("gameOverScreen").classList.add("d-none");
        });

        gameModalEl.addEventListener('hidden.bs.modal', () => {
            isGameRunning = false;
            isGameOver = false;
            cancelAnimationFrame(animationId);
        });
    }
});
