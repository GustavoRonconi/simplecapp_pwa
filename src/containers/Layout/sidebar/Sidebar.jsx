import React from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SidebarContent from './SidebarContent';
import { SidebarProps } from '../../../shared/prop-types/ReducerProps';


const Sidebar = ({
  changeToDark, changeToLight, changeMobileSidebarVisibility, sidebar, topNavigation, sidebarShow, sidebarCollapse,
}) => {
  const sidebarClass = classNames({
    sidebar: true,
    'sidebar--show': sidebarShow,
    'sidebar--no-desktop': topNavigation,
    'sidebar--collapse': !topNavigation && sidebarCollapse,
  });

  return (
    <div className={sidebarClass}>
      <button
        className="sidebar__back"
        type="button"
        aria-label="change mobile sidebar visibility button"
        onClick={changeMobileSidebarVisibility}
      />
      <Scrollbar className="sidebar__scroll scroll">
        {!topNavigation && (
          <div className="sidebar__wrapper sidebar__wrapper--desktop">
            <SidebarContent
              changeToDark={changeToDark}
              changeToLight={changeToLight}
              sidebarCollapse={sidebarCollapse}
            />
          </div>
        )}
        <div className="sidebar__wrapper sidebar__wrapper--mobile">
          <SidebarContent
            onClick={changeMobileSidebarVisibility}
            changeToDark={changeToDark}
            changeToLight={changeToLight}
          />
        </div>
      </Scrollbar>
    </div>
  );
};

Sidebar.propTypes = {
  sidebar: SidebarProps.isRequired,
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
  topNavigation: PropTypes.bool.isRequired,
};

export default Sidebar;
