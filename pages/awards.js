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
							 <h3  className="heading1 awardshead">Awards</h3>
					 	 <div className="footer-top">
    <div className="container awardsbox">
					
	
	
					<div className="row">
						<div className="col-md-4">
								<img src="../Images/awards/mint-award-1024x724.jpg" alt="" title=""/>
						
						</div>
						<div className="col-md-4">		
 						
							<img src="../Images/awards/page-1.jpg" alt="" title=""/>
					 
						</div>
						
						
						<div className="col-md-4">
							<img src="../Images/awards/realistic.jpg" alt="" title=""/>
						
						</div>
						<div className="col-md-4">			 
							<img src="../Images/awards/tempsnip.jpg" alt="" title=""/>
					 
						</div>
						
						
						<div className="col-md-4">
								
								<img src="../Images/awards/paper.jpg" alt="" title=""/>
						
						</div>
						<div className="col-md-4">			 
							<img src="../Images/awards/wb.jpg" alt="" title=""/>
					 
						</div>
												
						<div className="col-md-4">
								<img src="../Images/awards/cert.jpg" alt="" title=""/>
						
						</div>
						<div className="col-md-4">			 
					 
								<img src="../Images/awards/wb2.jpg" alt="" title=""/>
						</div>
						
						
						<div className="col-md-4">
								<img src="../Images/awards/wb3.jpg" alt="" title=""/>
						
						</div>
						<div className="col-md-4">			 
					 
							<img src="../Images/awards/Chandan2.jpg" alt="" title=""/>
						</div>
						
						<div className="col-md-4">			 
					 
							<img src="../Images/awards/chandan.jpg" alt="" title=""/>
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


