import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export default function Home() {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="src/assets/barca.jpeg" className="d-block w-100" alt="Descrição da primeira imagem" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/panda.jpeg" className="d-block w-100" alt="Descrição da segunda imagem" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/shimeji.jpg" className="d-block w-100" alt="Descrição da terceira imagem" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
    </>
  );
}
