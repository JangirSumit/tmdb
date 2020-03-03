import React, { Component } from "react";
import debounce from "./common/debounce";
import logo from "./logo.svg";
import ItemTile from "./components/itemTile";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {},
      g:[],
      langs:[]
    };
  }

  async loadData() {
    let url =
      "https://api.themoviedb.org/3/search/movie?api_key=c98d68ce201dd1845ce26a43f4f9d9d7&language=en-US&query=" +
      document.getElementById("search_text").value;
    let data = fetch(url);
    let d = await (await data).json();
      this.setState({
        data: d
      });
  }

  onKeyUp = debounce(event => {
    this.loadData();
  }, 400);

  async componentDidMount(){
    let genres = fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c98d68ce201dd1845ce26a43f4f9d9d7&language=en-US");
    let languages = fetch("https://api.themoviedb.org/3/configuration/languages?api_key=c98d68ce201dd1845ce26a43f4f9d9d7");

    let g = await (await genres).json();
    let langs = await (await languages).json()

    this.setState({
      g:g,
      langs:langs
    });
  }

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
          <div style={{paddingTop:"10px"}}>
            <span style={{paddingTop:"10px",fontSize:"18px",fontWeight:"bold"}}>{this.state.data && this.state.data.results && "Total Results: " + this.state.data.total_results+ " | "} </span>
            <small>{this.state.data.page ? "Total Pages "+this.state.data.total_pages :""}</small>
            <small>{this.state.data.page ? " | Page "+this.state.data.page :""}</small>
            </div>
          <div className="results flex">
            {this.state.data &&
              this.state.data.results && this.state.data.results.length &&
              this.state.data.results.map(d => <ItemTile key={d.id} data={d} g={this.state.g} langs={this.state.langs}/>)}
          </div>
        </section>
        <section className="footer">
                Assumption : Showing only Page 1
              </section>      
      </div>
    );
  }
}

export default App;
