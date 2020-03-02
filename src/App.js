import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ paddingLeft: "10px" }}
          />
          <div
            style={{
              paddingLeft: "10px",
              textAlign: "left",
              paddingRight: "10px"
            }}
          >
            Community built movie and TV database
          </div>
        </header>
        <div className="search_bar">
          <section className="search">
            <div className="sub_media">
              <form id="search_form" method="get">
                <span role="presentation">
                  <input
                    dir="auto"
                    id="search_text"
                    name="query"
                    type="text"
                    tabIndex="0"
                    placeholder="Search for a movie, tv show, person..."
                    className="k-input"
                    role="textbox"
                  />
                </span>
              </form>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
