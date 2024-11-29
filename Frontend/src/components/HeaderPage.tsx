import React from 'react';
import Logo from "../assets/images/logo.png";
import { FaRegCreditCard } from "react-icons/fa";
import { HiOutlineTemplate } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

const HeaderPage = () => {
    return (
        <div className='HeaderPage'>
            <div className='Container'>
                <div className='Logo'>
                    <img src={Logo} alt='logo' />
                </div>

                <ul>
                    <li><FaRegCreditCard/><h3>Mở thẻ ngay</h3></li>
                    <li><HiOutlineTemplate /><h3>Giao diện</h3></li>
                    <li><h3>Username</h3><FaUserCircle/></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderPage;