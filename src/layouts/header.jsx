import React, { useEffect, useRef, useState } from 'react'
import LOGO from '../components/LOGO'
import SearchInput from '../components/SearchInput'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import { _onClickOutELement } from '../components/_'

const Header = () => {

    const { isLoggedIn, name, email } = useSelector(s => s.user)
    const [isMenuVisible, setMenuVisible] = useState(false);
    const MmenuProfile = () => {

        const menuRef = useRef();

        useEffect(() => {
            menuRef.current && _onClickOutELement(menuRef.current, () => setMenuVisible(false))

        }, [isMenuVisible])

        return (
            <motion.div
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "0",
                    z: 9
                }}

                initial={{
                    scale: .9,
                    opacity: 0,

                }}
                exit={{
                    scale: .9,
                    opacity: 0,

                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                        duration: .05,
                        type: "spring"
                    }
                }}
                ref={menuRef}
                className='bg-l w200 p10 br10 drop-shadow-2xl'
            >
                <span className='c-c-c wmia mr10'>
                    <svg className='f-no mr10 w20 h20 stroke-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path> <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path> </svg>

                    <h1 className='fw600'
                        style={{
                            fontFamily: '"Aoboshi One", serif',
                            fontSize: "18px",
                            fontWeight: "500",
                            letterSpacing: -.5
                        }}
                    >
                        {name}
                    </h1>
                    <h1 className="fw900 mt10 op-7">
                        {email}
                    </h1>

                    <button onClick={()=> window.location.reload()} className='wmia mt50 bg-d c-l'>
                        log out
                        <svg className='f-no ml10 w20 h20 stroke-2' style={{ stroke: "var(--bg-primary)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path> <path d="M9 12h12l-3 -3"></path> <path d="M18 15l3 -3"></path> </svg>
                    </button>
                </span>


            </motion.div>
        )
    }
    return (
        <div className='p5 r-b-c br20 mt20 pr10  bg-l'
            style={{
                width: "97%",
                position: "sticky",
                top: "-0px",
                zIndex: "10",
                filter: "drop-shadow(0 5px 4px var(--filter-color))"
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
            {
                isLoggedIn ?
                    <div className="r-e-c">
                        <span className='r-s-c mr10'>
                            <svg className='f-no mr10 w20 h20 stroke-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path> <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path> </svg>

                            <h1 className='fw600'
                                style={{
                                    fontFamily: '"Aoboshi One", serif',
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    letterSpacing: -.5
                                }}
                            >
                                {name}
                            </h1>
                        </span>
                        <button onClick={() => setMenuVisible(!isMenuVisible)} className='border bg-rev-l curP psr'>
                            <svg className='f-no   stroke-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M4 6h16"></path> <path d="M7 12h13"></path> <path d="M10 18h10"></path> </svg>
                        </button>
                        <AnimatePresence>

                            {isMenuVisible &&
                                <MmenuProfile />
                            }

                        </AnimatePresence>
                    </div>
                    :

                    <div className=" r-s-c" >
                        <Link to={'/login'} className='border curP bg-rev-l r-s-c  br20  '>
                            <svg className=' w20 h20  f-no' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"></path> <path d="M3 12h13l-3 -3"></path> <path d="M13 15l3 -3"></path> </svg>
                            <p className='ml10'>se connecter</p>
                        </Link>
                        <Link to={'/register'} className='border r-c-c curP bg-rev-l  br20  ml10'>
                            <svg className=' w20 h20  f-no' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path> <path d="M16 19h6"></path> <path d="M19 16v6"></path> <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path> </svg>
                            <p className='ml10'>s'inscrire</p>
                        </Link>
                    </div>
            }
        </div>
    )
}

export default Header
