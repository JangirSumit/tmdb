import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("should render initial screen with logo and title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Community built movie and TV database/i);
  expect(linkElement).toBeInTheDocument();
});

test("should render movie tiles by searching in text box", () => {
  const d = {
    page: 1,
    total_results: 1,
    total_pages: 1,
    results: [
      {
        popularity: 0.984,
        vote_count: 4,
        video: false,
        poster_path: "/zlOvO4fgun0b5B7AxPnPVV2TCVt.jpg",
        id: 496324,
        adult: false,
        backdrop_path: "/mp7ryCvT7zCmDH2VcfME3OHF9Z9.jpg",
        original_language: "pa",
        original_title: "ਸੱਜਣ  ਸਿੰਘ  ਰੰਗਰੂਟ",
        genre_ids: [18, 10752],
        title: "Sajjan Singh Rangroot",
        vote_average: 5.8,
        overview:
          "The film SAJJAN SINGH RANGROOT is based on true story about the Sikh Regiment, serving in the British Indian Army, during World War I. The movie depicts one such war hero Sajjan Singh, who is an officer in the British Army and served on the western front during the WW1 against Germany.",
        release_date: "2018-03-23"
      }
    ]
  };
  const g = {
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 10770, name: "TV Movie" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
      { id: 37, name: "Western" }
    ]
  };
  const langs = [
    { iso_639_1: "pa", english_name: "Punjabi", name: "ਪੰਜਾਬੀ" },
    { iso_639_1: "en", english_name: "English", name: "English" }
  ];
  const { getByText } = render(
    <ItemTile data={d.results[0]} g={g} langs={langs} />
  );
  const linkElement = getByText(/Sajjan Singh Rangroot/g);
  expect(linkElement).toBeInTheDocument();
});
