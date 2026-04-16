import React from "react";
import HeroSlider from "../components/HeroSlider";
import FeaturedArtworks from "../components/FeaturedArtworks";
import TopArtist from "../components/TopArtist";

const HomePage = () => {
  return (
    <div>
      {/* Hero Slider Section */}
      <HeroSlider />
      {/* FeaturedArtworks Section */}
      <FeaturedArtworks/>
      <TopArtist/>
    </div>
  );
};

export default HomePage;
