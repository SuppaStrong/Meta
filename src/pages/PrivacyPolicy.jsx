import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const PrivacyPolicy = () => {
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Privacy Policy</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="tf-section post-details">
                <div className="themesflat-container">
                    <div className="wrap-flex-box style">
                        <div className="post">
                            <div className="inner-content">
                                <h2 className="title-post">Our Commitment to Your Privacy</h2>
                                <div className="divider"></div>
                                <div className="inner-post mg-t-40">
                                    <h3 className="heading mg-bt-16">Introduction</h3>
                                    <p className="mg-bt-24">
                                        Welcome to [Your Company Name]. This privacy policy explains how we collect,
                                        use, and protect your personal information when you interact with our website or services.
                                    </p>
                                </div>
                                <div className="inner-post mg-t-22">
                                    <h3 className="heading mg-bt-16">Information We Collect</h3>
                                    <ul>
                                        <li>Personal identification information (Name, email address, phone number, etc.)</li>
                                        <li>Usage data and analytics about your interaction with our website.</li>
                                        <li>Cookies and other tracking technologies to enhance your experience.</li>
                                    </ul>
                                </div>
                                <div className="inner-post mg-t-22">
                                    <h3 className="heading mg-bt-16">How We Use Your Information</h3>
                                    <ul>
                                        <li>Provide and improve our services.</li>
                                        <li>Communicate with you regarding updates or support.</li>
                                        <li>Ensure compliance with legal obligations.</li>
                                    </ul>
                                </div>
                                <div className="inner-post mg-t-22">
                                    <h3 className="heading mg-bt-16">Sharing Your Information</h3>
                                    <p>We do not sell or share your information with third parties, except as necessary to:</p>
                                    <ul>
                                        <li>Comply with the law or regulatory requirements.</li>
                                        <li>Protect our legal rights.</li>
                                        <li>Provide services through trusted partners or vendors.</li>
                                    </ul>
                                </div>
                                <div className="inner-post mg-t-22">
                                    <h3 className="heading mg-bt-16">Your Rights</h3>
                                    <ul>
                                        <li>Access, update, or delete your personal information.</li>
                                        <li>Opt-out of receiving marketing communications.</li>
                                        <li>Request a copy of your data or restrict its processing.</li>
                                    </ul>
                                </div>
                                <div className="inner-post mg-t-22">
                                    <h3 className="heading mg-bt-16">Contact Us</h3>
                                    <p>If you have any questions about this privacy policy, you can contact us at:</p>
                                    <p>
                                        Email: <a href="mailto:support@yourcompany.com">support@yourcompany.com</a> <br />
                                        Phone: +1234567890
                                    </p>
                                </div>
                                <div className="inner-post mg-t-22">
                                    <h3 className="heading mg-bt-16">Changes to This Policy</h3>
                                    <p>
                                        We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="side-bar details">
                            <div className="widget widget-tag style-1">
                                <h3 className="title-widget mg-bt-23">Related Links</h3>
                                <ul>
                                    <li><a href="/terms-of-service" className="box-widget-tag">Terms of Service</a></li>
                                    <li><a href="/contact-us" className="box-widget-tag">Contact Us</a></li>
                                    <li><a href="/faq" className="box-widget-tag">FAQ</a></li>
                                </ul>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
