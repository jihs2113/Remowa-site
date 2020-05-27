import React, { Component } from "react";
import NavNew from "./Menu/NavNew";
import NavLuggage from "./Menu/NavLuggage";
import NavAccessories from "./Menu/NavAccessories";
import NavGifts from "./Menu/NavGifts";
import NavServices from "./Menu/NavServices";
import "./Nav.scss";

let navMenu = "";

class Nav extends Component {
  state = {
    component: "",
    checked: false,
    component: "",
    recheked: "",
    menuState: "",
  };

  checkedMenu = (e) => {
    this.setState({ checked: true, menuState: Number(e.target.id) }, () =>
      console.log(
        "checked",
        this.state.checked,
        "menuState",
        this.state.menuState
      )
    );
  };

  showMenu = () => {
    if (this.state.menuState === 0) {
      return navMenu;
    } else if (this.state.menuState === 1) {
      this.setState({ component: <NavLuggage /> }, () =>
        console.log(this.state.component)
      );
    }
  };

  outMenu = () => {
    this.setState({ checked: true });
  };

  render() {
    console.log(navMenu);
    return (
      <div className="Nav">
        <div className="Nav-box">
          <ul>
            <li
              id="0"
              className="NEW-btn"
              onMouseEnter={this.checkedMenu}
              // onMouseOut={this.outMenu}
            >
              NEW
            </li>
            <li
              id="1"
              className="LUGGAGE-btn"
              onMouseEnter={this.checkedMenu}
              // onMouseOut={this.outMenu}
            >
              LUGGAGE
            </li>
            <li
              id="2"
              className="ACCESSORIES-btn"
              // onMouseOver={this.showMenu}
              // onMouseOut={this.outMenu}
            >
              ACCESSORIES
            </li>
            <li
              id="3"
              className="GIFTS-btn"
              // onMouseOver={this.showMenu}
              // onMouseOut={this.outMenu}
            >
              GIFTS
            </li>
            <li
              id="4"
              className="SERVICES-btn"
              // onMouseOver={this.showMenu}
              // onMouseOut={this.outMenu}
            >
              SERVICES
            </li>
            <li className="CUSTOMISE-btn">CUSTOMISE</li>
          </ul>
        </div>
        {this.state.checked ? this.showMenu : this.checkedMenu}
      </div>
    );
  }
}

export default Nav;
