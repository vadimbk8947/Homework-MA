import React, { useState } from "react";
import App, from './App.js'

const AdContainer = () => {
  return (
    <div className="ad-logic">
      <input
        className="input"
        type="checkbox"
        checked={isShowAd}
        onChange={() => setIsShowAd(!isShowAd)}
      />

      {isShowAd && (
        <img
          className="img"
          src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/06/931/524/iStock-Reticulated-pythons.jpg?ve=1&tl=1"
          alt="ad"
        />
      )}
    </div>
  );
};

export default AdContainer;
