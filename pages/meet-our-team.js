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
				<h2>Meet Our Team</h2>
				<div className="row">
					<div className="col-md-3"><img src="../Images/profile/chandan.jpg" alt="" title=""/></div>
					<div className="col-md-9">
						<h2>CHANDAN PANDEY | Co- Founder & COO</h2>
						<p>
						Co -Founded the hospitality division responsible for strategic alliance ,business growth initiatives planning and launch of new hotels and overseas
						 hotel operations . M.Sc in Hotel Management from Annamalai University and Alumnus of NIT ,Mumbai. One of the youngest General Manager 
						 in Hospitality Industry. Having worked length and breath of the country from north to down south. More than two decades of hospitality 
						 experience with phenomenal drive for result excellent networking expertise in hotel operations, technical service, owner relations, 
						 administration and Asset management .Worked as General Manager for The Orchid Pune with 410 keys & one lakh sgft of banqueting space .
						 Worked with other leading brand such as MERCURE Dwarka as VP – Asset Management, Wyndham Hotels, Sahara Star ,Mumbai ,Sarovar Hotels.
						</p>

					
					</div>
				</div>
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-9"></div>
				</div>
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-9"></div>
				</div>
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-9"></div>
				</div>
				<Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
            </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Package;


