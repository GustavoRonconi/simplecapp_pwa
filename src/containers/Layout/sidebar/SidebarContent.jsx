import React from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import {LOGIN, SOBRE, SERVICOS, DOCUMENTATION, HOME} from '../../../routes/routes'


const SidebarContent = ({
  onClick, changeToLight, changeToDark, sidebarCollapse,
}) => (
  <div className="sidebar__content">
     <ul className="sidebar__block">
      <SidebarLink
        title="Home"
        icon="text-align-justify"
        route={HOME}
        
      />
    </ul>

    <ul className="sidebar__block">
      <SidebarCategory title="SimpleCapp" icon="diamond" sidebarCollapse={sidebarCollapse}>
        <SidebarLink title="Sobre" route={SOBRE} />      
        <SidebarCategory title="Empresa" sidebarCollapse={sidebarCollapse}>
        <SidebarLink title="Serviços" route={SERVICOS}  />
        </SidebarCategory>
      </SidebarCategory>
     
    </ul>
    <ul className="sidebar__block">
        <SidebarLink 
        title="Log Out" 
        icon="exit" 
        route={LOGIN}/>
      </ul>
    <ul className="sidebar__block">
      <SidebarLink
        title="Documentation"
        icon="text-align-justify"
        route={DOCUMENTATION}/>
    </ul>

  </div>
);

SidebarContent.propTypes = {
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  sidebarCollapse: PropTypes.bool,
};

SidebarContent.defaultProps = {
  sidebarCollapse: false,
  onClick: () => {},
};

export default SidebarContent;
