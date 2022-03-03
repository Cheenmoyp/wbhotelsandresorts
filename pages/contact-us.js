import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import axios from 'axios';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Package = () => {


    return (
        <>
            <Header></Header>
            <div className="inner-page-wrapper">
				<div class="inner-page-banner"><div class="container"><div class="row"><div class="col-md-12"></div></div></div></div>
			<div className="footer-top">
    <div className="container">
      <div className="row">
			 <div className="col-md-7">
				<div className="contact-map">
					<img src="../images/map.jpg" alt="" title=""/>
				</div>
			 </div>
		    <div className="col-md-5">
				<div className="widget border-0">
					<h5 className="m-b30">CONTACT US</h5>
					<p>
						A-007, Kanakia Boomerang, Chandivali,
						Mumbai – 400072, India<br/>
						Tel No: 08048036907<br/>
						Email: reservations@wbhotels.in
					</p>
					
					
				</div>
				
			 </div>
			
         
				</div>
			  </div>
			</div>
		  </div>
		 
            <Footer></Footer>
        </>
    )
}

export default Package;


