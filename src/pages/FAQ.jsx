import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Accordion } from 'react-bootstrap-accordion'

const FAQ = () => {
    const [data] = useState(
        [
            {   key: "0",
                show: "show",
                title: 'Where can I find your games?',
                text: (
                    <span>
                        You can find our games on{' '}
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                            App Store
                        </a>{' '}
                        and on{' '}
                        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                            Google Play Store
                        </a>.
                    </span>
                )
            },
            {
                key: "1",
                title: 'I’m a game developer. Will you publish my game?',
                text: (
                    <span>
                        We’d love to work with you!{' '}
                        <Link to="/publishing" style={{ color: 'blue' }}>
                            Send us a note here 
                        </Link>{' '} with details about your game(s) and we’ll get in touch..
                    </span>
                )
            },
            {
                key: "2",
                title: 'I play your games. How can I share feedback or report a bug?',
                text: 'You can send feedback, bug reports, fan mail, and more on our Contact page. We love hearing from our players!'
            },
            {
                key: "3",
                title: 'I want to work at Lion Studios.',
                text: 'We’re hiring! Check out available openings under “Lion Studios” on our Jobs page.'
            },
            {
                key: "4",
                title: 'I made an accidental purchase in one of your games. How can I request a refund?',
                text: "iOS - App Store \n Please visit the Report a Problem page on Apple’s website, and sign in with your Apple ID. Once you’ve signed in, click “Apps” and then “Report a Problem” next to the purchase you would like a refund for. \n Android - Google Play Store \n If you would like a refund for a purchase made on an Android device, please refer to this page."
            },
        ]
    )
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">FAQ</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <section className="tf-section wrap-accordion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                                How can we help?
                            </h2>
                            <h5 className="sub-title help-center mg-bt-32 ">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                            </h5>
                        </div>
                        <div className="col-md-12">
                            <div className="flat-accordion2">
                                {
                                    data.map((item,index) => (
                                        <Accordion key={index} title={item.title} >
                                            <p>{item.text}</p>
                                        </Accordion>
                                    ))
                                }                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default FAQ;
