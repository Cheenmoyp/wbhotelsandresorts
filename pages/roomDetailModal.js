import Head from 'next/head';
import React, { useState } from 'react';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import { useRouter } from 'next/router'
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import Button from "react-bootstrap/Button";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
	IconBellRinging2,
	IconX,
	IconPlayerPlay,
	IconChevronRight,
} from "@tabler/icons";

export default function RoomDetailModal(props) {
    console.log('modal', props);
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
    const [roomDetails, setRoomDetails] = useState([]);
    // setModal(true);
    const fetcherRoomDetails  = axios.get(`${process.env.NEXT_PUBLIC_HOST_BE}/bookingEngine/get-room-info/${props.api_key}/${props.hotelid}/${props.id}`).then(response => {
        return response.data.data
      })
      .catch(error => {
          console.log('error', error);
      });

    fetcherRoomDetails.then(response => {
        if(roomDetails.length == 0 ) {
            setRoomDetails(response)
        }
    })

    // set data in localstorage
    const router = useRouter();
    const handleBook = () => {
        // var storage = {"room_type": 8249, "hotel_id": 2881, "room_type_name": roomDetails.room_type, }
        // localStorage.setItem("selectedRoom", JSON.stringify(storage)); 

        let url = base64_encode(props.rooms + '/' + props.adults + '/' + props.age + '/' + props.kids + '/' + props.id + '/' + props.hotelid + '/' + props.checkin + '/' + props.checkout); 

        router.push(`../hotel-booking/${url}`);
    }

    var images = roomDetails.image ? roomDetails.image:[];
    return (
        <Modal className="modal fade hotel-detailmodal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true" show={props.roomModal}>
            {/* <Button variant="close" onClick={() => setModal(!modal)}>
                <IconX />
            </Button> */}
            <Modal.Header>
				<h3 className="modal-title" id="lineModalLabel">{roomDetails.room_type}</h3>
				<button type="button" className="close" data-dismiss="modal" onClick={() => props.setRoomModal(!props.roomModal)}><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
            </Modal.Header>
            <Modal.Body>
                    <div className="modal-body">
                        <div className="room-details-modal-slider">
                            <div id="carouselModal_indicator" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                <Carousel swipeable={true}
                                    draggable={true}
                                    infinite={true}
                                    responsive={responsive}>
                                        {images && 
                                        images.map((img, index2)=>{ 
                                            return (   
                                                <div className="" key={index2}> 
                                                    <img className="d-block w-100 room-img-height" src={'https://d3ki85qs1zca4t.cloudfront.net/bookingEngine/'+ img.image_name} alt="First slide" /> 
                                                </div>
                                            )
                                        })}
                                    </Carousel> 
                                    
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <p>
                                <div dangerouslySetInnerHTML={{
                                        __html: roomDetails.description

                                    }}
                                />
                            </p>
                            <h4>Room Ameenities</h4>
                            <div className="room-dertails">
                                <ul>
                                    <li><span><img src="/Images/hotels/icons/sq-ft.png" alt="" title=""/></span>{roomDetails.room_size_value} sq.ft </li>
                                    <li><span><img src="/Images/hotels/icons/bed.png" alt="" title=""/></span>{roomDetails.bed_type} Bed</li>
                                </ul>
                            </div>
                            <ul className="list-4 row">
                                {roomDetails.room_amenities && 
                                    roomDetails.room_amenities.map((amenities, index) => {
                                        return (
                                            <li className="col-md-4 col-sm-2" key={index}>{amenities.hotel_amenities_name}</li>
                                        )
                                    })
                                }
                            </ul>
                            {/* <a href="../hotel-booking" >Book Now</a>  */}
                            {/* <button className="book-now" onClick={() => handleBook()}>Book Now</button> */}
                        </div>
                    </div>
            </Modal.Body>
        </Modal>
    )
}

