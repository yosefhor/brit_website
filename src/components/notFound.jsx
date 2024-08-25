import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='container vh-100 align-content-center main_text_color text-center'>
                <h1>404 - Oops, the page you're looking for doesn't exist yet ;) </h1>
                <h2>In the meantime, you can head back to the homepage by clicking
                </h2>
                <Link to="/">
                    <button className="btn btn-lg btn-outline-primary col-4">here</button>
                </Link>
        </div>
    )
}
