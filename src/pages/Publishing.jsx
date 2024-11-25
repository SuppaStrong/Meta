import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import img1 from "../assets/images/blog/thumb-8.png";
import HowWeHelp from "../components/layouts/HowWeHelp";
import logodark from "../assets/images/logo/logo_dark.png";
import logodark2x from "../assets/images/logo/logo_dark@2x.png";

const Publishing = () => {
  const [videoSrc, setVideoSrc] = useState(null); 
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const updateVideoSource = () => {
      setVideoSrc("../assets/videos/remote.mp4"); 
    };
    updateVideoSource();
    
  }, []);

  const handleModalToggle = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <div>
      <Header />
      {/* Optimized Video Section */}
      <section style={{ position: "relative", height: "82vh", overflow: "hidden" }}>
        {videoSrc ? ( 
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            preload="metadata"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              fontSize: "20px",
            }}
          >
            Loading video...
          </div>
        )}

        <div className="swiper-container mainslider home">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="slider-item">
                <div className="themesflat-container">
                  <div className="wrap-heading flat-slider flex">
                    <div className="content">
                      <h2 style={{ color: "black", paddingTop: "100px" }}>Publishing</h2>
                      <h1 className="mg-bt-20 mg-t-20" style={{ color: "#fff" }}>
                        Digital Publishing Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </h1>
                      <div className={"flex style2"}>
                        <button
                          onClick={handleModalToggle}
                          className="sc-button header-slider style style-1 rocket fl-button pri-1"
                        >
                          <span>SUBMIT YOUR GAME</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="../assets/images/bottom-white.svg"
          alt="Axies"
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "90px",
            display: "block",
            zIndex: 1,
          }}
        />
      </section>

      {isModalVisible && (
        <div
          className="modal-overlay"
          onClick={handleModalToggle}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        >
          <div
            className="modal-content"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "5px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
              width: "100%",
              maxWidth: "800px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleModalToggle}
              className="close-dialog"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                fontSize: "24px",
                color: "#333",
                cursor: "pointer",
                padding: "5px",
                borderRadius: "50%",
              }}
            >
              x
            </button>
            {/* Modal form content (unchanged) */}
            <div className="themesflat-container">
              <img
                className="logo-dark"
                id="logo_header"
                src={logodark}
                srcSet={`${logodark2x}`}
                alt="nft-gaming"
              />
              {/* Add your form structure here */}
            </div>
            <button className="submit">Send message</button>
          </div>
        </div>
      )}

      {/* Remaining content (unchanged) */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontWeight: "bold",
              lineHeight: "1.6",
              marginBottom: "20px",
            }}
          >
            Meta Studios is a mobile games publishing studio based in Palo Alto, California with offices across the
            globe. <span style={{ color: "red" }}>Our mission is to publish fun, entertaining games </span>that are
            played by people all over the world.
          </h2>
          <p
            style={{
              color: "#555",
              lineHeight: "1.8",
              margin: "0 auto",
              maxWidth: "900px",
            }}
          >
            Our team of gamers, designers, developers, and analysts partner with you through every step of the game
            development process.
          </p>
        </div>
      </section>
      <HowWeHelp />
      <section className="tf-contact tf-section">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="box-feature-contact">
                <img src={img1} alt="Axies" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h2 className="tf-title-heading style-2 mg-bt-12">Drop Up A Message</h2>
              <h5 className="sub-title style-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste
                ipsum officiis deleniti asperiores sit.
              </h5>
              <div className="form-inner">
                <form id="contactform" noValidate="novalidate" className="form-submit">
                  <input
                    id="name"
                    name="name"
                    tabIndex="1"
                    aria-required="true"
                    type="text"
                    placeholder="Your Full Name"
                    required
                  />
                  <input
                    id="email"
                    name="email"
                    tabIndex="2"
                    aria-required="true"
                    type="email"
                    placeholder="Your Email Address"
                    required
                  />
                  <div className="row-form style-2" id="subject">
                    <select>
                      <option value="1">Select subject</option>
                      <option value="2">Select subject</option>
                      <option value="3">Select subject</option>
                    </select>
                    <i className="icon-fl-down"></i>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    tabIndex="3"
                    aria-required="true"
                    required
                    placeholder="Message"
                  ></textarea>
                  <button className="submit">Send message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Publishing;
