/* ==========================================================================
   INTERACTIVE ENGINE: "Nisasu & Hüseyinsu - İkizler'in Kozmik Geçidi"
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

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
        constructor(x, y) {
            this.x = x; this.y = y;
            this.size = 1 + Math.random() * 1.5;
            this.vx = (Math.random() - 0.5) * 1.5;
            this.vy = (Math.random() - 0.5) * 1.5;
            this.alpha = 1;
            this.decay = 0.02 + Math.random() * 0.02;
            this.color = Math.random() > 0.5 ? '#ffd700' : '#ff2d7a';
        }
        update() { this.x += this.vx; this.y += this.vy; this.alpha -= this.decay; }
        draw() {
            if (!bgCtx) return;
            bgCtx.beginPath();
            bgCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            bgCtx.fillStyle = this.color;
            bgCtx.globalAlpha = this.alpha;
            bgCtx.shadowBlur = 8;
            bgCtx.shadowColor = this.color;
            bgCtx.fill();
            bgCtx.shadowBlur = 0;
            bgCtx.globalAlpha = 1;
        }
    }

    window.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.85) sparks.push(new Spark(e.clientX, e.clientY));
    });
    window.addEventListener('touchmove', (e) => {
        if (Math.random() > 0.75 && e.touches[0])
            sparks.push(new Spark(e.touches[0].clientX, e.touches[0].clientY));
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
    let synthPlaying = false;
    let nextChordTime = 0;
    const tempo = 75;
    const beatDuration = 60 / tempo;
    let synthTimer = null;
    const chords = [
        [48, 59, 62, 64, 67, 71],
        [41, 52, 55, 57, 60, 64],
        [45, 55, 59, 60, 64, 67],
        [43, 54, 57, 59, 62, 67]
    ];
    let chordIndex = 0;

    function initAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
    }

    function playNote(midi, time, duration, volume) {
        if (!audioCtx) return;
        volume = volume || 0.08;
        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            const filter = audioCtx.createBiquadFilter();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(440 * Math.pow(2, (midi - 69) / 12), time);
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(500, time);
            filter.frequency.exponentialRampToValueAtTime(120, time + duration);
            gain.gain.setValueAtTime(0, time);
            gain.gain.linearRampToValueAtTime(volume, time + 0.2);
            gain.gain.setValueAtTime(volume, time + duration - 0.4);
            gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
            const delay = audioCtx.createDelay();
            const fb = audioCtx.createGain();
            delay.delayTime.setValueAtTime(0.45, time);
            fb.gain.setValueAtTime(0.2, time);
            osc.connect(filter);
            filter.connect(gain);
            gain.connect(audioCtx.destination);
            gain.connect(delay);
            delay.connect(fb);
            fb.connect(delay);
            fb.connect(audioCtx.destination);
            osc.start(time);
            osc.stop(time + duration);
        } catch(e) { /* silently ignore audio errors */ }
    }

    function playChordScheduler() {
        if (!synthPlaying || !audioCtx) return;
        while (nextChordTime < audioCtx.currentTime + 0.3) {
            const chord = chords[chordIndex];
            chord.forEach((note, i) => {
                playNote(note, nextChordTime + i * 0.07, 3.4, i === 0 ? 0.06 : 0.035);
            });
            nextChordTime += beatDuration * 4;
            chordIndex = (chordIndex + 1) % chords.length;
        }
        synthTimer = setTimeout(playChordScheduler, 100);
    }

    const musicControl = document.getElementById('music-control');
    const musicToggle = document.getElementById('music-toggle');

    if (musicToggle) {
        musicToggle.addEventListener('click', () => {
            initAudio();
            if (synthPlaying) {
                synthPlaying = false;
                musicToggle.classList.remove('playing');
                clearTimeout(synthTimer);
            } else {
                synthPlaying = true;
                musicToggle.classList.add('playing');
                nextChordTime = audioCtx.currentTime + 0.1;
                playChordScheduler();
            }
        });
    }

    function activateMusicFloat() {
        if (musicControl) musicControl.classList.remove('hidden');
        initAudio();
        synthPlaying = true;
        if (musicToggle) musicToggle.classList.add('playing');
        nextChordTime = audioCtx.currentTime + 0.1;
        playChordScheduler();
    }

    // ==========================================================================
    // 3. SNAPPING ASTROLABE CLOCK
    // ==========================================================================
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const clockFace = document.querySelector('.clock-face');
    const timeDisplay = document.getElementById('time-display');
    const unlockBtn = document.getElementById('unlock-btn');

    let currentHourDeg = 0;
    let currentMinuteDeg = 240;
    let activeHand = null;

    if (hourHand) hourHand.style.transform = 'rotate(' + currentHourDeg + 'deg)';
    if (minuteHand) minuteHand.style.transform = 'rotate(' + currentMinuteDeg + 'deg)';

    function getAngle(clientX, clientY) {
        if (!clockFace) return 0;
        const rect = clockFace.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        let angle = Math.atan2(clientY - cy, clientX - cx) * (180 / Math.PI) + 90;
        if (angle < 0) angle += 360;
        return angle;
    }

    function handleStart(e) {
        initAudio();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const angle = getAngle(clientX, clientY);
        const hourDiff = Math.abs(angle - currentHourDeg) % 360;
        const minuteDiff = Math.abs(angle - currentMinuteDeg) % 360;
        activeHand = (hourDiff < minuteDiff) ? 'hour' : 'minute';
    }

    function handleMove(e) {
        if (!activeHand) return;
        e.preventDefault();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const angle = getAngle(clientX, clientY);
        const snapped = Math.round(angle / 30) * 30;

        if (activeHand === 'hour') {
            currentHourDeg = snapped % 360;
            if (hourHand) hourHand.style.transform = 'rotate(' + currentHourDeg + 'deg)';
        } else {
            currentMinuteDeg = snapped % 360;
            if (minuteHand) minuteHand.style.transform = 'rotate(' + currentMinuteDeg + 'deg)';
        }
        updateLockTime();
    }

    function handleEnd() { activeHand = null; }

    if (clockFace) {
        clockFace.addEventListener('mousedown', handleStart);
        clockFace.addEventListener('touchstart', handleStart, { passive: false });
    }
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd);

    function updateLockTime() {
        let hours = Math.round(currentHourDeg / 30) % 12;
        let minutes = Math.round(currentMinuteDeg / 6) % 60;
        if (hours === 0) hours = 12;
        const padH = String(hours).padStart(2, '0');
        const padM = String(minutes).padStart(2, '0');

        if (timeDisplay) timeDisplay.textContent = 'Saat: ' + padH + ':' + padM + ' AM';

        const isMatch = (currentHourDeg === 30) && (currentMinuteDeg === 0);
        if (isMatch) {
            if (timeDisplay) {
                timeDisplay.textContent = 'Saat: 01:00 AM ✦ Kapı Hizalandı!';
                timeDisplay.classList.add('gold-glow');
            }
            if (unlockBtn) {
                unlockBtn.classList.remove('disabled');
                unlockBtn.removeAttribute('disabled');
            }
            if (audioCtx) {
                const now = audioCtx.currentTime;
                playNote(72, now, 1.2, 0.07);
                playNote(76, now + 0.1, 1.2, 0.07);
                playNote(79, now + 0.2, 1.8, 0.07);
            }
        } else {
            if (timeDisplay) timeDisplay.classList.remove('gold-glow');
            if (unlockBtn) {
                unlockBtn.classList.add('disabled');
                unlockBtn.setAttribute('disabled', 'true');
            }
        }
    }

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

        // Lazy-init scratch card the first time we open that tab
        if (targetGateId === 'gate-scratch' && !scratchInitialized) {
            initScratchCard();
            scratchInitialized = true;
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
            // Make sure the matching tab is unlocked
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

            activateMusicFloat();
            switchGate('gate-compat');
        });
    }

    // ==========================================================================
    // 5. COMPLIMENT STAR POPUPS
    // ==========================================================================
    const starBtns = document.querySelectorAll('.glowing-star');
    const starModal = document.getElementById('star-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const starsNextBtn = document.getElementById('stars-next-btn');

    const exploredStars = new Set();

    const starData = {
        '1': {
            title: 'Zeka & Cazibe Yıldızı',
            body: 'İkizler burcunun o kıvrak dehası ve keskin zekası seni sen yapan en asil özelliğin. Nisasu\'nun her detayı görebilen bu parlak aklı, Hüseyinsu\'nun en büyük hayranlık kaynağı. Aklın ve zarafetin tek kelimeyle büyüleyici!'
        },
        '2': {
            title: 'Neşe & Sohbet Yıldızı',
            body: 'Girdiğin her ortama ışık saçan o bitmek bilmeyen çocuksu neşen, hayatımın en tatlı ses tonuyla birleşiyor. Seninleyken konuşurken zamanın nasıl aktığını, kelimelerin nasıl bittiğini anlamıyorum bile sevgilim.'
        },
        '3': {
            title: 'Eşsiz Derin Ruh',
            body: 'İkizler burcunun o gizemli çift yönlü ruhu sende muhteşem bir uyumla yaşıyor. Her halinle ayrı bir dünya, her gülüşünle yeni bir galaksisin. Seninle olmak her gün yepyeni bir dünyayı keşfetmek gibi.'
        },
        '4': {
            title: 'Kozmik Sır Yıldızı',
            body: 'İkimizin de dünyaya gözlerini açtığı o gizemli saatte, yollarımızın gökyüzünde çoktan çizildiğinin sessiz kanıtı. Sen benim hayatıma doğan en parlak yıldız, en güzel doğum günü hediyesisin!'
        }
    };

    starBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var id = btn.getAttribute('data-star');
            var data = starData[id];
            if (!data || !starModal) return;

            if (modalTitle) modalTitle.textContent = data.title;
            if (modalBody) modalBody.textContent = data.body;
            starModal.classList.add('active');

            btn.classList.add('explored');
            exploredStars.add(id);

            if (audioCtx) playNote(65 + parseInt(id) * 2, audioCtx.currentTime, 1.2, 0.05);

            if (exploredStars.size === 4 && starsNextBtn) {
                starsNextBtn.classList.remove('disabled');
                starsNextBtn.removeAttribute('disabled');
                starsNextBtn.textContent = 'Sürprizi Keşfet ✦';
            }
        });
    });

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
    // 6. SCRATCH CARD (LAZY INIT - prevents null crash)
    // ==========================================================================
    var scratchCanvas = null;
    var scratchCtx = null;
    var scratchNextBtn = document.getElementById('scratch-next-btn');
    var isDrawing = false;
    var cardFullyRevealed = false;

    function initScratchCard() {
        scratchCanvas = document.getElementById('scratch-canvas');
        if (!scratchCanvas) return;
        scratchCtx = scratchCanvas.getContext('2d');
        if (!scratchCtx) return;

        var w = scratchCanvas.width;
        var h = scratchCanvas.height;

        // Reset composite mode
        scratchCtx.globalCompositeOperation = 'source-over';
        scratchCtx.clearRect(0, 0, w, h);

        var goldGrad = scratchCtx.createLinearGradient(0, 0, w, h);
        goldGrad.addColorStop(0, '#ffd700');
        goldGrad.addColorStop(0.35, '#fff4b8');
        goldGrad.addColorStop(0.65, '#d4af37');
        goldGrad.addColorStop(1, '#aa7c11');
        scratchCtx.fillStyle = goldGrad;
        scratchCtx.fillRect(0, 0, w, h);

        scratchCtx.strokeStyle = 'rgba(7, 9, 25, 0.15)';
        scratchCtx.lineWidth = 1.5;
        scratchCtx.beginPath();
        scratchCtx.arc(w/2, h/2, 55, 0, Math.PI * 2);
        scratchCtx.stroke();
        scratchCtx.beginPath();
        scratchCtx.arc(w/2, h/2, 40, 0, Math.PI * 2);
        scratchCtx.stroke();

        scratchCtx.fillStyle = 'rgba(7, 9, 25, 0.45)';
        scratchCtx.font = '10px Montserrat';
        scratchCtx.textAlign = 'center';
        scratchCtx.fillText('★ BİZİM KOZMOSUMUZ ★', w/2, h/2 - 68);
        scratchCtx.font = 'bold 12px Cinzel';
        scratchCtx.fillText('DOKUN VE KAZI', w/2, h/2 + 5);
        scratchCtx.font = '8px Montserrat';
        scratchCtx.fillText('♊ İKİZLER ♊', w/2, h/2 + 68);
        scratchCtx.fillText('✦', w/2, h/2 - 12);

        // Attach scratch events (only once)
        scratchCanvas.addEventListener('mousedown', function(e) { isDrawing = true; drawScratch(e); });
        scratchCanvas.addEventListener('touchstart', function(e) { isDrawing = true; drawScratch(e); }, { passive: false });
    }

    // Global move/end listeners for scratch
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
        e.preventDefault();
        var coords = getScratchCoords(e);
        if (!coords) return;

        scratchCtx.globalCompositeOperation = 'destination-out';
        scratchCtx.beginPath();
        scratchCtx.arc(coords.x, coords.y, 25, 0, Math.PI * 2);
        scratchCtx.fill();

        if (audioCtx && Math.random() > 0.8) {
            playNote(85 + Math.random() * 15, audioCtx.currentTime, 0.05, 0.003);
        }
        checkScratchCleared();
    }

    function checkScratchCleared() {
        if (cardFullyRevealed || !scratchCtx || !scratchCanvas) return;

        var imgData = scratchCtx.getImageData(0, 0, scratchCanvas.width, scratchCanvas.height);
        var pixels = imgData.data;
        var erasedCount = 0;
        for (var i = 3; i < pixels.length; i += 4) {
            if (pixels[i] === 0) erasedCount++;
        }
        var percentage = (erasedCount / (pixels.length / 4)) * 100;

        if (percentage > 15) {
            cardFullyRevealed = true;
            scratchCanvas.style.opacity = '0';
            setTimeout(function() { scratchCanvas.style.display = 'none'; }, 800);

            if (scratchNextBtn) {
                scratchNextBtn.classList.remove('disabled');
                scratchNextBtn.removeAttribute('disabled');
                scratchNextBtn.textContent = 'Aşk Mektubunu Oku ✦';
            }

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
    // 7. WAX SEAL BREAKING
    // ==========================================================================
    var waxSeal = document.getElementById('seal-trigger');
    var sealedView = document.querySelector('.sealed-scroll-view');
    var unrolledView = document.querySelector('.unrolled-scroll-view');
    var journeyFooter = document.getElementById('journey-end-footer');

    if (waxSeal) {
        waxSeal.addEventListener('click', function() {
            waxSeal.classList.add('breaking');
            if (audioCtx) {
                playNote(110, audioCtx.currentTime, 0.04, 0.04);
                setTimeout(function() { playNote(69, audioCtx.currentTime, 1.8, 0.06); }, 100);
            }
            setTimeout(function() {
                if (sealedView) sealedView.classList.add('hidden');
                if (unrolledView) unrolledView.classList.remove('hidden');
                if (journeyFooter) journeyFooter.classList.remove('hidden');
            }, 550);
        });
    }

});
