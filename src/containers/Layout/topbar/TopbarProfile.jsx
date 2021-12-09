import React, { useState } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';
// import jwt from 'jwt-decode'
import {LOGIN} from '../../../routes/routes'
import {logout} from '../../../auth/auth'

const Ava = `${process.env.PUBLIC_URL}/images/ava.png`;

const TopbarProfile = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  //{jwt(sessionStorage.getItem("token")).email}

  return (
    <div className="topbar__profile">
      <button type="button" className="topbar__avatar" onClick={handleToggleCollapse}>
        <img className="topbar__avatar-img" src={Ava} alt="avatar" />
        <p className="topbar__avatar-name">Nome usuario</p>
        <DownIcon className="topbar__icon" />
      </button>
      {isCollapsed && (
        <button
          type="button"
          aria-label="button collapse"
          className="topbar__back"
          onClick={handleToggleCollapse}
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
