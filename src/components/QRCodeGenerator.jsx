import React, { useState } from "react";
import QRCode from "qrcode";

const QRCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [size, setSize] = useState(500);
  const [qrCode, setQrCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateQRCode = async () => {
    if (!url.trim()) {
      alert("Please enter a URL");
      return;
    }
    setIsLoading(true);
    try {
      const qrCodeUrl = await QRCode.toDataURL(url, {
        width: size,
        height: size,
      });
      setQrCode(qrCodeUrl);
    } catch (error) {
      console.error("Failed to generate QR", error);
    }
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQrCode(null);
    generateQRCode();
  };

  return (
    <div className="qrcode-generator">
      <div className="ctr-left">
        <form onSubmit={handleSubmit}>
          <label>
            Enter your URL below:
            <input
              type="url"
              placeholder="Enter a URL here..."
              value={url}
              onChange={(e) => {
                setQrCode(null);
                setUrl(e.target.value);
              }}
              required
            />
          </label>
          <label>
            Select QR Code size:
            <select
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
            >
              <option value="100">100x100</option>
              <option value="200">200x200</option>
              <option value="300">300x300</option>
              <option value="400">400x400</option>
              <option value="500">500x500</option>
              <option value="600">600x600</option>
            </select>
          </label>
          <button type="submit">Generate QR Code</button>
        </form>
      </div>

      {/* Conditionally render the right section */}
      {url && (isLoading || qrCode) && (
        <div className="ctr-right">
          {isLoading && <div className="spinner">Loading...</div>}
          {qrCode && (
            <div id="qrcode">
              <img src={qrCode} alt="Generated QR Code" />
              <a href={qrCode} download="qrcode.png" className="btn">
                Download QR Code
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
