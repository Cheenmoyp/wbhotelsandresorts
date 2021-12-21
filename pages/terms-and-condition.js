import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import axios from 'axios';

const Package = () => {


    return (
        <>
            <Header></Header>
            <div className="inner-page-wrapper">
            hellow world
            </div>
            <Footer></Footer>
        </>
    )
}

export default Package;


