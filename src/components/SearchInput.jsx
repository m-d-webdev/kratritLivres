import React from 'react'

const SearchInput = () => {
    return (
        <div className='border r-s-c p5 br20 pl20 ' style={{ width: "35%" }}>
            <svg className='w20 h20 op-7' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
            <input
                className='ml10 fw900 '
                style={{
                    
                    border: "none"
                }} type="text" placeholder="Quel livre cherchez-vous aujourd'hui ..." />
        </div>
    )
}   

export default SearchInput
