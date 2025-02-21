import React from 'react'

const PopularsBooks = () => {
    const popularBooks = [
        {
            image: "./media/All the New Books to Read This November, From Sci-Fi Novels to Memoirs.jpeg",
            nom: "Harry Potter à l'école des sorciers",
            auteur: "J.K. Rowling",
            anneePublication: 1997,
            genre: ["Fantasy", "Jeunesse", "Aventure"],
            pages: 309,
            description: "Premier tome de la célèbre saga de J.K. Rowling, racontant les aventures de Harry Potter, un jeune sorcier découvrant son héritage magique à Poudlard."
        },
        {
            image: "./media/Le seigneur des anneaux _ La communauté de l'anneau - John Ronald Reuel Tolkien.jpeg",
            nom: "Le Seigneur des Anneaux",
            auteur: "J.R.R. Tolkien",
            anneePublication: 1954,
            genre: ["Fantasy", "Aventure", "Épopée"],
            pages: 1137,
            description: "Chef-d'œuvre de J.R.R. Tolkien, ce roman épique suit la quête de Frodon Sacquet pour détruire l'Anneau Unique et sauver la Terre du Milieu."
        },
        {
            image: "./media/1984.jpeg",
            nom: "1984",
            auteur: "George Orwell",
            anneePublication: 1949,
            genre: ["Dystopie", "Science-fiction", "Politique"],
            pages: 328,
            description: "Roman dystopique de George Orwell qui explore un monde sous surveillance totale, où la liberté individuelle est menacée par un régime totalitaire."
        }
    ];
    let b = popularBooks[0]
    let b1 = popularBooks[1]
    let b2 = popularBooks[2]
    return (
        <div className='c-s-c mt20 wmia' style={{ width: "90%", maxWidth: "1500px" }}>
            <div className="wmia r-s-c">
                <h1 className='op-7 fw900'>
                    Découvrez les livres les plus récents et les plus populaires du monde.
                </h1>
            </div>
            <div className="wmia mt20 r-s-c">
                <div className="wmia p10 h400 bg-l  mb50 br10 r-s-s" key={b.nom} style={{ filter: "drop-shadow(0 5px 10px var(--filter-color))", maxWidth: "800px" }}>
                    <img src={b.image} className='hmia br10 w300' style={{ objectFit: "cover" }} alt="" />
                    <div className="c-b-s hmia p20 ">
                        <div className="c-s-s">
                            <h1
                                className='mt20 ml20'
                                style={{
                                    fontFamily: '"Aoboshi One", serif',
                                    fontSize: "22px"
                                }}
                            >{b.nom}</h1>
                            <h1 className="mt20 fw900 ml20 op-7">
                                de {
                                    b.auteur
                                }
                            </h1>
                            <h1 className="mt10 fw900 ml20 op-8">
                                Annee de Publication : {b.anneePublication}
                            </h1>
                            <h1 className="mt10 fw900 ml20 op-8">
                                Pages : {b.pages}
                            </h1>
                            <div className="r-s-c ml20 mt10">
                                <span className='fw600 op-7 mr10'>
                                    Gengres :
                                </span>
                                {
                                    b.genre.map(e => {

                                        return <p className="fw900 mr10">
                                            {e}
                                        </p>
                                    })
                                }
                            </div>
                            <p className='mt10 ml20 fw600' style={{ maxWidth: "500px" }}>
                                {b.description}
                            </p>

                        </div>
                        <div className="r-p-c wmia">
                            <span className='r-c-c '>
                                <svg className='f-no mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4"></path> <path d="M12 13l0 9"></path> <path d="M9 19l3 3l3 -3"></path> </svg>
                                plus de 200K telechargement
                            </span>
                            <span className='r-c-c '>
                                <svg className='f-no mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path> <path d="M15 14v-2a2 2 0 0 0 -2 -2h-4l2 -2m0 4l-2 -2"></path> </svg>
                                plus de 800K  louer                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wmia r-e-c">
                <div className="wmia p10 h400 bg-l  mb50 br10 r-s-s" key={b.nom} style={{ filter: "drop-shadow(0 5px 10px var(--filter-color))", maxWidth: "800px" }}>
                    <img src={b1.image} className='hmia br10 w300' style={{ objectFit: "cover" }} alt="" />
                    <div className="c-s-s ml20">
                        <div className="c-b-s hmia p20 ">

                            <h1
                                className='mt20 ml20'
                                style={{
                                    fontFamily: '"Aoboshi One", serif',
                                    fontSize: "22px"
                                }}
                            >{b1.nom}</h1>
                            <h1 className="mt20 fw900 ml20 op-7">
                                de {
                                    b1.auteur
                                }
                            </h1>
                            <h1 className="mt10 fw900 ml20 op-8">
                                Annee de Publication : {b1.anneePublication}
                            </h1>
                            <h1 className="mt10 fw900 ml20 op-8">
                                Pages : {b1.pages}
                            </h1>
                            <div className="r-s-c ml20 mt10">
                                Gengres :
                                {
                                    b1.genre.map(e => {

                                        return <p className="fw900 mr10">
                                            {e}
                                        </p>
                                    })
                                }
                            </div>
                            <p className='mt10 ml20 fw600' style={{ maxWidth: "400px" }}>
                                {b1.description}
                            </p>
                        </div>
                        <div className="r-p-c wmia">
                            <span className='r-c-c '>
                                <svg className='f-no mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4"></path> <path d="M12 13l0 9"></path> <path d="M9 19l3 3l3 -3"></path> </svg>
                                plus de 200K telechargement
                            </span>
                            <span className='r-c-c '>
                                <svg className='f-no mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path> <path d="M15 14v-2a2 2 0 0 0 -2 -2h-4l2 -2m0 4l-2 -2"></path> </svg>
                                plus de 800K  louer                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wmia r-s-c">

                <div className="wmia p10 h400 bg-l  mb50 br10 r-s-s" style={{ filter: "drop-shadow(0 5px 10px var(--filter-color))", maxWidth: "800px" }}>
                    <img src={b2.image} className='hmia br10 w300' style={{ objectFit: "cover" }} alt="" />
                    <div className="c-s-s ml20">
                        <div className="c-b-s hmia p20 ">
                            <h1
                                className='mt20 ml20'
                                style={{
                                    fontFamily: '"Aoboshi One", serif',
                                    fontSize: "22px"
                                }}
                            >{b2.nom}</h1>
                            <h1 className="mt20 fw900 ml20 op-7">
                                de {
                                    b2.auteur
                                }
                            </h1>
                            <h1 className="mt10 fw900 ml20 op-8">
                                Annee de Publication : {b2.anneePublication}
                            </h1>
                            <h1 className="mt10 fw900 ml20 op-8">
                                Pages : {b2.pages}
                            </h1>
                            <div className="r-s-c ml20 mt10">
                                Gengres :
                                {
                                    b2.genre.map(e => {

                                        return <p className="fw900 mr10">
                                            {e}
                                        </p>
                                    })
                                }
                            </div>
                            <p className='mt10 ml20 fw600' style={{ maxWidth: "400px" }}>
                                {b2.description}
                            </p>
                        </div>
                        <div className="r-p-c wmia">
                            <span className='r-c-c '>
                                <svg className='f-no mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4"></path> <path d="M12 13l0 9"></path> <path d="M9 19l3 3l3 -3"></path> </svg>
                                plus de 200K telechargement
                            </span>
                            <span className='r-c-c '>
                                <svg className='f-no mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path> <path d="M15 14v-2a2 2 0 0 0 -2 -2h-4l2 -2m0 4l-2 -2"></path> </svg>
                                plus de 800K  louer                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wmia r-e-c">
                <div className="wmia p10 h400 bg-l  mb50 br10 r-s-s" key={b.nom} style={{ filter: "drop-shadow(0 5px 10px var(--filter-color))", maxWidth: "800px" }}>
                    <img src={b1.image} className='hmia br10 w300' style={{ objectFit: "cover" }} alt="" />
                    <div className="c-s-s ml20">
                        <div className="c-b-s hmia p20 ">

                            <h1
                                className='mt20 ml20'
                                style={{
                                    fontFamily: '"Aoboshi One", serif',
                                    fontSize: "22px"
                                }}
                            >{b1.nom}</h1>
                            <h1 className="mt20 fw900 ml20 op-7">
                                de {
                                    b1.auteur
                                }
                            </h1>
                            <h1 className="mt10 fw900 ml20 op-8">
                                Annee de Publication : {b1.anneePublication}
                            </h1>
                            <h1 className="mt10 fw900 ml20 op-8">
                                Pages : {b1.pages}
                            </h1>
                            <div className="r-s-c ml20 mt10">
                                Gengres :
                                {
                                    b1.genre.map(e => {

                                        return <p className="fw900 mr10">
                                            {e}
                                        </p>
                                    })
                                }
                            </div>
                            <p className='mt10 ml20 fw600' style={{ maxWidth: "400px" }}>
                                {b1.description}
                            </p>
                        </div>
                        <div className="r-p-c wmia">
                            <span className='r-c-c '>
                                <svg className='f-no mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4"></path> <path d="M12 13l0 9"></path> <path d="M9 19l3 3l3 -3"></path> </svg>
                                plus de 200K telechargement
                            </span>
                            <span className='r-c-c '>
                                <svg className='f-no mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path> <path d="M15 14v-2a2 2 0 0 0 -2 -2h-4l2 -2m0 4l-2 -2"></path> </svg>
                                plus de 800K  louer                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PopularsBooks
