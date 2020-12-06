import React from "react";
import { showHomeScreen } from "../actions";
import { useDispatch } from "react-redux";

const Settings = function (props) {
  const dispatch = useDispatch();

  function onLangChange(event) {
    window.localStorage.setItem("lang", event.target.value);
  }

  function onCountryChange(event) {
    window.localStorage.setItem("country", event.target.value);
  }

  let lang = window.localStorage.getItem("lang") || "en";
  let country = window.localStorage.getItem("country") || "IN";

  return (
    <div className="settings-page-wrapper">
      <div className="nav-bar">
        <span className="home-span" onClick={() => dispatch(showHomeScreen())}>
          Home
        </span>{" "}
        {">"} <small>Settings</small>
      </div>
      <h2>Settings</h2>
      <p>Select Language</p>
      <select
        id="language"
        onChange={(event) => onLangChange(event)}
        defaultValue={lang}
      >
        {props.langs.map((l) => {
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
        onChange={(event) => onCountryChange(event)}
        defaultValue={country}
      >
        {props.countries.map((l) => {
          return (
            <option key={l.iso_3166_1} value={l.iso_3166_1}>
              {l.english_name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Settings;
