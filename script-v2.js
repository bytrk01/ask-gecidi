/* ==========================================================================
   INTERACTIVE SYSTEM ENGINE: "Nisasu & Hüseyinsu - Sonsuz Aşk Geçidi"
   Aesthetics: Deeply Literary Romantic Turkish, Custom Canvas Star Hunt, Analog Clock Face.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // POEMS ENGINE: 5 Independent Classic Turkish Love Poem Pools (Disjoint & Zero Repetitions)
    // ==========================================================================
    const masterPoemsPools = {
        '1': [
            {
                lines: ["Sana en güzel çiçekleri derledim,", "Sevginin en saf, en derin haliyle.", "Sen benim gecemi aydınlatan şafaksın,", "Ömrüme ömür katan o güzel gülüşünle."],
                author: "Özdemir Asaf"
            },
            {
                lines: ["Gözlerin gözlerime değdiğinde,", "Eylülün tüm kederi dağılır gider.", "Sen benim hayat baharımsın bir tanem,", "Seninle geçen her an bir ömre bedel."],
                author: "Cemal Süreya"
            },
            {
                lines: ["Tahir olmak da ayıp değil Zühre olmak da", "Hattâ sevda yüzünden ölmek de ayıp değil,", "Bütün iş Tahirle Zühre olabilmekte", "Yani yürekte."],
                author: "Nâzım Hikmet"
            },
            {
                lines: ["Seninle olmak güzel şey bir tanem,", "Bir şiirin en naif mısrası gibi.", "Gök kubbede parıldayan en asil yıldızsın,", "Ruhumun en tatlı, en ebedi sesi."],
                author: "Cahit Külebi"
            },
            {
                lines: ["Ne içindeyim zamanın,", "Ne de büsbütün dışında;", "Yekpare, geniş bir anın", "Parçalanmaz akışında."],
                author: "Ahmet Hamdi Tanpınar"
            }
        ],
        '2': [
            {
                lines: ["Ben sana mecburum bilemezsin", "Adını mıh gibi aklımda tutuyorum", "Büyüdükçe büyüyor gözlerin", "Ben sana mecburum bilemezsin."],
                author: "Attilâ İlhan"
            },
            {
                lines: ["Böylece bir kere daha boynunlayız", "Biliyoruz ama söyleyemiyoruz", "Sıcak ve büyülü bir rüzgâr esiyor", "Ömrümüzün en güzel mısralarındayız"],
                author: "Cemal Süreya"
            },
            {
                lines: ["Bende hiç tükenmez bir hayat vardı", "Kırlara yayılan ilkbahar gibi", "Şimdi kalbimde bir telaş başladı", "Sana kavuştuğum o ilk gün gibi."],
                author: "Sabahattin Ali"
            },
            {
                lines: ["Maviye, maviye çalar gözlerin,", "Yangın mavisine.", "Ruhumun en derin, en gizli köşesinde,", "Senin o güzel aşkın parıldar bir tanem."],
                author: "Ahmed Arif"
            },
            {
                lines: ["Bir gün gelir de unutulur her şey,", "Ama senin o eşsiz sevgin asla.", "Sen benim bu fani dünyadaki cennetim,", "Geleceğe uzanan en güzel rüyam."],
                author: "Ümit Yaşar Oğuzcan"
            }
        ],
        '3': [
            {
                lines: ["İkimiz birden sevinebiliriz göğe bakalım", "Şu kaçamak ışıklardan şu şeker kamışlarından", "Durmadan harcadığımız şu gözlerimizi alalım", "İkimiz birden göğe bakalım."],
                author: "Turgut Uyar"
            },
            {
                lines: ["Ayışığında oturduk", "Bileklerini öptüm senin", "Sonra ayakta öptüm", "Dudağından öptüm seni."],
                author: "Cemal Süreya"
            },
            {
                lines: ["Çocuklar balkondan bakar hayata,", "Sevgiyle ve masum bir umutla.", "Bizim aşkımız da öyle saf bir tanem,", "Gök kubbenin altında en şairane adımla."],
                author: "Sezai Karakoç"
            },
            {
                lines: ["Ağlasam sesimi duyar mısınız,", "Mısralarımda;", "Dokunabilir misiniz,", "Gözyaşlarıma, ellerinizle?"],
                author: "Orhan Veli Kanık"
            },
            {
                lines: ["Vurma kazmayı ferhad", "Benim gönlümün dağları var", "Seni arar bu yollarda", "Aşkınla yanan ruhum bir tanem."],
                author: "Asaf Hâlet Çelebi"
            }
        ],
        '4': [
            {
                lines: ["Sana gitme demeyeceğim.", "Üşüyorsun ceketimi al.", "Günün en güzel saatleri bunlar.", "Yanımda kal, Lavinia."],
                author: "Özdemir Asaf"
            },
            {
                lines: ["Desem ki vakitlerden bir Nisan akşamıdır,", "Rüzgarların en ferahlatıcısı senden esiyor,", "Sende seyrediyorum denizlerin en mavisini,", "Ormanların en kuytu yeşilini."],
                author: "Cahit Sıtkı Tarancı"
            },
            {
                lines: ["Karadutum, çatal karam, çingenem", "Nar tanem, nur tanem, bir tanem", "Gönül fısıldar sevda üstüne", "Ruhum senin aşkınla mühürlenmiş."],
                author: "Bedri Rahmi Eyüboğlu"
            },
            {
                lines: ["Sen o karanfile eğilimlisin, alıp sana veriyorum işte", "Sen de bir başkasına veriyorsun daha güzel", "O başkası yok mu bir yanındakine veriyor", "Derken karanfil elden ele."],
                author: "Edip Cansever"
            },
            {
                lines: ["Mona Roza. Siyah güller, ak güller.", "Geyve'nin gülleri ve beyaz yatak.", "Kanadı kırık kuş merhamet ister.", "Ah senin yüzünden kana batacak."],
                author: "Sezai Karakoç"
            }
        ],
        '5': [
            {
                lines: ["Sen benim ömrümün en güzel mısrası,", "Kelimelerle tarif edilemeyen aşkımsın.", "Her oynanışta yeniden doğan sevgimizle,", "Sonsuza dek kalbimin tahtındasın."],
                author: "Özdemir Asaf"
            },
            {
                lines: ["Ben senin en çok gözlerini sevdim", "Kah kahkaha atan kah hüzünle bakan", "Ruhuma bir ömür ışık saçan", "Gönül tahtımın tek canı olan."],
                author: "Ümit Yaşar Oğuzcan"
            },
            {
                lines: ["Beni en güzel günümde", "Sebepsiz bir keder alır", "Ama senin o güzel tebessümünle", "Ruhumda ne dert kalır ne melankoli."],
                author: "Sabahattin Ali"
            },
            {
                lines: ["Seni anlatabilmek seni.", "İyi çocuklara, kahramanlara.", "Seni anlatabilmek seni,", "Ruhu temiz, yüreği asil canlara."],
                author: "Ahmed Arif"
            },
            {
                lines: ["Seninle geçen o güzel geceler,", "Ruhumun en derin yerinde yaşıyor bir tanem.", "Sen benim ömrümün en güzel mısrası,", "Hayatıma can katan o ebedi sesim."],
                author: "Cemal Süreya"
            }
        ]
    };

    let seenPoemsRegistry = {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
    };

    function loadSeenPoemsRegistry() {
        const stored = localStorage.getItem('seenPoemsRegistry');
        if (stored) {
            try {
                seenPoemsRegistry = JSON.parse(stored);
                // Ensure all keys exist
                ['1', '2', '3', '4', '5'].forEach(k => {
                    if (!seenPoemsRegistry[k]) seenPoemsRegistry[k] = [];
                });
            } catch (e) {
                console.error("Failed to parse seenPoemsRegistry:", e);
            }
        }
    }

    function saveSeenPoemsRegistry() {
        localStorage.setItem('seenPoemsRegistry', JSON.stringify(seenPoemsRegistry));
    }

    function populateTransitionPoems() {
        loadSeenPoemsRegistry();
        
        const targetIds = ['poem-gate-1', 'poem-gate-2', 'poem-gate-3', 'poem-gate-4', 'poem-gate-5'];
        
        targetIds.forEach((id, index) => {
            const gateKey = String(index + 1);
            const poemDiv = document.getElementById(id);
            if (!poemDiv) return;
            
            const pool = masterPoemsPools[gateKey];
            if (!pool || pool.length === 0) return;
            
            // Filter out seen indices
            let unseenIndices = pool.map((_, i) => i).filter(i => !seenPoemsRegistry[gateKey].includes(i));
            
            // If all seen, reset seen list for this pool
            if (unseenIndices.length === 0) {
                seenPoemsRegistry[gateKey] = [];
                unseenIndices = pool.map((_, i) => i);
            }
            
            // Select randomly from unseen
            const randomIdx = unseenIndices[Math.floor(Math.random() * unseenIndices.length)];
            
            // Add to seen
            seenPoemsRegistry[gateKey].push(randomIdx);
            
            // Inject to DOM
            const poem = pool[randomIdx];
            let html = '';
            poem.lines.forEach(line => {
                html += `<p class="poem-line">${line}</p>`;
            });
            html += `<span class="poem-author">— ${poem.author}</span>`;
            poemDiv.innerHTML = html;
        });
        
        saveSeenPoemsRegistry();
    }

    // ==========================================================================
    // 1. STAR MAP CANVAS BACKGROUND
    // ==========================================================================
    const bgCanvas = document.getElementById('bg-canvas');
    const bgCtx = bgCanvas ? bgCanvas.getContext('2d') : null;
    let stars = [];
    const maxStars = 100;

    function resizeBgCanvas() {
        if (!bgCanvas) return;
        bgCanvas.width = window.innerWidth;
        bgCanvas.height = window.innerHeight;
    }
    resizeBgCanvas();
    window.addEventListener('resize', resizeBgCanvas);

    class Star {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * (bgCanvas ? bgCanvas.width : 400);
            this.y = Math.random() * (bgCanvas ? bgCanvas.height : 800);
            this.size = Math.random() * 1.8;
            this.opacity = Math.random();
            this.speed = 0.15 + Math.random() * 0.25;
            this.blinkSpeed = 0.008 + Math.random() * 0.015;
            this.blinkDir = Math.random() > 0.5 ? 1 : -1;
        }
        update() {
            this.y -= this.speed;
            if (bgCanvas && this.y < 0) this.y = bgCanvas.height;
            this.opacity += this.blinkSpeed * this.blinkDir;
            if (this.opacity > 1) { this.opacity = 1; this.blinkDir = -1; }
            else if (this.opacity < 0.1) { this.opacity = 0.1; this.blinkDir = 1; }
        }
        draw() {
            if (!bgCtx) return;
            bgCtx.beginPath();
            bgCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            bgCtx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            bgCtx.shadowBlur = this.size * 2;
            bgCtx.shadowColor = '#ffd700';
            bgCtx.fill();
            bgCtx.shadowBlur = 0;
        }
    }

    for (let i = 0; i < maxStars; i++) stars.push(new Star());

    let sparks = [];
    class Spark {
        constructor(x, y, isBurst) {
            this.x = x; this.y = y;
            const mult = isBurst ? 3.6 : 1.5;
            this.size = isBurst ? (1.2 + Math.random() * 2.0) : (0.8 + Math.random() * 1.2);
            this.vx = (Math.random() - 0.5) * mult;
            this.vy = (Math.random() - 0.5) * mult - (isBurst ? 1.0 : 0); // slightly upward push for bursts!
            this.alpha = 1;
            this.decay = isBurst ? (0.012 + Math.random() * 0.012) : (0.02 + Math.random() * 0.02);
            const colors = ['#ffd700', '#ff2d7a', '#8a2be2', '#00ff87'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        update() { 
            this.x += this.vx; 
            this.y += this.vy; 
            this.vy += 0.04; // elegant stardust gravity physics!
            this.alpha -= this.decay; 
        }
        draw() {
            if (!bgCtx) return;
            bgCtx.beginPath();
            bgCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            bgCtx.fillStyle = this.color;
            bgCtx.globalAlpha = this.alpha;
            bgCtx.shadowBlur = 10;
            bgCtx.shadowColor = this.color;
            bgCtx.fill();
            bgCtx.shadowBlur = 0;
            bgCtx.globalAlpha = 1;
        }
    }

    // Global tap/click stardust splash triggers (super beautiful on mobile!)
    window.addEventListener('mousedown', (e) => {
        triggerSplash(e.clientX, e.clientY);
    });
    window.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) {
            triggerSplash(e.touches[0].clientX, e.touches[0].clientY);
        }
    });

    function triggerSplash(x, y) {
        for (let i = 0; i < 14; i++) {
            sparks.push(new Spark(x, y, true));
        }
    }

    window.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.85) sparks.push(new Spark(e.clientX, e.clientY, false));
    });
    window.addEventListener('touchmove', (e) => {
        if (Math.random() > 0.82 && e.touches[0])
            sparks.push(new Spark(e.touches[0].clientX, e.touches[0].clientY, false));
    });

    function animateBg() {
        if (!bgCtx || !bgCanvas) { requestAnimationFrame(animateBg); return; }
        bgCtx.fillStyle = '#070919';
        bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
        let gradient = bgCtx.createRadialGradient(bgCanvas.width/2, bgCanvas.height/2, 10, bgCanvas.width/2, bgCanvas.height/2, bgCanvas.width);
        gradient.addColorStop(0, 'rgba(20, 12, 44, 0.4)');
        gradient.addColorStop(1, 'rgba(7, 9, 25, 0)');
        bgCtx.fillStyle = gradient;
        bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
        stars.forEach(s => { s.update(); s.draw(); });
        sparks = sparks.filter(s => s.alpha > 0);
        sparks.forEach(s => { s.update(); s.draw(); });
        requestAnimationFrame(animateBg);
    }
    animateBg();

    // ==========================================================================
    // 2. PROCEDURAL WEB AUDIO SYNTHESIZER
    // ==========================================================================
    let audioCtx = null;
    
    // HTML Audio Background Music Controllers
    const bgAudio = document.getElementById('bg-audio');
    const musicToggle = document.getElementById('music-toggle');
    const musicToggleIcon = document.getElementById('music-toggle-icon');
    let isAudioMuted = false;

    function initAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
    }

    function playNote(midi, time, duration, volume) {
        if (!audioCtx) return;
        volume = volume || 0.05;
        try {
            const now = time;
            const freq = 440 * Math.pow(2, (midi - 69) / 12);
            
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now);
            
            gainNode.gain.setValueAtTime(volume, now);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);
            
            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            osc.start(now);
            osc.stop(now + duration);
        } catch(e) {}
    }

    // All background procedürel sound generators successfully removed to optimize speaker headroom and load the user's high-fidelity custom MP3.

    function playMagicalChimeSound() {
        if (!audioCtx) return;
        var now = audioCtx.currentTime;
        playNote(72, now, 0.15, 0.05);
        playNote(76, now + 0.08, 0.15, 0.05);
        playNote(79, now + 0.16, 0.15, 0.05);
        playNote(84, now + 0.24, 0.45, 0.08);
    }

    function playCardFlipSound() {
        if (!audioCtx) return;
        var now = audioCtx.currentTime;
        try {
            var osc = audioCtx.createOscillator();
            var gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.12);
            gain.gain.setValueAtTime(0.04, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.12);
        } catch(e) {}
    }

    function playBubblePopNegativeSound() {
        if (!audioCtx) return;
        var now = audioCtx.currentTime;
        playNote(48, now, 0.25, 0.06);
        playNote(43, now + 0.1, 0.35, 0.06);
    }

    function playBubblePopSuccessSound() {
        if (!audioCtx) return;
        var now = audioCtx.currentTime;
        try {
            var osc = audioCtx.createOscillator();
            var gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(400 + Math.random() * 200, now);
            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.08);
        } catch(e) {}
    }

    function playWaxSealBreakSound() {
        if (!audioCtx) return;
        var now = audioCtx.currentTime;
        try {
            var osc = audioCtx.createOscillator();
            var gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(80, now);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.2);
            
            playNote(78, now, 0.1, 0.05);
            playNote(82, now + 0.05, 0.15, 0.05);
        } catch(e) {}
    }

    function startBackgroundMusic() {
        if (!bgAudio) return;
        bgAudio.play().then(() => {
            if (musicToggle) musicToggle.classList.remove('hidden');
        }).catch(err => {
            console.log("Autoplay blocked, waiting for user click.", err);
        });
    }

    function stopBackgroundMusic() {
        if (!bgAudio) return;
        bgAudio.pause();
        bgAudio.currentTime = 0;
        if (musicToggle) musicToggle.classList.add('hidden');
    }

    if (musicToggle && bgAudio) {
        musicToggle.addEventListener('click', () => {
            isAudioMuted = !isAudioMuted;
            bgAudio.muted = isAudioMuted;
            if (musicToggleIcon) {
                if (isAudioMuted) {
                    musicToggleIcon.className = 'fa-solid fa-volume-xmark';
                    musicToggleIcon.style.color = 'var(--text-muted)';
                } else {
                    musicToggleIcon.className = 'fa-solid fa-volume-high';
                    musicToggleIcon.style.color = 'var(--gold)';
                }
            }
        });
    }

    // ==========================================================================
    // 3. OYUN 1: ANALOG AŞK SAATİ (GİRİŞ GEÇİDİ)
    // ==========================================================================
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const timeDisplay = document.getElementById('time-display');
    const keypadStatusMsg = document.getElementById('keypad-status-msg');
    const unlockBtn = document.getElementById('unlock-btn');

    // Controls
    const btnHourPrev = document.getElementById('btn-hour-prev');
    const btnHourNext = document.getElementById('btn-hour-next');
    const btnMinPrev = document.getElementById('btn-min-prev');
    const btnMinNext = document.getElementById('btn-min-next');
    const interactiveClock = document.getElementById('interactive-clock');

    const ampmToggle = document.getElementById('ampm-toggle');

    let currentHour = 10; // Start at 10:30 PM to let the user enjoy aligning it!
    let currentMin = 30;
    let isAM = false;
    let isClockUnlocked = false;

    function updateClockHands() {
        if (isClockUnlocked) return;

        // Formatted digital string
        const hString = String(currentHour).padStart(2, '0');
        const mString = String(currentMin).padStart(2, '0');
        if (timeDisplay) timeDisplay.textContent = `${hString}:${mString}`;

        if (ampmToggle) {
            ampmToggle.textContent = isAM ? 'Ö.Ö.' : 'Ö.S.';
            ampmToggle.classList.toggle('active-am', isAM);
        }

        // Angles
        // Hour hand: 30 degrees per hour + 0.5 degrees per minute
        const hrAngle = (currentHour % 12) * 30 + currentMin * 0.5;
        // Minute hand: 6 degrees per minute
        const minAngle = currentMin * 6;

        if (hourHand) hourHand.style.transform = `rotate(${hrAngle}deg)`;
        if (minuteHand) minuteHand.style.transform = `rotate(${minAngle}deg)`;

        checkClockAlignment();
    }

    function checkClockAlignment() {
        if (currentHour === 1 && currentMin === 0 && isAM === true) {
            // Unlocked!
            isClockUnlocked = true;
            if (keypadStatusMsg) {
                keypadStatusMsg.textContent = '✦ Zaman Hizalandı, Geçit Açık ✦';
                keypadStatusMsg.style.color = '#00ff87';
                keypadStatusMsg.style.textShadow = '0 0 10px #00ff87';
            }
            if (timeDisplay) {
                timeDisplay.style.color = '#00ff87';
                timeDisplay.style.textShadow = '0 0 15px #00ff87';
            }
            if (unlockBtn) {
                unlockBtn.classList.remove('disabled');
                unlockBtn.removeAttribute('disabled');
            }

            if (audioCtx) {
                playMagicalChimeSound();
            }
        } else {
            if (keypadStatusMsg) {
                keypadStatusMsg.textContent = 'Zamanı Akışına Bırak';
                keypadStatusMsg.style.color = 'var(--text-muted)';
                keypadStatusMsg.style.textShadow = 'none';
            }
            if (timeDisplay) {
                timeDisplay.style.color = 'var(--gold)';
                timeDisplay.style.textShadow = 'none';
            }
            if (unlockBtn) {
                unlockBtn.classList.add('disabled');
                unlockBtn.setAttribute('disabled', 'true');
            }
        }
    }

    if (ampmToggle) {
        ampmToggle.addEventListener('click', () => {
            if (isClockUnlocked) return;
            initAudio();
            isAM = !isAM;
            updateClockHands();
            if (audioCtx) playNote(70, audioCtx.currentTime, 0.12, 0.04);
        });
    }

    // Button controls click bindings with auto Ö.Ö. / Ö.S. toggle when crossing 12
    if (btnHourPrev) {
        btnHourPrev.addEventListener('click', () => {
            if (isClockUnlocked) return;
            initAudio();
            if (currentHour === 12) {
                isAM = !isAM;
            }
            currentHour = currentHour === 1 ? 12 : currentHour - 1;
            updateClockHands();
            if (audioCtx) playNote(58, audioCtx.currentTime, 0.1, 0.03);
        });
    }
    if (btnHourNext) {
        btnHourNext.addEventListener('click', () => {
            if (isClockUnlocked) return;
            initAudio();
            if (currentHour === 11) {
                isAM = !isAM;
            }
            currentHour = currentHour === 12 ? 1 : currentHour + 1;
            updateClockHands();
            if (audioCtx) playNote(62, audioCtx.currentTime, 0.1, 0.03);
        });
    }
    if (btnMinPrev) {
        btnMinPrev.addEventListener('click', () => {
            if (isClockUnlocked) return;
            initAudio();
            currentMin = (currentMin - 5 + 60) % 60;
            updateClockHands();
            if (audioCtx) playNote(65, audioCtx.currentTime, 0.08, 0.03);
        });
    }
    if (btnMinNext) {
        btnMinNext.addEventListener('click', () => {
            if (isClockUnlocked) return;
            initAudio();
            currentMin = (currentMin + 5) % 60;
            updateClockHands();
            if (audioCtx) playNote(69, audioCtx.currentTime, 0.08, 0.03);
        });
    }

    // Touch / Click Clock face directly to interact beautifully!
    if (interactiveClock) {
        const handleClockTap = (e) => {
            if (isClockUnlocked) return;
            e.preventDefault();
            initAudio();
            const rect = interactiveClock.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            
            // Calculate center
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = clientX - cx;
            const dy = clientY - cy;

            // Angle in degrees from 12 o'clock
            let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
            if (angle < 0) angle += 360;

            // Align closest hour (30 deg per hour)
            let hr = Math.round(angle / 30);
            if (hr === 0) hr = 12;
            if (hr > 12) hr -= 12;
            
            // If they clicked outer edge, adjust minutes, else adjust hour!
            const dist = Math.sqrt(dx*dx + dy*dy);
            const maxDist = rect.width / 2;
            
            if (dist > maxDist * 0.6) {
                // outer ring sets minutes in 5 min steps
                let mins = Math.round(angle / 6);
                if (mins >= 60) mins = 0;
                currentMin = Math.round(mins / 5) * 5;
                if (currentMin >= 60) currentMin = 0;
            } else {
                currentHour = hr;
            }
            
            updateClockHands();
            if (audioCtx) playNote(60 + currentHour, audioCtx.currentTime, 0.12, 0.04);
        };

        interactiveClock.addEventListener('mousedown', handleClockTap);
        interactiveClock.addEventListener('touchstart', handleClockTap, { passive: false });
    }

    // Initialize clock hands position
    updateClockHands();


    // ==========================================================================
    // 4. TAB NAVIGATION SYSTEM
    // ==========================================================================
    const navItems = document.querySelectorAll('.nav-item');
    const gateScreens = document.querySelectorAll('.gate-screen');
    let scratchInitialized = false;

    function switchGate(targetGateId) {
        const nextGate = document.getElementById(targetGateId);
        if (!nextGate) return;

        if (audioCtx) playNote(60, audioCtx.currentTime, 0.35, 0.04);

        // Hide all screens
        gateScreens.forEach(function(screen) {
            screen.classList.remove('active-gate');
            screen.classList.add('hidden-gate');
        });

        // Show target
        nextGate.classList.remove('hidden-gate');
        void nextGate.offsetWidth; // force repaint
        nextGate.classList.add('active-gate');

        // Update tab highlight
        navItems.forEach(function(item) {
            item.classList.toggle('active', item.getAttribute('data-gate') === targetGateId);
        });

        // Short gate transitions play sweet bell effects without interrupting background music

        // Game trigger checks!
        if (targetGateId === 'gate-compat' && !retroGameActive && retroProgress < 100) {
            initRetroGame();
        }
        if (targetGateId === 'gate-stars') {
            initStarsCanvasGame();
        }
        if (targetGateId === 'gate-scratch' && !scratchInitialized) {
            // Match game handles scratch lazy initialization after matching cards!
        }
    }

    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            if (item.classList.contains('disabled')) return;
            switchGate(item.getAttribute('data-gate'));
        });
    });

    // In-card navigation buttons
    document.querySelectorAll('.nav-to-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (btn.classList.contains('disabled')) return;
            var target = btn.getAttribute('data-target-gate');
            if (!target) return;
            var tab = document.querySelector('.nav-item[data-gate="' + target + '"]');
            if (tab && !tab.classList.contains('disabled')) {
                switchGate(target);
            }
        });
    });

    // Unlock button
    if (unlockBtn) {
        unlockBtn.addEventListener('click', function() {
            if (audioCtx) {
                var now = audioCtx.currentTime;
                playNote(60, now, 0.4, 0.05);
                playNote(64, now + 0.1, 0.4, 0.05);
                playNote(67, now + 0.2, 0.4, 0.05);
                playNote(72, now + 0.3, 1.2, 0.08);
            }

            // Unlock all tabs
            var iconMap = {
                'nav-btn-compat':  { icon: 'fa-solid fa-heart',    iconId: 'nav-icon-compat' },
                'nav-btn-stars':   { icon: 'fa-solid fa-star',     iconId: 'nav-icon-stars' },
                'nav-btn-scratch': { icon: 'fa-solid fa-gift',     iconId: 'nav-icon-scratch' },
                'nav-btn-letter':  { icon: 'fa-solid fa-envelope', iconId: 'nav-icon-letter' }
            };

            Object.keys(iconMap).forEach(function(tabId) {
                var tab = document.getElementById(tabId);
                if (tab) {
                    tab.classList.remove('disabled');
                    tab.removeAttribute('disabled');
                }
                var iconEl = document.getElementById(iconMap[tabId].iconId);
                if (iconEl) iconEl.className = iconMap[tabId].icon;
            });

            startBackgroundMusic();
            switchGate('gate-compat');
        });
    }

    // ==========================================================================
    // 5. OYUN 2: EDEBİ RUHLARIN İMTİZACI (KELİME AVCISI)
    // ==========================================================================
    var retroCanvas = null;
    var retroCtx = null;
    var retroGameActive = false;
    var retroProgress = 0;
    var retroList = [];
    var retroExplosions = [];
    var isRetroSpawning = false;

    // Master pool of highly elegant romantic literary Turkish words (No personal/girl names, authors or "saat")
    const masterPositiveWords = [
        'GÜNEŞİM', 'NEFESİM', 'CANIMIN İÇİ', 'GÖZÜMÜN NURU', 'GÖNÜL ŞARKIM', 
        'RUHUMUN EŞİ', 'BAHARIM', 'GÜLÜŞÜN', 'BAHTIM', 'ASİL RUHUM', 
        'HUZURUM', 'GÖKYÜZÜM', 'TEK AŞKIM', 'BİR TANEM', 'RUH ORTAĞIM', 
        'CÂNÂNIM', 'NURUM', 'TILSIMIM', 'BİRTANECİĞİM', 'NAZLI YARİM', 
        'GÖNÜL DOSTUM', 'SOL YANIM', 'KALBİMİN SAHİBİ', 'GÜLÜŞÜ GÜZELİM', 
        'NUR YÜZLÜM', 'ÖMRÜMÜN BAHARI', 'EN DEĞERLİM'
    ];
    let activePositivePool = [];

    function initRetroGame() {
        retroCanvas = document.getElementById('retro-canvas');
        if (!retroCanvas) return;
        retroCtx = retroCanvas.getContext('2d');
        if (!retroCtx) return;

        var rect = retroCanvas.parentElement.getBoundingClientRect();
        retroCanvas.width = rect.width || 300;
        retroCanvas.height = 150;

        retroProgress = 0;
        retroList = [];
        retroExplosions = [];
        activePositivePool = [...masterPositiveWords];
        retroGameActive = true;
        updateRetroProgress();

        document.getElementById('compat-game-view').classList.remove('hidden');
        document.getElementById('compat-reward-view').classList.add('hidden');

        animateRetroGame();

        if (!isRetroSpawning) {
            isRetroSpawning = true;
            spawnRetrograde();
        }

        retroCanvas.addEventListener('mousedown', handleRetroTap);
        retroCanvas.addEventListener('touchstart', handleRetroTap, { passive: false });
    }

    function spawnRetrograde() {
        if (!retroGameActive) { isRetroSpawning = false; return; }

        const isNegative = Math.random() < 0.35;
        
        // Poetic, mild friction clouds
        const negativeWords = ['MESAFELER', 'SOĞUKLUK', 'KAYGI', 'KIRGINLIK', 'GÖLGE BULUTU', 'HÜZÜN', 'YALNIZLIK'];

        let text = '';
        if (isNegative) {
            text = negativeWords[Math.floor(Math.random() * negativeWords.length)];
        } else {
            // Select from active pool and remove it to completely prevent repeats!
            if (activePositivePool.length === 0) {
                activePositivePool = [...masterPositiveWords];
            }
            const randIndex = Math.floor(Math.random() * activePositivePool.length);
            text = activePositivePool.splice(randIndex, 1)[0];
        }

        // Calculate dynamic bubble radius based on character count so it fits 100% perfectly and keeps high contrast
        const calculatedRadius = isNegative 
            ? Math.max(18, (text.length * 3.5) + 6)
            : Math.max(22, (text.length * 3.5) + 7);

        retroList.push({
            x: Math.random() * (retroCanvas.width - 80) + 40, // give safe horizontal borders so bubbles are not cropped
            y: -30,
            radius: calculatedRadius,
            speed: isNegative ? 0.75 + Math.random() * 0.45 : 0.6 + Math.random() * 0.5,
            color: isNegative ? 'rgba(255, 45, 122, 0.85)' : 'rgba(0, 255, 135, 0.85)', // beautiful glowing red/green
            text: text,
            isNegative: isNegative
        });
        
        setTimeout(spawnRetrograde, 1300 + Math.random() * 700);
    }

    function handleRetroTap(e) {
        if (!retroGameActive || !retroCanvas) return;
        e.preventDefault();
        var rect = retroCanvas.getBoundingClientRect();
        var clientX = e.touches ? e.touches[0].clientX : e.clientX;
        var clientY = e.touches ? e.touches[0].clientY : e.clientY;
        var tapX = ((clientX - rect.left) / rect.width) * retroCanvas.width;
        var tapY = ((clientY - rect.top) / rect.height) * retroCanvas.height;

        for (var i = retroList.length - 1; i >= 0; i--) {
            var r = retroList[i];
            var dist = Math.sqrt(Math.pow(tapX - r.x, 2) + Math.pow(tapY - r.y, 2));
            // generous tap boundary for mobile screen simulated viewports
            if (dist < r.radius + 20) {
                
                if (r.isNegative) {
                    createExplosion(r.x, r.y, '#ff2d7a');
                    retroList.splice(i, 1);
                    retroProgress = Math.max(0, retroProgress - 10);
                    updateRetroProgress();
                    if (audioCtx) playBubblePopNegativeSound();
                } else {
                    createExplosion(r.x, r.y, '#00ff87');
                    retroList.splice(i, 1);
                    retroProgress += 10;
                    updateRetroProgress();

                    if (audioCtx) playBubblePopSuccessSound();

                    if (retroProgress >= 100) {
                        endRetroGameSuccess();
                    }
                }
                break;
            }
        }
    }

    function createExplosion(x, y, color) {
        for (var i = 0; i < 12; i++) {
            retroExplosions.push({
                x: x, y: y,
                vx: (Math.random() - 0.5) * 5,
                vy: (Math.random() - 0.5) * 5,
                radius: 1.5 + Math.random() * 2,
                color: color,
                alpha: 1,
                decay: 0.035 + Math.random() * 0.025
            });
        }
    }

    function updateRetroProgress() {
        var bar = document.getElementById('retro-bar');
        var text = document.getElementById('retro-text');
        if (bar) bar.style.width = retroProgress + '%';
        if (text) text.textContent = 'Derlenen Edebi Uyum: %' + retroProgress;
    }

    function endRetroGameSuccess() {
        retroGameActive = false;
        
        setTimeout(function() {
            var gv = document.getElementById('compat-game-view');
            var rv = document.getElementById('compat-reward-view');
            if (gv) gv.classList.add('hidden');
            if (rv) {
                rv.classList.remove('hidden');
                rv.classList.add('active-gate');
            }
            
            var nextTab = document.getElementById('nav-btn-stars');
            if (nextTab) {
                nextTab.classList.remove('disabled');
                nextTab.removeAttribute('disabled');
            }
            var nextIcon = document.getElementById('nav-icon-stars');
            if (nextIcon) nextIcon.className = 'fa-solid fa-star';

            if (audioCtx) {
                var now = audioCtx.currentTime;
                playNote(60, now, 0.4, 0.05);
                playNote(64, now + 0.1, 0.4, 0.05);
                playNote(67, now + 0.2, 0.4, 0.05);
                playNote(72, now + 0.3, 1.2, 0.08);
            }
        }, 500);
    }

    function animateRetroGame() {
        if (!retroGameActive || !retroCtx || !retroCanvas) return;
        
        retroCtx.fillStyle = 'rgba(7, 9, 25, 0.32)';
        retroCtx.fillRect(0, 0, retroCanvas.width, retroCanvas.height);

        for (var i = retroList.length - 1; i >= 0; i--) {
            var r = retroList[i];
            r.y += r.speed;

            // Glowing bubble
            retroCtx.beginPath();
            retroCtx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
            retroCtx.fillStyle = r.color;
            retroCtx.shadowBlur = r.isNegative ? 12 : 24;
            retroCtx.shadowColor = r.color;
            retroCtx.fill();
            retroCtx.shadowBlur = 0;

            // Inner dark circle for maximum typography contrast
            retroCtx.beginPath();
            retroCtx.arc(r.x, r.y, r.radius - 2, 0, Math.PI * 2);
            retroCtx.fillStyle = '#070919';
            retroCtx.fill();

            // Word labels
            retroCtx.fillStyle = r.color;
            retroCtx.font = 'bold 8px Montserrat';
            retroCtx.textAlign = 'center';
            retroCtx.fillText(r.text, r.x, r.y + 3);

            if (r.y > retroCanvas.height + 30) {
                retroList.splice(i, 1);
            }
        }

        for (var i = retroExplosions.length - 1; i >= 0; i--) {
            var p = retroExplosions[i];
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= p.decay;

            retroCtx.beginPath();
            retroCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            retroCtx.fillStyle = p.color;
            retroCtx.globalAlpha = p.alpha;
            retroCtx.fill();
            retroCtx.globalAlpha = 1.0;

            if (p.alpha <= 0) {
                retroExplosions.splice(i, 1);
            }
        }

        requestAnimationFrame(animateRetroGame);
    }


    // ==========================================================================
    // 6. OYUN 3: GÖKYÜZÜ AŞKI (CANVAS-BASED STAR HUNT) - 100% BUG-FREE!
    // ==========================================================================
    const starModal = document.getElementById('star-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const starsNextBtn = document.getElementById('stars-next-btn');

    let starsCanvas = null;
    let starsCanvasCtx = null;
    let starsCanvasActive = false;
    let canvasStarsList = [];
    let starCanvasExplosions = [];
    const exploredStarsSet = new Set();

    // Books-ravaged deeply elegant literary Turkish compliments (subtle period drama hints)
    const romanticStarData = {
        '0': {
            title: 'Ebedi Bahar Yıldızı ✦',
            body: '“Yazgımızın en güzel anında birleşen asil ruhun, gök kubbenin altında karşılaştığım en büyük mucizedir bir tanem. En güzel mısralar bile, o dünyayı aydınlatan kıvrak zekân ile kalbime huzur veren zarafetini tasvir etmeye yetmez. Hüseyinsu’nun hayattaki yegâne ve ebedi ilhamı sensin.”'
        },
        '1': {
            title: 'Gözümün Nuru & Ebedi Sadakat Yıldızı ✦',
            body: '“Bizim sevdamız bir tanem; edebiyat devlerinin o en naif, en samimi aşkları gibi tertemiz, asil ve tüm engelleri, mesafeleri aşacak kadar kararlıdır. Dünyadaki hiçbir zenginlik, senin o asil duruşunun, sesinin ruhuma verdiği o eşsiz sükûnetin yanına yaklaşamaz.”'
        },
        '2': {
            title: 'Canımın İçi & Tebessüm Yıldızı ✦',
            body: '“En naif ve en derin mektuplardaki o sarsılmaz ruh bağları gibi bir bağ bizimki... Kalplerimizin sonsuz ve muazzam uyumu. Her bakışın, gönlümün en kuytu köşelerindeki kederleri silip süpüren büyülü bir fısıltıdır güzel gözlüm.”'
        },
        '3': {
            title: 'Gönül Eşimiz & Mukaddes Vuslat Yıldızı ✦',
            body: '“Ebedi akşamların o en asil sevgi mısraları gibi derin ve büyüleyicisin. Gözlerin, dünyadaki tüm hazinelerden daha kıymetlidir bana. Ruhumdaki o sarsılmaz sadakatle; Hüseyinsu’nun ömrü de senin adımlarına mühürlenmiştir gökyüzüm, güneşim ve ebedi yol arkadaşım.”'
        }
    };

    function initStarsCanvasGame() {
        starsCanvas = document.getElementById('stars-canvas');
        if (!starsCanvas) return;
        starsCanvasCtx = starsCanvas.getContext('2d');
        if (!starsCanvasCtx) return;

        var rect = starsCanvas.parentElement.getBoundingClientRect();
        starsCanvas.width = rect.width || 320;
        starsCanvas.height = 200;

        starsCanvasActive = true;
        starCanvasExplosions = [];

        // Generates 4 gentle floating stars inside the canvas bounds safely (highly detailed literary motifs)
        canvasStarsList = [
            { id: 0, label: 'VUSLAT', x: 50, y: 70, vx: 0.15, vy: -0.2, size: 14, text: 'Güzel Kavuşma' },
            { id: 1, label: 'SADAKAT', x: starsCanvas.width - 70, y: 80, vx: -0.12, vy: -0.18, size: 14, text: 'Sarsılmaz Bağ' },
            { id: 2, label: 'TILSIM', x: 90, y: 140, vx: 0.14, vy: -0.15, size: 14, text: 'Ortak Yazgı' },
            { id: 3, label: 'ÖMRÜM', x: starsCanvas.width - 100, y: 150, vx: -0.1, vy: -0.22, size: 14, text: 'Ebedi Bahar' }
        ];

        animateStarsCanvas();

        starsCanvas.removeEventListener('mousedown', handleStarsCanvasTap);
        starsCanvas.removeEventListener('touchstart', handleStarsCanvasTap);
        starsCanvas.addEventListener('mousedown', handleStarsCanvasTap);
        starsCanvas.addEventListener('touchstart', handleStarsCanvasTap, { passive: false });
    }

    function handleStarsCanvasTap(e) {
        if (!starsCanvasActive || !starsCanvas) return;
        e.preventDefault();
        var rect = starsCanvas.getBoundingClientRect();
        var clientX = e.touches ? e.touches[0].clientX : e.clientX;
        var clientY = e.touches ? e.touches[0].clientY : e.clientY;
        var tapX = ((clientX - rect.left) / rect.width) * starsCanvas.width;
        var tapY = ((clientY - rect.top) / rect.height) * starsCanvas.height;

        for (var i = 0; i < canvasStarsList.length; i++) {
            var s = canvasStarsList[i];
            var dist = Math.sqrt(Math.pow(tapX - s.x, 2) + Math.pow(tapY - s.y, 2));
            
            // generously wide target boundary for easy mobile touch gameplay
            if (dist < s.size + 24) {
                if (exploredStarsSet.has(s.id)) {
                    // Re-open compliment even if already clicked!
                    showStarCompliment(s.id);
                } else {
                    // Success, first capture stardust pop!
                    createStarExplosion(s.x, s.y);
                    exploredStarsSet.add(s.id);
                    showStarCompliment(s.id);
                    if (audioCtx) playNote(64 + s.id * 3, audioCtx.currentTime, 0.45, 0.05);

                    if (exploredStarsSet.size === 4) {
                        if (starsNextBtn) {
                            starsNextBtn.classList.remove('disabled');
                            starsNextBtn.removeAttribute('disabled');
                            starsNextBtn.textContent = 'Sürprizi Keşfet ✦';
                        }
                        var nextTab = document.getElementById('nav-btn-scratch');
                        if (nextTab) {
                            nextTab.classList.remove('disabled');
                            nextTab.removeAttribute('disabled');
                        }
                        var nextIcon = document.getElementById('nav-icon-scratch');
                        if (nextIcon) nextIcon.className = 'fa-solid fa-gift';
                    }
                }
                break;
            }
        }
    }

    function showStarCompliment(id) {
        const data = romanticStarData[id];
        if (!data || !starModal) return;

        if (modalTitle) modalTitle.textContent = data.title;
        if (modalBody) modalBody.textContent = data.body;
        starModal.classList.add('active');
    }

    function createStarExplosion(x, y) {
        for (var i = 0; i < 20; i++) {
            starCanvasExplosions.push({
                x: x, y: y,
                vx: (Math.random() - 0.5) * 6,
                vy: (Math.random() - 0.5) * 6,
                radius: 1.5 + Math.random() * 2,
                color: Math.random() > 0.5 ? '#ffd700' : '#ff2d7a',
                alpha: 1,
                decay: 0.02 + Math.random() * 0.02
            });
        }
    }

    function drawGlowStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
        var rot = Math.PI / 2 * 3;
        var x = cx;
        var y = cy;
        var step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        for (var i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
    }

    function animateStarsCanvas() {
        if (!starsCanvasActive || !starsCanvasCtx || !starsCanvas) return;

        starsCanvasCtx.fillStyle = 'rgba(7, 9, 25, 0.35)';
        starsCanvasCtx.fillRect(0, 0, starsCanvas.width, starsCanvas.height);

        canvasStarsList.forEach(function(s) {
            // Stars float only if not explored, once explored they freeze peacefully at current position
            if (!exploredStarsSet.has(s.id)) {
                s.x += s.vx;
                s.y += s.vy;

                // Bounce horizontal canvas boundary
                if (s.x < 30) { s.x = 30; s.vx *= -1; }
                if (s.x > starsCanvas.width - 30) { s.x = starsCanvas.width - 30; s.vx *= -1; }
                // Bounce vertical canvas boundary
                if (s.y < 30) { s.y = 30; s.vy *= -1; }
                if (s.y > starsCanvas.height - 30) { s.y = starsCanvas.height - 30; s.vy *= -1; }
            }

            const isExplored = exploredStarsSet.has(s.id);
            const color = isExplored ? '#ffd700' : '#ffffff';

            starsCanvasCtx.save();
            // Draw glowing outer aura
            starsCanvasCtx.shadowBlur = isExplored ? 12 : 22;
            starsCanvasCtx.shadowColor = '#ffd700';

            starsCanvasCtx.fillStyle = color;
            drawGlowStar(starsCanvasCtx, s.x, s.y, 4, s.size, s.size * 0.4);
            starsCanvasCtx.fill();
            starsCanvasCtx.restore();

            // Label text underneath stars
            starsCanvasCtx.fillStyle = isExplored ? '#ffd700' : 'rgba(255,255,255,0.7)';
            starsCanvasCtx.font = 'bold 8px Montserrat';
            starsCanvasCtx.textAlign = 'center';
            starsCanvasCtx.fillText(s.label, s.x, s.y + s.size + 8);
            
            // Subtitle text (Author /period touch)
            starsCanvasCtx.fillStyle = 'rgba(255,255,255,0.45)';
            starsCanvasCtx.font = '500 7px Cinzel';
            starsCanvasCtx.fillText(s.text, s.x, s.y + s.size + 17);
        });

        // Draw explosion sparks
        for (var i = starCanvasExplosions.length - 1; i >= 0; i--) {
            var p = starCanvasExplosions[i];
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= p.decay;

            starsCanvasCtx.beginPath();
            starsCanvasCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            starsCanvasCtx.fillStyle = p.color;
            starsCanvasCtx.globalAlpha = p.alpha;
            starsCanvasCtx.fill();
            starsCanvasCtx.globalAlpha = 1.0;

            if (p.alpha <= 0) {
                starCanvasExplosions.splice(i, 1);
            }
        }

        requestAnimationFrame(animateStarsCanvas);
    }

    if (modalClose) {
        modalClose.addEventListener('click', function() {
            if (starModal) starModal.classList.remove('active');
        });
    }
    if (starModal) {
        starModal.addEventListener('click', function(e) {
            if (e.target === starModal) starModal.classList.remove('active');
        });
    }


    // ==========================================================================
    // 7. OYUN 4: AŞK KARTLARI EŞLEŞTİRME & HIZLI KAZIMA SISTEMI
    // ==========================================================================
    const memoryCards = document.querySelectorAll('.memory-card');
    let hasFlippedCard = false;
    let lockGrid = false;
    let firstCard, secondCard;
    let matchedPairsCount = 0;

    function flipCard() {
        if (lockGrid || this === firstCard) return;
        initAudio();
        this.classList.add('flipped');
        
        // Play quick flip sound
        playCardFlipSound();

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForCardMatch();
    }

    function checkForCardMatch() {
        // Compare front icon HTML directly
        let isMatch = firstCard.querySelector('.memory-card-front').innerHTML === secondCard.querySelector('.memory-card-front').innerHTML;
        if (isMatch) {
            disableCardsMatched();
        } else {
            unflipCardsMismatch();
        }
    }

    function appendJarItem(iconHtml) {
        const container = document.getElementById('jar-items-container');
        if (!container) return;
        const item = document.createElement('div');
        item.className = 'jar-item';
        item.innerHTML = iconHtml;
        item.style.color = '#070919';
        container.appendChild(item);
        
        // Play popping sound
        playBubblePopSuccessSound();
    }

    function disableCardsMatched() {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');

        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        matchedPairsCount++;
        
        // Play success matching sound
        if (audioCtx) {
            var now = audioCtx.currentTime;
            playNote(65, now, 0.2, 0.05);
            playNote(72, now + 0.1, 0.45, 0.07);
        }

        // Purble Place Style Flying Particles Animation!
        const rect1 = firstCard.getBoundingClientRect();
        const rect2 = secondCard.getBoundingClientRect();
        const jarEl = document.querySelector('.jar-glass');
        
        if (jarEl) {
            const jarRect = jarEl.getBoundingClientRect();
            const jarTargetX = jarRect.left + jarRect.width / 2;
            const jarTargetY = jarRect.top + jarRect.height / 2;
            const iconHtml = firstCard.querySelector('.memory-card-front').innerHTML;
            
            [rect1, rect2].forEach((rect) => {
                const particle = document.createElement('div');
                particle.className = 'flying-card-particle';
                particle.innerHTML = iconHtml;
                particle.style.left = `${rect.left + rect.width / 2 - 15}px`;
                particle.style.top = `${rect.top + rect.height / 2 - 15}px`;
                document.body.appendChild(particle);
                
                // Force reflow
                void particle.offsetWidth;
                
                // Animate flying into jar center
                particle.style.transform = 'scale(0.4) rotate(360deg)';
                particle.style.left = `${jarTargetX - 15}px`;
                particle.style.top = `${jarTargetY - 15}px`;
                particle.style.opacity = '0';
                
                setTimeout(() => {
                    particle.remove();
                    appendJarItem(iconHtml);
                }, 700);
            });
        }

        resetCardTurns();

        // 8 matched pairs needed to win (16 cards)
        if (matchedPairsCount === 8) {
            setTimeout(() => {
                document.getElementById('memory-game-stage').classList.add('hidden');
                const jarWrapper = document.getElementById('love-jar-wrapper');
                if (jarWrapper) jarWrapper.classList.add('hidden');
                
                var sStage = document.getElementById('scratch-game-stage');
                sStage.classList.remove('hidden');
                sStage.classList.add('active-gate');
                
                initScratchCard();
                scratchInitialized = true;
            }, 1800);
        }
    }

    function unflipCardsMismatch() {
        lockGrid = true;
        // Play quick sad mismatch tone
        playBubblePopNegativeSound();

        setTimeout(() => {
            if (firstCard) firstCard.classList.remove('flipped');
            if (secondCard) secondCard.classList.remove('flipped');
            resetCardTurns();
        }, 1200);
    }

    function resetCardTurns() {
        [hasFlippedCard, lockGrid] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function shuffleMemoryCards() {
        // Reset grid views and jar
        const gameStage = document.getElementById('memory-game-stage');
        if (gameStage) gameStage.classList.remove('hidden');
        const jarWrapper = document.getElementById('love-jar-wrapper');
        if (jarWrapper) jarWrapper.classList.remove('hidden');
        const container = document.getElementById('jar-items-container');
        if (container) container.innerHTML = '';

        memoryCards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 16);
            card.style.order = randomPos;
            card.classList.remove('flipped', 'matched');
            card.removeEventListener('click', flipCard);
            card.addEventListener('click', flipCard);
        });
        matchedPairsCount = 0;
        resetCardTurns();
    }
    shuffleMemoryCards();

    // Golden Scratch off Seals logic (WebView-Safe Coordinate tracking)
    var scratchCanvas = null;
    var scratchCtx = null;
    var scratchNextBtn = document.getElementById('scratch-next-btn');
    var isDrawing = false;
    var cardFullyRevealed = false;
    var scratchPoints = [];
    const scratchPointsThreshold = 8; // Scratching just 8 swipe coordinate points triggers complete card reveal!

    function initScratchCard() {
        scratchCanvas = document.getElementById('scratch-canvas');
        if (!scratchCanvas) return;
        scratchCtx = scratchCanvas.getContext('2d');
        if (!scratchCtx) return;

        var w = scratchCanvas.width;
        var h = scratchCanvas.height;

        scratchCtx.globalCompositeOperation = 'source-over';
        scratchCtx.clearRect(0, 0, w, h);
        scratchPoints = [];
        cardFullyRevealed = false;
        scratchCanvas.style.opacity = '1';
        scratchCanvas.style.display = 'block';

        var goldGrad = scratchCtx.createLinearGradient(0, 0, w, h);
        goldGrad.addColorStop(0, '#ffd700');
        goldGrad.addColorStop(0.35, '#fff4b8');
        goldGrad.addColorStop(0.65, '#d4af37');
        goldGrad.addColorStop(1, '#aa7c11');
        scratchCtx.fillStyle = goldGrad;
        scratchCtx.fillRect(0, 0, w, h);

        const centers = [
            { x: w * 0.22, name: 'AŞK' },
            { x: w * 0.50, name: 'VUSLAT' },
            { x: w * 0.78, name: 'SAADET' }
        ];

        centers.forEach(c => {
            scratchCtx.strokeStyle = 'rgba(7, 9, 25, 0.25)';
            scratchCtx.lineWidth = 2;
            scratchCtx.beginPath();
            scratchCtx.arc(c.x, h/2, 28, 0, Math.PI * 2);
            scratchCtx.stroke();

            scratchCtx.fillStyle = 'rgba(7, 9, 25, 0.65)';
            scratchCtx.font = 'bold 9px Montserrat';
            scratchCtx.textAlign = 'center';
            scratchCtx.fillText(c.name, c.x, h/2 + 3);
        });

        scratchCtx.fillStyle = 'rgba(7, 9, 25, 0.45)';
        scratchCtx.font = 'bold 9px Cinzel';
        scratchCtx.textAlign = 'center';
        scratchCtx.fillText('★ MÜHÜRLERİ HAFİFÇE KAZI VE AÇ ★', w/2, 35);
        scratchCtx.fillText('❤ SONSUZ AŞK VE BERATIMIZ ❤', w/2, h - 25);

        scratchCanvas.removeEventListener('mousedown', startScratch);
        scratchCanvas.removeEventListener('touchstart', startScratch);
        scratchCanvas.addEventListener('mousedown', startScratch);
        scratchCanvas.addEventListener('touchstart', startScratch, { passive: false });
    }

    function startScratch(e) {
        isDrawing = true;
        drawScratch(e);
    }

    // Global scratch coordinate movements listeners
    window.addEventListener('mousemove', function(e) { drawScratch(e); });
    window.addEventListener('mouseup', function() { isDrawing = false; });
    window.addEventListener('touchmove', function(e) { drawScratch(e); }, { passive: false });
    window.addEventListener('touchend', function() { isDrawing = false; });

    function getScratchCoords(e) {
        if (!scratchCanvas) return null;
        var rect = scratchCanvas.getBoundingClientRect();
        var clientX = e.touches ? e.touches[0].clientX : e.clientX;
        var clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: ((clientX - rect.left) / rect.width) * scratchCanvas.width,
            y: ((clientY - rect.top) / rect.height) * scratchCanvas.height
        };
    }

    function drawScratch(e) {
        if (!isDrawing || cardFullyRevealed || !scratchCtx || !scratchCanvas) return;
        
        var coords = getScratchCoords(e);
        if (!coords) return;
        e.preventDefault();

        scratchCtx.globalCompositeOperation = 'destination-out';
        scratchCtx.beginPath();
        scratchCtx.arc(coords.x, coords.y, 25, 0, Math.PI * 2);
        scratchCtx.fill();

        if (audioCtx && Math.random() > 0.8) {
            playNote(85 + Math.random() * 15, audioCtx.currentTime, 0.05, 0.003);
        }

        var isFarEnough = true;
        for (var i = 0; i < scratchPoints.length; i++) {
            var p = scratchPoints[i];
            var dist = Math.sqrt(Math.pow(coords.x - p.x, 2) + Math.pow(coords.y - p.y, 2));
            if (dist < 22) {
                isFarEnough = false;
                break;
            }
        }
        if (isFarEnough) {
            scratchPoints.push(coords);
            checkScratchClearedPoints();
        }
    }

    function checkScratchClearedPoints() {
        if (cardFullyRevealed || !scratchCanvas) return;

        // If they scratch the target threshold, smoothly fade card completely
        if (scratchPoints.length >= scratchPointsThreshold) {
            cardFullyRevealed = true;
            scratchCanvas.style.opacity = '0';
            setTimeout(function() { scratchCanvas.style.display = 'none'; }, 800);

            if (scratchNextBtn) {
                scratchNextBtn.classList.remove('disabled');
                scratchNextBtn.removeAttribute('disabled');
                scratchNextBtn.textContent = 'Aşk Mektubunu Oku ✦';
            }

            var nextTab = document.getElementById('nav-btn-letter');
            if (nextTab) {
                nextTab.classList.remove('disabled');
                nextTab.removeAttribute('disabled');
            }
            var nextIcon = document.getElementById('nav-icon-letter');
            if (nextIcon) nextIcon.className = 'fa-solid fa-envelope';

            if (audioCtx) {
                var now = audioCtx.currentTime;
                playNote(60, now, 0.4, 0.04);
                playNote(64, now + 0.1, 0.4, 0.04);
                playNote(67, now + 0.2, 0.4, 0.04);
                playNote(72, now + 0.3, 1.5, 0.07);
            }
        }
    }

    // ==========================================================================
    // 8. OYUN 5: KADER ÇARKİ & EDEBİ KEHANETLER (MEKTUP KAPISI)
    // ==========================================================================
    const spinWheelBtn = document.getElementById('spin-wheel-btn');
    const destinyWheel = document.getElementById('destiny-wheel');
    const prophecyDisplay = document.getElementById('prophecy-display');
    const prophecyTitle = document.getElementById('prophecy-title');
    const prophecyText = document.getElementById('prophecy-text');
    const scrollLettersView = document.getElementById('scroll-letters-view');
    const destinyWheelStage = document.getElementById('destiny-wheel-stage');

    let isWheelSpinning = false;

    // Deeply emotional literary Turkish future prophecies (zodiac free)
    const romanticProphecyData = [
        {
            title: 'Yazgının Edebi Sırrı ✦',
            text: '“Mucizevi bir gece yarısında birleşen iki asil ruhun, ebediyet önündeki o mukaddes yazgısı... Geleceğiniz; en güzel aşk mektupları gibi derin, sarsılmaz bir sadakatle dolu ve kalbinizin en güzel kelimeleriyle bezenmiş olarak akacaktır canımın içi.”'
        },
        {
            title: 'Şiirsel Vuslat Yazgısı ✦',
            text: '“Yollarınızın bu hayatta birleşmesi sıradan bir tesadüf değil, en güzel aşk mısralarında yazılmış mukaddes bir vuslattır. Birbirinizin gözlerinde bulduğumuz o sıcak sükûnet, hayatınızı ömür boyu huzur ve muhabbetle taçlandıracaktır bir tanem.”'
        },
        {
            title: 'Ruhların Güzel Uyumu ✦',
            text: '“Bir tanemin o dünyayı aydınlatan asil zekası ve gözlerindeki o çocuksu nur, ömrünüzün her gününü ebedi bir bahara dönüştürecek. Dünyanın tüm hazineleri bile onun yanındaki o sıcak sükûnetin yerini tutamaz ruh ortağım.”'
        },
        {
            title: 'Ebedi Saadet ve Aşk Yemini ✦',
            text: '“Gece yarısının o tılsımlı vaktinde, gökyüzünün şefkati altında düğümlenen iki mukaddes yaşam çizgisi, zamanın ötesinde tasarlanmış şairane bir mukadderattır. Ömür yolculuğunuz, birbirinize olan o derin sevgi ve ebedi sadakatle en güzel aşk destanlarını yazmaya devam edecek bir tanem.”'
        }
    ];

    if (spinWheelBtn && destinyWheel) {
        spinWheelBtn.addEventListener('click', () => {
            if (isWheelSpinning) return;
            initAudio();
            isWheelSpinning = true;
            spinWheelBtn.classList.add('disabled');
            spinWheelBtn.setAttribute('disabled', 'true');

            const extraDegrees = Math.floor(Math.random() * 360);
            const totalDegrees = 1440 + extraDegrees;

            destinyWheel.style.transform = `rotate(${totalDegrees}deg)`;

            let tickCount = 0;
            const playTicks = setInterval(() => {
                tickCount++;
                if (audioCtx && tickCount < 14) {
                    playNote(78 + (tickCount % 4) * 2, audioCtx.currentTime, 0.05, 0.02);
                } else {
                    clearInterval(playTicks);
                }
            }, 250);

            setTimeout(() => {
                isWheelSpinning = false;
                
                const finalDegrees = totalDegrees % 360;
                // Calculations based on 4 sectors (90 deg per sector)
                const sectorIndex = Math.floor((360 - finalDegrees) / 90) % 4;
                const prophecy = romanticProphecyData[sectorIndex] || romanticProphecyData[0];

                if (prophecyTitle) prophecyTitle.textContent = prophecy.title;
                if (prophecyText) prophecyText.textContent = prophecy.text;
                if (prophecyDisplay) prophecyDisplay.classList.remove('hidden');

                if (audioCtx) {
                    var now = audioCtx.currentTime;
                    playNote(60, now, 0.4, 0.05);
                    playNote(64, now + 0.1, 0.4, 0.05);
                    playNote(67, now + 0.2, 0.4, 0.05);
                    playNote(72, now + 0.3, 1.2, 0.08);
                }

                const readMektupBtn = document.getElementById('btn-read-mektup');
                if (readMektupBtn) {
                    readMektupBtn.addEventListener('click', () => {
                        initAudio();
                        if (destinyWheelStage) destinyWheelStage.classList.add('hidden');
                        if (scrollLettersView) {
                            scrollLettersView.classList.remove('hidden');
                            scrollLettersView.classList.add('active-gate');
                        }
                    });
                }

            }, 3600);
        });
    }

    // ==========================================================================
    // 9. WAX SEAL BREAKING (LETTER PANEL)
    // ==========================================================================
    var waxSeal = document.getElementById('seal-trigger');
    var sealedView = document.querySelector('.sealed-scroll-view');
    var unrolledView = document.querySelector('.unrolled-scroll-view');
    var journeyFooter = document.getElementById('journey-end-footer');

    if (waxSeal) {
        waxSeal.addEventListener('click', function() {
            waxSeal.classList.add('breaking');
            if (audioCtx) {
                playWaxSealBreakSound();
            }
            setTimeout(function() {
                if (sealedView) sealedView.classList.add('hidden');
                if (unrolledView) unrolledView.classList.remove('hidden');
                if (journeyFooter) {
                    journeyFooter.classList.remove('hidden');
                    journeyFooter.style.display = 'flex';
                }
            }, 550);
        });
    }

    // ==========================================================================
    // 10. SYSTEM PORTAL REBOOT (RESET REGISTER)
    // ==========================================================================
    const btnResetJourney = document.getElementById('btn-reset-journey');

    if (btnResetJourney) {
        btnResetJourney.addEventListener('click', () => {
            stopBackgroundMusic();
            if (audioCtx) {
                var now = audioCtx.currentTime;
                playNote(72, now, 0.3, 0.06);
                playNote(67, now + 0.1, 0.3, 0.06);
                playNote(64, now + 0.2, 0.3, 0.06);
                playNote(60, now + 0.3, 1.0, 0.08);
            }

            // 1. Reset Game 1 (Analog Clock) variables
            isClockUnlocked = false;
            currentHour = 10;
            currentMin = 30;
            isAM = false;
            updateClockHands();
            if (keypadStatusMsg) {
                keypadStatusMsg.textContent = 'Zamanı Akışına Bırak';
                keypadStatusMsg.style.color = 'var(--text-muted)';
                keypadStatusMsg.style.textShadow = 'none';
            }
            if (timeDisplay) {
                timeDisplay.style.color = 'var(--gold)';
                timeDisplay.style.textShadow = 'none';
            }
            if (unlockBtn) {
                unlockBtn.classList.add('disabled');
                unlockBtn.setAttribute('disabled', 'true');
            }

            // 2. Lock and disable all bottom navbar buttons (except Gate 1: Giriş)
            var tabConfigs = [
                { tabId: 'nav-btn-compat',  iconId: 'nav-icon-compat' },
                { tabId: 'nav-btn-stars',   iconId: 'nav-icon-stars' },
                { tabId: 'nav-btn-scratch', iconId: 'nav-icon-scratch' },
                { tabId: 'nav-btn-letter',  iconId: 'nav-icon-letter' }
            ];
            tabConfigs.forEach(function(cfg) {
                var tab = document.getElementById(cfg.tabId);
                if (tab) {
                    tab.classList.add('disabled');
                    tab.setAttribute('disabled', 'true');
                }
                var icon = document.getElementById(cfg.iconId);
                if (icon) icon.className = 'fa-solid fa-lock';
            });

            // 3. Reset Game 2 (Hatıra Avcısı) states
            retroProgress = 0;
            retroGameActive = false;
            isRetroSpawning = false;
            updateRetroProgress();
            document.getElementById('compat-game-view').classList.remove('hidden');
            document.getElementById('compat-reward-view').classList.add('hidden');

            // 4. Reset Game 3 (Sevgi Yıldızları) explored sets
            exploredStarsSet.clear();
            starsCanvasActive = false;
            if (starsNextBtn) {
                starsNextBtn.classList.add('disabled');
                starsNextBtn.setAttribute('disabled', 'true');
                starsNextBtn.textContent = 'Yıldızları Yakala ✦';
            }

            // 5. Reset Game 4 (Memory Cards Grid and Scratch)
            shuffleMemoryCards();
            document.getElementById('memory-game-stage').classList.remove('hidden');
            document.getElementById('scratch-game-stage').classList.add('hidden');
            scratchInitialized = false;
            cardFullyRevealed = false;
            scratchPoints = [];
            if (scratchNextBtn) {
                scratchNextBtn.classList.add('disabled');
                scratchNextBtn.setAttribute('disabled', 'true');
                scratchNextBtn.textContent = 'Sürprizi Aç ✦';
            }

            // 6. Reset Game 5 (Destiny Prophecy Wheel & Wax Scroll)
            isWheelSpinning = false;
            if (destinyWheel) destinyWheel.style.transform = 'rotate(0deg)';
            if (spinWheelBtn) {
                spinWheelBtn.classList.remove('disabled');
                spinWheelBtn.removeAttribute('disabled');
            }
            if (prophecyDisplay) prophecyDisplay.classList.add('hidden');
            if (destinyWheelStage) destinyWheelStage.classList.remove('hidden');
            if (scrollLettersView) {
                scrollLettersView.classList.add('hidden');
                scrollLettersView.classList.remove('active-gate');
            }

            // 7. Reset sealed parchment scroll states
            if (waxSeal) waxSeal.classList.remove('breaking');
            if (sealedView) sealedView.classList.remove('hidden');
            if (unrolledView) unrolledView.classList.add('hidden');
            if (journeyFooter) {
                journeyFooter.classList.add('hidden');
                journeyFooter.style.display = 'none';
            }

            // 8. Transition smoothly back to Lock Screen
            populateTransitionPoems();
            switchGate('gate-lock');
        });
    }

    populateTransitionPoems();

});
