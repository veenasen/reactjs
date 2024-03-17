import React, { useState } from 'react';
import QRCode from 'qrcode.react';
function QRCodeGenerator() {
  const [qrContent, setQRContent] = useState('');

  const handleInputChange = (event) => {
    setQRContent(event.target.value);
  };

  return (
    <div>
      <h2>QR Code Generator</h2>
      <div>
        <input
          type="text"
          value={qrContent}
          onChange={handleInputChange}
          placeholder="Enter content for QR code"
        />
      </div>
      <div>
        {qrContent && <QRCode value={qrContent} />}
      </div>
    </div>
  );
}

export default QRCodeGenerator;