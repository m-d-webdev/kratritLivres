import React from 'react'

const Reviews = ({ reviews }) => {

    return (
        <div className='wmia p10 my-2.5 c-s-s'>
            <div className="r-b-c">
                <h1 className='fw600 op-7'>Les avis de ce livre</h1>
            </div>
            <div className="wmia border mt10 op-4"></div>
            <div className="c-s-s mt20">
                {reviews.length == 0 ?
                    <div className="wmia r-c-c">
                            <h1 className="fw600 op-7">Aucun avis n'a encore été écrit pour ce livre.</h1>
                    </div>
                    :
                    reviews.map(r => {
                        return <div key={r.comment} className="c-s-s  wmia  p10 br10 mb20">
                            <div className="r-s-c">
                                <h1 className="fw900 op-7">{r.user}</h1>
                                <span className='ml20 r-s-c fw900 op-7'>
                                    <svg className='f-no mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M17.286 21.09q -1.69 .001 -5.288 -2.615q -3.596 2.617 -5.288 2.616q -2.726 0 -.495 -6.8q -9.389 -6.775 2.135 -6.775h.076q 1.785 -5.516 3.574 -5.516q 1.785 0 3.574 5.516h.076q 11.525 0 2.133 6.774q 2.23 6.802 -.497 6.8"></path> </svg>
                                    {r.rating}
                                </span>
                            </div>
                            <p className="fw900 fs14 mt15 ml10">
                                {r.comment}
                            </p>
                        </div>
                    })
                }
            </div>
            <div className="c-s-s mt50 wmia">
                <span className='fw900 r-s-c'>
                    <svg className='f-no  mr10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M12 5l0 14"></path> <path d="M5 12l14 0"></path> </svg>
                    Ajoutez votre avis
                </span>
                <div className="wmia r-s-c mt10 max-w-2xl">
                    <input type="text" className='wmia fw900 fs15 ' placeholder="Qu'il est votre avis pour ce livre ?" />
                    <button className='bl curP ml10'>
                        Envoyer
                        <svg style={{ fill: "none", strokeWidth: "2" }} className='f-no ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path> </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Reviews
