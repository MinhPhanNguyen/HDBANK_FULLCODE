import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import axios from 'axios';

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); // Điều hướng sau khi đăng ký
    const [loading, setLoading] = useState(false);

    const closedFrame = () => {
        document.querySelector('.Frame').style.top = '-100%';
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', {
                email,
                password,
            });
            setSuccess(response.data.message);
            setTimeout(() => navigate('/'), 2000);
        } catch (err) {
            console.error(err); // Log lỗi để kiểm tra chi tiết
            setError(err.response?.data?.message || 'Mật khẩu từ 8 - 30 kí tự');
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div>
            <Header />
            <div className='Signin'>
                <section className='Section_1'>
                    <form onSubmit={handleSignup}>
                        <div className='Title'>
                            <h2>HD</h2>
                            <h2>Bank</h2>
                            <h2>Xin chào</h2>
                        </div>

                        <div className='Username' data-aos="fade-up">
                            <input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className='Password' data-aos="fade-up">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Mật khẩu'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            
                            {
                                showPassword ? ( <IoIosEyeOff onClick={() => setShowPassword(false)} /> )
                                : ( <IoEye onClick={() => setShowPassword(true)} /> )
                            }                        
                        </div>

                        {error  && <p data-aos="zoom-in" style={{ 
                            color: '#ba1128',
                            padding: '0.5em 1em 0 1em',
                            backgroundColor: 'transparent',
                            borderRadius: '0.2em'
                        }}>{error}</p>}

                        {success && <p data-aos="zoom-in"style={{ 
                                color: 'rgb(0, 162, 0)',
                                padding: '0.5em 1em 0 1em',
                                backgroundColor: 'transparent',
                                borderRadius: '0.2em'
                        }}>{success}</p>}

                        <ul data-aos="fade-up">
                            <li><Link to='/'><h3>Đăng nhập ?</h3></Link></li>
                        </ul>

                        <button data-aos="fade-up" type='submit'>Đăng ký</button>
                    </form>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Signin;
