import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import FeaturedGames from "../components/layouts/home-2/FeaturedGames";
import { getPageByTitle } from "../utils/SlugUtils";
import PageWordPressContentRender from "./[...slug]";

const Home = () => {
  const [data, setPageData] = useState(() => {
    const cachedData = localStorage.getItem("homePageData");
    return cachedData ? JSON.parse(cachedData) : null;
  });

  const [isDataLoaded, setIsDataLoaded] = useState(Boolean(data));

  useEffect(() => {
    const fetchData = async () => {
      if (isDataLoaded) return;

      try {
        const data = await getPageByTitle("home");
        console.warn(data);
        if (data) {
          localStorage.setItem("homePageData", JSON.stringify(data));
          setPageData(data);
        }
      } catch (error) {
        console.error("Error fetching Home page data:", error);
      } finally {
        setIsDataLoaded(true);
      }
    };

    fetchData();
  }, [isDataLoaded]);

  return (
    <div className="home-1">
      <Header />
      <section className="wrap-accordion">
        {data?.content ? <PageWordPressContentRender pageData={data.content} /> : <p>Loading...</p>}
      </section>
      <FeaturedGames />
      <Footer />
    </div>
  );
};

export default Home;
