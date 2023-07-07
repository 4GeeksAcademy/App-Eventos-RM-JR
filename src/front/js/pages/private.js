import React from "react";
import { Link } from "react-router-dom";
import "../../styles/private.css";
import calendarImage from "../../img/calendar.png";
import eventImage from "../../img/evento.jpg";
import companyImage from "../../img/empresa.png";
import dataImage from "../../img/datos.jpg";
import nextEventsImage from "../../img/proximos-eventos.jpg";
import pastEventsImage from "../../img/registro-eventos.png";
import scoreImage from "../../img/valoracion.jpg";
import invoiceImage from "../../img/factura.jpg";

export const Private = () => {




    return (
        <div className="container-fluid mt-5 justify-content-center">
            <div className="row d-flex justify-content-end mt-1 mb-5">
                <div className="col-3 btn-col align-items-start">
                    <Link to="/" className="link">
                        <button className="btn btn-custom">
                            Log out
                        </button>
                    </Link>
                </div>
            </div>
            <div className="row d-flex justify-content-center ms-4 my-2">
                <div className="col-sm-12 col-md-6 col-lg-3 card-container my-1">
                    <div className="card">
                        <div className="card__inner">
                            <div className="card__side card__side--front">
                                <div className="card__image-wrapper">
                                    <img
                                        src={eventImage}
                                        alt="Crea tu evento"
                                        className="card__image"
                                    />
                                </div>
                                <div className="card__body card__body--flex">
                                    <h3 className="card__title">Crea tu evento</h3>
                                    <i className="fa-solid fa-circle-arrow-right fa-2xl" />
                                </div>
                            </div>
                            <div className="card__side card__side--back">
                                <div className="card__body">
                                    <p>
                                        Organiza eventos memorables con Ibento. Desde conferencias y exposiciones hasta fiestas y reuniones corporativas,
                                        nuestra herramienta te ofrece todas las funcionalidades necesarias para planificar, promocionar y gestionar tus eventos
                                        de manera eficiente y exitosa.
                                    </p>
                                </div>
                                <div className="card__body-btn d-flex justify-content-center align-items-end mb-5">
                                    <Link to="/crearevento" className="link">
                                        <button className="btn btn--body-custom">
                                            Crear evento
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 card-container my-1">
                    <div className="card">
                        <div className="card__inner">
                            <div className="card__side card__side--front">
                                <div className="card__image-wrapper">
                                    <img
                                        src={calendarImage}
                                        alt="Calendario de eventos"
                                        className="card__image"
                                    />
                                </div>
                                <div className="card__body card__body--flex">
                                    <h3 className="card__title">Calendario de eventos</h3>
                                    <i className="fa-solid fa-circle-arrow-right fa-2xl" />
                                </div>
                            </div>
                            <div className="card__side card__side--back">
                                <div className="card__body">
                                    <p>
                                        Descubre un mundo lleno de oportunidades en nuestro calendario de eventos.
                                        Explora una amplia variedad de actividades, conferencias y encuentros profesionales en tu industria.
                                        Mantente al tanto de las fechas importantes y no te pierdas ninguna oportunidad de networking, aprendizaje y crecimiento.
                                    </p>
                                </div>
                                <div className="card__body-btn d-flex justify-content-center align-items-end mb-5">
                                    <Link to="/calendario" className="link">
                                        <button className="btn btn--body-custom">
                                            Calendario de eventos
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 card-container my-1">
                    <div className="card">
                        <div className="card__inner">
                            <div className="card__side card__side--front">
                                <div className="card__image-wrapper">
                                    <img
                                        src={nextEventsImage}
                                        alt="Próximos eventos"
                                        className="card__image"
                                    />
                                </div>
                                <div className="card__body card__body--flex">
                                    <h3 className="card__title">Próximos eventos</h3>
                                    <i className="fa-solid fa-circle-arrow-right fa-2xl" />
                                </div>
                            </div>
                            <div className="card__side card__side--back">
                                <div className="card__body">
                                    <p>
                                        Mantén tus ojos en el futuro y prepárate para los próximos eventos más emocionantes.
                                        Nuestro catálogo incluye una selección de eventos próximos en diferentes industrias.
                                        Descubre nuevas tendencias, conecta con expertos y amplía tu red de contactos mientras te sumerges en experiencias enriquecedoras.
                                    </p>
                                </div>
                                <div className="card__body-btn d-flex justify-content-center align-items-end mb-5">
                                    <Link to="/futuroseventos" className="link">
                                        <button className="btn btn--body-custom">
                                            Próximos eventos
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 card-container my-1">
                    <div className="card">
                        <div className="card__inner">
                            <div className="card__side card__side--front">
                                <div className="card__image-wrapper">
                                    <img
                                        src={pastEventsImage}
                                        alt="Eventos realizados"
                                        className="card__image"
                                    />
                                </div>
                                <div className="card__body card__body--flex">
                                    <h3 className="card__title">Eventos realizados</h3>
                                    <i className="fa-solid fa-circle-arrow-right fa-2xl" />
                                </div>
                            </div>
                            <div className="card__side card__side--back">
                                <div className="card__body">
                                    <p>
                                        Revive los momentos destacados de los eventos realizados en nuestra plataforma.
                                        Explora los logros, las conexiones y las oportunidades generadas en eventos anteriores.
                                        A través de testimonios, imágenes y estadísticas, te mostraremos el impacto que nuestros eventos han tenido en la comunidad empresarial.
                                    </p>
                                </div>
                                <div className="card__body-btn d-flex justify-content-center align-items-end mb-5">
                                    <Link to="/eventospasados" className="link">
                                        <button className="btn btn--body-custom">
                                            Eventos realizados
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center ms-4 my-2">
                <div className="col-sm-12 col-md-6 col-lg-3 card-container my-1">
                    <div className="card">
                        <div className="card__inner">
                            <div className="card__side card__side--front">
                                <div className="card__image-wrapper">
                                    <img
                                        src={invoiceImage}
                                        alt="Facturación"
                                        className="card__image"
                                    />
                                </div>
                                <div className="card__body card__body--flex">
                                    <h3 className="card__title">Facturación</h3>
                                    <i className="fa-solid fa-circle-arrow-right fa-2xl" />
                                </div>
                            </div>
                            <div className="card__side card__side--back">
                                <div className="card__body">
                                    <p>
                                    Accede de manera rápida y fácil a toda la información relacionada con la facturación de tus eventos. 
                                    Podrás consultar y descargar tus facturas, verificar el estado de pago, así como gestionar cualquier detalle relacionado con la facturación. 
                                    </p>
                                </div>
                                <div className="card__body-btn d-flex justify-content-center align-items-end mb-5">
                                    <Link to="/facturas" className="link">
                                        <button className="btn btn--body-custom">
                                            Facturación
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 card-container my-1">
                    <div className="card">
                        <div className="card__inner">
                            <div className="card__side card__side--front">
                                <div className="card__image-wrapper">
                                    <img
                                        src={scoreImage}
                                        alt="Valoración de eventos"
                                        className="card__image card__image--score"
                                    />
                                </div>
                                <div className="card__body card__body--flex">
                                    <h3 className="card__title">Valora tus eventos</h3>
                                    <i className="fa-solid fa-circle-arrow-right fa-2xl" />
                                </div>
                            </div>
                            <div className="card__side card__side--back">
                                <div className="card__body">
                                    <p>
                                    Te brindamos la oportunidad de compartir tus experiencias y opiniones sobre los eventos a los que has asistido.
                                    Tu opinión es valiosa para nosotros y para la comunidad. 
                                    Comparte tus valoraciones, califica los eventos y ayuda a otros clientes a tomar decisiones informadas. 
                                    </p>
                                </div>
                                <div className="card__body-btn d-flex justify-content-center align-items-end mb-5">
                                    <Link to="/valoracion" className="link">
                                        <button className="btn btn--body-custom">
                                            Valora tus eventos
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 card-container my-1">
                    <div className="card">
                        <div className="card__inner">
                            <div className="card__side card__side--front">
                                <div className="card__image-wrapper">
                                    <img
                                        src={dataImage}
                                        alt="Modifica tus datos"
                                        className="card__image"
                                    />
                                </div>
                                <div className="card__body card__body--flex">
                                    <h3 className="card__title">Modifica tus datos</h3>
                                    <i className="fa-solid fa-circle-arrow-right fa-2xl" />
                                </div>
                            </div>
                            <div className="card__side card__side--back">
                                <div className="card__body">
                                    <p>
                                        Mantén tu información actualizada y personaliza tu perfil según tus necesidades.
                                        Nuestra plataforma te permite modificar tus datos personales de manera sencilla y rápida.
                                        Actualiza tu foto de perfil, añade nuevas habilidades y mantén al día tus preferencias para recibir recomendaciones personalizadas.
                                    </p>
                                </div>
                                <div className="card__body-btn d-flex justify-content-center align-items-end mb-5">
                                    <Link to="/personal" className="link">
                                        <button className="btn btn--body-custom">
                                            Modificar datos
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 card-container my-1">
                    <div className="card">
                        <div className="card__inner">
                            <div className="card__side card__side--front">
                                <div className="card__image-wrapper">
                                    <img
                                        src={companyImage}
                                        alt="Alta de Empresa"
                                        className="card__image"
                                    />
                                </div>
                                <div className="card__body card__body--flex">
                                    <h3 className="card__title">Alta de empresa</h3>
                                    <i className="fa-solid fa-circle-arrow-right fa-2xl" />
                                </div>
                            </div>
                            <div className="card__side card__side--back">
                                <div className="card__body">
                                    <p>
                                        Aprovecha al máximo nuestra plataforma dando de alta tu empresa.
                                        Destaca entre la competencia y promociona tus servicios y productos ante una audiencia profesional.
                                        Crea un perfil empresarial completo, muestra tu experiencia y amplía tus oportunidades de negocio en el mundo de los eventos.
                                    </p>
                                </div>
                                <div className="card__body-btn d-flex justify-content-center align-items-end mb-5">
                                    <Link to="/companysignup" className="link">
                                        <button className="btn btn--body-custom">
                                            Registrar empresa
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}