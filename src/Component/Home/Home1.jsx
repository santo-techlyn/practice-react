import { useEffect } from 'react';
import img from '../../assets/images/logo.png';
import vector2 from '../../assets/images/vector2.png';
import vector3 from '../../assets/images/vector3.png';
import vector4 from '../../assets/images/vector4.png';
import illustration2 from '../../assets/images/illustration2.png';
import illustration3 from '../../assets/images/illustration3.png';
import illustration4 from '../../assets/images/illustration4.png';
import illustration5 from '../../assets/images/illustration5.png';
import image5 from '../../assets/images/image5.png';
import image3 from '../../assets/images/image3.png';
import image2 from '../../assets/images/image2.png';
import image4 from '../../assets/images/image4.png';
import image1 from '../../assets/images/image1.png';
import image from '../../assets/images/image.png';
import shape1 from '../../assets/images/shape1.png';
import shapes1 from '../../assets/images/shapes1.png';
import image8 from '../../assets/images/image8.png';
import image7 from '../../assets/images/image7.png';
import image6 from '../../assets/images/image6.png';
import logo2 from '../../assets/images/logo2.png';
import WOW from 'wowjs';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from 'react-countup';

const slider = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

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
                                    <li className="has-submenu wow fadeInDown" data-wow-delay=".4s"><a href="/">home</a>
                                        <ul className="submenu">
                                            <li><a href="index.html">home 01</a></li>
                                            <li><a href="home-2.html">home 02</a></li>
                                            <li><a href="home-3.html">home 03</a></li>
                                        </ul>
                                    </li>
                                    <li className="wow fadeInDown" data-wow-delay=".6s"><a href="/about">about</a></li>
                                    <li className="wow fadeInDown" data-wow-delay=".8s"><a href="/services">services</a></li>
                                    <li className="wow fadeInDown" data-wow-delay="1s"><a href="/blog">blog</a></li>
                                    <li className="wow fadeInDown" data-wow-delay="1.2s"><a href="/contact">contact</a></li>
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

            {/* <!-- Experiences sectclassName=ion --> */}
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
                                        <CountUp start={0} end={100} delay={1}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <h4><span ref={countUpRef} className="counter">100</span>+</h4>
                                                </div>
                                            )}
                                        </CountUp>
                                        <span>Corporate Clients</span>
                                    </div>
                                </div>
                                <div className="counter2">
                                    <div className="counter-icon item-zooming">
                                        <span><i className="fa-solid fa-award fa-2xl"></i></span>
                                    </div>
                                    <div className="counter-content">
                                        <CountUp start={0} end={80} delay={1}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <h4><span ref={countUpRef} className="counter"></span>+</h4>
                                                </div>
                                            )}
                                        </CountUp>
                                        <span>Marketing Awards</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <Slider className="tastimonial-slider" {...slider}>
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
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end Testimonial section --> */}

            {/* <!-- map section --> */}
            <section className="map-section pb-135">
                <div className="container-fluid px-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20648.23516736163!2d90.34787583008212!3d23.814090504521396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12705c24be9%3A0xd85f468cb5707b96!2sMirpur%206%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1720081035488!5m2!1sen!2sbd"
                        width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>

                    <div className="map-form">
                        <h4>Get In Touch</h4>
                        <form action="#">
                            <input placeholder="Your Name" type="text" name="name" />
                            <input placeholder="Your Email Address" type="email" name="email" />
                            <input placeholder="Subject" type="text" name="subject" />
                            <textarea name="message" placeholder="Message"></textarea>
                            <button className="primary-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- end map section --> */}

            {/* <!-- blog section --> */}
            <section className="blog-section py-135">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".2s">
                        <div className="section-title mb-60">
                            <span>Latest & Greatest</span>
                            <h2>Blogs</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay=".2s">
                            {/* <!-- Card1 --> */}
                            <div className="single-blog">
                                <div className="blog-img">
                                    <img src={image6} className="card-img-top" alt="image" />
                                    <div className="blog-btn">
                                        <a href="#" className="primary-btn">Branding</a>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <a className="blog-date" href="#">
                                        <span>April 01 , 2022</span>
                                    </a>
                                    <a href="#" className="title-link">
                                        <h6 className="blog-title my-20">The best Marketing Strategy for every Company</h6>
                                    </a>
                                    <p className="blog-text pt-20">One may not need charts and graphs at this point to know that, in
                                        the past couple of years especially, the buying and selling o...</p>
                                    <a href="#" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay=".4s">
                            {/* <!-- Card1 --> */}
                            <div className="single-blog">
                                <div className="blog-img">
                                    <img src={image7} className="card-img-top" alt="image" />
                                    <div className="blog-btn">
                                        <a href="#" className="primary-btn">Branding</a>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <a className="blog-date" href="#">
                                        <span>April 01 , 2022</span>
                                    </a>
                                    <a href="#" className="title-link">
                                        <h6 className="blog-title my-20">The best Marketing Strategy for every Company</h6>
                                    </a>
                                    <p className="blog-text pt-20">One may not need charts and graphs at this point to know that, in
                                        the past couple of years especially, the buying and selling o...</p>
                                    <a href="#" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
                            {/* <!-- Card1 --> */}
                            <div className="single-blog">
                                <div className="blog-img">
                                    <img src={image8} className="card-img-top" alt="image" />
                                    <div className="blog-btn">
                                        <a href="#" className="primary-btn">Branding</a>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <a className="blog-date" href="#">
                                        <span>April 01 , 2022</span>
                                    </a>
                                    <a href="#" className="title-link">
                                        <h6 className="blog-title my-20">The best Marketing Strategy for every Company</h6>
                                    </a>
                                    <p className="blog-text pt-20">One may not need charts and graphs at this point to know that, in
                                        the past couple of years especially, the buying and selling o...</p>
                                    <a href="#" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end blog section --> */}

            {/* <!-- footer section --> */}
            <section className="footer-section py-135">
                <img className="footer-shape item-rotate" src={shape1} alt="image" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="footer-img">
                                <img src={logo2} alt="image" />
                                <h2 className="">anderson@support.com</h2>
                                <ul className="footer-icons">
                                    <li><a href="#"><span><i className="fa-brands fa-twitter"></i></span></a></li>
                                    <li><a href="#"><span><i className="fa-brands fa-dribbble"></i></span></a></li>
                                    <li><a href="#"><span><i className="fa-brands fa-behance"></i></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1 offset-xl-0">
                            <div className="footer-address">
                                <h5>New York</h5>
                                <span className="mt-10">523 Sylvan Ave, 5th Floor Mountain View, CA 94041USA</span>
                                <h5 className="mt-20">Qubec</h5>
                                <span>7140 Wehner Tunnel Washington, D.C</span>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-contact">
                                <h5>Phone</h5>
                                <span className="mt-10">+1 234 719 8948 <br /> +1 987 654 3210</span>
                                <h5 className="mt-20">Mail</h5>
                                <span>Interested to contact? anderson@support.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end footer section --> */}
        </>
    )
}