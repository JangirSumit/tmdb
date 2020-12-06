import {
  LOAD_DATA,
  LOAD_MENU_DATA,
  MOBILE_MENU_CLICK,
  SHOW_HOME_SCREEN,
  SHOW_SETTINGS,
  INITIAL_LOAD,
  SELECTED_MENU,
  HANDLE_SCROLL,
} from "../constants";

export const showHomeScreen = () => {
  return {
    type: SHOW_HOME_SCREEN,
  };
};

export const showSettings = () => {
  return {
    type: SHOW_SETTINGS,
  };
};

export const mobileMenuClick = (data) => {
  return {
    type: MOBILE_MENU_CLICK,
    payload: data,
  };
};

export const loadDataSuccess = (data, page) => {
  return {
    type: LOAD_DATA,
    payload: data,
    page: page,
  };
};

export const loadMenuDataSuccess = (data, page, resultText) => {
  return {
    type: LOAD_MENU_DATA,
    payload: data,
    page,
    resultText,
  };
};

export const initialLoadSuccess = (g, langs, countries) => {
  return {
    type: INITIAL_LOAD,
    payload: {
      g,
      langs,
      countries,
    },
  };
};

export const selectedMenuClick = (data) => {
  return {
    type: SELECTED_MENU,
    payload: data,
  };
};

export const handleScroll = () => {
  return {
    type: HANDLE_SCROLL,
  };
};

export const loadData = (page) => {
  return (dispatch) => {
    let lang = window.localStorage.getItem("lang") || "en-US";
    let url = `https://api.themoviedb.org/3/search/movie?api_key=c98d68ce201dd1845ce26a43f4f9d9d7&page=${page}&language=${lang}&query=${
      document.getElementById("search_text").value
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadDataSuccess(data, page));
      });
  };
};

export const loadMenuData = (page = 1, data) => {
  return async (dispatch) => {
    let lang = window.localStorage.getItem("lang") || "en-US";
    let url = `https://api.themoviedb.org/3${data.api}&api_key=c98d68ce201dd1845ce26a43f4f9d9d7&page=${page}&language=${lang}`;
    let result = fetch(url);
    let d = await (await result).json();
    dispatch(loadMenuDataSuccess(d, page, data.lebel));
  };
};

export const initialLoad = () => {
  return async (dispatch) => {
    let genres_r = fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=c98d68ce201dd1845ce26a43f4f9d9d7&language=en-US"
    );
    let languages_r = fetch(
      "https://api.themoviedb.org/3/configuration/languages?api_key=c98d68ce201dd1845ce26a43f4f9d9d7"
    );
    let countries_r = fetch(
      "https://api.themoviedb.org/3/configuration/countries?api_key=c98d68ce201dd1845ce26a43f4f9d9d7"
    );

    let g = await (await genres_r).json();
    let langs = await (await languages_r).json();
    let countries = await (await countries_r).json();

    dispatch(initialLoadSuccess(g, langs, countries));
  };
};
