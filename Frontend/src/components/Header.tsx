import React from 'react';
import language from '../assets/images/flag-vi.png'
import Logo from "../assets/images/logo.png"
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RiExchangeDollarLine } from "react-icons/ri";

const Header = () => {
    return (
        <header>
            <div className='Container'>
                <div className='Logo'>
                    <img src={Logo} alt='logo' />
                </div>

                <ul>
                    <li><MdCall/><a href='tel:19006060' ><h3>1900 6060</h3></a></li>
                    <li><FaLocationDot /><a href='https://hdbank.com.vn/vi/atm-branch'><h3>Tìm điểm giao dịch</h3></a></li>
                    <li><RiExchangeDollarLine /><a href='https://hdbank.com.vn/vi/personal/product/ngoai-te'><h3>Tra cứu tỷ giá</h3></a></li>
                    <img src={language} alt='img-header' />
                </ul>
            </div>
        </header>
    )
}

export default Header;