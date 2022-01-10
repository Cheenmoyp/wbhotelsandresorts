import React from 'react';
import Image from 'next/image'

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
								<li> © 2021 WB Hotels & Resorts.  </li>
								<li><a href="/privacy-policy">Privacy Policy</a></li>
								<li><a href="/terms-and-condition"> Terms & Conditions</a></li>
						 
							</ul>
						</div>
						

						
				 
				 </div>
				  <div className="col-lg-6">
						<div className="right">
						
					<ul>
						<li><a href="https://www.facebook.com/westbridgehotels/"><img src="../Images/facebook.png" alt="" title=""/></a></li>
						<li><a href="#"><img src="../Images/twitter.png" alt="" title=""/></a></li>
						<li><a href="#"><img src="../Images/tripadvisor.png" alt="" title=""/></a></li>
						<li><a href="https://www.linkedin.com/company/68018352/admin/"><img src="../Images/linkedin.png" alt="" title=""/></a></li>
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
