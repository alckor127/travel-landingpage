import React, { useContext } from "react";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { AppContext } from "../../contexts";
// navs config
import { navs } from "../../routes";

const Sidebar = () => {
  const { sidebarShow, setSidebarShow, minimize, setMinimize } =
    useContext(AppContext);

  return (
    <CSidebar
      // breakpoint="md"
      show={sidebarShow}
      onShowChange={(val) => setSidebarShow(val)}
      minimize={minimize}
      onMinimizeChange={(val) => setMinimize(val)}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navs}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default Sidebar;
