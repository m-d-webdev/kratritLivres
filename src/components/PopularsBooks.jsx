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

    console.log(popularBooks);

    return (
        <div className='c-s-c mt50 wmia' style={{ width: "90%" }}>
            {
                popularBooks.map(b =>
                    <div className="wmia p10 h500 bg-l  mb50 br10 r-s-s" key={b.nom} style={{ filter: "drop-shadow(0 5px 10px var(--filter-color))" }}>
                        <img src={b.image} className='hmia br10 w300' style={{ objectFit: "cover" }} alt="" />
                        <div className="c-s-s ml20">
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
                            <p className='mt20 ml20 fw600' style={{ maxWidth: "500px" }}>
                                {b.description}
                            </p>

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default PopularsBooks
