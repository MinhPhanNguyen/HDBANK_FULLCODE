import React from 'react';
import qr from '../assets/images/qrcode.png'
import chplay from '../assets/images/chplay.png'
import appstore from '../assets/images/appstore.png'

const Line = () => {
    return (
        <div className='Line'></div>
    )
}
const Footer:React.FC = () => {
    return (
        <footer>
            <div className='Container'>
                <ul>
                    <li><a>Bản quyền © 2023 thuộc về HDBank</a></li>
                    <Line/>
                    <li><a href='https://hdbank.com.vn/vi/term'>Điều khoản sử dụng</a></li>
                    <Line/>
                    <a><img src={qr} alt='image_footer' /></a>
                    <a href='https://play.google.com/store/apps/details?id=com.vnpay.hdbank&pli=1'><img src={chplay} alt='image_footer' /></a>
                    <a href='https://apps.apple.com/vn/app/hdbank/id1461658565'><img src={appstore} alt='image_footer' /></a>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;