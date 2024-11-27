import React from 'react';
import banner from '../assets/images/banner.png'

const Banner = () => {
    return (
        <div className='Banner'>
            <img src={banner} alt='banner' />
            <div className='Container'>
                <h1>Thẻ của bạn, Chất riêng của bạn</h1>
                <p>Thẻ HDBank - Hàng nghìn ưu đãi hấp dẫn</p>
            </div>
        </div>
    )
}

export default Banner;