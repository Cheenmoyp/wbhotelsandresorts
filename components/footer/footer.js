import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export const Footer = () => {
    return (
        <> 
     
        <footer className="site-footer">
     <>  

  <div className="footer-bottom copyright" >
    <div className="container">
      <div className="row">
      
				 <div className="col-lg-6">
						<div className="left"> 	
							<ul>
								<li> © 2022 WB Hotels & Resorts.   </li>
								<li><Link href="/privacy-policy">Privacy Policy</Link></li>
								<li><Link href="/terms-and-condition"> Terms & Conditions</Link></li> 
						 
							</ul>
						</div>
						

						
				 
				 </div>
				  <div className="col-lg-6">
						<div className="right">
						
					<ul>
						<li><Link href="https://www.facebook.com/westbridgehotels/"><img src="../Images/facebook.png" alt="" title=""/></Link></li>
						<li><Link href="#"><img src="../Images/twitter.png" alt="" title=""/></Link></li>
						<li><Link href="#"><img src="../Images/tripadvisor.png" alt="" title=""/></Link></li>
						<li><Link href="https://www.linkedin.com/company/68018352/admin/"><img src="../Images/linkedin.png" alt="" title=""/></Link></li>
					</ul>
				</div>
				  
				  </div>
			
		
		
			
			
				
			</div>
		 
  
    </div>
  </div> </>
        </footer>

        </>
    )
}
