import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CImg,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { AppContext, AuthContext } from "../../contexts";
import { AuthAction } from "../../redux/actions";
// routes config
import { routes } from "../../routes";

const Header = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { sidebarShow, setSidebarShow } = useContext(AppContext);
  const { removeSession } = useContext(AuthContext);

  const logout = () => {
    dispatch(AuthAction.logout())
      .then((res) => {
        if (res) {
          removeSession();
          history.push("/");
        }
      })
      .catch((err) => console.log("Layout > Default > Header > logout()", err));
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={() =>
          setSidebarShow(
            [true, "responsive"].includes(sidebarShow) ? true : "responsive"
          )
        }
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={() =>
          setSidebarShow(
            [true, "responsive"].includes(sidebarShow) ? false : "responsive"
          )
        }
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto"></CHeaderNav>

      <CHeaderNav className="px-3">
        <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
          <CDropdownToggle className="c-header-nav-link" caret={false}>
            <div className="c-avatar">
              <CImg
                src={
                  "https://devweb2021.nativosdigitales.pe/build/images/nativos/hover/nativo-francisco.png"
                }
                className="c-avatar-img"
                alt="admin@zima.pe"
              />
            </div>
            <div className="c-username">Francisco Luis</div>
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem
              header
              tag="div"
              color="light"
              className="text-center"
            >
              <strong>Cuenta</strong>
            </CDropdownItem>
            <CDropdownItem>
              <CIcon name="bi-person-circle" className="mfe-2" />
              Gestionar cuenta
            </CDropdownItem>
            <CDropdownItem onClick={logout}>
              <CIcon name="bi-power" className="mfe-2" />
              Cerrar sesión
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        {/* <div className="d-md-down-none mfe-2 c-subheader-nav">
          <CLink className="c-subheader-nav-link" href="/settings">
            <CIcon name="cil-settings" alt="Settings" />
            &nbsp;Configuración
          </CLink>
        </div> */}
      </CSubheader>
    </CHeader>
  );
};

export default Header;
