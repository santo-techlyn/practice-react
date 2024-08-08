import img from '../../assets/images/logo.png';
import vector2 from '../../assets/images/vector2.png';
import vector3 from '../../assets/images/vector3.png';
import vector4 from '../../assets/images/vector4.png';
import illustration2 from '../../assets/images/illustration2.png';
import illustration3 from '../../assets/images/illustration3.png';
import WOW from 'wowjs';
import { useEffect } from 'react';
import logo2 from '../../assets/images/logo2.png';
import shape1 from '../../assets/images/shape1.png';


export default function About() {
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