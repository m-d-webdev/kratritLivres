import React, { useEffect, useState } from 'react'
import Book from '../components/book';
import Categories from '../components/categories';
import api from '../config/api';
import { useAsyncError } from 'react-router-dom';
import Loader from '../components/Loader';
export let RandomLinks = [
    "https://i.pinimg.com/236x/43/75/b7/4375b7d9bf24b88aa53744b417227485.jpg",
    "https://i.pinimg.com/236x/2e/3b/83/2e3b83a578b82e931ddc636db9f0cf27.jpg",
    "https://i.pinimg.com/236x/73/53/bc/7353bc704c70b6e33b5d1edb81ccfd01.jpg",
    "https://i.pinimg.com/474x/ce/42/f9/ce42f9ef20ed794e058f579f7d6c761b.jpg",
    "https://i.pinimg.com/236x/1f/13/1a/1f131af5e89af18bf835f2a5c4f609f4.jpg",
    "https://i.pinimg.com/236x/f0/66/0c/f0660ce0569d12be9082ac15dd23799f.jpg",
    "https://i.pinimg.com/236x/97/54/7b/97547b5abc1b6ee5ba5d362bbc4de38c.jpg",
    "https://i.pinimg.com/474x/22/73/ec/2273ec14d270c83777abbf93ed8975bd.jpg",
    "https://i.pinimg.com/236x/63/c3/44/63c344b8eaba0eb78a87106b856375a3.jpg",
    "https://i.pinimg.com/236x/c0/31/35/c031351c98bf72da7281b884ada14f31.jpg",
    "https://i.pinimg.com/236x/5a/a5/7a/5aa57a926a649f6a93d8435de9d567bd.jpg",
    "https://i.pinimg.com/236x/d2/b6/e4/d2b6e461c99cf9eead02f461a8b1b900.jpg",
    "https://i.pinimg.com/236x/33/eb/8f/33eb8f57d177a6525ab7b0077ea9fc62.jpg",
    "https://i.pinimg.com/236x/80/4d/c9/804dc93e5bba117398c0d61ebc22b623.jpg",
    "https://i.pinimg.com/236x/13/ad/62/13ad62f07a215db38786b87178a0f36b.jpg",
    "https://i.pinimg.com/236x/21/ab/fa/21abfa59fd7cd6aba9f5dc0c97c274b2.jpg",
    "https://i.pinimg.com/236x/f7/6e/31/f76e319b882f9ba3d3f82bb168f22329.jpg",
    "https://i.pinimg.com/236x/1c/4e/f2/1c4ef29cd22c5fec1210b97df9449e05.jpg",
    "https://i.pinimg.com/236x/20/01/f6/2001f640f8b80016921341524ed07d5d.jpg",
    "https://i.pinimg.com/236x/a0/fa/97/a0fa9784ce6985cfbcec3e66d02d6899.jpg",
    "https://i.pinimg.com/236x/ef/6e/6e/ef6e6eedd719d3015036843e0de647e0.jpg",
    "https://i.pinimg.com/236x/ef/aa/70/efaa70b713d7c5eabac1c1cd0930ec87.jpg",
    "https://i.pinimg.com/236x/f5/92/80/f5928045d533b080e789a2f3fb562d8c.jpg",
    "https://i.pinimg.com/236x/d3/77/5d/d3775dd662bf240c140085f8d2c53aca.jpg",
    "https://i.pinimg.com/474x/c2/ee/df/c2eedf90ad1229513f51e862d8bf9f7b.jpg",
    "https://i.pinimg.com/236x/40/7d/c9/407dc94f9773166970a29588e92417ed.jpg",
    "https://i.pinimg.com/236x/51/6d/d2/516dd29eaa714222e8b62fc735080c8e.jpg",
    "https://i.pinimg.com/236x/51/6d/d2/516dd29eaa714222e8b62fc735080c8e.jpg",
    "https://i.pinimg.com/236x/51/6d/d2/516dd29eaa714222e8b62fc735080c8e.jpg",
    "https://i.pinimg.com/236x/ce/18/cc/ce18cc3bfe2615da0675baf1380d8de2.jpg"

]
const Bibliotheque = () => {
    // const books = [
    //     {
    //         id: 1,
    //         name: "1984",
    //         author: "George Orwell",
    //         cover: ""
    //     },
    //     {
    //         id: 2,
    //         name: "To Kill a Mockingbird",
    //         author: "Harper Lee",
    //         cover: ""
    //     },
    //     {
    //         id: 3,
    //         name: "The Great Gatsby",
    //         author: "F. Scott Fitzgerald",
    //         cover: ""
    //     },
    //     {
    //         id: 4,
    //         name: "Moby Dick",
    //         author: "Herman Melville",
    //         cover: ""
    //     },
    //     {
    //         id: 5,
    //         name: "Pride and Prejudice",
    //         author: "Jane Austen",
    //         cover: ""
    //     },
    //     {
    //         id: 6,
    //         name: "War and Peace",
    //         author: "Leo Tolstoy",
    //         cover: ""
    //     },
    //     {
    //         id: 7,
    //         name: "The Catcher in the Rye",
    //         author: "J.D. Salinger",
    //         cover: ""
    //     },
    //     {
    //         id: 8,
    //         name: "The Hobbit",
    //         author: "J.R.R. Tolkien",
    //         cover: ""
    //     },
    //     {
    //         id: 9,
    //         name: "Fahrenheit 451",
    //         author: "Ray Bradbury",
    //         cover: ""
    //     },
    //     {
    //         id: 10,
    //         name: "Brave New World",
    //         author: "Aldous Huxley",
    //         cover: ""
    //     },
    //     {
    //         id: 11,
    //         name: "The Picture of Dorian Gray",
    //         author: "Oscar Wilde",
    //         cover: ""
    //     },
    //     {
    //         id: 12,
    //         name: "The Brothers Karamazov",
    //         author: "Fyodor Dostoevsky",
    //         cover: ""
    //     },
    //     {
    //         id: 13,
    //         name: "Crime and Punishment",
    //         author: "Fyodor Dostoevsky",
    //         cover: ""
    //     },
    //     {
    //         id: 14,
    //         name: "Wuthering Heights",
    //         author: "Emily Brontë",
    //         cover: ""
    //     },
    //     {
    //         id: 15,
    //         name: "Jane Eyre",
    //         author: "Charlotte Brontë",
    //         cover: ""
    //     },
    //     {
    //         id: 16,
    //         name: "The Odyssey",
    //         author: "Homer",
    //         cover: ""
    //     },
    //     {
    //         id: 17,
    //         name: "The Iliad",
    //         author: "Homer",
    //         cover: ""
    //     },
    //     {
    //         id: 18,
    //         name: "The Grapes of Wrath",
    //         author: "John Steinbeck",
    //         cover: ""
    //     },
    //     {
    //         id: 19,
    //         name: "The Catch-22",
    //         author: "Joseph Heller",
    //         cover: ""
    //     },
    //     {
    //         id: 20,
    //         name: "The Alchemist",
    //         author: "Paulo Coelho",
    //         cover: ""
    //     }
    // ];
    const [books, setBooks] = useState([])
    const [isLoadingBooks, setLoadingBooks] = useState(true)
    const getBooks = async () => {
        setLoadingBooks(true)
        const res = await api.get('/livres');
        console.log(res.data);
        setBooks(res.data)
        setLoadingBooks(false)
    }
    useEffect(() => {
        getBooks()
    }, []);


    const getRanNum = () => {
        return Math.floor(Math.random() * 30);
    }
    let takedImges = []
    return (
        <div className='bg-l p20  mt50 wmia'>
            <Categories />
            <div className="wmia mt50 border op-2"></div>
            <div className="wmia r-w-p-s">

                {isLoadingBooks ?
                    <Loader />
                    :
                    books.map(b => {
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
        </div>
    )
}

export default Bibliotheque
