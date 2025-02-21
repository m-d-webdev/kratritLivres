import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Categories from '../components/categories'
import api from '../config/api';
import Book from '../components/book';
import { RandomLinks } from './bibliotheque';
import Loader from '../components/Loader';

const Categorie = () => {
    const { c } = useParams();
    const [isLoadingCate, setLoadingCat] = useState(false)
    const [catFounds, setcatFounds] = useState([])

    const getCateBooks = async () => {
        setLoadingCat(true);

        let res = await api.get("/categories/" + c)
        setcatFounds(res.data);
        setLoadingCat(false);
        listBooks.current?.scrollIntoView({
            behavior: "smooth",
            blok: "end"
        })
    }

    const listBooks = useRef()

    useEffect(() => {
        getCateBooks();
    }, [c])


    const getRanNum = () => {
        return Math.floor(Math.random() * 30);
    }
    let takedImges = []
    return (
        <div className='bg-l p20  mt50 wmia'>
            <Categories />
            <div ref={listBooks} className="r-w-p-s">
                <h1 className="wmia mt20 mb20 fw900 fs18 op-7">
                    Les resultas
                </h1>
                {
                    isLoadingCate ?
                        <Loader />
                        :
                        catFounds.map(b => {
                            let ran = getRanNum();
                            if (!takedImges.includes(ran)) {
                                takedImges.push(ran);
                                b.cover = RandomLinks[ran]
                            } else {
                                ran = getRanNum();
                                takedImges.push(ran);
                                b.cover = RandomLinks[ran]
                            }
                            return <Book b={b} key={b.id} />
                        })}
            </div>
        </div>
    )
}

export default Categorie
