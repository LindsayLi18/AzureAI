import React, { useState } from 'react';
import PdfPopup from './components/PdfPopup';
import styles from './styles/App.module.css';

const App = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const ask = async () => {
    try {
      const res = await fetch(`https://azure-app-001-amc0a6csfvg6chg6.australiaeast-01.azurewebsites.net/api/ask`, {
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
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Vector Database Assistant</h1>
        <p className={styles.subtitle}>Ask questions about the content in our vector database</p>
      </header>

      <div className={styles.questionSection}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Enter your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className={styles.input}
          />
          <button
            onClick={ask}
            className={styles.button}
          >
            Ask Question
          </button>
        </div>
      </div>

      {answer && (
        <div className={styles.answerSection}>
          <h2>Answer</h2>
          <div className={styles.answer}>{answer}</div>
        </div>
      )}

      <PdfPopup pdfUrl="./China-Tourism-Industry-Action-Plan.pdf" />
    </div>
  );
}

export default App;