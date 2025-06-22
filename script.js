    // Lightweight live date updater (for all 'Last Updated' fields)
    function updateLiveDates() {
      // Find all live-date spans and update with current time
      var dateSpans = [
        document.getElementById('live-date-1'),
        document.getElementById('live-date-2'),
        document.getElementById('live-date-3'),
        document.getElementById('live-date-4')
      ];
      var now = new Date();
      var formatted = now.toLocaleString('en-GB', {
        year: '2-digit', month: 'short', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false
      });
      dateSpans.forEach(function(span){
        if(span) span.textContent = formatted;
      });
    }
    updateLiveDates();
    setInterval(updateLiveDates, 1000);
