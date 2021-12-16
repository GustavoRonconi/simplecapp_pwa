import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';
import TopbarNotification from './TopbarNotification';





const Topbar = ({ changeMobileSidebarVisibility, changeSidebarVisibility }) => (
  <div className="topbar">
    <div className="topbar__wrapper">
      <div className="topbar__left">
        <TopbarSidebarButton
          onClickMobile={changeMobileSidebarVisibility}
          onClickDesktop={changeSidebarVisibility}
        />
        <Link className="topbar__logo" to="/">
          <img src='images/simpleCappLogoAmarelo.png' alt='topbarLogo' size={30}/>
          </Link>
      </div>
      <div className="topbar__right">
        <TopbarNotification/>
        <TopbarProfile />
      </div>
    </div>
  </div>
);

Topbar.propTypes = {
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
};

export default Topbar;
