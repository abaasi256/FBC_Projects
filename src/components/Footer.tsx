export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Tel: (010) 822 4628</p>
            <p>Cell: 072 320 6187</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <p>Block B Infinity Business Park</p>
            <p>4 Piet Wenning Road, Fourways</p>
            <p>South Africa</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <p>NHBRC REG NO: 23841</p>
            <p>B-BBEE Level 1</p>
            <p>CIDB registered</p>
          </div>
        </div>
      </footer>
    );
  }