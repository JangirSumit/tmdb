import React, { useEffect } from "react";
import debounce from "./common/debounce";
import ItemTile from "./components/itemTile";
import menuIcon from "./content/burger.png";
import MobileMenu from "./components/mobileMenu";
import Settings from "./components/settings";
import "./App.css";
import {
  loadData,
  initialLoad,
  loadMenuData,
  mobileMenuClick,
  selectedMenuClick,
  handleScroll,
} from "./actions";
import { connect } from "react-redux";

function App(props) {
  function onMobileMenuItemClick(data) {
    props.selectedMenuClick(data);
    props.loadMenuData(1, data);
  }

  function onPrevClick() {
    let currentPage = props.page;
    if (currentPage > 1) {
      if (!props.selectedMenu) props.loadData(--currentPage);
      else props.loadMenuData(--currentPage, props.selectedMenu);
    }
  }

  function onNextClick() {
    let currentPage = props.page;
    let total_pages = props.total_pages;
    if (currentPage > 0 && currentPage < total_pages)
      if (!props.selectedMenu) props.loadData(++currentPage);
      else props.loadMenuData(++currentPage, props.selectedMenu);
  }

  useEffect(() => {
    window.addEventListener("scroll", props.handleScroll);
    props.initialLoad();
    return () => {
      window.removeEventListener("scroll", props.handleScroll);
    };
  }, []);

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
          onClick={() => props.mobileMenuClick()}
        />
      </header>
      {props.showSettings ? (
        <Settings langs={props.langs} countries={props.countries} />
      ) : (
        <>
          <div className="search_bar">
            <section className="search">
              <div className="sub_media">
                <input
                  id="search_text"
                  type="text"
                  placeholder="Search for a movie, tv show, person..."
                  className="k-input"
                  onKeyUp={() => debounce(() => props.loadData(1), 100)()}
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
                  fontWeight: "bold",
                }}
              >
                {props.data?.results?.length ? props.resultText : ""}
              </span>
            </div>
            <div className="results flex">
              {props.data?.results?.length
                ? props.data.results.map((d) => (
                    <ItemTile
                      key={d.id}
                      data={d}
                      g={props.g}
                      langs={props.langs}
                    />
                  ))
                : ""}
            </div>
            <div style={{ paddingTop: "10px", marginBottom: "60px" }}>
              <span
                style={{
                  paddingTop: "10px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {props.data && props.data?.results
                  ? "Total Results: " + props.data?.total_results + " | "
                  : ""}{" "}
              </span>
              <small>
                {props.data?.page
                  ? "Total Pages " + props.data?.total_pages
                  : ""}
              </small>
              <small>
                {props.data?.page ? " | Page " + props.data?.page : ""}
              </small>
            </div>
          </section>
          <>
            {props.data && props.data?.total_pages > 1 ? (
              <section className="pagination">
                <img
                  className="prev-page"
                  onClick={(event) => onPrevClick(event)}
                  alt=""
                  src="https://img.icons8.com/flat_round/64/000000/circled-left-2--v1.png"
                />
                <img
                  className="next-page"
                  onClick={(event) => onNextClick(event)}
                  alt=""
                  src="https://img.icons8.com/flat_round/64/000000/circled-right-2--v1.png"
                />
              </section>
            ) : (
              ""
            )}
          </>
        </>
      )}
      {props.showMobileMenu && (
        <MobileMenu
          onMobileMenuItemClick={(event) => onMobileMenuItemClick(event)}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: (page) => dispatch(loadData(page)),
    initialLoad: () => dispatch(initialLoad()),
    loadMenuData: (page, data) => dispatch(loadMenuData(page, data)),
    mobileMenuClick: () => dispatch(mobileMenuClick()),
    selectedMenuClick: () => dispatch(selectedMenuClick()),
    handleScroll: () => dispatch(handleScroll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
