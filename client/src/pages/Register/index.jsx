import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RegisterCard from '../../components/RegisterCard';
import styles from '../Register/register.module.css';

import React, { useState, useEffect } from 'react';

function Register() {
    return (
        <>
            <Header />
            <main className={styles.mainAlign}>
                <RegisterCard />
            </main>
            <Footer />
        </>
    );
}

export default Register;
