 let canvas;

function generateQRCode() {
  const url = document.getElementById("urlInput").value;
  const qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = ""; // Vyčisti předchozí

  if (!url) {
    alert("Link is not valid. Insert valid link");
    return;
  }

  canvas = document.createElement("canvas");
  qrcodeContainer.appendChild(canvas);

  QRCode.toCanvas(canvas, url, {
    width: 256,
    margin: 2,
    color: {
      dark: "#000000",
      light: "#ffffff"
    }
  }, function (error) {
    if (error) {
      console.error(error);
      alert("Failed to generate QR code.");
      return;
    }

    qrcodeContainer.classList.add("visible");

    // Zobrazit download tlačítko
    setTimeout(() => {
      document.getElementById("downloadBtn").style.opacity = 1;
    }, 300);
  });
}

function downloadQRCode() {
  if (!canvas) {
    alert("QR wasn't generated yet");
    return;
  }

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "qrcode.png";

  // Simuluj kliknutí (funguje i na mobilech)
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


    function toggleMenu() {
      document.getElementById("navLinks").classList.toggle("active");
    }


  let lastScrollTop = 0;
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 50) {
      // Scrolluješ dolů
      navbar.classList.add('hidden');
    } else {
      // Scrolluješ nahoru
      navbar.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

