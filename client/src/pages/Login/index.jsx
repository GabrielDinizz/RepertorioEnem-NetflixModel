import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginCard from '../../components/LoginCard';
import styles from '../Login/login.module.css';

import React, { useState, useEffect } from 'react';

function Login() {
    return (
        <>
            <Header />
            <main>
                <LoginCard />
            </main>
            <Footer />
        </>
    );
}

export default Login;
