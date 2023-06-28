import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { ExpandingCards } from "../component/expandingCards";
import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const [eventos, setEventos] = useState([]);

	// Realizar la solicitud GET para obtener los eventos de la base de datos
	useEffect(() => {
		fetch("https://api.example.com/eventos")
		  .then(response => {
			if (response.ok) {
			  return response.json();
			}
			throw new Error("Error de respuesta: " + response.status);
		  })
		  .then(data => {
			// Almacenar los eventos en el estado
			setEventos(data);
		  })
		  .catch(error => {
			console.error(error);
		  });
	  }, []);


	return (
		<div className="text-center" id="principal">
			<h1 className="mt-6">IBENTO</h1>
			<p> Texto publicidad </p>
			<div id="carouselExampleIndicators" className="carousel slide">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="https://swissrents.com/wp-content/uploads/2022/08/Sala-de-reuniones-1-1.jpg" className="d-block w-100 slider-image" alt="Slider Image" />
					</div>
					<div className="carousel-item">
						<img src="https://cdn.papershift.com/20220926102759/Team-building.jpeg" className="d-block w-100 slider-image" alt="Slider Image" />
					</div>
					<div className="carousel-item">
						<img src="https://www.elconfidencialdigital.com/media/elconfidencialdigital/images/2018/12/27/2018122712353083998.jpg" className="d-block w-100 slider-image" alt="Slider Image" />
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			<hr className="featurette-divider" />

		
			<h1>PLAN, CREATE, PROMOTE AND EXECUTE EVENTS</h1>

			<div className="container marketing">
				<div className="row">
					<div className="col-lg-4">
						<img className="bd-placeholder-img rounded-circle" width="240" height="240" src="https://media.discordapp.net/attachments/1098506224703635488/1120423175319203950/a48010cd-daa7-4fce-8165-43bee2fd1192.jpg?width=577&height=577" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"/>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
						
						<h2 className="fw-normal">Gestiona tus eventos de manera fácil y directa.</h2>
						<p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
						<p><a className="btn btn-secondary" href="#">View details »</a></p>
					</div>
					<div className="col-lg-4">
						<img className="bd-placeholder-img rounded-circle" width="240" height="240" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false" src="https://media.discordapp.net/attachments/1098506224703635488/1120429161543118928/b0a0a45a-6629-4c22-a0f9-3e879b6111bd.jpg?width=577&height=577"/>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
						
						<h2 className="fw-normal">Transforma tus eventos empresariales en experiencias únicas</h2>
						<p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
						<p><a className="btn btn-secondary" href="#">View details »</a></p>
					</div>
					<div className="col-lg-4">
					<img className="bd-placeholder-img rounded-circle" width="240" height="240" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false" src="https://media.discordapp.net/attachments/1098506224703635488/1120427093788991629/df7ff3fd-367e-48cb-9dc4-a8fffae8e75b.jpg?width=577&height=577"/>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="var(--bs-secondary-color)"/>
						<h2 className="fw-normal">Eleva tu marca con eventos de clase mundial diseñados exclusivamente para ti</h2>
						<p>And lastly this, the third column of representative placeholder content.</p>
						<p><a className="btn btn-secondary" href="#">View details »</a></p>
					</div>
				</div>

				<hr className="featurette-divider" />

				<h1>Tipos de eventos y servicios</h1>

				<section>
					<img src="https://www.rwlasvegas.com/wp-content/uploads/2022/05/crockfords-las-vegas-standard-deluxe-bedroom_1000x880.jpg" alt="Hoteles"/>
					<img src="https://eventosempresa.fosburycafe.es/wp-content/uploads/2021/05/P1000415.jpg" data-text="Restaurantes..."/>
					<img src="https://premiumcartransfers.com/wp-content/uploads/2016/05/transfers-eventos-chofer.jpg"data-text="Transfers"/>
					<img src="https://i0.wp.com/sonria.com/wp-content/uploads/2020/10/11Curso1.jpg?fit=960%2C640&ssl=1" data-text="Salas"/>
					<img src="https://us.123rf.com/450wm/sonjachnyj/sonjachnyj1705/sonjachnyj170500628/78906332-deliciosa-mesa-de-frutas-en-la-recepci%C3%B3n-de-la-boda-catering-de-lujo-en-el-restaurante.jpg" data-text="Caterings"/>
					<img src="https://impulsapopular.com/wp-content/uploads/2020/01/4624-Lanzamiento-de-productos-qu%C3%A9-elementos-tener-en-cuenta.jpg" data-text="Lanzamientos de producto"/>
				</section>

				<hr className="featurette-divider" />

				<h2>Expanding Cards</h2>

				<div className="expanding"> 
					<div className="panel" style={{backgroundImage: "url('https://www.taglyancomplex.com/old-blog-pics/wp-content/uploads/2014/09/cater-food.jpg')"}}>
					</div>
					<h3>Restaurants & Caterings</h3>
				</div>
				

				<div className="eventcard" >
					<div className="container marketing">
					<div className="row">
						<h2>Un evento</h2>
						{eventos.map(evento => (
						<div className="col-lg-4" key={evento.id}>
							<img
							className="bd-placeholder-img rounded-circle"
							width="240"
							height="240"
							src={evento.imagen}
							role="img"
							alt="Evento"
							/>
							<h2 className="fw-normal">{evento.nombre}</h2>
							<p>{evento.descripcion}</p>
						</div>
						))}
					</div>
					</div>
				</div>
							
				

				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading fw-normal lh-1">Próximos eventos<span className="text-body-secondary">Ven a conocer los próximos eventos que etán sucediendo a tu alrededor</span></h2>
						<p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
					</div>
					<div className="col-md-5">
						<svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect>
							<text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text>
						</svg>
					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row featurette">
					<div className="col-md-7 order-md-2">
						<h2 className="featurette-heading fw-normal lh-1">Inspirate del pasado y superate en los siguientes <span className="text-body-secondary">See for yourself.</span></h2>
						<p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
					</div>
					<div className="col-md-5 order-md-1">
						<svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect>
							<text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text>
						</svg>
					</div>
				</div>
			</div>	

				<hr className="featurette-divider" />

			
		


			<a href="#" className="back-to-top">
				<i className="fa-solid fa-arrows-up-to-line"></i>
			</a>
		</div>
	);
};
