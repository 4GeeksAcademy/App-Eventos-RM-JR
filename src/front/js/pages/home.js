import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

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

		
			<h1>Eventos destacados</h1>

			<div className="container marketing">
				<div className="row">
					<div className="col-lg-4">
						<img className="bd-placeholder-img rounded-circle" width="240" height="240" src="https://media.discordapp.net/attachments/1098506224703635488/1120423175319203950/a48010cd-daa7-4fce-8165-43bee2fd1192.jpg?width=577&height=577" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"/>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
						
						<h2 className="fw-normal">Gestiona tus eventos de manera fácil y directa.</h2>
						<p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
						<p><a className="btn btn-secondary" href="#">View details »</a></p>
					</div>
					<div className="col-lg-4">
						<img className="bd-placeholder-img rounded-circle" width="240" height="240" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false" src="https://media.discordapp.net/attachments/1098506224703635488/1120429161543118928/b0a0a45a-6629-4c22-a0f9-3e879b6111bd.jpg?width=577&height=577"/>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
						
						<h2 className="fw-normal">Transforma tus eventos empresariales en experiencias únicas</h2>
						<p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
						<p><a className="btn btn-secondary" href="#">View details »</a></p>
					</div>
					<div className="col-lg-4">
					<img className="bd-placeholder-img rounded-circle" width="240" height="240" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false" src="https://media.discordapp.net/attachments/1098506224703635488/1120427093788991629/df7ff3fd-367e-48cb-9dc4-a8fffae8e75b.jpg?width=577&height=577"/>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
						<h2 className="fw-normal">Eleva tu marca con eventos de clase mundial diseñados exclusivamente para ti</h2>
						<p>And lastly this, the third column of representative placeholder content.</p>
						<p><a className="btn btn-secondary" href="#">View details »</a></p>
					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
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
						<h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span></h2>
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

		<h1>TIPOS DE EVENTOS</h1>
		
		<div className="cuadricula_home">
			<div className="row">
				<div className="col-md-4 col-sm-6 content-block content-block-style-4">
					<div className="content-block-container text-center" style={{ height: '293px' }}>
						<div className="image-block">
							<div className="image-block-container">
								<img src="https://impulsapopular.com/wp-content/uploads/2020/01/4624-Lanzamiento-de-productos-qu%C3%A9-elementos-tener-en-cuenta.jpg" alt="Lanzamientos de productos" style={{ height: '250px', width: '250px', borderRadius: '20px' }} />
							</div>
						</div>
						<a href="#" title="Lanzamientos de productos" className="btn btn-gfort-white wave-effect">
							<h5>Lanzamientos de productos</h5>
						</a>
					</div>
				</div>

				<div className="col-md-4 col-sm-6 content-block content-block-style-4">
					<div className="content-block-container text-center" style={{ height: '293px' }}>
						<div className="image-block">
							<div className="image-block-container">
								<img src="https://impulsapopular.com/wp-content/uploads/2020/01/4624-Lanzamiento-de-productos-qu%C3%A9-elementos-tener-en-cuenta.jpg" alt="Lanzamientos de productos" style={{ height: '250px', width: '250px', borderRadius: '20px' }} />
							</div>
						</div>
						<a href="#" title="Lanzamientos de productos" className="btn btn-gfort-white wave-effect">
							<h5>Lanzamientos de productos</h5>
						</a>
					</div>
				</div>

				<div className="col-md-4 col-sm-6 content-block content-block-style-4">
					<div className="content-block-container text-center" style={{ height: '293px' }}>
						<div className="image-block">
							<div className="image-block-container">
								<img src="https://impulsapopular.com/wp-content/uploads/2020/01/4624-Lanzamiento-de-productos-qu%C3%A9-elementos-tener-en-cuenta.jpg" alt="Lanzamientos de productos" style={{ height: '250px', width: '250px', borderRadius: '20px' }} />
							</div>
						</div>
						<a href="#" title="Lanzamientos de productos" className="btn btn-gfort-white wave-effect">
							<h5>Lanzamientos de productos</h5>
						</a>
					</div>
				</div>

				<div className="col-md-4 col-sm-6 content-block content-block-style-4">
					<div className="content-block-container text-center" style={{ height: '293px' }}>
						<div className="image-block">
							<div className="image-block-container">
								<img src="https://impulsapopular.com/wp-content/uploads/2020/01/4624-Lanzamiento-de-productos-qu%C3%A9-elementos-tener-en-cuenta.jpg" alt="Lanzamientos de productos" style={{ height: '250px', width: '250px', borderRadius: '20px' }} />
							</div>
						</div>
						<a href="#" title="Lanzamientos de productos" className="btn btn-gfort-white wave-effect">
							<h5>Lanzamientos de productos</h5>
						</a>
					</div>
				</div>

				<div className="col-md-4 col-sm-6 content-block content-block-style-4">
					<div className="content-block-container text-center" style={{ height: '293px' }}>
						<div className="image-block">
							<div className="image-block-container">
								<img src="https://impulsapopular.com/wp-content/uploads/2020/01/4624-Lanzamiento-de-productos-qu%C3%A9-elementos-tener-en-cuenta.jpg" alt="Lanzamientos de productos" style={{ height: '250px', width: '250px', borderRadius: '20px' }} />
							</div>
						</div>
						<a href="#" title="Lanzamientos de productos" className="btn btn-gfort-white wave-effect">
							<h5>Lanzamientos de productos</h5>
						</a>
					</div>
				</div>

				<div className="col-md-4 col-sm-6 content-block content-block-style-4">
					<div className="content-block-container text-center" style={{ height: '293px' }}>
						<div className="image-block">
							<div className="image-block-container">
								<img src="https://impulsapopular.com/wp-content/uploads/2020/01/4624-Lanzamiento-de-productos-qu%C3%A9-elementos-tener-en-cuenta.jpg" alt="Lanzamientos de productos" style={{ height: '250px', width: '250px', borderRadius: '20px' }} />
							</div>
						</div>
						<a href="#" title="Lanzamientos de productos" className="btn btn-gfort-white wave-effect">
							<h5>Lanzamientos de productos</h5>
						</a>
					</div>
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
