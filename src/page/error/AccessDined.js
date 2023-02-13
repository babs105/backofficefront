import React from 'react'
import { Link } from 'react-router-dom'

const AccessDined = () => {
  return (
  
    <div class="container">

        <section className='section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
            <h1>403</h1>
            <h2>Vous n'avez pas accès à ce module </h2>
            <Link className='btn btn-primary' to={'/home'}>Allez à la page d'accueil </Link>
            {/* <img src="assets/img/not-found.svg" class="img-fluid py-5" alt="Page Not Found"> */}
        </section>

    </div>

  )
}

export default AccessDined
