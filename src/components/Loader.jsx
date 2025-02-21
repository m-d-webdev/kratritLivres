import React from 'react'
import Lottie from 'react-lottie'
import lottieData from '../resources/Animation - 1740095151249.json'
const Loader = () => {
    return (
        <div className='c-c-c wmia'>
            <Lottie
                options={{
                    animationData: lottieData,
                    autoplay: true,
                    loop: true
                }}
                // width={50}
                height={100}
            />
            <p className="fw900 op-7 fs16">
                Un instant ! Chargement...
            </p>
        </div>
    )
}

export default Loader
