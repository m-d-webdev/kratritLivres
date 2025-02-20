import React from 'react'
import LOGO from '../components/LOGO'
import SearchInput from '../components/SearchInput'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='p5 r-b-c br20 mt20 pr10  bg-l'
            style={{
                width: "97%",
                filter: "drop-shadow(0 5px 8px var(--filter-color))"
            }}>
            <LOGO />
            <SearchInput />

            <div className="r-p-c">
                <Link to={'/'} className='a fw600'>
                    Home
                </Link>
                <Link to={'/Bibliotheque'} className='a fw600'>
                    Bibliothèque
                </Link>
                <Link to={'/apropos'} className='a fw600'>
                    à propos
                </Link>
                <Link to={'/contact'} className='a fw600'>
                    Contactez-nous

                </Link>
            </div>

            <div className=" r-s-c">
                <button className='border curP bg-rev-l  br20  '>
                    <svg className=' w20 h20  f-no' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"></path> <path d="M3 12h13l-3 -3"></path> <path d="M13 15l3 -3"></path> </svg>
                    <p className='ml10'>se connecter</p>
                </button>
                <button className='border curP bg-rev-l  br20  ml10'>
                    <svg className=' w20 h20  f-no' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path> <path d="M16 19h6"></path> <path d="M19 16v6"></path> <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path> </svg>
                    <p className='ml10'>s'inscrire</p>
                </button>
            </div>
        </div>
    )
}

export default Header
