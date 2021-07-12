import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <h1>Hi, this is my header</h1>
            <Link to="/"><h2>Home Page</h2></Link>
            <Link to="/second"><h2>Second Page</h2></Link>
        </header>
    )
}

export default Header