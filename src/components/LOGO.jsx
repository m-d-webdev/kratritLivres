import React from 'react'
import { Link } from 'react-router-dom'

const LOGO = () => {
    return (
        <Link to={'/'}>
            <h1
                className=''
                style={{
                    fontFamily: '"Aoboshi One", serif',
                    fontSize: "27px",
                    fontWeight: "500",
                    letterSpacing: -.5
                }}
            >
                Kratrit livres
            </h1>
        </Link >
    )
}

export default LOGO
