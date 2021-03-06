import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import axios from 'axios';
import { decode as base64_decode, encode as base64_encode } from 'base-64';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "react-bootstrap/Button";
import { useRouter } from 'next/router'
import {
    IconBellRinging2,
    IconX,
    IconPlayerPlay,
    IconChevronRight,
} from "@tabler/icons";

import moment from "moment";

const PackageDetail = (response) => {
    let package_booking_hotel_id = response && response.hotel_details.hotel_data.hotel_id;
    let package_booking_api_key = response && response.hotel_details.hotel_data.api_key;
    
    const [cart, setCart] = useState({});
    const [userState, setUserState] = useState({

        firstName: "",
        lastName: "",
        emailId: "",
        countryCode: "+91",
        mobile: "",

    });


    const handleChange = (e, name) => {
        setUserState((prevState) => ({ ...prevState, [name]: e }));
    };


    useEffect(() => {

        setCart(JSON.parse(sessionStorage.getItem('package_cart')));

    }, [])

    const [{ firstNameErr, lastNameErr, emailIdErr, mobileErr }, setStateErr,] = useState("");
    const proceedForPayment = () => {
        setStateErr({});
        let textRegex = /^[A-Za-z ]*$/;
        let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (!userState.firstName || userState.firstName === "null" || !userState.lastName || userState.lastName === "null") {
            setStateErr({ firstNameErr: "Guest name is required!", lastNameErr: "Guest name is required!" });
            return false;
        }

        if (!textRegex.test(userState.firstName)) {
            setStateErr({ firstNameErr: 'Name should contain only letters!' });
            return false;
        }

        if (!textRegex.test(userState.lastName)) {
            setStateErr({ lastNameErr: 'Name should contain only letters!' });
            return false;
        }

        if (
            !userState.emailId ||
            userState.emailId === "null" ||
            !emailRegex.test(userState.emailId)
        ) {
            setStateErr({ emailIdErr: "Email id should be valid" });
            return false;
        }

        if (
            !userState.mobile ||
            userState.mobile === "null" ||
            userState.mobile.length !== 10
        ) {
            setStateErr({ mobileErr: "Mobile no should be valid" });
            return false;
        }

        let comp = window.location.origin;

        let company_url =
            comp.search("https") > -1
                ? comp.replace("https://", "")
                : comp.replace("http://", "");


        axios.post(`${process.env.NEXT_PUBLIC_HOST_BE}/user/register`, {

            company_url: company_url,
            email_id: userState.emailId,
            mobile: userState.mobile,
            first_name: userState.firstName,
            last_name: userState.lastName,
            company_name: "",
            GST_IN: "",
            address: "",
            zip_code: "",
            country: "",
            state: "",
            city: "",
            identity: "",
            identity_no: "",
            expiry_date: "",
            date_of_birth: "",
            GSTIN: "",

        })
            .then(function (response_package_booking) {


                if (response_package_booking.data && response_package_booking.data.status === 1) {


                    let new_book_data = {

                        hotel_id: package_booking_hotel_id,
                        from_date: cart.checkin_date,
                        to_date: cart.checkout_date,
                        cart: cart,
                        visitors_ip: '1.1.1.1'



                    }

                    axios.post(`${process.env.NEXT_PUBLIC_HOST_BE}/package_booking/bookings/${package_booking_api_key}`,
                        { ...new_book_data },
                        {
                            headers: {
                                Authorization: `Bearer ${response_package_booking.data.auth_token}`,
                            },
                        },
                    )
                        .then(function (response_package) {

                            if (response_package.data.status == 1) {
                                var invoice_id = btoa(response_package.data.invoice_id);
                                // let str = window.location.origin;
                                let str = "htttp://romtbooking.bookingjini.tech";
                                if (str.search('bookingjini.com') >= 0) {
                                    var url =
                                        'https://be.bookingjini.com/payment/' +
                                        invoice_id +
                                        '/' +
                                        response_package.data.invoice_secureHash;
                                } else {
                                    var url =
                                    str +
                                        '/v3/api/payment/' +
                                        invoice_id +
                                        '/' +
                                        response_package.data.invoice_secureHash;
                                }
                                window.location.assign(url);
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });

                }


            })
            .catch(function (error) {
                console.log(error);
            });

    };


    return (
        <>
            <Header></Header>
            <div className="inner-page-wrapper">
                <div className="package-payment">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="package-photos">
                                    <div className="xzoom-container">
                                        {/* <img className="xzoom5" id="xzoom-magnific" src="/Images/resorts.jpg" /> */}
                                        <div className="xzoom-thumbs">
                                            <a href="/Images/resorts2.jpg"><img className="xzoom-gallery5" width="80" src="/Images/resorts.jpg" xpreview="/Images/resorts.jpg" /></a>
                                            <a href="/Images/resorts2.jpg"><img className="xzoom-gallery5" width="80" src="/Images/resorts2.jpg" /></a>
                                            <a href="/Images/hotels/min5.jpg"><img className="xzoom-gallery5" width="80" src="/Images/hotels/min5.jpg" /></a>
                                            <a href="/Images/hotels/min6.jpg"><img className="xzoom-gallery5" width="80" src="/Images/hotels/min6.jpg" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="booking-left">
                                    <div className="booking-page-box row">
                                        <div className="col-sm-12">
                                            <div className="right">
                                                <h5 style={{ color: "#5ea771", "font-size": "14px" }}>Package:Yercud, Munar and Mysur</h5>
                                                <h4>{response.hotel_details.hotel_data.hotel_name}</h4>
                                                <h5><i className="fa fa-map-marker" aria-hidden="true"></i> {response.hotel_details.hotel_data.address}</h5>
                                                <h6><span>{response.hotel_details.hotel_data.star}/5</span></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="booking-page-box-2">
                                    {cart && <div className="row">
                                        <div className="col-md-4">
                                            <p>Check In</p>
                                            <h5>{cart.checkin_date}</h5>
                                            {/* <p>12:00PM</p> */}
                                        </div>
                                        <div className="col-md-4">
                                            <p>Check Out</p>
                                            <h5>{cart.checkout_date}</h5>
                                            {/* <p>12:00PM</p> */}
                                        </div>
                                        {/* <div className="col-md-4">
                                <p>Guest</p>
                                <h5>2Guests | 1 Room</h5>
                                <p>1Night</p>
                            </div> */}
                                    </div>}
                                </div>
                                <div className="booking-page-box-3">
                                    <div className="booking-page-box-3-heading">
                                        <h4>1Room for {cart.packages && cart.packages.reduce((init, pack) => {
                                            return init + pack.selected_adult;
                                        }, 0)} Adults</h4>
                                        {/* <h6>Great Choice! You are saving <i className="fa fa-inr" aria-hidden="true"></i> 383 with your booking</h6> */}
                                    </div>
                                    {/* <div className="booking-page-box-3-content">
                            <ul>
                                <li>
                                <h5>1 x Deluxe Non AC Room</h5>
                                </li>
                                <li><img src="/Images/hotels/icons/adult.png" title="" alt=""/><span>2 Adults</span><br/>
                                <span>Room only</span> | <span><a href="#">Free Cancellation</a></span></li>
                                <li><a href="#">View Booking & Cancellation Policy</a></li>
                            </ul>
                            </div> */}
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="booking-page-right package-bookingpayment">
                                    {/* style={{font-size: "12px",  float: "right"}} */}
                                    <h4>Price Summary
                                        {/* <a href="#" style={{float: "right",font: "12px"}}>View Full Breakup</a> */}
                                    </h4>
                                    <ul className="price-breakup">
                                        {cart && <li>
                                            {/* <h6><strong>Room Charges</strong> 1Room * 1Night</h6> <span className="price">1099</span> */}
                                            <h6><strong>Total Price</strong></h6> <span className="price">{cart.display_price}</span>

                                            {/* Total Discount <span className="discount-price">30%Off</span><span className="price" 
                                style={{top:"40px", color: "#13cf74;"}}>1099</span> */}

                                        </li>}
                                        {cart && <li>
                                            {/* <h6>Price after Discount </h6>
                                <span className="price">769</span>
                                <br/> */}
                                            <h6>Taxes & Fees </h6>
                                            <span className="price" style={{ top: "56px;" }}>{cart.tax && cart.tax[0].gst_price}</span>
                                        </li>}

                                        {cart && <li>
                                            <h6>Payable Now</h6>
                                            <span className="price">{cart.paid_amount}</span></li>}
                                    </ul>

                                    <div className="booking-buttons">
                                        <button onClick={proceedForPayment}>Proceed for Payment Option</button>
                                        {/* <a href="#">Login now to book the room</a>  */}
                                    </div>

                                </div>
                                {/* <div className="booking-supperoffers login-toget-lower-price">
                            <a href="signIn.php"><i className="fa fa-gift" aria-hidden="true"></i> Login now & get a lower price</a>
                        </div> */}
                                {/* <div className="booking-supperoffers">
                            <ul className="price-breakup">
                            <li>
                                <h6>ROMT Super Offer</h6>
                                <strong>Congratulation You have saved 110 with ROMT Super Offer</strong> <span className="price">1.049</span></li>
                            </ul>
                        </div>
                        <div className="booking-promocode">
                            <input type="text" placeholder="Got A Promocode?"/>
                            <button>Apply</button>
                        </div> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7 offset-md-3">
                                <div className="guest-detail">
                                    <h4>Guest Details</h4>
                                    <form className="row">
                                        <div className="col-sm-2">
                                            <label>Title</label>
                                            <select>
                                                <option>Mr</option>
                                                <option>Mrs</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-5">
                                            <label>First Name</label>
                                            <input type="text" placeholder="" value={userState.firstName || ""} onChange={(e) => handleChange(e.target.value, "firstName")} />
                                            {firstNameErr && (
                                                <p className="red-text text-darken-1">
                                                    {firstNameErr}
                                                </p>
                                            )}
                                        </div>
                                        <div className="col-sm-5">
                                            <label>Last Name</label>
                                            <input type="text" placeholder="" value={userState.lastName || ""} onChange={(e) => handleChange(e.target.value, "lastName")} />
                                            {lastNameErr && (
                                                <p className="red-text text-darken-1">
                                                    {lastNameErr}
                                                </p>
                                            )}
                                        </div>
                                        {/* <div className="col-md-12"> <a href="">Add Guest</a> </div> */}
                                        <div className="col-sm-12">
                                            <label>Email Address(Your booking voucher will be sent to this emal address)</label>
                                            <input type="text" placeholder="" value={userState.emailId || ""} onChange={(e) => handleChange(e.target.value, "emailId")} />
                                            {emailIdErr && (
                                                <p className="red-text text-darken-1">
                                                    {emailIdErr}
                                                </p>
                                            )}
                                        </div>
                                        <div className="col-sm-12">
                                            <label>Mobile Number</label>
                                            <input type="text" placeholder="" value={userState.mobile || ""} onChange={(e) => handleChange(e.target.value, "mobile")} />
                                            {mobileErr && (
                                                <p className="red-text text-darken-1">
                                                    {mobileErr}
                                                </p>
                                            )}
                                        </div>
                                        {/* <div className="col-sm-12">
                                    <input type="checkbox"/>
                                    <label>Enter GST Details (Optional)</label>
                                </div> */}
                                    </form>
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

export async function getServerSideProps(context) {
    let url_param = base64_decode(context.params.url).split("/");
    // console.log(url_param);
    // Fetch data from external API
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_BE}/hotel-details?hotel_id=${url_param[0]}`
    );

    const response = await res.json()

    return { props: { hotel_details: response } };
}

export default PackageDetail;
