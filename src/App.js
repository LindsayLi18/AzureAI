import React, { useState } from 'react';
import PdfPopup from './components/PdfPopup';

const App = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const ask = async () => {
    try {
      const res = await fetch('https://azure-app-001-amc0a6csfvg6chg6.australiaeast-01.azurewebsites.net/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setAnswer(data.answer || 'No answer.');
    } catch (error) {
      console.error('Error asking question:', error);
      setAnswer('Error: Could not get an answer.');
    }
  };

  return (
    <>
        <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h3>Ask a Question about the content related to Vector DB</h3>
        <input
            type="text"
            placeholder="Enter your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{ width: '60%', padding: '0.5rem', fontSize: '1rem' }}
        />
        <button
            onClick={ask}
            style={{ marginLeft: '1rem', padding: '0.5rem 1rem', fontSize: '1rem' }}
        >
            Send
        </button>
        <pre style={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>{answer}</pre>
        </div>

        <PdfPopup pdfUrl="./China-Tourism-Industry-Action-Plan.pdf" />
    </>
  );
}

export default App;

