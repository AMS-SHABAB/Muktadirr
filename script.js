    // Countdown
    const eventDateTime = new Date('2025-07-20T18:30:00');
    function updateCountdown() {
      const now = new Date();
      let diff = eventDateTime - now;
      const countdownEl = document.getElementById('countdown-timer');
      if (diff <= 0) {
        countdownEl.textContent = "The event is now live or has begun!";
        countdownEl.classList.add('live');
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);
      const seconds = Math.floor(diff / (1000));
      countdownEl.textContent =
        (days > 0 ? days + "d " : "") +
        (hours < 10 ? "0" : "") + hours + "h " +
        (minutes < 10 ? "0" : "") + minutes + "m " +
        (seconds < 10 ? "0" : "") + seconds + "s left";
      countdownEl.classList.remove('live');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Automatic smooth scroll animation
    const autoScrollArea = document.getElementById('auto-scroll-area');
    const scrollArrow = document.getElementById('scroll-arrow');
    let autoScrollDirection = 1;
    let autoScrollPaused = false;
    let scrollTimeout;

    function autoScrollStep() {
      if (autoScrollPaused) return;
      const maxScroll = autoScrollArea.scrollHeight - autoScrollArea.clientHeight;
      if (maxScroll <= 0) {
        scrollArrow.style.opacity = "0";
        return;
      }
      scrollArrow.style.opacity = (autoScrollArea.scrollTop < maxScroll - 8) ? "0.75" : "0";
      autoScrollArea.scrollTop += autoScrollDirection * 0.7;
      if (autoScrollArea.scrollTop <= 0) {
        autoScrollDirection = 1;
      } else if (autoScrollArea.scrollTop >= maxScroll) {
        autoScrollDirection = -1;
      }
      scrollTimeout = setTimeout(autoScrollStep, 14);
    }
    setTimeout(autoScrollStep, 800);

    // Pause auto scroll on user interaction
    autoScrollArea.addEventListener('mouseenter', () => { autoScrollPaused = true; });
    autoScrollArea.addEventListener('mouseleave', () => {
      autoScrollPaused = false;
      clearTimeout(scrollTimeout);
      autoScrollStep();
    });
    autoScrollArea.addEventListener('touchstart', () => { autoScrollPaused = true; }, {passive:true});
    autoScrollArea.addEventListener('touchend', () => {
      autoScrollPaused = false;
      clearTimeout(scrollTimeout);
      autoScrollStep();
    });
    // Hide arrow when scrolled to bottom
    autoScrollArea.addEventListener('scroll', () => {
      const maxScroll = autoScrollArea.scrollHeight - autoScrollArea.clientHeight;
      scrollArrow.style.opacity = (autoScrollArea.scrollTop < maxScroll - 8) ? "0.75" : "0";
    });
