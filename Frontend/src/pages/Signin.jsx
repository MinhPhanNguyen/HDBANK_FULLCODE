import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import axios from 'axios';

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); // Điều hướng sau khi đăng ký
    const [loading, setLoading] = useState(false);

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
            setError(err.response?.data?.message || 'Đã xảy ra lỗi.');
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

                        <div className='Username'>
                            <input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className='Password'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Mật khẩu'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <IoEye onClick={() => setShowPassword(!showPassword)} />
                        </div>

                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {success && <p style={{ color: 'green' }}>{success}</p>}

                        <button type='submit'>Đăng ký</button>
                    </form>

                    <ul>
                        <li><Link to='/'><p>Đăng nhập ?</p></Link></li>
                    </ul>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Signin;
