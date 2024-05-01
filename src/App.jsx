  function App(){
    const nome = "Erivelton"

    function retornaNome(){
      return nome
    }

    const pessoa = {
      nome: 'Eri'
    }

    let estaDeDia = false;

    return(
      <div>
        <h1>Olá{pessoa.nome} </h1>
        <h2>subtitulo</h2>
      </div>
    )


  }

  export default App




// // src/App.js

// import React, { useState } from 'react';

// function App() {
//   const [altura, setAltura] = useState('');
//   const [peso, setPeso] = useState('');
//   const [imc, setImc] = useState(null);

//   const calcularIMC = () => {
//     const alturaMetros = parseFloat(altura) / 100;
//     const pesoFloat = parseFloat(peso);
//     const imcCalculado = pesoFloat / (alturaMetros * alturaMetros);
//     setImc(imcCalculado.toFixed(2));
//   };

//   return (
//     <div className="App">
//       <h1>Calculadora de IMC</h1>
//       <input
//         type="number"
//         placeholder="Altura (cm)"
//         value={altura}
//         onChange={(e) => setAltura(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Peso (kg)"
//         value={peso}
//         onChange={(e) => setPeso(e.target.value)}
//       />
//       <button onClick={calcularIMC}>Calcular IMC</button>
//       {imc && <p>Seu IMC é {imc}</p>}
//     </div>
//   );
// }

// export default App;
