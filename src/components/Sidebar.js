import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="shadow-md m-2 w-80">
      <ul>
        <Link to="/">
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://cdn-icons-png.flaticon.com/256/1946/1946488.png"
          />
          <span className="my-auto ml-7 text-lg"> Home </span>
        </li>
        </Link>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://freelogopng.com/images/all_img/1685029929youtube-shorts-logo-black.png"
          />
          <span className="my-auto ml-7 text-lg"> Shorts </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/565/565285.png"
          />
          <span className="my-auto ml-7 text-lg"> Subscriptions </span>
        </li>
      </ul>
      <div className="border border-gray-200 w-100 mx-4"></div>
      <ul>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/565/565290.png"
          />
          <span className="my-auto ml-7 text-lg"> Library </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://w7.pngwing.com/pngs/988/206/png-transparent-computer-icons-history-icon-design-time-angle-text-logo-thumbnail.png"
          />
          <span className="my-auto ml-7 text-lg"> History </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://icon-library.com/images/youtube-video-icon-png/youtube-video-icon-png-27.jpg"
          />
          <span className="my-auto ml-7 text-lg"> Your videos </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="35"
            height="35"
            alt=""
            src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-watch-later_90421.png"
          />
          <span className="my-auto ml-7 text-lg"> Watch later </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://e7.pngegg.com/pngimages/845/786/png-clipart-computer-icons-like-button-thumb-signal-facebook-like-hand-logo.png"
          />
          <span className="my-auto ml-7 text-lg"> Liked videos </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://static.thenounproject.com/png/3320226-200.png"
          />
          <span className="my-auto ml-7 text-lg"> Show more </span>
        </li>
      </ul>
      <div className="border border-gray-200 w-100 mx-4"></div>
      <h1 className="ml-5 my-2 ring-gray-400 text-xl ">Explore</h1>
      <ul>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://icon-library.com/images/trending-icon/trending-icon-2.jpg"
          />
          <span className="my-auto ml-7 text-lg"> Trending </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://w7.pngwing.com/pngs/143/126/png-transparent-totebag-bag-shopping-case-bag-icon-thumbnail.png"
          />
          <span className="my-auto ml-7 text-lg"> Shopping </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://w7.pngwing.com/pngs/22/217/png-transparent-computer-icons-music-musik-rectangle-beat-symbol-thumbnail.png"
          />
          <span className="my-auto ml-7 text-lg"> Music </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://illustoon.com/photo/7627.png"
          />
          <span className="my-auto ml-7 text-lg"> Movies </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://png.pngitem.com/pimgs/s/499-4997072_buzzer-icon-png-png-download-transparent-live-icon.png"
          />
          <span className="my-auto ml-7 text-lg"> Live </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-gaming-4627159-3853350.png"
          />
          <span className="my-auto ml-7 text-lg"> Gaming </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://e7.pngegg.com/pngimages/282/151/png-clipart-computer-icons-newspaper-journalism-scalable-graphics-news-ico-cdr-text-thumbnail.png"
          />
          <span className="my-auto ml-7 text-lg"> News </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://e7.pngegg.com/pngimages/1/774/png-clipart-trophy-award-computer-icons-trophy-cdr-eps.png"
          />
          <span className="my-auto ml-7 text-lg"> Sports </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://www.freeiconspng.com/thumbs/bulb-off-icon/light-bulb-off-power-off-icon-17.png"
          />
          <span className="my-auto ml-7 text-lg"> Learning </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/518/518964.png"
          />
          <span className="my-auto ml-7 text-lg"> Fashion & Beauty </span>
        </li>
        <li className="flex m-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
          <img
            width="30"
            height="30"
            alt=""
            src="https://www.freeiconspng.com/thumbs/podcast-icon/podcast-icon-6.png"
          />
          <span className="my-auto ml-7 text-lg"> Podcasts </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
