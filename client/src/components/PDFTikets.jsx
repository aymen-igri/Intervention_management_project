import { useRef } from 'react';
import jsPDF from 'jspdf';

export default function App() {
  const printRef = useRef();

  const handleDownload = async () => {
    const doc = new jsPDF({ format: 'a4', unit: 'px' });

    await doc.html(printRef.current, {
      async callback(doc) {
        await doc.save('report.pdf');
      },
    });
  };

  return (
    <>
      <button onClick={handleDownload}>Generate PDF</button>

      <div ref={printRef} style={{ padding: 20 }}>
        <h1>Sales Report Q2 2025</h1>
        <p>Revenue: $1 234 567</p>
      </div>
    </>
  );
}