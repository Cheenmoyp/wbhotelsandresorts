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
			 <div className="inner-page-wrapper banner_page">
				<h3>Refund Policy for  WB Hotels</h3> 
            </div>
            <div className="inner-page-wrapper">
			
				<div className="container">
					<div className="row">
						<div className="col-md-12 intro">
								<ul>
									<li>If cancelled 48 hours prior to the arrival date, full refund will be processed. There will be 5% cancellation charges in case payment is done via AirPay/Credit/Debit card.</li>
									<li>If cancelled within 0-48 hours prior to Check In date, one night retention will be charged and balance will be refunded, subject to deduction of 5% cancellation charges in case payment is done via AirPay/Credit/Debit card. <br/> If cancelled within 0-48 hours prior to Check In date, one night retention will be charged and balance will be refunded, subject to deduction of 5% cancellation charges in case payment is done via AirPay/Credit/Debit card.</li>
									<li>25% retention of booking amount will be charged, if cancelled within 15-30 days from the arrival date, subject to deduction of 5% cancellation charges in case payment is done via AirPay/Credit/Debit card.</li>
									<li>50% retention of booking amount will be charged, if cancelled within 08-15 days from the arrival date, subject to deduction of 5% cancellation charges in case payment is done via AirPay/Credit/Debit card.</li>
									
									<li>100% retention of booking amount will be charged, if cancelled within 07 days from the arrival date. Cancellation Charges for Group bookings:
</li>
									
									<li>A group booking is defined as 05 rooms and above.</li>
									<li>25% retention of booking amount will be charged, if cancelled within 15-30 days from the arrival date, subject to deduction of 5% cancellation charges in case payment is done via AirPay/Credit/Debit card.</li>
								
								   <li>50% retention of booking amount will be charged, if cancelled within 08-15 days from the arrival date, subject to deduction of 5% cancellation charges in case payment is done via AirPay/Credit/Debit card.</li>
								
								  <li>100% retention of booking amount will be charged, if cancelled within 07 days from the arrival date.</li>
								  <li>Credit/debit card/ AirPay online refunds will only be made against credit/debit card bookings and usually take 15 working days.</li>
								 <li>The original receipt must be presented for processing the refund if applicable as per the company policy.</li>
								
								
								
								</ul>
								<br/>
								<p>
								Note:
Any postponement of the booking will be treated as a cancellation and will be governed by the Cancellation Policy above.
</p>
		
		
						</div>
					</div>

				</div>

			
			
			 </div>
            <Footer></Footer>
        </>
    )
}

export default Package;


