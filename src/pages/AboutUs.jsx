import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PageWordPressContentRender from "./[...slug]";
import { getPageByTitle } from "../utils/SlugUtils";
import tempBGImage from "../assets/images/backgroup-secsion/img_bg_page_title.jpg";

const AboutUs = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPageByTitle("about us");
        console.log(data.headerImage.headerImage.node.mediaItemUrl);
        setPageData(data);
      } catch (error) {
        console.error("Error fetching Jobs page data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="authors-2">
      <Header />
      <section
        className="inner"
        style={{
          backgroundImage: `url(${pageData?.headerImage?.headerImage?.node?.mediaItemUrl ?? tempBGImage})`,
          position: "relative",
          backgroundSize: "cover",
          padding: "100px 0 300px",
        }}
      >
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">About Us</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap-accordion">
        <PageWordPressContentRender pageData={pageData?.content ?? ""} />
      </section>
      <div className="tf-section sc-card-blog dark-style2">
        <div className="themesflat-container"></div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
