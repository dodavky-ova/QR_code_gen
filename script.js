let qrCodeInstance = null;

function clearQRCode() {
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";
  qrContainer.style.opacity = 0;
}

function generateQRCode() {
  clearQRCode();
  const downloadBtn = document.getElementById("downloadBtn");
  downloadBtn.classList.add("visible");   
  const url = document.getElementById("urlInput").value.trim();
  if (!url) return;

  const qrContainer = document.getElementById("qrcode");
  qrCodeInstance = new QRCode(qrContainer, {
    text: url,
    width: 200,
    height: 200,
    correctLevel: QRCode.CorrectLevel.H
  });
  fadeIn(qrContainer);
}

function generateWifiQRCode() {
  clearQRCode();
  const ssid = document.getElementById("ssidInput").value.trim();
  const encryption = document.getElementById("encryptionInput").value;
  const password = document.getElementById("wifiPasswordInput").value.trim();

  if (!ssid) return;

  const wifiString = `WIFI:T:${encryption};S:${ssid};P:${password};;`;
  const qrContainer = document.getElementById("qrcode");
  qrCodeInstance = new QRCode(qrContainer, {
    text: wifiString,
    width: 200,
    height: 200,
    correctLevel: QRCode.CorrectLevel.H
  });

  fadeIn(qrContainer);
}

function fadeIn(element) {
  element.style.opacity = 0;
  element.style.transition = "opacity 0.5s ease-in-out";
  requestAnimationFrame(() => {
    element.style.opacity = 1;
  });
}

function toggleMode(mode) {
  const urlSection = document.getElementById("urlSection");
  const wifiSection = document.getElementById("wifiSection");
  const downloadBtn = document.getElementById("downloadBtn");
  clearQRCode();
  downloadBtn.style.display = "none";

  if (mode === "wifi") {
    urlSection.style.display = "none";
    wifiSection.style.display = "block";
  } else {
    wifiSection.style.display = "none";
    urlSection.style.display = "block";
  }
}

function downloadQRCode() {
  const canvas = document.querySelector("#qrcode canvas");
  if (!canvas) return;
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "qrcode.png";
  link.click();
}

// Ukázat tlačítko pro stažení když je QR kód vygenerovaný
const qrObserver = new MutationObserver(() => {
  const hasCanvas = document.querySelector("#qrcode canvas") !== null;
  const btn = document.getElementById("downloadBtn");
  btn.style.display = hasCanvas ? "block" : "none";
});

qrObserver.observe(document.getElementById("qrcode"), { childList: true });

const urlBtn = document.getElementById("urlModeBtn");
const wifiBtn = document.getElementById("wifiModeBtn");

urlBtn.classList.add("active");

urlBtn.addEventListener("click", () => {
  urlBtn.classList.add("active");
  wifiBtn.classList.remove("active");
  // zobraz klasický QR generátor
});

wifiBtn.addEventListener("click", () => {
  wifiBtn.classList.add("active");
  urlBtn.classList.remove("active");
  // zobraz Wi-Fi generátor
});


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

