import React from 'react'
import { Link } from 'react-router-dom'
const Book = ({ b }) => {

    return (
        <Link to={"/voir_livre/" + b.id}  className='p10 br10 bg-l curP hover:drop-shadow-lg  hover:scale-105 drop-shadow-sm w250 m10 c-s-c'>
            <img className='wmia br5 h300' src={b.cover} style={{ objectFit: "cover" }} alt="" />
            <h1
                className=' mt10'
                style={{
                    fontFamily: '"Aoboshi One", serif',
                    fontSize: "15px",
                    fontWeight: "500",
                    letterSpacing: -.8
                }}
            >
                {b.nom}
            </h1>

            <span className="fw900 mt5 op-7">
                {b.auteur}
            </span>
        </Link>
    )
}

export default Book
