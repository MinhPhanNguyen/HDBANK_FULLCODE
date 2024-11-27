import React, {useState} from 'react'
import HeaderPage from '../components/HeaderPage'
import Banner from '../components/Banner'
import FooterPage from '../components/FooterPage'
import card_img_1 from '../assets/images/card-img-1.png'
import card_img_2 from '../assets/images/card-img-2.png'
import card_img_3 from '../assets/images/card-img-3.png'
import card_img_4 from '../assets/images/card-img-4.png'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { MdAttachMoney } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const CardRegistration = () => {
    const [index, setIndex] = useState(0);

    const showMenu = () => {
        const container = document.querySelectorAll('.Container');
        container.forEach(item => {
            item.classList.toggle('show');
        });
    }

    const Previous = () => {
        setIndex(index > 0? index - 1 : 3);
    }

    const Nexr = () => {
        setIndex(index < 3? index + 1 : 0);
    }

    return (
        <div>
            <HeaderPage/>
            <Banner/>
            <div className='CardRegistration'>
                <div className='CardContainer'>
                    <div className='Container'>
                        <img className='Slides' src={card_img_3} alt='card-img' />
                        <img className='Slides' src={card_img_4} alt='card-img' />
                        <img className='Slides' src={card_img_3} alt='card-img' />
                        <img className='Slides' src={card_img_4} alt='card-img' />        
                    </div>
                    <div className='btn'>
                        <button className='btn_left' onClick={Previous} ><FaChevronLeft/></button>
                        <button className='btn_right' onClick={Nexr}><FaChevronRight/></button>
                    </div>
                </div>

                <div className='InfoContainer'>
                    <ul>
                        <li>
                            <span><FaUser/></span>
                            <h3>Trạng thái</h3>
                        </li>
                        <li>
                            <span><GoHistory/></span>
                            <h3>Lịch sử GD</h3>
                        </li>
                        <li>
                            <span><MdAttachMoney/></span>
                            <h3>Chi tiêu</h3>
                        </li>
                        <li>
                            <span><HiOutlineClipboardDocumentList/></span>
                            <h3>Hạn mức</h3>
                        </li>
                    </ul>

                    <ul>
                        <li>Chi tiêu gần đây</li>
                        <li>Xem chi tiết</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardRegistration;