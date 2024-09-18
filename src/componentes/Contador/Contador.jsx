import React, { useState } from "react";
import Swal from 'sweetalert2';
import "./Contador.css";  // Asegúrate de tener el CSS separado

const Contador = ({ inicial, stock, funcionAgregar }) => {

    const [contador, setContador] = useState(inicial)

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }

    const handleAgregar = () => {
        funcionAgregar(contador);
        // Mostrar alerta SweetAlert
        Swal.fire({
            title: '¡Producto agregado!',
            text: `Has agregado ${contador} productos al carrito.`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000, // Se cerrará automáticamente después de 2 segundos
            timerProgressBar: true, // Barra de progreso del temporizador
        });
    }

    return (
        <>
            <div className="contador-container">
                <div className="contador-controls">
                    <button onClick={restarContador}> - </button>
                    <strong>{contador}</strong>
                    <button onClick={sumarContador}> + </button>
                </div>

                <button className="agregar-btn" onClick={handleAgregar}> Agregar al carrito</button>
            </div>
        </>
    )
}

export default Contador;
