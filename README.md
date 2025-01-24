
# QR Code Generator

A simple web application that allows users to generate QR codes from a URL. The app provides an input field to enter a URL, a dropdown to select the size of the QR code, and an option to download the generated QR code image.

## Features

- **URL Input**: Users can input any URL to generate a QR code.
- **QR Code Size**: Choose from multiple QR code sizes (100x100, 200x200, 300x300, 400x400, 500x500, 600x600).
- **Generate QR Code**: After entering the URL, the app generates and displays the QR code.
- **Download QR Code**: Users can download the generated QR code as a PNG file.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/qr-code-generator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd qr-code-generator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to see the app in action.

## Dependencies

This project uses the following dependencies:

- **React**: A JavaScript library for building user interfaces.
- **QRCode**: A library for generating QR codes in JavaScript.

## Usage

1. Enter a URL into the input field.
2. Select the desired QR code size from the dropdown.
3. Click the "Generate QR Code" button.
4. Once the QR code is generated, you can download it as a PNG file by clicking the "Download QR Code" button.

