import React, { Component } from "react";
import debounce from "./common/debounce";
import logo from "./logo.svg";
import ItemTile from "./components/itemTile";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {}
    };
  }

  loadData() {
    let url =
      "https://api.themoviedb.org/3/search/movie?api_key=c98d68ce201dd1845ce26a43f4f9d9d7&language=en-US&query=" +
      document.getElementById("search_text").value;

    var self = this;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(d => {
        self.setState({
          data: d.results
        });
      })
      .catch(error => {
        console.log("Error : " + error);
      });
  }

  onKeyUp = debounce(event => {
    this.loadData();
  }, 400);

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
              <input
                id="search_text"
                type="text"
                placeholder="Search for a movie, tv show, person..."
                className="k-input"
                onKeyUp={event => this.onKeyUp(event)}
              />
            </div>
          </section>
        </div>
        <section className="content">
          <div className="results flex">
            {this.state.data &&
              this.state.data.length &&
              this.state.data.map(d => <ItemTile key={d.id} data={d} />)}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
