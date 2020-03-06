import React, { Component } from "react";
import debounce from "./common/debounce";
import ItemTile from "./components/itemTile";
import menuIcon from "./content/burger.png";
import MobileMenu from "./components/mobileMenu";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {},
      g: [],
      langs: [],
      showMobileMenu: false,
      resultText: "",
      selectedMenu: ""
    };
  }

  async loadData(page) {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=c98d68ce201dd1845ce26a43f4f9d9d7&page=${page}&language=en-US&query=${
      document.getElementById("search_text").value
    }`;
    let data = fetch(url);
    let d = await (await data).json();
    this.setState({
      data: d,
      page: page,
      total_pages: d.total_pages,
      resultText: "Search Results",
      selectedMenu: ""
    });
  }

  onKeyUp = debounce(event => {
    this.loadData(1);
  }, 400);

  async componentDidMount() {
    let genres_r = fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=c98d68ce201dd1845ce26a43f4f9d9d7&language=en-US"
    );
    let languages_r = fetch(
      "https://api.themoviedb.org/3/configuration/languages?api_key=c98d68ce201dd1845ce26a43f4f9d9d7"
    );

    //let clientDetails_r = fetch("http://ip-api.com/json");

    let g = await (await genres_r).json();
    let langs = await (await languages_r).json();
    //let clientDetails = await (await clientDetails_r).json();

    this.setState({
      g: g,
      langs: langs
      //clientDetails: clientDetails
    });
  }

  async onMobileMenuItemClick(data) {
    this.setState({ selectedMenu: data });
    await this.loadMenuData(1, data.api, data.label);
  }

  async onPrevClick() {
    let currentPage = this.state.page;
    if (currentPage > 1) {
      if (!this.state.selectedMenu) await this.loadData(--currentPage);
      else
        this.loadMenuData(
          --currentPage,
          this.state.selectedMenu.api,
          this.state.selectedMenu.label
        );
    }
  }

  async onNextClick() {
    let currentPage = this.state.page;
    let total_pages = this.state.total_pages;
    if (currentPage > 0 && currentPage < total_pages)
      if (!this.state.selectedMenu) await this.loadData(++currentPage);
      else
        this.loadMenuData(
          ++currentPage,
          this.state.selectedMenu.api,
          this.state.selectedMenu.label
        );
  }

  async loadMenuData(page = 1, api, resultText) {
    let url = `https://api.themoviedb.org/3${api}&api_key=c98d68ce201dd1845ce26a43f4f9d9d7&page=${page}&language=en-US`;
    let data = fetch(url);
    let d = await (await data).json();
    this.setState({
      data: d,
      page: page,
      total_pages: d.total_pages,
      resultText: resultText,
      showMobileMenu: false
    });
  }

  async onMobileMenuClick() {
    this.setState({ showMobileMenu: !this.state.showMobileMenu });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
            className="App-logo"
            alt="logo"
          />
          <div className="title">Community built movie and TV database</div>
          <img
            src={menuIcon}
            alt="menu"
            className="burger-menu"
            onClick={event => this.onMobileMenuClick(event)}
          />
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
          <div style={{ paddingTop: "10px" }}>
            <span
              style={{
                paddingTop: "10px",
                fontSize: "18px",
                fontWeight: "bold"
              }}
            >
              {this.state.data &&
              this.state.data.results &&
              this.state.data.results.length
                ? this.state.resultText
                : ""}
            </span>
          </div>
          <div className="results flex">
            {this.state.data &&
            this.state.data.results &&
            this.state.data.results.length
              ? this.state.data.results.map(d => (
                  <ItemTile
                    key={d.id}
                    data={d}
                    g={this.state.g}
                    langs={this.state.langs}
                  />
                ))
              : ""}
          </div>
          <div style={{ paddingTop: "10px", marginBottom: "60px" }}>
            <span
              style={{
                paddingTop: "10px",
                fontSize: "18px",
                fontWeight: "bold"
              }}
            >
              {this.state.data && this.state.data.results
                ? "Total Results: " + this.state.data.total_results + " | "
                : ""}{" "}
            </span>
            <small>
              {this.state.data.page
                ? "Total Pages " + this.state.data.total_pages
                : ""}
            </small>
            <small>
              {this.state.data.page ? " | Page " + this.state.data.page : ""}
            </small>
          </div>
        </section>
        {this.state.data && this.state.data.total_pages > 1 ? (
          <section className="pagination">
            <img
              className="prev-page"
              onClick={event => this.onPrevClick(event)}
              alt=""
              src="https://img.icons8.com/flat_round/64/000000/circled-left-2--v1.png"
            />
            <img
              className="next-page"
              onClick={event => this.onNextClick(event)}
              alt=""
              src="https://img.icons8.com/flat_round/64/000000/circled-right-2--v1.png"
            />
          </section>
        ) : (
          ""
        )}
        {this.state.showMobileMenu ? (
          <MobileMenu
            onMobileMenuItemClick={event => this.onMobileMenuItemClick(event)}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
