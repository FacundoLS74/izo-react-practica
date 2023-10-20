import { useState } from "react";


export default function Practica3({ props }) {
    const [arr, setArr] = useState([]);

    const [valorCajaTexto, setValorCajaTexto] = useState('');
    const onCajaTextoChange = (event) => {
        setValorCajaTexto(event.target.value);
    }

    const onClickHandler = () => {
        let nArr = [...arr, valorCajaTexto];
        setArr(nArr);
    }

    const deleteHandler = (index) => { // toma la posición del elemento a borrar
        const UpdateArr = [...arr]; // copia el array
        UpdateArr.splice(index, 1); // splice sirve para elminar elementos de un array. En este caso se elimina 1 solo elemento
        setArr(UpdateArr); // se actualiza el array
    }

    const EditHandler = (index) => {
        const newValue = prompt("Ingresar el nuevo valor:"); // definimos newValue y mostramos el mensaje
        if (newValue !== null) { 
            if (newValue.trim() === "") { // verifica que el texto no este vacío
                alert("Ingresa un valor");
            } else {
                const UpdateArr = [...arr];
                UpdateArr[index] = newValue; // agarra el valor seleccionado y le asigna uno nuevo
                setArr(UpdateArr); 
            }
        }
    }
    

    return (
        <div>
            <h3>Práctica 3</h3>
            <input type="text" value={valorCajaTexto} onChange={onCajaTextoChange} />

            <button onClick={onClickHandler}>Agregar</button>
            <ul>
                {arr.map((numero, index) => (
                    <li key={index}>
                        { !isNaN(numero) ? (
                            <div>
                                {numero} - {numero % 2 === 0 ? 'PAR' : 'IMPAR'}
                            </div>
                        ) : (
                            <div>
                                <input type="text" value={numero}></input>
                                <button onClick={() => deleteHandler(index)}>Borrar</button>
                                <button onClick={() => EditHandler(index)}>Editar</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
