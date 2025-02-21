import React from 'react'
import { Link } from 'react-router-dom'
import PopularsBooks from '../components/PopularsBooks'

export default function Home() {
  return (
    <div className='p10 mt50 wmia c-s-c'>
      <div className="wmia mt20 c-c-c">
        <div className="wmia r-e-c">
          <span className="border op-2 bg-d wkhmsin"></span>
        </div>
        <h1 className='mt20 mb20'
          style={{
            fontFamily: '"Aoboshi One", serif',
            fontSize: "42px"
          }}
        >
          Votre bibliothèque numérique à portée de main

        </h1>
        <div className="wmia mt10 r-s-c">
          <span className="border op-2 bg-d wkhmsin"></span>
        </div>
      </div>
      <div className="wmia mt50 c-c-c">
        <p className='text-center fw200 op-7' style={{
          maxWidth: "600px", fontSize: "18px",
          fontFamily: '"Aoboshi One", serif',

        }}>
          Notre bibliothèque numérique se consacre à offrir un accès illimité à
          un monde de connaissances et de récits, où chaque lecteur peut
          explorer, apprendre et s'inspirer à tout moment et en tout lieu
        </p>
        <div className="wmia border mt20" style={{ maxWidth: "500px" }}></div>
      </div>
      <Link className='mt50 fw900 w200 br20  p10 bg-rev-l r-c-c' style={{ filter: "drop-shadow(0 5px 10px var(--filter-color))" }} >
        Commencer à lire
        <svg className='f-no w20 h20  ml15' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M20 12l-10 0"></path> <path d="M20 12l-4 4"></path> <path d="M20 12l-4 -4"></path> <path d="M4 4l0 16"></path> </svg>
      </Link>
      <div className="wmia r-e-c">
        <img src="./media/image-removebg-preview (1).png" alt="" />
      </div>

      <PopularsBooks />
      <div className="wmia r-s-c">
        <img src="./media/image-removebg-preview (2).png" alt="" />
      </div>
      <h1
        className='text-center'
        style={{
          maxWidth: "1000px",
          fontFamily: '"Aoboshi One", serif',
          fontSize: "35px"
        }}
      >
        Un café à la main, une belle lecture en tête – bienvenue dans notre monde littéraire
      </h1>
      <Link className='mt50 fw900 w200 br20  p10 bg-rev-l r-c-c' style={{ filter: "drop-shadow(0 5px 10px var(--filter-color))" }} >
        Commencer à lire
        <svg className='f-no w20 h20  ml15' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M20 12l-10 0"></path> <path d="M20 12l-4 4"></path> <path d="M20 12l-4 -4"></path> <path d="M4 4l0 16"></path> </svg>
      </Link>


        
    </div>
  )
}
