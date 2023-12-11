// components/Calculator.js
import React, { useState } from 'react';
import styles from './calculator.module.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Erro');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className={styles.calculator}>
      <input type="text" value={input} readOnly className={styles.input} />
      <button onClick={() => handleButtonClick('7')} className={styles.button}>7</button>
      <button onClick={() => handleButtonClick('8')} className={styles.button}>8</button>
      <button onClick={() => handleButtonClick('9')} className={styles.button}>9</button>
      <button onClick={() => handleButtonClick('/')} className={styles.button}>/</button>
      <button onClick={() => handleButtonClick('4')} className={styles.button}>4</button>
      <button onClick={() => handleButtonClick('5')} className={styles.button}>5</button>
      <button onClick={() => handleButtonClick('6')} className={styles.button}>6</button>
      <button onClick={() => handleButtonClick('*')} className={styles.button}>*</button>
      <button onClick={() => handleButtonClick('1')} className={styles.button}>1</button>
      <button onClick={() => handleButtonClick('2')} className={styles.button}>2</button>
      <button onClick={() => handleButtonClick('3')} className={styles.button}>3</button>
      <button onClick={() => handleButtonClick('-')} className={styles.button}>-</button>
      <button onClick={() => handleButtonClick('0')} className={styles.button}>0</button>
      <button onClick={() => handleButtonClick('.')} className={styles.button}>.</button>
      <button onClick={() => handleButtonClick('=')} className={styles.button}>=</button>
      <button onClick={() => handleButtonClick('+')} className={styles.button}>+</button>
      <button onClick={() => handleButtonClick('C')} className={styles.button}>C</button>
      
      {/* ... rest of the buttons ... */}
      <button onClick={() => handleButtonClick('=')} className={styles.resultButton}>
          Resultado: {result}
        </button>
    </div>
  );
};

export default Calculator;


