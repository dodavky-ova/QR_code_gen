    let qr;

    function generateQRCode() {
      const url = document.getElementById("urlInput").value;
      const qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = ""; // Vymaže předchozí QR

      if (!url) {
        alert("Link is not valid. Insert valid link");
        return;
      }
      
      qr = new QRCode(qrcodeContainer, {
        text: url,
        width: 256,
        height: 256,
        correctLevel: QRCode.CorrectLevel.H,
        opacity: 1
      });
        
      // Zobrazit kontejner QR kódu (s paddingem a pozadím)
      qrcodeContainer.classList.add("visible");

      // Počkej chvilku, než se vygeneruje QR kód, pak ukaž tlačítko
      setTimeout(() => {
        document.getElementById("downloadBtn").style.opacity = 1;
      }, 500);
    }

    

    function downloadQRCode() {
      const img = document.querySelector("#qrcode img");
      if (!img) {
        alert("QR wasn't generated yet");
        return;
      }

      const link = document.createElement("a");
      link.href = img.src;
      link.download = "qrcode.png";
      link.click();
    }