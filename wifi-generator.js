document.getElementById('generateBtn').addEventListener('click', function () {
  const ssid = document.getElementById('ssid').value.trim();
  const encryption = document.getElementById('encryption').value;
  const password = document.getElementById('password').value;

  if (!ssid) {
    alert("Zadej název WiFi sítě (SSID).");
    return;
  }

  if (encryption !== "nopass" && password.trim() === "") {
    alert("Zadej heslo k WiFi síti.");
    return;
  }

  let qrText = "";

  if (encryption === "nopass") {
    qrText = `WIFI:T:nopass;S:${ssid};;`;
  } else {
    qrText = `WIFI:T:${encryption};S:${ssid};P:${password};;`;
  }

  // Vymazat starý QR kód
  const qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = "";

  new QRCode(qrDiv, {
    text: qrText,
    width: 256,
    height: 256,
    correctLevel: QRCode.CorrectLevel.H
  });
});

