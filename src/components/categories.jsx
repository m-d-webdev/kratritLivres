import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../config/api';
import { useMotionValueEvent } from 'framer-motion';
import { useSelector } from 'react-redux';
import Loader from './Loader';

const Categories = () => {
    const [isShowindAll, setShowingALlCat] = useState(6)
    function toggleShowingAll() {
        isShowindAll == 6 ? setShowingALlCat(100) : setShowingALlCat(6)
    }
    const [categories, setCategories] = useState([])
    const [isLoading, setLoadingategories] = useState(false)
    const getCategories = async () => {
        setLoadingategories(true)
        let res = await api.get('/cateogires');
        setCategories(res.data);
        setLoadingategories(false)

    }


    useEffect(() => {
        getCategories()
    }, [])
    const navigate = useNavigate()
    const navetocate = (c) => {
        navigate('/categrie/' + c)
    }

    return (
        <div className="wmia  max-w-10/12 mrauto c-s-s">
            <span className="fw600 mb20  ml20  op-7">
                Catégories de livres les plus populaires
            </span>
            <div className="wmia r-w-p-s  " style={{}} >
                {isLoading ?
                    <Loader />
                    :
                    categories.map((c, i) => {
                        if (i < isShowindAll)
                            return <div onClick={() => navetocate(c.id)} style={{ width: "30%" }} className="m10  curP hover:drop-shadow-2xl transition hover:scale-105  c-s-s   bg-l p10 br10 drop-shadow-lg " key={c.id}>
                                <h1
                                    className='ml10 mt10'
                                    style={{
                                        fontFamily: '"Aoboshi One", serif',
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        letterSpacing: -.8
                                    }}
                                >
                                    {c.nom}
                                </h1>
                                <p className="fw600 op-7 m10">
                                    {c.description}
                                </p>
                                <div className="wmia r-e-c">
                                    <svg className='op-7' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" /></svg>
                                </div>
                            </div>
                    })
                }
            </div>
            <div className="wmia r-e-c">
                {
                    isShowindAll != 6 ?
                        <button onClick={toggleShowingAll} className='fw900 op-7 border br15 bg-l mt20'>
                            voir moins
                            <svg style={{ transform: "rotate(180deg)" }} className='f-no w20 h20 ml10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-3h6v3z"></path> <path d="M15 3h-6"></path> <path d="M15 6h-6"></path> </svg>
                        </button>
                        :
                        <button onClick={toggleShowingAll} className='fw900 op-7 border br15 bg-l mt20'>
                            Voir toutes les catégories
                            <svg className='f-no w20 h20 ml10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-3h6v3z"></path> <path d="M15 3h-6"></path> <path d="M15 6h-6"></path> </svg>
                        </button>
                }
            </div>
        </div>
    )
}

export default Categories
