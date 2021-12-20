const romtCss = () => {
    return (
      <style jsx>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
        /*font-family: 'Patrick Hand', cursive;*/
        html{ scroll-behavior: smooth;}
        body{ padding: 0; margin:0; font-family: 'Poppins', sans-serif; font-size:15px;}
        *{ list-style: none; outline:none; stroke:none; }
        ul{ padding: 0; margin:0;  }
        .img-full-width{ width: 100%; }
        h2 {
            font-size: 30px;
        }
        .no-padding{padding:0!important;}

        /*Header*/
        header {
            width: 100%;
            float: left;
            margin: 0;
            background: #ffffff;
            padding: 0;
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 10;
        }
        .logo {
            display: inline-block;
            width: 144px;
            max-width: 100%;
            padding: 10px 0;
        }

        .logo img{ max-width: 100%; }
        .nav-con {
            display: inline-block;
        }
        .navbar-expand-lg .navbar-nav>li.nav-item {
            padding: 28px 10px;
        }
        /*Main Menu*/
        /* adds some margin below the link sets  */
        .nav-con {
            display: inline-block;
            width: 100%;
        }

        .nav-con .navbar-dark .navbar-nav .nav-link {
            color: rgb(0 0 0);
            text-transform: uppercase;
            font-size: 15px;
            font-weight: 400;
        }
        .nav-con .navbar-dark .navbar-nav .nav-link:hover {
            color:#65280a;
        }
        .nav-con .dropdown-menu ul li a {
            text-transform: none!important;
        }
        /*Hide drop down arrow*/
        .nav-con .dropdown-toggle::after{ display:none;}
        /**/
        .nav-con .navbar .dropdown-menu div[class*="col"] {
            margin-bottom: 0;
        }

        /* breakpoint and up - mega dropdown styles */
        @media screen and (min-width: 992px) {
        
        /* remove the padding from the navbar so the dropdown hover state is not broken */
        .nav-con .navbar {
        padding-top:0px;
        padding-bottom:0px;
        }
        
        /* remove the padding from the nav-item and add some margin to give some breathing room on hovers */
        .nav-con .navbar .nav-item {
        padding:.5rem .5rem;
        margin:0 .25rem;
        }
        
        /* makes the dropdown full width  */
        .nav-con .navbar .dropdown {position:static;}
        
        .nav-con .navbar .dropdown-menu {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            top: 98%;
            left: 0;
            width: 100%;
            transform: translateY(-2em);
            z-index: -1;
            transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
            display: inline-block;
            border-radius: 0;
        }
        /* shows the dropdown menu on hover */
        .nav-con .navbar .dropdown:hover .dropdown-menu, .navbar .dropdown .dropdown-menu:hover {
            visibility: visible;
            opacity: 1;
            z-index: 1;
            transform: translateY(0%);
            transition-delay: 0s, 0s, 0.3s;
        }
        .nav-con .navbar .dropdown-menu {
            border: none;
            background-color: #fffffff2;
        }
        }
        /*M I L A N*/
        .dropdown-menu ul li {
            padding: 0!important;
            margin: 0!important;
        }
        .dropdown-menu ul li a {
            font-size: 13px!important;
            display: inline-block;
            padding: 4px 0!important;
        }
        .nav-con .navbar .nav-item a {
            padding: 0;
            display: inline-block;
            width: 100%;
        }
        span.menu-heading {
            color: #568800;
            margin-bottom: 8px;
            padding-bottom: 6px;
            display: inline-block;
            position: relative;
            font-weight: 500;
        }
        span.menu-heading:before {
            content: '';
            width: 70px;
            background: #86553e;
            height: 2px;
            position: absolute;
            bottom: 0;
        }
        .nav-con .nav-con .dropdown-menu li.nav-item {
            padding: 5px 0 0;
        }
        .nav-con .nav-con .dropdown-menu li.nav-item a{padding: 0; }
        /*Lefte filter*/
        .filter-box {
            width: 100%;
            float: left;
            padding: 0;
            margin: 0;
            box-shadow: 0 0 9px #d1d1d1;
            position: relative;
            border-radius: 5px;
        }
        .nav-side-menu {
            overflow: auto;
            font-size: 12px;
            font-weight: 200;
            position: relative;
            width: 100%;
            height: auto;
            color: #000;
            padding: 15px;
        }
        .nav-side-menu .brand {
            line-height: 50px;
            display: block;
            text-align: left;
            font-size: 18px;
            color: #000;
            font-weight: 500;
        }
        .nav-side-menu .toggle-btn {
        display: none;
        }
        .nav-side-menu ul,
        .nav-side-menu ul, .nav-side-menu ul, .nav-side-menu ul, .nav-side-menu ul, .nav-side-menu li {
            list-style: none;
            padding: 0px;
            margin: 0px;
            line-height: 23px;
            color: #5b5b5b;
            font-weight: normal;
            font-size: 13px;
            position: relative;
            padding-right: 0;
            width: 100%;
            float: left;
        }
        .menu-list h4 {
            font-size: 16px;
            color: #000;
        }
        .nav-side-menu ul :not(collapsed) .arrow:before,
        .nav-side-menu li :not(collapsed) .arrow:before {
        font-family: FontAwesome;
        content: "\f078";
        display: inline-block;
        padding-left: 10px;
        padding-right: 10px;
        vertical-align: middle;
        float: right;
        }
        .nav-side-menu ul .active,
        .nav-side-menu li .active {
        border-left: 3px solid #d19b3d;
        background-color: #4f5b69;
        }


        .nav-side-menu li a {
        text-decoration: none;
        color: #000;
        }
        .nav-side-menu li a i {
        padding-left: 10px;
        width: 20px;
        padding-right: 20px;
        }
        .nav-side-menu li input[type="checkbox"] {
            margin-right: 10px;
            margin-top: 2px;
        }
        .nav-side-menu li  span {
            position: absolute;
            right: 0;
            color: #bfbaba;
            font-weight: normal;
        }
        /*Milan Left-Menu*/
        .filter-list-con {
            width: 100%;
            float: left;
            border-bottom: 1px solid #ccc;
            padding-bottom: 12px;
            margin-bottom: 15px;
        }
        /*Milan End*/
        @media (max-width: 767px) {
        .nav-side-menu {
            position: relative;
            width: 100%;
            margin-bottom: 10px;
        }
        .nav-side-menu .toggle-btn {
            display: block;
            cursor: pointer;
            position: absolute;
            right: 10px;
            top: 10px;
            z-index: 10 !important;
            padding: 3px;
            background-color: #ffffff;
            color: #000;
            width: 40px;
            text-align: center;
        }
        .brand {
            text-align: left !important;
            font-size: 22px;
            padding-left: 20px;
            line-height: 50px !important;
        }
        }
        @media (min-width: 767px) {
        .nav-side-menu .menu-list .menu-content {
            display: block;
        }
        }

        /*Left Filter End*/
        /*Main Menu End*/

        .top-btn-group {
            display: inline-block;
            float: right;
            padding-top: 19px;
        }
        .sign-in-btn {
            background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
            border: 0 none;
            display: inline-block;
            font-weight: 400;
            padding: 3px 5px;
            color: #171717;

        }
        .sign-in-btn:hover {
            color: #f16b23;
        }
        .join-us {
            color: #fff;
            padding: 8px 18px;
            display: inline-block;
            font-size: 14px;
            cursor: pointer;
            outline: none;
            border-width: 0;
            border-style: solid;
            border-color: transparent;
            line-height: 1.42857;
            border-radius: 57px!important;
            font-weight: 400;
            text-align: center;
            background: #f16b23;
            border: 1px solid #f16b23;
            margin-right: 10px;
            text-decoration: none;
        }
        .join-us:hover {
            background: none;
            color: #f16b23;
            text-decoration: none;
            
        }
        /*Home Page slider*/
        .slider-con {
            position: relative;
            width: 100%;
            float: left;
        }
        .slider-con:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #0000007a;
            z-index: 1;
        }
        .carousel-control-next, .carousel-control-prev {
            z-index: 10;
        }
        .search-con {
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            z-index: 1;
            text-align: center;
            padding-top: 0;
            width: 100%;
            height: 314px;
            transition: all .3s ease;
        }
        .search-con.shrink {
            background: #fff;
            position: fixed!important;
            z-index: 999;
            margin: 0 auto;
            border: none;
            padding: 0;
            top: 0!important;
            left: 0;
            right: 0;
            width: 100%;
            -webkit-box-shadow: 0 0 5px 0 rgb(0 0 0 / 20%);
            box-shadow: 0 0 5px 0 rgb(0 0 0 / 20%);
            -webkit-animation-duration: .5s;
            animation-duration: .5s;
            -webkit-animation-name: sticky-animation;
            animation-name: sticky-animation;
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            height: 71px;
            padding-top: 5px!important;
        }
        .search-con.shrink h1, .search-con.shrink h3, .search-con.shrink .search-categories {
            display: none!important;
        }
        .search-con h1 {
            font-family: 'roboto', sans-serif;
            font-weight: 700;
            font-size: 46px;
            line-height: 53px;
            margin-bottom: 25px;
            color: #fff;
        }

        .search-con h3 {
            color: rgb(255 255 255);
            font-size: 20px;
            font-weight: 500;
            margin: 0 0 25px;
        }
        .search-con form {
            width: 100%;
            max-width: 945px;
            border-radius: 30px;
            overflow: hidden;
            position: relative;
            background: #fff;
            padding-right: 150px;
            display: inline-block;
            border: 1px solid #f3f3f3cc;
        }
        .search-con form button, .search-con form input, .search-con form optgroup, .search-con form select, .search-con form textarea {
            padding: 15PX;
            border: none;
            font-size: 13px;
        }
        .search-con form input[placeholder="Kids"], .search-con form input[placeholder="Adult"] {
            max-width: 100px;
        }
        .search-con form  .datepicker {
            /* background: url(../Images/calendar-ic.png) no-repeat; */
            background-size: 20px;
            border: none!important;
            padding-right: 33px!important;
            background-position: 95% center;

            border-radius: 0!important;
        }
        .search-con form button:focus, .search-con form input:focus, .search-con form optgroup:focus, .search-con form select:focus, .search-con form textarea:focus {
            border: none;
            outline: none;
        }
        .search-con input[placeholder="What are you looking for?"] {
            max-width: 200px;
            width: 100%;
        }
        .search-con form .form-control {
            padding: 0;
            display: inline-block;
            border: none;
            width: auto;
            border-right: 1px solid #f3f3f3;
            border-radius: 0;
            padding-right: 10px;
        }
        .search-con form button.site-button {
            border-radius: 0 50px 50px 0;
            padding: 15px 40px;
            font-weight: 400;
            font-size: 16px;
            background-color: #f16b23;
            stroke: none;
            outline: none;
            border: none;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: absolute;
            top: -1px;
            right: -1px;
        }
        input#datepicker {
            max-width: 154px;
        }
        .search-categories {
        width: 100%;
        float: left;
        text-align:center;
        }
        .search-categories ul {
            display: inline-block;
        }
        .search-categories ul li {
            display: inline-block;
            padding: 0 10px;
            border-right: 1px solid #ffffff78;
            margin-top: 10px;
        }
        .search-categories ul li:last-child{ border:none; }
        .search-categories ul li a {
            color: #fff;
        }
        .search-categories ul li {
            display: inline-block;
            padding: 0 20px;
            border-right: 1px solid #ffffff78;
            margin-top: 25px;
        }
        .search-categories ul li a p {
            margin-bottom: 0;
            padding: 0;
        }
        .search-categories ul li a p.det {
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 500;
        }
        .search-categories ul li a i {
            font-size: 29px!important;
            margin-bottom: 13px;
            margin-top: 19px;
        }
        .book-direct-section {
            width: 100%;
            float: left;
            text-align: center;
            padding: 30px 0;
        }
        .book-direct-section {
            width: 100%;
            text-align: center;
            padding: 10PX 0;
        }
        .book-direct-section ul {
            display: inline-block;
            text-align: left;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .book-direct-section ul li {
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            padding: 0 10px;
            margin: 30px 0;
        }

        .book-direct-section ul li a.b-direct-box {
            display: inline-block;
        }
        .book-direct-section ul li a.b-direct-box h4 {
            font-size: 14px;
            color: #000;
            margin: 10px 0;
        }
        .book-direct-section ul li .icon img {
            max-width: 56px;
            display: inline-block;
        }
        .custom-heading {
            border-right: 1px solid #cccc;
            padding: 30px 17px 30px 0;
        }
        .custom-heading h2 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
            color: #000;
            text-transform: uppercase;
            text-align: right;
        }
        .commitment-sec {
            background: #899e52;
            border: 1px solid #899e52;
            color: #fff;
            width: 100%;
            text-align: center;
            float: left;
        }
        .commitment-sec ul{ list-style:none; padding:0; margin:0; text-align:left; display:inline-block;}
        .commitment-sec ul li {
            display: inline-block;
            max-width: 245px;
            margin: 0 10px;
            padding: 15px;
            vertical-align: middle;
            position: relative;
        }
        .commitment-content {
            padding: 0 0 0 37px;
            width: 100%;
            display: inline-block;
        }
        .commitmenticons {
            display: inline-block;
            position: absolute;
            max-width: 60px;
            top: 19px;
            left: 0;
        }
        .commitmenticons img {
            max-width: 100%;
        }
        a.l-moere {
            display: inline-block;
            background: #fff;
            padding: 4px 14px;
            border-radius: 30px;
            box-shadow: 1px 1px 7px #0000009e;
            color: #65280a;
        }


        /*Home page slider end*/
        .packages-home {
            width: 100%;
            float: left;
            text-align: center;
            padding: 60px 0 45px;
        }
        .heading1 {
            color: #707070;
            font-weight: 600;
            font-size: 32px;
            margin-bottom: 30px;
            text-align: center;
        }

        .box1 {
            width: 100%;
            position: relative;
            margin: 0 0 15px;
            background: #000;
        }

        .box1 figure {
            padding: 0;
            margin: 0;
            overflow: hidden;
            width: 100%;
        }
        .box1 img {
            width: 100%;
            transition: transform 5s;
            opacity: 0.5;
        }
        .box1:hover img {
            transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
        }
        .box1 .content {
            position: absolute;
            bottom: 0;
            text-align: left;
            padding: 19px;
            z-index: 10;
        }
        .box1 .content h3{line-height: 17px;}
        .box1 .content h3 a {
            color: #fff;
            font-size: 18px;
            line-height: 17px;
            text-decoration: none;
        }
        .btn-bx {
            background: #e5e5e5;
            padding: 50px 0;
        }
        .btn-bx a {
            color: #fff;
            display: inline-block;
            background: #ff8a34;
            padding: 10px 20px;
            border-radius: 30px;
            text-decoration: none;
        }
        .our-hotel {
            width: 100%;
            float: left;
            text-align: center;
            padding: 0 0 45px;
        }
        .box-2 {
            width: 100%;
            float: left;
            padding: 0;
            margin: 0 0 15px;
            position: relative;
        }

        .box-2 figure {
            margin: 0;
            width: 100%;
            overflow: hidden;
            background: #000;
        }
        .box-2 figure img{ width: 100%; transition:5s;
            opacity: 0.5;}
        .box-2:hover figure img {
                transform: scale(1.5);
            }   
        .box-2 .content {
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
            padding: 15px;
        }
        .box-2 .content h3 {
            text-align: left;
            line-height: 17px;
            margin-bottom: 10px;
        }
        .box-2 .content h3 a {
            color: #fff;
            font-size: 18px;
            text-decoration: none;
        }
        .hotel-footer .price {
            color: #fff;
            font-weight: 500;
        }
        .rating img {
            width: 95px;
            float: left;
            max-width: 100%;
        }
        .box-2.btn-bx {
            padding: 56px 0;
        }
        .destination-section {
            width: 100%;
            float: left;
            padding: 0 0 45px;
        }
        .destination-section .post-slide {
            padding: 0 10px;
        }
        .destination-section .owl-carousel .owl-dots.disabled, .destination-section .owl-carousel .owl-nav.disabled {
            display: inline-block;
        }
        .destination-section .owl-carousel .owl-nav button.owl-next, .destination-section .owl-carousel .owl-nav button.owl-prev {
            width: 50px;
            height: 50px;
            position: absolute;
            font-size: 46px;
            top: 0;
            bottom: 0;
            margin: auto;
            left: 20px;
            padding: 0!important;
            line-height: initial;
            background: #ffffff9e;
            border-radius: 50%;
            color: #000;
        }
        .destination-section .owl-carousel .owl-nav button .fa {
            position: absolute;
            top: 2px;
            left: 0;
            right: 1px;
            bottom: 0;
            margin: auto;
        }
        .destination-section .owl-carousel .owl-nav button.owl-next:focus, .destination-section .owl-carousel .owl-nav button.owl-prev:focus{border: none;
            outline: none;}
        .destination-section .owl-carousel .owl-nav button.owl-next{ left: unset; right: 20px; }   

        .box-3 {
            width: 100%;
            float: left;
            position: relative;
            background: #000;
        }
        .box-3 figure{ width: 100%; overflow: hidden; padding: 0; margin:0;}
        .box-3 img {width: 100%;
            transition:5s;
            opacity: 0.5;}
        .box-3:hover figure img {
                transform: scale(1.5);
            }   
        .box-3 .content {
            position: absolute;
            width: 100%;
            padding: 15px 15px 23px;
            bottom: 0;
            left: 0;
        }
        .box-3 .content a {
            color: #fff;
            font-size: 18px;
            text-decoration: none;
        }
        .testimonial-section {
            width: 100%;
            float: left;
            padding: 60px 0 0;
            background: #efefef;
        }

        .testimonial-section .post-slide {
            padding: 10px;
        }
        .testimonial-section .owl-carousel .owl-dots.disabled, .testimonial-section .owl-carousel .owl-nav.disabled {
            display: inline-block;
        }
        .testimonial-section .owl-carousel .owl-nav button.owl-next, .testimonial-section .owl-carousel .owl-nav button.owl-prev {
            width: 50px;
            height: 68px;
            position: absolute;
            font-size: 36px;
            top: 0;
            bottom: 0;
            margin: auto;
            left: -35px;
            padding: 0!important;
            line-height: unset;
            opacity: 0.5;
        }
        .testimonial-section .owl-carousel .owl-nav button.owl-next:focus, .testimonial-section .owl-carousel .owl-nav button.owl-prev:focus{border: none;
            outline: none;}
        .testimonial-section .owl-carousel .owl-nav button.owl-next{ left:unset; right:-35px;}
        .testimonial-box {
            width: 100%;
            text-align: center;
            background: #fff;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 0 7px #cbcbcb;
            margin: 10px 0;
        }
        .testimonial-box figure {
            width: 150px;
            height: 150px;
            overflow: hidden;
            border-radius: 50%;
            display: inline-block;
            margin: 10px 0;
            padding: 0;
        }
        .testimonial-box  p {
            font-size: 14px;
        }
        .testimonial-box h4 {
            font-size: 18px;
            padding: 0;
            margin: 0 0 15px;
        }
        .testimonial-box .content {
            width: 100%;
            height: 86px;
            overflow: hidden;
            margin-bottom: 12px;
        }
        .testimonial-box h5{
            font-size: 16px;}
        /*Inner page start*/
        .inner-page-wrapper {
            width: 100%;
            float: left;
            padding: 0;
            margin: 0;
            position: relative;
            margin-top: 0;
        }
        .inner-page-search-con {
            width: 100%;
            float: left;
        }
        .inner-page-wrapper .search-con {
            position: relative;
            top: unset;
            bottom: unset;
            margin: auto;
            z-index: 1;
            text-align: center;
            padding-top: 0;
            width: 100%;
            height: auto;
        }
        .inner-page-search-con .search-con form {
            border: 1px solid #e9e9e9;
        }
        .inner-page-banner {
            width: 100%;
            float: left;
            text-align: center;
            padding: 95px 0;
            background: url('../Images1/inne-page-banner.jpg') no-repeat;
            color: #fff;
            position: relative;
            background-size: cover;
        }
        .inner-page-banner:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: #0000008c;
        }
        .hotel-list {
            width: 100%;
            float: left;
            padding: 60px 0;
        }
        .hotel-box {
            width: 100%;
            float: left;
            margin-bottom: 20px;
            border-bottom: 1px solid #efefef;
        }
        .hotel-box figure {
            width: 100%;
            float: left;
            padding: 0;
            margin: 0;
            overflow: hidden;
        }
        .hotel-box figure img{
            width: 100%;
            transition:5s;
        }
        .hotel-box:hover figure img{transform: scale(1.5);}	
        .hotel-box .content {
            width: 100%;
            float: left;
            padding: 15px;
        }
        .hotel-box .content .price h6 {
            font-size: 14px;
            color: #7b8283;
        }
        .hotel-box h3 {
            width: 100%;
            float: left;
            font-size: 16px;
            margin: 0 0  10px;
            font-weight: 600;
        }
        .hotel-box .content .price h6 span {
            display: inline-block;
            width: 100%;
            text-decoration: line-through;
            color: #b9b9b9;
            margin-bottom: 5px;
        }
        .hotel-box .rating ul li {
            display: inline-block;
            color: #959595;
            font-size: 12px;
            vertical-align: middle;
        }
        .hotel-box .rating ul li img {
            width: 78px;
            float: left;
            max-width: 100%;
            margin-right: 10px;
        }
        .hotel-box .h-booking {
            width: 100%;
            position: relative;
            float: left;
        }
        .hotel-box .booking-btn a {
            display: inline-block;
            background: #ff8a34;
            color: #fff;
            padding: 4px 17px;
            border-radius: 10px;
            position: absolute;
            top: 19px;
            right: 0;
            font-size: 12px;
        }
        .hotel-box .price h6 span.cut-price {
            width: 100%;
            display: inline-block;
        }
        .hotel-box .price {
            width: 100%;
            float: left;
            padding: 10px 0;
            padding-right: 95px;
        }
        /*Hotel Box-2*/
        .hotel-box2 {
            width: 100%;
            float: left;
            margin: 0 0 30px;
            border: 1px solid #ececec;
            border-radius: 20px;
            overflow: hidden;
            background: #fff;
        }
        .hotel-box2 figure {
            width: 100%;
            float: left;
            overflow: hidden;
            margin: 0;
            border-radius: 20px;
        }
        .hotel-box2 figure img {
            width: 100%;
            transition:5s;
        }
        .hotel-box2:hover figure img {
        transform: scale(1.5);}
        .hotel-box2 .rating img {
            width: 79px;
            float: left;
            max-width: 100%;
            margin-right: 10px;
        }
        .rating ul li {
            font-size: 12px;
        }
        .rating ul li h3 {
            font-size: 18px;
            color: #0071c2;
            margin: 5px 0;
        }
        .distance p span img {
            width: 19px;
            margin-right: 5px;
        }
        .distance p { font-size: 12px;  }
        .hotel-box2-content .content {
            height: 87px;
            overflow: hidden;
            font-size: 14px;
        }
        .hotel-box2-content .amenities {
            width: 100%;
            float: left;
            padding: 30px 0 15px;
        }
        .hotel-box2-content h3 a {
            font-size: 18px;
            color: #0071c2;
            text-decoration: none;
            font-weight: 600;
        }
        .hotel-box2-content .rating {
            margin-top: 10px;
        }
        .hotel-box2-content .amenities ul li {
            display: inline-block;
            text-align: center;
            font-size: 12px;
        }
        .hotel-box2-content .amenities ul li span {
            display: inline-block;
            width: 100%;
            margin-bottom: 8px;
        }
        .hotel-box2-content .amenities ul li span img {
            width: 26px;
        }
        .hotel-box2-footer {
            width: 100%;
            float: left;
        }
        .hotel-box2-footer ul li {
            font-size: 14px;
            color: #04630b;
            margin-bottom: 6px;
        }
        .hotel-box2-footer ul li:nth-child(1) {
            font-size: 14px;
            color: #cd1414;
            font-weight: 600;
        }
        .hotel-box2-footer ul li img{ width: 20px;  }
        .hotel-box2-footer h3 {
            font-size: 20px;
            margin: 0 0 6px;
        }
        .hotel-box2 .col-md-4 {
            padding-left: 0;
        }
        .col-md-3.hotel-box2-right {
            padding: 35px 0;
            text-align: center;
        }
        ul.rating li:first-child {
            color: #0071c2;
            margin-bottom: 10px;
        }
        ul.rating li:first-child span {
            background: #98be3b;
            color: #fff;
            padding: 3px 16px;
            position: relative;
            border-radius: 5px;
            margin-right: 5px;
        }
        ul.rating li:first-child span:before {
            content: '';
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 10px solid #98be3b;
            position: absolute;
            left: 0px;
            bottom: -4px;
        }
        ul.rating li:nth-child(2) {
            font-size: 23px;
            font-weight: 600;
        }
        ul.rating li:nth-child(2) span.cut-price {
            color: #b7b6b6;
            text-decoration: line-through;
            margin-right: 15px;
        }
        .book-now-btn {
            color: #fff;
            background: #ff8a34;
            border: 1px solid #ff8a34;
            position: absolute;
            bottom: 30px;
            left: 0;
            right: 0;
            text-align: center;
            padding: 12px;
            width: 147px;
            margin: auto;
            border-radius: 10px;
            text-decoration: none;
        }
        .book-now-btn:hover{ color:#ff8a34; background: none; text-decoration: none;}
        .col-md-3.hotel-box2-right {
            padding: 35px 0;
            text-align: center;
        }
        .col-md-3.hotel-box2-right:before {
            content: '';
            width: 1px;
            background: #ebebeb;
            height: 88%;
            top: 6%;
            position: absolute;
            left: -1px;
        }
        .hotel-box2 .col-md-4 {
            padding-left: 0;
        }
        /*Hotel Box-2 End*/
        .pegination a {
            display: inline-block;
            width: 40px;
            height: 40px;
            background: #ffffff;
            color: #000;
            border: 1px solid #f48124;
            border-radius: 50%;
            padding-top: 8px;
        }
        .pegination a:first-child, .pegination a:last-child, .pegination a:hover{
            background: #f48124;
            color: #fff;
            border: 1px solid #f48124;
            text-decoration:none;
        
        }
        .destination-page-banner {
            width: 100%;
            float: left;
            padding: 0 0 60px;
            margin: 0;
        }
        .destination-page-banner img{ width:100%;}
        .d-page-sec1 {
            width: 100%;
            float: left;
            padding: 30px 0;
            text-align: center;
        }
        .d-page-sec1 #more {display: none;}
        .d-page-sec1 h2 {
            font-size: 27px;
            font-weight: normal;
            color:#555555;
        }
        .d-page-sec1 h3 {
            font-size: 20px;
            padding: 0;
            margin: 0 0 15px;
            color: #555555;
        }
        button.rmore-btn-1 {
            border: none;
            background: none;
            position: relative;
            padding-bottom: 10px;
        }
        button.rmore-btn-1:focus{ outline: none; stroke: none;  }
        button.rmore-btn-1:before {
            content: "\f0dd";
            font: normal normal normal 14px/1 FontAwesome;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
        }
        .offer-page-banner {
            width: 100%;
            float: left;
            padding: 0;
            margin: 0;
            position:relative;
        }
        .offer-page-banner img{ width:100%; }
        .offer-baner-heading {
            position: absolute;
            top: 0;
            width: 100%;
            left: 0;
            color: #fff;
            text-align: center;
            height: 88px;
            bottom: 0;
            margin: auto;
        }
        .offer-baner-heading h5 {
            font-weight: 200;
        }
        .offer-details {
            padding: 30px 0;
            font-size: 18px;
        }
        .offer-search-sec {
            width: 100%;
            float: left;
            padding: 0 0 60px;
            margin: 0;
        }
        .offer-search-sec .container {
            max-width: 800px;
        }
        .offer-search-sec .container form {
            width: 100%;
            float: left;
            position: relative;
            padding-right: 120px;
        }
        .offer-search-sec h2 {
            font-size: 26px;
            text-align: right;
            margin: 8px 0 0;
        }
        .offer-search-sec .container form select {
            width: 100%;
            background: #f6f6f6;
            border: 1px solid #f1f1f1;
            padding: 10px;
            border-radius: 30px;
        }
        .offer-search-sec .container form input[type="submit"] {
            position: absolute;
            top: 0;
            right: 0;
            border-radius: 30px;
            padding: 10px 26px;
            border: 1px solid #da821b;
            background: #da821b;
            color: #fff;
        }
        .offers-box-sec {
            width: 100%;
            float: left;
            padding: 0 0 30px;
            margin: 0;
        }
        .offers-box {
            width: 100%;
            float: left;
            padding: 15px;
            background: #fff;
            box-shadow: 0 0 7px;
            border-radius: 5px;
            margin-bottom: 30px;
        }
        .offers-box figure {
            width: 100%;
            float: left;
            padding: 0;
            margin: 0;
            border-radius: 5px;
            overflow: hidden;
        }
        .offers-box figure img{width:100%;}
        .offers-box h3 {
            text-transform: uppercase;
            font-size: 24px;
            font-weight: 600;
            color: #89973e;
            margin: 0;
        }
        .offers-box h5 {
            font-size: 15px;
            margin: 5px 0;
        }
        ul.list-1 {
            list-style: none;
        }
        ul.list-1 li {
            position: relative;
            font-size: 14px;
            margin-bottom: 5px;
            padding-left: 16px;
        }
        ul.list-1 li:before {
            content: '';
            background: #89973e;
            width: 8px;
            height: 8px;
            position: absolute;
            top: 6px;
            left: 0;
            border-radius: 50px;
        }
        a.btn5 {
            background: #da851d;
            color: #fff;
            padding: 6px 29px;
            border-radius: 5px;
            text-decoration: none;
            border: 1px solid #da851d;
            text-transform: uppercase;
            margin-top: 8px;
            display: inline-block;
        }
        a.btn5:hover{ background:none; color:#da851d; }
        /*Copy to clipbord btn*/

        /*Copy to clipbord btn End*/
        /*Membership Page*/

        .membership-page-banner {
            background: #e8e8e8;
            padding-top: 50px;
            text-align: center;
            padding-bottom: 100px;
        }

        .membership-page-banner h4 {
            font-size: 24px;
            padding:0; 
            margin:0;
        }
        .became-a-member {
            width: 100%;
            float: left;
            margin-top: -50px;
        }
        .became-a-member-form {
            background: #fff;
            padding: 30px;
            margin-bottom: 60px;
            box-shadow: 0 0 6px #00000040;
            position: relative;
        }
        .became-a-member-form ul.row {
            margin-bottom: 30px;
        }
        .became-a-member-form ul li  button, .became-a-member-form ul li  input, .became-a-member-form ul li  optgroup, .became-a-member-form ul li  select, .became-a-member-form ul li  textarea {
            width: 100%;
            border: none;
            border-bottom: 1px solid #c6c6c6;
            margin-bottom: 4px;
        }
        .became-a-member-form ul li label {
            display: inline-block;
            margin-bottom: .5rem;
            font-size: 13px;
        }
        .became-a-member-form ul li input[type="radio"] {
            width: 20px!important;
            display: inline-block;
        }
        .became-a-member-form ul li input[type="submit"] {
            display: inline-block;
            width: auto!important;
            padding: 7px 37px;
            background: #ff8a34;
            color: #fff;
            border-radius: 10px;
        }
        .became-a-member-form:before {
            width: 41.666667%;
            height: 100%;
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            background: url('../Images1/member-ship-right.jpg') no-repeat;
        }
        .box-5 figure {
            width: 100%;
            float: left;
            padding: 0;
            margin: 0;
            overflow: hidden;
        }
        .box-5 figure img{ 
            width: 100%;
            transition:5s; }
        .box-5:hover figure img{
            transform: scale(1.5);
        } 
        .ROMT-Membership-Benefits {
            width: 100%;
            float: left;
            padding: 0 0 45px;
        }
        .box-5 {
            margin: 15px 0;
            border: 1px solid #ccc;
            position: relative;
            vertical-align: middle;
            box-shadow: 0 0 2px #cccccc96;
        }
        .box-5 h4 {
            font-size: 19px;
            margin: auto;
            padding-top: 50px;
        }
        .h-green {
            color: #6c7843;
            font-size: 24px;
            padding: 0;
            margin: 0 0 9px;
        }
        .FindtheRight {
            width: 100%;
            float: left;
            /* background: url(../Images/member-ship-lastbg.jpg) no-repeat; */
            background-size: cover;
            padding: 134px 0;
        }
        .FindtheRightCon {
            max-width: 380px;
        }
        .FindtheRightCon h3 {
            color: #1e718b;
            font-family: 'Patrick Hand', cursive;
            font-size: 33px;
            font-weight: 500;
        }
        .FindtheRightCon a {
            background: #ef5e24;
            padding: 7px 26px;
            color: #fff;
            border-radius: 20px;
        }
        /*Membership page end*/
        /*Packages Page Start*/
        .packages-page-banner .carousel-control-next-icon, .packages-page-banner .carousel-control-prev-icon {
            display: inline-block;
            width: 50px;
            height: 50px;
            background-position: center;
            background-size: 19px;
            border: 1px solid #fff;
            border-radius: 50px;
        }
        .packages-filter {
            width: 100%;
            float: left;
            padding: 60px 0 0;
            position: relative;
        }
        .packages-filter #more{ display:none; }
        .packages-filter span#dots {
            display: none!important;
        }
        .filter-con {
            width: 100%;
            position: relative;
            float: left;
        }
        ul.filter {
            width: 100%;
            float: left;
            padding: 0;
            margin: 0;
            list-style: none;
        }
        ul.filter li {
            display: inline-block;
            vertical-align: middle;
            padding: 12px 24px;
        }
        ul.filter li select {
            width: 200px;
            border-radius: 20px;
            padding: 5px 13px;
            font-size: 13px;
            border: 1px solid #ccc;
        }
        ul.filter li label {
            font-size: 14px;
        }
        button.more-filter {
            position: absolute;
            top: 11px;
            right: 0;
            color: #104cf0;
            border: none;
            /* background: url(../Images/packages/icons/filter.jpg) no-repeat 12px center; */
            line-height: 15px;
            padding-left: 38px;
            font-size: 14px;
            border-left: 1px solid #ccc;
            width: 80px;
        }
        button.more-filter:before {
        display: none;
        }
        button.more-filter:focus {
            outline: none;
        }
        .toggle_radio input[type="radio"] {
            margin-right: 2px;
        }
        .more-f1 {
            font-size: 13px;
        }
        .pac {
            width: 100%;
            float: left;
            padding: 7px 0;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            position: relative;
            min-height: 40px;
            padding-right: 50px;
        }
        .filter-more h4 {
            font-size: 18px;
        }
        .filter-list ul {
            list-style: none;
        }
        .filter-list ul li {
            width: 100%;
            font-size: 13px;
            vertical-align: middle;
            padding: 6px 0;
        }

        .filter-list ul li input[type="checkbox"] {
            margin-right: 5px;
        }
        /**/
        .pr-pac {
            background: url(../Images/packages/premimum-packages.jpg) no-repeat left center;
            min-height: 20px;
            padding-left: 56px;
        }
        .switch {
            position: absolute;
            display: inline-block;
            width: 45px;
            height: 21px;
            margin-bottom: 0;
            right: 0;
            top: 8px;
        }

        .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
        }

        .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
        }

        /*.slider:before {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            left: 0px;
            bottom: 3px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }*/

        input:checked + .slider {
        background-color: #2196F3;
        }

        input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
        }

        input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
        }

        /* Rounded sliders */
        .slider.round {
        border-radius: 34px;
        }

        .slider.round:before {
        border-radius: 50%;
        }
        /**/
        .packages-page-banner {
            width: 100%;
            float: left;
            padding: 0;
            margin: 0;
            position: relative;
        }
        .packages-page-banner:before {
            width: 100%;
            height: 70%;
            background: #d7d7d7;
            position: absolute;
            top: 0;
            left: 0;
            content: '';
        }
        .packages-con {
            width: 100%;
            float: left;
            padding: 45px 0;
        }
        .package-box {
            width: 100%;
            float: left;
            padding: 10px;
            margin: 15px 0;
            box-shadow: 0 0 10px #00000063;
        }
        .package-box figure {
            width: 100%;
            overflow: hidden;
            margin: 0;
        }
        .package-box figure img {
            width: 100%;
            transition:transform 5s;
        }

        .package-box:hover figure img{transform: scale(1.5);}
        .package-box .p-content {
            padding: 0 6px;
        }
        .package-box .p-content h3 {
            font-size: 20px;
            margin: 15px 0;
        }
        .package-box .p-content h3 a {
            color: #000;
            text-decoration: none;
        }
        .facilities ul {
            width: 100%;
            float: left;
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            margin-bottom: 10px;
            text-align: center;
        }
        .facilities ul li {
            width: 20%;
            padding: 0 5px;
            float: left;
            border-right: 1px solid #ccc;
            position: relative;
        }
        .facilities ul li:last-child {
            border: none;
        }
        .facilities ul li span {
            width: 100%;
            display: inline-block;
            font-size: 10px;
        }
        .facilities ul li img {
            width: 22px;
        }
        .p-price {
            width: 100%;
            float: left;
            position: relative;
            min-height: 54px;
            padding-right: 95px;
        }

        .p-price h4 {
            font-size: 17px;
        }
        .p-price h6 {
            position: absolute;
            top: 0;
            right: 0;
            max-width: 86px;
        }
        .p-price h6 span {
            width: 100%;
            display: inline-block;
            font-size: 12px;
        }
        .packages-by-destination {
            width: 100%;
            float: left;
            padding: 60px 0;
            background: #e4e4e4;
        }
        .heading-group {
            width: 100%;
            float: left;
            padding: 0;
            position: relative;
            color: #414141;
        }
        .heading-group h3 {
            padding: 0;
            margin: 0 0 0;
            font-size: 24px;
        }
        .heading-group a {
            position: absolute;
            top: 10px;
            right: 0;
            color: #414141;
        }
        .heading-group a:hover {
            color: #f16b23;
            text-decoration:none;
        }
        .p-by-box {
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
        }
        .p-by-box h4 {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            padding: 15px;
        }
        .p-by-box h4 a{ color: #fff; text-decoration: none; font-size: 18px;  }
        .p-by-box figure {
            width: 100%;
            float: left;
            padding: 0;
            margin: 0;
            background: #000;
        }
        .p-by-box figure img {
            width: 100%;
            transition: transform 5s;
            opacity: 0.7;
        }
        .p-by-box:hover figure img {
            transform: scale(1.5);
        }

        /*Packagesa Page End*/
        /*Hotel Details*/
        .hotel-detail-bannerbox {
            width: 100%;
            float: left;
            margin-bottom: 15px;
            position: relative;
            background: #000;
            border-radius:10px;
        }
        .hotel-detail-bannerbox figure img {
            width: 100%;
        }
        .hotel-detail-bannerbox figure {
            width: 100%;
            float: left;
            padding: 0;
            margin: 0;
            border-radius: 10PX;
            overflow: hidden;
        }
        .hotel-detail-bannerbox a {
            display: inline-block;
            width: 100%;
            position: relative;
        }
        .hotel-detail-bannerbox h3 {
            position: absolute;
            bottom: 0;
            font-size: 18px;
            padding: 0 15px;
        }
        .hotel-detail-bannerbox h3 a{ color: #fff; font-size: 18px; text-decoration: none;  }
        .hotel-detail-bannerbox.hotel-gallery img  {
            opacity: 0.6;
        }
        .hotel-detail-bannerbox h4.video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #0000004a;
            text-align: center;
            border-radius: 10px;
            vertical-align: middle;
        }
        .hotel-detail-bannerbox h4.video a {
            color: #fff;
            height: 57px;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            margin: auto;
            font-size: 24px;
            text-decoration: none;
        }
        .hotel-detail-bannerbox h4.video a span {
            font-size: 18px;
        }
        .h-detail-banner-right {
            width: 100%;
            float: left;
            border-radius: 10px;
            border: 1px solid #e8efd3;
        }
        .h-detail-banner-right {
            border: 1px solid #e8efd3;
            border-radius: 10px;
        }
        .modal.fade.videomodal.show .modal-dialog {
            max-width: 800px;
            margin: 1.75rem auto;
        }
        /*==================
        Hotel Photos
        ================*/
        .gallery {
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            position: relative;
            width: 100%;
            left: 50%;
        }
        .gallery input[name$="control"] {
        display: none;
        }
        .gallery .carousel {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
        position: relative;
        height: 70vh;
        width: 100%;
        }
        .gallery .wrap {
        width: 100%;
        height: 100%;
        position: static;
        margin: 0 auto;
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
        margin-right: 20px;
        }
        .gallery .wrap figure {
        padding: 10px;
        height: 100%;
        min-width: 100%;
        -webkit-transition: opacity 0.25s ease-in-out 0.05s;
        transition: opacity 0.25s ease-in-out 0.05s;
        position: relative;
        left: 0;
        -webkit-transform: translateX(0%);
                transform: translateX(0%);
        box-sizing: border-box;
        text-align: center;
        margin: 0;
        display: block;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        opacity: 1;
        }
        .gallery .wrap figure label {
        cursor: zoom-in;
        height: auto;
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
        }
        .gallery .wrap figure img {
        cursor: inherit;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        border-radius: 3px;
        margin: 0 auto;
        position: relative;
        top: 50%;
        -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
        }
        .gallery .thumbnails {
        -webkit-box-flex: 1;
            -ms-flex: 1;
                flex: 1;
        min-width: 60px;
        max-height: 100%;
        height: auto;
        -webkit-box-flex: 0;
            -ms-flex-positive: 0;
                flex-grow: 0;
        -ms-flex-item-align: center;
            align-self: center;
        -ms-flex-preferred-size: auto;
            flex-basis: auto;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        overflow-y: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        padding: 0 10px;
        z-index: 20;
        }
        .gallery .thumbnails .thumb {
        min-width: 60px;
        height: 60px;
        background-position: center center;
        background-size: cover;
        box-sizing: border-box;
        opacity: 0.7;
        margin: 5px 0;
        -ms-flex-negative: 0;
            flex-shrink: 0;
        left: 0;
        border-radius: 3px;
        cursor: pointer;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-repeat: no-repeat;
        }
        .gallery .thumbnails .slider {
        position: absolute;
        display: block;
        width: 5px;
        height: calc(60px + 10px);
        z-index: 2;
        margin: 0;
        left: 0;
        -webkit-transition: all 0.33s cubic-bezier(0.3, 0, 0.33, 1);
        transition: all 0.33s cubic-bezier(0.3, 0, 0.33, 1);
        }
        .gallery .thumbnails .slider .indicator {
        width: 100%;
        height: 30px;
        max-height: calc(100% - 10px);
        position: relative;
        top: 50%;
        -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
        background: #428BFF;
        border-radius: 1px;
        }
        .gallery input#fullscreen:checked ~ .wrap figure {
        position: fixed;
        z-index: 10;
        height: 100vh;
        width: 100vw;
        padding: 0;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%) !important;
                transform: translate(-50%, -50%) !important;
        -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
        -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
        }
        .gallery input#fullscreen:checked ~ .wrap figure label {
        cursor: zoom-out;
        }
        .gallery input#fullscreen:checked ~ .wrap figure label img {
        -webkit-animation: shadow 0.2s;
                animation: shadow 0.2s;
        -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
        -webkit-animation-direction: forwards;
                animation-direction: forwards;
        -webkit-animation-fill-mode: forwards;
                animation-fill-mode: forwards;
        border-radius: 0;
        }
        .gallery input#image1:checked ~ .wrap figure {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        }
        .gallery input#image1:checked ~ .wrap figure:not(:nth-of-type(1)) {
        opacity: 0;
        }
        .gallery input#image1:checked ~ .thumbnails .slider {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        }
        .gallery input#image1:checked ~ .thumbnails .thumb:nth-of-type(1) {
        opacity: 1;
        cursor: default;
        }
        .gallery input#image2:checked ~ .wrap figure {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
        }
        .gallery input#image2:checked ~ .wrap figure:not(:nth-of-type(2)) {
        opacity: 0;
        }
        .gallery input#image2:checked ~ .thumbnails .slider {
        -webkit-transform: translateY(100%);
                transform: translateY(100%);
        }
        .gallery input#image2:checked ~ .thumbnails .thumb:nth-of-type(2) {
        opacity: 1;
        cursor: default;
        }
        .gallery input#image3:checked ~ .wrap figure {
        -webkit-transform: translateX(-200%);
                transform: translateX(-200%);
        }
        .gallery input#image3:checked ~ .wrap figure:not(:nth-of-type(3)) {
        opacity: 0;
        }
        .gallery input#image3:checked ~ .thumbnails .slider {
        -webkit-transform: translateY(200%);
                transform: translateY(200%);
        }
        .gallery input#image3:checked ~ .thumbnails .thumb:nth-of-type(3) {
        opacity: 1;
        cursor: default;
        }
        .gallery input#image4:checked ~ .wrap figure {
        -webkit-transform: translateX(-300%);
                transform: translateX(-300%);
        }
        .gallery input#image4:checked ~ .wrap figure:not(:nth-of-type(4)) {
        opacity: 0;
        }
        .gallery input#image4:checked ~ .thumbnails .slider {
        -webkit-transform: translateY(300%);
                transform: translateY(300%);
        }
        .gallery input#image4:checked ~ .thumbnails .thumb:nth-of-type(4) {
        opacity: 1;
        cursor: default;
        }

        @-webkit-keyframes full {
        from {
            -webkit-transform: translate(-50%, -50%) scale(0.8);
                    transform: translate(-50%, -50%) scale(0.8);
        }
        to {
            -webkit-transform: translate(-50%, -50%) scale(1);
                    transform: translate(-50%, -50%) scale(1);
        }
        }

        @keyframes full {
        from {
            -webkit-transform: translate(-50%, -50%) scale(0.8);
                    transform: translate(-50%, -50%) scale(0.8);
        }
        to {
            -webkit-transform: translate(-50%, -50%) scale(1);
                    transform: translate(-50%, -50%) scale(1);
        }
        }
        @-webkit-keyframes shadow {
        from {
            box-shadow: 0 0 0 100vmin rgba(24, 33, 45, 0), 0 0 10vmin rgba(13, 21, 31, 0);
        }
        to {
            box-shadow: 0 0 0 100vmin rgba(24, 33, 45, 0.6), 0 0 10vmin rgba(13, 21, 31, 0.6);
        }
        }
        @keyframes shadow {
        from {
            box-shadow: 0 0 0 100vmin rgba(24, 33, 45, 0), 0 0 10vmin rgba(13, 21, 31, 0);
        }
        to {
            box-shadow: 0 0 0 100vmin rgba(24, 33, 45, 0.6), 0 0 10vmin rgba(13, 21, 31, 0.6);
        }
        }
        /*===========
        Hotel Photo Gallery End
        =================*/
        .hd1 {
            padding: 15px 15px 10px;
            border-bottom: 1px solid #e8efd3;
        }
        .hd1 h3 {
            color: #347493;
            font-size: 15px;
            background: url('../Images/hotels/details-user.png') no-repeat;
            padding-left: 53px;
            min-height: 50px;
            padding-top: 7px;
            margin: 0;
        }
        .h-detail-banner-right ul {
            padding: 15px;
        }
        .h-detail-banner-right ul li {
            font-size: 13px;
            padding: 5px 0;
            position: relative;
            background: url('../Images/hotels/icons/checked.png') no-repeat;
            background-size: 12px;
            background-position-y: 9px;
            padding-left: 18px;
        }
        .h-detail-banner-right .price {
            width: 100%;
            float: left;
            padding: 15px;
            background: #efefef;
            font-size: 12px;
            border-radius: 11px;
        }
        .h-detail-banner-right .price h6 {
            color: #000000;
            padding: 0;
            margin: 0;
            font-size: 16px;
            font-weight: 300;
        }
        .h-detail-banner-right .price element.style {

        }
        .h-detail-banner-right .price a {
            display: inline-block;
            background: #ff8a34;
            padding: 9px 24px;
            color: #fff;
            font-size: 14px;
            border-radius: 10px;
            width: 100%;
            text-align: center;
        }
        .h-detail-banner-right .price a:hover{ text-decoration:none;}
        ul.h-bred-crumb {
            width: 100%;
            list-style: none;
            padding: 20px 0;
        }
        ul.h-bred-crumb li {
            display: inline-block;
            position: relative;
            padding: 0 10px 0 0;
            margin: 0 2px 0 0;
            font-size: 14px;
        }
        ul.h-bred-crumb li:before {
            font: normal normal normal 14px/1 FontAwesome;
            position: absolute;
            right: 0;
            top: 4px;
            content: "\f105";
        }
        ul.h-bred-crumb li:last-child:before{ display:none; }
        ul.h-bred-crumb li a {
            text-decoration: none;
            color: #3f7fb5;
        }
        ul.h-bred-crumb li a:hover{ text-decoration:none;}
        .heading-group-2 {
            padding-bottom: 0;
        }
        .heading-group-2 h2 {
            font-size: 24px;
            padding: 0;
            margin: 0 0 4px;
        }
        .hotel-sharing ul li {
            display: inline-block;
            border-right: 1px solid #efefef;
            padding: 0 13px;
        }
        .hotel-sharing ul {
            float: right;
        }
        .hotel-sharing ul li:last-child {
            border: none;
            padding-right: 0;
        }
        .hotel-sharing ul li a {
            color: #a2a2a2;
        }
        .hotel-sharing ul li a:hover{ text-decoration:none; }
        li.h-rating a i {
            color: #f49e17;
        }
        .hotel-facilities {
            padding-top: 30px;
        }
        .heading-group-2 p span {
            color: #00a19d;
        }

        .facilitis-with-icon {
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 10px;
            margin-bottom: 30px;
        }
        .facilitis-with-icon ul li {
            vertical-align: middle;
        }
        .facilitis-with-icon ul li span.icon {
            width: 50px;
            height: 50px;
            border: 1px solid #afdbff;
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            padding-top: 10px;
            border-radius: 50%;
            margin-right: 10px;
        }
        .facilitis-with-icon ul li span.icon img {
            width: 27px;
            display: inline-block;
        }
        .amenities h4 {
            font-size: 16px;
        }
        .amenities-box ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .amenities-box ul li {
            font-size: 14px;
            padding: 5px 0;
            position: relative;
            padding-left: 11px;
        }
        .amenities-box ul li:before {
            content: '';
            width: 5px;
            height: 2px;
            background: #777777;
            position: absolute;
            left: 0;
            top: 14px;
        }
        a.all-amenities {
            text-transform: uppercase;
            font-weight: 600;
            display: inline-block;
            margin: 15px 0 0;
        }
        .packages-filter.roomes-at-box-con {
            padding-top: 0;
        }
        .roomes-at-section {
            width: 100%;
            float: left;
            padding: 60px 0 45px;
        }

        .rooms-box {
            width: 100%;
            float: left;
            padding: 0;
            margin: 30px 0 0;
        }
        .room-content {
            font-size: 14px;
            color: #4d4c4b;
            padding: 0 10px;
        }

        .room-slider {
            border-radius: 5px;
            overflow: hidden;
            width: 100%;
            position: relative;
        }

        .r-photo-counter {
            position: absolute;
            left: 15px;
            bottom: 15px;
            background: #fff;
            border-radius: 27px;
            padding: 2px 17px;
            color: #279bff;
            font-size: 12px;
        }
        .rooms-box h4 {
            font-size: 20px;
            padding: 0;
            margin: 12px 0 5px;
            font-weight: 700;
            padding: 0 10px;
        }
        .room-dertails ul li {
            display: inline-block;
            padding-right: 12px;
        }
        .room-dertails ul li span {
            display: inline-block;
            margin-right: 5px;
        }
        .room-dertails {
            margin-bottom: 15px;
        }
        .room-am ul li {
            display: inline-block;
            padding-right: 1px;
            position: relative;
            padding-left: 8px;
        }
        .room-am ul li:before {
            content: '';
            background: #5b5b5b;
            width: 3px;
            height: 3px;
            position: absolute;
            top: 9px;
            left: 0;
            border-radius: 15px;
        }
        .room-box-footer {
            display: inline-block;
            width: 100%;
            margin-top: 18px;
        }
        .room-box-footer ul li:first-child a {
            text-transform: uppercase;
            font-weight: 500;
            color: #279bff;
            padding-top: 8px;
            display: inline-block;
        }
        .room-box-footer ul li:last-child a, .book-now {
            padding: 6px 20px;
            background: #ff8a34;
            color: #fff;
            font-size: 16px;
            border-radius: 9px;
            text-decoration: none;
            border: 1px solid #ff8a34;
            float: right;
            text-decoration: none;
        }
        .room-box-footer ul li:last-child a:hover, .book-now:hover {
            background: none;
            color: #ff8a34;
            text-decoration: none;
        
        }
        .hotel-detailmodal .modal-header {
            position: relative;
            width: 100%;
            border: none;
            padding-bottom: 0;
        }

        .hotel-detailmodal .modal-header h3 {
            width: 100%;
            float: left;
            font-size: 17px;
        }
        .hotel-detailmodal .modal-header button.close {
            position: absolute;
            top: 0;
            right: 6px;
        }
        .hotel-detailmodal .modal-dialog {
            max-width: 700px;
            margin: 1.75rem auto;
        }
        .room-details-modal-slider {
            border-radius: 5px;
            overflow: hidden;
        }
        .hotel-detailmodal .content {
            padding: 15px;
        }
        .more-rooms {
            margin-top: 30px;
            display: inline-block;
            padding: 10px 27px 20px;
            border-radius: 29px;
            background: none;
            border: 1px solid #ccc;
            position: relative;
            text-align: center;
        }
        .more-rooms:focus{outline:none; border:none;}
        button#myBtn:before {
            content: "\f0dd";
            font: normal normal normal 14px/1 FontAwesome;
            position: absolute;
            bottom: 3px;
            left: 0;
            right: 0;
            color: #d7630d;
            font-size: 24px;
        }
        ul.list-4 {
            padding: 0;
            margin: 0;
        }
        ul.list-4 li {
            position: relative;
            font-size: 13px;
            margin-bottom: 7px;
            padding-left: 17px;
        }
        ul.list-4 li:before {
            font: normal normal normal 14px/1 FontAwesome;
            content: "\f00c";
            color: #fff;
            background: #18a160;
            border-radius: 50%;
            padding: 2px;
            font-size: 8px;
            position: absolute;
            top: 3px;
            left: 0;
        }
        /*Guest Reviews & Rating*/
        .guestreviewssec {
            width: 100%;
            float: left;
            padding: 0 0 60px;
            margin: 0;
        }
        .guest-review-left {
            margin-top: 10px;
        }
        ul.rating-progress-bar li {
            position: relative;
            width: 100%;
            margin-bottom: 19px;
            margin-top: 11px;
            padding-left: 37px;
        }
        ul.rating-progress-bar li span {
            position: absolute;
            top: -2px;
            left: 0;
            font-size: 14px;
        }
        .progress.four .bg-warning {
            background-color: #ed6112!important;
        }
        .rating-counter {
            background: #5fa735;
            color: #fff;
            padding: 30px 15px;
            text-align: center;
            border-radius: 11px;
        }
        .rating-counter h5 {
            font-size: 15px;
            font-weight: 300;
        }
        .rating-counter p {
            font-size: 14px;
        }
        .c-review-filter ul {
            width: 100%;
        }
        .c-review-filter ul li {
            width: 50%;
            float: left;
            font-size: 14px;
        }
        .c-review-filter ul li label {
            margin-right: 10px;
            font-weight: 600;
            padding: 0;
            margin-bottom: 0;
        }
        .c-review-filter ul li select {
            padding-right: 12px;
            font-size: 13px;
            border: none;
        }
        .review-right ul li {
            display: inline-block;
            font-size: 13px;
            border: 1px solid #5ece6f;
            padding: 5px 20px;
            border-radius: 11px;
            margin-bottom: 11px;
        }
        .review-right ul li a{ color:#000; text-decoration: none; }
        .review-right h4 {
            font-size: 18px;
            margin-bottom: 16px;
        }

        /*Guest Reviews & Rating End*/

        /*Similar Properties*/
        .similar-properties {
            width: 100%;
            padding: 0 0 60px;
            float: left;
            margin: 0;
        }
        .similar-box {
            padding: 10px;
            border: 1px solid #f1f8ff;
            border-radius: 10px;
            width: 100%;
            float: left;
            margin-top: 20px;
        }
        .similar-box.current-hotel {
            border-color: #fffde9;
            background: #fffde9;
        }
        .similar-box figure{
            padding: 0;
            margin: 0;
        
        }
        .similar-box figure img{ width: 100%;}
        .similar-box figure {
            padding: 0;
            margin: 0;
            border-radius: 5px;
            overflow: hidden;
        }
        .similar-box h6 {
            font-size: 14px;
            margin: 7px 0 0;
            font-weight: 400;
        }
        .similar-box h4 {
            font-size: 17px;
            margin: 10px 0 5px;
        }
        .similar-box h5 {
            font-size: 14px;
        }
        .similar-box .review span {
            background: #18a160;
            color: #fff;
            padding: 2px 7px;
            border-radius: 6px;
            margin-right: 6px;
        }
        .similar-box .content {
            font-size: 13px;
        }
        .similar-box ul.amnities li {
            width: 100%;
            float: left;
            padding: 5px 0 0;
            margin-bottom: 10px;
            position: relative;
            vertical-align: middle;
        }
        .similar-box ul.amnities li img {
            width: 25px;
            margin-right: 10px;
        }
        .hotel-police {
            width: 100%;
            float: left;
            padding: 0 0 60px;
        }
        .hotel-police ul.list-4 li:before {
            background: #46484d;

        
        }
        .hotel-police ul.list-4 li {
            font-size: 14px;
        }
        .hotel-faq {
            padding: 0 0 60px;
            width: 100%;
            float: left;
        }
        ul.hotel-faq-list {
            border-bottom: 1px solid #f4f4f4;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }
        ul.hotel-faq-list li {
            background: url(../Images/hotels/icons/question.png) no-repeat;
            background-position-y: 3px;
            padding-left: 23px;
            margin: 0 0 6px;
        }
        ul.hotel-faq-list li:nth-child(2) {
            background: url(../Images/hotels/icons/answer.png) no-repeat;
            background-position-y: 3px;
            color: #a8a8a8;
        }
        /*Hotel Details*/
        /*Hotel Booking Page*/
        .information {
            position: relative;
        }
        .information-box {
            display: inline-block;
            width: 233px;
            border: 1px solid #000000;
            padding: 15px;
            border-radius: 20px;
            position: absolute;
            top: 199%;
            left: -105px;
            z-index: 1;
            background: #fff;
            transform: translateY(-2em);
            z-index: -1;
            transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
            display: inline-block;
            visibility: hidden;
            opacity: 0;
        
        }
        .information:hover .information-box{
            visibility: visible;
            opacity: 1;
            z-index: 1;
            transform: translateY(0%);
            transition-delay: 0s, 0s, 0.3s;}
        .information-box i {
            margin-right: 5px;
        }  
        .information-box p {
            font-weight: 400;
            color: #000;
            font-size: 13px;
        } 
        .information-box h6 {
            margin-bottom: 4px;
        }
        .information-box span.icon {
            position: absolute;
            top: -19px;
            left: 115px;
            right: 0;
        }
        .booking-page-box.row {
            width: 100%;
            padding: 30px 0 15px;
        }
        .booking-page-box.row figure {
            width: 100%;
            margin: 0;
            border-radius: 10px;
            overflow: hidden;
        }
        .booking-page-box.row figure img{width: 100%;}
        .booking-page-box.row h4 {
            font-size: 20px;
        }
        .booking-page-box.row h5 {
            font-size: 14px;
            font-weight: normal;
            color: #898a91;
        }
        .booking-page-box.row h5 i {
            font-size: 19px!important;
            margin-right: 5px;
        }
        .booking-page-box.row h6 span {background: #17a15e;
            color: #fff;
            padding: 6px 10px;
            border-radius: 3px;
            font-size: 15px;
            margin-top: 10px;
            display: inline-block;}
            .booking-page-box-2 {
                width: 100%;
                float: left;
                background: #e9f2ff;
                padding: 15px;
                margin: 0 0 15px;
                border-radius: 10px;
            }   
            .booking-page-box-2 p {
                margin-bottom: 4px;
                font-size: 12px;
            }
            .booking-page-box-2 h5 {
                font-size: 18px;
                margin: 0;
            }
            .booking-page-box-3, .guest-detail {
                width: 100%;
                float: left;
                padding: 0;
                box-shadow: 0 0 3px #00000038;
                border-radius: 10px;
                overflow: hidden;
                margin-bottom: 15px;
            }
            .booking-page-box-3-heading {
                background: #edf5fd;
                padding: 15px;
                border-bottom: 1px solid #dedddd;
            }
            .booking-page-box-3-heading h4 {
                font-size: 18px;
                margin: 0 0 5px;
            }
            .booking-page-box-3-heading  h6 {
                color: #5ea771;
                font-size: 14px;
                margin-bottom: 0px;
            }
            .booking-page-box-3-content ul {
                padding: 15px;
            }
            .booking-page-box-3-content ul li:nth-child(2) {
                padding-left: 11px;
                border-left: 3px solid #e2e6eb;
                margin-bottom: 10px;
            }
            .booking-page-box-3-content ul li:nth-child(2) img {
            width: 27px;
            margin-right: 6px;
        }
            .booking-page-box-3-content ul li a {
                color: #52a0ac;
            }
            .guest-detail {
                padding: 15px;
                margin-bottom: 60px;
            }
            .guest-detail h4 {
                font-size: 20px;
                text-transform: uppercase;
                border-bottom: 1px solid #ccc;
                margin-bottom: 15px;
                padding-bottom: 15px;
            }
            .guest-detail form button, .guest-detail form input, .guest-detail form optgroup, .guest-detail form select, .guest-detail form textarea {
                width: 100%;
                border: 1px solid #ccc;
                margin-bottom: 15px;
                padding: 5px;
            }
            .guest-detail form input[type="checkbox"] {
                width: auto;
                display: inline-block;
                margin-right: 5px;
            }
            .booking-page-right {
                border: 15px solid #f6f6f6;
                background: #fff;
            }
            .booking-page-right h4 {
                font-size: 18px;
                padding: 15px 15px 10px;
                border-bottom: 1px solid #e7e7e7;
            }
            ul.price-breakup {
                padding: 15px;
            }
            ul.price-breakup li {
                position: relative;
                border-bottom: 1px solid #e7e7e7;
                padding: 17px 60px 17px 0;
            }
            ul.price-breakup li span.price {
                position: absolute;
                top: 10px;
                right: 0;
                font-weight: 600;
            }
            ul.price-breakup li span.price:before {
                content: "\f156";
                font: normal normal normal 14px/1 FontAwesome;
                margin-right: 5px;
            }
            ul.price-breakup li:last-child {
                border: none;
            }
            ul.price-breakup li h6 {
                font-weight: 600;
                margin-bottom: 0;
                font-size: 14px;
            }
            ul.price-breakup li:nth-child(2){color:#45a3e9;}
            ul.price-breakup li:last-child span.price{color:#e32c49;}
            .booking-supperoffers {
                background: #e9f6ea;
                margin-top: 15px;
            }
            ul.price-breakup li i {
                border: 1px solid #45a3e9;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                text-align: center;
                padding-top: 2px;
                color: #45a3e9;
            }
            .booking-promocode {
                width: 100%;
                float: left;
                padding: 0;
                margin: 15px 0;
                position: relative;
            }
            .booking-promocode input[placeholder="Got A Promocode?"] {
                padding: 10px;
                border-radius: 10px;
                border: 1px solid #f0f4f9;
                width: 100%;
            }
            .booking-promocode button {
                position: absolute;
                top: 6px;
                right: 5px;
                border: 1px solid #2274e0;
                background: #2274e0;
                color: #fff;
                text-transform: uppercase;
                padding: 5px 13px;
                border-radius: 5px;
                font-size: 14px;
            }
            .booking-buttons {text-align:center;}
            .booking-buttons button {
                padding: 10px;
                width: 100%;
                border-radius: 10px;
                background: #ff8a34;
                border: 1px solid #ff8a34;
                color: #fff;
                text-transform: uppercase;
                margin-bottom: 10px;
            }
        .booking-buttons button:hover, .booking-buttons button:focus {
            background: none;
            color: #ff8a34;
            outline: none;
            stroke: none;
        }
            .booking-buttons a{color: #ff8a34;}

        /*Hotel Booking Page End*/
        /*Sign-in Page */
        .sign-in-page-wraper {
            position: relative;
            width: 100%;
            float: left;
            min-height: 100vh;
        }
        .sign-in-page-wraper:before {
            content: '';
            position: absolute;
            height: 100%;
            width: 63.666667%;
            right: 0;
            top: 0;
            background: #f16b23;
        }
        .signinpage-logo {
            padding-top: 80px;
        }
        .signinpage-logo img {
            width: 147px;
        }
        .signin-form h4 {
            margin-top: 60px;
            font-size: 22px;
        }
        .login-with {
            margin-top: 20px;
            width: 100%;
            float: left;
            margin-bottom: 20px;
        }
        .login-with h5 {
            font-size: 16px;
            display: inline-block;
            margin-right: 10px;
            float: left;
        }
        .login-with  i.fa.fa-facebook {
            background: #3b5998;
            color: #fff;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            text-align: center;
            padding-top: 6px;
        }
        .login-with a {
            float: left;
        }
        .login-with  i.fa.fa-google {
            font-size: 26px;
            margin: 0 5px;
            background: -webkit-linear-gradient(#ec5448, #fbb800, #34a853, #4285f4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .signin-form form input, .signin-form form select, .signin-form form textarea {
            width: 100%;
            float: left;
            padding: 10px;
            margin: 0 0 14px;
            border-radius: 5px;
            border: 1px solid #f5f5f7;
            font-size: 14px;
        }
        .signin-form input[type="checkbox"] {
            width: 20px!important;
            display: inline-block;
            float: left;
            margin-top: 5px!important;
            margin-right: 5px!important;
        }
        .signin-form  input[type="submit"] {
            background: #f16b23;
            color: #fff;
            font-size: 16px;
            border: 1px solid #f16b23;
        }
        .signin-form  input[type="submit"]:hover{
            background:none;
            color: #f16b23;
        }

        .sign-in-right {
            text-align: center;
            width: 100%;
            float: left;
            background: #f16b23;
            color: #fff;
            text-align: center;
        }
        .sign-in-right ul {
            max-width: 400px;
            text-align: left;
            display: inline-block;
            margin-top: 40vh;
        }
        .sign-in-right ul li {
            position: relative;
            padding: 0 0 20px 57px;
        }
        .sign-in-right ul li i {
            position: absolute;
            left: 0;
            top: 0;
            font-size: 42px;
        }
        .user-dropdown ul {
            position: absolute;
            top: 100%;
            left: -25px;
            box-shadow: 0 0 3px #00000070;
            padding: 0;
            font-size: 12px;
            width: 100%;
            min-width: 200px;
            display: none;
            background: #fff;
        }
        .user-dropdown {
            float: right;
            position: relative;
            margin-top: 15px;
        }

        .user-top {
            position: relative;
            display: inline-block;
            padding-left: 35px;
        }
        .user-top figure {
            position: absolute;
            left: 0;
            width: 30px;
            height: 30px;
            overflow: hidden;
            background: #ccc;
            border-radius: 50%;
        }
        .user-top figure img {
            width: 100%;
        }
        .user-top h6 {
            font-size: 11px;
            margin: 0;
            color: #a3a3a3;
            font-weight: normal;
        }
        .user-top h4 {
            font-size: 15px;
        }
        .user-top h4 {
            font-size: 15px;
            color: #363636;
        }
        .user-dropdown ul {
            position: absolute;
            top: 100%;
            left: -25px;
            box-shadow: 0 0 3px #00000070;
            padding: 0;
            font-size: 12px;
            width: 100%;
            min-width: 200px;
            display: none;
        }
        .user-dropdown:hover ul{ display: block;  }
        .user-dropdown ul li {
            border-bottom: 1px solid #ccc;
        }
        .user-dropdown ul li a {
            color: #000;
            display: inline-block;
            padding: 10px;
            width: 100%;
        }
        .booking-history {
            padding-top: 80px;
        }
        .booking-history figure {
            width: 100%;
            margin: 0;
            height: 100px;
            overflow: hidden;
        }
        .booking-history figure img {
            width: 99%;
        }
        .btn-renew {
            display: inline-block;
            background: #9bc23b;
            padding: 10px 20px;
            color: #fff;
            border-radius: 5px;
            border: 1px solid #9bc23b;
        }
        .btn-renew:hover{color:#9bc23b; background: #fff; text-decoration: none;}
        .booking-history-sec2 {
            width: 100%;
            float: left;
            padding: 30px 0;
        }
        .booking-history-sec2 h4 {
            font-size: 20px;
        }
        ul.booking-history-sec2-right li {
            border-right: 1px solid rgb(230, 230, 230);
        }
        ul.booking-history-sec2-right li:last-child {
            text-align: right;
            border: none;
        }
        .booking-history-sec3-right-heading select{
            width: 100%;
            padding: 4px 9px;
            border-radius: 10px;
            border: 1px solid #ccc;
        }
        .booking-history-box {
            box-shadow: 0 0 4px #00000059;
            margin: 30px 0;
            padding: 15px;
            background: #fff;
        }
        .booking-history-box ul li p {
            margin-bottom: 2px;
            font-size: 14px;
        }
        .booking-history-sec3-left {
            background: #efefef;
            padding: 15px;
            min-height: 500px;
        }
        .booking-history-sec3-left ul li {
            border-bottom: 1px solid #fff;
            position: relative;
        }
        .booking-history-sec3-left ul li a {
            color: #0c0c0c;
            padding: 14px 0;
            display: inline-block;
            width: 100%;
        }
        .booking-history-sec3-left ul li a:hover {text-decoration: none;}
        .booking-history-sec3-left ul li span.icon {
            margin-right: 6px;
        }
        /*Sign in page End*/ 
        /*Package Detail page*/
        .package-details-banner{width: 100%; float: left;}
        .package-details-banner figure {
            margin: 0;
        }
        .package-details-banner figure img{width: 100%;}
        .packaage-detail-page-con {
            width: 100%;
            float: left;
            margin: 0;
            background: #f6f8fb;
            padding: 60px 0 0;
        }
        .package-detail-box-left {
            width: 100%;
            float: left;
            padding: 0;
            margin: 0 0 30px;
            background: #fff;
        }
        .package-detail-box-left .banner__avg-rating {
            font-size: 19px;
            font-weight: 600;
            padding: 7px 15px;
            background-color: #129b0d;
            border-radius: 4px;
            line-height: 1.2;
            margin-right: 7px;
            color: #fff;
        }
        .package-review {
            width: 100%;
            float: left;
            padding: 30px;
        }
        .banner__info {
            margin-top: 11px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-weight: 500;
        }
        .product-info-item {
            margin-left: 20px;
        }
        .package-review ul li {
            display: inline-block;
            margin-right: 19px;
        }
        .package-info {
            padding: 30px 0 0;
        }
        .package-info h2 {
            position: relative;
            padding-left: 30px;
        }
        .package-info h2:before {
            content: "";
            height: 35px;
            width: 5px;
            top: 0;
            left: 0;
            position: absolute;
            background: #ff5e00;
        }
        .package-detail-block-body {
            width: 100%;
            float: left;
            padding: 30px 25px 0;
            text-align: center;
        }
        .package-detail-block-body ul {
            display: inline-block;
            width: auto;
        }
        .package-detail-block-body ul li {
            display: inline-block;
            padding: 0 3px;
            margin-bottom: 30px;
            text-align: center;
            width: 20%;
            float: left;
            min-width: 142px;
        }
        .package-detail-block-body ul li span {
            width: 100%;
            display: inline-block;
            margin-bottom: 10px;
        }
        .package-detail-block-body ul li span img {
            width: 35px;
        }
        .package-info ul.highlight-list {
            padding: 0 30px 20px;
            margin-top: 32px;
        }
        ul.highlight-list{ width: 100%;  }
        ul.highlight-list li {
            position: relative;
            margin-bottom: 26px;
            padding-left: 16px;
        }
        ul.highlight-list li:before {
            content: '';
            width: 10px;
            height: 10px;
            border: 2px solid #ff5e00;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 5px;
        }
        .package-dtils-rbox {
            width: 100%;
            float: left;
            background: #fff;
            margin-bottom: 30px;
        }
        .package-price {
            padding: 30px 15px;
            color: #ff5e00;
            font-weight: 600;
            font-size: 16px;
        }

        .package-price h3{
            display: inline-block;
        }
        .package-price h3 span {
            font-weight: normal;
        }
        .package-price h3 {
            display: inline-block;
            font-weight: bold;
            margin-bottom: 0;
            margin-right: 10px;
        }
        .package-price button {
            width: 100%;
            border: 2px solid #ff5e00;
            background: #ff5e00;
            color: #fff;
            padding: 6px 10px;
            border-radius: 10px;
        }
        .package-price button:focus{ stroke: none; outline: none; }
        .package-price button:hover{ background: none; color:#ff5e00; }
        span.off-price {
            color: white;
            background-color: #ffb100;
            padding: 5px 10px;
            font-size: 12px;
            font-weight: 600;
            border-radius: 6px;
            margin: 0 5px;
        }
        .package-dtils-rbox-form {
            width: 100%;
            padding: 30px 15px 15px;
        }
        .package-dtils-rbox-form button, .package-dtils-rbox-form input, .package-dtils-rbox-form select, .package-dtils-rbox-form  textarea {
            border: 1px solid #d9d9d9;
            width: 100%;
            padding: 6px 10px;
            border-radius: 10px;
            outline: none;
            margin-bottom: 8px;
        }
        button.track-enquiry-event-button {
            border: 1px solid #ff5e00;
            background: #ff5e00;
            color: #fff;
            text-transform: uppercase;
            margin-top: 13px;
        }
        button.track-enquiry-event-button:hover{ background: none; color:#ff5e00; }
        ul.terms-conditions {
            width: 100%;
            float: left;
        }
        ul.terms-conditions li {
            font-size: 14px;
            position: relative;
            padding-left: 20px;
            margin-bottom: 12px;
        }
        ul.terms-conditions li:before {
            content: "\f00c";
            font: normal normal normal 14px/1 FontAwesome;
            color: #129b0d;
            position: absolute;
            left: 0;
            top: 4px;
        }
        .hotel-to-avail-package {
            width: 100%;
            float: left;
            padding: 60px 0 30px;
        }
        .box-6 {
            width: 100%;
            float: left;
            padding: 0;
            position: relative;
        }
        .box-6 figure {
            width: 100%;
            float: left;
            overflow: hidden;
            background: #000;
        }
        .box-6 figure img {
            width: 100%;
            transition:transform 5s;
            opacity: 0.9;
        }
        .box-6:hover img {
            transform: scale(1.5);
        }
        .box-6 {
            background: #fff;
            padding: 10px;
            margin-bottom: 30px;
        }
        .box-6 .content h4 {
            font-size: 20px;
            text-decoration: none;
        }
        .box-6 .content h4 a {
            color: #0071c2;
            text-decoration: none;
        }
        .box-6 .content h5 {
            font-weight: bold;
            font-size: 20px;
        }
        .boo-now-btn {
            display: inline-block;
            position: absolute;
            top: 26px;
            right: 18px;
        }
        .boo-now-btn a {
            background: #ff5e00;
            color: #fff;
            text-transform: uppercase;
            border: 1px solid #ff5e00;
            padding: 7px 20px;
            border-radius: 11px;
        }
        .boo-now-btn a:hover{ background:#e75500; border-color:#e75500; text-decoration: none;  }
        .hotel-to-avail-package .col-md-12.sec-heading {
            margin-bottom: 20px;
        }
        .hotel-detailmodal.chek-availability .modal-dialog {
            max-width: 950px;
            margin: 1.75rem auto;
            padding-top: 127px;
        }
        .chek-availability-form label {
            font-size: 18px;
        }
        .chek-availability-form input, .chek-availability-form  optgroup, .chek-availability-form select, .chek-availability-form textarea {
            border: none;
            stroke: none;
            outline: none;
            border-bottom: 1px solid #ccc;
            width: 100%;
            padding: 4px 0;
        }
        .chek-availability-form button,.chek-availability-form input[type="button"] {
            background: #e01e1e;
            color: #fff;
            border: 1px solid #e01e1e;
            padding: 5px 15px;
            border-radius: 7px;
            float: right;
        }
        .write-review-sec {
            width: 100%;
            float: left;
            margin-bottom: 60px;
        }
        .write-review-box {
            background: #fff;
            width: 100%;
            float: left;
            padding: 60px;
        }
        .write-review-box p {
            text-align: center;
            margin-bottom: 0;
            margin-top: 44px;
            float: left;
            width: 100%;
        }
        .write-review-box p a{color: #ff5e00; font-weight: bold;}
        .all-reviews {
            width: 100%;
            float: left;
            margin-bottom: 30px;
        }
        .package-review-box {
            width: 100%;
            background: #fff;
            float: left;
            padding:0 30px 30px;
            text-align: center;
            margin-top: 30px;
        }
        .package-review-box figure {
            width: 76px;
            height: 76PX;
            display: inline-block;
            border-radius: 50px;
            overflow: hidden;
            margin-top: -29px;
            margin-bottom: 0;
        }
        .package-review-box figure img{ width: 100%; }
        .review-star img {
            width: 80px;
        }
        .package-review-box .col-4.review {
            padding-top: 15px;
        }
        .col-4.Date {
            padding-top: 15px;
        }
        .package-review-box h5.name {
            font-size: 18px;
        }
        .package-review-box a {
            float: right;
            color: #ff5e00;
            font-weight: 500;
        }
        .p-related-stay {
            width: 100%;
            float: left;
            padding: 30px 0 60px;
        }
        .p-related-stay .post-slide {
            padding: 15px;
        }
        .relte-box {
            width: 100%;
            float: left;
            padding: 0;
            margin: 0;
        }
        .relte-box figure {
            width: 100%;
            float: left;
            padding: 0;
            margin: 0;
            background: #000;
            overflow: hidden;
            position: relative;
            border-radius: 20px;
        }
        .relte-box figure span {
            color: #fff;
            position: absolute;
            bottom: 20px;
            left: 20px;
        }
        .relte-box figure img {
            width: 100%;
            transition: transform 2.5s;
            opacity: 0.8;
        }
        .relte-box:hover figure img {
            transform: scale(1.5);
        }
        .relte-box h5 {
            font-weight: normal;
            font-size: 16px;
            margin: 14px 0;
            width: 100%;
            float: left;
            line-height: 21px;
        }
        .relte-box .rating li img {
            width: 67px;
            margin-right: 12px;
        }
        .relte-box .price {
            margin-top: 0;
            font-weight: 600;
            font-size: 18px;
        }
        .relte-box .price span.cut-price {
            font-weight: 200;
            display: inline-block;
            padding: 0 4px;
            font-size: 15px;
            text-decoration: line-through;
        }
        .relte-box h5 a {
            color: #000;
            text-decoration: none;
        }
        h3.heding-btmborder {
            position: relative;
            padding-bottom: 10px;
        }
        h3.heding-btmborder:before {
            content: '';
            width: 59px;
            height: 2px;
            background: #ff5e00;
            position: absolute;
            left: 0;
            bottom: 0;
        }
        .p-related-stay .owl-carousel .owl-nav.disabled {
            display: block;
        }
        .p-related-stay .owl-carousel .owl-nav button.owl-next, .p-related-stay .owl-carousel .owl-nav button.owl-prev {
            position: absolute;
            top: 0;
            left: -10px;
            bottom: 0;
            margin: auto;
            width: 50px;
            height: 50px;
            background: #fff;
            border-radius: 50%;
            box-shadow: 0 0 8px #00000085;
        }
        .p-related-stay .owl-carousel .owl-nav button.owl-next{ left: unset; right: -10px;  }
        .p-related-stay .owl-carousel .owl-nav button.owl-next:focus, .p-related-stay .owl-carousel .owl-nav button.owl-prev:focus {
            border: none;
            stroke: none;
            outline: none;
        }
        .package-policies-wraper {
            background: #fff;
        }
        .policy-box {
            padding: 0 30px;
            margin: 30px 0;
            width: 100%;
            float: left;
        }
        .policy-box ul.highlight-list li {margin-bottom: 8px;}
        .package-policies {
            width: 100%;
            float: left;
            margin-bottom: 60px;
        }
        /*Package Detail End*/
        /*Inner page End*/	
        /*Footer Start*/
        .places-sec {
            width: 100%;
            float: left;
            padding: 60px 0 33px;
            background: #efefef;
        }
        .places-sec ul {
            width: 100%;
            float: left;
            padding: 0;
            margin: 0 0 16px;
        }
        .places-sec ul li {
            display: inline-block;
            padding-right: 12px;
            margin-right: 5px;
            border-right: 1px solid #b3b3b3;
            line-height: 15px;
            margin-bottom: 11px;
        }
        .places-sec ul li strong {
            font-weight: 500;
        }
        .places-sec ul li a { color: #605f5f; text-dec:nobe;}
        .places-sec ul li a:hover {
            color: #f16b23;
        }
        footer.site-footer {
            width: 100%;
            float: left;
            background: #15141b;
            color: #fff;
            font-size: 14px;
        }
        .footer-top {
            background: #15141b;
            background-size: cover;
            background-position: center;
            padding: 80px 0 50px;
            background-image: url(../Images/bg6.jpg);
            background-size: 100%;
            background-position: bottom;
            background-repeat: no-repeat;
        }
        .footer-bottom {
            background-color: #15141a;
            padding: 25px 0;
            color: #b0b0b0;
            border-top: 1px solid rgba(255,255,255,0.05);
        }
        .input-group {
            width: 100%;
        }

        .subscribe-form button.site-button.radius-xl {
            border-radius: 50px !important;
            padding-left: 15px;
            padding-right: 15px;
            height: 35px;
            background-color: #f16b23;
            border: none;
            color: #fff;
        }
        .subscribe-form input.form-control {
            background-color: rgba(0,0,0,0);
            border: 2px solid #b7b3cb;
            border-radius: 30px !important;
            height: 35px;
            padding: 10px 20px;
            margin-right: 5px;
            color: #fff;
            font-size: 15px;
        }
        .list-inline > li {
            padding-left: 2px;
            padding-right: 2px;
            display: inline-block;
        }
        .site-button.circle {
            width: 40px;
            height: 40px;
            padding: 0;
            border-radius: 40px;
            line-height: 39px;
            display: inline-block;
            text-align: center;
            color: #fff;
            margin: 18px 3px;
        }
        .site-button.facebook {
            background-color: #3B5998;
        }
        .site-button.google-plus {
            background-color: #DE4E43;
        }
        .site-button.linkedin {
            background-color: #007BB6;
        }
        .site-button.instagram {
            background-color: #8A5A4E;
        }
        .site-button.twitter {
            background-color: #1EA1F3;
        }
        .list-2 li {
            float: left;
            padding: 5px 5px 5px 15px;
            width: 33.33%;
            position: relative;
            transition: all 0.3s;
            -moz-transition: all 0.3s;
            -webkit-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
        }
        .list-1 li:before, .list-2 li:before {
            content: "";
            font-size: 11px;
            left: 0;
            position: absolute;
            width: 6px;
            height: 1px;
            background: #c6cffa;
            top: 15px;
            transition: all 0.3s;
            -moz-transition: all 0.3s;
            -webkit-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
        }
        footer a:hover, footer a, footer a:visited {
            color: #b7b3cb;
            text-decoration: none;
        }
        .list-2 li:hover:before {
            width: 12px;
            background: #fff;
        }
        .list-2 li:hover {
            padding: 5px 5px 5px 22px;
        }
        footer p, footer strong, footer b, footer, footer ul li {
            color: #b7b3cb;
        }
        footer strong {
            font-weight: 500;
            color: #fff;
        }
        .footer-address ul li {
            position: relative;
            padding-left: 37px;
        }
        .footer-address ul li i {
            font-size: 30px;
            position: absolute;
            top: 0;
            left: 0;
        }
        .footer-address ul li:last-child i {
        font-size: 23px;
        }
        /*Footer End*/


        @media (min-width: 1200px){
        .container {
            max-width: 1200px;
        }
        }
        @media (max-width: 575px){}
        @media (min-width: 768px){
            .col-md-5 {
                -ms-flex: 0 0 41.666667%;
                flex: 0 0 41.666667%;
                max-width: 41.666667%;
            }
        }`
    }
</style>
);
};

export default romtCss;

