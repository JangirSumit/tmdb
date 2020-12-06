import {
  LOAD_DATA,
  LOAD_MENU_DATA,
  SHOW_HOME_SCREEN,
  SHOW_SETTINGS,
  INITIAL_LOAD,
  MOBILE_MENU_CLICK,
  SELECTED_MENU,
  HANDLE_SCROLL,
} from "../constants";

const initialState = {
  data: {},
  g: [],
  langs: [],
  showMobileMenu: false,
  resultText: "",
  selectedMenu: "",
  page: 0,
  showSettings: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_HOME_SCREEN:
      return {
        ...state,
        showSettings: false,
        showMobileMenu: false,
      };
    case SHOW_SETTINGS:
      return {
        ...state,
        showSettings: true,
        showMobileMenu: false,
      };
    case LOAD_DATA:
      return {
        ...state,
        data: action.payload,
        page: action.page,
        total_pages: action.payload.total_pages,
        resultText: "Search Results",
        selectedMenu: "",
      };
    case LOAD_MENU_DATA:
      return {
        ...state,
        data: action.payload,
        page: action.page,
        total_pages: action.payload.total_pages,
        resultText: action.resultText,
        showMobileMenu: false,
      };
    case INITIAL_LOAD:
      return {
        ...state,
        g: action.payload.g,
        langs: action.payload.langs,
        countries: action.payload.countries,
      };
    case MOBILE_MENU_CLICK:
      return {
        ...state,
        showMobileMenu: !state.showMobileMenu,
      };
    case SELECTED_MENU:
      return {
        ...state,
        selectedMenu: action.payload,
      };
    case HANDLE_SCROLL:
      return {
        ...state,
        showMobileMenu: false,
      };
    default:
      return state;
  }
};

export default reducer;
