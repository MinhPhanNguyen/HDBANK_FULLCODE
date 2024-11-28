import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import axios from 'axios';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Để điều hướng sau khi đăng nhập
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            console.log({ email, password }); // Kiểm tra giá trị email và password
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });
            const { token } = response.data;
            localStorage.setItem('token', token);
            navigate('/CardRegistration');
        } catch (err) {
            console.error(err);  // Log lỗi chi tiết
            setError('Đăng nhập thất bại. Vui lòng kiểm tra tài khoản hoặc mật khẩu.');
        } finally {
            setLoading(false);
        }
    };    

    return (
        <div>
            <Header />
            <div className='Login'>
                <section className='Section_1'>
                    <form onSubmit={handleLogin}>
                        <div className='Title'>
                            <h2>HD</h2>
                            <h2>Bank</h2>
                            <h2>Xin chào</h2>
                        </div>

                        <div className='Username'>
                            <input
                                type='text'
                                placeholder='Tài khoản'
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

                        <button type="submit">Đăng nhập</button>
                    </form>

                    <ul>
                        <li><Link to='/Signin'><p>Đăng ký tài khoản</p></Link></li>
                        <li><Link to='/Signin'><p>Quên mật khẩu ?</p></Link></li>
                    </ul>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
