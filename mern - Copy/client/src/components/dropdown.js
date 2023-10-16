import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="dropdown">
        <button onClick={this.toggleDropdown} className="dropdown-button">
          {isOpen ? 'Close' : 'Collections'}
        </button>
        {isOpen && (
          <ul className="dropdown-list">
            <li className="menu-item">
                <NavLink className="nav-link" to="/bin">Bin</NavLink>
            </li>
            <li className="menu-item">
                <NavLink className="nav-link" to="/color">Color</NavLink>
            </li>
            <li className="menu-item">
                <NavLink className="nav-link" to="/composition">Composition</NavLink>
            </li>
            <li className="menu-item">
                <NavLink className="nav-link" to="/mass">Mass</NavLink>
            </li>
            <li className="menu-item">
                <NavLink className="nav-link" to="/pressure">Pressure</NavLink>
            </li>
            <li className="menu-item">
                <NavLink className="nav-link" to="/rainRate">Rain Rate</NavLink>
            </li>
            <li className="menu-item">
                <NavLink className="nav-link" to="/randomNumber">Random Number</NavLink>
            </li>
            <li className="menu-item">
                <NavLink className="nav-link" to="/randomChar">Random Char</NavLink>
            </li>
            <li className="menu-item">
                <NavLink className="nav-link" to="/temperature">Temperature</NavLink>
            </li>
            <li className="menu-item">
                <NavLink className="nav-link" to="/time">Time</NavLink>
            </li>
          </ul>
        )}
      </div>
    );
  }
}

export default DropdownMenu;
