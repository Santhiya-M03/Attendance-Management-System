function generateQR() {
  const attendanceData = {
    class: "CSE-A",
    subject: "Web Technology",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  };

  const qrText = JSON.stringify(attendanceData);

  const qrUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    encodeURIComponent(qrText);

  document.getElementById("qrImage").src = qrUrl;
  document.getElementById("status").innerText =
    "QR Code generated successfully!";
}
