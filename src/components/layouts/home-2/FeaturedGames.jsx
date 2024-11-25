import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import CardModal from "../CardModal";
import GameModel from "../../../utils/GameModel";
import img1 from "../../../assets/images/box-item/card-item-3.jpg";

const FeaturedGames = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(8);
  const [modalShow, setModalShow] = useState(false);
  const [showAllGames, setShowAllGames] = useState(false);

  const fetchData = async () => {
    try {
      const fetchedData = await GameModel.getGames();
      console.log(fetchedData);
      setData(fetchedData);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  // Filter featured games or all games based on state
  const displayGames = showAllGames
    ? data
    : data.filter((item) => item.isFeatureGames && item.isFeatureGames.toLowerCase() === "yes");

  return (
    <Fragment>
      <section className="tf-section today-pick">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-live-auctions mg-bt-21">
                <h2
                  className={`tf-title pb-18 ${!showAllGames ? "active" : ""}`}
                  onClick={() => {
                    setShowAllGames(false);
                    setVisible(8);
                  }}
                >
                  Feature Games
                </h2>
                <h2
                  className={`exp style2 ${showAllGames ? "active" : ""}`}
                  onClick={() => {
                    setShowAllGames(true);
                    setVisible(8);
                  }}
                >
                  All Games
                </h2>
              </div>
            </div>
            {error && <p>Error: {error}</p>}
            {displayGames.slice(0, visible).map((item, index) => (
              <div key={index} className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className={`sc-card-product ${item.isFeatureGames.toLowerCase() === "yes" ? "comingsoon" : ""} explode style2 mg-bt`}>
                  <div className="card-media">
                 { item.isFeatureGames.toLowerCase() === "yes" && <div className="coming-soon">Feature Games</div>}
                    <img src={item.appImage?.node?.mediaItemUrl || img1} alt={item.appName || "App"} />

                    <div
                      className="button-place-bid"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <a
                        href={item.androidLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sc-button style-place-bid style bag fl-button pri-3"
                        style={{ width: "150px", textAlign: "left" }}
                      >
                        <span style={{ display: "inline-block", width: "100%" }}>Android</span>
                      </a>
                      <a
                        href={item.iosLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sc-button style-place-bid style bag fl-button pri-3"
                        style={{ width: "150px", textAlign: "left" }}
                      >
                        <span style={{ display: "inline-block", width: "100%" }}>iOS</span>
                      </a>
                    </div>
                  </div>
                  <div className="card-title">
                    <h5>{item.appName || "Untitled App"}</h5>
                  </div>
                  <div className="meta-info">
                  </div>
                </div>
              </div>
            ))}
            {visible < displayGames.length && (
              <div className="col-md-12 wrap-inner load-more text-center">
                <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}>
                  <span>Load More</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

export default FeaturedGames;
