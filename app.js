/**
 * ============================================================================
 * 💖 PINK TEDDY WONDERLAND — INTERACTIVE ENGINE (app.js)
 * Khushiii (My Latu) × Shomayyy
 * ============================================================================
 */

(function () {
  'use strict';

  const cfg = window.LOVE_CONFIG || {};
  const manifest = window.FOLDER_MANIFEST || { photos: {}, music: [], allPhotos: [] };

  // DOM Elements
  const lockScreen = document.getElementById('lock-screen');
  const unlockBtn = document.getElementById('unlock-btn');
  const lockTeddyWrap = document.getElementById('lock-teddy-wrap');
  const heroTeddyWrap = document.getElementById('hero-teddy-wrap');
  const heroSpotlightImg = document.getElementById('hero-spotlight-img');
  const heroSpotlightCard = document.getElementById('hero-spotlight-card');
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const musicBars = document.getElementById('music-bars');
  const audioEl = document.getElementById('bg-audio');
  const cursorCanvas = document.getElementById('cursor-canvas');
  const ambientLayer = document.getElementById('ambient-particles');

  // Clock Elements
  const clockTabBtns = document.querySelectorAll('.clock-tab-btn');
  const clockLabel = document.getElementById('clock-active-label');
  const clockDate = document.getElementById('clock-active-date');
  const daysEl = document.getElementById('clock-days');
  const hoursEl = document.getElementById('clock-hours');
  const minutesEl = document.getElementById('clock-minutes');
  const secondsEl = document.getElementById('clock-seconds');

  // Interactive Sections
  const timelineContainer = document.getElementById('timeline-items-container');
  const traitsContainer = document.getElementById('traits-grid-container');
  const galleryGrid = document.getElementById('polaroid-grid-container');
  const galleryFilterBtns = document.querySelectorAll('.gallery-tab-btn');
  const loveJarWrap = document.getElementById('love-jar-wrap');
  const jarNoteText = document.getElementById('jar-note-text');
  const jarNoteMeta = document.getElementById('jar-note-meta');
  const jarDrawBtn = document.getElementById('jar-draw-btn');
  const gameNoBtn = document.getElementById('btn-game-no');
  const gameYesBtn = document.getElementById('btn-game-yes');
  const gameToast = document.getElementById('game-toast-message');
  const gameButtonsArea = document.getElementById('game-buttons-area');
  const envelopeWrap = document.getElementById('envelope-closed-wrap');
  const parchmentWrap = document.getElementById('parchment-opened-wrap');
  const parchmentBody = document.getElementById('parchment-body-text');
  const celebrationModal = document.getElementById('celebration-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  let currentClockKey = 'inRelationship';
  let clockInterval = null;
  let jarReasonIndex = 0;
  let dodgeCount = 0;
  let isMusicPlaying = false;
  let audioContext = null;
  let synthMusicInterval = null;

  // --------------------------------------------------------------------------
  // 1. INITIALIZE ARTWORK & SVGs
  // --------------------------------------------------------------------------
  function initTeddyArtwork() {
    if (window.TeddyArt) {
      if (lockTeddyWrap) {
        lockTeddyWrap.innerHTML = window.TeddyArt.renderSorryTeddy
          ? window.TeddyArt.renderSorryTeddy()
          : window.TeddyArt.renderLockTeddy();
      }
      if (heroTeddyWrap) heroTeddyWrap.innerHTML = window.TeddyArt.renderCuddleTeddies();
      const questionTeddy = document.getElementById('question-teddy-wrap');
      if (questionTeddy) questionTeddy.innerHTML = window.TeddyArt.renderMoodTeddy('blushing');
      const modalTeddy = document.getElementById('modal-celebrate-teddy');
      if (modalTeddy) modalTeddy.innerHTML = window.TeddyArt.renderMoodTeddy('hugging');
    }

    // Populate Hero Spotlight Polaroid
    if (heroSpotlightImg) {
      const heroPhoto =
        (cfg.hero && cfg.hero.spotlightPhoto) ||
        (manifest.photos && manifest.photos.hero && manifest.photos.hero[0]) ||
        (manifest.allPhotos && manifest.allPhotos[0]) ||
        'photos/1d476b7c-ff2b-4e5f-84ab-7799ae53bf1e.jpg';

      heroSpotlightImg.src = heroPhoto;
      heroSpotlightImg.onerror = function() {
        if (manifest.allPhotos && manifest.allPhotos.length > 0) {
          heroSpotlightImg.src = manifest.allPhotos[0];
        }
      };
    }
  }

  // --------------------------------------------------------------------------
  // 2. CURSOR TRAIL & SPARKLE CANVAS
  // --------------------------------------------------------------------------
  function initCursorSparkles() {
    if (!cursorCanvas) return;
    const ctx = cursorCanvas.getContext('2d');
    let width = (cursorCanvas.width = window.innerWidth);
    let height = (cursorCanvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = cursorCanvas.width = window.innerWidth;
      height = cursorCanvas.height = window.innerHeight;
    });

    const particles = [];
    const colors = ['#FF477E', '#FF759E', '#FFA8C2', '#FFD166', '#FF2A6D'];

    function addParticle(x, y) {
      particles.push({
        x,
        y,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 1.8,
        vy: (Math.random() - 1.5) * 1.8,
        alpha: 1,
        life: 0.025,
        isHeart: Math.random() > 0.4
      });
      if (particles.length > 50) particles.shift();
    }

    window.addEventListener('mousemove', (e) => {
      if (Math.random() > 0.35) addParticle(e.clientX, e.clientY);
    });

    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0] && Math.random() > 0.3) {
        addParticle(e.touches[0].clientX, e.touches[0].clientY);
      }
    });

    function drawHeart(c, x, y, size, color, alpha) {
      c.save();
      c.globalAlpha = alpha;
      c.fillStyle = color;
      c.translate(x, y);
      c.beginPath();
      const topCurveHeight = size * 0.3;
      c.moveTo(0, topCurveHeight);
      c.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
      c.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size, 0, size * 1.3);
      c.bezierCurveTo(0, size, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
      c.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
      c.closePath();
      c.fill();
      c.restore();
    }

    function render() {
      ctx.clearRect(0, 0, width, height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.life;
        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }
        if (p.isHeart) {
          drawHeart(ctx, p.x, p.y, p.size, p.color, p.alpha);
        } else {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size / 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
      requestAnimationFrame(render);
    }
    render();
  }

  // --------------------------------------------------------------------------
  // 3. AMBIENT FLOATING HEARTS & PETALS
  // --------------------------------------------------------------------------
  function initAmbientParticles() {
    if (!ambientLayer) return;
    const icons = ['🌸', '💖', '🧸', '✨', '🍓', '🎀', '💕', '💋'];
    for (let i = 0; i < 26; i++) {
      const el = document.createElement('div');
      el.className = 'ambient-heart';
      el.textContent = icons[Math.floor(Math.random() * icons.length)];
      el.style.left = `${Math.random() * 100}vw`;
      el.style.fontSize = `${Math.random() * 18 + 14}px`;
      el.style.animationDuration = `${Math.random() * 12 + 10}s`;
      el.style.animationDelay = `${Math.random() * 10}s`;
      ambientLayer.appendChild(el);
    }
  }

  // --------------------------------------------------------------------------
  // 4. MUSIC PLAYER ("Die With A Smile")
  // --------------------------------------------------------------------------
  function initMusicPlayer() {
    let audioSource = null;
    if (manifest.music && manifest.music.length > 0) {
      audioSource = manifest.music[0];
    } else if (cfg.song && cfg.song.audioSrc) {
      audioSource = cfg.song.audioSrc;
    }

    if (audioEl && audioSource) {
      audioEl.src = audioSource;
      audioEl.volume = 0.75;
      audioEl.load();
    }

    if (musicToggleBtn) {
      musicToggleBtn.addEventListener('click', toggleMusic);
    }
  }

  function startSynthMelody() {
    if (synthMusicInterval) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContext) audioContext = new AudioCtx();
      if (audioContext.state === 'suspended') audioContext.resume();

      const notes = [
        261.63, 329.63, 392.00, 523.25,
        220.00, 261.63, 329.63, 440.00,
        174.61, 220.00, 261.63, 349.23,
        196.00, 246.94, 293.66, 392.00
      ];
      let step = 0;

      function playChime(freq, time, dur) {
        if (!audioContext) return;
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, time);

        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.08, time + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start(time);
        osc.stop(time + dur);
      }

      synthMusicInterval = setInterval(() => {
        if (!isMusicPlaying) return;
        const now = audioContext.currentTime;
        const freq = notes[step % notes.length];
        playChime(freq, now, 1.4);
        step++;
      }, 550);
    } catch (e) {
      console.warn('Audio synthesis fallback not supported:', e);
    }
  }

  function stopSynthMelody() {
    if (synthMusicInterval) {
      clearInterval(synthMusicInterval);
      synthMusicInterval = null;
    }
  }

  function toggleMusic() {
    if (isMusicPlaying) {
      if (audioEl) audioEl.pause();
      stopSynthMelody();
      isMusicPlaying = false;
      if (musicBars) musicBars.classList.remove('animating');
      if (musicToggleBtn) {
        musicToggleBtn.classList.remove('playing');
        musicToggleBtn.innerHTML = '▶';
      }
    } else {
      isMusicPlaying = true;
      if (musicBars) musicBars.classList.add('animating');
      if (musicToggleBtn) {
        musicToggleBtn.classList.add('playing');
        musicToggleBtn.innerHTML = '❚❚';
      }

      if (audioEl && audioEl.src) {
        const playPromise = audioEl.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.log('Falling back to gentle chime synthesis:', err);
            startSynthMelody();
          });
        }
      } else {
        startSynthMelody();
      }
    }
  }

  // --------------------------------------------------------------------------
  // 5. ENTRANCE LOCK SCREEN & SORRY NOTE INTERACTIONS
  // --------------------------------------------------------------------------
  function initLockScreen() {
    function unlock() {
      if (!lockScreen) return;
      lockScreen.classList.add('unlocked');
      burstConfetti();
      if (!isMusicPlaying) toggleMusic();
    }

    if (unlockBtn) unlockBtn.addEventListener('click', unlock);
    if (lockTeddyWrap) lockTeddyWrap.addEventListener('click', unlock);

    const sorryPoutBtn = document.getElementById('sorry-pout-btn');
    const sorryNakhreMsg = document.getElementById('sorry-nakhre-msg');
    let poutCount = 0;

    const poutReplies = [
      "Aww baby please maaf krdo na... Shomayyy loves you so much! 🥺🧸",
      "Pakka promise kabhi gussa nahi dilaunga meri Latu ko! Please baby? 🌸",
      "Look how sorry Teddy is, kaan bhi pakad liye! Ab to maaf krdo! 🥺💖",
      "Baby please smile na... Your smile is Shomayyy's favorite thing! ✨",
      "Chalo ab zyaada nakhre mat dikhao cutie pie, click 'Maaf Kiya'! 👉💖"
    ];

    if (sorryPoutBtn) {
      sorryPoutBtn.addEventListener('click', () => {
        poutCount++;
        const reply = poutReplies[poutCount % poutReplies.length];
        if (sorryNakhreMsg) {
          sorryNakhreMsg.innerHTML = `<span style="color: #D81B60; font-size: 1rem; font-weight: 800;">${reply}</span>`;
        }
        if (unlockBtn) {
          unlockBtn.style.transform = 'scale(1.08)';
          unlockBtn.style.boxShadow = '0 0 35px rgba(255, 42, 109, 0.7)';
        }
        burstConfetti();
      });
    }
  }

  function burstConfetti() {
    for (let i = 0; i < 45; i++) {
      const drop = document.createElement('div');
      drop.textContent = ['💖', '🌸', '✨', '🧸', '🎀', '🍓', '💋'][Math.floor(Math.random() * 7)];
      drop.style.position = 'fixed';
      drop.style.left = `${Math.random() * 80 + 10}vw`;
      drop.style.top = `${Math.random() * 30 + 10}vh`;
      drop.style.fontSize = `${Math.random() * 22 + 16}px`;
      drop.style.zIndex = '12000';
      drop.style.pointerEvents = 'none';
      drop.style.transition = 'all 1.6s cubic-bezier(0.25, 1, 0.5, 1)';
      document.body.appendChild(drop);

      requestAnimationFrame(() => {
        drop.style.transform = `translate(${(Math.random() - 0.5) * 300}px, ${Math.random() * 400 + 150}px) rotate(${Math.random() * 360}deg)`;
        drop.style.opacity = '0';
      });

      setTimeout(() => drop.remove(), 1800);
    }
  }

  // --------------------------------------------------------------------------
  // 6. RELATIONSHIP CLOCKS
  // --------------------------------------------------------------------------
  function initClocks() {
    function updateClock() {
      const dateInfo = cfg.dates ? cfg.dates[currentClockKey] : null;
      if (!dateInfo || !dateInfo.iso) return;

      const target = new Date(dateInfo.iso).getTime();
      const now = new Date().getTime();
      const diff = Math.max(0, now - target);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      if (daysEl) daysEl.textContent = days.toLocaleString();
      if (hoursEl) hoursEl.textContent = hours < 10 ? '0' + hours : hours;
      if (minutesEl) minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
      if (secondsEl) secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    clockTabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        clockTabBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentClockKey = btn.dataset.clock;

        const info = cfg.dates[currentClockKey];
        if (info) {
          if (clockLabel) clockLabel.textContent = info.label;
          if (clockDate) clockDate.textContent = info.dateDisplay;
        }
        updateClock();
      });
    });

    updateClock();
    clockInterval = setInterval(updateClock, 1000);
  }

  // --------------------------------------------------------------------------
  // 7. STORYBOOK TIMELINE RENDERER
  // --------------------------------------------------------------------------
  function renderTimeline() {
    if (!timelineContainer || !cfg.timeline) return;
    timelineContainer.innerHTML = '';

    const timelinePhotos =
      (manifest.photos && manifest.photos.timeline && manifest.photos.timeline.length > 0)
        ? manifest.photos.timeline
        : [
            "photos/IMG_0420.JPG",
            "photos/IMG_0427.JPG",
            "photos/IMG_0431.JPG",
            "photos/IMG_0466.JPG",
            "photos/IMG_0562.JPG"
          ];

    cfg.timeline.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'timeline-item';

      const photoSrc = item.photo || timelinePhotos[index] || '';
      let photoHtml = '';

      if (photoSrc) {
        photoHtml = `
          <div class="timeline-card-photo-wrap">
            <img src="${photoSrc}" alt="${item.title}" loading="lazy" onerror="this.style.display='none'">
          </div>
        `;
      } else {
        photoHtml = `
          <div class="timeline-card-photo-wrap">
            ${window.TeddyArt ? window.TeddyArt.renderPolaroidIllustration('cuddle-teddies', 'photos/timeline/') : ''}
          </div>
        `;
      }

      card.innerHTML = `
        <div class="timeline-node">
          ${item.badgeIcon || '💖'}
        </div>
        <div class="timeline-card">
          <span class="timeline-date-badge">${item.date}</span>
          <h3 class="timeline-card-title">${item.title}</h3>
          <p class="timeline-card-desc">${item.description}</p>
          ${photoHtml}
        </div>
      `;
      timelineContainer.appendChild(card);
    });
  }

  // --------------------------------------------------------------------------
  // 8. "7 THINGS SHOMAYYY LOVES ABOUT KHUSHIII"
  // --------------------------------------------------------------------------
  function renderTraitCards() {
    if (!traitsContainer) return;
    const traits = [
      {
        title: 'Her Never-Give-Up Spirit',
        mood: 'hugging',
        desc: 'No matter how tough things get or how stubborn I am, you NEVER give up on me. That loyalty makes me love you infinitely.',
        badge: 'My Strongest Pillar 👑'
      },
      {
        title: 'Her Cute Little Anger',
        mood: 'angry-cute',
        desc: 'Even when you get mad at me with that cute pouty face, you look 1000x more adorable! Calming my angry cutie is my favorite hobby.',
        badge: 'Irresistibly Adorable 😤💗'
      },
      {
        title: 'Her Pure Love For Me',
        mood: 'love-eyes',
        desc: 'The tenderness, care, and warmth you surround me with makes me feel like the luckiest guy in the whole world.',
        badge: '100% Pure Love 💖'
      },
      {
        title: 'Her Magical Smile',
        mood: 'blushing',
        desc: 'One genuine smile from my Latu lights up my whole universe and erases any bad day in 0.1 seconds flat.',
        badge: 'My Favorite View 😊✨'
      },
      {
        title: 'Her Gorgeous Face',
        mood: 'crown',
        desc: 'From the first time I saw you at 13:42 on 28 Oct 2024 to this very day, your face is my favorite work of art.',
        badge: 'Prettiest in the World 🌸'
      },
      {
        title: 'Her Mesmerizing Eyes',
        mood: 'love-eyes',
        desc: 'Your eyes speak a thousand words of love before you even say a single syllable. I could look into them forever.',
        badge: 'Deep & Beautiful 👀💫'
      },
      {
        title: 'Her Pretty Lips',
        mood: 'blushing',
        desc: 'Whether you are laughing, speaking sweet words, or pouting when you are mad at me—your lips are irresistible.',
        badge: 'Sweetest Melody 💋🍓'
      }
    ];

    traitsContainer.innerHTML = '';
    traits.forEach((t) => {
      const card = document.createElement('div');
      card.className = 'trait-card';
      card.innerHTML = `
        <div class="trait-mini-teddy-wrap">
          ${window.TeddyArt ? window.TeddyArt.renderMoodTeddy(t.mood) : '🧸'}
        </div>
        <span class="timeline-date-badge">${t.badge}</span>
        <h3 class="trait-card-title">${t.title}</h3>
        <p class="trait-card-text">${t.desc}</p>
        <div class="trait-tap-hint">Tap for teddy love! 💖</div>
      `;

      card.addEventListener('click', () => {
        burstConfetti();
      });

      traitsContainer.appendChild(card);
    });
  }

  // --------------------------------------------------------------------------
  // 9. POLAROID WALL & SCRAPBOOK FOLDERS
  // --------------------------------------------------------------------------
  function renderPolaroidWall(filterCategory = 'all') {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    // First, check configured galleryPhotos in love-config.js (they now have real src!)
    const configList = cfg.galleryPhotos || [];
    const allManifest = manifest.allPhotos || [];
    const folderManifest = (manifest.photos && manifest.photos[filterCategory]) || [];

    let photosToShow = [];

    if (filterCategory === 'all') {
      if (configList.length > 0) {
        photosToShow = configList;
      } else {
        photosToShow = allManifest;
      }
    } else {
      const fromConfig = configList.filter((p) => p.category === filterCategory);
      if (fromConfig.length > 0) {
        photosToShow = fromConfig;
      } else {
        photosToShow = folderManifest;
      }
    }

    photosToShow.forEach((item, idx) => {
      const isString = typeof item === 'string';
      const imgSrc = isString ? item : (item.src || '');
      const title = isString ? `Memory #${idx + 1} with Latu 💖` : item.title;
      const note = isString ? "Khushiii, you make my whole world brighter every single day." : item.secretNote;
      const dateText = isString ? `Special Moment` : item.date;

      const card = document.createElement('div');
      card.className = 'polaroid-card-3d';

      let frontVisual = '';
      if (imgSrc) {
        frontVisual = `
          <div class="polaroid-photo-frame">
            <img src="${imgSrc}" alt="${title}" loading="lazy" onerror="this.onerror=null; this.src='photos/1d476b7c-ff2b-4e5f-84ab-7799ae53bf1e.jpg';">
          </div>
        `;
      } else {
        frontVisual = `
          <div class="polaroid-photo-frame">
            ${window.TeddyArt ? window.TeddyArt.renderPolaroidIllustration('princess', 'photos/') : ''}
          </div>
        `;
      }

      card.innerHTML = `
        <div class="polaroid-inner">
          <div class="polaroid-face polaroid-front">
            ${frontVisual}
            <div class="polaroid-caption">
              <h4 class="polaroid-title">${title}</h4>
              <div class="polaroid-date-tag">${dateText}</div>
              <div class="polaroid-flip-hint">↺ Tap or hover to read secret note</div>
            </div>
          </div>
          <div class="polaroid-face polaroid-back">
            <div class="polaroid-back-teddy">
              ${window.TeddyArt ? window.TeddyArt.renderMoodTeddy('blushing') : '🧸'}
            </div>
            <span class="polaroid-secret-tag">Shomayyy's Secret Note 💌</span>
            <p class="polaroid-secret-note">"${note}"</p>
            <div class="polaroid-back-sign">Always Yours, Shomayyy 💖</div>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });

      galleryGrid.appendChild(card);
    });
  }

  function initGalleryFilters() {
    galleryFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        galleryFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        renderPolaroidWall(btn.dataset.filter);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 10. PINK HEART JAR
  // --------------------------------------------------------------------------
  function initLoveJar() {
    const reasons = cfg.loveJarReasons || [
      'Your unforgettable smile that brightens my whole life 💖',
      'The sweet way you say my name and care for me 🌸',
      '28 Oct 2024 at 13:42 when I first saw you 🤗'
    ];

    function drawReason() {
      const reason = reasons[jarReasonIndex % reasons.length];
      jarReasonIndex++;

      if (jarNoteText) jarNoteText.textContent = reason;
      if (jarNoteMeta) jarNoteMeta.textContent = `Reason #${jarReasonIndex} • From Shomayyy to his Latu 💕`;
      burstConfetti();
    }

    if (loveJarWrap) loveJarWrap.addEventListener('click', drawReason);
    if (jarDrawBtn) jarDrawBtn.addEventListener('click', drawReason);

    drawReason();
  }

  // --------------------------------------------------------------------------
  // 11. PLAYFUL "ASK THE TEDDY" GAME
  // --------------------------------------------------------------------------
  function initTeddyGame() {
    const dodges = (cfg.teddyQuestion && cfg.teddyQuestion.noButtonDodges) || [
      'Hey! That button slipped! 🙈',
      'Nice try Latu, only YES is allowed! 💖'
    ];

    function dodgeNo() {
      dodgeCount++;
      const toastMsg = dodges[dodgeCount % dodges.length];
      if (gameToast) gameToast.textContent = toastMsg;

      if (!gameButtonsArea || !gameNoBtn) return;
      const rect = gameButtonsArea.getBoundingClientRect();
      const isMobile = window.innerWidth <= 768;
      const maxX = Math.max(30, Math.min(rect.width - 110, isMobile ? 120 : 260));
      const maxY = isMobile ? 50 : 80;

      const randomX = Math.floor(Math.random() * maxX) - maxX / 2;
      const randomY = Math.floor(Math.random() * maxY) - maxY / 2;

      gameNoBtn.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.92)`;
    }

    if (gameNoBtn) {
      gameNoBtn.addEventListener('mouseover', dodgeNo);
      gameNoBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        dodgeNo();
      });
    }

    if (gameYesBtn) {
      gameYesBtn.addEventListener('click', () => {
        burstConfetti();
        if (celebrationModal) celebrationModal.classList.add('active');
      });
    }

    if (modalCloseBtn && celebrationModal) {
      modalCloseBtn.addEventListener('click', () => {
        celebrationModal.classList.remove('active');
      });
    }
  }

  // --------------------------------------------------------------------------
  // 12. SEALED WAX LOVE LETTER FINALE (With Image.jpeg Support!)
  // --------------------------------------------------------------------------
  function initLoveLetter() {
    if (parchmentBody) {
      let letterHtml = '';

      const letterImg =
        (manifest.loveLetterImages && manifest.loveLetterImages.length > 0 && manifest.loveLetterImages[0]) ||
        (cfg.loveLetter && cfg.loveLetter.letterImage) ||
        'love-letter/Image.jpeg';

      if (letterImg) {
        letterHtml += `
          <div class="parchment-photo-frame" style="margin-bottom: 2.2rem; border-radius: 20px; overflow: hidden; border: 3px solid var(--pink-300); box-shadow: 0 12px 35px rgba(255, 71, 126, 0.22);">
            <img src="${letterImg}" alt="Love Letter from Shomayyy" style="width: 100%; display: block; border-radius: 16px;" onerror="this.style.display='none'">
          </div>
        `;
      }

      if (manifest.loveLetterText) {
        const paragraphs = manifest.loveLetterText.split('\n\n');
        letterHtml += paragraphs.map((p) => `<p>${p.trim()}</p>`).join('');
      } else if (cfg.loveLetter && cfg.loveLetter.paragraphs) {
        letterHtml += cfg.loveLetter.paragraphs.map((p) => `<p>${p}</p>`).join('');
      }

      parchmentBody.innerHTML = letterHtml;
    }

    if (envelopeWrap) {
      envelopeWrap.addEventListener('click', () => {
        envelopeWrap.style.display = 'none';
        if (parchmentWrap) {
          parchmentWrap.classList.add('active');
        }
        burstConfetti();
      });
    }
  }

  // --------------------------------------------------------------------------
  // 13. BEAR HUG METER MICRO-INTERACTION
  // --------------------------------------------------------------------------
  function initHugCounter() {
    const sendHugBtn = document.getElementById('send-hug-btn');
    const hugCountNumber = document.getElementById('hug-count-number');
    let hugs = parseInt(localStorage.getItem('latu_hugs_shomayyy') || '0', 10);

    if (hugCountNumber) hugCountNumber.textContent = hugs;

    if (sendHugBtn) {
      sendHugBtn.addEventListener('click', () => {
        hugs++;
        localStorage.setItem('latu_hugs_shomayyy', hugs.toString());
        if (hugCountNumber) hugCountNumber.textContent = hugs;
        burstConfetti();
      });
    }
  }

  // --------------------------------------------------------------------------
  // 14. PHOTO LIGHTBOX MODAL (High-Resolution Zoom & Kiss Interaction)
  // --------------------------------------------------------------------------
  function initLightbox() {
    const modal = document.getElementById('photo-lightbox-modal');
    const closeBtn = document.getElementById('lightbox-close-btn');
    const imgEl = document.getElementById('lightbox-img');
    const titleEl = document.getElementById('lightbox-title');
    const secretEl = document.getElementById('lightbox-secret');
    const heartBtn = document.getElementById('lightbox-heart-btn');

    function openLightbox(src, title = 'My Latu 🌸', secret = '') {
      if (!modal || !imgEl) return;
      imgEl.src = src;
      if (titleEl) titleEl.textContent = title;
      if (secretEl) secretEl.textContent = secret ? `"${secret}"` : '';
      modal.classList.add('active');
    }

    function closeLightbox() {
      if (modal) modal.classList.remove('active');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeLightbox();
      });
    }

    if (heartBtn) {
      heartBtn.addEventListener('click', () => {
        burstConfetti();
        heartBtn.innerHTML = '<span>Shomayyy felt that kiss! 🥰💋</span>';
        setTimeout(() => {
          heartBtn.innerHTML = '<span>Send A Kiss To Shomayyy 💋💖</span>';
        }, 2500);
      });
    }

    // Attach to Hero Spotlight
    if (heroSpotlightCard) {
      heroSpotlightCard.addEventListener('click', () => {
        const src = (heroSpotlightImg && heroSpotlightImg.src) || 'photos/1d476b7c-ff2b-4e5f-84ab-7799ae53bf1e.jpg';
        openLightbox(src, 'Our First Meet • 28 Oct at 13:42 💖', 'Seeing your face in person was the best moment of my life.');
      });
    }

    // Attach to Polaroid Photos
    document.addEventListener('click', (e) => {
      const img = e.target.closest('.polaroid-photo-frame img, .timeline-card-photo-wrap img, .parchment-photo-frame img');
      if (img) {
        e.stopPropagation();
        const card = img.closest('.polaroid-card-3d');
        let title = 'Khushiii (My Latu) 🌸';
        let secret = '';
        if (card) {
          const t = card.querySelector('.polaroid-title');
          const s = card.querySelector('.polaroid-secret-note');
          if (t) title = t.textContent;
          if (s) secret = s.textContent.replace(/"/g, '');
        }
        openLightbox(img.src, title, secret);
      }
    });
  }

  // --------------------------------------------------------------------------
  // DOM READY
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initTeddyArtwork();
    initCursorSparkles();
    initAmbientParticles();
    initMusicPlayer();
    initLockScreen();
    initClocks();
    renderTimeline();
    renderTraitCards();
    renderPolaroidWall('all');
    initGalleryFilters();
    initLoveJar();
    initTeddyGame();
    initLoveLetter();
    initHugCounter();
    initLightbox();
  });
})();
