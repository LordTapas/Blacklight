$("[draggable-item]").draggable({ scroll: true, scrollSpeed: 100, scrollSensitivity: 100, handle: "[draggable-handle]" });

/* CLOCK */
let clock = document.getElementById('timestamp');
setInterval(function () {
	let timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
	clock.innerText = timestamp;
  }, 1000);