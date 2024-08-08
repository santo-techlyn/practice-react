export default function Header() {
    return (
        <div>
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
        </div>
    )
}