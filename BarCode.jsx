import React, { useState } from 'react';
import Barcode from 'react-barcode';

function BarCode() {
  const [barcodeContent, setBarcodeContent] = useState('');

  const handleInputChange = (event) => {
    setBarcodeContent(event.target.value);
  };

  return (
    <div>
      <h2>Barcode Generator</h2>
      <div>
        <input
          type="text"
          value={barcodeContent}
          onChange={handleInputChange}
          placeholder="Enter content for barcode"
        />
      </div>
      <div>
        {barcodeContent && <Barcode value={barcodeContent} />}
      </div>
    </div>
  );
}

export default BarCode;