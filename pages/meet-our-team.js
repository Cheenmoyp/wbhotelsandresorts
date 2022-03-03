import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Package = () => {


    return (
        <>
            <Header></Header>
            <div className="inner-page-wrapper">
            <div className="container profiles">
				 <h3  className="heading1 awardshead">Meet Our Team</h3>
				<div className="row teamcard">
					<div className="col-md-4">
						<div className="team-box">
							<figure><a href="#popup1"><img src="../Images/profile/chandan.jpg" alt="" title=""/></a> </figure>
							<div className="content">
								<h2><a href="#popup1">CHANDAN PANDEY | Co- Founder</a> </h2>
									<div className="paragraph">
										<p>Co -Founded the hospitality division responsible for strategic alliance ,business growth initiatives planning and launch of new hotels and overseas
										hotel operations . M.Sc in Hotel Management from Annamalai University and Alumnus of NIT ,Mumbai.</p>
									</div>
								<a className="r-morebtn" href="#popup1">Read More</a>
								<div id="popup1" className="overlay">
									<div className="popup">
										<a className="close" href="#">&times;</a>
										<div className="full-content">
											<figure><img src="../Images/profile/chandan.jpg" alt="" title=""/></figure>
											<h2>CHANDAN PANDEY | Co- Founder</h2>
											<p>Co -Founded the hospitality division responsible for strategic alliance ,business growth initiatives planning and launch of new hotels and overseas
												hotel operations . M.Sc in Hotel Management from Annamalai University and Alumnus of NIT ,Mumbai. One of the youngest General Manager 
												in Hospitality Industry. Having worked length and breath of the country from north to down south. More than two decades of hospitality 
												experience with phenomenal drive for result excellent networking expertise in hotel operations, technical service, owner relations, 
												administration and Asset management .Worked as General Manager for The Orchid Pune with 410 keys & one lakh sgft of banqueting space .
												Worked with other leading brand such as MERCURE Dwarka as VP – Asset Management, Wyndham Hotels, Sahara Star ,Mumbai ,Sarovar Hotels.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="team-box">
							<figure><a href="#popup2"><img src="../Images/profile/aman.png" alt="" title=""/></a></figure>
							<div className="content">
								<h2><a href="#popup2">AMAN GUPTA | Founder</a> </h2>
									<div className="paragraph">
										<p>Founder of Westbridge Group. Core interest in Hotel Project development, Global Procurement, Hotels & Restaurant Brand. Has professional experience of more than 16 year with global brand like, Taj Hotels, PMI (USA) , Chris Garrod (London) He drives the group business with board of directors.</p>
									</div>
								<a className="r-morebtn" href="#popup2">Read More</a>
								<div id="popup2" className="overlay">
									<div className="popup">
										<a className="close" href="#">&times;</a>
										<div className="full-content">
											<figure><img src="../Images/profile/aman.png" alt="" title=""/></figure>
											<h2>AMAN GUPTA | Founder</h2>
											<p>Founder of Westbridge Group. Core interest in Hotel Project development, Global Procurement, Hotels & Restaurant Brand. Has professional experience of more than 16 year with global brand like, Taj Hotels, PMI (USA) , Chris Garrod (London) He drives the group business with board of directors.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	
					<div className="col-md-4">
						<div className="team-box">
							<figure><a href="#popup3"><img src="../Images/profile/chetan-shetty.jpg" alt="" title=""/></a></figure>
							<div className="content">
								<h2><a href="#popup3">CHETAN SHETTY | Asst. Director–Revenue & Distribution</a> </h2>
									<div className="paragraph">
										<p>
										 Chetan drives the business generated from E-Commerce Channels and advises Revenue Management practices at both 
										 Corporate and unit level. A PGD Holder from IHM, Dadar, Mumbai. Chetan carries 24 years of experience in the industry
										 of managing revenue and hotels operation from small to mid scale hotels at multiple locations where he managed to increase the overall revenue for hotels with innovative practices and tools in India and Abroad like General Manager of Speke group of hotels, 
										 COO of The Willingdon Sports Club, General Manager Hotel Holiday Gulf Bahrain.
										</p>
									</div>
								<a className="r-morebtn" href="#popup2">Read More</a>
								<div id="popup3" className="overlay">
									<div className="popup">
										<a className="close" href="#">&times;</a>
										<div className="full-content">
											<figure><img src="../Images/profile/chetan-shetty.jpg" alt="" title=""/></figure>
											<h2>CHETAN SHETTY | Asst. Director–Revenue & Distribution</h2>
											<p>
											 Chetan drives the business generated from E-Commerce Channels and advises Revenue Management practices at both 
											 Corporate and unit level. A PGD Holder from IHM, Dadar, Mumbai. Chetan carries 24 years of experience in the industry
											 of managing revenue and hotels operation from small to mid scale hotels at multiple locations where he managed to increase the overall revenue for hotels with innovative practices and tools in India and Abroad like General Manager of Speke group of hotels, 
											 COO of The Willingdon Sports Club, General Manager Hotel Holiday Gulf Bahrain.
											</p>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	
					<div className="col-md-4">
						<div className="team-box">
							<figure><a href="#popup4"><img src="../Images/profile/Suresh.jpg" alt="" title=""/></a></figure>
							<div className="content">
								<h2><a href="#popup4">SURESH THADANI | General Manager – Hotel Supply</a> </h2>
									<div className="paragraph">
										<p>
										 Suresh is responsible for overall growth of the company in terms of offline revenue and market share, Suresh holds Degree in Commerce from Mumbai University & PG Diploma in Import & Export Management . 
										 He is primarily a go getter in hospitality industry and have a vast experience of more than 24 years in sales and marketing .
										 Suresh has worked with many reputed brands like ITC Welcom Heritage, Lords Hotels & Resorts, VCI Hospitality and The Emerald Group of Hotels
										</p>
									</div>
								<a className="r-morebtn" href="#popup4">Read More</a>
								<div id="popup4" className="overlay">
									<div className="popup">
										<a className="close" href="#">&times;</a>
										<div className="full-content">
											<figure><img src="../Images/profile/Suresh.jpg" alt="" title=""/></figure>
											<h2>SURESH THADANI | General Manager – Hotel Supply</h2>
											<p>
											 Suresh is responsible for overall growth of the company in terms of offline revenue and market share, Suresh holds Degree in Commerce from Mumbai University & PG Diploma in Import & Export Management . 
											 He is primarily a go getter in hospitality industry and have a vast experience of more than 24 years in sales and marketing .
											 Suresh has worked with many reputed brands like ITC Welcom Heritage, Lords Hotels & Resorts, VCI Hospitality and The Emerald Group of Hotels
											</p>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	
					<div className="col-md-4">
						<div className="team-box">
							<figure><a href="#popup5"><img src="../Images/profile/geroge.jpg" alt="" title=""/></a></figure>
							<div className="content">
								<h2><a href="#popup5">GEORGE BHAMBAL | Asst. General Manager – Hotel Supply -West</a> </h2>
									<div className="paragraph">
										<p>
										 George is responsible for overall growth of the company in terms of hotels & keys development on pan India basis Parallely manages one of the largest network of Business Associates on pan India level. 
										 George holds Degree in Science form Mumbai University he is primarily a go getter in hospitality industry and have a vast 
										 experience of more than 18 years in sales and marketing . George has worked with many reputed brands like Sahara Star ,
										 Kamat Hotels, Lords Hotels.
										</p>

									</div>
								<a className="r-morebtn" href="#popup5">Read More</a>
								<div id="popup5" className="overlay">
									<div className="popup">
										<a className="close" href="#">&times;</a>
										<div className="full-content">
											<figure><img src="../Images/profile/geroge.jpg" alt="" title=""/></figure>
											<h2>GEORGE BHAMBAL | Asst. General Manager – Hotel Supply -West</h2>
											<p>
											 George is responsible for overall growth of the company in terms of hotels & keys development on pan India basis Parallely manages one of the largest network of Business Associates on pan India level. 
											 George holds Degree in Science form Mumbai University he is primarily a go getter in hospitality industry and have a vast 
											 experience of more than 18 years in sales and marketing . George has worked with many reputed brands like Sahara Star ,
											 Kamat Hotels, Lords Hotels.
											</p>


										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="team-box">
							<figure><a href="#popup6"><img src="../Images/profile/sandeep.jpg" alt="" title=""/></a></figure>
							<div className="content">
								<h2><a href="#popup6">SANDEEP SINGH | Regional Head Hotel Supply- East India</a> </h2>
									<div className="paragraph">
										<p>
										Sandeep drives the Business Development of WB brand in East region. He holds Degree in Hotel Management & Tourism 
										from SHIATS University. Sandeep carries 07 years of experience in the industry heading Sales and business development
										worked with OYO and FabHotels as State Head, Bihar.
										</p>
									</div>
								<a className="r-morebtn" href="#popup5">Read More</a>
								<div id="popup6" className="overlay">
									<div className="popup">
										<a className="close" href="#">&times;</a>
										<div className="full-content">
											<figure><img src="../Images/profile/sandeep.jpg" alt="" title=""/></figure>
											<h2>SANDEEP SINGH | Regional Head Hotel Supply- East India</h2>
											<p>
											Sandeep drives the Business Development of WB brand in East region. He holds Degree in Hotel Management & Tourism 
											from SHIATS University. Sandeep carries 07 years of experience in the industry heading Sales and business development
											worked with OYO and FabHotels as State Head, Bihar.
											</p>


										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>	
		
				
				{/*
				<div className="row teamcard">
					<div className="col-md-3"><img src="../Images/profile/chef.jpg" alt="" title=""/></div>
					<div className="col-md-9">
						<h2>CHEF ASHISH MASSEY | Corporate Chef</h2>
						<p>
						 Chef Ashish overview the Food & Beverage standard of WB Hotels & Our Food Brand (Meal Mongers, W – Food Court ) at Corporate and unit level. A Hotel Management Graduate from IHM , Lucknow. Chef Ashish carries 14 years of experience in the industry where he Worked with Taj Group of Hotels & IHG. Have Opened many Indian and international brands in India, Dubai,Oman and Canada.
						</p>

					
					</div>
				</div>
				
				
				<div className="row teamcard">
					<div className="col-md-3"><img src="../Images/profile/karuna.jpg" alt="" title=""/></div>
					<div className="col-md-9">
						<h2>KARUNA BAJAJ | Corporate Director – House Keeping</h2>
						<p>
						 An Excellent Corporate housekeeper with immense knowledge, perfection, and eyes for details. Karuna has more than 37 years’ experience in the field of Housekeeping with International exposures. Started with ITC Hotels moved to Hyatt, Sheraton, DLF , The Orchid. .She maintained very high standards of housekeeping operations also has varied experience in pre-opening, procurement, rooms management system, renovations ,Pre opening .
						 
						 </p>

					
					</div>
				</div>
				
				<div className="row teamcard">
					<div className="col-md-3"><img src="../Images/profile/neil.jpg" alt="" title=""/></div>
					<div className="col-md-9">
						<h2>NEIL VAZ | Corporate Trainer</h2>
						<p>
						An innovative people focused corporate trainer and consultant, with experience of 32 years (sales 12 years and training 20 years) covers a wide gamut of areas spread across sales, channel management, training and people development. List of clients – Kohinoor Group, Le Méridien, Radisson Blu, Double Tree by Hilton, Sarovar, IBIS, KEYS, The Club, Sterling Holidays, RAMADA, Zénith Computers, RP Tech, Learning Mâte, Dow Corning, Ashland, CASTROL, Grasim Inds, Narmada Phosphate, WABAG, Nalco, RR Global, DB Power, A’KREATIONS, Cox & Kings,
						
						 </p>

					
					</div>
				</div>
				
					*/	}
				
				
				
			
            </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Package;


