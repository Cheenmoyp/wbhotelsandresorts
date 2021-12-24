import React from 'react';
import Image from 'next/image'

export const Footer = () => {
    return (
        <>
     
        <footer className="site-footer">
     <>  

  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
			<div className="copyright">
				<div className="left">© 2021 WB Hotels & Resorts.   </div>
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
    </div>
  </div> </>
        </footer>

        </>
    )
}
