import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavStyled = styled('div')`
  display: grid;
  grid-template-columns: 100px repeat(7, 1fr);
  align-items: center;
  grid-gap: 10px;
  grid-auto-rows: 50px;
  padding-top: 0px;

  background-color: black;
  color: white;
  font-size: 12px;

  .logo {
  }
  .menuitem {
    align: middle;
    display: none;
  }
  .menubutton {
    margin-right: 15px;
    justify-self: end;
    grid-column: last;
  }
`

const Nav = ({ menuItems }) => (
  <NavStyled>
    <div className="logo">LOGO</div>
    {menuItems.map(item => (
      <div className="menuitem" key={item.title}>
        {item.title}
      </div>
    ))}
    <div className="menubutton">
      <FontAwesomeIcon icon={faBars} size="2x" />
    </div>
  </NavStyled>
)

Nav.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Nav
