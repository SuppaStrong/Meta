import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import DarkMode from './DarkMode';
import logoheader from '../../assets/images/logo/logo.png';
import logodark from '../../assets/images/logo/logo_dark.png';
import HeaderModel from '../../utils/HeaderModel';
import { getPathNameFromUrl } from '../../utils/SlugUtils';

const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const menuLeft = useRef(null);
    const btnToggle = useRef(null);

    const [menus, setMenus] = useState([]);
    const [headerLogo, setHeaderLogo] = useState(""); 
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                const headerData = await HeaderModel.getHeaderData();
                setMenus(headerData.headerMenuItems);
                setHeaderLogo(headerData.siteLogoUrl);
            } catch (error) {
                console.error("Error fetching header data:", error);
            }
        };

        fetchHeaderData();
    }, []);

    // Sticky header on scroll
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = () => {
        const header = document.querySelector('.js-header');
        const scrollTop = window.scrollY;
        scrollTop >= 300 ? header.classList.add('is-fixed') : header.classList.remove('is-fixed');
        scrollTop >= 400 ? header.classList.add('is-small') : header.classList.remove('is-small');
    };

    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
        btnToggle.current.classList.toggle('active');
    };

    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <header id="header_main" className="header_1 js-header" ref={headerRef}>
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="site-header-inner">
                            <div className="wrap-box flex">
                                <div id="site-logo" className="clearfix">
                                    <div id="site-logo-inner">
                                        <Link to="/" rel="home" className="main-logo">
                                            <img className='logo-dark' id="logo_header" src={headerLogo || logodark} alt="logo" />
                                            <img className='logo-light' id="logo_header" src={headerLogo || logoheader} alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="mobile-button" ref={btnToggle} onClick={menuToggle}><span></span></div>
                                <nav id="main-nav" className="main-nav" ref={menuLeft}>
                                    <ul id="menu-primary-menu" className="menu">
                                        {
                                            menus.map((data, index) => (
                                                <li key={index} onClick={() => handleOnClick(index)} className={`menu-item ${data.children.length > 0 ? 'menu-item-has-children' : ''} ${activeIndex === index ? 'active' : ''}`}>
                                                    <Link to={getPathNameFromUrl(data.url)}>{data.title}</Link>
                                                    {
                                                        data.children.length > 0 &&
                                                        <ul className="sub-menu">
                                                            {
                                                                data.children.map((submenu, subIndex) => (
                                                                    <li key={subIndex} className={pathname === submenu.url ? "menu-item current-item" : "menu-item"}>
                                                                        <Link to={submenu.url}>{submenu.title}</Link>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    }
                                                </li>
                                            ))
                                            
                                        }
                                    </ul>
                                </nav>
                                <div className="flat-search-btn flex">
                                    <div className="sc-btn-top mg-r-12" id="site-header">
                                        <Link to="/contact-us" className="sc-button header-slider style style-1 wallet fl-button pri-1"><span>SUBMIT YOUR GAME</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DarkMode />
        </header>
    );
}

export default Header;
