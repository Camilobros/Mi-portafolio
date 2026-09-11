function updateClock() {
            const clockEl = document.getElementById('digital-clock');
            if (!clockEl) return;
            const now = new Date();
            clockEl.textContent = now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        }
        setInterval(updateClock, 1000);
        updateClock();


        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        'ink-black': '#050507',
                        'ink-pure': '#000000',
                        'manga-paper': '#f6f6f2',
                        'screentone-gray': '#222227',
                        'screentone-light': '#deded8',
                        'blood-seal': '#b91c1c'
                    },
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
                        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
                        kanji: ['"Noto Serif JP"', 'serif'],
                        mono: ['"JetBrains Mono"', 'monospace'],
                        grotesk: ['"Space Grotesk"', 'sans-serif']
                    },
                    boxShadow: {
                        'manga-hard': '6px 6px 0px 0px #000000',
                        'manga-hard-lg': '10px 10px 0px 0px #000000',
                        'manga-hard-white': '5px 5px 0px 0px #ffffff',
                        'manga-float': '4px 4px 0px 0px #050507'
                    }
                }
            }
        }