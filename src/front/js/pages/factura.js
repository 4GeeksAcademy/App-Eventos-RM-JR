import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/factura.css";

export const Factura = () => {
  const [facturas, setFacturas] = useState([]);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/factura")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error de respuesta: " + response.status);
      })
      .then(data => {
        // Obtener los IDs de los eventos asociados a las facturas
        const eventoIds = data.map(factura => factura.evento_id);
        // Obtener los detalles de los eventos usando los IDs obtenidos
        fetch(process.env.BACKEND_URL + "/api/eventos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ eventoIds })
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Error de respuesta: " + response.status);
          })
          .then(eventosData => {
            // Combinar los detalles de los eventos con las facturas
            const facturasConEventos = data.map(factura => {
              const evento = eventosData.find(evento => evento.id === factura.evento_id);
              return { ...factura, evento };
            });
            setFacturas(facturasConEventos);
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="invoicecard">
      <div className="row">
        {facturas.map(factura => (
          <div className="col-lg-4 col-sm-6" key={factura.id}>
            <div className="flip-card">
              <div className="flip-card-back-content">
                <p>{factura.precio}</p>
                <p>{factura.fecha}</p>
                <p>{factura.cantidad}</p>
                <p>{factura.evento.nombre}</p> {/* Corregido: Acceder al campo "nombre" de "evento" */}
                <button className="button-64" role="button">
                  <span className="text">
                    <Link to={`/event/${factura.evento.id}`}>+ info</Link> {/* Corregido: Acceder al campo "id" de "evento" */}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};