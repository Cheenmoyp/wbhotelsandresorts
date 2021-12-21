import React from 'react';
import Image from 'next/image'

export const Footer = () => {
    return (
        <>
     
        <footer className="site-footer">
     <>  <div className="footer-top">
    <div className="container">
      <div className="row">
		<div className="col-md-4">
          <div className="widget border-0">
            <h5 className="m-b30">ABOUT</h5>
            <ul className="list-2 list-line">
              <li><a href="#">WB Hotels & Resorts & resorts works</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">WB Hotels & Resorts & resorts 2021</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Founders Letter</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-5">
          <div className="widget border-0">
            <h5 className="m-b30">COMMUNITY</h5>
            <ul className="list-2 list-line">
              <li><a href="#">Diversity & Belonging</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">WB Hotels & Resorts Associates</a></li>
              <li><a href="#">Frontline Stays</a></li>
              <li><a href="#">Guest Referrals</a></li>
              <li><a href="#">Host your home</a></li>
              <li><a href="#">Host an Online Experience</a></li>
              <li><a href="#">Host an Experience</a></li>
              <li><a href="#">Responsible hosting</a></li>
              <li><a href="#">Resource Centre</a></li>
              <li><a href="#">Community Centre</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="widget border-0">
            <h5 className="m-b30">SUPPORT</h5>
            <ul className="list-2 list-line">
              <li><a href="#">Our COVID-19 Response</a></li>
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">Cancellation options</a></li>
              <li><a href="#">Neighbourhood Support</a></li>
              <li><a href="#">Trust & Safety</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
			<div className="copyright">
				<div className="left">© 2021 WB Hotels & Resorts.   </div>
				<div className="right">
					<ul>
						<li><a href="#">Privacy</a></li>
						<li><a href="#">Terms</a></li>
						<li><a href="#">Sitemap</a></li>
						<li><a href="#">Company details</a></li>
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
