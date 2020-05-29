import React, { useState } from 'react'
import { Segment, Grid, Header, Icon } from 'semantic-ui-react';
import '../css/Popup.scss'

export const Popup = () => {

  const [isShown, setIsShown] = useState(false);

  const handleToggleButtonClick = () => {
    setIsShown(true)
  };

  const handleCloseButtonClick = () => {
    setIsShown(false)
  };

  return (
<div className="popup-menu-container">
      <button onClick={handleToggleButtonClick}>
        Toggle Menu
      </button>
      <div className={`popup-menu ${isShown ? 'shown' : ''}`}>
        <div>adsf</div>
        <button onClick={handleCloseButtonClick}>
          Close Menu
        </button>
    </div>
    </div> 
  );
};
