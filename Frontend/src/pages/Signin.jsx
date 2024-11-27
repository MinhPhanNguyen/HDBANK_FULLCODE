import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import { IoEye } from "react-icons/io5";

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <Header/>
            <div className='Signin'>
                <section className='Section_1'>
                    <form>
                        <div className='Title'>
                            <h2>HD</h2>
                            <h2>Bank</h2>
                            <h2>Xin chào</h2>
                        </div>
    
                        <div className='Username'>
                            <input type='text' placeholder='Tài khoản'/>
                        </div>

                        <div className='Password'>
                            <input  type={showPassword ? 'text' : 'password'}  placeholder='Mật khẩu'/>
                            <IoEye  onClick={() => setShowPassword(!showPassword)} />
                        </div>
                    </form>

                    <ul>
                        <li><Link to='/' ><p>Đăng nhập ?</p></Link></li>
                    </ul>

                    <button>Đăng ký</button>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default Signin;