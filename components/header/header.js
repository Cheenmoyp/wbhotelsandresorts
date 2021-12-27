import React, { useState, useEffect} from 'react';
// import OwlCarousel from 'react-owl-carousel';
import Link from 'next/link';
import Image from 'next/image';
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import Modal from "react-bootstrap/Modal";
import axios from 'axios';
export const Header = () => {
    const [loginmodal, setLoginmodal] = useState(false);
    const [showNavbar, setShowNavbar] = useState('');
    const [showDestinationNav, setShowDestinationNav] = useState('');
    const [showHotelNav, setShowHotelNav] = useState('');
    const [showAboutUsNav, setShowAboutUsNav] = useState('');
	const handleLoginBoxClick = () => {
        setLoginmodal(!loginmodal);
    }
	const handleNavBar = () => {
		if (showNavbar) {
			setShowNavbar('');
		} else {
			setShowNavbar('show');
		}
        
    }
	const handleDestinationNav = () => {
		if (showDestinationNav) {
			setShowDestinationNav('');
		} else {
			setShowDestinationNav('show');
			setShowHotelNav('');
			setShowAboutUsNav('');
		}
	}
	const handleHotelNav = () => {
		if (showHotelNav) {
			setShowHotelNav('');
		} else {
			setShowHotelNav('show');
			setShowDestinationNav('');
			setShowAboutUsNav('');
		}
        
    }
	const handleAboutUsNav = () => {
		if (showAboutUsNav) {
			setShowAboutUsNav('');
		} else {
			setShowAboutUsNav('show');
			setShowHotelNav('');
			setShowDestinationNav('');
		}
        
    }
	//package list
    const [destinationList, setDestinatioList] = useState([]);
	if (!destinationList.length) {
		const fetcher  = axios.get(`${process.env.NEXT_PUBLIC_HOST_BE}/group-destination-list/2533/ALL`).then(response => {
			return response.data;
		})
		.catch(error => {
			console.log('error', error);
		});
		fetcher.then(response => {
			setDestinatioList(response.destinations)  
		}) 
	}
     
    return (
        < >
		 <div className="headbar">
        <div className="container">
            <div className="row">
            <div className="col-md-2">
                <div className="logo"> <a href={"/"}> <img layout={'fill'} src="/Images/logo.png" alt="" title=""/> </a> </div>
            </div>
            <div className="col-md-7">
                <div className="nav-con">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={() => handleNavBar()} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                    <div className={'collapse navbar-collapse '+showNavbar} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown"> 
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" onClick={() => handleDestinationNav()} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Destination </a>
                        <div className={'dropdown-menu '+showDestinationNav} aria-labelledby="navbarDropdown">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12"> 
                                <span className="menu-heading">All Destinations</span> 
                                <ul className="  menublocks">
                                    {destinationList && destinationList.map((destination, index) => {
                                        
                                        return (
                                            <li  key={index}> <a className="nav-link active" href={'/destination/'+ base64_encode(destination)} >{destination}</a></li>
                                           
                                        )
                                    })}
                                </ul>
                                </div>
                                
                              

                              
                            </div>
                            </div>
                        </div>
                        </li>
                        <li className="nav-item dropdown"> 
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" onClick={() => handleHotelNav()} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Hotels </a>
                        <div className={'dropdown-menu '+showHotelNav} aria-labelledby="navbarDropdown">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-4"> 
                                <span  > </span>
                                <ul className="nav flex-column">
                              <li className="nav-item"> <a className="nav-link active" href={'/hotel-details/MjQwNw=='}>Aditi Vadodara</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href={'/hotel-details/MjQwOA=='}>Manas Dhule</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href={'/hotel-details/MjQwOQ=='}>Hotel Singhs</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href={'/hotel-details/MjQxMA=='}>Blue Wheel</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href={'/hotel-details/MjQxMg=='}>Asha Palace </a></li>
                                </ul>
                                </div>
                                <div className="col-md-4">
                                <span  > </span>
                                <ul className="nav flex-column">
                                <li className="nav-item"> <a className="nav-link active" href={'/hotel-details/MjQwNw=='}>Sehej Inn</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href={'/hotel-details/MjQxOA=='}>West Blue</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href={'/hotel-details/MjQyMQ=='}>Raahi Palace</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href={'/hotel-details/MjQyMw=='}>Sunny </a></li>
                                    <li className="nav-item"> <a className="nav-link active" href={'/hotel-details/MjQyNA=='}>Amit by WB Hotels </a></li>
                                </ul>
                                </div>
                                
                                <div className="col-md-4">
                                <span > </span>
                                <ul className="nav flex-column">
                                <li className="nav-item"> <a className="nav-link active" href={'/hotel-details/MjQ0Mg=='}>Party Zone</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href={'/hotel-details/MjQ0NA=='}>Hotel Siddharth </a></li>
                                    <li className="nav-item"> <a className="nav-link active" href={'/hotel-details/MjQ0Nw=='}>Great Ganga Palace</a></li>
                                    <li className="nav-item"> <a className="nav-link active" href={'/hotel-details/MjQ0OA=='}>Hotel Rabis </a></li>
                                    <li className="nav-item"> <a className="nav-link active" href={'/hotel-details/MjQ2MA=='}>Madhuyamini </a></li>
                                </ul>
                                </div>
                                
                            </div>
                            </div>
                            
                        </div>
                        </li>
                       <li className="nav-item"> <a className="nav-link active" href={'/meet-our-team'}>About Us </a></li>
						<li className="nav-item"> <a className="nav-link active" href={'/awards'}>Awards </a></li>
						
						<li className="nav-item"> <a className="nav-link active"   href="https://wbhotelsin.wordpress.com/"    >Blog </a></li>
							
							
					
							 
                        
                      
                    </ul>
                    </div>
                </nav>
                </div>
            </div>
            <div className="col-md-3">
                <div className="top-btn-group">   <Link  href="/contact-us" ><a className="join-us">  Contact us</a></Link> </div>
            </div>
			
            </div>
			
			
			<Modal className="modal fade sign-in-modal" tabIndex="-1" size="lg" role="dialog" aria-labelledby="modalLabel" aria-hidden="true" show={loginmodal}>
               <Modal.Body>
			   <div className="modal-body seminor-login-modal-body">
					  <button type="button" className="close" data-dismiss="modal" onClick={() => handleLoginBoxClick()} >
						  <span><i className="fa fa-times-circle" aria-hidden="true"></i></span>
					  </button>
						<div className="sign-in-page-wraper">
							<div className="container">
							  <div className="row login-modal-container">
								<div className="col-md-6 div1">
								  <div className="signin-left">
								   <div className="signinpage-logo">
									 <a href="index-new"> <img src="/Images/logo.png" alt="" title=""/> </a>
								   </div>
								   <div className="signin-form">
									 <h4>Welcome back, please login to your account</h4>
									 <div className="login-with"><h5>Log in with</h5><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i>
									</a><a href="#"><i className="fa fa-google" aria-hidden="true"></i></a></div>
									 <form>
									   <input type="text" placeholder="Username or Email Address"/>
									   <input type="password" placeholder="Type Password"/>
									   <div className="clearfix"></div>
									   <div className="row">
										 <div className="col"><input type="checkbox" />Remember me</div>
										 <div className="col"><a href="#forgot-password"  data-toggle="modal">Forgot Password</a></div>
									   </div>
									   <input type="submit" value="Login" />
									   <div className="clearfix"></div>
									   <p>Dont have an account? <a href="#register-form-modal"  data-toggle="modal">Register</a></p>
									 </form>
								   </div>
								  </div>
								</div>
								<div className="col-md-6 div2">
								  <div className="sign-in-right">
									<ul>
									  <li><i className="fa fa-bullhorn" aria-hidden="true"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
									  <li><i className="fa fa-car" aria-hidden="true"></i>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
									  <li><i className="fa fa-check" aria-hidden="true"></i> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
						   
									</ul>
								  </div>
								</div>
							  </div>
							</div>
							</div>
							</div>
				</Modal.Body>
            </Modal>
			
			
	    	 
		</div>
		</div>
		
        </ >
    )
}
