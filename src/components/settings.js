import React, { Component } from "react";

class Settings extends Component {
  onHomeClick(event) {
    this.props.onHomeClick();
  }
  render() {
    return (
      <div className="settings-page-wrapper">
        <div className="nav-bar">
          <span
            className="home-span"
            onClick={event => this.onHomeClick(event)}
          >
            Home
          </span>{" "}
          > <small>Settings</small>
        </div>
        <h2>Settings</h2>
        <p>Select Language</p>
        <select id="language">
          {this.props.langs.map(l => {
            return <option value={l.iso_639_1}>{l.english_name}</option>;
          })}
        </select>
        <p>Select Country</p>
        <select id="country">
          {this.props.countries.map(l => {
            return <option value={l.iso_3166_1}>{l.english_name}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default Settings;
