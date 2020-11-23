import React from "react";
import MaximizeIcon from "@material-ui/icons/Maximize";
import ImageGallery from "react-image-gallery";
import BottomBar from "../components/BottomBar";

const images = [
  {
    original: require("../assets/slideshow/1.jpg"),
    thumbnail: require("../assets/slideshow/1.jpg"),
  },
  {
    original: require("../assets/slideshow/6.jpg"),
    thumbnail: require("../assets/slideshow/6.jpg"),
  },
  {
    original: require("../assets/slideshow/3.jpg"),
    thumbnail: require("../assets/slideshow/3.jpg"),
  },
  {
    original: require("../assets/slideshow/4.jpg"),
    thumbnail: require("../assets/slideshow/4.jpg"),
  },
  {
    original: require("../assets/slideshow/5.jpg"),
    thumbnail: require("../assets/slideshow/5.jpg"),
  },
];

function Banner() {
  return (
    <div>
      <div className="banner">
        <ImageGallery
          showBullets={true}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
          items={images}
          autoPlay={true}
          slideInterval={5000}
        />
        {/* <div className="bannerInfo">
          <hr className="line-hr" />
          <h5>PUBG MOBILE</h5>
          <h1>DISCOVER BEST SHOOTING GAME OF THE GENERATION</h1>
          <button>See more</button>
        </div> */}
      </div>
      {/* <div className="bannnerNav">
        <div className="bannerNavContent">
          <div className="bannerDetail">
            <h5>Section 1</h5>
            <h3>Play with friends</h3>
          </div>
          <div className="bannerDetail">
            <h5>Section 2</h5>
            <h3>Play with chicken</h3>
          </div>
          <div className="bannerDetail">
            <h5>Section 3</h5>
            <h3>Play with mama</h3>
          </div>
        </div>
      </div> */}
      <div className="quoteBox">
        <h3>
          " Offer something Energy for home with energy storage system which
          smart control in your home "
        </h3>
      </div>
      <div className="homeProductList">
        <div className="listInfoBox">
          <div className="infoBox">
            <h1>Info box</h1>
            <h4>
              Offer something Energy for home with energy storage system which
              smart control in your home.
            </h4>
          </div>
        </div>
        <div className="productListBox">
          <div className="productCard">
            <span className="productTitle">1</span>
          </div>
          <div className="productCard">
            <span className="productTitle">2</span>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default Banner;
