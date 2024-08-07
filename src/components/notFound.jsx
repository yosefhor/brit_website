import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='justify-content-center align-items-center text-danger-emphasis pt-5 mx-3 vh'>
            <div className='text-center pt-sm-5'>
                <h1>404 - Oops, the page you're looking for doesn't exist yet ;) </h1>
                <h2>In the meantime, you can head back to the homepage by clicking
                </h2>
                <Link to="/">
                    <button className="btn col-3 btn-lg btn-outline-primary ms-3">here</button>
                </Link>
            </div>
        </div>
    )
}
