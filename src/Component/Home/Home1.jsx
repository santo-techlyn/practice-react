import { useEffect } from 'react';
import img from '../../assets/images/logo.png'
import vector2 from '../../assets/images/vector2.png'
import vector3 from '../../assets/images/vector3.png'
import vector4 from '../../assets/images/vector4.png'
import illustration2 from '../../assets/images/illustration2.png'
import illustration3 from '../../assets/images/illustration3.png'
import illustration4 from '../../assets/images/illustration4.png'
import illustration5 from '../../assets/images/illustration5.png'
import image5 from '../../assets/images/image5.png'
import image3 from '../../assets/images/image3.png'
import image2 from '../../assets/images/image2.png'
import image4 from '../../assets/images/image4.png'
import image1 from '../../assets/images/image1.png'
import image from '../../assets/images/image.png'
import shape1 from '../../assets/images/shape1.png'
import shapes1 from '../../assets/images/shapes1.png'
import WOW from 'wowjs';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Home1() {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            new WOW.WOW({
                animateclassName: 'animated',
                offset: 100,
            }).init();
        };

        
    }, []);

    return (
        <>
            {/* <!-- menu area --> */}
            <div className="menu-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-sm-4 col-6">
                            <div className="logo-area wow fadeInDown" data-wow-delay=".2s">
                                <a href="index.html"> <img src={img} alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-8 col-6 d-none d-lg-block">
                            <nav id="mobile-menu">
                                <ul className="main-menu">
                                    <li className="has-submenu wow fadeInDown" data-wow-delay=".4s"><a href="#">home</a>
                                        <ul className="submenu">
                                            <li><a href="index.html">home 01</a></li>
                                            <li><a href="home-2.html">home 02</a></li>
                                            <li><a href="home-3.html">home 03</a></li>
                                        </ul>
                                    </li>
                                    <li className="wow fadeInDown" data-wow-delay=".6s"><a href="about.html">about</a></li>
                                    <li className="wow fadeInDown" data-wow-delay=".8s"><a href="services.html">services</a></li>
                                    <li className="wow fadeInDown" data-wow-delay="1s"><a href="blog.html">blog</a></li>
                                    <li className="wow fadeInDown" data-wow-delay="1.2s"><a href="contact.html">contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-2">
                            <div className="nav-right-btn">
                                <a href="#" className="primary-btn wow fadeInDown" data-wow-delay="1.4s">Get In touch</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu"></div>
            </div>

            {/* <!-- hero area starts --> */}
            <section className="hero-section">
                <img className="hero-vector2" src={vector2} alt="image" />
                <img className="hero-vector3" src={vector3} alt="image" />
                <img className="hero-vector4" src={vector4} alt="image" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                            <div className="hero-contant">
                                <h1 className="wow fadeInUp">Creative Content <span className="solutions">Solutions</span> to get the
                                    best results</h1>
                                <p className="hero-paragraph wow fadeInDown">There are many variations of passages of available,but
                                    the majority
                                    have suffered alteration in some form, by injected humour, or randomised words which don't
                                    look even slightly believable.</p>
                                <div className="hero-bottom wow fadeInDown">
                                    <span>Vear Anderson | </span>
                                    <ul className="hero-icon">
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="hero-bottom-img wow fadeInUp" data-wow-delay=".5s">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="hero-img">
                                <img src={illustration2} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- hero area end --> */}

            {/* <!-- About section start --> */}
            <section className="about-section py-135">
                <div className="container-fluid">
                    <div className="row wow fadeInUp" data-wow-delay=".2s">
                        <div className="section-title mb-60">
                            <span>Get to know</span>
                            <h2>About</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-4 offset-xl-2 col-lg-6 wow fadeInLeft">
                            <div className="left-right-shared">
                                <h3 className="mb-20">We Care About Your Business For Better</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a
                                    page
                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                                    normal
                                    distribution</p>
                                <div className="left-right-shared-bottom">
                                    <div className="sape">
                                        <span> <i className="fa-solid fa-check"></i></span>
                                    </div>
                                    <div className="">
                                        <h5>Promotional Marketing Contents</h5>
                                        <p>Our purpose is to build solutions that remove barriers preventing people.</p>
                                    </div>
                                </div>
                                <div className="left-right-shared-bottom">
                                    <div className="sape">
                                        <span><i className="fa-solid fa-check"></i></span>
                                    </div>
                                    <div className="">
                                        <h5>Promotional Marketing Contents</h5>
                                        <p>Our purpose is to build solutions that remove barriers preventing people.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight">
                            <div className="about-img">
                                <img src={illustration3} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end About section start --> */}

            {/* <!-- Services section start --> */}
            <section className="services-section pb-135">
                <div className="container-fluid">
                    <div className="row wow fadeInUp" data-wow-delay=".2s">
                        <div className="section-title mb-60">
                            <span>How It Works</span>
                            <h2>Services</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="services-img">
                                <img src={illustration5} alt="image" />
                            </div>
                        </div>
                        <div className="col-xl-4 offset-xl-1 col-lg-6 wow fadeInRight">
                            <div className="left-right-shared">
                                <h3>Be One Top & Drive More Sales to Your Site</h3>
                                <p className="mb-30">It is a long established fact that a reader will be distracted by
                                    the readable content of a
                                    page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution</p>
                                <h5>Our purpose is to build solutions that remove barriers preventing people.
                                </h5>
                                <div className="left-right-shared-bottom">
                                    <div className="bg-sape">
                                        <a href="#"><span><i className="fa-solid fa-box"></i></span></a>
                                    </div>
                                    <div className="services-right-bottom-content">
                                        <h5>Keyword Analysis & Research</h5>
                                        <p>Learning and Growth. Were building a learning organization, so you not only
                                            develop.
                                        </p>
                                    </div>
                                </div>
                                <div className="left-right-shared-bottom">
                                    <div className="bg-sape">
                                        <a href="#"><span><i className="fa-solid fa-chart-pie"></i></span></a>
                                    </div>
                                    <div className="services-right-bottom-content">
                                        <h5>On-site Optimization</h5>
                                        <p>Learning and Growth. Were building a learning organization, so you not only
                                            develop.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end Services section start --> */}

            {/* <!-- business section --> */}
            <section className="business-section pb-135">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-4 offset-xl-2 col-lg-6 wow fadeInLeft">
                            <div className="left-right-shared">
                                <h3>Be One Top & Drive More Sales to Your Site</h3>
                                <p className="">It is a long established fact that a reader will be distracted by
                                    the readable content of a
                                    page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution</p>
                                <h5>Our purpose is to build solutions that remove barriers preventing people.
                                </h5>
                                <div className="left-right-shared-bottom">
                                    <div className="bg-sape">
                                        <a href="#"><span><i className="fa-regular fa-hand-pointer"></i></span></a>
                                    </div>
                                    <div className="services-right-bottom-content">
                                        <h5>Keyword Analysis & Research</h5>
                                        <p>Learning and Growth. Were building a learning organization, so you not only develop.
                                        </p>
                                    </div>
                                </div>
                                <div className="left-right-shared-bottom">
                                    <div className="bg-sape">
                                        <a href="#"><span><i className="fa-solid fa-chart-pie"></i></span></a>
                                    </div>
                                    <div className="services-right-bottom-content">
                                        <h5>On-site Optimization</h5>
                                        <p>Learning and Growth. Were building a learning organization, so you not only develop.
                                        </p>
                                    </div>
                                </div>
                                <div className="left-right-shared-persent">
                                    <div className="left-right-shared-bottom2">
                                        <div className="left-right-shared-bottom-icon item-zooming">
                                            <a href="#"><span><i className="fa-solid fa-chart-simple"></i></span></a>
                                        </div>
                                        <div className="services-right-bottom-content">
                                            <h5>8.93%</h5>
                                            <span>Increase In Monthly</span>
                                        </div>
                                    </div>
                                    <div className="left-right-shared-bottom2">
                                        <div className="left-right-shared-bottom-icon item-zooming">
                                            <a href="#"><span><i className="fa-solid fa-chart-simple"></i></span></a>
                                        </div>
                                        <div className="services-right-bottom-content">
                                            <h5>15.88%</h5>
                                            <span>Increase In Yearly</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight">
                            <div className="business-img">
                                <img src={illustration4} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end business section --> */}

            {/* <!-- Portfolio section --> */}
            <section className="portfolio-section py-135">
                <img className="protfolio-shape item-rotate" src={shape1} alt="image" />
                <div className="container">
                    <div className="protfolio-wraper">
                        <div className="row wow fadeInUp" data-wow-delay=".2s">
                            <div className="section-title mb-60">
                                <span>My Latest Writeups</span>
                                <h2>Portfolio</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-protfolio-part wow fadeInUp" data-wow-delay=".2s">
                                    <a className="view" href="assets/images/image.png">
                                        <div className="single-protfolio-img">
                                            <img src={image} alt="image" />
                                            <div className="overlay">
                                                <span> <i className="fa-solid fa-magnifying-glass fa-2xl"></i></span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="single-protfolio-content">
                                        <a href="#" className="primary-btn mb-10">Technology</a>
                                        <a href="#" className="protfolio-link">
                                            <h6>VR Is the Use of Computer Technology to Create a Simulated Environment.
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                                <div className="single-protfolio-part wow fadeInUp" data-wow-delay=".4s">
                                    <a className="view" href="assets/images/image1.png">
                                        <div className="single-protfolio-img">
                                            <img src={image1} alt="image" />
                                            <div className="overlay">
                                                <span> <i className="fa-solid fa-magnifying-glass fa-2xl"></i></span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="single-protfolio-content">
                                        <a href="#" className="primary-btn mb-10">Technology</a>
                                        <a href="#" className="protfolio-link">
                                            <h6>VR Is the Use of Computer Technology to Create a Simulated Environment.
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                                <div className="single-protfolio-part wow fadeInUp" data-wow-delay=".6s">
                                    <a className="view" href="assets/images/image4.png">
                                        <div className="single-protfolio-img">
                                            <img src={image4} alt="image" />
                                            <div className="overlay">
                                                <span> <i className="fa-solid fa-magnifying-glass fa-2xl"></i></span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="single-protfolio-content">
                                        <a href="#" className="primary-btn mb-10">Technology</a>
                                        <a href="#" className="protfolio-link">
                                            <h6>VR Is the Use of Computer Technology to Create a Simulated Environment.
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-protfolio-part wow fadeInUp" data-wow-delay=".2s">
                                    <a className="view" href="assets/images/image2.png">
                                        <div className="single-protfolio-img">
                                            <img src={image2} alt="image" />
                                            <div className="overlay">
                                                <span><i className="fa-solid fa-magnifying-glass fa-2xl"></i></span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="single-protfolio-content">
                                        <a href="#" className="primary-btn mb-10">Technology</a>
                                        <a href="#" className="protfolio-link">
                                            <h6>VR Is the Use of Computer Technology to Create a Simulated Environment.
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                                <div className="single-protfolio-part wow fadeInUp" data-wow-delay=".4s">
                                    <a className="view" href="assets/images/image3.png">
                                        <div className="single-protfolio-img">
                                            <img src={image3} alt="image" />
                                            <div className="overlay">
                                                <span> <i className="fa-solid fa-magnifying-glass fa-2xl"></i></span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="single-protfolio-content">
                                        <a href="#" className="primary-btn mb-10">Technology</a>
                                        <a href="#" className="protfolio-link">
                                            <h6>VR Is the Use of Computer Technology to Create a Simulated Environment.
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                                <div className="single-protfolio-part wow fadeInUp" data-wow-delay=".6s">
                                    <a className="view" href="assets/images/image5.png">
                                        <div className="single-protfolio-img">
                                            <img src={image5} alt="image" />
                                            <div className="overlay">
                                                <span> <i className="fa-solid fa-magnifying-glass fa-2xl"></i></span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="single-protfolio-content">
                                        <a href="#" className="primary-btn mb-10">Technology</a>
                                        <a href="#" className="protfolio-link">
                                            <h6>VR Is the Use of Computer Technology to Create a Simulated Environment.
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end Portfolio section --> */}

            {/* <!-- Experiences section --> */}
            <section className="experience-section py-135">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".2s">
                        <div className="section-title mb-60">
                            <span>Years Of Experience</span>
                            <h2>Experience</h2>
                        </div>
                    </div>
                    <div className="single-experience wow fadeInUp pb-40" data-wow-delay=".2s">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="expreance-year">
                                    <h6>2022 - Present</h6>
                                    <h4 className="">Soft Tech Inc.</h4>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="expreance-right">
                                    <h4 className="">Senior Content Developer</h4>
                                    <p>In sed dolor ut ligula malesuada sollicitudin. Morbi iaculis convallis arcu, nec maximus
                                        tellus sodales in. Curabitur blandit enim at nisl lobortis, non pretium enim hendrer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-experience wow fadeInUp" data-wow-delay=".4s">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="expreance-year expreance-year-middle py-40">
                                    <h6>2022 - Present</h6>
                                    <h4 className="">Soft Tech Inc.</h4>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="expreance-border">
                                    <h4 className="">Senior Content Developer</h4>
                                    <p>In sed dolor ut ligula malesuada sollicitudin. Morbi iaculis convallis arcu, nec maximus
                                        tellus sodales in. Curabitur blandit enim at nisl lobortis, non pretium enim hendrer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-experience wow fadeInUp pt-40" data-wow-delay=".6s">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="expreance-year">
                                    <h6>2022 - Present</h6>
                                    <h4 className="">Soft Tech Inc.</h4>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="expreance-right">
                                    <h4 className="">Senior Content Developer</h4>
                                    <p>In sed dolor ut ligula malesuada sollicitudin. Morbi iaculis convallis arcu, nec maximus
                                        tellus sodales in. Curabitur blandit enim at nisl lobortis, non pretium enim hendrer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end Experiences section --> */}

            {/* <!-- Testimonial section --> */}
            <section className="testimonial-section pb-135">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".2s">
                        <div className="section-title mb-60">
                            <span>Clients Experience</span>
                            <h2>Testimonial</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 wow fadeIn" data-wow-delay=".3s">
                            <div className="testimonial-img">
                                <img src={shapes1} alt="image" />
                                <div className="counter1">
                                    <div className="counter-icon item-zooming">
                                        <span><i className="fa-solid fa-calendar-days fa-2xl"></i></span>
                                    </div>
                                    <div className="counter-content">
                                        <h4><span className="counter">100</span>+</h4>
                                        <span>Corporate Clients</span>
                                    </div>
                                </div>
                                <div className="counter2">
                                    <div className="counter-icon item-zooming">
                                        <span><i className="fa-solid fa-award fa-2xl"></i></span>
                                    </div>
                                    <div className="counter-content">
                                        <h4><span className="counter">80</span>+</h4>
                                        <span>Marketing Awards</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="tastimonial-slider">
                                <div className="tastimonial-single-slide">
                                    <p className="main-content">
                                        <span><i className="fa-solid fa-quote-left"></i></span>
                                        It was a pleasure meeting you this past weekend. I appreciate all you shared and can't
                                        wait to review the Ecology of Commerce. I'll come see you again soon! Their website was
                                        easy to use, payment options very good.The estimated delivery window, on the day of my
                                        choice was very accurate, with actual time being updated by tracking my order.
                                        <span><i className="fa-solid fa-quote-right"></i></span>
                                    </p>
                                    <div className="tastimonial-bottom mt-10">
                                        <div className="sap"></div>
                                        <div className="tastimonial-bottom-content">
                                            <h4 className="mb-10">Adam Richman</h4>
                                            <span>CEO, Paperfly</span>
                                            <div className="star">
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tastimonial-single-slide">
                                    <p className="main-content">
                                        <span><i className="fa-solid fa-quote-left"></i></span>
                                        It was a pleasure meeting you this past weekend. I appreciate all you shared and can't
                                        wait to review the Ecology of Commerce. I'll come see you again soon! Their website was
                                        easy to use, payment options very good.The estimated delivery window, on the day of my
                                        choice was very accurate, with actual time being updated by tracking my order.
                                        <span><i className="fa-solid fa-quote-right"></i></span>
                                    </p>
                                    <div className="tastimonial-bottom mt-10">
                                        <div className="sap"></div>
                                        <div className="tastimonial-bottom-content">
                                            <h4 className="mb-10">Adam Richman</h4>
                                            <span>CEO, Paperfly</span>
                                            <div className="star">
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tastimonial-single-slide">
                                    <p className="main-content">
                                        <span><i className="fa-solid fa-quote-left"></i></span>
                                        It was a pleasure meeting you this past weekend. I appreciate all you shared and can't
                                        wait to review the Ecology of Commerce. I'll come see you again soon! Their website was
                                        easy to use, payment options very good.The estimated delivery window, on the day of my
                                        choice was very accurate, with actual time being updated by tracking my order.
                                        <span><i className="fa-solid fa-quote-right"></i></span>
                                    </p>
                                    <div className="tastimonial-bottom mt-10">
                                        <div className="sap"></div>
                                        <div className="tastimonial-bottom-content">
                                            <h4 className="mb-10">Adam Richman</h4>
                                            <span>CEO, Paperfly</span>
                                            <div className="star">
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tastimonial-single-slide">
                                    <p className="main-content">
                                        <span><i className="fa-solid fa-quote-left"></i></span>
                                        It was a pleasure meeting you this past weekend. I appreciate all you shared and can't
                                        wait to review the Ecology of Commerce. I'll come see you again soon! Their website was
                                        easy to use, payment options very good.The estimated delivery window, on the day of my
                                        choice was very accurate, with actual time being updated by tracking my order.
                                        <span><i className="fa-solid fa-quote-right"></i></span>
                                    </p>
                                    <div className="tastimonial-bottom mt-10">
                                        <div className="sap"></div>
                                        <div className="tastimonial-bottom-content">
                                            <h4 className="mb-10">Adam Richman</h4>
                                            <span>CEO, Paperfly</span>
                                            <div className="star">
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                                <span><i className="fa-solid fa-star"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end Testimonial section --> */}
        </>
    )
}