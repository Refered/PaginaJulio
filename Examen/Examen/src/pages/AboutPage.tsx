import React, { useState } from 'react';

function AboutPage() {
  const [inputValue, setInputValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('libras');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };

  const handleUnitChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedUnit(e.target.value);
  };

  const convert = () => {
    if (selectedUnit === 'libras') {
      const kilograms = parseFloat(inputValue) / 2.20462;
      setOutputValue(`${inputValue} libras son aproximadamente ${kilograms.toFixed(2)} kilogramos`);
    } else if (selectedUnit === 'kilogramos') {
      const pounds = parseFloat(inputValue) * 2.20462;
      setOutputValue(`${inputValue} kilogramos son aproximadamente ${pounds.toFixed(2)} libras`);
    }
  };

  return (
    <div className="about">
      <h1>Conversor de LB/KG</h1>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ingrese un valor"
        />
        <select value={selectedUnit} onChange={handleUnitChange}>
          <option value="libras">Libras</option>
          <option value="kilogramos">Kilogramos</option>
        </select>
        <button onClick={convert}>Convertir</button>
      </div>
      <div>
        <p>{outputValue}</p>
      </div>
    </div>
  );
}

export default AboutPage;
