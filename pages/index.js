import Head from 'next/head';
import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import StarRatings from 'react-star-ratings';
import { useRouter } from 'next/router'
import axios from 'axios';
import Search from '../components/search/search';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import ReactPlayer from 'react-player'


export default function Home() {
  const router = useRouter()
  const fetcher  = axios.get(`${process.env.NEXT_PUBLIC_HOST}/group-hotel-list/2533`).then(response => {
        return response.data.hotels_data
      })
      .catch(error => {
          console.log('error', error);
      });
  
  const [ourHotelData, setOurHotelData] = useState([])
  const [searchData, setSearchData] = useState();
  
	const [scrollval, setScrollval] = useState('')

	useEffect(() => {
		document.addEventListener("scroll", () => {
			const scrollCheck = window.scrollY > 500
			console.log('scroll', window.scrollY);
			if (scrollCheck) {
				setScrollval('shrink')
			} else {
				setScrollval('')
			}
		})
	})

  fetcher.then(response => {
    if(ourHotelData.length == 0 ) {
      setOurHotelData(response)
    }
  })

  const handleClick = e => {
    e.preventDefault()
    router.push(`/hotels/${searchData.firstname}`)
  }

  const handleTextChange = (textData) => {
    setSearchData(textData);
  };
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const testimonialResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const destinationResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
  <>
    <Header></Header> 
 
 <div className="slider-con">
	
	<ReactPlayer
          className='react-player'
          url="/Images/video.mp4"
		  playing
		  muted
		  loop
		  config={{ file: { attributes: {
			autoPlay: true,
            preload: "auto",
			muted: true
		  }}}}
          width='100%'
          height='100%'
		  position='absolute'
		  top='-122px'
        />
  <div className="slider-caption">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1">
            <h1>Make Your Stay Comfortable </h1>
            <h3>Get instant benefits with <strong>WB Hotels & Resorts</strong> Rewards at more than 650 hotels in over 80 countries</h3>
			 
          </div>
        </div>
      </div>
	  <div className="search-categories">
              
            </div>
    </div>
</div>
<div className={`search-con ${scrollval}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
			<div className="search-form-con">
				<Search props={1}/>
			</div>
          </div>
        </div>
      </div>
	</div>
 
 
 

<div className="our-hotel">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h3 className="heading1">Our Hotels</h3>
      </div>
    </div>
    <div className="row">
    {ourHotelData && 
       ourHotelData.map((slide, index)=>{
        return (
            <div className={index == 1 || index == 4?  "col-md-6" : "col-md-3"} key={index}> 
           
            <div className={ index == 3 || index == 5 ? "box-2 mtop-60":"box-2" }>
              <figure><a href={'hotel-details/'+ base64_encode(slide.hotel_id) }><img className={ index == 0 || index == 2 || index == 5? "height-237": index == 3 ? "height-360":"height-300" } src={slide.image} alt={slide.hotel_name} title={slide.hotel_name} /></a></figure>
              <div className="content">
                <h3><a href={'hotel-details/'+ base64_encode(slide.hotel_id) }>{slide.hotel_name} </a></h3>
                <div className="hotel-footer">
                  <div className="row">
                    <div className="col-6 text-left">
                      <div className="rating">
                      <StarRatings
                        rating={slide.star}
                        starRatedColor="orange"
                        numberOfStars={5}
                        name='rating'
                        starDimension="15px"
                        starSpacing="1px"
                      />
                      </div>
                    </div>
                    <div className="col-6 text-right">
                      <div className="price"> <i className="fa fa-inr" aria-hidden="true"></i> {slide.starting_price} </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <div>
        { index == 5 ? (<div className="box-2 btn-bx box-bx"> <a href="hotels">Explore all Hotels</a> </div>):'' }
        </div>
          </div>
        )
       })
      }
    </div>
  </div>
</div>

<div className="destination-section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h3 className="heading1">Destinations</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div id="Destinations" >
        <Carousel swipeable={true}
				  draggable={true}
				  infinite={true}
				  responsive={destinationResponsive}>
          <div className="post-slide">
            <div className="box-3">
              <figure><img src="/Images/destinations/Vadodara.jpg" alt="" title="" /></figure>
              <div className="content">
                <h4><a href={'/destination/VmFkb2RhcmE='}>Vadodara</a></h4>
              </div>
            </div>
          </div>
          <div className="post-slide">
            <div className="box-3">
              <figure><img src="/Images/destinations/Varanasi.jpg" alt="" title="" /></figure>
              <div className="content">
                <h4><a href={'/destination/VmFyYW5hc2k='}>Varanasi</a></h4>
              </div>
            </div>
          </div>
		  <div className="post-slide">
            <div className="box-3">
              <figure><img src="/Images/destinations/Samastipur.jpg" alt="" title="" /></figure>
              <div className="content">
                <h4><a href={'/destination/U2FtYXN0aXB1cg=='}>Samastipur</a></h4>
              </div>
            </div>
          </div>
		  <div className="post-slide">
            <div className="box-3">
              <figure><img src="/Images/destinations/Ranchi.jpg" alt="" title="" /></figure>
              <div className="content">
                <h4><a href={'/destination/UmFuY2hp'}>Ranchi</a></h4>
              </div>
            </div>
          </div>
          <div className="post-slide">
            <div className="box-3">
              <figure><img src="/Images/destinations/New-Delhi.jpg" alt="" title="" /></figure>
              <div className="content">
                <h4><a href={'/destination/TmV3IERlbGhp'}>New-Delhi</a></h4>
              </div>
            </div>
          </div>
		  
		   <div className="post-slide">
            <div className="box-3">
              <figure><img src="/Images/destinations/Madhubani.jpg" alt="" title="" /></figure>
              <div className="content">
                <h4><a href={'/destination/TWFkaHViYW5p'}>Madhubani</a></h4>
              </div>
            </div>
          </div>
		  
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</div>

 

<Footer></Footer>
    </>
  )
}
