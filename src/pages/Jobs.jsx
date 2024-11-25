import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import { getPageByTitle } from "../utils/SlugUtils";
import Header from "../components/header/Header";
import PageWordPressContentRender from "./[...slug]";
const Jobs = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPageByTitle("jobs");
        if (data) {
          setPageData(data);
        }
      } catch (error) {
        console.error("Error fetching Jobs page data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="jobs-page">
      <Header />
      {/* <section
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
                <h1 className="heading text-center">Jobs</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Jobs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="wrap-accordion">
        {pageData?.content ? <PageWordPressContentRender pageData={pageData.content} /> : <p>Loading content...</p>}
      </section>
      <div className="tf-section sc-card-blog dark-style2">
        <div className="themesflat-container"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
