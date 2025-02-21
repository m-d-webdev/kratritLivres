import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Reviews from '../components/reviews';
import Book from '../components/book';
import api from '../config/api';
import Loader from '../components/Loader';
import { useSelector } from 'react-redux';
import { RandomLinks } from './bibliotheque';

const VoirLivre = () => {
    const { id } = useParams();
    const bookKeys = {
        id: 1,
        title: "1984",
        author: "George Orwell",
        cover: "/media/Le seigneur des anneaux _ La communauté de l'anneau - John Ronald Reuel Tolkien.jpeg",
        publicationYear: 1949,
        publisher: "Secker & Warburg",
        language: "Anglais",
        pages: 328,
        format: "Broché",
        category: "Science-Fiction",
        description: "Un roman dystopique décrivant une société totalitaire sous surveillance constante.",
        price: 15.99,
        stock: 120, // Nombre d'exemplaires disponibles
        rating: 4.8, // Note moyenne sur 5
    };

    const books = [
        {
            id: 1,
            name: "1984",
            author: "George Orwell",
            cover: ""
        },
        {
            id: 2,
            name: "To Kill a Mockingbird",
            author: "Harper Lee",
            cover: ""
        },
        {
            id: 3,
            name: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            cover: ""
        },
        {
            id: 4,
            name: "Moby Dick",
            author: "Herman Melville",
            cover: ""
        },
        {
            id: 5,
            name: "Pride and Prejudice",
            author: "Jane Austen",
            cover: ""
        },
        {
            id: 6,
            name: "War and Peace",
            author: "Leo Tolstoy",
            cover: ""
        },
        {
            id: 7,
            name: "The Catcher in the Rye",
            author: "J.D. Salinger",
            cover: ""
        },
        {
            id: 8,
            name: "The Hobbit",
            author: "J.R.R. Tolkien",
            cover: ""
        },
        {
            id: 9,
            name: "Fahrenheit 451",
            author: "Ray Bradbury",
            cover: ""
        },
        {
            id: 10,
            name: "Brave New World",
            author: "Aldous Huxley",
            cover: ""
        },
        {
            id: 11,
            name: "The Picture of Dorian Gray",
            author: "Oscar Wilde",
            cover: ""
        },
        {
            id: 12,
            name: "The Brothers Karamazov",
            author: "Fyodor Dostoevsky",
            cover: ""
        },
        {
            id: 13,
            name: "Crime and Punishment",
            author: "Fyodor Dostoevsky",
            cover: ""
        },
        {
            id: 14,
            name: "Wuthering Heights",
            author: "Emily Brontë",
            cover: ""
        },
        {
            id: 15,
            name: "Jane Eyre",
            author: "Charlotte Brontë",
            cover: ""
        },
        {
            id: 16,
            name: "The Odyssey",
            author: "Homer",
            cover: ""
        },
        {
            id: 17,
            name: "The Iliad",
            author: "Homer",
            cover: ""
        },
        {
            id: 18,
            name: "The Grapes of Wrath",
            author: "John Steinbeck",
            cover: ""
        },
        {
            id: 19,
            name: "The Catch-22",
            author: "Joseph Heller",
            cover: ""
        },
        {
            id: 20,
            name: "The Alchemist",
            author: "Paulo Coelho",
            cover: ""
        }
    ];

    const [catFounds, setcatFounds] = useState([])

    const [book, setbook] = useState([])
    const [isLoading, setLoading] = useState(true)
    const getBookData = async () => {
        setLoading(true)
        let res = await api.get("/livres/" + id);
        console.log(res.data);
        const cover = RandomLinks[Math.floor(Math.random() * 30)]
        setbook({
            ...bookKeys,
            cover,
            ...res.data
        });
        let res2 = await api.get("/categories/" + res.data.categorie.id)
        setcatFounds(res2.data);
        setLoading(false)
    }


    useEffect(() => {
        getBookData();
    }, [id])
    const getRanNum = () => {
        return Math.floor(Math.random() * 30);
    }
    let takedImges = []
    return (
        <div className="wmia c-s-c">
            {
                isLoading
                    ?
                    <Loader />
                    :
                    <>
                        <div className='c-s-c wmia bg-l mt50 p20 br10 max-w-5xl' >
                            <div className="r-p-s wmia">
                                <div className="c-s-s wkhmsin">
                                    <h1 className=' mt10'
                                        style={{
                                            fontFamily: '"Aoboshi One", serif',
                                            fontSize: "20px",
                                            fontWeight: "500",
                                            letterSpacing: -.8
                                        }}
                                    >
                                        {book.nom}
                                    </h1>
                                    <h1 className='fw900 op-7 mt10 ml20  mt10'
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: "900",
                                            letterSpacing: .1
                                        }}
                                    >
                                        de {book.auteur}
                                    </h1>
                                    <div className="r-s-c mt10">
                                        <span className='fw600 op-7'>
                                            L'anneee de publication :
                                        </span>
                                        <h1 className='fs16 fw900 ml10'>
                                            {new Date(book.created_at).toDateString()}
                                        </h1>
                                    </div>
                                    <div className="r-s-c mt10">
                                        <span className='fw600 op-7'>
                                            L'éditeur :
                                        </span>
                                        <h1 className='fs16 fw900 ml10'>
                                            {book.publisher}
                                        </h1>
                                    </div>
                                    <div className="r-s-c mt10">
                                        <span className='fw600 op-7'>
                                            La langue :
                                        </span>
                                        <h1 className='fs16 fw900 ml10'>
                                            {book.language}
                                        </h1>
                                    </div>
                                    <div className="r-s-c mt10">
                                        <span className='fw600 op-7'>
                                            nombre de pages :
                                        </span>
                                        <h1 className='fs16 fw900 ml10'>
                                            {book.pages} page
                                        </h1>
                                    </div>
                                    <div className="r-s-c mt10">
                                        <span className='fw600 op-7'>
                                            format :
                                        </span>
                                        <h1 className='fs16 fw900 ml10'>
                                            {book.format}
                                        </h1>
                                    </div>
                                    <div className="r-s-c mt10">
                                        <span className='fw600 op-7'>
                                            categorie :
                                        </span>
                                        <h1 className='fs16 fw900 ml10'>
                                            {book.categorie.nom}
                                        </h1>
                                    </div>
                                    <div className="c-s-s mt10">
                                        <span className='fw600 op-7'>
                                            Le description :
                                        </span>
                                        <h1 className='fs16 fw900 ml10 mt5'>
                                            {book.description}
                                        </h1>
                                    </div>
                                    <div className="r-s-c mt10">
                                        <span className='fw600 op-7'>
                                            Nombre d'exemplaires disponibles :
                                        </span>
                                        <h1 className='fs16 fw900 ml10'>
                                            {book.stock} livre
                                        </h1>
                                    </div>
                                    <div className="r-s-c mt10">
                                        <span className='fw600 op-7'>
                                            La Note moyenne sur 5 :
                                        </span>
                                        <h1 className='fs16 fw900 ml10'>
                                            {book.rating}
                                        </h1>
                                    </div>
                                    <div className="wmia mt50 r-e-e pr20">
                                        <span className="op-7 mr10">
                                            Prix :
                                        </span>
                                        <h1 style={{ fontSize: "22px" }} className=' fw900 mr50'>
                                            {book.price} MAD
                                        </h1>
                                    </div>
                                    <div className="wmia r-e-c mt50 pr20">
                                        <button className='bg-amber-100 border mr20  w200   ' style={{ backgroundColor: "" }}>
                                            Louer ce livre
                                            <svg className='f-no w20 h20 ml10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path> <path d="M15 14v-2a2 2 0 0 0 -2 -2h-4l2 -2m0 4l-2 -2"></path> </svg>
                                        </button>
                                        <button className='bg-amber-100  w200   bg-- c-rl' style={{ backgroundColor: "" }}>
                                            Acheter mantenent
                                            <svg className='f-no w20 h20 ml10' style={{ stroke: "#fff", strokeWidth: "2" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path> <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path> </svg>
                                        </button>
                                    </div>
                                </div>
                                <img src={book.cover} className='wkhmsin ml20 br10 ' alt="" />
                            </div>
                            <div className="mt50"></div>
                            <Reviews reviews={book.avis} />
                        </div>
                        <div className="wmia mt50 r-s-c">
                            <h1 className='fw900 op-7'>Voir aussi </h1>
                        </div>
                        <div className='r-w-p-s wmia bg-l  p20 br10 ' >
                            {
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
                                })
                            }

                        </div>
                    </>
            }

        </div>

    )
}

export default VoirLivre
