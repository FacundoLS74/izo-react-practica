import React, { useState, useEffect } from 'react';

const LogicGates = ({ input1, checkbox, selectedGate }) => {
  const [result, setResult] = useState(0);

  useEffect(() => {
    const calculateResult = () => {
      if (selectedGate === 'or') {
        setResult(input1 || checkbox ? 1 : 0);
      } else if (selectedGate === 'and') {
        setResult(input1 && checkbox ? 1 : 0);
      } else if (selectedGate === 'nand') {
        setResult(!(input1 && checkbox) ? 1 : 0);
      } else if (selectedGate === 'nor') {
        setResult(!(input1 || checkbox) ? 1 : 0);
      } else if (selectedGate === 'xor') {
        setResult(input1 !== checkbox ? 1 : 0);
      } else {
        setResult(0); // Valor predeterminado
      }
    };

    calculateResult();
  }, [input1, checkbox, selectedGate]);

  return (
    <div>
      Salida: {result}
    </div>
  );
};

export default LogicGates;
