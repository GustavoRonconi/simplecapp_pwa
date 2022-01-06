import React, { useState, useEffect } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';
import {LOGIN} from '../../../routes/routes'
import {logout} from '../../../auth/auth'
import jwt from 'jwt-decode'
import sendRegister from '../../../services/apiServices';


const Ava = `${process.env.PUBLIC_URL}/images/ava.png`;

const TopbarProfile = ({ }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleProfile = () => {
    setIsCollapsed(!isCollapsed);
  };

   
  // const logout = () => {
  //   localStorage.removeItem('easydev');
  //   logoutAuth0();
  // };

  // {jwt(sessionStorage.getItem("token")).name}


  return (
    <div className="topbar__profile">
      <button type="button" className="topbar__avatar" onClick={toggleProfile}>
        <img className="topbar__avatar-img" src={Ava} alt="avatar" />
        <p className="topbar__avatar-name">{jwt(sessionStorage.getItem("token")).email}</p>
        <DownIcon className="topbar__icon" />
      </button>
      {isCollapsed && (
        <button
          type="button"
          aria-label="button collapse"
          className="topbar__back"
          onClick={toggleProfile}
        />
      )}
      <Collapse isOpen={isCollapsed} className="topbar__menu-wrap">
        <div className="topbar__menu">
          <TopbarMenuLink title="Page one" icon="list" path="/pages/one" />
          <TopbarMenuLink title="Page two" icon="inbox" path="/pages/two" />
          <div className="topbar__menu-divider" />
          <TopbarMenuLink title="Sair" icon="exit" path={LOGIN} onClick={logout}/>
        </div>
      </Collapse>
    </div>
  );
};

export default TopbarProfile;
