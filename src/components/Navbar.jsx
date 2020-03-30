import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({user}) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <Link to="/"><a class="navbar-brand" href="#">Home</a></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/dashboard"><a class="nav-item nav-link active text-light">Dashboard</a></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
