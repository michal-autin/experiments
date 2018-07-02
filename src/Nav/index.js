import React, { Component } from 'react'
import styled, { cx } from 'react-emotion'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const MENU_WIDTH = '100vw'

const NavStyled = styled('div')`
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  grid-gap: 10px;
  grid-auto-rows: 50px;

  background-color: black;
  color: white;

  .logo {
  }

  .menuitems {
    display: grid;
    grid-template-columns: repeat(6, 100px);
    justify-content: end;
    text-align: right;

    ul {
      list-style: none;
      marggin: 0;
      padding: 0;
      grid-column: span 6;
    }

    li {
      display: inline-block;
      padding: 0 20px 0 0;
    }
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    :hover {
      text-decoration: none;
    }
  }

  .menuitem {
    font-size: 10px;
    color: yellow;
  }

  .active {
  }

  .menubutton {
    display: none;
    margin-right: 15px;
    justify-self: end;
  }

  .menuitem.menu_button--close {
    display: none;
  }

  @media (max-width: 599px) {
    .menuitem.menu_button--close {
      display: block;
      cursor: pointer;
      justify-self: right;
    }
  
    #nav.open {
      transform: translateX(-${MENU_WIDTH});
    }

    .menuitems {
      transition: transform 0.2s ease-in-out;
      display: block;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 100vw;
      width: ${MENU_WIDTH};
      background: rgba(100, 100, 100, 1);
      ul {
        margin-top: 0;
        display: grid;
        grid-template-rows: 50px repeat(6, 100px);
        align-items: center;
        justify-items: center;
      }

      a {
        font-size: 2em;
        color: red;
      }

      li {
        cursor: pointer;
        color: red;
      }
    }

    .menubutton {
      display: block;
    }
  }

  .toggle {
    transition: transform 0.3 linear;
    color: green;
  }

  .toggle.open {
    z-index: -100;
  }
`
class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  openMenu = () => {
    console.log('onClick: openMenu')
    this.setState({
      open: true,
    })
  }

  closeMenu = () => {
    console.log('onClick: closeMenu')
    this.setState({
      open: false,
    })
  }

  render() {
    var toggleClasses = cx({
      toggle: true,
      open: this.state.open,
    })
    return (
      <NavStyled>
        <div className="logo">LOGO</div>
        <div className={cx({menuitems: true, open: this.state.open})} id="nav" role="navigation">
          <ul>
            <li className="menuitem menu_button--close" onClick={this.closeMenu}>
              <FontAwesomeIcon icon={faTimes} size="3x" />
            </li>
            {this.props.menuItems.map(item => (
              <li className="menuitem" key={item.title}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="menubutton">
          <a className={toggleClasses} href="#nav" onClick={this.openMenu}>
            <FontAwesomeIcon icon={faBars} id="btnMenu" size="2x" />
          </a>
        </div>
      </NavStyled>
    )
  }
}

Nav.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Nav
