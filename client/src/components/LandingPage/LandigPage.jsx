import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
      <h1> Bienvenido a mi proyecto $</h1>
      <div>
        <p>Descripcion del proyecto</p>
      </div>
      <Link to="/countries">
        <button>Entra %</button>
      </Link>
    </div>
  );
}
