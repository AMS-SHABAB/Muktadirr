 // Example news data
    const newsItems = [
      {
        title: "Art Exhibition 'Visions of Tomorrow' Open Now!",
        type: "Exhibition Date",
        date: "2025-07-01 18:00:00"
      },
      {
        title: "Breaking: City Museum Extends Hours for Summer",
        type: "Last Updated",
        date: new Date().toISOString()
      },
      {
        title: "New Interactive Gallery Launched!",
        type: "Last Updated",
        date: new Date().toISOString()
      },
      {
        title: "Photography Contest Winners Announced",
        type: "Exhibition Date",
        date: "2025-07-20 14:00:00"
      }
    ];

    // Format date
    function formatDate(dateStr) {
      const d = new Date(dateStr);
      return d.toLocaleString('en-US', {
        year: 'numeric', month: 'short', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false
      });
    }

    function renderNewsItems() {
      const track = document.getElementById('tickerTrack');
      track.innerHTML = '';

      // Render each news item as a ticker entry
      newsItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'news-item';
        div.innerHTML = `
          <span class="dot"></span>
          <span class="news-title">${item.title}</span>
          <span class="news-date">${item.type}: ${formatDate(item.date)}</span>
        `;
        track.appendChild(div);
      });

      // Duplicate items for seamless scrolling
      newsItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'news-item';
        div.innerHTML = `
          <span class="dot"></span>
          <span class="news-title">${item.title}</span>
          <span class="news-date">${item.type}: ${formatDate(item.date)}</span>
        `;
        track.appendChild(div);
      });
    }

    // For dynamic "Last Updated" items
    function updateDynamicDates() {
      newsItems.forEach((item, idx) => {
        if (item.type === "Last Updated") {
          newsItems[idx].date = new Date().toISOString();
        }
      });
      renderNewsItems();
    }

    renderNewsItems();
    setInterval(updateDynamicDates, 1000); // Update "Last Updated" every second
