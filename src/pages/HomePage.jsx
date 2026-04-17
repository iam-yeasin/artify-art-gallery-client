import React from "react";
import HeroSlider from "../components/HeroSlider";
import FeaturedArtworks from "../components/FeaturedArtworks";
import TopArtist from "../components/TopArtist";
import CommunityHighlights from "../components/CommunityHighlights";

const HomePage = () => {
  return (
    <div>
      {/* Hero Slider Section */}
      <HeroSlider />
      {/* FeaturedArtworks Section */}
      <FeaturedArtworks/>
      {/* Top Artist Section */}
      <TopArtist/>
      {/* Community Highligths */}
      <CommunityHighlights/>
    </div>
  );
};

export default HomePage;
