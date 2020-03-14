import React, { Component } from "react";

class Settings extends Component {
  onHomeClick(event) {
    this.props.onHomeClick();
  }

  onLangChange(event) {
    window.localStorage.setItem("lang", event.target.value);
  }

  onCountryChange(event) {
    window.localStorage.setItem("country", event.target.value);
  }

  render() {
    let lang = window.localStorage.getItem("lang");
    let country = window.localStorage.getItem("country");

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
        <select
          id="language"
          onChange={event => this.onLangChange(event)}
          value={lang}
        >
          {this.props.langs.map(l => {
            return (
              <option key={l.iso_639_1} value={l.iso_639_1}>
                {l.english_name}
              </option>
            );
          })}
        </select>
        <p>Select Country</p>
        <select
          id="country"
          onChange={event => this.onCountryChange(event)}
          value={country}
        >
          {this.props.countries.map(l => {
            return (
              <option key={l.iso_3166_1} value={l.iso_3166_1}>
                {l.english_name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Settings;
